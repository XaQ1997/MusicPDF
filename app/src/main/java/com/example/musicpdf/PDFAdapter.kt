package com.example.musicpdf

import PdfFile
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import androidx.appcompat.widget.AppCompatTextView

class PDFAdapter(private var pdfList: MutableList<PdfFile>) : RecyclerView.Adapter<PDFAdapter.PDFHolder>() {
    inner class PDFHolder(view: View) : RecyclerView.ViewHolder(view) {
        var fileNameTextView: AppCompatTextView

        init {
            fileNameTextView = AppCompatTextView(view.context)

            // Ustaw parametry i styl TextView (opcjonalnie)
            fileNameTextView.layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, // Szerokość
                ViewGroup.LayoutParams.WRAP_CONTENT // Wysokość
            )
            fileNameTextView.textSize = 16f // Rozmiar czcionki
            fileNameTextView.setTextColor(view.context.resources.getColor(R.color.black)) // Kolor tekstu
            // Dodaj więcej atrybutów stylu, jeśli są potrzebne

            // Dodaj TextView do rodzica (w tym przypadku jest to 'view' z layoutu 'item_pdf')
            val parentLayout = view.findViewById<ViewGroup>(R.id.pdf_database) // Przykładowy ID rodzica
            parentLayout.addView(fileNameTextView)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PDFHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.id.pdf_database, parent, false)
        return PDFHolder(view)
    }

    override fun onBindViewHolder(holder: PDFHolder, position: Int) {
        val item = pdfList[position]

        // Przypisz nazwę pliku do TextView w interfejsie
        holder.fileNameTextView.text = item.fileName

        // Możesz kontynuować w ten sam sposób dla innych elementów interfejsu użytkownika
    }

    override fun getItemCount(): Int {
        return pdfList.size
    }

    fun setPdfFiles(pdfFiles: List<PdfFile>) {
        pdfList = pdfFiles.toMutableList()
        notifyDataSetChanged() // Odśwież RecyclerView po zmianie danych
    }
}