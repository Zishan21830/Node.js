const promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve({
      id: 124589,
      username: "Zishan",
    });
  } else {
    reject({
      message: "Data not fetched",
      success: false,
    });
  }
});

const promise2 = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve({
      id: 124589,
      orderLocation: "New Delhi",
      orderName: "Smartphone",
    });
  } else {
    reject({
      message: "Order not fetched",
      success: false,
    });
  }
});

// 1. Promise.all([promise1, promise2, ....])
// Definition: Waits for ALL promises to fulfill successfully. If even ONE promise 
// rejects, Promise.all immediately fails and triggers the .catch() block.
// Outcome here: Triggers .catch() because promise2 rejects.
Promise.all([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// 2. Promise.race([promise1, promise2, ....])
// Definition: Returns the result (fulfillment or rejection) of the VERY FIRST 
// promise that settles (whichever finishes fastest).
// Outcome here: Triggers .then() because promise1 resolves first.
Promise.race([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// 3. Promise.allSettled([promise1, promise2, ....])
// Definition: Waits until ALL promises are settled (either fulfilled or rejected), 
// never short-circuiting. It always goes to .then() with an array of objects 
// detailing the status ("fulfilled" or "rejected") and value/reason of each promise.
// Outcome here: Triggers .then() with an array showing one fulfilled and one rejected result.
Promise.allSettled([promise1, promise2])
  .then((response) => {
    console.log(response); 
  })
  .catch((error) => {
    console.log(error);
  });

// 4. Promise.any([promise1, promise2, ....])
// Definition: Waits for the FIRST promise to successfully FULFILL. It ignores 
// rejections and only triggers .catch() if ALL promises fail (throwing an AggregateError).
// Outcome here: Triggers .then() because promise1 fulfills successfully, ignoring promise2's rejection.
Promise.any([promise1, promise2])
.then((response)=>{
    console.log("Response from 1st .then");
    return response
})
.then((response2)=>{
    console.log("Response from 2nd .then");
    console.log(response2);
})
.catch((error)=>{
    console.log(error);
})