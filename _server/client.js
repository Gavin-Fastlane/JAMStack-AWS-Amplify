// global.fetch = require('node-fetch')

async function getNodeFetch(params) {
  const fetchModule = await import('node-fetch')
  global.fetch = fetchModule.default

  
  const ApolloClient = require('@apollo/client/core').ApolloClient
  const PrismicLink = require('apollo-link-prismic').PrismicLink
  const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
  // import gql from "graphql-tag";
  
  
  
  global.client = global.client || new ApolloClient({
    link: PrismicLink({
      uri: "https://tech-hunt.prismic.io/graphql",
      accessToken: "MC5ZajJYNHhFQUFDSUE4aUVv.77-977-9Le-_ve-_vRfvv71K77-977-977-977-9JDvvv71x77-9OkHvv719EHjvv73vv73vv73vv70gMFQzXw"
    }),
    cache: new InMemoryCache()
  });

  return global.client
}
module.exports = async function (params) {
  return await getNodeFetch()
}; 
