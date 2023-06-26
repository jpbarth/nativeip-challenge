import { io } from "socket.io-client";

function socketConnection() {
  return io("http://localhost:3030");
}

export { socketConnection };
