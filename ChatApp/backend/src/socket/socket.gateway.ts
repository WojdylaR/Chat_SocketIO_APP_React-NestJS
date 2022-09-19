import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  }
})

export class SocketGateway {

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket){
    console.log(`Client connected: ${client.id}`)
  }

  handleDisconnect(client: Socket){
    console.log(`Client disconnect: ${client.id}`)
  }
  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    console.log(client.id + " = " + data)
    this.server.emit('message', client.id, data)
  }

  
}