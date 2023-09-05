package com.example.musicpdf

class MusicalCharContainer {
    //Nuty mają mieć id z zakresu 0-16
    val notesContainer= mapOf<UByte, MusicalNote>(
        0u.toUByte() to MusicalNote(0u.toUByte(), "Cała nuta", 1.0, img="whole_note.svg")
    )
}