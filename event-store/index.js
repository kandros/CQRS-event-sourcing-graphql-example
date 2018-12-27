module.exports = {
  createStore() {
    const events = []
    return {
      // add a new event into the event store
      commit(event) {
        // eslint-disable-next-line no-console
        console.log(event)
        events.push(event)
      },

      // get all events
      getEvents() {
        return events
      },

      // given an event type, return the payload events matching the type
      reducePayloadForEvent(eventType) {
        return events.reduce((payloads, event) => {
          switch (event.type) {
            case eventType:
              return [...payloads, event.payload]

            default:
              return payloads
          }
        }, [])
      },
    }
  },
}
