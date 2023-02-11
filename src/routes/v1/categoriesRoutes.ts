import Express from 'express';
import {
    getCategories,
    getEventHeatsCategoriesById,
    addCategories,
    addCategoryById,
    deleteCategoryById,
    updateCategoryById
} from "../../controllers/categoryController";

const router = Express.Router();


router.get('/', getCategories);
router.get('/:id', getEventHeatsCategoriesById);
router.put('/', addCategories);
router.post('/', addCategoryById);
router.delete('/', deleteCategoryById);
router.put('/:id', updateCategoryById);

export {
    router as categoriesRouter
}