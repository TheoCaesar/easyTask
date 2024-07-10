import { Component, Input, input, computed } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { type Task } from './task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 selectedUser = input.required<any>()
 metadata = computed(()=> 'assets/users/' + this.selectedUser().avatar)
 taskList:Task[] = dummyTasks
 
 task!:Task

  getSelectedUserTasks = computed(()=> this.taskList.filter(task => task.userId === this.selectedUser().id))

}
