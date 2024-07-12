import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  userTask =input.required<Task>()
  taskService = inject(TaskService)

  onCompleteTask() {
    this.taskService.removeTask(this.userTask().id)

  }
}
