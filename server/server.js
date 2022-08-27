const express = require('express');
const app = express();
const port =  process.env.port || 4040
// Database connection
const database = require('./database/DBconnection')
database()
const cors = require('cors')
const Student = require('./Routes/student')



//  Middleware 
app.use(express.json());
app.use(cors());


//  Router
app.use('/data',Student)

// Server listining
app.listen(port, ()=>{
console.log(`server running at port ${port}`)
}) 