import {connection} from "../utils/serverConnect";
import {EventModel} from "../models/event.model";
import {SponsorModel} from "../models/sponsor.model";
import {CategoryModel} from "../models/category.model";
const sqgjdnmyServer ="sqgjdnmy_3603";
const miniSiteServer ="minisite2";


const getSponsorByEventIdHandler = (req: any, res: any) => {
    const eventId = req.params.id;
    const query = `select s.sponsorId, s.description,s.link,s.logoUrl from ${miniSiteServer}.sponsors as s where s.eventId = ${eventId}`
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}
const updateSponsorByIdHandler = (req: any, res: any) => {
    const updateSponsor:SponsorModel = {
        sponsorId:req.body.updateSponsor.sponsorId,
        description: req.body.updateSponsor.description,
        link: req.body.updateSponsor.link,
        logoUrl: req.body.updateSponsor.logoUrl,
    }
    console.log(updateSponsor,"updateSponsor")
    const query = `UPDATE ${miniSiteServer}.sponsors 
            set description='${updateSponsor.description}',
                link='${updateSponsor.link}',
                logoUrl='${updateSponsor.logoUrl}'
            WHERE ${miniSiteServer}.sponsors.sponsorId = ${updateSponsor.sponsorId}`;

    console.log(query,"query")
    connection.query(query, function (err, result) {
        res.status(200).json(result);
    });



}

const addSponsorHandler = (req: any, res: any) => {
    console.log("eventId")
    const addSponsor:SponsorModel = {
        description:req.body.sponsorEventFormInput.description,
        logoUrl:req.body.sponsorEventFormInput.logoUrl,
        link:req.body.sponsorEventFormInput.link,
    }
    console.log(addSponsor,"addSponsor")
    const query = `
     INSERT INTO ${miniSiteServer}.sponsors
          VALUES (null,
         ${addSponsor.eventId},
          '${addSponsor.description}',
          '${addSponsor.logoUrl}',
          '${addSponsor.link}'
          )`
    console.log(query)
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const deleteSponsorByIdHandler = (req: any, res: any) => {
    const sponsorId = req.params.id;
    const query = `DELETE ${miniSiteServer}.sponsors
    FROM ${miniSiteServer}.sponsors
    WHERE ${miniSiteServer}.sponsors.sponsorId = ${sponsorId}
    `
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

export {
    getSponsorByEventIdHandler,
    updateSponsorByIdHandler,
    addSponsorHandler,
    deleteSponsorByIdHandler,
}