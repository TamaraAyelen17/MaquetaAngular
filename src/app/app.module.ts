import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { IndexComponent } from './componentes/index/index.component';
import { NavbarComponent } from './componentes/index/navbar/navbar.component';
import { RedesComponent } from './componentes/index/navbar/redes/redes.component';
import { BotonLoginComponent } from './componentes/index/navbar/boton-login/boton-login.component';
import { ModalLoginComponent } from './componentes/index/navbar/modal-login/modal-login.component';
import { BannerComponent } from './componentes/index/banner/banner.component';
import { AcercadeComponent } from './componentes/index/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/index/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/index/educacion/educacion.component';
import { SkillsComponent } from './componentes/index/skills/skills.component';
import { ProyectosComponent } from './componentes/index/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { FormInicioSesionComponent } from './componentes/iniciosesion/form-inicio-sesion/form-inicio-sesion.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { NavbarPanelComponent } from './componentes/panel/navbar-panel/navbar-panel.component';
import { BotonlogOutComponent } from './componentes/panel/navbar-panel/botonlog-out/botonlog-out.component';
import { VerticalnavComponent } from './componentes/panel/verticalnav/verticalnav.component';
import { SeccionpanelComponent } from './componentes/panel/seccionpanel/seccionpanel.component';
import { BannerpanelComponent } from './componentes/panel/seccionpanel/bannerpanel/bannerpanel.component';
import { RedespanelComponent } from './componentes/panel/seccionpanel/redespanel/redespanel.component';
import { InfopanelComponent } from './componentes/panel/seccionpanel/infopanel/infopanel.component';
import { SobremipanelComponent } from './componentes/panel/seccionpanel/sobremipanel/sobremipanel.component';
import { ExperienciapanelComponent } from './componentes/panel/seccionpanel/experienciapanel/experienciapanel.component';
import { EducacionpanelComponent } from './componentes/panel/seccionpanel/educacionpanel/educacionpanel.component';
import { SkillspanelComponent } from './componentes/panel/seccionpanel/skillspanel/skillspanel.component';
import { ProyectospanelComponent } from './componentes/panel/seccionpanel/proyectospanel/proyectospanel.component';
import { RegistrousuarioComponent } from './componentes/registrousuario/registrousuario.component';
import { NavbarregistroComponent } from './componentes/registrousuario/navbarregistro/navbarregistro.component';
import { BotonLoginInicioComponent } from './componentes/registrousuario/navbarregistro/boton-login-inicio/boton-login-inicio.component';
import { FormregistrousuarioComponent } from './componentes/registrousuario/formregistrousuario/formregistrousuario.component';
import { NavbarIniciosesionComponent } from './componentes/iniciosesion/navbar-iniciosesion/navbar-iniciosesion.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    IndexComponent,
    NavbarComponent,
    RedesComponent,
    BotonLoginComponent,
    ModalLoginComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    IniciosesionComponent,
    FormInicioSesionComponent,
    PanelComponent,
    NavbarPanelComponent,
    BotonlogOutComponent,
    VerticalnavComponent,
    SeccionpanelComponent,
    RedespanelComponent,
    BannerpanelComponent,
    InfopanelComponent,
    SobremipanelComponent,
    ExperienciapanelComponent,
    EducacionpanelComponent,
    SkillspanelComponent,
    ProyectospanelComponent,
    RegistrousuarioComponent,
    NavbarregistroComponent,
    BotonLoginInicioComponent,
    FormregistrousuarioComponent,
    NavbarIniciosesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
