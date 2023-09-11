package com.example.musicpdf

open class MusicalChar(_id:UByte, name:String) {
    var id:UByte=0u.toUByte()
    var charName:String=""

    init {
        id=_id
        charName=name
    }
}