require('dotenv').load();
const request = require('request');
const AssistantV1 = require('ibm-watson/assistant/v1');

//Assistant Credentials
var assistant = new AssistantV1({
  iam_apikey: process.env.IAM_APIKEY,
  workspace_id: process.env.WORKSPACE_ID,
  url: process.env.SERVICE_ENDPOINT,
  version: '2019-03-28'
});
var workspace = process.env.WORKSPACE_ID;

exports.change_workspace = (req, res) => {
  if (req.body.newWorkspace) {
    workspace = req.body.newWorkspace
    res.status(200).json({
      err: false,
      workspace: workspace
    });
  } else {
    res.sendStatus(404).json({
      msg: 'Workspace_id not found (see your env file or put in configurations).'
    });
  }
}

exports.getWorkspace = () => {
  return workspace;
}

exports.message = (req, res) => {
  const input = (req.body.input != undefined) ? req.body.input : null;
  const context = (req.body.context != undefined) ? req.body.context : null;
  sendMessage(input, context)
    .then((conversationResponse) => {
      res.send(conversationResponse);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
}

const sendMessage = (input, _context) => {
  return new Promise((resolve, reject) => {
    let context = (_context != null) ? _context : {};
    if (input != null) {
      assistant.message({
        workspace_id: workspace,
        input: {
          'text': input.text
        },
        context: context
      }, function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    } else {
      reject({
        err: true,
        msg: 'Input vazio'
      });
    }
  })
}

const sendMessageHTTP = (input, _context) => {
  return new Promise((resolve, reject) => {
    let context = (_context != null) ? _context : {};
    const rbody = {
      input: {
        text: input.text
      },
      context: context
    }
    if (input != null) {
      request({
        uri: process.env.SERVICE_ENDPOINT + "v1/workspaces/" + workspace + "/message?version=2018-09-20",
        body: JSON.stringify(rbody),
        method: 'POST',
        auth: {
          user: "apikey",
          pass: process.env.IAM_APIKEY
        },
        headers: {
          "Content-Type": "application/json"
        },
        agentOptions: {
          rejectUnauthorized: false
        }

      }, function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(JSON.parse(res.body));
        }
      });
    } else {
      reject({
        err: true,
        msg: 'Input vazio'
      });
    }
  })
}
