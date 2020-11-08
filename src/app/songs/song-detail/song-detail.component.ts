import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Song } from '../song.model';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  song: Song;
  id: number;
  iRealJson: string;

  constructor(private songService: SongService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.song = this.songService.getSong(this.id);
        }
      );
    this.iRealJson = this.song.iRealJson;
  }

  onEditSong() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteSong() {
    this.songService.deleteSong(this.id);
    this.router.navigate(['/songs']);
  }

}
