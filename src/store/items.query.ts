import { QueryEntity, ID } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ItemState, ItemStore } from './items.store';
import { Item } from './items.model';

@Injectable({ providedIn: 'root' })
export class ItemQuery extends QueryEntity<ItemState, Item> {
  constructor(protected override itemsStore: ItemStore) {
    super(itemsStore);
  }

  // Get all items
  getAllItems(): Item[] {
    return this.getAll();
  }

  // Get a specific item by ID
  getItemById(itemId: ID): Item | undefined {
    return this.getEntity(itemId);
  }

  addItem(item: Item): void {
    this.itemsStore.addItem(item);
  }

  addItems(items: Item[]): void {
    items.forEach(item => this.addItem(item));
  }

  removeItem(id: ID): void {
    this.itemsStore.removeItem(id);
  }
}
