console.log("----------- Inside fetchWithCallback.js ------------");

const fetchWithCallback = (callback) => {
  fetch("https://api.github.com/users")
    .then((response) => {
      return response.json();
    })
    .then((userDetails) => {
      console.log("------------- List of Users -------------");
      callback(userDetails.map((eachUser) =>
        console.log("id: " + eachUser.id + " => " + eachUser.login)
      ));
    })
    .catch(() => {
      console.log("There is some problem!");
    });
}
fetchWithCallback(() => {
    console.log("API is fetched!");
});