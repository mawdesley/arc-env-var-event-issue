const { events } = require("@architect/functions");

exports.handler = async function http (req) {

  console.log(`In HTTP lambda: FOO IS ${process.env.FOO}`);

  await events.publish({
    name: "test",
    payload: {}
  });

  
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: ""
  }
}