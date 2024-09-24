import db from "../config/db.js";

const filmeSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  ano: {
    type: db.Schema.Types.Date,
    required: true,
  },
  genero: {
    type: String,
    enum: ["TERROR", "ROMANCE", "COMÉDIA"],
    required: true,
    default: "COMÉDIA",
  },
});

const Filme = db.model("Filme", filmeSchema);

export default Filme;