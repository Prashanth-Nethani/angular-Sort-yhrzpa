import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {bookDetailsComponent} from './book-details/book-details.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  MatSortModule ],
  declarations: [ AppComponent, HelloComponent,bookDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
