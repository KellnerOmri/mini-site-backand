import mysql from "mysql";

let connection: mysql.Connection;

const connectToMysql = async () => {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "minisite2",
    });

    connection.on('connected', () => {
        console.log('connected to mysql')
    })

    connection.on('error', (error) => {
        console.log(`connected to mysql ${error}`)
    })

    await connection.connect((err: any) => {
        if (err) {
            throw err;
        }
    });
}

const getEvents = (req: any, res: any) => {
    const query = "select * from events"
    connection.query(query,function (err:any,result:any, fields:any) {
        res.status(200).json(result)
    })
}

const getEventById = (req: any, res: any)=>{
    console.log("getEventById")
}

const updateEventById = (req: any, res: any)=>{
    console.log("updateEventById")
}

export {
    getEvents,
    getEventById,
    updateEventById,
    connectToMysql
}