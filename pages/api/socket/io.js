import { Server as ServerIO } from 'socket.io';

let ioInstance;

export const config = {
    api: {
        bodyParser: false,
    },
};

const ioHandler = (request, response) => {
    ioInstance = response.socket.server.io;

    if (!response.socket.server.io) {
        const path = "/api/socket/io";
        const httpServer = response.socket.server;
        const io = new ServerIO(httpServer, {
            path: path,
            addTrailingSlash: false,
        });

        response.socket.server.io = io;

        const onConnection = (socket) => {
            console.log("New connection", socket.id);
        };

        response.socket.server.io.on("connection", onConnection);

        console.log("Socket server started successfully!");

        response.end();
    }

    response.end();
}

export default ioHandler;
