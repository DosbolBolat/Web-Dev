import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AlbumsComponent} from "./albums/albums.component";
import { AlbumPhotosComponent } from "./album-photos/album-photos.component"
import {AlbumDetailComponent} from "./album-detail/album-detail.component";

export const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent, title : 'Home'},
  {path : 'about', component : AboutComponent, title : 'About'},
  {path : 'albums', component : AlbumsComponent, title : 'Albums'},
  {path : 'albums/:albumsId', component : AlbumDetailComponent, title : 'Album Detail'},
  {path : 'albums/:albumsId/photos', component : AlbumPhotosComponent, title : 'Album photos'},
  {path : '**', component : NotFoundComponent, title : 'ERROR 404!'}
];
