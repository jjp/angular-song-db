import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Song } from '../songs/song.model';
import { SongService } from '../songs/song.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private songService: SongService
  ) {}

  storeSongs() {
    const songs = this.songService.getSongs();
    this.http
      .put( environment.firebaseDBUrl + 'songs.json',
        songs
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchSongs() {
    return this.http
      .get<Song[]>(
        environment.firebaseDBUrl + 'songs.json'
      )
      .pipe(
        map(songs => {
          return songs.map(song => {
            return {
              ...song
            };
          });
        }),
        tap(songs => {
          this.songService.setSongs(songs);
        })
      );
  }

}
