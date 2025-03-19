import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { VillserviceesService } from '../myServices/villservicees.service';

@Component({
  selector: 'app-vill-edit-mapping',
  templateUrl: './vill-edit-mapping.component.html',
  styleUrls: ['./vill-edit-mapping.component.css']
})
export class VillEditMappingComponent {

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

  
  locations_Change: any[] = [];
  groups_Change: any[] = [];
  dairies_Change: any[] = [];
  consumers_Change: any[] = [];
  parliaments_Change: any[] = [];
  parliaments_alldata_Change: any[] = [];
  assemblies_Change: any[] = [];
  districts_Change: any[] = [];
  localBodies_Change: any[] = [];
  subdistricts_Change: any[] = [];
  villages_Change: any[] = [];
  selectedConsumers_Change: string[] = [];
  location_code_Change: string = '';
  group_no_Change: string = '';
  dairy_no_Change: string = '';
  parliament_name_Change: string = '';
  assembly_name_Change: string = '';
  district_name_Change: string = '';
  localbody_name_Change: string = '';
  village_name_Change: string = '';
  subdistrict_name_Change: string='';
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
    if (this.location_code && this.group_no) {
     this.villService.getMappedconsumersforedit(this.location_code , this.group_no,this.parliament_name,this.assembly_name,this.district_name,this.subdistrict_name,this.localbody_name,this.village_name).subscribe({
       next: (response) => {
        this.consumers_search = 'Fetch Consumers';
        this.consumers = response;
         if (this.consumers.length === 0) {
           alert('No consumers remain for village tagging.');
         }
         this.fetchParliaments_Change()
       },
       error: (error) => {
        this.consumers_search = 'Fetch Consumers';
         console.log(error);
         alert("Server failed" + error.error);
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


  fetchParliaments_Change() {
    this.villService.getparliyaments().subscribe({
      next: (data) => {
        this.parliaments_Change = data;
      },
      error: (error) => {
        console.error('Error fetching parliaments:', error);
      }
    });
  }
  
  onParliamentChange_Change() {
    this.assembly_name_Change = '';
    this.district_name_Change = '';
    this.localbody_name_Change = '';
    this.subdistrict_name_Change = '';
    this.village_name_Change = '';
  
    if (this.parliament_name_Change) {
      this.villService.getassemblies(this.parliament_name_Change).subscribe({
        next: (data) => {
          this.assemblies_Change = data;
        },
        error: (error) => {
          console.error('Error fetching assemblies:', error);
        }
      });
    }
  }
  
  onAssemblyChange_Change() {
    this.district_name_Change = '';
    this.localbody_name_Change = '';
    this.subdistrict_name_Change = '';
    this.village_name_Change = '';
  
    if (this.assembly_name_Change) {
      this.villService.getdistricts(this.parliament_name_Change, this.assembly_name_Change).subscribe({
        next: (data) => {
          this.districts_Change = data;
        },
        error: (error) => {
          console.error('Error fetching districts:', error);
        }
      });
    }
  }
  
  onDistrictChange_Change() {
    this.localbody_name_Change = '';
    this.subdistrict_name_Change = '';
    this.village_name_Change = '';
  
    if (this.district_name_Change) {
      this.villService.getsubdistricts(this.parliament_name_Change, this.assembly_name_Change, this.district_name_Change).subscribe({
        next: (data) => {
          this.subdistricts_Change = data;
        },
        error: (error) => {
          console.error('Error fetching subdistricts:', error);
        }
      });
    }
  }
  
  onsubdistrictChange_Change() {
    this.localbody_name_Change = '';
    this.village_name_Change = '';
  
    if (this.subdistrict_name_Change) {
      this.villService.getlocalbodys(this.parliament_name_Change, this.assembly_name_Change, this.district_name_Change, this.subdistrict_name_Change).subscribe({
        next: (data) => {
          this.localBodies_Change = data;
        },
        error: (error) => {
          console.error('Error fetching local bodies:', error);
        }
      });
    }
  }
  
  onLocalBodyChange_Change() {
    this.village_name_Change = '';
    if (this.localbody_name_Change) {
      this.villService.getvillages(this.parliament_name_Change, this.assembly_name_Change, this.district_name_Change, this.subdistrict_name_Change, this.localbody_name_Change).subscribe({
        next: (data) => {
          this.villages_Change = data;
        },
        error: (error) => {
          console.error('Error fetching villages:', error);
        }
      });
    }
  }
  
  fetchLocations_Change() {
    this.villService.getLocationCodes().subscribe({
      next: (response) => {
        this.locations_Change = response;
      },
      error: (error) => {
        console.log(error);
        alert(error.error.msg);
      }
    });
  }
  
  onLocationChange_Change() {
    this.group_no_Change = '';
    this.dairy_no_Change = '';
    this.groups_Change = [];
    this.dairies_Change = [];
    this.consumers_Change = [];
  
    if (this.location_code_Change) {
      this.villService.getgroupno(this.location_code_Change).subscribe({
        next: (response) => {
          this.groups_Change = response;
        },
        error: (error) => {
          console.log(error);
          alert(error.error.msg);
        }
      });
    }
  }
  
  onGroupChange_Change() {
    this.dairy_no_Change = '';
    this.dairies_Change = [];
    this.consumers_Change = [];
  
    if (this.group_no_Change) {
      this.villService.getdairyno(this.location_code_Change, this.group_no_Change).subscribe({
        next: (response) => {
          this.dairies_Change = response;
        },
        error: (error) => {
          console.log(error);
          alert(error.error.msg);
        }
      });
    }
  }
  
  fetchConsumers_Change() {
    this.consumers_search = 'Pls wait...Searching Consumers';
    if (this.location_code_Change && this.group_no_Change) {
      this.villService.getMappedconsumersforedit(
        this.location_code_Change,
        this.group_no_Change,
        this.parliament_name_Change,
        this.assembly_name_Change,
        this.district_name_Change,
        this.subdistrict_name_Change,
        this.localbody_name_Change,
        this.village_name_Change
      ).subscribe({
        next: (response) => {
          this.consumers_search = 'Fetch Consumers';
          this.consumers_Change = response;
          if (this.consumers_Change.length === 0) {
            alert('No consumers remain for village tagging.');
          }
        },
        error: (error) => {
          this.consumers_search = 'Fetch Consumers';
          console.log(error);
          alert("Server failed" + error.error);
        }
      });
    }
  }

  
  submitSelectedConsumers() {
    if (this.selectedConsumers.length > 0) {
      this.consumers_tagging_submit='Pls wait...Consumers Tagging in Processing';
      this.processing_flag=true;
       this.payload = this.selectedConsumers.map(consumer_no => ({
        'loc_code': this.location_code,
        'group_no': this.group_no,
        'dairy_no': this.dairy_no_Change,
        'consumer_no':consumer_no,
        'consumer_name': this.consumers.find(c => c.consumer_no === consumer_no)?.consumer_name,
        'parliyament_name': this.parliament_name_Change, 
        'assembly_name': this.assembly_name_Change, 
        'district_name': this.district_name_Change, 
        'subdistrict_name': this.subdistrict_name_Change || '',  
        'localbody_name': this.localbody_name_Change,  
        'village_name': this.village_name_Change,  
        'village_code': 'village_code',
        'is_vill_mapped': true, 
        'created_by': 'NA', 
        'created_on': new Date().toISOString(), 
        'updated_by': 'NA',  
        'updated_on': new Date().toISOString()
      }));

      this.villService.updateMappedConsumers(this.payload).subscribe({
        next: (response) => {
          this.consumers_tagging_submit='Submit'
          this.processing_flag=false;
          alert('Total ' + response.inserted_ids.length+" out of "+this.consumers.length+" consumers updated successfully.");
          this.selectedConsumers = [];
          this.payload = [];
          this.consumers = [];  
        },
        error: (errors) => {
          this.consumers_tagging_submit='Submit'
          this.processing_flag=false;
          alert('Server Failed... ' + errors.error);
        }
      });
    }
  }
  
}