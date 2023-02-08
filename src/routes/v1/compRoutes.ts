import Express from 'express';
import {getComps} from "../../controllers/compController";

const router = Express.Router();


router.get('/', getComps);

export {
    router as compRouter
}