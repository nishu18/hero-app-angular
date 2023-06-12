// import { Component, ViewChild } from '@angular/core';
// // import { CloseTenderComponent } from './close-tender/close-tender.component';
// import { MatDialog } from '@angular/material/dialog';
// import { CloseTenderComponent } from './close-tender/close-tender.component';
// // import { MyDialogComponent } from './my-dialog/my-dialog.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'hero-app';
//   // @ViewChild('modal', {static: false}) modal!: CloseTenderComponent
  
//     constructor(private dialog: MatDialog) {}
  
//     openDialog(): void {
//       const dialogRef = this.dialog.open(CloseTenderComponent);
  
//       dialogRef.afterClosed().subscribe(result => {
//         console.log('Dialog closed');
//       });
//     }
//   }
  
//   // modelPop(){
//   //   this.modal.open();

//   // }

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CloseTenderComponent } from './close-tender/close-tender.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hero-app';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CloseTenderComponent);
    // width: '400px',
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.reason) {
          console.log('Reason:', result.reason);
        }
        if (result.rfqNo) {
          console.log('RFQ NO.:', result.rfqNo);
        }
      } 
    });
  }
}
