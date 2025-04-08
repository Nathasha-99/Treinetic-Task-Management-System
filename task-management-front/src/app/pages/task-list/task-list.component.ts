// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms'; 

// @Component({
//   selector: 'app-task-list',
//   standalone: true, 
//   imports: [CommonModule, FormsModule], 
//   templateUrl: './task-list.component.html',
//   styleUrls: ['./task-list.component.scss']
// })
// export class TaskListComponent {
//   tasks: any[] = [];
//   filteredTasks: any[] = [];
//   selectedStatus: string = '';

//   constructor() {}

//   ngOnInit(): void {
//     // Mock for now or bring back your service here
//   }

//   filterTasks() {
//     if (!this.selectedStatus) {
//       this.filteredTasks = this.tasks;
//     } else {
//       this.filteredTasks = this.tasks.filter(task => task.status === this.selectedStatus);
//     }
//   }
// }

import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule], // <-- HttpClientModule is imported here
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: any[] = [];
  filteredTasks: any[] = [];
  selectedStatus: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (data: any[]) => {
        this.tasks = data;
        this.filteredTasks = data;
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      }
    });
  }

  filterTasks() {
    if (!this.selectedStatus) {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => task.status === this.selectedStatus);
    }
  }

  goToTaskForm() {
    this.router.navigate(['/task-form']);
  }

  // updateTask(task: any) {
  //   if (task && task._id) {
  //     // Navigate to the task form with the task ID as a query param or route param
  //     this.router.navigate(['/task-form'], { queryParams: { id: task._id } });
  //   } else {
  //     console.error('Invalid task data', task);
  //     // Optionally, show an error message or handle the case where task is undefined
  //   }
  // }
  

  updateTask(taskId: any) {
    if (taskId) {
      // Navigate to the task form with the task ID as a route parameter
      this.router.navigate([`/task-edit/${taskId}`]);
    } else {
      console.error('Invalid task ID', taskId);
      // Optionally, show an error message or handle the case where taskId is undefined
    }
  }
  

  
  deleteTask(id: number) {
    if (!id) {
      console.error('Invalid task id');
      return;
    }
  
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.filteredTasks = this.filteredTasks.filter(task => task.id !== id);
        console.log('Task deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting task:', err);
      }
    });
  }
  
  
}
