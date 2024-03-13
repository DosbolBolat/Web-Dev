import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, RouterModule} from "@angular/router";
import {ALBUMS} from "../db";
import {album} from "../models";
import {AlbumService} from "../album.service";
import {CommonModule, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album! : album;
  loaded! : boolean;
  changed! : boolean;
  newTitle! : string;
  constructor(private route : ActivatedRoute,
              private albumService : AlbumService) {
    this.changed = false;
    this.newTitle = '';
  }
  ngOnInit() {
    this.getAlbum()
  }

  getAlbum(){
    this.route.paramMap.subscribe((param:ParamMap) => {
      const albumId = Number(param.get('albumsId'));
      this.loaded = false;
      this.albumService.getAlbum(albumId).subscribe((album : album) => {
        this.album = album;
        this.loaded = true;
      })
      // this.album = ALBUMS.find((albums : album) => albums.id === albumId) as album;
    })
  }
  isUpdate(){
    this.changed = !this.changed;
  }
  saveTitle(){
    if(this.newTitle){
      this.album.title = this.newTitle;
    }
  }


}
