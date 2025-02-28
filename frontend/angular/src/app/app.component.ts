import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {




  title = 'gradient-able';

  constructor(private apiService: ApiService) {}

  // Example method to call the register API
  // Add the toggleDarkMode method to the component

  registerUser() {
    const user = { username: 'testuser', password: 'testpassword' };
    this.apiService.register(user).subscribe(
      response => {
        console.log('User registered successfully', response);
      },
      error => {
        console.error('Error registering user', error);
      }
    );
  }

  // Example method to call the login API
  loginUser() {
    const user = { username: 'testuser', password: 'testpassword' };
    this.apiService.login(user).subscribe(
      response => {
        console.log('User logged in successfully', response);
      },
      error => {
        console.error('Error logging in user', error);
      }
    );
  }
}
