import Express from 'express';
import {eventRouter} from "./eventRoutes";
import {heatRouter} from "./heatRoutes";
import {compRouter} from "./compRoutes";
import {categoriesRouter} from "./categoriesRoutes";

const router = Express.Router();

router.use('/event', eventRouter);
router.use('/heat', heatRouter);
router.use('/category', categoriesRouter);
router.use('/comp', compRouter);

export {
    router as v1Router
}




