

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './close-tender.component.html',
})
export class CloseTenderComponent {
  selectedOption: any = 'withRFQ';

  showReasonInput: boolean = true;
  showRfqNoInput: boolean = false;
  reason: string = '';
  rfqNo: string = '';
  disableButton: boolean = true;

  constructor(private dialogRef: MatDialogRef<CloseTenderComponent>) {}

  // toggleInputs(selectedOption: string) {
  //   if (selectedOption === 'withRFQ') {
  //     this.showReasonInput = true;
  //     this.showRfqNoInput = false;
  //   } else if (selectedOption === 'withoutRFQ') {
  //     this.showReasonInput = false;
  //     this.showRfqNoInput = true;
  //   }
  // }

  toggleInputs() {
    // this.showReasonInput = this.selectedOption === 'withRFQ';
    // this.showRfqNoInput = this.selectedOption === 'withoutRFQ';

    // if(this.showReasonInput){
    //   this.selectedOption = 'withRFQ';

    // }
      this.disableButton = true;
      if (this.selectedOption === 'withRFQ') {
        this.showReasonInput = true;
        this.showRfqNoInput = false;
      } else if (this.selectedOption === 'withoutRFQ') {
        this.showReasonInput = false;
        this.showRfqNoInput = true;
        this.reason = '';
      }
  }
  checkInputFields(): void {
    // if (this.selectedOption === 'withRFQ') {
    //   this.showReasonInput = this.reason.trim() !== '';
    //   this.showRfqNoInput = true;
    // } else if (this.selectedOption === 'withoutRFQ') {
    //   this.showReasonInput = true;
    //   this.showRfqNoInput = this.rfqNo.trim() !== '';

    // }
    const reasonValue = this.reason ? this.reason.trim() : '';
    const rfqNoValue = this.rfqNo ? this.rfqNo.trim() : '';
  
    if (this.selectedOption === 'withRFQ') {
      this.disableButton = reasonValue === '';
    } else if (this.selectedOption === 'withoutRFQ') {
      this.disableButton = rfqNoValue === '';
    }
  
  }

 

  close(): void {
    if (!this.disableButton) {
      this.dialogRef.close({
        reason: this.reason,
        rfqNo: this.rfqNo
      });
    }
  }
  
//   toggleInputs(selectedOption:string){
    
//     const withRFQCheckbox = <HTMLInputElement>document.getElementById('withRFQ');
//     const withoutRFQCheckbox = <HTMLInputElement>document.getElementById('withoutRFQ');

//     this.showReasonInput = withRFQCheckbox.checked;
//     this.showRfqNoInput = withoutRFQCheckbox.checked;
//   }

//    close(): void {
//     if (this.showReasonInput || this.showRfqNoInput) {
//       this.dialogRef.close({
//         reason: this.reason,
//         rfqNo: this.rfqNo
//       });
//     }

// }
}