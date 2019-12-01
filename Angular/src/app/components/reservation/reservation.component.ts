import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  commerce: boolean = false;

  PersonsText: string;
  AmountText: number;
  DateText: string;
  PhoneText: number;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.toastr.toastrConfig.timeOut = 2000;
    this.toastr.toastrConfig.positionClass = "toast-bottom-right";
    this.resetForm();
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

  comm(){
    this.latitude = 40.731731;
    this.longitude = -74.004439;
    this.shinjuku = false;
    this.minamiaoyama = false;
    this.commerce = true;
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
  }

  onSubmit(form: NgForm) {
    this.toastr.success("Reserved", "Thank you");
    this.resetForm(form);
  }

}
