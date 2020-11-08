import { Song } from './../song.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as iRealReader from 'ireal-reader';

import { SongService } from '../song.service';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  id: number;
  editMode = false;
  songForm: FormGroup;

  iRealHtml;
  iRealJSON;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.songService.updateSong(this.id, this.songForm.value);
    } else {
      this.songService.addSong(this.songForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    if (this.editMode) {
      const song = this.songService.getSong(this.id);
      this.iRealHtml = song.iRealHtml;
    }

    this.songForm = new FormGroup({
      iRealHtml: new FormControl(this.iRealHtml, Validators.required)
    });

    if (this.iRealHtml) {
      this.iRealJSON = this.getFirstSong();
    }
  }

  getFirstSong(): JSON {
    return iRealReader(this.iRealHtml).songs[0];
  }

}
