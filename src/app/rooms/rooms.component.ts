import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelname = 'Taj Hotel';

  hideRooms = false;

  numberofRooms = 10;

  selectedRooms!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  };

  title='Room List';

  roomsList: RoomList[]=[];

  // roomService = new RoomsService();

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsList = this.roomsService.getRooms();
  }

  selectRoom(room:RoomList){
    this.selectedRooms = room;
  }

  addRoom(){
    const room:RoomList={
      roomType:'Delux Room',
      amenities: 'Wifi',
      price: 800,
      photos:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      checkinTime: new Date("15-Nov-2021"),
      checkoutTime: new Date("16-Nov-2021")
    }

    // this.roomsList.push(room);
    this.roomsList = [...this.roomsList, room]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }
}
