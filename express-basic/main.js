// const express = require("express");   // common js  // defaultnya dia kalau pakai common js, kalau kita tidak memberikan type modulenya
import express from "express";           // ES Modules (ESM)
import mysql from "mysql";
import cors from "cors"

const app = express();

app.use(cors())

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstack-starter"
})

database.connect((err) => {
  if (err) throw err;  // kalau errror kita lempar error
  console.log("Connected to database");   // kalau tidak error kita tampilkan connected
})



app.get("/api/v1/users", (req, res) => {
  database.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    res.json({          // ini kita kirim ke client format datanya berupa json
      success: true,
      message: "Success",
      data: result,
  })
  })

  // res.send("Hello World");

})

// menjalankan server di port 3001
app.listen(3001, () => {
  console.log("Server running on port 3001");
})