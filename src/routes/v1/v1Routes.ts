import Express from 'express';
import {eventRouter} from "./eventRoutes";
import {heatRouter} from "./heatRoutes";

const router = Express.Router();

router.use('/event', eventRouter);
router.use('/heat', heatRouter);

export {
    router as v1Router
}




