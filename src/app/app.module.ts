import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { NgModule } from '@angular/core';
import { FormsModule, FormGroup,FormBuilder,Validator, ReactiveFormsModule } from '@angular/forms'; 
import {DataserviceService} from './dataservice.service';
import { BuyerModel } from './Models/Buyer';
import {ItemModel} from './Models/Items'
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';












@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatCommonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    BuyerModel,
    DataserviceService,
    ItemModel
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
