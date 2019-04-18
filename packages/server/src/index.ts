import express from "express";
import apiRouter from "./api";
import { ApolloServer } from "apollo-server-express";
import { resolve } from "path";
import { typeDefs, resolvers } from "./graphql";

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  // simple logging
  const date = new Date(Date.now()).toLocaleString();
  console.log(`Time: ${date} ${req.method} ${req.path}`);
  next();
});

// serve clien dist
app.use(express.static(resolve(__dirname, "../../client/dist")));

// mount /api
app.use("/api", apiRouter);

// setup apollo-graphql
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

apolloServer.applyMiddleware({app});

// html5 routing
app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "../../client/dist/index.html"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));