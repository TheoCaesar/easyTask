import { Component, output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
export interface user {
  id: string,
  name: string,
  avatar: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app2';
  users = DUMMY_USERS;
  userInfo !: user
  taskInfo !: any ;

  onSelectUSER(idArg:string) {
    this.userInfo = this.users.find(user => user.id == idArg)!
    
  }
}
