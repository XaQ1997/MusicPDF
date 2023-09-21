package com.example.musicpdf

import org.junit.Assert.assertEquals
import org.junit.Test

class MusicalCharContainerTest {
    val testObj=MusicalCharContainer()

    @Test
    fun NoteBetweenContainersTest()
    {
        val notesContainerObj=testObj.notesContainer[0u.toUByte()]!!
        val mainContainerObj=testObj.mainContainer["Nuty"]!![0u.toUByte()]!!

        assertEquals(notesContainerObj.id, mainContainerObj.id)
        assertEquals(notesContainerObj.charName, mainContainerObj.charName)
    }

    @Test
    fun NoteInOwnContainerTest()
    {
        val objTest=testObj.notesContainer[4u.toUByte()]!!

        assertEquals(4u.toUByte(), objTest.id)
        assertEquals("Nuta", objTest.charName)
        assertEquals("Szesnastka", objTest.noteName)
        assertEquals(1, (16*objTest.length).toInt())
        assertEquals("c", objTest.height)
    }

    @Test
    fun PauseBetweenContainersTest()
    {
        val pausesContainerObj=testObj.pausesContainer[20u.toUByte()]!!
        val mainContainerObj=testObj.mainContainer["Pauzy"]!![20u.toUByte()]!!

        assertEquals(pausesContainerObj.id, mainContainerObj.id)
        assertEquals(pausesContainerObj.charName, mainContainerObj.charName)
    }

    @Test
    fun PauseInOwnContainerTest()
    {
        val objTest=testObj.pausesContainer[17u.toUByte()]!!

        assertEquals(17u.toUByte(), objTest.id)
        assertEquals("Pauza", objTest.charName)
        assertEquals("Pauza półnutowa", objTest.pauseName)
        assertEquals(1, (2*objTest.length).toInt())
    }

    @Test
    fun KeyBetweenContainersTest()
    {
        val keysContainerObj=testObj.keysContainer[32u.toUByte()]!!
        val mainContainerObj=testObj.mainContainer["Klucze"]!![32u.toUByte()]!!

        assertEquals(keysContainerObj.id, mainContainerObj.id)
        assertEquals(keysContainerObj.charName, mainContainerObj.charName)
    }

    @Test
    fun KeyInOwnContainerTest()
    {
        val objTest=testObj.keysContainer[34u.toUByte()]!!

        assertEquals(34u.toUByte(), objTest.id)
        assertEquals("Klucz", objTest.charName)
        assertEquals("Klucz altowy", objTest.keyName)
        assertEquals('C', objTest.type)
        assertEquals(0.toByte(), objTest.height)
    }

    @Test
    fun BarLineBetweenContainersTest()
    {
        val barLinesContainerObj=testObj.barLinesContainer[48u.toUByte()]!!
        val mainContainerObj=testObj.mainContainer["Kreski taktowe"]!![48u.toUByte()]!!

        assertEquals(barLinesContainerObj.id, mainContainerObj.id)
        assertEquals(barLinesContainerObj.charName, mainContainerObj.charName)
    }

    @Test
    fun BarLineInOwnContainerTest()
    {
        val objTest=testObj.barLinesContainer[49u.toUByte()]!!

        assertEquals(49u.toUByte(), objTest.id)
        assertEquals("Kreska taktowa", objTest.charName)
        assertEquals("Końcowa kreska taktowa", objTest.barLineName)
    }
}