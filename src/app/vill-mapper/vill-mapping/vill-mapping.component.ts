import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { VillserviceesService } from '../myServices/villservicees.service';

@Component({
  selector: 'app-vill-mapping',
  templateUrl: './vill-mapping.component.html',
  styleUrls: ['./vill-mapping.component.css']
})
export class VillMappingComponent { 
  consumers_search: string = 'Fetch Consumers';
  consumers_tagging_submit: string = 'Submit';
  consumers_tagging_reset: string = 'Reset';
  processing_flag:boolean=false;
  locations: any[] = [];
  groups: any[] = [];
  dairies: any[] = [];
  consumers: any[] = [];
  parliaments: any[] = [];
  parliaments_alldata: any[] = [];
  assemblies: any[] = [];
  districts: any[] = [];
  localBodies: any[] = [];
  subdistricts: any[] = [];
  villages: any[] = [];
  selectedConsumers: string[] = [];
  location_code: string = '';
  group_no: string = '';
  dairy_no: string = '';
  parliament_name: string = '';
  assembly_name: string = '';
  district_name: string = '';
  localbody_name: string = '';
  village_name: string = '';
  subdistrict_name: string='';
  payload: any[] = [];

  constructor(private http: HttpClient, private villService: VillserviceesService ) {}

  ngOnInit() {
    this.fetchParliaments();
    this.fetchLocations();
  }
  fetchParliaments() {
  this.villService.getparliyaments().subscribe({
    next: (data) => {
      this.parliaments = data;
    },
    error: (error) => {
      console.error('Error fetching parliaments:', error);
    }
  });
  }
  onParliamentChange() {
    this.assembly_name = '';
    this.district_name = '';
    this.localbody_name = '';
    this.subdistrict_name = '';
    this.village_name = '';

    if (this.parliament_name) {
    this.villService.getassemblies(this.parliament_name).subscribe({
      next: (data) => {
        this.assemblies = data;
      },
      error: (error) => {
        console.error('Error fetching assemblies:', error);
      }
        });
    }
  }
  onAssemblyChange() {
    this.district_name = '';
    this.localbody_name = '';
    this.subdistrict_name = '';
    this.village_name = '';

    if (this.assembly_name) {
      this.villService.getdistricts(this.parliament_name, this.assembly_name).subscribe({
        next: (data) => {
          this.districts = data;
        },
        error: (error) => {
          console.error('Error fetching districts:', error);
        }
      });
    }
  }
  onDistrictChange() {
    this.localbody_name = '';
    this.subdistrict_name = '';
    this.village_name = '';

    if (this.district_name) {
      this.villService.getsubdistricts(this.parliament_name, this.assembly_name, this.district_name).subscribe({
        next: (data) => {
          this.subdistricts = data;
        },
        error: (error) => {
          console.error('Error fetching subdistricts:', error);
        }
      });
    }
  }

  onsubdistrictChange() {
    this.localbody_name = '';
    this.village_name = '';

    if (this.subdistrict_name) {
      this.villService.getlocalbodys(this.parliament_name, this.assembly_name, this.district_name,this.subdistrict_name).subscribe({
        next: (data) => {
          this.localBodies = data;
        },
        error: (error) => {
          console.error('Error fetching local bodies:', error);
        }
      });
    }
  }

  onLocalBodyChange() {
    this.village_name = '';
    if (this.localbody_name) {
      this.villService.getvillages(this.parliament_name, this.assembly_name, this.district_name, this.subdistrict_name,this.localbody_name).subscribe({
        next: (data) => {
          this.villages = data;
        },
        error: (error) => {
          console.error('Error fetching villages:', error);
        }
      });
    }
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
    this.dairy_no = '';
    this.groups = [];
    this.dairies = [];
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

  onGroupChange() {
    this.dairy_no = '';
    this.dairies = [];
    this.consumers = [];

    if (this.group_no) {
      this.villService.getdairyno(this.location_code , this.group_no).subscribe({
        next: (response) => {
          this.dairies = response;
        },
        error: (error) => {
          console.log(error);
          alert(error.error.msg);
        }
      });
    }
  }

  fetchConsumers() {
    this.consumers_search = 'Pls wait...Searching Consumers';
    if (this.location_code && this.group_no && this.dairy_no) {
     this.villService.getconsuerlist(this.location_code,this.group_no, this.dairy_no).subscribe({
       next: (response) => {
        this.consumers_search= 'Fetch Consumers';
        this.consumers = response;
         if (this.consumers.length === 0) {
           alert('No consumers remain for village tagging.');
         }
       },
       error: (error) => {
        this.consumers_search= 'Fetch Consumers';
         console.log(error);
         alert("Server failed"+ error.error);
       }
     });
  }
  }
 
  toggleSelection(consumerNo: string) {
    const index = this.selectedConsumers.indexOf(consumerNo);
    if (index === -1) {
      this.selectedConsumers.push(consumerNo);
    } else {
      this.selectedConsumers.splice(index, 1);
    }
  }

  isAllSelected(): boolean {
    return this.selectedConsumers.length === this.consumers.length && this.consumers.length > 0;
  }
  resetSelection() {
    this.selectedConsumers = [];
  }

  toggleSelectAll(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedConsumers = this.consumers.map(consumer => consumer.consumer_no);
    } else {
      this.selectedConsumers = [];
    }
  }

  submitSelectedConsumers() {
    if (this.selectedConsumers.length > 0) {
      this.consumers_tagging_submit='Pls wait...Consumers Tagging in Processing';
      this.processing_flag=true;
       this.payload = this.selectedConsumers.map(consumer_no => ({
        'loc_code': this.location_code,
        'group_no': this.group_no,
        'dairy_no': this.dairy_no,
        'consumer_no':consumer_no,
        'consumer_name': this.consumers.find(c => c.consumer_no === consumer_no)?.consumer_name,
        'parliyament_name': this.parliament_name, 
        'assembly_name': this.assembly_name, 
        'district_name': this.district_name, 
        'subdistrict_name': this.subdistrict_name || '',  
        'localbody_name': this.localbody_name,  
        'village_name': this.village_name,  
        'village_code': 'village_code',
        'is_vill_mapped': true, 
        'created_by': 'NA', 
        'created_on': new Date().toISOString(), 
        'updated_by': 'NA',  
        'updated_on': new Date().toISOString()
      }));

      this.villService.updateindexingconsumers(this.payload).subscribe({
        next: (response) => {
          this.consumers_tagging_submit='Submit'
          this.processing_flag=false;
          alert('Total ' + response.inserted_ids.length+" out of "+this.consumers.length+" consumers mapped successfully.");
          this.selectedConsumers = [];
          this.payload = [];
          this.consumers = [];  
        },
        error: (error) => {
          this.consumers_tagging_submit='Submit'
          this.processing_flag=false;
          alert('Failed to update consumers.' + error);
        }
      });
    }
  }
}