import {connection} from "../utils/serverConnect";
import {HeatModel} from "../models/heat.model";
import {CategoryModel} from "../models/category.model";
const sqgjdnmyServer ="sqgjdnmy_3603";
const miniSiteServer ="minisite2";
const getHeatsHandler = (req: any, res: any) => {
    const query = `
    select 
        *
    from ${miniSiteServer}.heats inner join ${sqgjdnmyServer}.CompRoll 
    on ${miniSiteServer}.heats.Rolls = ${sqgjdnmyServer}.CompRoll.Rolls
    `
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}
const getEventHeatsIdHandler = (req: any, res: any) => {
    const eventId = req.params.id;
    const query = `
    select 
        *
    from ${miniSiteServer}.heats as heats inner join ${sqgjdnmyServer}.CompRoll as CompRoll
    on heats.Rolls = CompRoll.Rolls
    where heats.eventId = ${eventId} 
    `
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const getHeatByIdHandler = (req: any, res: any) => {
    const heatId = req.params.id;
    const query = `
    select 
        *
    from ${miniSiteServer}.heats inner join ${sqgjdnmyServer}.CompRoll 
    on ${miniSiteServer}.heats.Rolls = ${sqgjdnmyServer}.CompRoll.Rolls
    where ${miniSiteServer}.heats.heatId = ${heatId}
    `
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const updateHeatByIdHandler = (req: any, res: any) => {
    const heatId = req.params.id;
let categoryList:CategoryModel[]=[]
    const categoryQuery = `
    select
        *
    from ${miniSiteServer}.compSection as compSection
 where compSection.heatId = ${heatId}
    `
    connection.query(categoryQuery, function (err: string, result: any) {
       if (result.length>0){
        categoryList=[...result]
       }
    })
    const updateHeat:HeatModel = {
        heatId:req.body.heatFormInput.heatId,
        eventId:req.body.heatFormInput.eventId,
        Rolls:req.body.heatFormInput.Rolls,
        prize:req.body.heatFormInput.prize,
        mapUrl:req.body.heatFormInput.mapUrl,
        amami:req.body.heatFormInput.amami,
        routeDescription:req.body.heatFormInput.routeDescription,
        mapIframe:req.body.heatFormInput.mapIframe,
        showMap:req.body.heatFormInput.showMap,
        description:req.body.heatFormInput.description,
        startHeat:req.body.heatFormInput.startHeat,
        MinAge:req.body.heatFormInput.MinAge,
        MaxAge:req.body.heatFormInput.MaxAge,
        PriceProfile:req.body.heatFormInput.PriceProfile,
        sections:categoryList
    }
    const miniSiteQuery = `UPDATE ${miniSiteServer}.heats
                 set
                 prize=${updateHeat.prize},
                 mapUrl='${updateHeat.mapUrl}',
                 amami=${updateHeat.amami},
                 routeDescription='${updateHeat.routeDescription}',
                 mapIframe=${updateHeat.mapIframe},
                 showMap=${updateHeat.showMap}
                 WHERE ${miniSiteServer}.heats.heatId = ${heatId}`


    const sqgjdnmyQuery = `UPDATE ${sqgjdnmyServer}.CompRoll
            set
            description='${updateHeat.description}',
            startHeat='${updateHeat.startHeat}',
            MinAge=${updateHeat.MinAge},
            MaxAge=${updateHeat.MaxAge},
            PriceProfile=${updateHeat.PriceProfile}
            WHERE ${sqgjdnmyServer}.CompRoll.Rolls = ${updateHeat.Rolls}`

    connection.query(miniSiteQuery, function (err: string, result: any) {
        res.status(200).json(result)
    })

    connection.query(sqgjdnmyQuery, function (err: string, result: any) {})
}
const addHeatHandler = (req: any, res: any) => {
    const updateHeat:HeatModel = {
        heatId:req.body.heatId,
        eventId:req.body.eventId,
        Rolls:req.body.Rolls,
        prize:req.body.prize,
        mapUrl:req.body.mapUrl,
        amami:req.body.amami,
        routeDescription:req.body.routeDescription,
        mapIframe:req.body.mapIframe,
        showMap:req.body.showMap,
        description:req.body.description,
        startHeat:req.body.startHeat,
        MinAge:req.body.MinAge,
        MaxAge:req.body.MaxAge,
        PriceProfile:req.body.PriceProfile,
        sections:[]
    }
    const miniSiteQuery = `INSERT INTO ${miniSiteServer}.heats
    VALUES (${updateHeat.heatId},
     ${updateHeat.eventId},
      '${updateHeat.Rolls}',
      '${updateHeat.prize}',
      '${updateHeat.mapUrl}',
      '${updateHeat.amami}',
      '${updateHeat.routeDescription}',
      ${updateHeat.mapIframe},
      ${updateHeat.showMap}
      )`
    connection.query(miniSiteQuery, function (err: string, result: any) {
        res.status(200).json(result)
    })

    const sqgjdnmyQuery = `INSERT INTO ${sqgjdnmyServer}.CompRoll
    VALUES (${updateHeat.Rolls},
     '${updateHeat.description}',
      '${updateHeat.startHeat}',
      ${updateHeat.MinAge},
      ${updateHeat.MaxAge},
      ${updateHeat.PriceProfile}
      )`
    connection.query(sqgjdnmyQuery, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

export {
    getHeatsHandler,
    getHeatByIdHandler,
    updateHeatByIdHandler,
    addHeatHandler,
    getEventHeatsIdHandler
}