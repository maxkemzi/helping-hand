require("dotenv").config();
const express = require("express");
const router = require("./routers");
const {errorMiddleware} = require("./middlewares");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}));

app.use("/api", router);
app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
