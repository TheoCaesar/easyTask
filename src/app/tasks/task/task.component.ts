import { Component, EventEmitter, input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  userTask =input.required<Task>()
  @Output() complete =  new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.userTask().id)
  }
}
