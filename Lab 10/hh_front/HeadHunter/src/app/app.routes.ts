import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompaniesComponent} from "./companies/companies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";

export const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent, title : 'Home'},
  {path : 'companies', component : CompaniesComponent, title : 'Home'},
  {path : ':id/vacancies', component : VacanciesComponent, title : 'Home'},
  {path : '**', component : HomeComponent}
];
