import express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import { WebsocketConnection } from "../lib/ws";

const main = () => {
  const app = express();
  const server = http.createServer(app);
  const websocket = new WebSocket.Server({ server, path: "/ws" });

  const port = process.env.PORT || 3000;

  WebsocketConnection(websocket);

  server.listen(port, () => {
    console.log("server started on port ", port);
  });
};

export { main };
