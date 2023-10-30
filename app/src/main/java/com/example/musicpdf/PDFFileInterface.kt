import androidx.room.*

@Dao
interface PDFFileInterface {
    @Insert
    suspend fun insert(pdfFile: PdfFile)

    @Query("SELECT * FROM PdfFile")
    suspend fun getAllPdfFiles(): List<PdfFile>
}