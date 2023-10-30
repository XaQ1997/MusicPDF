package com.example.musicpdf

import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.room.Room
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import java.io.File
import java.io.IOException
import java.io.OutputStream
import java.net.ServerSocket
import PdfFile
import AppDatabase

class MainActivity : AppCompatActivity() {
    private val pdfFiles: MutableList<PdfFile> = mutableListOf()
    private lateinit var adapter: PDFAdapter
    private lateinit var database: AppDatabase

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        database = Room.databaseBuilder(applicationContext, AppDatabase::class.java, "pdf-database").build()

        val pdfDirectory = File(filesDir, "pdf_directory") // Poprawna ścieżka do katalogu

        if (!pdfDirectory.exists()) {
            pdfDirectory.mkdirs()
        }

        val closeButton: Button = findViewById(R.id.close_button)
        val pdfDatabase: RecyclerView = findViewById(R.id.pdf_database)
        val layoutManager = LinearLayoutManager(this)
        adapter = PDFAdapter(pdfFiles)
        pdfDatabase.layoutManager = layoutManager
        pdfDatabase.adapter = adapter

        closeButton.setOnClickListener {
            finish()
        }

        val port = 8008

        GlobalScope.launch(Dispatchers.IO) {
            if (pdfDirectory.exists() && pdfDirectory.isDirectory) {
                val files = pdfDirectory.listFiles { file -> file.extension == "pdf" }
                files?.forEach {
                    val pdfFile = PdfFile(fileName = it.name, filePath = it.absolutePath)
                    pdfFiles.add(pdfFile)
                }

                // Aktualizuj RecyclerView na wątku głównym
                runOnUiThread {
                    adapter.notifyDataSetChanged()
                }

                // Operacje na bazie danych
                try {
                    val pdfFiles = database.interfacePDFFile().getAllPdfFiles()
                    // Aktualizuj RecyclerView i adapter na wątku głównym
                    runOnUiThread {
                        adapter.setPdfFiles(pdfFiles)
                        pdfDatabase.layoutManager = layoutManager
                        pdfDatabase.adapter = adapter
                    }
                } catch (e: Exception) {
                    e.printStackTrace()
                    // Tutaj obsłuż wyjątek (np. wyświetl komunikat o błędzie)
                }

                // Wstaw dane do bazy na wątku IO
                pdfFiles.forEach { database.interfacePDFFile().insert(it) }
            }

            Thread {
                try {
                    val serverSocket = ServerSocket(port)
                    // Wypisz informację na konsoli (UI)
                    runOnUiThread {
                        println("Serwer nasłuchuje na porcie $port")
                    }

                    while (true) {
                        val clientSocket = serverSocket.accept()
                        // Wypisz informację o połączeniu (UI)
                        runOnUiThread {
                            println("Połączenie przyjęte od: " + clientSocket.inetAddress.hostAddress)
                        }

                        val outputStream: OutputStream = clientSocket.getOutputStream()
                        val message = "Hello"
                        outputStream.write(message.toByteArray())

                        clientSocket.close()
                    }
                } catch (e: IOException) {
                    e.printStackTrace()
                }
            }.start()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        database.close() // Upewnij się, że baza danych jest zamykana podczas zamykania aplikacji
    }
}