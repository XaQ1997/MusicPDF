package com.example.musicpdf

import org.junit.Assert.assertEquals
import org.junit.Test

class MusicalCharTest {
    val testObj=MusicalChar(0u.toUByte(), "Testowy znak muzyczny", "~/8note.svg")

    @Test
    fun idTest()
    {
        assertEquals(0u.toUByte(), testObj.id)
    }

    @Test
    fun nameTest()
    {
        assertEquals("Testowy znak muzyczny", testObj.charName)
    }

    @Test
    fun imageTest()
    {
        assertEquals("~/8note.svg", testObj.image)
    }
}