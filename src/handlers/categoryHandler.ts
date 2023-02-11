import {connection} from "../utils/serverConnect";
import {CategoryModel} from "../models/category.model";
const sqgjdnmyServer ="sqgjdnmy_3603";
const miniSiteServer ="minisite2";


const getCategoriesHandler = (req: any, res: any) => {
    const query = `
    select
        *
    from ${miniSiteServer}.compSection as compSection
    `
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}
const getEventHeatsCategoriesByIdHandler = (req: any, res: any) => {
    const heatId = req.params.id;

    const query = `
    select
        *
    from ${miniSiteServer}.compSection as compSection
 where compSection.heatId = ${heatId}
    `
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const addCategoriesHandler = (req: any, res: any) => {
const newCategoriesList:CategoryModel[] = req.body.createNewCategoriesList;
    let dynamicQuery:string =''
        newCategoriesList.forEach((c,index)=>{
            if (index===newCategoriesList.length-1){
                dynamicQuery=dynamicQuery+`(${c.heatId},${c.description},${c.sortKey});`
            }else {
                dynamicQuery=dynamicQuery+`(${c.heatId},${c.description},${c.sortKey}),`
            }
    })

    const miniSiteQuery = `INSERT INTO ${miniSiteServer}.compSection(heatId, description, sortKey)
    VALUES ${dynamicQuery}`
    connection.query(miniSiteQuery, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

const addCategoryByIdHandler = (req: any, res: any) => {
    const setNewCategory:CategoryModel = {
        heatId: req.body.newCategory.heatId,
        description: req.body.newCategory.description,
        sortKey: req.body.newCategory.sortKey,
    }
    const query = `INSERT INTO ${miniSiteServer}.compSection
    VALUES (null,
    ${setNewCategory.heatId},
     '${setNewCategory.description}',
      ${setNewCategory.sortKey})`
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
//TODO sortKey & heatId is not unique
}
const deleteCategoryByIdHandler = (req: any, res: any) => {
    const updateCategory:CategoryModel = {
        heatId: req.body.deleteCategory.heatId,
        description: req.body.deleteCategory.description,
        sortKey: req.body.deleteCategory.sortKey,
    }
    const query = `DELETE ${miniSiteServer}.compSection 
    FROM ${miniSiteServer}.compSection
    WHERE compSection.heatId = ${updateCategory.heatId} AND
    compSection.sortKey = ${updateCategory.sortKey}
    `
    connection.query(query, function (err: string, result: any) {
        res.status(200).json(result)
    })
}

export {
    getCategoriesHandler,
    getEventHeatsCategoriesByIdHandler,
    addCategoriesHandler,
    addCategoryByIdHandler,
    deleteCategoryByIdHandler
}