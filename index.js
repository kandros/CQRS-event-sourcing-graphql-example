const { ApolloServer } = require('apollo-server')
const eventStore = require('./event-store')
const queries = require('./queries')
const commands = require('./commands')

const server = new ApolloServer({
  typeDefs: require('./typedefs'),
  resolvers: require('./resolvers'),
  context: {
    eventStore: eventStore.createStore(),
    queries,
    commands,
  },
})

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`)
})
