console.log("----------- Inside fetchWithPromise.js ------------");

const fetchWithPromises = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    fetch("https://api.github.com/users")
      .then((response) => {
        return response.json();
      })
      .then((userDetails) => {
        let temp = userDetails.map((eachUser) =>
           "id: " + eachUser.id + " => " + eachUser.login
        );
        resolve(temp);
      })
      .catch(() => {
        reject("There is some problem!");
      });
  });
};

fetchWithPromises().then((data) => {
    console.log("------------- List of Users -------------");
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
