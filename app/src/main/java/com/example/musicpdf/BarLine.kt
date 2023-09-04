package com.example.musicpdf

class BarLine(_id:UByte, name:String, img:String):MusicalChar(_id, "Kreska taktowa", img) {
    var barLineName:String=""

    init {
        barLineName=name
    }
}