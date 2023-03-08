import { UserServer, json, stringify } from "./server";

const server = new UserServer();

server.fetch('https://custom-server/api/v1/users')
    .then((resolve) => {
        console.log(json(resolve))
    });