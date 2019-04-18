import express from "express";
import apiRouter from "./api";
import {ApolloServer, gql} from 'apollo-server-express';
import { resolve } from "path";
import { typeDefs, resolvers } from "./graphql";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(resolve(__dirname, "../../client/dist")));

app.use("/api", apiRouter);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

apolloServer.applyMiddleware({app});

app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "../../client/dist/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));