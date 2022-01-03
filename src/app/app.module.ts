import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { PropertyComponent } from './components/property/property.component';
import { AgentyComponent } from './components/agenty/agenty.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LogRegisterComponent } from './components/log-register/log-register.component';
import { LoginComponent } from './components/log-register/login/login.component';
import { RegisterComponent } from './components/log-register/register/register.component';
import { AdminComponent } from './components/log-register/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResimComponent } from './components/resim/resim.component';
import { AboutCardsComponent } from './components/about/about-cards/about-cards.component';
import { CardsComponent } from './components/home/cards/cards.component';
import { FakeusersComponent } from './components/home/fakeusers/fakeusers.component';
import { UsersComponent } from './components/home/users/users.component';
import { PropertyCardsComponent } from './components/property/property-cards/property-cards.component';
import { MainUpdateComponent } from './components/profil/main-update/main-update.component';
import { AgentyUsersComponent } from './components/agenty/agenty-users/agenty-users.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PropertyComponent,
    AgentyComponent,
    ContactComponent,
    ProfilComponent,
    LogRegisterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    FooterComponent,
    ResimComponent,
    AboutCardsComponent,
    CardsComponent,
    FakeusersComponent,
    UsersComponent,
    PropertyCardsComponent,
    MainUpdateComponent,
    AgentyUsersComponent,
    ContactFormComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'https://demo.limantech.com/cards/public/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
