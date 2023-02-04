import Express from 'express';
import {getEventById, getEvents, updateEventById} from "../../controllers/eventController";

const router = Express.Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEventById);

export {
    router as eventsRouter
}