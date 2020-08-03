const { hooks } = require("@adonisjs/ignitor");

hooks.after.providersBooted(() => {
  const Plugins = use("PaulChor/Plugins");
  console.log("After all providers have booted");

  // register action
  Plugins.add_action("greet", () => {
    console.log("[Plugin] says hello world");
  });

  Plugins.add_action("greet", () => {
    console.log("[Plugin] says hello world again");
  });

  Plugins.add_filter("process_text", (input) => {
    input = input + "!!!";
    return input;
  });

  Plugins.add_filter("process_text", (input) => {
    return input.toUpperCase();
  });
});
