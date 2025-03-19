import { Component } from '@angular/core';

@Component({
  selector: 'app-vill-dashboard',
  templateUrl: './vill-dashboard.component.html',
  styleUrls: ['./vill-dashboard.component.css']
})
export class VillDashboardComponent {

  divParliamentCount: number = 5; // Example data
  assemblyCount: number = 10; // Example data
  districtCount: number = 20; // Example data
  subdistrictCount: number = 30; // Example data
  localBodyCount: number = 15; // Example data
  villageCount: number = 100; // Example data
  wardsCount: number = 250; // Example data
  untaggedConsumersCount: number = 250; // Example data
  villMappingChangesCount: number = 250; // Example data
  untaggedvillageCount: number = 250; // Example data
  taggingPercentage: number = 80; // Example data
  totalConsumersCount: number = 250; // Example data
  
  recentChanges = [
    { date: '2023-10-01', description: 'New village added: Village A' },
    { date: '2023-10-02', description: 'Boundary updated for District B' },
    { date: '2023-10-03', description: 'Local body elections held' }
  ];

  userActivity = [
    { name: 'User 1', activity: 'Updated village data', timestamp: '2023-10-01 10:00 AM' },
    { name: 'User 2', activity: 'Submitted feedback', timestamp: '2023-10-01 11:30 AM' },
    { name: 'User 3', activity: 'Logged in', timestamp: '2023-10-02 09:15 AM' }
  ];
  constructor() { }

  ngOnInit(): void {
    // Fetch data from the server or service here
  }
}
