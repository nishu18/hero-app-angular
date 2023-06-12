import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-hero',
  templateUrl: './top-hero.component.html',
  styleUrls: ['./top-hero.component.css']
})
export class TopHeroComponent implements OnChanges {
  @Input() lists: any[] = [];
  topHeroes: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lists'] && this.lists && this.lists.length > 0) {
      this.updateTopHeroes();
    }
  }

  private updateTopHeroes() {
    const sortedLists = this.lists.slice().sort((a, b) => b.id - a.id);
    this.topHeroes = sortedLists.slice(0, Math.min(5, sortedLists.length)).map(item => item.name);
    console.log("Top Heroes:", this.topHeroes);
  }


}
