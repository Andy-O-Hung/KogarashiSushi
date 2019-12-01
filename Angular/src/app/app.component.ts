import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import {Image} from 'src/app/components/models/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: Image[] = [];
  
  constructor(imgService: ImagesService) { 
    this.images = imgService.getGlobalImages();
  }

  ngOnInit(){
  }
  title = 'Kogarashi';
  navLinks = [
    {path: '', label: 'Home'},
    {path: 'Menu', label: 'Menu'},
    {path: 'Reservation', label: 'Reservation'},
    {path: 'Carry Out', label: 'Carry Out'},
    {path: 'Calender', label: 'Calender'},
    {path: 'About Us', label: 'About Us'}


  ];

}
