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
Promise.all([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// 2. Promise.race([promise1, promise2, ....])
Promise.race([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// 3. Promise.allSettled([promise1, promise2, ....])
Promise.allSettled([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// 4. Promise.any([promise1, promise2, ....])
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