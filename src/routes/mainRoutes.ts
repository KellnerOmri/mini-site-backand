import Express from 'express';
import {v1Router} from "./v1/v1Routes";

const router = Express.Router()
router.use('/v1', v1Router);

export {
    router as mainRouter
}





