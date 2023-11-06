package com.example.musicpdf

import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val closeButton: Button = findViewById(R.id.close_button)

        closeButton.setOnClickListener {
            finish()
        }
    }
}