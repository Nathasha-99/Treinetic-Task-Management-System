// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { TaskListComponent } from './pages/task-list/task-list.component';

// @NgModule({
//   declarations: [
//     TaskListComponent // Declare TaskListComponent here
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule, 
//     HttpClientModule
//   ],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskService } from './services/task.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/http.intercepter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TaskListComponent],
  imports: [
    FormsModule,
    BrowserModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({     
      timeOut: 3000,            
      positionClass: 'toast-top-right',  
      preventDuplicates: true   
    }),
  ], 
  providers: [
    TaskService,  // Fixed here
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
