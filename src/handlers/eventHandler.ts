import {EventModel} from "../models/event.model";
import {connection} from "../utils/serverConnect";

const miniSiteServer ="minisite2";
const mainSiteServer ="sqgjdnmy_Main";



const getEventsHandler = (req: any, res: any) => {
    const query = `select * 
        from ${miniSiteServer}.events as e inner join ${mainSiteServer}.main2 as m on e.comp = m.comp`
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const getEventByIdHandler = (req: any, res: any) => {
    const eventId = req.params.id
    const query = `select * from ${miniSiteServer}.events as e inner join ${mainSiteServer}.main2 as m on e.comp = m.comp where events.eventId = ${eventId}`
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const updateEventByIdHandler = (req: any, res: any) => {
    const updateEvent:EventModel = {
        eventId:req.body.eventFormInput.eventId,
        comp:req.body.eventFormInput.comp,
        codeName:req.body.eventFormInput.codeName,
        backgroundColor:req.body.eventFormInput.backgroundColor,
        foregroundColor:req.body.eventFormInput.foregroundColor,
        secondaryColor:req.body.eventFormInput.secondaryColor,
        showMaps:req.body.eventFormInput.showMaps,
        tavTeken:req.body.eventFormInput.tavTeken,
        comments:req.body.eventFormInput.comments,
        description:req.body.eventFormInput.description,
        date:req.body.eventFormInput.date,
        Type:req.body.eventFormInput.Type
    }

    const query = `UPDATE ${miniSiteServer}.events 
            set codeName='${updateEvent.codeName}',
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
        eventId:req.body.eventFormInput.eventId,
        comp:req.body.eventFormInput.comp,
        codeName:req.body.eventFormInput.codeName,
        backgroundColor:req.body.eventFormInput.backgroundColor,
        foregroundColor:req.body.eventFormInput.foregroundColor,
        secondaryColor:req.body.eventFormInput.secondaryColor,
        showMaps:req.body.eventFormInput.showMaps,
        tavTeken:req.body.eventFormInput.tavTeken,
        comments:req.body.eventFormInput.comments,
        description:req.body.eventFormInput.description,
        date:req.body.eventFormInput.date,
        Type:req.body.eventFormInput.Type
    }
     // let compId;

    // const mainQuery = `
    //  INSERT INTO ${mainSiteServer}.main2
    //       VALUES (null,
    //       '${updateEvent.description}',
    //       '${updateEvent.date}',
    //       '${updateEvent.Type}'
    //       )`
    // connection.query(mainQuery, function (err: string, result: any) {
    //     res.status(200).json(result)
    //     compId = result.insertId
    //
    // })
    // const query = `
    //  INSERT INTO ${miniSiteServer}.events
    //       VALUES (null,
    //      ${compId},
    //       '${updateEvent.codeName}',
    //       '${updateEvent.backgroundColor}',
    //       '${updateEvent.foregroundColor}',
    //       '${updateEvent.secondaryColor}',
    //       ${updateEvent.showMaps},
    //       ${updateEvent.tavTeken},
    //       '${updateEvent.comments}'
    //       )` // TODO ask Ran how to make comp fk of main2 table.
    // connection.query(query, function (err: string, result: any) {
    //     res.status(200).json(result)
    // })

    // console.log(compId,"compId")
    const query = `
     INSERT INTO ${miniSiteServer}.events
          VALUES (null,
         ${updateEvent.comp},
          '${updateEvent.codeName}',
          '${updateEvent.backgroundColor}',
          '${updateEvent.foregroundColor}',
          '${updateEvent.secondaryColor}',
          ${updateEvent.showMaps},
          ${updateEvent.tavTeken},
          '${updateEvent.comments}'
          )` // TODO ask Ran how to make comp fk of main2 table.
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