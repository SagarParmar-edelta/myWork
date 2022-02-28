const promiseDemo = (fileName) => {
  console.log("file name:", fileName);
  return new Promise((resolve, reject) => {
    if(fileName === "danger.exe"){
      reject("Danger");
    }
    setTimeout(resolve, 2000);
  });
};

promiseDemo("text1.txt")
.then(() => {
    console.log("text2 executed sucessfully.")
    promiseDemo("danger.exe")
}).then(() => {
    console.log("Danger Occure!");
});

