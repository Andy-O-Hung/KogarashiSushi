import { Component, OnInit } from '@angular/core';
import {Image} from '../models/image';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  images: Image[] = [];
  constructor(private imgSer : ImagesService) {
    this.images = imgSer.getCalender();
   }

  ngOnInit() {
  }

}
