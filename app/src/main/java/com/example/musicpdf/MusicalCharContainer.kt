package com.example.musicpdf

class MusicalCharContainer {
    //Nuty mają mieć id z zakresu 0-15
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

    //Pauzy mają mieć id z zakresu 16-31
    val pausesContainer=mapOf<UByte, MusicalPause>(
        16u.toUByte() to MusicalPause(16u.toUByte(), "Pauza całonutowa", 1.0, "img/whole_pause.svg"),
        17u.toUByte() to MusicalPause(17u.toUByte(), "Pauza półnutowa", 0.5, "img/half_pause.svg"),
        18u.toUByte() to MusicalPause(18u.toUByte(), "Pauza ćwierćnutowa", 0.25, "img/quarter_pause.svg"),
        19u.toUByte() to MusicalPause(19u.toUByte(), "Pauza ósemkowa", 1.0/8, "img/8pause.svg"),
        20u.toUByte() to MusicalPause(20u.toUByte(), "Pauza szesnastkowa", 1.0/16, "img/16pause.svg"),
        21u.toUByte() to MusicalPause(21u.toUByte(), "Pauza trzydziestkodwójkowa", 1.0/32, "img/32pause.svg"),
        22u.toUByte() to MusicalPause(22u.toUByte(), "Pauza sześdziesiątkoczwórkowa", 1.0/64, "img/64pause.svg"),
        23u.toUByte() to MusicalPause(23u.toUByte(), "Pauza stodwudziestkoósemkowa", 1.0/128, "img/128pause.svg")
    )

    //Klucze mają mieć id z zakresu 32-47
    val keysContainer= mapOf<UByte, MusicalKey>(
        32u.toUByte() to MusicalKey(32u.toUByte(), "Klucz wiolinowy", 'G', img="img/G_key.svg"),
        33u.toUByte() to MusicalKey(33u.toUByte(), "Klucz basowy", 'F', img="img/F_key.svg"),
        34u.toUByte() to MusicalKey(34u.toUByte(), "Klucz sopranowy", 'C', img="img/C_key.svg")
    )

    //Główny kontener
    val mainContainer=mapOf<String, Map<UByte, MusicalChar>>(
        "Nuty" to notesContainer,
        "Pauzy" to pausesContainer,
        "Klucze" to keysContainer
    )
}