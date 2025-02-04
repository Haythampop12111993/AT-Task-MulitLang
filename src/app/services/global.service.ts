import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Icustomer } from '../interfaces/icustomer';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  lang:BehaviorSubject<string> = new BehaviorSubject<string>('en');
  $lang:Observable<string> = this.lang.asObservable();
  customersData:Icustomer[]

  constructor() {
    this.customersData = [
      {
        id: "1",
        number: "012345678910",
        nameCompanyInEnglish: "German insect extermination ",
        nameCompanyInArabic: "الشركة الالمانية لابادة الحشرات",
        companyImage: "assets/images/office.png",
        countryNameInEnglish: "Jordan",
        countryNameInArabic: " المملكة الأردنية الهاشمية",
        countryImage: "assets/images/jordan.png",
        protocolNameInEnglish: "Vodafone Egypt",
        protocolNameInArabic: "فودافون مصر",
        numberOfSupplies: "09",
        dateOfLastShipment: new Date(),
        currentBalance: 5000,
        balanceUsed: 5000,
        allBalanceUsed: 5000,
        appointmentDate: new Date(),
        endAppointmentDate: new Date(),
        responsibleNameForAppointmentInEnglish: "Abdul Rahim Ismail Nassif",
        responsibleNameForAppointmentInArabic: "عبدالرحيم اسماعيل ناصف",
        localMinutes: 7654,
        internationalMinutes: 122,
        amount: 61890
      },
      {
        id: "2",
        number: "012345678920",
        nameCompanyInEnglish: "German insect extermination",
        nameCompanyInArabic: "الشركة الالمانية لابادة الحشرات",
        companyImage: "assets/images/office.png",
        countryNameInEnglish: "Egypt",
        countryNameInArabic: "جمهورية مصر العربية",
        countryImage: "assets/images/egypt.png",
        protocolNameInEnglish: "Vodafone Egypt",
        protocolNameInArabic: "فودافون مصر",
        numberOfSupplies: "10",
        dateOfLastShipment: new Date(),
        currentBalance: 5000,
        balanceUsed: 5000,
        allBalanceUsed: 5000,
        appointmentDate: new Date(),
        endAppointmentDate: new Date(),
        responsibleNameForAppointmentInEnglish: "Abdul Rahim Ismail Nassif",
        responsibleNameForAppointmentInArabic: "عبدالرحيم اسماعيل ناصف",
        localMinutes: 7654,
        internationalMinutes: 122,
        amount: 61890
      },
      {
        id: "3",
        number: "012345678930",
        nameCompanyInEnglish: "German insect extermination",
        nameCompanyInArabic: "الشركة الالمانية لابادة الحشرات",
        companyImage: "assets/images/office.png",
        countryNameInEnglish: "Palestine",
        countryNameInArabic: "فلسطين",
        countryImage: "assets/images/palestine.png",
        protocolNameInEnglish: "Vodafone Egypt",
        protocolNameInArabic: "فودافون مصر",
        numberOfSupplies: "11",
        dateOfLastShipment: new Date(),
        currentBalance: 5000,
        balanceUsed: 5000,
        allBalanceUsed: 5000,
        appointmentDate: new Date(),
        endAppointmentDate: new Date(),
        responsibleNameForAppointmentInEnglish: "Abdul Rahim Ismail Nassif",
        responsibleNameForAppointmentInArabic: "عبدالرحيم اسماعيل ناصف",
        localMinutes: 7654,
        internationalMinutes: 122,
        amount: 61890
      },
      {
        id: "4",
        number: "012345678940",
        nameCompanyInEnglish: "German insect extermination",
        nameCompanyInArabic: "الشركة الالمانية لابادة الحشرات",
        companyImage: "assets/images/office.png",
        countryNameInEnglish: "Palestine",
        countryNameInArabic: "فلسطين",
        countryImage: "assets/images/palestine.png",
        protocolNameInEnglish: "Vodafone Egypt",
        protocolNameInArabic: "فودافون مصر",
        numberOfSupplies: "12",
        dateOfLastShipment: new Date(),
        currentBalance: 5000,
        balanceUsed: 5000,
        allBalanceUsed: 5000,
        appointmentDate: new Date(),
        endAppointmentDate: new Date(),
        responsibleNameForAppointmentInEnglish: "Abdul Rahim Ismail Nassif",
        responsibleNameForAppointmentInArabic: "عبدالرحيم اسماعيل ناصف",
        localMinutes: 7654,
        internationalMinutes: 122,
        amount: 61890
      },
      {
        id: "5",
        number: "012345678950",
        nameCompanyInEnglish: "German insect extermination",
        nameCompanyInArabic: "الشركة الالمانية لابادة الحشرات",
        companyImage: "assets/images/office.png",
        countryNameInEnglish: "Egypt",
        countryNameInArabic: "جمهورية مصر العربية",
        countryImage: "assets/images/egypt.png",
        protocolNameInEnglish: "Vodafone Egypt",
        protocolNameInArabic: "فودافون مصر",
        numberOfSupplies: "13",
        dateOfLastShipment: new Date(),
        currentBalance: 5000,
        balanceUsed: 5000,
        allBalanceUsed: 5000,
        appointmentDate: new Date(),
        endAppointmentDate: new Date(),
        responsibleNameForAppointmentInEnglish: "Abdul Rahim Ismail Nassif",
        responsibleNameForAppointmentInArabic: "عبدالرحيم اسماعيل ناصف",
        localMinutes: 7654,
        internationalMinutes: 122,
        amount: 61890
      }
    ]
   }
}
