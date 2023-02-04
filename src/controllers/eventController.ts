import {getEventsHandler,getEventByIdHandler, updateEventByIdHandler,addEventHandler} from '../handlers/eventHandler'

const getEvents = async (req:any, res:any) => {
    await getEventsHandler(req, res);
};

const getEventById = async (req:any, res:any) => {
    await getEventByIdHandler(req,res);
}

const updateEventById = async (req:any, res:any) => {
    await updateEventByIdHandler(req,res);
};

const addEvent = async (req:any, res:any) => {
    await addEventHandler(req,res);
};

export {
    getEvents,
    getEventById,
    updateEventById,
    addEvent
}