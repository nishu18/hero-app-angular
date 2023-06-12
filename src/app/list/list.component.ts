import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  lists: any[] = []
  @Output() listUpdated = new EventEmitter<any[]>();

constructor(){}

ngOnInit() {
  const storedLists = localStorage.getItem('lists');
  if (storedLists) {
    this.lists = JSON.parse(storedLists);
  }
}

addTask(item: any) {
  this.lists.push({ id: this.lists.length + 1, name: item });
  localStorage.setItem('lists', JSON.stringify(this.lists));
  this.listUpdated.emit(this.lists);
  console.log(this.lists);
}

}



