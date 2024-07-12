import { Component, EventEmitter, Output,  inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Task, } from '../task/task.model';
import { TaskService } from '../tasks.service';

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
  taskDate :string =  "";
  taskService = inject(TaskService)
  @Input({required: true}) userId !:string;


  cancelNewTask() {
    this.cancel.emit()
  }

  onSubmit() {
    const newTask: Task = {
      id : new Date().getTime().toString(),
      userId: this.userId,
      title: this.taskTitle,
      summary:this.taskSummary,
      dueDate: this.taskDate
    }
    this.taskService.createTask(newTask);
    this.cancelNewTask()
  }

}
