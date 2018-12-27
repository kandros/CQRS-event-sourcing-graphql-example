const events = require('../event-store/events')

function validateInput({ name, price }) {
  if (!name || name.length < 3) {
    throw new Error(`title can't be lesser than 3 characters`)
  }

  if (price <= 0) {
    throw new Error('price must be more than 0')
  }
}

module.exports = function addProduct({ name, price }, context) {
  validateInput({ name, price })

  context.eventStore.commit({
    type: events.PRODUCT_ADDED,
    payload: {
      name,
      price,
    },
  })
}
