import {SponsorModel} from "./sponsor.model";
import {CategoryModel} from "./category.model";
import {HeatModel} from "./heat.model";

export interface UiModel {
    "eventId":number,// 3,
    "description":string,// " מרוץ עמק חפר 2023",
    "codeName":string,// "heferace",
    "date": string,//"10/03/23",
    "dateTime": string,//"10/03/23 07:30",
    "location": string,//"פארק איטליה",
    "backgroundColor": string,//"#da6716",
    "foregroundColor":string,// "#f4f2f1",
    "secondaryColor": string,//"#a9846a",
    heats:HeatModel[]
    // "heats": [
    //     {
    //         "Rolls": number,// 1,
    //         "description": string,// "10 ק\"מ",
    //         "startHeat": string,//"07:30",
    //         "distance": null,
    //         "minAge": number,//12,
    //         "maxAge": number,//99,
    //         "prices": number[],
    //         "prizes": [],
    //         "mapUrl": string,//"https://www.alltrails.com/widget/map/map-january-5-2023-32b683d?u=m",
    //         "amami": number,//0,
    //         "routeDescription": null,
    //         "mapIframe": number,//1,
    //         "showMap": number,//1,
    //         "sections": CategoryModel[]
    //     }],
    "sponsors": SponsorModel[],

    "showParticipants": number,//1,
    "participationMedal": number,//1,

    "eventType": string,
    "showMaps": number,// 1
    "isRegistrationInEventDay": number,//true,

    "shortName": string,//"מרוץ עמק חפר",
    "logo": string,//"https://www.4sport.co.il/4sportTR/3539/Event.png?v=23",
    "registrationUrl": string,//"https://www.4sport-live.com/registration/form1/?event=3539",
    "participantsListUrl": string,//"https://www.4sport-live.com/registration/ParticipantsList/?event=3539",
    "resultsUrl": string ,//"https://www.4sport-live.com/results/home2?event=3539",
    "coverImage":string, //"https://www.4sport-live.com/media/minisite/3/images/cover.png?v=4",
    "detailsImage":string,// "https://www.4sport-live.com/media/minisite/3/images/details.png?v=4",
    "contactImage":string,// "https://www.4sport-live.com/media/minisite/3/images/contact.png?v=4",
    "contactPhone": string //"436346",
    "organizerDetails": string //"מחלקת הספורט מועצה אזורית עמק חפר",
    "gatheringTime":string,// "06:00",
    "ceremonyTime":string, // "10:00",
    "enrollmentInclude": string,   // "מה כוללת ההרשמה: חולצת המרוץ",



    "tavTeken": number //0 or 1

    "status":string,// "registration",


    "endDate": string,//"06/03/23 21:00",
    "comments":string
    // need to support
    // "priceDates": string[],
    "wazeDirection":string // "https://waze.com/ul?q=66%20Acacia%20Avenue&ll=32.36737442193444,34.90827196363456&navigate=yes",
    "gtmId": null,
    "gallery": null,
    "generalGallery": null,
    "terms": null,
    "v": number, //4
}