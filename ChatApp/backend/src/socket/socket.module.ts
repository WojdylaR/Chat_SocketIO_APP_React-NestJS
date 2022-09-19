import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { SocketService } from './socket.service';
import { SocketController } from './socket.controller';

@Module({
  providers: [SocketGateway, SocketService],
  controllers: [SocketController]
})
export class SocketModule {}
