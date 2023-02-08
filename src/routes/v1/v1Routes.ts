import Express from 'express';
import {eventRouter} from "./eventRoutes";
import {heatRouter} from "./heatRoutes";
import {compRouter} from "./compRoutes";

const router = Express.Router();

router.use('/event', eventRouter);
router.use('/heat', heatRouter);
router.use('/comp', compRouter);

export {
    router as v1Router
}




