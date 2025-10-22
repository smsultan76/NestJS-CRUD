import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    private users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'SM' },
    ]

    @Get()
    getAllUsers() {
        return this.users;
    }

    @Get(':id')
    getUserById(@Param('id') id: number){
        return this.users.find(user => user.id === Number(id));
    }
}
