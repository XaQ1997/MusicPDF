package com.example.musicpdf

import org.junit.Assert.assertEquals
import org.junit.Test

class BarLineTest {
    val testObj=BarLine(48u.toUByte(), "Testowa kreska taktowa", "~/end_bar_line.png")

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

    @Test
    fun imageTest()
    {
        assertEquals("~/end_bar_line.png", testObj.image)
    }
}