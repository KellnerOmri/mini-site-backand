


import {addHeatHandler, getHeatByIdHandler, getHeatsHandler, updateHeatByIdHandler,getEventHeatsIdHandler} from "../handlers/heatHandler";


const getHeats = async (req:any, res:any) => {
    await getHeatsHandler(req, res);
};
const getEventHeatsId = async (req:any, res:any) => {
    await getEventHeatsIdHandler(req, res);
};

const getHeatById = async (req:any, res:any) => {
    await getHeatByIdHandler(req,res);
}

const updateHeatById = async (req:any, res:any) => {
    await updateHeatByIdHandler(req,res);
};

const addHeat = async (req:any, res:any) => {
    await addHeatHandler(req,res);
};

export {
    getHeats,
    getHeatById,
    updateHeatById,
    addHeat,getEventHeatsId
}