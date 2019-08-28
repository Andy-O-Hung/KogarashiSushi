import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latitude: number = 51
  longitude: number = 7.8
  constructor() { }

  ngOnInit() {
  }

}
