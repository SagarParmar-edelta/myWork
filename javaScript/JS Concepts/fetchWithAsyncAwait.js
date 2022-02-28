console.log("----------- Inside fetchWithAsyncAwait.js ------------");

async function fetchWithAsyncAwait() {
  try { 
    let response = await fetch("https://api.github.com/users");
  console.log("API is fetched");
  let userDetails = await response.json();

  console.log("------------- List of Users -------------");
  userDetails.map((user) =>
    console.log("id: " + user.id + " => " + user.login)
  );
  console.log("UserName is fetched");
} catch(error){
  console.log(error);
}

}

fetchWithAsyncAwait();
