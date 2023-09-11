package com.example.musicpdf

import org.junit.Assert.assertEquals
import org.junit.Test

class MusicalKeyTest {
    var testObj=MusicalKey(32u.toUByte(), "Testowy klucz", 'G', 0)

    @Test
    fun idTest()
    {
        assertEquals(32u.toUByte(), testObj.id)
    }

    @Test
    fun charNameTest()
    {
        assertEquals("Klucz", testObj.charName)
    }

    @Test
    fun keyNameTest()
    {
        assertEquals("Testowy klucz", testObj.keyName)
    }

    @Test
    fun typeTest()
    {
        assertEquals('G', testObj.type)
    }

    @Test
    fun heightTest()
    {
        assertEquals(0.toByte(), testObj.height)
    }
}