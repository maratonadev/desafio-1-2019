const request = require('request');
require('dotenv').config();

exports.credentials = (req, res) => {
  let body = {
    api_key: process.env.IAM_APIKEY,
    workspace_id: process.env.WORKSPACE_ID,
    id: process.env.MARATONA_ID,
    cpf: req.body.cpf,
    desafio: process.env.DESAFIO
  }
  
  console.log(body)
  
  request({
    uri: "https://8d829621.us-south.apiconnect.appdomain.cloud/desafios/desafio1",
    body: body,
    json: true,
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
  }, function (err, response) {
    if (err || response.body.error) {
      res.status(500).json({
        msg: 'Something is wrong, contact support.'
      });
    } else if (response.body.err) {
      res.status(400).json({
        msg: 'Already Submited.'
      });
    } else {
      res.status(201).json({
        msg: response.body
      });
    }
  });
}
