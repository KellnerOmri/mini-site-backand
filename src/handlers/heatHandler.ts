import {connection} from "../utils/serverConnect";
import {EventModel} from "../models/event.model";
import {HeatModel} from "../models/heat.model";
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
    }

    const miniSiteQuery = `UPDATE ${miniSiteServer}.heats 
            set 
            heatId=${updateHeat.heatId},
            eventId=${updateHeat.eventId},
            Rolls=${updateHeat.Rolls},
            prize='${updateHeat.prize}',
            mapUrl=${updateHeat.mapUrl},
            amami='${updateHeat.amami}',
            routeDescription=${updateHeat.routeDescription},
            mapIframe=${updateHeat.mapIframe},
            showMap=${updateHeat.showMap}
            WHERE ${miniSiteServer}.heats.heatId = ${heatId}`
    connection.query(miniSiteQuery, function (err: string, result: any) {
        res.status(200).json(result)
    })

    const sqgjdnmyQuery = `UPDATE ${sqgjdnmyServer}.CompRoll
            set 
            description='${updateHeat.description}',
            startHeat='${updateHeat.startHeat}',
            MinAge=${updateHeat.MinAge},
            MaxAge=${updateHeat.MaxAge},
            PriceProfile=${updateHeat.PriceProfile}
            WHERE ${sqgjdnmyServer}.CompRoll.Rolls = ${updateHeat.Rolls}`
    connection.query(sqgjdnmyQuery, function (err: string, result: any) {
        res.status(200).json(result)
    })
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
}