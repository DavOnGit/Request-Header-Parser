const moment = require('moment');
const express = require('express');
const app = express();

app.get('/api/hparser', function(req,res) {
    
    var cli = {
        ipaddress: req.ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/).toString(),
        language: req.headers['accept-language'].match(/^[a-z]{2}-[A-Z]{2}/).toString(),
        software: req.headers['user-agent'].replace(/^.+\(/,'').replace(/\).+$/,'').replace(/\srv:\d+\.\d+$/,'')
    };
    res.send(cli);
});
app.listen(process.env.PORT || 8080);