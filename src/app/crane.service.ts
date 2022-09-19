import { Injectable } from '@angular/core';
import { Crane } from './cranes';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CraneService {
  constructor(private db: AngularFireDatabase) { }

  //code below is designed to work with actual database
  cranesRef: AngularFireList<any>;
  craneRef: AngularFireObject<any>;

  addCrane(crane: Crane) {
    this.cranesRef.push({
      name: crane.name,
      loadCapacity: crane.loadCapacity,
      telescopicBoom: crane.telescopicBoom,
      maxHeight: crane.maxHeight,
      maxRadius: crane.maxRadius,
      axles: crane.axles
    });
  }

  getCrane(id: string) {
    this.craneRef = this.db.object('cranes-list' + id);
    return this.craneRef;
  }

  getCraneList() {
    this.cranesRef = this.db.list('cranes-list');
    return this.cranesRef;
  }

  updateCrane(crane: Crane) {
    this.craneRef.update({
      name: crane.name,
      loadCapacity: crane.loadCapacity,
      telescopicBoom: crane.telescopicBoom,
      maxHeight: crane.maxHeight,
      maxRadius: crane.maxRadius,
      axles: crane.axles
    });
  }

  deleteCrane(id: string) {
    this.craneRef = this.db.object('cranes-list/' + id);
    this.craneRef.remove();
  }
}