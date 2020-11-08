import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Song } from './song.model';

@Injectable()
export class SongService {

  songsChanged = new Subject<Song[]>();

  private songs: Song[] = [];

  constructor() {}

  setSongs(songs: Song[]) {
    this.songs = songs;
    this.songsChanged.next(this.songs.slice());
  }

  getSongs() {
    return this.songs.slice();
  }

  getSong(index: number) {
    return this.songs[index];
  }

  addSong(song: Song) {
    console.log('Song: ', song);
    this.songs.push(song);
    this.songsChanged.next(this.songs.slice());
  }

  updateSong(index: number, newSong: Song) {
    this.songs[index] = newSong;
    this.songsChanged.next(this.songs.slice());
  }

  deleteSong(index: number) {
    this.songs.splice(index, 1);
    this.songsChanged.next(this.songs.slice());
  }

}
