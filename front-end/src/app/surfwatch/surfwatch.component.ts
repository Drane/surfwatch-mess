import { Component, OnInit } from '@angular/core';
import { SurfwatchService } from '../services/surfwatch.service';

@Component({
  selector: 'app-surfwatch',
  templateUrl: './surfwatch.component.html',
  styleUrls: ['./surfwatch.component.css']
})
export class SurfwatchComponent implements OnInit {

  subscriptions: any;
  error: string;

  constructor(private surfwatchService: SurfwatchService) { }

  ngOnInit() {
    console.log('gettings subs');
    this.surfwatchService.getSubscriptions()
      .subscribe(
        data => this.subscriptions = JSON.stringify(data),
        error => this.error = error.statusText
      );
  }

}
