import { Component, OnInit } from '@angular/core';
import {Image} from '../models/image';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  images: Image[] = [];
  constructor(private imgSer : ImagesService) {
    this.images = imgSer.getAboutUs();
   }

  ngOnInit() {
  }

}
