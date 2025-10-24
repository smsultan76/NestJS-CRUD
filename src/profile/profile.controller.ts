import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProfileDto } from './dto/create-profile.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    //Create with file upload
    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads/profile_pics',
                filename: (req, file, cb) => {
                    // Fix: 'originalname' not 'orginalname'
                    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, `${unique}${extname(file.originalname)}`);
                },
            }),
        }),
    )
    create(@Body() dto: CreateProfileDto, @UploadedFile() file: Express.Multer.File) {
        if (file) dto.profile_url = `/uploads/profile_pics/${file.filename}`;
        return this.profileService.create(dto);
    }

    @Get()
    findAll(){
        return this.profileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.profileService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: UpdateProfileDto){
        return this.profileService.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: number ){
        return this.profileService.remove(id);
    }
}
