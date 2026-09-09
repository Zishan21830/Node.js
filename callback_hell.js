/**
 * When multiple async operations depend on the result if the previous operation, developers traditionally chain callbacks by nesting them inside one another.
 * Consider a scenerio where we need to 
 * 1. fetch user
 * 2. fetch user profile
 * 3. fetch user posts using profile data
 */

function getUser(id, callback) {
  setTimeout(() => {
    console.log("User Fetched");
    const user = {
      id: 1,
      username: "John Doe",
    };
    callback(null, user);
  }, 100);
}
function getProfile(userid, callback) {
  setTimeout(() => {
    console.log("Profile fetched");
    const profile = {
      username: "John Doe",
    };
    callback(null, profile);
  }, 1000);
}

function getPosts(username, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    const posts = ["post1", "post2", "post3"];
    callback(null, posts);
  }, 1000);
}

getUser(1, function (error, user) {
  if (error) {
    console.error(error);
    return;
  }
  getProfile(user.id, function (error, profile) {
    if (error) {
      console.error(error);
      return;
    }
    getPosts(profile.username, function (error, posts) {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`Posts fetched ${posts}`);
      
    });
  });
});

// It creates a pyramid like structure that is called 'Callback Hell'
// We can resolve this by using the promises and async/await.
