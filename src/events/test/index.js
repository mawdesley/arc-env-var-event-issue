// learn more about event functions here: https://arc.codes/primitives/events
exports.handler = async function subscribe (event) {
  console.log(`In event lambda: FOO IS ${process.env.FOO}`);
  return
}