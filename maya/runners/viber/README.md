# viber

from:
https://developers.viber.com/docs/api/nodejs-bot-api/

npm install viber-bot --save

## viber webhook
https://developers.viber.com/docs/api/rest-bot-api/#get-started

url:
https://chatapi.viber.com/pa/set_webhook

X-Viber-Auth-Token: 4f71d8d37727de3c-8de4b5046e509620-7df60b01af1130bc

post data

{
  "url":"https://viber.fintechlife.net:64107/webhook",
  "event_types":[
    "delivered",
    "seen",
    "failed",
    "subscribed",
    "unsubscribed",
    "conversation_started"
  ],
  "send_name": true,
  "send_photo": true
}

## 開發者帳號
https://partners.viber.com/account/5724595004113411644/info

account name: fintech
email: samtzuss@yahoo.com.tw
token: 4f71d8d37727de3c-8de4b5046e509620-7df60b01af1130bc

## viber Buttons parameters (keyboard)
https://developers.viber.com/docs/tools/keyboards/

ActionType:open-url
OpenURLType: internal
InternalBrowser

## robot webhook url
http(s)://viber-webhook.fintechlive.net:64101

## todo-list
port table
nginx / fastify

## arena
arena主機
ip: 220.135.157.27
arena.fintechlife.net (220.135.157.27 小巨蛋主機)
wp.fintechlife.net
viber.fintechlife.net

## nginx to ssh / remoteDesk
ref:
https://monotone.github.io/2017/12/16/reverse-proxy-for-ssh-by-nginx/

## cloudflare https ports
443
2053
2083
2087
2096
8443
## cloudflare https ports
80
8080
8880
2052
2082
2086
2095