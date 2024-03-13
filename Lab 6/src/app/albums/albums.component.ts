import {Component, OnInit} from '@angular/core';
import {album} from "../models";
import {ALBUMS} from "../db";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AlbumService} from "../album.service";
import {filter} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: album[];
  newAlbum : album;
  loaded : boolean = false;
  id = 100;
  constructor(private albumsService : AlbumService) {
    this.newAlbum={
      userId : 1,
      id : this.id,
      title : ''
    }
  }

  ngOnInit() {
      this.getAlbum();
  }
  addAlbum(){
    this.albumsService.createAlbum(this.newAlbum).subscribe((album ) =>{
      this.id++;
      album.id = this.id;
      this.albums.push(album);
      alert('album created!');
      this.newAlbum = {} as album;
    })
  }

  getAlbum(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }
  deleteAlbum(id: number){
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((a) =>  a.id !== id);
    });
  }

}
