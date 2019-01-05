import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from 'src/app/components/portada/portada.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProgrammingAreaComponent } from './components/programming-area/programming-area.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuCvComponent } from './components/curriculum/menu-cv/menu-cv.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NoComma } from './config/pipes/noComma.pipe';
import { FormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';




@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    CurriculumComponent,
    SkillsComponent,
    ProgrammingAreaComponent,
    ContactComponent,
    MenuCvComponent,
    NoComma
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    Ng4LoadingSpinnerModule
  ],
  providers: [
    EmailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
