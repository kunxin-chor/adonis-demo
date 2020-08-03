const { ServiceProvider} = require("@adonisjs/fold")

class PluginsProvider extends ServiceProvider {
  register() {
    this.app.singleton("PaulChor/Plugins", ()=>{
      return require('.');
    })
  }
}

module.exports = PluginsProvider;
