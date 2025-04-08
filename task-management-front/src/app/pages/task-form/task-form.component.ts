// import { Component, OnInit } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TaskService } from '../../services/task.service';
// import { CommonModule } from '@angular/common';
// import { Router, ActivatedRoute } from '@angular/router';
// import { ToastrModule, ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-task-form',
//   standalone: true,
//   imports: [CommonModule, FormsModule, ReactiveFormsModule, ToastrModule],
//   templateUrl: './task-form.component.html',
//   styleUrls: ['./task-form.component.scss']
// })
// export class TaskFormComponent implements OnInit {
//   task = {
//     title: '',
//     description: '',
//     status: 'TO_DO'
//   };

//   statusOptions = ['TO_DO', 'IN_PROGRESS', 'DONE'];

//   constructor(
//     private taskService: TaskService,
//     private toastr: ToastrService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//       const taskId = +params['id']; // Convert to number
//       if (taskId) {
//         this.loadTask(taskId);
//       }
//     });
//   }

//   loadTask(id: number) {
//     this.taskService.getTaskById(id).subscribe({
//       next: (task: any) => {
//         this.task = task;
//       },
//       error: (err) => {
//         console.error('Error loading task:', err);
//         this.toastr.error('Failed to load task', 'Error');
//       }
//     });
//   }

//   onSubmit() {
//     if ((this.task as any).id) {
//       this.taskService.updateTask((this.task as any).id, this.task).subscribe({
//         next: (data) => {
//           this.toastr.success('Task updated successfully!', 'Success');
//           this.router.navigate(['/tasks']);
//         },
//         error: (err) => {
//           console.error('Error updating task:', err);
//           this.toastr.error('Failed to update task', 'Error');
//         }
//       });
//     } else {
//       this.taskService.createTask(this.task).subscribe({
//         next: (data) => {
//           this.toastr.success('Task created successfully!', 'Success');
//           this.router.navigate(['/tasks']);
//         },
//         error: (err) => {
//           console.error('Error adding task:', err);
//           this.toastr.error('Failed to create task', 'Error');
//         }
//       });
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToastrModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  task = {
    _id: '',   // Ensure task id is defined (as a string for URL)
    title: '',
    description: '',
    status: 'TO_DO'
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;

  statusOptions = ['TO_DO', 'IN_PROGRESS', 'DONE'];

  constructor(
    private taskService: TaskService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Fetch query param and load task
    this.route.queryParams.subscribe(params => {
      const taskId = params['id']; // Get the id from the URL (as a string)
      if (taskId) {
        this.loadTask(taskId);
      }
    });
  }

  
  
  loadTask(id: string) {
    // Convert id to number (long) when fetching task
    this.taskService.getTaskById(Number(id)).subscribe({
      next: (task: any) => {
        this.task = task;
      },
      error: (err) => {
        console.error('Error loading task:', err);
        this.toastr.error('Failed to load task', 'Error');
      }
    });
  }

  // onSubmit() {
  //   if (this.task._id) {
  //     // If task already has an ID, update it
  //     this.taskService.updateTask(this.task._id, this.task).subscribe({
  //       next: (data) => {
  //         this.toastr.success('Task updated successfully!', 'Success');
  //         this.router.navigate(['/tasks']);
  //       },
  //       error: (err) => {
  //         console.error('Error updating task:', err);
  //         this.toastr.error('Failed to update task', 'Error');
  //       }
  //     });
  //   } else {
  //     // If task doesn't have an ID, create a new task
  //     this.taskService.createTask(this.task).subscribe({
  //       next: (data) => {
  //         this.toastr.success('Task created successfully!', 'Success');
  //         this.router.navigate(['/tasks']);
  //       },
  //       error: (err) => {
  //         console.error('Error adding task:', err);
  //         this.toastr.error('Failed to create task', 'Error');
  //       }
  //     });
  //   }
  // }


  // onSubmit() {
  //   if (this.task._id) {
  //     // Convert _id to number before passing it to the update method
  //     const taskId = Number(this.task._id);
      
  //     if (!isNaN(taskId)) {
  //       this.taskService.updateTask(taskId, this.task).subscribe({
  //         next: (data) => {
  //           this.toastr.success('Task updated successfully!', 'Success');
  //           this.router.navigate(['/tasks']);
  //         },
  //         error: (err) => {
  //           console.error('Error updating task:', err);
  //           this.toastr.error('Failed to update task', 'Error');
  //         }
  //       });
  //     } else {
  //       this.toastr.error('Invalid task ID', 'Error');
  //     }
  //   } else {
  //     // If task doesn't have an ID, create a new task
  //     this.taskService.createTask(this.task).subscribe({
  //       next: (data) => {
  //         this.toastr.success('Task created successfully!', 'Success');
  //         this.router.navigate(['/tasks']);
  //       },
  //       error: (err) => {
  //         console.error('Error adding task:', err);
  //         this.toastr.error('Failed to create task', 'Error');
  //       }
  //     });
  //   }
  // }
  

  // onSubmit() {
  //   if (this.task._id) {
  //     // Convert _id to number before passing it to the update method
  //     const taskId = Number(this.task._id);
      
  //     if (!isNaN(taskId)) {
  //       this.taskService.updateTask(taskId, this.task).subscribe({
  //         next: (data) => {
  //           this.toastr.success('Task updated successfully!', 'Success');
  //           this.router.navigate(['/tasks']);
  //         },
  //         error: (err) => {
  //           console.error('Error updating task:', err);
  //           this.toastr.error('Failed to update task', 'Error');
  //         }
  //       });
  //     } else {
  //       this.toastr.error('Invalid task ID', 'Error');
  //     }
  //   } else {
  //     // If task doesn't have an ID, create a new task
  //     this.taskService.createTask(this.task).subscribe({
  //       next: (data) => {
  //         this.toastr.success('Task created successfully!', 'Success');
  //         this.router.navigate(['/tasks']);
  //       },
  //       error: (err) => {
  //         console.error('Error adding task:', err);
  //         this.toastr.error('Failed to create task', 'Error');
  //       }
  //     });
  //   }
  // }
  

  onSubmit() {
    if (this.task._id) {
      // Ensure _id is treated as a number before passing to the backend
      const taskId = Number(this.task._id);  // Convert to number to match backend type (Long)
  
      // Ensure it's a valid number
      if (!isNaN(taskId)) {
        this.taskService.updateTask(taskId, this.task).subscribe({
          next: (data) => {
            // this.toastr.success('Task updated successfully!', 'Success');
            this.successMessage = 'Task updated successfully!';

            this.router.navigate(['/tasks']);
          },
          error: (err) => {
            console.error('Error updating task:', err);
            // this.toastr.error('Failed to update task', 'Error');
            this.errorMessage = 'Failed to update task';

          }
        });
      } else {
        this.toastr.error('Invalid task ID', 'Error');
      }
    } else {
      // If task doesn't have an ID, create a new task
      this.taskService.createTask(this.task).subscribe({
        next: (data) => {
          this.successMessage = 'Task updated successfully!';
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.error('Error adding task:', err);
          this.errorMessage = 'Failed to update task';
        }
      });
    }
  }
  
}
