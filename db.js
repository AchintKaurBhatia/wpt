const mysql=require('mysql')

const openConnection=()=>{
    const connection=mysql.createConnection({
        user:'root',
        host:'localhost',
        password:'cdac',
        database:'wpt',
        port:3306
    })

    connection.connect()
    return connection
}

module.exports={
    openConnection
}