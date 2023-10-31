package com.example.musicpdf

import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import androidx.room.Room
import kotlinx.coroutines.*
import java.io.File

import AppDatabase
import PdfFile

import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    private val pdfFiles: MutableList<PdfFile> = mutableListOf()
    private lateinit var adapter: PDFAdapter
    private var database: AppDatabase? = null
    private var job: Job? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val pdfDirectory = File(applicationContext.filesDir, "uploads/pdf_directory")
        if (!pdfDirectory.exists()) {
            pdfDirectory.mkdirs()
        }

        val closeButton: Button = findViewById(R.id.close_button)
        val pdfWebView: WebView = findViewById(R.id.pdf_database)
        adapter = PDFAdapter(pdfFiles)

        closeButton.setOnClickListener {
            finish()
        }

        pdfWebView.settings.javaScriptEnabled = true
        pdfWebView.settings.setSupportZoom(true)
        pdfWebView.settings.builtInZoomControls = true
        pdfWebView.settings.displayZoomControls = false
        pdfWebView.webViewClient = WebViewClient() // Aby uniknąć otwierania przeglądarki zewnętrznej

        job = lifecycleScope.launch {
            try {
                database = Room.databaseBuilder(applicationContext, AppDatabase::class.java, "pdf-database")
                    .fallbackToDestructiveMigration()
                    .build()
                loadPdfFiles()
            } catch (e: Exception) {
                e.printStackTrace()
                // Obsłuż błąd tworzenia bazy danych, na przykład wyświetl błąd użytkownikowi
            }
        }
    }

    private suspend fun loadPdfFiles() {
        val pdfDirectory = File(applicationContext.filesDir, "uploads/pdf_directory")
        val files = withContext(Dispatchers.IO) {
            if (pdfDirectory.exists() && pdfDirectory.isDirectory) {
                pdfDirectory.listFiles { file -> file.extension == "pdf" }
            } else {
                emptyArray()
            }
        }

        pdfFiles.clear()
        pdfFiles.addAll(files.map { PdfFile(fileName = it.name, filePath = it.absolutePath) })

        try {
            val pdfFiles = withContext(Dispatchers.IO) {
                database?.interfacePDFFile()?.getAllPdfFiles() ?: emptyList()
            }

            withContext(Dispatchers.Main) {
                adapter.setPdfFiles(pdfFiles)
            }
        } catch (e: Exception) {
            e.printStackTrace()
            // Tutaj obsłuż wyjątek (np. wyświetl komunikat o błędzie)
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        job?.cancel() // Anulowanie korutyn związanego z aktywnością
        database?.close()
    }
}