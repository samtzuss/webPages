const { router, route, text, payload } = require('bottender/router');

async function SayHi(context) {
  await context.sendText('您說的是 Hi!');
}

async function SayHello(context) {
  await context.sendText('您說的是 Hello!');
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
