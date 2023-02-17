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
        Type:req.body.eventFormInput.Type,
        location:req.body.eventFormInput.location,
        showParticipants:req.body.eventFormInput.showParticipants,
        participationMedal:req.body.eventFormInput.participationMedal,

        shortName: req.body.eventFormInput.shortName,
        logo: req.body.eventFormInput.logo,
        registrationUrl: req.body.eventFormInput.registrationUrl,
        participantsListUrl: req.body.eventFormInput.participantsListUrl,
        resultsUrl: req.body.eventFormInput.resultsUrl ,
        coverImage:req.body.eventFormInput.coverImage,
        detailsImage:req.body.eventFormInput.detailsImage,
        contactImage:req.body.eventFormInput.contactImage,
        contactPhone: req.body.eventFormInput.contactPhone,
        organizerDetails: req.body.eventFormInput.organizerDetails,
        gatheringTime:req.body.eventFormInput.gatheringTime,
        ceremonyTime:req.body.eventFormInput.ceremonyTime,
        enrollmentInclude: req.body.eventFormInput.enrollmentInclude,
        dateTime: req.body.eventFormInput.dateTime,
        endDate: req.body.eventFormInput.endDate,
        status: req.body.eventFormInput.status,
        isRegistrationInEventDay: req.body.eventFormInput.isRegistrationInEventDay
    }
    console.log(updateEvent,"updateEvent")
const main2Query = `UPDATE ${mainSiteServer}.main2
                    set description='${updateEvent.description}',
                    date='${updateEvent.date}',
                    Type='${updateEvent.Type}'
                    where main2.comp = ${updateEvent.comp}
`
    connection.query(main2Query, function (err: string, result: any) {})

    const query = `UPDATE ${miniSiteServer}.events 
            set codeName='${updateEvent.codeName}',
                backgroundColor='${updateEvent.backgroundColor}',
                foregroundColor='${updateEvent.foregroundColor}',
                secondaryColor='${updateEvent.secondaryColor}',
                showMaps='${updateEvent.showMaps}',
                tavTeken=${updateEvent.tavTeken},
                comments='${updateEvent.comments}',
                location='${updateEvent.location}',
                showParticipants='${updateEvent.showParticipants}',
                participationMedal='${updateEvent.participationMedal}',
                
                shortName='${updateEvent.shortName}',
                logo='${updateEvent.logo}',
                registrationUrl='${updateEvent.registrationUrl}',
                participantsListUrl='${updateEvent.participantsListUrl}',
                resultsUrl='${updateEvent.resultsUrl}',
                coverImage='${updateEvent.coverImage}',
                detailsImage='${updateEvent.detailsImage}',
                contactImage='${updateEvent.contactImage}',
                contactPhone='${updateEvent.contactPhone}',
                organizerDetails='${updateEvent.organizerDetails}',
                gatheringTime='${updateEvent.gatheringTime}',
                ceremonyTime='${updateEvent.ceremonyTime}',
                enrollmentInclude='${updateEvent.enrollmentInclude}',
                dateTime='${updateEvent.dateTime}',
                endDate='${updateEvent.endDate}',
                status='${updateEvent.status}',
                isRegistrationInEventDay='${updateEvent.isRegistrationInEventDay}'
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
        Type:req.body.eventFormInput.Type,
        location:req.body.eventFormInput.location,
        showParticipants:req.body.eventFormInput.showParticipants,
        participationMedal:req.body.eventFormInput.participationMedal,
        shortName:req.body.eventFormInput.shortName,
        logo:req.body.eventFormInput.logo,
        registrationUrl:req.body.eventFormInput.registrationUrl,
        participantsListUrl:req.body.eventFormInput.participantsListUrl,
        resultsUrl:req.body.eventFormInput.resultsUrl,
        coverImage:req.body.eventFormInput.coverImage,
        detailsImage:req.body.eventFormInput.detailsImage,
        contactImage:req.body.eventFormInput.contactImage,
        contactPhone:req.body.eventFormInput.contactPhone,
        organizerDetails:req.body.eventFormInput.organizerDetails,
        gatheringTime:req.body.eventFormInput.gatheringTime,
        ceremonyTime:req.body.eventFormInput.ceremonyTime,
        enrollmentInclude:req.body.eventFormInput.enrollmentInclude,
        dateTime:req.body.eventFormInput.dateTime,
        endDate:req.body.eventFormInput.endDate,
        status:req.body.eventFormInput.status,
        isRegistrationInEventDay:req.body.eventFormInput.isRegistrationInEventDay
    }
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
          '${updateEvent.comments}',
          '${updateEvent.location}',
          '${updateEvent.showParticipants}',
          '${updateEvent.participationMedal}',
          '${updateEvent.shortName}',
          '${updateEvent.logo}',
          '${updateEvent.registrationUrl}',
          '${updateEvent.participantsListUrl}',
          '${updateEvent.resultsUrl}',
          '${updateEvent.coverImage}',
          '${updateEvent.detailsImage}',
          '${updateEvent.contactImage}',
          '${updateEvent.contactPhone}',
          '${updateEvent.organizerDetails}',
          '${updateEvent.gatheringTime}',
          '${updateEvent.ceremonyTime}',
          '${updateEvent.enrollmentInclude}',
          '${updateEvent.dateTime}',
          '${updateEvent.endDate}',
          '${updateEvent.status}',
          '${updateEvent.isRegistrationInEventDay}'
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