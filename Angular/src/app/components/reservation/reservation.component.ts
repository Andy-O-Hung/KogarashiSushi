import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarryoutService } from 'src/app/services/carryout.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  latitude: number = 35.700807;
  longitude: number = 139.741729;
  selected: string = "Shinjuku";
  zoom: number = 20;
  shinjuku: boolean = true;
  minamiaoyama: boolean = false;
  commerce: boolean = false;

  PersonsText: string;
  AmountText: number;
  DateText: string;
  PhoneText: number;
  constructor(private toastr: ToastrService, private service: CarryoutService) { }

  ngOnInit() {
    this.toastr.toastrConfig.timeOut = 2000;
    this.toastr.toastrConfig.positionClass = "toast-bottom-right";
    this.resetForm();
  }

  shin(){
    this.latitude = 35.700807;
    this.longitude = 139.741729;
    this.shinjuku = true;
    this.minamiaoyama = false;
    this.selected = "Shinjuku";
    this.service.formData.Location = this.selected;
  }

  mina(){
    this.latitude = 35.665081;
    this.longitude = 139.713721;
    this.shinjuku = false;
    this.minamiaoyama = true;
    this.selected = "Minamiaoyama";
    this.service.formData.Location = this.selected;
  }

  comm(){
    this.latitude = 40.731731;
    this.longitude = -74.004439;
    this.shinjuku = false;
    this.minamiaoyama = false;
    this.commerce = true;
    this.selected = "Commerce";
    this.service.formData.Location = this.selected;
  }

  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.form.reset();
  // }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      COId: 0,
      CustomerName: '',
      CustomerPhone: '',
      CardOwnerName: 'N/A',
      CardNumber: '',
      ExpirationDate: '',
      CVV: 'N/A',
      Location: this.selected,
      Email: 'N/A',
      Order: 'RESERVATION RESERVATION RESERVATION'
    }
  }

  // onSubmit(form: NgForm) {
  //   this.toastr.success("Reserved", "Thank you");
  //   this.resetForm(form);
  // }

  onSubmit(form: NgForm) {
    if (this.service.formData.COId == 0){
      this.insertRecord(form);
    }
    else
      this.updateRecord(form);
  }

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

}
