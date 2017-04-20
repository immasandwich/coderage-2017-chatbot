import builder from 'botbuilder';

let connector = new builder.ConsoleConnector().listen();

let bot = new builder.UniversalBot(connector, (session) => {
  session.send(`${session.message.user.name} says ${session.message.text}`);
});