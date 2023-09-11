package com.example.musicpdf

import org.junit.Assert.assertEquals
import org.junit.Test

class BarLineTest {
    val testObj=BarLine(48u.toUByte(), "Testowa kreska taktowa")

    @Test
    fun idTest()
    {
        assertEquals(48u.toUByte(), testObj.id)
    }

    @Test
    fun charNameTest()
    {
        assertEquals("Kreska taktowa", testObj.charName)
    }

    @Test
    fun barLineNameTest()
    {
        assertEquals("Testowa kreska taktowa", testObj.barLineName)
    }
}