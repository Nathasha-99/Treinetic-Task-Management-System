// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html'
// })
// export class LoginComponent {
//   user = { username: '', password: '' };

//   constructor(private http: HttpClient, private router: Router) {}

//   onLogin() {
//     this.http.post<any>('http://localhost:8080/api/login', this.user).subscribe({
//       next: (res) => {
//         localStorage.setItem('token', res.token);
//         this.router.navigate(['/tasks']);
//       },
//       error: () => alert('Invalid login')
//     });
//   }
// }