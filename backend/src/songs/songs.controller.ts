import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {

    }
    @Get()
    async findAll(): Promise<string[]> {
        return this.songsService.findAll();
    }
    @Get(":id")
    async findOne(): Promise<string[]> {
        return ["fetch based on id"]
    }
    @Put(":id")
    async updateSong(): Promise<string[]> {
        return ["update based on id"]
    }
    @Delete(":id")
    async deleteSong(): Promise<string[]> {
        return ["delete song based on id"]
    }
    @Post()
    async createSong(song: string): Promise<string> {
        return this.songsService.createSong(song)
    }
}
