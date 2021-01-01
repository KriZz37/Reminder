import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-reminder-options',
  templateUrl: './reminder-options.component.html',
  styleUrls: ['./reminder-options.component.css']
})
export class ReminderOptionsComponent implements OnInit {
  reminderId: number;

  constructor(private data: DataTransferService) { }

  ngOnInit(): void {
    this.data.currentReminderId.subscribe(x => this.reminderId = x);
  }

}
