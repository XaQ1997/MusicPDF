package com.example.musicpdf

import AppDatabase
import PdfFile
import androidx.appcompat.app.AppCompatActivity
import android.os.*
import android.widget.*
import androidx.recyclerview.widget.*
import androidx.room.*
import kotlinx.coroutines.*
import java.io.*
import java.net.*

class MainActivity : AppCompatActivity() {
    private val pdfFiles: MutableList<PdfFile> = mutableListOf()
    private lateinit var adapter: PDFAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val closeButton: Button = findViewById(R.id.close_button)
        val pdfDatabase: RecyclerView = findViewById(R.id.pdf_database)
        val layoutManager = LinearLayoutManager(this)
        adapter = PDFAdapter(pdfFiles)
        pdfDatabase.layoutManager = layoutManager
        pdfDatabase.adapter = adapter

        closeButton.setOnClickListener {
            finish()
        }

        val port = 8008 // Wybierz numer portu, na którym serwer będzie nasłuchiwać

        GlobalScope.launch(Dispatchers.IO) {
            val directory = File(Environment.getExternalStorageDirectory(), "sciezka_do_folderu_z_pdfami")
            if (directory.exists() && directory.isDirectory) {
                val files = directory.listFiles { file -> file.extension == "pdf" }
                files?.forEach {
                    val pdfFile = PdfFile(fileName = it.name, filePath = it.absolutePath)
                    pdfFiles.add(pdfFile)
                }
                adapter.notifyDataSetChanged() // Aktualizuj RecyclerView na wątku głównym
            }

            // Zapisz pobrane pliki do bazy danych
            val database = Room.databaseBuilder(applicationContext, AppDatabase::class.java, "pdf-database").build()
            val interfacePDFFile = database.interfacePDFFile()

            pdfFiles.forEach { interfacePDFFile.insert(it) }
        }

        Thread {
            try {
                val serverSocket = ServerSocket(port)
                runOnUiThread {
                    println("Serwer nasłuchuje na porcie $port")
                }

                while (true) {
                    val clientSocket = serverSocket.accept()
                    runOnUiThread {
                        println("Połączenie przyjęte od: " + clientSocket.inetAddress.hostAddress)
                    }

                    // Tworzymy strumień wyjściowy, aby wysłać komunikat do klienta
                    val outputStream: OutputStream = clientSocket.getOutputStream()
                    val message = "Hello"
                    outputStream.write(message.toByteArray())

                    // Zamykamy połączenie z klientem
                    clientSocket.close()
                }
            } catch (e: IOException) {
                e.printStackTrace()
            }
        }.start()
    }
}