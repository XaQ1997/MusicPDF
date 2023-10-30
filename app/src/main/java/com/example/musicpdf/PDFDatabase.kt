import androidx.room.*

@Database(entities = [PdfFile::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun interfacePDFFile(): PDFFileInterface
}