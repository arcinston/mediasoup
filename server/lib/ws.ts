import WebSocket from "ws";

const WebsocketConnection = async (websock: WebSocket.Server) => {
  websock.on("connection", (ws: WebSocket) => {
    ws.on("message", (message: string) => {
      console.log("the message is : ", message);
      ws.send("yo wassup");
    });
  });
};

export { WebsocketConnection };
