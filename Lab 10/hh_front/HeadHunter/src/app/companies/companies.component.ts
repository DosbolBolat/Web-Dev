import {Component, OnInit} from '@angular/core';
import {companies} from "../models";
import {CompanyService} from "../company.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit{
  companies: companies[]= [];
  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies)=>{
      this.companies = companies
    })
  }

}
