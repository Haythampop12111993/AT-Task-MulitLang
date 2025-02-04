export interface Icustomer {
  id: string;
  number: string;
  nameCompanyInEnglish: string;
  nameCompanyInArabic: string;
  companyImage: string;
  countryNameInEnglish: string;
  countryNameInArabic: string;
  countryImage: string;
  protocolNameInEnglish: string;
  protocolNameInArabic: string;
  numberOfSupplies: string ;
  dateOfLastShipment: Date;
  currentBalance: number;
  balanceUsed: number;
  allBalanceUsed: number;
  appointmentDate: Date;
  endAppointmentDate: Date;
  responsibleNameForAppointmentInEnglish: string;
  responsibleNameForAppointmentInArabic: string;
  localMinutes: number;
  internationalMinutes: number;
  amount:number;
}
