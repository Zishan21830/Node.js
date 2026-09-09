/**
 * A promises is an object representing the eventual completion (or failure) of an async operation and its resulting value.
 * Promise state:
 * A promise is always in one of the 3  mutually exclusive states:
 * 1. Pending- Initail State (Neither fulfilled nor resolved)
 * 2. Fulfilled- Operation completed successfully and the promise now has a value.
 * 3. Rejected- Operation failed and the promise now hasa reason(error)
 */

const fetchUserData = new Promise((resolve, reject) => {
  let success = true;  //Here could be a database query, network response or API calling.
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

