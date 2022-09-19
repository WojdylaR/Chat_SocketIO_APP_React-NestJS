import { Body, Controller, Post } from '@nestjs/common';
import { SocketService } from './socket.service';

@Controller('/socket')
export class SocketController {
    constructor(private readonly socketService: SocketService) {}

    @Post('createuser')
    createUser(@Body('id') id:any, @Body('username') username: any){
        try {
            return this.socketService.createUser(username, id)
        } catch(e){
            return e;
        }
    }
    
    
}
