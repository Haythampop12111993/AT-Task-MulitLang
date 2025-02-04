import { Component, Input, SimpleChanges } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { GlobalService } from '../../services/global.service';
import { Icustomer } from '../../interfaces/icustomer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-info',
  imports: [TranslateModule,CommonModule],
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.css'
})
export class CustomerInfoComponent {
  lang:string=""
  customerInfoArray:{name:string,val:string}[]
  @Input() customer:any
  constructor(private translate: TranslateService,private GlobalService:GlobalService) {
    // this.customerInfoArray = [{name:"protocol",val:"customerInformation.protocolName"},{name:"country",val:"customerInformation.countryName"},{name:"customer",val:"customerInformation.companyName"},{name:"numberOfSupplies",val:"customerInformation.numberOfSupplies"},"dateOfLastShipment","currentBalance","balanceUsed","allBalanceUsed"];
    this.customer = this.GlobalService.customersData[0];
    this.customerInfoArray=[{name:"protocol",val:"protocolName"},{name:"country",val:"countryName"},{name:"customer",val:"companyName"},{name:"numberOfSupplies",val:"numberOfSuppliesValue"},{name:"dateOfLastShipment",val:"dateOfLastShipmentValue"},{name:"currentBalance",val:"currentBalanceValue"},{name:"balanceUsed",val:"balanceUsedValue"},{name:"allBalanceUsed",val:"allBalanceUsedValue"}];
    this.GlobalService.$lang.subscribe((lang:string)=>{
      this.lang = lang;
    })
  }
  getTranslatedInfo(info: any): any {
    const key = 'customerInformation.' + info.val;
    let translatedValue = this.translate.instant(key);
    return this.customer[translatedValue];
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }
}
