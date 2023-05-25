const express = require('express');
var cors = require('cors')
const app = express();

 app.use(cors())

const data= [
    { lat: 10.99, lng: 77.100 },
    {lat:-33.870453,lng:151.208755},
    {lat:51.509865,lng:-0.118092},
    {lat:40.7167,lng:-73.9682},
    {lat:-26.195246,lng:28.03408}
];

app.get('/',function(req,res){
    res.json(data);
})

app.listen(3000,()=>{
    console.log("app listening to port 3000");
});