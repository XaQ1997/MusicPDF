package com.example.musicpdf

import org.junit.Assert.assertEquals
import org.junit.Test

class MusicalNoteTest {
    val testObj=MusicalNote(0u.toUByte(), "Testowa nuta", 1.0, img="~/8note.svg")

    @Test
    fun idTest()
    {
        assertEquals(0u.toUByte(), testObj.id)
    }

    @Test
    fun charNameTest()
    {
        assertEquals("Nuta", testObj.charName)
    }

    @Test
    fun noteNameTest()
    {
        assertEquals("Testowa nuta", testObj.noteName)
    }

    @Test
    fun lengthTest()
    {
        assertEquals(1, testObj.length.toInt())
    }

    @Test
    fun heightTest()
    {
        assertEquals("c", testObj.height)
    }

    @Test
    fun imageTest()
    {
        assertEquals("~/8note.svg", testObj.image)
    }
}