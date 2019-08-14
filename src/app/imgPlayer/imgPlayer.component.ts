import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'imgPlayer',
  templateUrl: './imgPlayer.component.html',
  styleUrls: ['./imgPlayer.component.scss'],
  providers: [DataService]
})
export class ImgPlayerComponent implements OnInit {
  private imgDir;
  private display: boolean;
  private alive: boolean;
  private interval: number;

  constructor(private _dataService: DataService) {
    this.display = false;
    this.alive = true;
    this.interval = 500;


  }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this._dataService.getSomeData()
          .subscribe((data) => {
            this.imgDir = data['dir'];
            console.log(this.imgDir);
            if(!this.display){
              this.display = true;
            }
          })
      })
  }

}
