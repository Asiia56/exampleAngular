import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Crane } from '../../cranes';
import { CraneService } from '../../crane.service';

@Component({
  selector: 'app-crane-details',
  templateUrl: './crane-details.component.html',
  styleUrls: ['./crane-details.component.css']
})

export class CraneDetailsComponent implements OnInit {
  @Input() crane?: Crane;
  //crane: Crane | undefined;

  constructor(
    /*private route: ActivatedRoute,
    private craneService: CraneService,
    private location: Location*/
  ) {}

  ngOnInit(): void {
    //this.getCrane();
  }
/*
  getCrane(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.craneService.getCrane(id).subscribe(crane => this.crane = crane);
  }*/

}
