import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { Prisma } from '../db/generated/prisma-client'

const gql = new GraphQLServer({
    typeDefs: './src/gql/schemas/index.graphql',
    resolvers,
    context: (req) => ({
        req,
        prisma: new Prisma()
    })
})

gql.start({port: 4000} , () => {
    console.log("SERVER STARTING AT 4000")
})