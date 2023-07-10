import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  
  roomsList: RoomList[] = [{
    roomType: "Standard",
    amenities: "Wifi",
    price: 500,
    photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    checkinTime: new Date("15-Nov-2021"),
    checkoutTime: new Date("16-Nov-2021")
  },
  {
    roomType: "Delux",
    amenities: "Wifi,Tv",
    price: 100,
    photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    checkinTime: new Date("15-Nov-2021"),
    checkoutTime: new Date("16-Nov-2021")
  },];

  constructor() {
    console.log('Rooms Service Initialized')
   }

  getRooms() {
    return this.roomsList;
  }
}
