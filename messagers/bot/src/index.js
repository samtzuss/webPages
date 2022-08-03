const { router, route, text, payload } = require('bottender/router');
const { getClient } = require('bottender');

const client_telegram = getClient('telegram');
let meInfo;

async function SayHi(context) {
  await context.sendText('您說的是 Hi!' + meInfo);
}

async function SayHello(context) {
  await context.sendText('您說的是 Hello!' + meInfo);
}


async function Command(
  context,
  {
    match: {
      groups: { command },
    },
  }
) {
  // | input | command |
  // | --------- | ---------- |
  // | /join | `join` |
  // | /invite | `invite` |
  // | /whatever | `whatever` |
  await context.sendText(`Executing command: ${command}`);
}

async function Unknown(context) {
  await context.sendText('Sorry. I do not understand what you say.');
}

module.exports = async function App(context) {
  // if (context.event.isText) {
  //   await context.sendText('Welcome to Bottender ' + context.event.text);
  // }

  // await context.sendText('Welcome to Bottender ' + JSON.stringify(context.session));

  if (context.platform === 'telegram') {
    const obj = await client_telegram.getMe();
    meInfo = JSON.stringify(await context.getChatMember(obj.id));
  } else {
    meInfo = '';
  }

  return router([
    // return the `SayHi` action when receiving "hi" text messages
    text('hi', SayHi),
    // return the `SayHello` action when receiving "hello" text messages
    text('hello', SayHello),
    text(/^\.(?<command>\S+)$/i, Command),
    text('*', Unknown),

    payload('GET_STARTED', SayHi),
    // return the `Unknown` action when no other route matches the incoming event
    route('*', Unknown),
  ]);
};
