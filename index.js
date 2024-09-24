const express = require("express")// impor modul express
const app = express() // inisialisasi express
const port = 3000 // port

// route/
app.get("/",(req,res) => {
    res.send("Hello");
});

// route/about
app.get("/about",(req,res) => {
    res.send("About Us");
});

// route/contact
app.get("/contact",(req,res) => {
    //res.send("Contact Us");
    res.sendFile(__dirname+"/contact.html");
});

// route/mahasiswa
app.get("/mahasiswa",(req,res) => {
    res.json({
        "status" :"success",
        "message" : "Data Mahasiswa",
        "data" : [
            {npm: 2226240120, nama: "puspita"},
            {npm: 2226240121, nama: "puspita1"},
            {npm: 2226240122, nama: "puspita2"}
        ]
    })
});
app.get("/dosen",(req,res) => {
    res.json({
        "status" :"success",
        "message" : "Data Dosen",
        "data" : [
            {
                Prodi:"sistem informasi",
                dosen: ["iis","faris","dafid"]
            },
            {
                prodi:"informatika",
                dosen: ["derry", "siska","yohannes"]
            },

        ]
    })
});

// handle route yang
app.use("/",(req,res) => {
    res.send("<h1>404 Not Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`server dapat diakses di http://localhost:${port}`);
});