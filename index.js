import builder from 'botbuilder';
import builderAzure from 'botbuilder-azure';
import restify from 'restify';

let connector = new builderAzure.BotServiceConnector({
   appId: process.env['MicrosoftAppId'],
   appPassword: process.env['MicrosoftAppPassword'],
   stateEndpoint: process.env['BotStateEndpoint'],
   openIdMetadata: process.env['BotOpenIdMetadata']
});

let bot = new builder.UniversalBot(connector, (session) => {
  session.send(`${session.message.user.name} says ${session.message.text}`);
});

export default connector.listen();