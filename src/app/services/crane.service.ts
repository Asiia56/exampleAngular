import { Injectable, EventEmitter } from '@angular/core';
import { Crane } from 'src/app/interfaces/cranes';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CraneService {
  constructor(private db: AngularFireDatabase,
    private actRoute: ActivatedRoute) { }

  //code below is designed to work with realtime firebase database
  cranesRef: AngularFireList<any>;
  craneRef: AngularFireObject<any>;

  addCrane(crane: Crane) {
    this.cranesRef.push({
      name: crane.name,
      iconUrl: crane.iconUrl,
      loadCapacity: crane.loadCapacity,
      telescopicBoom: crane.telescopicBoom,
      maxHeight: crane.maxHeight,
      maxRadius: crane.maxRadius,
      axles: crane.axles,
      description: crane.description
    });
  }

  getCrane(id: string) {
    this.craneRef = this.db.object('cranes-list/' + id);
    return this.craneRef;
  }

  getCraneList() {
    this.cranesRef = this.db.list('cranes-list');
    return this.cranesRef;
  }

  updateCrane(id: string, crane: Crane) {
    this.craneRef = this.db.object('cranes-list/' + id);
    this.craneRef.update({
      name: crane.name,
      iconUrl: crane.iconUrl,
      loadCapacity: crane.loadCapacity,
      telescopicBoom: crane.telescopicBoom,
      maxHeight: crane.maxHeight,
      maxRadius: crane.maxRadius,
      axles: crane.axles,
      description: crane.description
    });
  }

  deleteCrane(id: string) {
    this.craneRef = this.db.object('cranes-list/' + id);
    this.craneRef.remove();
  }
}
