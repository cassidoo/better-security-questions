const data = require('./questions.json');

exports.silly = data.silly;
exports.serious = data.serious;

exports.random = function random(type) {
  let items;

  // If a question type is not passed to the function,
  // merge all the questions types.
  if (!type) {
    const types = Object.keys(data);
    items = []

    for (const type of types) {
       items = [...items, ...data[type]]
    }
  } else {
    items = data[type]
  }

  if (!items) {
    return undefined;
  }

  return items[Math.floor(Math.random() * items.length)];
};