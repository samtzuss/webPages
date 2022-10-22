/*
npm install viber-bot --save
npm install express --save
*/

'use strict';

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;

const bot = new ViberBot({
	authToken: '4ff93b14a9e7e75e-a66d76d57d06b1-8589af5068438a26',
	name: "EchoBot",
	avatar: 'http://viber.com/avatar.jpg' // It is recommended to be 720x720, and no more than 100kb.
});

// Perfect! Now here's the key part:
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
	// Echo's back the message to the client. Your bot logic should sit here.
	response.send(message);
});

// Wasn't that easy? Let's create HTTPS server and set the webhook:
const https = require('https');
const port = process.env.PORT || 8080;

// Viber will push messages sent to this URL. Web server should be internet-facing.
const webhookUrl = process.env.WEBHOOK_URL;

const httpsOptions = {
	key: ...,
	cert: ...,
	ca: ...
}; // Trusted SSL certification (not self-signed).

https.createServer(httpsOptions, bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl));
