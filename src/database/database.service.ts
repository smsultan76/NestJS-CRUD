import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient inplements OnModuleInit {
    async onModuleInit(){
        await this.#connect();
    }
}
