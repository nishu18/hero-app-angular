import { Injectable } from '@angular/core';
import { Hero } from '../hero';



@Injectable({
  providedIn: 'root'
})
export class ItemService {
lists: { id: number; name: string }[] = [];
item:any

constructor(){
  const storedLists=localStorage.getItem('lists')
  if(storedLists){
    this.lists=JSON.parse(storedLists)
  }
}
getItem(itemId: number): { id: number; name: string } | undefined {

  console.log('getItem called with itemId:', itemId);
  console.log('Lists array:', this.lists);

  const item = this.lists.find(item => item.id === itemId);

  if (item) {
    return { id: item.id, name: item.name }; 
  }

  return undefined; 

}
updateItem(item: { id: number; name: string }): void {
  console.log('updateItem called with item:', item);

  // console.log(this.item);
  const index = this.lists.findIndex(i => i.id === item.id);

  if (index !== -1) {
    // this.lists[index].name = item.name; 
    this.lists[index] = { ...item };
      localStorage.setItem('lists', JSON.stringify(this.lists));
    console.log('Item updated successfully');

  }else{
    console.log('Item not found');

  }
}


}




// getItem(item: string): void {
//   const newItem = { id: this.lists.length + 1, name: item };
//   this.lists.push(newItem);
//   this.itemAdded.next(newItem);
// }
// getItem(item: { id: number; name: string }): void {
//   const existingItem = this.lists.find(i => i.id === item.id);
//   if (existingItem) {
//     existingItem.name = item.name;
//   }
//   this.itemAdded.next(item);
// }