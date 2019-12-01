import { Component, OnInit } from '@angular/core';
import {Image} from '../models/image';
import { ImagesService } from 'src/app/services/images.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarryoutService } from 'src/app/services/carryout.service';


@Component({
  selector: 'app-carryout',
  templateUrl: './carryout.component.html',
  styleUrls: ['./carryout.component.scss']
})
export class CarryoutComponent implements OnInit {
  images: Image[] = [];
  constructor(private imgSer : ImagesService,private service: CarryoutService, private toastr: ToastrService) { 
    this.images = imgSer.getCarryOut();
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      COId: 0,
      CustomerName: '',
      CustomerPhone: '',
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: '',
      Location: '',
      Email: '',
      Order: ''
    }
  }

  // onSubmit(form: NgForm) {
  //   this.toastr.success("Order Placed", "Thank you");
  //   this.resetForm(form);
  // }

  insertRecord(form: NgForm) {
    this.service.postCarryOutDetail().subscribe(
      res => {
        //debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        //debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putCarryOutDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.COId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
}
