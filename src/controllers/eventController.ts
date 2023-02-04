import {getEvents as getEventsHandler, getEventById as getEventByIdHandler, updateEventById as updateEventByIdHandler} from '../handlers/eventHandler'

const getEvents = async (req:any, res:any) => {
    await getEventsHandler(req, res);
};

const getEventById = async (req:any, res:any) => {
    await getEventByIdHandler(req,res);
}

const updateEventById = async (req:any, res:any) => {
    await updateEventByIdHandler(req,res);
};

export {
    getEvents,
    getEventById,
    updateEventById
}