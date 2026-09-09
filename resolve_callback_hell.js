function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        console.log("User fetched");

        resolve({
          id: 1,
          username: "John Doe"
        });
      } else {
        reject(new Error("User not fetched"));
      }
    }, 100);
  });
}

function getProfile(userid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userid) {
        console.log("User profile fetched");

        resolve({
          username: "John Doe"
        });
      } else {
        reject(new Error("Profile doesn't exist"));
      }
    }, 1000);
  });
}

function getPosts(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        console.log("Posts fetched");

        resolve([
          "post1",
          "post2",
          "post3"
        ]);
      } else {
        reject(new Error("Posts not fetched"));
      }
    }, 1000);
  });
}

getUser(1011)
  .then((user) => {
    console.log("User:", user);
    return getProfile(user.id);
    // The return allows the Promise returned by getProfile() to become the Promise for the next step in the chain.
    // After I receive the user, start getProfile(), and pass its result to the next .then().
  })
  .then((profile) => {
    console.log("Profile:", profile);
    return getPosts(profile.username);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });
