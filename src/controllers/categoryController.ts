import {
    addCategoriesHandler, addCategoryByIdHandler, deleteCategoryByIdHandler,
    getCategoriesHandler,
    getEventHeatsCategoriesByIdHandler, updateCategoryByIdHandler
} from '../handlers/categoryHandler';


const getCategories = async (req:any, res:any) => {
    await getCategoriesHandler(req, res);
};
const getEventHeatsCategoriesById = async (req:any, res:any) => {
    await getEventHeatsCategoriesByIdHandler(req, res);
};

const addCategories = async (req:any, res:any) => {
    await addCategoriesHandler(req,res);
}
const addCategoryById = async (req:any, res:any) => {
    await addCategoryByIdHandler(req,res);
}
const deleteCategoryById = async (req:any, res:any) => {
    await deleteCategoryByIdHandler(req,res);
}
const updateCategoryById = async (req:any, res:any) => {
    await updateCategoryByIdHandler(req,res);
}

export {
    getCategories,
    getEventHeatsCategoriesById,
    addCategories,
    addCategoryById,
    deleteCategoryById,
    updateCategoryById
}