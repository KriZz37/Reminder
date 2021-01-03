import { Component, OnInit } from '@angular/core';
import { DataTransferService } from './data-transfer.service';
import { Reminder } from './reminder-list/reminder';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showDetails: boolean;

  constructor(private data: DataTransferService) { }

  ngOnInit(): void {
    this.data.currentReminderDetails.subscribe(x => {
      if (x.reminderId !== undefined) {
        this.showDetails = true;
      } else {
        this.showDetails = false;
      }
    });
  }

}
