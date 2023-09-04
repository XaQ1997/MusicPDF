package com.example.musicpdf

class MusicalPause(_id:UByte, name:String, _length:Double, img:String):MusicalChar(_id, "Pauza", img) {
    var pauseName:String=""
    var length:Double=0.0

    init {
        pauseName=name
        length=_length
    }
}