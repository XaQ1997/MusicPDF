package com.example.musicpdf

class MusicalCharContainer {
    //Nuty mają mieć id z zakresu 0-16
    val notesContainer= mapOf<UByte, MusicalNote>(
        0u.toUByte() to MusicalNote(0u.toUByte(), "Cała nuta", 1.0, img="img/whole_note.svg"),
        1u.toUByte() to MusicalNote(1u.toUByte(), "Półnuta", 0.5, img="img/half_note.svg"),
        2u.toUByte() to MusicalNote(2u.toUByte(), "Ćwierćnuta", 0.25, img="img/quarter_note.svg"),
        3u.toUByte() to MusicalNote(3u.toUByte(), "Ósemka", 1.0/8, img="img/8note.svg"),
        4u.toUByte() to MusicalNote(4u.toUByte(), "Szesnastka", 1.0/16, img="img/16note.svg"),
        5u.toUByte() to MusicalNote(5u.toUByte(), "Trzydziestkadwójka", 1.0/32, img="img/32note.svg"),
        6u.toUByte() to MusicalNote(6u.toUByte(), "Sześdziesiątkaczwórka", 1.0/64, img="img/64note.svg"),
        7u.toUByte() to MusicalNote(7u.toUByte(), "Stodwudziestkaósemka", 1.0/128, img="img/128note.svg")
    )

    //Główny kontener
    val mainContainer=mapOf<String, Map<UByte, MusicalChar>>(
        "Nuty" to notesContainer
    )
}