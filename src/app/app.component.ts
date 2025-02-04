import { GlobalService } from './services/global.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'AT-Task';
  lang:string="";
  constructor(private GlobalService:GlobalService,private cdr:ChangeDetectorRef) {
   }
   ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   this.GlobalService.$lang.subscribe(lang => this.lang = lang);
   this.cdr.detectChanges();
   }
}
