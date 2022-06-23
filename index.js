const express = require('express');
const app = express();
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://doubleJ:dlwndwo2@boilerplate.dhy6bpf.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{console.log("MongoDB Connected...")
}).catch((err)=>console.log(err))




app.get('/', function(req, res) { 
  res.send('server is on')
})

app.listen(port, function() {
    console.log('listening on 5000')
})

