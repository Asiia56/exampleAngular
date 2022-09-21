import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CraneAddComponent } from './components/crane-add/crane-add.component';
import { CraneDetailsComponent } from './components/crane-details/crane-details.component';
import { CranesComponent } from './components/cranes/cranes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MobileCranesComponent } from './components/mobile-cranes/mobile-cranes.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { FormComponent } from './components/anotherView/form/form.component';
import { DetailComponent } from './components/anotherView/detail/detail.component';
import { ListComponent } from './components/anotherView/list/list.component';
import { ViewComponent } from './components/anotherView/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    CranesComponent,
    CraneDetailsComponent,
    CraneAddComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    MobileCranesComponent,
    FormComponent,
    DetailComponent,
    ListComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    NgxPaginationModule,
    MatButtonModule,
    MatDialogModule, 
    MatFormFieldModule, 
    MatCardModule,
    MatInputModule, 
    MatRadioModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
