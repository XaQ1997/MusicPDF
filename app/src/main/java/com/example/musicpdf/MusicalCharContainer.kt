package com.example.musicpdf

class MusicalCharContainer {
    //Nuty mają mieć id z zakresu 0-15
    val notesContainer= mapOf<UByte, MusicalNote>(
        0u.toUByte() to MusicalNote(0u.toUByte(), "Cała nuta", 1.0),
        1u.toUByte() to MusicalNote(1u.toUByte(), "Półnuta", 0.5),
        2u.toUByte() to MusicalNote(2u.toUByte(), "Ćwierćnuta", 0.25),
        3u.toUByte() to MusicalNote(3u.toUByte(), "Ósemka", 1.0/8),
        4u.toUByte() to MusicalNote(4u.toUByte(), "Szesnastka", 1.0/16),
        5u.toUByte() to MusicalNote(5u.toUByte(), "Trzydziestkadwójka", 1.0/32),
        6u.toUByte() to MusicalNote(6u.toUByte(), "Sześdziesiątkaczwórka", 1.0/64),
        7u.toUByte() to MusicalNote(7u.toUByte(), "Stodwudziestkaósemka", 1.0/128)
    )

    //Pauzy mają mieć id z zakresu 16-31
    val pausesContainer=mapOf<UByte, MusicalPause>(
        16u.toUByte() to MusicalPause(16u.toUByte(), "Pauza całonutowa", 1.0),
        17u.toUByte() to MusicalPause(17u.toUByte(), "Pauza półnutowa", 0.5),
        18u.toUByte() to MusicalPause(18u.toUByte(), "Pauza ćwierćnutowa", 0.25),
        19u.toUByte() to MusicalPause(19u.toUByte(), "Pauza ósemkowa", 1.0/8),
        20u.toUByte() to MusicalPause(20u.toUByte(), "Pauza szesnastkowa", 1.0/16),
        21u.toUByte() to MusicalPause(21u.toUByte(), "Pauza trzydziestkodwójkowa", 1.0/32),
        22u.toUByte() to MusicalPause(22u.toUByte(), "Pauza sześdziesiątkoczwórkowa", 1.0/64),
        23u.toUByte() to MusicalPause(23u.toUByte(), "Pauza stodwudziestkoósemkowa", 1.0/128)
    )

    //Klucze mają mieć id z zakresu 32-47
    val keysContainer= mapOf<UByte, MusicalKey>(
        32u.toUByte() to MusicalKey(32u.toUByte(), "Klucz wiolinowy", 'G'),
        33u.toUByte() to MusicalKey(33u.toUByte(), "Klucz basowy", 'F'),
        34u.toUByte() to MusicalKey(34u.toUByte(), "Klucz sopranowy", 'C')
    )

    //Kreski taktowe mają mieć id z zakresu 48-63
    val barLinesContainer= mapOf<UByte, BarLine>(
        48u.toUByte() to BarLine(48u.toUByte(), "Pojedyncza kreska taktowa"),
        49u.toUByte() to BarLine(49u.toUByte(), "Końcowa kreska taktowa")
    )

    //Główny kontener
    val mainContainer=mapOf<String, Map<UByte, MusicalChar>>(
        "Nuty" to notesContainer,
        "Pauzy" to pausesContainer,
        "Klucze" to keysContainer,
        "Kreski taktowe" to barLinesContainer
    )
}