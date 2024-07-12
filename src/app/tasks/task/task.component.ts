import { Component, EventEmitter, input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
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
