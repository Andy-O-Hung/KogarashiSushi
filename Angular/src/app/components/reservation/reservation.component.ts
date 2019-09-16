import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  latitude: number = 35.701691;
  longitude: number = 139.739176;
  bold: string = "initial";
  zoom: number = 20;
  shinjuku: boolean = true;
  minamiaoyama: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  shin(){
    this.latitude = 35.701691;
    this.longitude = 139.739176;
    this.shinjuku = true;
    this.minamiaoyama = false;
  }

  mina(){
    this.latitude = 35.665081;
    this.longitude = 139.713721;
    this.shinjuku = false;
    this.minamiaoyama = true;
  }

}
