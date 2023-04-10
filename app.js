require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const ApiData = require("./productData.json");
const { json } = require("express");
const port = process.env.PORT || 5000;
const errorHandler = require("./middlewares/errorMiddleware");
const cookieParser = require("cookie-parser")

const connectDB = require("./db/connect")

// Routes
const product_routes = require("./routes/products")
const userRoute = require("./routes/users");

app.use(cors());
app.use(cookieParser())
app.use(express.urlencoded({ extended : "false"}))
app.use(express.json());

app.use("/api/products",product_routes);
app.use("/api/users",userRoute);

app.get("/", (req, resp) => {
  resp.send("BackApi Is Live");
});

// TO SEND A LIST OF USERS IN HTML LIST FORMATE
// app.get("/products", (req, resp) => {
//   const html = `
//     <ul>
//         ${ApiData.map((product, idx) => {
//           return `<li>${product.product_name}</li>
//           <img src=${product.image}>`;
//         }).join("")}
//     </ul>
//     `;
//   resp.send(html);
// });

// TO GET ALL THE USERS
// app.get("/api/products", (req, resp) => {
//     resp.send(ApiData);
//     console.log(ApiData);
//   });

// app
//   .route("/api/products/:id")
//   .get((req, resp) => {
//     const id = Number(req.params.id);
//     console.log(id);
//     const product = ApiData.find((product) => {
//       return product.id === id;
//     });
//     console.log(product);
//     return resp.json(product);
//   })
//   .patch((req, resp) => {
//     return resp.json({ status: "pending" });
//   })
//   .delete((req, resp) => {
//     const id = req.params.id;
//     console.log(id);
//     const productIndex = ApiData.findIndex((product)=>{
//         return product.id == id;
//     })
//     ApiData.splice(productIndex,1)

//     console.log(ApiData);
//     return resp.json({status:"success",id:id});
//   });

// TO GET USER WITH SPECIFIC ID
// app.get("/api/products/:id",(req,resp)=>{
//     const id = Number(req.params.id);
//     console.log(id);
//    const product = ApiData.find((product)=>{
//     return product.id === id;
//    })
//    console.log(product);
//    return resp.json(product);
// })


// TO CREATE A USER
// app.post("/api/products", (req, resp) => {
//     const body = req.body;
//     console.log(body);
//     ApiData.push({...body,id:ApiData.length + 1})
//     fs.writeFile("./productData.json",JSON.stringify(ApiData),(err,data)=>{
//         return resp.json({status:"success",id:ApiData.length})
//     })
//   return resp.json({ status: "pending" });
// });


//TO UPDATE THE USER
// app.patch("/api/products/:id", (req, resp) => {
//   return resp.json({ status: "pending" });
// });


//TO DELETE THE USER
// app.delete("/api/products/:id", (req, resp) => {
//   return resp.json({ status: "pending" });
// });
// process.env.MONGODB_URL

app.use(errorHandler)
const start = async() =>{
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port,()=>{
      console.log(`App is running on port:${port}`);
    })
    
  } catch (error) {
    console.log(error);
  }
}
start()

// app.listen(port, () => {
//   console.log("app is running on Port:" + port);
// });
