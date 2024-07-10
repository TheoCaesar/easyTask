import { Component, Input,  } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { type Task } from './task/task.model';
import { User } from '../user/user.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) selectedUser !: User
 taskList:Task[] = dummyTasks
 
 task!:Task

  getSelectedUserTasks = ()=> this.taskList.filter(task => task.userId === this.selectedUser.id)

  onTaskComplete(taskId:any){
    this.taskList = this.taskList.filter(task=> task.id != taskId)
  }

}
