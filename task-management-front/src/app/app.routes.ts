import { Routes } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';
// import { LoginComponent } from './pages/login/login.component';

// export const routes: Routes = [];

export const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },

    { path: 'tasks', component: TaskListComponent },
    { path: 'task-form', component: TaskFormComponent },
    { path: 'task-edit/:id', component: TaskFormComponent },
  
  ];
  