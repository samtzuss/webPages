This project was bootstrapped with
[Bottender](https://github.com/Yoctol/bottender) init script.

## Sending Feedback

Always feel free to open an issue to
[Bottender](https://github.com/Yoctol/bottender/issues) repository.

## install bottender

npx create-bottender-app bot
cd bot
npm install
npm i body-parser express -s

## Configuration

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels.

### The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work, you must put required environment variables into your `.env` file.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
yarn dev --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm start -- --console
yarn start --console
```

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

## Learn More
To learn Bottender, check out the [Bottender documentation](https://bottender.js.org/docs/en/getting-started).
For more examples, see [Bottender examples](https://github.com/Yoctol/bottender/tree/master/examples).

## note
env_file: for container

## docker-compose run
sudo docker-compose run --rm --service-ports bot npm install
sudo docker-compose run --rm --service-ports bot npm run dev-cs
sudo docker-compose run --rm --service-ports bot /bin/bash -c "npm install -g npm@8.15.0 && npm install"
sudo docker-compose run --rm --service-ports bot npm run dev -- --console
sudo docker-compose run --rm --service-ports bot bash -c "(DEBUG=bottender:dialog; npm run dev -- --console)"
sudo docker-compose run --rm --service-ports bot npm run dev
sudo docker-compose exec --rm --service-ports bot npx bottender telegram webhook set -w http://fintechlife.net:63107/webhooks/telegram
sudo docker exec 1257825f1155 npx bottender telegram webhook set -w https://fintechlife.net:63107/webhooks/telegram

sudo docker-compose up -d node
sudo docker-compose down
sudo docker-compose restart node
sudo docker exec -ti -w /app/messagers/bot node bash
sudo docker exec node npm -v
sudo docker exec node npm install -g npm@8.15.1
sudo docker exec -w /app/messagers/bot node npm list express body-parser nodemon

## console mode
sudo docker exec -i -w /app/messagers/bot -e "PORT=8443" node npm run dev -- --console

## ssl mode
sudo docker exec -i -w /app/messagers/bot -e "PORT=8443" -e "CERTPATH=/app/messagers/bot/ssl" node npm run dev-cs
sudo docker exec -i -w /app/messagers/bot -e "PORT=8443" -e "CERTPATH=/app/messagers/bot/ssl" node npm run start-cs
sudo docker exec -i -w /app/messagers/bot -e "PORT=8443" -e "CERTPATH=/app/messagers/bot/ssl" node nodemon -v

##
sudo docker exec -i -w /app/messagers/bot node npx bottender telegram webhook set -w https://fintechlife.net:8443/webhooks/telegram
sudo docker exec -i -w /app/messagers/bot node npx bottender line webhook set -w https://fintechlife.net:8443/webhooks/line

## webhook
https://fintechlife.net:8443/webhooks/slack
