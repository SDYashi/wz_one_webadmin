import { Component } from '@angular/core';
import { VillserviceesService } from '../myServices/villservicees.service';

@Component({
  selector: 'app-vill-view-mapping',
  templateUrl: './vill-view-mapping.component.html',
  styleUrls: ['./vill-view-mapping.component.css']
})
export class VillViewMappingComponent {
  searching_consumesers:string='Search';
  consumers: any[] = [];
  group_no: string = '';
  location_code: string = '';
  groups: any[] = [];
  locations:any[] = [];
  constructor(private villService: VillserviceesService) {}

  ngOnInit(): void {
    this.fetchLocations();
    // this.fetchMappedConsumers();
  }
  
  fetchLocations() {
    this.villService.getLocationCodes().subscribe({
      next: (response) => {
        this.locations = response;
      },
      error: (error) => {
        console.log(error);
        alert(error.error.msg);
      }
    });
  }
  onLocationChange() {
    this.group_no = '';
    this.groups = [];
    this.consumers = [];

    if (this.location_code) {
      this.villService.getgroupno(this.location_code).subscribe({
        next: (response) => {
          this.groups = response;
        },
        error: (error) => {
          console.log(error);
          alert(error.error.msg);
        }
      });
    }
  }

  fetchMappedConsumers(): void {
    this.searching_consumesers='Pls Wait..... Searching Consumers Data'
    if (this.location_code && this.group_no) {
    this.villService.getMappedConsumers(this.location_code,this.group_no).subscribe({
      next: (response) => {
        this.consumers = response;
        this.searching_consumesers='Search'
        if(this.consumers.length===0){
          alert("No Consumers found ...")
        }
      },
      error: (error) => {
        console.log(error);
        this.searching_consumesers='Search'
        alert(error.error.msg);
      }
    });
  }
  }

  onSearch(): void {
    this.fetchMappedConsumers();
  }

  



}
