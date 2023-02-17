import {connection} from "../utils/serverConnect";
import {UiModel} from "../models/ui.model";
import {HeatModel} from "../models/heat.model";
import {CategoryModel} from "../models/category.model";

const sqgjdnmyServer = "sqgjdnmy_3603";
const miniSiteServer = "minisite2";
const mainSiteServer = "sqgjdnmy_Main";


const getEventJsonByIdHandler = (req: any, res: any) => {
    let uiJson: UiModel = {
        eventId: 0,
        description: "",
        codeName: "",
        date: "",
        backgroundColor: "",
        foregroundColor: "",
        secondaryColor: "",
        heats: [],
        showMaps: 0,
        comments: "",
        tavTeken: 0,
        eventType: "run",
        sponsors: [],
        location: "",
        showParticipants: 0,
        participationMedal: 0,

        shortName:"",
        logo:"",
        registrationUrl:"",
        participantsListUrl:"",
        resultsUrl:"",
        coverImage:"",
        detailsImage:"",
        contactImage:"",
        contactPhone:"",
        organizerDetails:"",
        gatheringTime:"",
        ceremonyTime:"",
        enrollmentInclude:"",
        dateTime:"",
        endDate:"",
        status:"registration",
        isRegistrationInEventDay:0,

        // priceDates:[],
        wazeDirection:"",
        gtmId:null,
        gallery:null,
        generalGallery:null,
        terms:null,
        v:1
    }
    const eventId = req.params.id
    const query = `select * 
            from ${miniSiteServer}.events as e inner join ${mainSiteServer}.main2 as m on e.comp = m.comp 
            where e.eventId = ${eventId}`
    connection.query(query, function (err: string, result: any) {
        if (result?.length > 0) {
            const resultValue = result[0];
            uiJson = {
                ...uiJson, eventId: resultValue.eventId,
                description: resultValue.description,
                codeName: resultValue.codeName,
                date: resultValue.date,
                backgroundColor: resultValue.backgroundColor,
                foregroundColor: resultValue.foregroundColor,
                secondaryColor: resultValue.secondaryColor,
                eventType: resultValue.Type,
                showMaps: resultValue.showMaps,
                comments: resultValue.comments,
                tavTeken: resultValue.tavTeken,
                location: resultValue.location,
                showParticipants: resultValue.showParticipants,
                participationMedal: resultValue.participationMedal,

                shortName: resultValue.shortName,
                logo: resultValue.logo,
                registrationUrl: resultValue.registrationUrl,
                participantsListUrl: resultValue.participantsListUrl,
                resultsUrl: resultValue.resultsUrl,
                coverImage: resultValue.coverImage,
                detailsImage: resultValue.detailsImage,
                contactImage: resultValue.contactImage,
                contactPhone: resultValue.contactPhone,
                organizerDetails: resultValue.organizerDetails,
                gatheringTime: resultValue.gatheringTime,
                ceremonyTime: resultValue.ceremonyTime,
                enrollmentInclude: resultValue.enrollmentInclude,
                dateTime: resultValue.dateTime,
                endDate: resultValue.endDate,
                status: resultValue.status,
                isRegistrationInEventDay:resultValue.isRegistrationInEventDay,
                // priceDates:resultValue.priceDates,
                wazeDirection:resultValue.wazeDirection,
                gtmId:resultValue.gtmId,
                gallery:resultValue.gallery,
                generalGallery:resultValue.generalGallery,
                terms:resultValue.terms,
                v:resultValue.v
            };
        }
    })
    const sponsorQuery = `select * 
            from ${miniSiteServer}.sponsors as s
            where s.eventId = ${eventId}`
    connection.query(sponsorQuery, function (err: string, sponsorRes: any) {
        if (sponsorRes?.length > 0) {
            uiJson = {...uiJson, sponsors: sponsorRes}
        }
    })


    const heatsQuery = `
    select 
      *
    from ${miniSiteServer}.heats as heats inner join ${miniSiteServer}.heats as CR
    on heats.Rolls = CR.Rolls inner join ${sqgjdnmyServer}.CompRoll on ${miniSiteServer}.heats.Rolls = ${sqgjdnmyServer}.CompRoll.Rolls
    where heats.eventId = ${eventId}
    `

    let heatsIdArray: number[] = [];
    connection.query(heatsQuery, function (err: string, result: any) {
        result.forEach((r: HeatModel) => {
            heatsIdArray.push(r.heatId)
        })
        const categoryQuery = `
        select
        CS.*
    from ${miniSiteServer}.compSection as CS
    inner join ${miniSiteServer}.heats as H on CS.heatId = H.heatId
    where H.eventId = ${eventId}
        `
        connection.query(categoryQuery, function (err: string, CategoryResult: any) {
            let categoriesList: { [key: string]: CategoryModel[] } = {};
            CategoryResult.forEach((c: CategoryModel) => {
                if (categoriesList.hasOwnProperty(c.heatId)) {
                    categoriesList[c.heatId].push(c)
                } else {
                    categoriesList = {...categoriesList, [c.heatId]: [c]}
                }
            })
            if (result?.length > 0) {
                uiJson = {...uiJson, heats: createFullHeat(result, categoriesList)};
                res.status(200).json(uiJson)
            }
        })
    })


}

const createFullHeat = (heats: HeatModel[], categoriesDict: { [key: string]: CategoryModel[] }): HeatModel[] => {
    let newHeatList: HeatModel[] = [];
    heats.forEach((h) => {
        let newHeat = {...h};
        newHeat.sections = getHeatCategoryByID(categoriesDict[newHeat.heatId])
        newHeatList.push(newHeat)
    })
    return newHeatList
}
const getHeatCategoryByID = (categoriesList: CategoryModel[]): CategoryModel[] => {
    if (categoriesList) {
        return categoriesList;
    } else {
        return []
    }
}
export {
    getEventJsonByIdHandler,
}