package com.example.musicpdf

class MusicalNote(_id:UByte, name:String, _length:Double, _height:String="c", img:String):MusicalChar(_id, "Nuta", img) {
    var noteName:String=""
    var length:Double=0.0
    var height:String="c"

    init {
        noteName=name
        length=_length
        height=_height
    }
}