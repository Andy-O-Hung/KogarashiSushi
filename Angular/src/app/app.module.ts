import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {ToastrModule} from 'ngx-toastr';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import * as api from '../ApiKeys.js';
import { DialogMenuComponent } from './components/dialog-menu/dialog-menu.component';
import { CarryoutComponent } from './components/carryout/carryout.component';
import { CalenderComponent } from './components/calender/calender.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    SlideshowComponent,
    FooterComponent,
    ReservationComponent,
    DialogMenuComponent,
    CarryoutComponent,
    CalenderComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: api.googleMaps
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonToggleModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  exports: [
    DialogMenuComponent
  ],
  entryComponents:[
    DialogMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
