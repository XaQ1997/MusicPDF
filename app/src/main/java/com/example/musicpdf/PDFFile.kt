import androidx.room.*

@Entity
data class PdfFile(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,
    val fileName: String,
    val filePath: String
)