const multer = require("multer"); // mengimpor modul multer menangani file upload
const path = require("path"); // mengimpor modul path untuk mempermudah pengelolaan jalur

// konfigurasi penyimpanan file dan multer
const storage = multer.diskStroge({
    //menentukan lokasi penyimpanan file
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/uploads")); // penyimpanan file di folder public/uploads
    },
    // menentukan nama file yang akan disimpan
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // menambahkan suffix unik untuk mengindari duplikasi nama file
        cb(
            null,
            file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname) // membuat nama file baru dengan format [fieldname] -[uniqueSuffix].[ext]
        );
    },
});

// filter file untuk membatasi jenis file yang dapat diunggah
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gid/; // hanya memperbolehkan tipe file gambar
    const extname = allowedTypes.test(
        path.extname(file.originalname).toLowerCase()// mengecek ekstensi file
    );
    const mimetype = allowedType.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true); // jika va;id, lajutkan proses upload
    } else{
        cb(new Error("Only images are allowed!"), false); // jika tidak valid, kirimkan error
    }
};

// konfigurasi multer
const upload = multer({
    storage, // menggunakan konfigurasi storage yang telah di buat
    limits: { fileSize: 2 * 1024 * 1024}, // membatasi ukuran file maksimum menjadi 2MB
    fileFilter, // Menggunakan filter file yang telah dibuat
});

module.exports = upload;