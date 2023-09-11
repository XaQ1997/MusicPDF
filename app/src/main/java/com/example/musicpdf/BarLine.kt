package com.example.musicpdf

class BarLine(_id:UByte, name:String):MusicalChar(_id, "Kreska taktowa") {
    var barLineName:String=""

    init {
        barLineName=name
    }
}