module.exports = async function App(context) {
  if (context.event.isText) {
      // await context.sendText(context.event.text);
      return SayHi;
    }
};

async function SayHi(context) {
  await context.sendText('Hi!');
}

async function Unknown(context) {
  await context.sendText('Sorry.');
}

async function App(context) {
  if (context.event.text == 'hi') {
    return SayHi;
  }
  return Unknown;
}