import Express from 'express';
import {addEvent, getEventById, getEvents, updateEventById} from "../../controllers/eventController";

const router = Express.Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEventById);
router.post('/', addEvent);

export {
    router as eventRouter
}