import {
    addCategoriesHandler, addCategoryByIdHandler, deleteCategoryByIdHandler,
    getCategoriesHandler,
    getEventHeatsCategoriesByIdHandler, updateCategoryByIdHandler
} from '../handlers/categoryHandler';
import {
    addSponsorHandler,
    deleteSponsorByIdHandler,
    getSponsorByEventIdHandler,
    updateSponsorByIdHandler
} from "../handlers/sponsorHandler";


const getSponsorByEventId = async (req:any, res:any) => {
    await getSponsorByEventIdHandler(req, res);
};
const updateSponsorById = async (req:any, res:any) => {
    await updateSponsorByIdHandler(req, res);
};

const addSponsor = async (req:any, res:any) => {
    await addSponsorHandler(req,res);
}
const deleteSponsorById = async (req:any, res:any) => {
    await deleteSponsorByIdHandler(req,res);
}

export {
    getSponsorByEventId,
    updateSponsorById,
    addSponsor,
    deleteSponsorById,
}