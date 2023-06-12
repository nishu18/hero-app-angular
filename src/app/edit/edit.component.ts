import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  itemId: any;
  itemName: any;
  item: { id: number; name: string }= { id: 0, name: '' };;

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }
  ngOnInit() {
    let list = localStorage.getItem('lists')
    // list = list.length ? list : []
    this.route.params.subscribe(params => {
      this.itemId = +params['id'];
      // this.itemName = this.itemId
      const item = this.itemService.getItem(this.itemId);
      if (item) {
        this.item = { ...item };
        this.itemName = this.item.name;
      }
  //  this.itemService.itemAdded.subscribe((item: { id: number; name: string }) => {
  //       this.item = item;
  //     });
  });
  }
  
  saveItem() {
    console.log('Saving item with ID:', this.itemId);
    console.log('New item name:', this.itemName);
    const item = this.itemService.getItem(this.itemId); 
    console.log(`Before passing item - ${JSON.stringify(item)}`);

    if (item) {
      item.name = this.itemName; 
      console.log(`Before passing item - ${JSON.stringify(item)}`);
      this.itemService.updateItem(item);
    }else {
      const newItem = { id: this.itemId, name: this.itemName };
      console.log(`Before passing item - ${JSON.stringify(newItem)}`);
      this.itemService.lists.push(newItem);
      this.itemService.updateItem(newItem);
    }
     this.router.navigate(['/list']);
  }
  goBack() {
    console.log('Going back...');

    this.router.navigate(['/list']);
  }
}