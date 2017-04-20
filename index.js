const builder = require('botbuilder');
const builderAzure = require('botbuilder-azure');
const restify = require('restify');

let connector = new builderAzure.BotServiceConnector({
   appId: process.env['MicrosoftAppId'],
   appPassword: process.env['MicrosoftAppPassword'],
   stateEndpoint: process.env['BotStateEndpoint'],
   openIdMetadata: process.env['BotOpenIdMetadata']
});

let bot = new builder.UniversalBot(connector, (session) => {
  session.send(`${session.message.user.name} says ${session.message.text}`);
});

module.exports = { default: connector.listen() };