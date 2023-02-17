import Express from 'express';
import {
    addSponsor,
    deleteSponsorById,
    getSponsorByEventId,
    updateSponsorById
} from "../../controllers/sponsorController";

const router = Express.Router();
router.get('/:id', getSponsorByEventId);
router.put('/', updateSponsorById);
router.post('/:id', addSponsor);
router.delete('/:id', deleteSponsorById);

export {
    router as sponsorRouter
}