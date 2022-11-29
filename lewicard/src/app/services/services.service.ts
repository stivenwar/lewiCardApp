import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Word} from '../interface/claseWord';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl = 'http://localhost:3000/api/';
  words: Observable<any>;
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Word[]> {
    return this.http.get<Word[]>(this.baseUrl+'data');
  }

  get(id: any): Observable<Word> {
    return this.http.get(`${(this.baseUrl)}/${id}`);
  }

  create(data: any): Observable<any> {
    console.log(this.baseUrl, data);
    return this.http.post(this.baseUrl+'create/', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl+'delete'}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<Word[]> {
    return this.http.get<Word[]>(`${this.baseUrl}?title=${title}`);
  }
}
