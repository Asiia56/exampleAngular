import { Injectable, EventEmitter } from '@angular/core';
import { DeepFoundation } from 'src/app/interfaces/cranes';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeepFoundationService {

  constructor(private db: AngularFireDatabase,
    private actRoute: ActivatedRoute) { }

  //code below is designed to work with realtime firebase database
  cranesRef: AngularFireList<any>;
  craneRef: AngularFireObject<any>;

  addCrane(crane: DeepFoundation) {
    this.cranesRef.push({
      name: crane.name,
      url: crane.url,
      operWeight: crane.operWeight,
      maxTorque: crane.maxTorque,
      kellyDrillingDepth: crane.kellyDrillingDepth,
      kellyDrillingDiameter: crane.kellyDrillingDiameter,
    });
  }

  getCrane(id: string) {
    this.craneRef = this.db.object('deepFoundation-list/' + id);
    return this.craneRef;
  }

  getCraneList() {
    this.cranesRef = this.db.list('deepFoundation-list');
    return this.cranesRef;
  }

  updateCrane(id: string, crane: DeepFoundation) {
    this.craneRef = this.db.object('deepFoundation-list/' + id);
    this.craneRef.update({
      name: crane.name,
      url: crane.url,
      operWeight: crane.operWeight,
      maxTorque: crane.maxTorque,
      kellyDrillingDepth: crane.kellyDrillingDepth,
      kellyDrillingDiameter: crane.kellyDrillingDiameter,
    });    
  }

  deleteCrane(id: string) {
    this.craneRef = this.db.object('deepFoundation-list/' + id);
    this.craneRef.remove();
  }
}
