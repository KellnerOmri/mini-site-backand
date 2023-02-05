import mysql from "mysql";
import {EventModel} from "../models/event.model";
import {connection} from "../utils/serverConnect";

const getEventsHandler = (req: any, res: any) => {
    const query = `select * 
        from events`
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const getEventByIdHandler = (req: any, res: any) => {
    const eventId = req.params.id
    const query = `select * from events where events.eventId = ${eventId}`
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const updateEventByIdHandler = (req: any, res: any) => {
    const updateEvent:EventModel = {
        eventId:req.body.eventId,
        comp:req.body.comp,
        codeName:req.body.codeName,
        description:req.body.description,
        backgroundColor:req.body.backgroundColor,
        foregroundColor:req.body.foregroundColor,
        secondaryColor:req.body.secondaryColor,
        showMaps:req.body.showMaps,
        tavTeken:req.body.tavTeken,
        comments:req.body.comments
    }
    const query = `UPDATE events 
            set codeName='${updateEvent.codeName}',
                description='${updateEvent.description}',
                backgroundColor='${updateEvent.backgroundColor}',
                foregroundColor='${updateEvent.foregroundColor}',
                secondaryColor='${updateEvent.secondaryColor}',
                showMaps='${updateEvent.showMaps}',
                tavTeken=${updateEvent.tavTeken},
                comments='${updateEvent.comments}'
            WHERE events.eventId = ${req.params.id}`
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}
const addEventHandler = (req: any, res: any) => {
    const updateEvent:EventModel = {
        eventId:req.body.eventId,
        comp:req.body.comp,
        codeName:req.body.codeName,
        description:req.body.description,
        backgroundColor:req.body.backgroundColor,
        foregroundColor:req.body.foregroundColor,
        secondaryColor:req.body.secondaryColor,
        showMaps:req.body.showMaps,
        tavTeken:req.body.tavTeken,
        comments:req.body.comments
    }
    const query = `INSERT INTO events
    VALUES (${updateEvent.eventId},
     ${updateEvent.comp},
      '${updateEvent.codeName}',
      '${updateEvent.description}',
      '${updateEvent.backgroundColor}',
      '${updateEvent.foregroundColor}',
      '${updateEvent.secondaryColor}',
      ${updateEvent.showMaps},
      ${updateEvent.tavTeken},
      '${updateEvent.comments}'
      )`
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}
export {
    getEventsHandler,
    getEventByIdHandler,
    updateEventByIdHandler,
    addEventHandler,
}