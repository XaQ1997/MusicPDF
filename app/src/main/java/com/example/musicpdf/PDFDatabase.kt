import androidx.room.*

@Database(entities = [PdfFile::class], version = 1, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {
    abstract fun interfacePDFFile(): PDFFileInterface
}