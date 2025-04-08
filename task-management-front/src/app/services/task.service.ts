import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TaskService {
  private baseUrl = 'http://localhost:8080/api/tasks'; 

  constructor(private http: HttpClient) {}

  // getTasks() {
  //   return this.http.get(`${this.baseUrl}`);
  // }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // getTaskById(id: string) {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  createTask(task: any): Observable<any> {
    return this.http.post(this.baseUrl, task);
  }

  // updateTask(id: string, task: any) {
  //   return this.http.put(`${this.baseUrl}/${id}`, task);
  // }

  deleteTask(id: number) {
    return this.http.delete(`http://localhost:8080/api/tasks/${id}`);
  }

  getTaskById(id: number) {
    return this.http.get(`http://localhost:8080/api/tasks/${id}`);
  }
  
  // updateTask(id: number, task: any) {
  //   return this.http.put(`http://localhost:8080/api/tasks/${id}`, task);
  // }
  
  updateTask(taskId: number, taskDetails: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/tasks/${taskId}`, taskDetails);
  }
  
  
}
