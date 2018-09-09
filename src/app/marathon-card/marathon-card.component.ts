import { Component, OnInit } from '@angular/core';
import { MarathonsService } from '../marathons.service'
import { Marathon } from '../marathon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marathon-card',
  templateUrl: './marathon-card.component.html',
  styleUrls: ['./marathon-card.component.css']
})
export class MarathonCardComponent implements OnInit {
  marathon: Marathon;
  marathonImg;
  marathonVideo;
  constructor(private MService: MarathonsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setMarathon()
  }
  setMarathon() {
    this.route.params.subscribe(params => {
      this.MService.getMarathon(params.id).subscribe(data => {
        this.marathon = data['data']
        for (let i = 0; i < this.marathon['length']; i++) {
          if (this.marathon[i].id == params.id) {
            this.marathon = data['data'][i]
            // console.log(this.marathon.images)
            this.marathonImg = this.marathon.images
            this.marathonVideo = this.marathon.video_url
            console.log(this.marathon.video_url)

          }
        }
      })
    })
  }



}
