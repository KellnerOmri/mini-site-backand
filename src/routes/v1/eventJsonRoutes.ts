import Express from 'express';
import {getEventJsonById} from "../../controllers/enentJsonRouter";

const router = Express.Router();
router.get('/:id', getEventJsonById);

export {
    router as eventJsonRouter
}