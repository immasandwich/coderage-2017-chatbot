import builder from 'botbuilder';
import dotenv from 'dotenv';

dotenv.config();

let connector = new builder.ConsoleConnector().listen();

let bot = new builder.UniversalBot(connector, (session) => {
  session.send(`Application ID: ${process.env.APP_ID}`);
  // session.send(`${session.message.user.name} says ${session.message.text}`);
});