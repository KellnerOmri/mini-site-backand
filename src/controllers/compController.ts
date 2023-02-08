import {getCompsHandler} from "../handlers/compHandler";


const getComps = async (req:any, res:any) => {
    await getCompsHandler(req, res);
};

export {
    getComps
}