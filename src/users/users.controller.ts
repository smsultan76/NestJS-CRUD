import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    private users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'SM' },
    ]
    @Get()
    getAllUsers(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin' ) {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() body: { name: string }) {
        const newUser = {
            id: this.users.length + 1,
            name: body.name,
        }
        this.users.push(newUser);
        return { message: 'User created successfully!' ,
                 user : newUser
        };
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() body: { name : string }) {
        const user = this.users.find(user => user.id === Number(id));
        if (user) {
            user.name = body.name;
            return {
                message : 'User updated successfully!',
                user : this.users,
            }
        }
        return { message : 'User not found!' };
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        const user = this.users.find(user => user.id === Number(id));
        if(user) {
            this.users = this.users.filter(user => user.id !== Number(id));
            return {
                message : 'User deleted successfully!',
                users : this.users,
            }
        }
        return { message : 'User not found!' };
    }
}
