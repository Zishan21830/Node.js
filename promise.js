const fetchUserData = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve({ id: 101, username: "Zishan" });
    } else {
      reject("failed to fetch the user data");
    }
  }, 1000);
});

fetchUserData
  .then((user) => {
    return user.username
  })
  .then((username)=>{
    console.log("Hello,", username);
    
  })
  .catch((err) => {
    console.log(err);
  });

