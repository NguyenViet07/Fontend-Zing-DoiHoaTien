import {Component, OnInit} from '@angular/core';
import {Song} from '../../interface/song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {
  songList: Song[] = [];
  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.songService.getAllSong().subscribe(result => {
      this.songList = result;
    });
  }

}
