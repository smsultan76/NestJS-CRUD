import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    create(data: CreateProfileDto){
        return this.prisma.profile.create({ data });
    }
}
