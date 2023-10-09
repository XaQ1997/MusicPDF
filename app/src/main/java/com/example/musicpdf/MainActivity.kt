package com.example.musicpdf

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var newDocumentButton: Button = findViewById(R.id.new_document_button)
        var loadDocumentButton: Button = findViewById(R.id.load_document_button)
        var closeButton: Button = findViewById(R.id.close_button)

        newDocumentButton.setOnClickListener{
            setContentView(R.layout.activity_new_document)
        }

        closeButton.setOnClickListener{
            finish()
        }
    }
}