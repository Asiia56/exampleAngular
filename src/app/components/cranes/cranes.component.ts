import { Component, OnInit } from '@angular/core';
import { Crane } from '../../cranes';
import { CraneService } from '../../crane.service';

@Component({
  selector: 'app-cranes',
  templateUrl: './cranes.component.html',
  styleUrls: ['./cranes.component.css']
})
export class CranesComponent implements OnInit {
  cranes: Crane[] = [];

  selectedCrane?: Crane;
    onSelect (crane: Crane): void {
    this.selectedCrane = crane;
  }
/*
  getCranes(): void {
    this.craneService.getCrane().subscribe(cranes => this.cranes = cranes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.craneService.addCrane({name} as Crane).subscribe(crane => {
      this.cranes.push(crane);
    })
  }*/

  constructor(private craneService: CraneService) { }

  ngOnInit(): void {
    //this.getCranes();
  }
}
