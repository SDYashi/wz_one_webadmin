import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor() { }

  isAuthenticated(): boolean {
    // Check if the user is authenticated (e.g., check for a token in local storage)
    const token = localStorage.getItem('authToken'); 
    return !!token;
  }
}
