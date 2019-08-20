import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'infoBoard',
  templateUrl: './infoBoard.component.html',
  styleUrls: ['./infoBoard.component.scss'],
  providers: [DataService]
})
export class InfoBoardComponent implements OnInit {
  private ax;
  private ay;
  private az;
  private omega_x;
  private omega_y;
  private omega_z;
  private display: boolean;
  private alive: boolean;
  private interval: number;

  constructor( private _dataService: DataService ) {
    this.display = false;
    this.alive = true;
    this.interval = 500;
    this.ax = 'N/A';
    this.ay = 'N/A';
    this.az = 'N/A';
    this.omega_x = 'N/A';
    this.omega_y = 'N/A';
    this.omega_z = 'N/A';
  }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this._dataService.getCarData()
          .subscribe((data) => {
            this.ax = data['ax'];
            this.ay = data['ay'];
            this.az = data['az'];
            this.omega_x = data['omega_x'];
            this.omega_y = data['omega_y'];
            this.omega_z = data['omega_z'];
            console.log('Refresh_for_carData');
            if(!this.display){
              this.display = true;
            }
          })
      })
  }

}
