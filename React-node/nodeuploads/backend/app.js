const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

//set storage Engine
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, fileCallBack) => {
    console.log("file: ", file);
    fileCallBack(
      null,
      file.originalname.split(".")[0] +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

//Init upload
const upload = multer({
  storage: storage,
}).single("File");

const corsOption = {
  origin: "*",
};

app.post("/uploads", cors(corsOption), upload, (req, res) => {
  const singleFile = req.file;
  console.log("singleFile: ", singleFile);
  res.send(singleFile);
});

app.get("/uploads", cors(corsOption), async (req, res) => {
  const dir = "uploads";
  const files = fs.readdirSync(dir);
  console.log("files: ", files);

  const allFile = files.map((fileName) => {
    const filePath = __dirname + "/uploads/" + fileName;
    const fileContent = fs.readFileSync(filePath);
    return fileContent;
  });

  //checking each whether the file is okay
  // fs.access(fileName, fs.constants.F_OK, (error) => {
  //   console.log(`${fileName} ${error ? "does not exist" : "exist"}`);
  // });

  console.log(allFile);
  res.send("all file will be stored");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on Port`, PORT));
