import e from "express";
import "dotenv/config";
import filme_router from "./routes/filme-route.js";
import user_router from "./routes/user-route.js";

const app = e();

app.use(e.json());

app.use("/filme", filme_router);
app.use("/user", user_router);

app.listen(process.env.API_PORT, () => console.log("Servidor executando"));