import { Component, Input,  } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { type NewTaskData, type Task } from './task/task.model';
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
  @Input() newTask !: NewTaskData
 
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

  addNewTask($event:NewTaskData){
    const newTask:Task = {
      id: new Date().getTime().toString(),
      userId: this.selectedUser.id,
      title: $event.title,
      summary: $event.summary,
      dueDate: $event.date
    }
    this.taskList.push(newTask);
    this.isNewTask = false //close new task dialog
  }
}
