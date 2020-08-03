const hooks = {};
const filters = {};

function add_action(name, func) {
  if (!hooks.hasOwnProperty(name)) {
    hooks[name] = [];
  }
  hooks[name].push(func);
}

function run_action(name) {
  console.log(hooks);
  if (hooks.hasOwnProperty(name)) {
    hooks[name].forEach(function (f) {
      f();
    });
  } else {
    console.log(`Action ${name} not found!`);
  }
}

module.exports = { add_action, run_action };
