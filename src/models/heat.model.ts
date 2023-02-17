import {CategoryModel} from "./category.model";

export interface HeatModel {
    heatId:number,
    eventId:number,
    Rolls:number,
    prize:number,
    mapUrl:string,
    amami:number,
    routeDescription:string,
    mapIframe:number,
    showMap:number,
   description: string,
   startHeat: string, // TODO ask Ran for regex
   MinAge: number,
   MaxAge: number,
   PriceProfile: number,
   sections:CategoryModel[]
}


