import Express from 'express';
import {addHeat, getHeatById, getHeats,getEventHeatsId, updateHeatById} from "../../controllers/heatController";

const router = Express.Router();


router.get('/', getHeats);
router.get('/:id', getEventHeatsId);
router.get('/:id', getHeatById);
router.put('/:id', updateHeatById);
router.post('/', addHeat);

export {
    router as heatRouter
}