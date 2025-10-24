import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    create(data: CreateProfileDto){
        return this.prisma.profile.create({ data });
    }


    findAll(){
        return this.prisma.profile.findMany();
    }


    findOne(id: number){
        return this.prisma.profile.findUnique({ where: { id } });
    }

    update(id: number, data: UpdateProfileDto){
        return this.prisma.profile.update({
            where: { id },
            data
        });
    }

    remove(id: number){
        return this.prisma.profile.delete({ where: { id } });
    }
}
