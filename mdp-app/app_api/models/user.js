<<<<<<< HEAD
const mongoose = require("mongoose"); // Mengimpor mongoose untuk membuat skema dan model MongoDB
const bcrypt = require("bcryptjs"); // Mengimpor bcryptjs untuk mengenkripsi password pengguna

// Membuat skema untuk pengguna
const UserSchema = new mongoose.Schema({
  name: {
    type: String, // Tipe data nama adalah string
    required: true, // Nama wajib diisi
  },
  email: {
    type: String, // Tipe data email adalah string
    required: true, // Email wajib diisi
    unique: true, // Email harus unik
  },
  password: {
    type: String, // Tipe data password adalah string
    required: true, // Password wajib diisi
  },
  role: {
    type: String, // Tipe data role adalah string
    enum: ["user", "admin"], // Role terbatas hanya bisa 'user' atau 'admin'
    default: "user", // Default role adalah 'user'
  },
  date: {
    type: Date, // Tipe data tanggal adalah date
    default: Date.now, // Default date adalah waktu saat ini
  },
});

// Fungsi untuk mengenkripsi password sebelum menyimpan pengguna
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // Jika password tidak diubah, lanjutkan tanpa meng-enkripsi ulang
    return next();
  }
  const salt = await bcrypt.genSalt(10); // Membuat salt untuk enkripsi password
  this.password = await bcrypt.hash(this.password, salt); // Mengenkripsi password
  next(); // Melanjutkan ke proses berikutnya
});

module.exports = mongoose.model("User", UserSchema); // Mengekspor model User berdasarkan UserSchema
=======
// mengimpor modul mongoose untuk mengelola koneksi dengan mongodb
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// definisakn schema untuk fakultas
const fakultasSchema = new mongoose.Schema({
    name: {
        type : String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

userschema.pre("save",async function (next) {
    // jika password tidak diubah, lanjutkan tanpa enskripsi
    if(!this.isModifited("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);//enskripsi password
    next();
})

module.exports = mongoose.model('user',userschema);
>>>>>>> 1fea0b80f57fef2dd11a78caab21746880869caa
