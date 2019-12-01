import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CarryoutComponent } from './components/carryout/carryout.component';
import { CalenderComponent } from './components/calender/calender.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Menu', component: MenuComponent},
  {path: 'Reservation', component: ReservationComponent},
  {path: 'Carry Out', component: CarryoutComponent},
  {path: 'Calender', component: CalenderComponent},
  {path: 'About Us', component: AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
