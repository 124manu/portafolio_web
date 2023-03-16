import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { InfoAcademiComponent } from './home/info-academi/info-academi.component';
import { NavComponent } from './common/nav/nav.component';
import { ExperienciaComponent } from './home/experiencia/experiencia.component';
import { EducacionComponent } from './home/educacion/educacion.component';
import { ProgresoComponent } from './home/progreso/progreso.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/inicio/home.component';





@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    InfoAcademiComponent,
    NavComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProgresoComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
