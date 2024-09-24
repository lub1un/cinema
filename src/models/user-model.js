import db from "../config/db.js";
import bcrypt from "bcrypt";

const userSchema = new db.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  tipo: {
    type: String,
    enum: ["ADMISTRADOR", "USUARIO"],
    required: true,
    default: "USUARIO",
  },
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 10);
})

const User = db.model("User", userSchema);

export default User;