package com.example.musicpdf

import android.os.Build
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val closeButton: Button = findViewById(R.id.close_button)

        val web:WebView=findViewById(R.id.pdf_database)
        web.getSettings().setJavaScriptEnabled(true)

        if (Build.VERSION.SDK_INT >= 23) {
            web.settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        }

        web.loadUrl("http://192.168.56.1:3000/index.html")

        closeButton.setOnClickListener {
            finish()
        }
    }
}