import { Component, EventEmitter, Output,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter()
  taskTitle :string = ""
  taskSummary :string =  ""
  taskDate :string =  ""

  @Output() add = new EventEmitter<NewTaskData>()

  cancelNewTask() {
    this.cancel.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.taskTitle,
      summary:this.taskSummary,
      date: this.taskDate
    })
  }

}
