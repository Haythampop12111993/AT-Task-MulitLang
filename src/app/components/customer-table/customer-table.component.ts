import { CommonModule } from '@angular/common';
import { GlobalService } from './../../services/global.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PaginatorComponent } from "../paginator/paginator.component";
import { Icustomer } from '../../interfaces/icustomer';

@Component({
  selector: 'app-customer-table',
  imports: [TranslateModule, CommonModule, PaginatorComponent],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent {
 @Output() selectedCustomer:EventEmitter<Icustomer> = new EventEmitter();
  tHead: string[]
  tBodt: string[]
  customersData: any[]
  lang:string=""
constructor(private translate:TranslateService,private GlobalService: GlobalService) {
  this.tHead = ["customerTable.customerTableHeader.customerName","customerTable.customerTableHeader.appointmentDate","customerTable.customerTableHeader.endAppointmentDate","customerTable.customerTableHeader.responsibleName","customerTable.customerTableHeader.localMinutes","customerTable.customerTableHeader.internationalMinutes","customerTable.customerTableHeader.amount"];
  this.tBodt = []
  this.customersData= this.GlobalService.customersData
  this.GlobalService.$lang.subscribe((value:string)=>{
    this.lang = value;
  })
}
// getTrnslate(value:string):string{
//   let key = "customerTable.customerTableBody."+value
//   console.log(key);
//   let translatedValue = this.translate.instant(key);
//   return translatedValue

// }
selectCustomer(customer:Icustomer) {
  this.selectedCustomer.emit(customer)
}

}

