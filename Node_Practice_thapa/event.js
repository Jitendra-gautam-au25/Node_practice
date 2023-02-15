const events=require("events")

const eventEmitter=new events.EventEmiter()

const myEvent=function (){
    console.log("I am Here");
}

eventEmitter.on("scream",myEvent)

eventEmitter.emit("scream")

module.exports={events,myEvent}