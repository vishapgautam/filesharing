const express=require("express")
const connectDB=require('./config/mongodb')
require('dotenv').config()
const app=express()
const fileRouter=require("./routes/files")
const showRouter=require('./routes/show')
const downloadRoute=require('./routes/download')
const path=require('path')
const cors=require('cors')

app.use(express.static('public'))
app.use(express.json())
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')
connectDB()

//COrs
const corsOptions={
    origin:process.env.ALLOWEW_CLIENTS.split(',')
}
app.use(cors(corsOptions))
const PORT=process.env.PORT||3000;
app.use('/api/files/',fileRouter)
app.use('/files/',showRouter)
app.use('/files/download/',downloadRoute)

app.listen(PORT,()=>{
    console.log(`Server is listining on port ${PORT}....`)
})
