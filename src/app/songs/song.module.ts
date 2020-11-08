import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SongsComponent } from './songs.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongItemComponent } from './song-list/song-item/song-item.component';
import { SongStartComponent } from './song-start/song-start.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongRoutingModule } from './song-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SongsComponent,
    SongListComponent,
    SongDetailComponent,
    SongItemComponent,
    SongStartComponent,
    SongEditComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    SongRoutingModule,
    SharedModule
  ]
})
export class SongsModule {}
