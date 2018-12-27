const events = require('../event-store/events')

module.exports = function allProducts(context) {
  return context.eventStore.reducePayloadForEvent(events.PRODUCT_ADDED)
}
