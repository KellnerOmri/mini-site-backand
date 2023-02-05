import {connection} from "./eventHandler";

const getHeatsHandler = (req: any, res: any) => {
    const query = `
    select 
        *
    from heats
    `

    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const getHeatByIdHandler = (req: any, res: any) => {
console.log(getHeatByIdHandler,"getHeatByIdHandler")
}

const updateHeatByIdHandler = (req: any, res: any) => {
    console.log(updateHeatByIdHandler,"updateHeatByIdHandler")

}
const addHeatHandler = (req: any, res: any) => {
    console.log(addHeatHandler,"addHeatHandler")
}
export {
    getHeatsHandler,
    getHeatByIdHandler,
    updateHeatByIdHandler,
    addHeatHandler,
}