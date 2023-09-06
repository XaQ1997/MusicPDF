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
        assertEquals(notesContainerObj.image, mainContainerObj.image)
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
        assertEquals("img/16note.svg", objTest.image)
    }

    @Test
    fun PauseBetweenContainersTest()
    {
        val pausesContainerObj=testObj.pausesContainer[20u.toUByte()]!!
        val mainContainerObj=testObj.mainContainer["Pauzy"]!![20u.toUByte()]!!

        assertEquals(pausesContainerObj.id, mainContainerObj.id)
        assertEquals(pausesContainerObj.charName, mainContainerObj.charName)
        assertEquals(pausesContainerObj.image, mainContainerObj.image)
    }

    @Test
    fun PauseInOwnContainerTest()
    {
        val objTest=testObj.pausesContainer[17u.toUByte()]!!

        assertEquals(17u.toUByte(), objTest.id)
        assertEquals("Pauza", objTest.charName)
        assertEquals("Pauza półnutowa", objTest.pauseName)
        assertEquals(1, (2*objTest.length).toInt())
        assertEquals("img/half_pause.svg", objTest.image)
    }

    @Test
    fun KeyBetweenContainersTest()
    {
        val keysContainerObj=testObj.keysContainer[32u.toUByte()]!!
        val mainContainerObj=testObj.mainContainer["Klucze"]!![32u.toUByte()]!!

        assertEquals(keysContainerObj.id, mainContainerObj.id)
        assertEquals(keysContainerObj.charName, mainContainerObj.charName)
        assertEquals(keysContainerObj.image, mainContainerObj.image)
    }

    @Test
    fun KeyInOwnContainerTest()
    {
        val objTest=testObj.keysContainer[34u.toUByte()]!!

        assertEquals(34u.toUByte(), objTest.id)
        assertEquals("Klucz", objTest.charName)
        assertEquals("Klucz sopranowy", objTest.keyName)
        assertEquals('C', objTest.type)
        assertEquals(0.toByte(), objTest.height)
        assertEquals("img/C_key.svg", objTest.image)
    }
}