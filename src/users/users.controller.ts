import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    private users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'SM' },
    ]

    @Get()
    getAllUsers(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin' ) {
        return [ this.users, role ?? 'No role'];
    }

    @Get(':id')
    getUserById(@Param('id') id: number){
        return this.users.find(user => user.id === Number(id));
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
