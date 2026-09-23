fetch("http://localhost:3000/", {
    method: "POST"
})
.then(res => res.text)
.then(data => console.log(data))