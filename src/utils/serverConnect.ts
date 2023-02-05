import mysql from "mysql";

export let connection: mysql.Connection;

const connectToMysql = async () => {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        // database: "minisite2",
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

export {
    connectToMysql
}