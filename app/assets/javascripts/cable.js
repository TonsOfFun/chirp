// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable

let App = App || {}
App.cable = ActionCable.createConsumer()
export default App
