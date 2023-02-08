import {connection} from "../utils/serverConnect";
const mainSiteServer ="sqgjdnmy_Main";
const getCompsHandler = (req: any, res: any) => {
    const query = `
    select 
        *
    from ${mainSiteServer}.main2
    `
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

export {
    getCompsHandler
}