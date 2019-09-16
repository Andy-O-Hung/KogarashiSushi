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
}
