import { GlobalService } from './../../services/global.service';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-paginator',
  imports: [FontAwesomeModule,TranslateModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  lang:string = ""
  pagesNumberEn:string[]=["1","2","3","4","5","6"]
  pagesNumberAr:string[] = ["6","5","4","3","2","1"]
  AngleDown = faAngleDown;
  AngleLeft = faAngleLeft;
  AngleRight = faAngleRight;
  constructor(private GlobalService:GlobalService,private translate:TranslateService) {
    this.GlobalService.$lang.subscribe((res)=> this.lang = res)
  }
}
