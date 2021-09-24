import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8082/api/v1/rooms';


  constructor(private http: HttpClient) { }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.baseUrl}`, room);
  }

  getRooList(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }

  getRoom(id: number): Observable<Room>  {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  updateRoom(id: number, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.baseUrl}/${id}`, room);
  }


  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
