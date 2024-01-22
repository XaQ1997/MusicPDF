const fs = require('fs');
const path = require('path');
const axios=require('axios');

const FileHandler=(pdfDirectory)=> {
  const filesInDirectory = fs.readdirSync(pdfDirectory);

    const pdfFiles = filesInDirectory
      .filter(file => {
        const filePath = path.join(pdfDirectory, file);
        return fs.statSync(filePath).isFile() && file.endsWith('.pdf');
      })
      .map(file => {
        return {
          name: file
        };
      });
//    console.log(filesInDirectory);
//    //const formData = new FormData();
//   filesInDirectory.forEach((file)=> {
//        const filepath = path.join(pdfDirectory, file);
//            const fileBuffer=fs.readFileSync(filepath);
//            formData.append("files", new Blob([fileBuffer]), file);
//       });
//        try
//        {
//            axios.post('http://localhost:8000/upload/', formData);
//            console.log("Files uploaded");
//        } catch(error){
//            console.log("Failed uploading files", error.message);
//        }

//        return {title: file, path: filepath};
//    })

  return pdfFiles;
}

module.exports=FileHandler;