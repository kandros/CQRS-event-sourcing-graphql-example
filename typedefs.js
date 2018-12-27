const { gql } = require('apollo-server')

const typedefs = gql`
  type CommandSuccess {
    success: Boolean!
  }

  type Product {
    name: String!
    price: Float!
  }

  type Query {
    allProducts: [Product!]!
  }

  input AddProductInput {
    name: String!
    price: Float!
  }

  type Mutation {
    addProduct(input: AddProductInput): CommandSuccess!
    seedProducts: Boolean!
  }
`

module.exports = typedefs
