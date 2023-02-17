import {getEventJsonByIdHandler} from "../handlers/eventJsonHandler";


const getEventJsonById = async (req:any, res:any) => {
    await getEventJsonByIdHandler(req, res);
};
export {
    getEventJsonById,
}