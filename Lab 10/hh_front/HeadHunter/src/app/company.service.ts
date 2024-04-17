import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {companies, vacancies} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL: string = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {
  }

  // createAlbum(newAlbum : album): Observable<album>{
  //   return this.client.post<album>(`${this.BASE_URL}/albums/`, newAlbum);
  // }
  getCompanies(): Observable<companies[]> {
    return this.client.get<companies[]>(`${this.BASE_URL}/api/companies`);
  }
}
