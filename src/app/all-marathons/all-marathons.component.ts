import { Component, OnInit } from '@angular/core';
import { Marathon } from '../marathon';
import { MarathonsService } from '../marathons.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-all-marathons',
  templateUrl: './all-marathons.component.html',
  styleUrls: ['./all-marathons.component.css']
})
export class AllMarathonsComponent implements OnInit {
  marathons: Marathon[];

  constructor(private MService: MarathonsService, private router: Router) {
  }

  ngOnInit() {
    this.setMarathons()
  }

  setMarathons() {
    this.MService.getMarathons().subscribe(data => {
      this.marathons = data['data']
      console.log(this.marathons)
    })
  }

  getMarathon(id: number) {
    this.router.navigate([id])
  }


}
