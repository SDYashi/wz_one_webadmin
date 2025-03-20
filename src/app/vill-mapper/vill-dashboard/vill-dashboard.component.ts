import { Component } from '@angular/core';
import { VillserviceesService } from '../myServices/villservicees.service';

@Component({
  selector: 'app-vill-dashboard',
  templateUrl: './vill-dashboard.component.html',
  styleUrls: ['./vill-dashboard.component.css']
})
export class VillDashboardComponent {

  divParliamentCount: number = 0;
  assemblyCount: number = 0;
  districtCount: number = 0;
  subdistrictCount: number = 0;
  localBodyCount: number = 0;
  villageCount: number = 0;
  wardsCount: number = 0;
  untaggedConsumersCount: number = 0;
  villMappingChangesCount: number = 0;
  untaggedvillageCount: number = 0;
  taggingPercentage: number = 0;
  totalConsumersCount: number = 0;
  
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

  constructor( private villservice:VillserviceesService) { }

  ngOnInit(): void {
   this.villservice.getDashboardSummary().subscribe({
    next: (data) => {
      const {parliament_count, assembly_count, district_count, subdistrict_count, localbody_count, village_count, total_consumers, unmapped_villages, mapped_villages, villagemapped_percentage} = data;
      this.divParliamentCount = parliament_count;
      this.assemblyCount = assembly_count;
      this.districtCount = district_count;
      this.subdistrictCount = subdistrict_count;
      this.localBodyCount = localbody_count;
      this.villageCount = village_count;
      this.totalConsumersCount = total_consumers;
      this.untaggedvillageCount = unmapped_villages;
      this.villMappingChangesCount = mapped_villages;
      this.taggingPercentage = villagemapped_percentage;
    
    },
    error: (error) => {
      console.error('Error fetching parliaments:', error);
    }
   })
  }
}
