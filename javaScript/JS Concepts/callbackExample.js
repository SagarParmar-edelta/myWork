function fetchAFile(fileName, callback){
    console.log("file name:"+ fileName);
    setTimeout(callback, 2000);
}

fetchAFile("text.txt", function () {
    console.log("file fatched");
});