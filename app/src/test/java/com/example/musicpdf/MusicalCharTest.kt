package com.example.musicpdf

import org.junit.Assert.assertEquals
import org.junit.Test

class MusicalCharTest {
    val testObj=MusicalChar(0u.toUByte(), "Testowy znak muzyczny")

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
}