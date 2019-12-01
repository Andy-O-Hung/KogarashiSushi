import { Injectable, ɵɵclassMapInterpolate1 } from '@angular/core';
import { Observable } from 'rxjs';
import {Image} from '../components/models/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getHome() : Image[]{
    var homeArray : Image[] = []
    let h1: Image = {fname: "main", path: "assets/images/main.jpg"}
    let h2: Image = {fname: "mainavoc", path: "assets/images/mainavoc.jpg"}
    let h3: Image = {fname: "mainsushi", path: "assets/images/mainsushi.jpg"}
    homeArray.push(h1)
    homeArray.push(h2)
    homeArray.push(h3)
    return homeArray
  }

  getCarryOut() : Image[]{
    var carryArray : Image[] = []
    let h1: Image = {fname: "carryout", path: "assets/images/carryout.jpg"}
    carryArray.push(h1);
    return carryArray;
  }

  getGlobalImages() : Image[]{
    var globalArray : Image[] = []
    let h1: Image = {fname: "logo", path: "assets/images/logo.png"}
    globalArray.push(h1);
    return globalArray;
  }

  getCalender() : Image[]{
    var calenderArray : Image[] = []
    let h1: Image = {fname: "calender", path: "assets/images/calender.jpg"}
    calenderArray.push(h1);
    return calenderArray;
  }

  getAboutUs() : Image[]{
    var aboutUsArray : Image[] = []
    let h1: Image = {fname: "aboutus", path: "assets/images/aboutus.jpg"}
    aboutUsArray.push(h1);
    return aboutUsArray;
  }
}
