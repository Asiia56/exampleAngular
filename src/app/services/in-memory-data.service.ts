import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MobileCrane } from '../interfaces/cranes';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const cranes = [
      {id: 1, name: 'LTM 1030-2.1', loadCapacity: 35, telescopicBoom: 30, maxHeight: 44, maxRadius: 40, axles: 2},
      {id: 2, name: 'LTM 1040-2.1', loadCapacity: 40, telescopicBoom: 35, maxHeight: 44, maxRadius: 39, axles: 2},
      {id: 3, name: 'LTM 1050-3.1', loadCapacity: 50, telescopicBoom: 38, maxHeight: 54, maxRadius: 44, axles: 3},
      {id: 4, name: 'LTM 1055-3.2', loadCapacity: 55, telescopicBoom: 40, maxHeight: 56, maxRadius: 46, axles: 3},
      {id: 5, name: 'LTM 1060-3.1', loadCapacity: 60, telescopicBoom: 48, maxHeight: 63, maxRadius: 48, axles: 3},
      {id: 6, name: 'LTM 1070-4.2', loadCapacity: 70, telescopicBoom: 50, maxHeight: 65, maxRadius: 48, axles: 4},
    ];
    return {cranes};
  }

  // Overrides the genId method to ensure that a cranes always has an id.
  // If the cranes array is empty, the method below returns the initial number (0).
  // if the craneses array is not empty, the method below returns the highest
  // cranes id + 1.
  genId(mobileCranes: MobileCrane[]): number {
    return mobileCranes.length > 0 ? Math.max(...mobileCranes.map(cranes => cranes.id)) + 1 : 11;
  }
}
