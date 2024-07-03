import express from "express"
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from './utils/database.js'
import authRoutes from './routes/user-route.js'

const app = express();
configDotenv();
const PORT = process.env.PORT || 4000

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//http://localhost:4000/api/v1/user
app.use('/api/v1/user', authRoutes)


app.listen(PORT, () => {
	connectDB()
	console.log(`Server is running on port ${PORT}`);
});


