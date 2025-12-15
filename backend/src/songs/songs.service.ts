import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly songsArr: string[] = [
        "treyway"
    ]

    createSong(song) {
        this.songsArr.push(song);
        return song;
    }
    findAll() {
        return this.songsArr
    }
}
