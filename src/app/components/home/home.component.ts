import { GlobalService } from './../../services/global.service';
import { Component, OnInit} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CustomerInfoComponent } from "../customer-info/customer-info.component";
import { CustomerTableComponent } from "../customer-table/customer-table.component";
import { Icustomer } from '../../interfaces/icustomer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faEyeSlash, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FooterComponent } from "../footer/footer.component";





@Component({
  selector: 'app-home',
  imports: [
    TranslateModule,
    MatButtonModule, MatMenuModule,
    CustomerInfoComponent,
    CustomerTableComponent,
    FontAwesomeModule,
    MatButtonToggleModule,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  panIcon = faPenRuler
  hireEye = faEyeSlash
  selectedCustomerFromChild:Icustomer
  LocalLang: string = localStorage.getItem("lang") || "en";
  constructor(private translate: TranslateService,private GlobalService:GlobalService) {
      this.selectedCustomerFromChild = this.GlobalService.customersData[0]
      console.log(this.selectedCustomerFromChild);

  }
  ngOnInit() {
    this.LocalLang = localStorage.getItem("lang") || "ar";
    this.translate.setDefaultLang(this.LocalLang);
    this.GlobalService.lang.next(this.LocalLang);
  }

  onLanguageChange(lang: any) {
    console.log("", lang.value);
    // console.log(event.target.value);
    // console.log("event", event);
    this.translate.use(lang.value);
    localStorage.setItem("lang", lang.value)
    this.GlobalService.lang.next(lang.value);
  }
  getSelectedCustomer(event:Icustomer){
    this.selectedCustomerFromChild = event
    console.log(event)
  }
}
