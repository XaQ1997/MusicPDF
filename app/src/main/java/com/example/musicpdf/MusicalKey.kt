package com.example.musicpdf

class MusicalKey(_id:UByte, name:String, _type:Char, _height:Byte, img:String):MusicalChar(_id, "Klucz", img) {
    var keyName:String=""
    var type:Char='G'
    //Właściwość wysokość (height) określa przesunięcie klucza danego typu względem standardowego klucza danego typu, przy czym przesunięcie klucza o 1 wynosi przesunięcie klucza o połowę odległości pomiędzy liniami w pięciolinii
    var height:Byte=0

    init {
        keyName=name
        type=_type
        height=_height
    }
}