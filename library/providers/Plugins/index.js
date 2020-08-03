let actions = {};
let filters = {};

function add_action(name, func) {
  // if the action has not been added to the actions object
  if (!actions.hasOwnProperty(name)) {
    actions[name] = [];
  }

  actions[name].push(func);
}

function run_action(name) {
  if (actions.hasOwnProperty(name)) {
    actions[name].forEach(function (f) {
      f();
    });
  } else {
    console.log(`No action by the name of ${name} is found`);
  }
}

function add_filter(name, func) {
  // if the action has not been added to the actions object
  if (!filters.hasOwnProperty(name)) {
    filters[name] = [];
  }

  filters[name].push(func);
}

function run_filter(name, input) {
  if (filters.hasOwnProperty(name)) {
    let all_filters = filters[name];
    console.log(all_filters);
    for (let f of all_filters) {
      console.log("Before filter:", input)
      input = f(input);
      console.log("After filter:", input)

    }
    return input;
  } else {
    console.log(`No action by the name of ${name} is found`);
  }
}

module.exports = { add_action, run_action, add_filter, run_filter };
