import Express from 'express';
import {eventsRouter} from "./eventRoutes";

const router = Express.Router();

router.use('/event', eventsRouter);

export {
    router as v1Router
}




