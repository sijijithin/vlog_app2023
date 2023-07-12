import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewcontentComponent } from './viewcontent/viewcontent.component';
import { CreatecontentComponent } from './createcontent/createcontent.component';
import { UpdatecontentComponent } from './updatecontent/updatecontent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewcontentComponent,
    CreatecontentComponent,
    UpdatecontentComponent,
    SidebarComponent,
    MaincontentComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
