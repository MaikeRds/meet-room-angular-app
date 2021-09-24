import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(
    private roomService: RoomService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.roomService.getRooList().subscribe( data =>
      {
        this.rooms = data
      });
  }

  deleteRoom(id: number){
    this.roomService.deleteRoom(id).subscribe( data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error)
    );
  }

  detailRoom(id: number) {
    this.router.navigate(['datails', id]);
  }

  updateRoom(id: number) {
    this.router.navigate(['update', id]);
  }

}
