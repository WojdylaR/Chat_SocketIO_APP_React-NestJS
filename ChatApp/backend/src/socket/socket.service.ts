import { Injectable } from '@nestjs/common';
import { Zlib } from 'zlib';

@Injectable()
export class SocketService {
    users = []

    async createUser(_username: any, _socketId: any) : Promise<any>{
        let user = {username: "", socketId: ""};
        user.username = _username;
        user.socketId = _socketId;
        this.users.push(user);
        return user
    }

    async getUser(_socketId: any){
        let x = 0;
        while (_socketId != this.users[x].socketId){
            x++
        }
        return this.users[x].username;
    }
}
