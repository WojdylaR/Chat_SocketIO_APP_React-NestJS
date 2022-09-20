import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketModule } from './socket/socket.module';
import { HttpModule } from '@nestjs/axios'
@Module({
  imports: [SocketModule,
            HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
