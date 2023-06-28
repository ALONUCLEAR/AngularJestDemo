import { EntityState, EntityStore, StoreConfig, ID } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Item } from './items.model';

export interface ItemState extends EntityState<Item> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'items' })
export class ItemStore extends EntityStore<ItemState, Item> {
  constructor() {
    super();
  }

  // Add an item to the store
  addItem(item: Item): void {
    this.add(item);
  }

  // Remove an item from the store
  removeItem(itemId: ID): void {
    this.remove(itemId);
  }
}