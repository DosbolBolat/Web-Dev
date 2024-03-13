import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {album, photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL : string = 'https://jsonplaceholder.typicode.com';

  constructor(private client : HttpClient) {
  }
  createAlbum(newAlbum : album): Observable<album>{
    return this.client.post<album>(`${this.BASE_URL}/albums/`, newAlbum);
  }
  getAlbums(): Observable<album[]>{
    return this.client.get<album[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id: number): Observable<album>{
    return this.client.get<album>(`${this.BASE_URL}/albums/${id}`);
  }
  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }
  getPhoto(idPhoto :number): Observable<photo[]>{
    return this.client.get<photo[]>(`${this.BASE_URL}/albums/${idPhoto}/photos`);
  }
}
