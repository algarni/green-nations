import { Component, OnInit } from '@angular/core';
import { Country } from "app/view-models/country";
import { AppDataService } from "app/services/app-data.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {

  countries: Array<Country>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(
    private dataService: AppDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getCountries().subscribe((data)=>this.countries = data);
  }

  cancelDelete(){
    this.isDeleting = false;
    this.deleteId = null;
  }

  createCountry(){
    this.router.navigate(['/authenticated/country-detail', 0, 'create']);
  }

  deleteCountry(id: number){
    this.isDeleting = true;
    this.dataService.deleteCountry(id).subscribe(
      c => this.cancelDelete(),
      err => {
        this.deleteError = err; 
        this.isDeleting = false;
      }
    );
  }

  deleteCountryQuestion(id:number){
    this.deleteError = null;
    this.deleteId = id;
  }

  editCountry(id: number){
    this.router.navigate(['/authenticated/country-detail', id, 'edit']);
  }

  showCountryDetail(id: number){
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }

}
