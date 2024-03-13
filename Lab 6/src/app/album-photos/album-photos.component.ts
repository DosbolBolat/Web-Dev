import {Component, OnInit} from '@angular/core';
import {album, photo} from '../models';
import {AlbumService} from '../album.service';
import {ActivatedRoute} from '@angular/router';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos! : photo[];
  Ialbum: album = {} as album;
  Id!: number;
  constructor(private AlbumService: AlbumService, private activatedRouter : ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('albumsId')!;
    this.Id = +id;
    this.AlbumService.getAlbum(+id).subscribe((Ialbum) =>
    {this.Ialbum = Ialbum})
    this.AlbumService.getPhoto(+id).subscribe((photos) => {
      this.photos = photos})
  }

}
