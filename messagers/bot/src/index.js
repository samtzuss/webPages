module.exports = async function App(context) {
  if (context.event.isText) {
    await context.sendText('Welcome to Bottender ' + context.event.text);
  }
};
