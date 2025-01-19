import { Component, OnInit } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-user-existing-users-list',
  templateUrl: './user-existing-users-list.component.html',
  styleUrls: ['./user-existing-users-list.component.css']
})
export class UserExistingUsersListComponent implements OnInit {
  users: any[] = []; 
  result: any;
  isProcessing: boolean = false; 
  page_no: number = 1; 
  page_size: number = 100; 
  total_counts: number = 0; 
  total_pages: number = 0; 

  constructor(private oneapisevices: OneApiServicesService) {}

  ngOnInit(): void {
    this.loadUser ();
  }

  loadUser (): void {
    this.isProcessing = true; // Set processing to true before loading
    this.oneapisevices.viewalluserprofile_db(this.page_no, this.page_size).subscribe({
      next: (response) => {
        this.users = response.users;
        this.total_counts = response.total_count; 
        this.total_pages = Math.ceil(this.total_counts / this.page_size); 
        this.result = response.msg;
        this.isProcessing = false; // Set processing to false after loading
      },
      error: (errors) => {
        this.result = errors.error.msg;
        this.isProcessing = false; // Set processing to false on error
      }
    });
  }

  onPageChange(pageNumber: number): void {
    this.page_no = pageNumber;
    this.loadUser ();
  }

  nextPage(): void {
    if (this.page_no < this.total_pages) {
      this.page_no++;
      this.loadUser ();
    }
  }

  prevPage(): void {
    if (this.page_no > 1) {
      this.page_no--;
      this.loadUser ();
    }
  }
}