import dotenv from 'dotenv';
dotenv.config()
import express  from 'express';
import cors from "cors";
import {get404} from "./controllers/error";
import {mainRouter} from "./routes/mainRoutes";
import {connectToMysql} from "./utils/serverConnect";

const app = express();

const corsOptions ={
    origin:'*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())

app.use((req:any, res:any, next:any) => {
    next();
});

app.use('/api', mainRouter);
app.use(get404);

const port = 80
const startApp = async () => {
    await connectToMysql()
    app.listen(80, () => {
        console.log(`server listening on port ${port}`)
    })
}

startApp()