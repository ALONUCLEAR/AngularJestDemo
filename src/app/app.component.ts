import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import items from 'src/mocks/ItemCollection';
import { Item } from 'src/store/items.model';
import { ItemQuery } from 'src/store/items.query';
import { v4 as uuidv4 } from 'uuid';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  items: Item[] = items;
  
  constructor(private itemsQuery: ItemQuery){}
  
  ngOnInit() {
    this.itemsQuery.addItems(items);
    this.itemsQuery.selectAll().pipe(untilDestroyed(this)).subscribe(currentItems => this.items = currentItems);
  }

  addItem(): void {
    const newItem: Item = { id: uuidv4(), price: Math.random() * 10};
    this.itemsQuery.addItem(newItem);
  }

  removeItem(index: number) {
    this.itemsQuery.removeItem(this.items[index].id);
  }
}