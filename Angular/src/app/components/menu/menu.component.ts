import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMenuComponent } from '../dialog-menu/dialog-menu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  SushiMenuDialog(): void {
    const dialogRef = this.dialog.open(DialogMenuComponent, {
      width: '500px', data: {type: "Sushi Menu"}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  CockTailMenuDialog(): void {
    const dialogRef = this.dialog.open(DialogMenuComponent, {
      width: '500px', data: {type: "Cocktail Menu"}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


}
