import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ReminderService } from 'src/app/new-reminder/reminder.service';
import { DataTransferService } from '../data-transfer.service';
import { NewCommentDialogComponent } from '../new-comment-dialog/new-comment-dialog.component';
import { Comment } from './comment';
import { NewComment } from '../new-comment-dialog/new-comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: MatTableDataSource<Comment>;
  displayedColumns = ['message', 'delete'];
  reminderId: number;

  constructor(
    private data: DataTransferService,
    private reminderService: ReminderService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.currentReminderId.subscribe(reminderId => {
      this.reminderId = reminderId;
      this.updateCommentList(this.reminderId);
    });
  }

  updateCommentList(reminderId: number): void {
    this.reminderService.getReminderComments(reminderId).subscribe(c => {
      this.comments = new MatTableDataSource(c);
    });
  }

  removeComment(commentId: number): void {
    this.reminderService.deleteComment(commentId).subscribe(() => {
      this.updateCommentList(this.reminderId);
    });
  }

  newComment(): void {
    const dialogRef = this.dialog.open(NewCommentDialogComponent, {
      width: '500px',
      height: '250px',
      data: this.reminderId
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateCommentList(this.reminderId);
    });
  }

}
