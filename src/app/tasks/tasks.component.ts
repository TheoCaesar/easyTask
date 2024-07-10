import { Component, Input,  } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { type Task } from './task/task.model';
import { User } from '../user/user.model';
import { AddTaskComponent } from './add-task/add-task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) selectedUser !: User
  isNewTask :boolean = false;
  taskList:Task[] = dummyTasks
 
  task!:Task

  getSelectedUserTasks = ()=> this.taskList.filter(task => task.userId === this.selectedUser.id)

  onTaskComplete(taskId:any){
    this.taskList = this.taskList.filter(task=> task.id != taskId)
  }

  addTask(){
    this.isNewTask = !this.isNewTask;
  }

  onCancelNewTask() {
    this.isNewTask = false;
  }
}
