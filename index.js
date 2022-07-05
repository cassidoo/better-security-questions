const data = require('./questions.json');

exports.silly = data.silly;
exports.serious = data.serious;

exports.random = function random(type) {
  const items = data[type];

  if (!items) {
    return undefined;
  }

  return items[Math.floor(Math.random() * items.length)];
};
