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
}