import { Component, OnInit } from '@angular/core';
import { MobileCranesService } from 'src/app/services/mobile-cranes.service';
import { MobileCrane } from 'src/app/interfaces/cranes';

@Component({
  selector: 'app-mobile-cranes',
  templateUrl: './mobile-cranes.component.html',
  styleUrls: ['./mobile-cranes.component.scss']
})
export class MobileCranesComponent implements OnInit {
  //cranes = MobileCranesData;
  cranes: MobileCrane[] = [];

  selectedCrane?: MobileCrane;
    onSelect (crane: MobileCrane): void {
    this.selectedCrane = crane;
  }

  constructor(private craneService: MobileCranesService) { }

  ngOnInit(): void {
    this.getCranes();
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.craneService.addMobileCrane({name} as MobileCrane).subscribe(crane => {
      this.cranes.push(crane);
    })
  }

  getCranes(): void {
    this.craneService.getMobileCranes().subscribe(cranes => this.cranes = cranes);
  }

}
