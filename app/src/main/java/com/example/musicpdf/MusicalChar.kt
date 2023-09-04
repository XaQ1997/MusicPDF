package com.example.musicpdf

open class MusicalChar(_id:UByte, name:String, img:String) {
    var id:UByte=0u.toUByte()
    var charName:String=""
    var image="~/"

    init {
        id=_id
        charName=name
        image=img
    }
}