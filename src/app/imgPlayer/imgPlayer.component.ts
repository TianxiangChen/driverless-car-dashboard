import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'imgPlayer',
  templateUrl: './imgPlayer.component.html',
  styleUrls: ['./imgPlayer.component.scss'],
  providers: [DataService]
})
export class ImgPlayerComponent implements OnInit {
  private imgDir;
  private imgDirSafe;
  private display: boolean;
  private alive: boolean;
  private interval: number;

  constructor(private _dataService: DataService, private sanitizer: DomSanitizer) {
    this.display = false;
    this.alive = true;
    this.interval = 100;
    this.imgDirSafe = 'assets/imgNotFound.jpg';


  }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this._dataService.getImgData()
          .subscribe((data) => {
            this.imgDir = data['url'];
            this.imgDirSafe = this.sanitizer.bypassSecurityTrustUrl(this.imgDir);
            console.log('Refresh_for_Img');
            if(!this.display){
              this.display = true;
            }
          })
      })
  }

}
