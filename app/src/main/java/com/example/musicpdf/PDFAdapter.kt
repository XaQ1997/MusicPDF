package com.example.musicpdf

import PdfFile
import android.view.*
import androidx.recyclerview.widget.*

class PDFAdapter(private val pdfList:List<PdfFile>): RecyclerView.Adapter<PDFAdapter.PDFHolder>() {
    inner class PDFHolder(view: View):RecyclerView.ViewHolder(view){}

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PDFHolder {
        // Tworzenie widoku dla pojedynczego elementu listy i zwracanie go w instancji MyViewHolder
        val view = LayoutInflater.from(parent.context).inflate(R.layout.activity_main, parent, false)
        return PDFHolder(view)
    }

    override fun onBindViewHolder(holder: PDFHolder, position: Int) {
        // Konfiguracja elementów interfejsu użytkownika na podstawie danych w dataList
        val item = pdfList[position]
        // Przypisanie danych do elementów interfejsu użytkownika w holderze
    }

    override fun getItemCount(): Int {
        return pdfList.size
    }
}
