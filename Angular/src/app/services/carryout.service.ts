import { Injectable } from '@angular/core';
import { CarryOutDetail } from '../components/models/carryout';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarryoutService {
  formData: CarryOutDetail;
  readonly rootURL = 'http://localhost:64584/api';
  list : CarryOutDetail[];

  constructor(private http: HttpClient) { }

  postCarryOutDetail() {
    return this.http.post(this.rootURL + '/OrderDetails', this.formData);
  }
  putCarryOutDetail() {
    return this.http.put(this.rootURL + '/OrderDetails/'+ this.formData.COId, this.formData);
  }
  deleteCarryOutDetail(id) {
    return this.http.delete(this.rootURL + '/OrderDetails/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/OrderDetails')
    .toPromise()
    .then(res => this.list = res as CarryOutDetail[]);
  }
}
