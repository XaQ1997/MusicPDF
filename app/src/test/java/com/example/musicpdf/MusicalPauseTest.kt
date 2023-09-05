package com.example.musicpdf

import org.junit.Assert.assertEquals
import org.junit.Test

class MusicalPauseTest {
    val testObj=MusicalPause(16u.toUByte(), "Testowa pauza", 1.0, "~/8pause.svg")

    @Test
    fun idTest()
    {
        assertEquals(16u.toUByte(), testObj.id)
    }

    @Test
    fun charNameTest()
    {
        assertEquals("Pauza", testObj.charName)
    }

    @Test
    fun pauseNameTest()
    {
        assertEquals("Testowa pauza", testObj.pauseName)
    }

    @Test
    fun lengthTest()
    {
        assertEquals(1, testObj.length.toInt())
    }

    @Test
    fun imageTest()
    {
        assertEquals("~/8pause.svg", testObj.image)
    }
}