const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  console.log("adding actions to plugins");
  const Plugins = use('PaulChor/Plugins');
  Plugins.add_action("greet", ()=>{
    console.log("[Plugin] Hello World");
  });
})
