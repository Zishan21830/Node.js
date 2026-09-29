import express from "express";
import fs from "fs";

const app = express();
app.use(express.json())
// const data = {
//     username : "Zishan",
//     location: "Delhi"
// }
function simpleMiddleware(req, res, next){
  console.log("Simple Middleware");
  next()
}
app.use((req, res, next)=>{
  console.log("Middleware");
  next()
})
app.use(simpleMiddleware())
const bookData = JSON.parse(fs.readFileSync("./data/books.json"));
// console.log(bookData);

// console.log(bookData);

app.get("/api/v1/books", (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      data: {
        book: bookData,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Data not Found",
    });
  }
});

app.get("/api/v1/books/:id", (req, res) => {
  try {
    const book = bookData.find((book) => book.id === req.params.id);
    res.json({ book: book });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: "Internal Server Error"
    })   
  }
});

app.post("/api/v1/books", (req, res)=>{
  bookData.push(req.body)
  fs.writeFileSync("./data/books.json", JSON.stringify(bookData))
  
  res.send("Post req")
})
// app.put("/", (req, res)=>{

// })
app.patch("/api/v1/books/:id",simpleMiddleware, (req, res)=>{
  let id = req.params.id
  const book = bookData.find(book => book.id === id)
  const updatedBook = Object.assign(book, req.body)
  let bookIndex = bookData.indexOf(book)
  bookData[bookIndex] = updatedBook
  fs.writeFileSync("./data/books.json", JSON.stringify(bookData))
  res.json(book)

})
app.delete("/api/v1/books/:id", (req, res)=>{
  let id = req.params.id
  const deletedBook = bookData.find(book=> book.id === id)
  const deletedData = bookData.filter(book => book.id != id)

  fs.writeFileSync("./data/books.json", JSON.stringify(deletedData))
  res.send("Book Deleted")
})

app.listen(3000, () => {
  console.log("Server is running...");
});
