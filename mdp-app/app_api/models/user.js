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