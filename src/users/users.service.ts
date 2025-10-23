import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
        private users = [
        { id: 1, name: 'Alice Service' },
        { id: 2, name: 'Bob Service' },
        { id: 3, name: 'SM Service' },
    ]
    getAllUsers() {
        return this.users;
    }
}
