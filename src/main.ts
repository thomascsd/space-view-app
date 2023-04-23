import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, NgxSmartModalModule.forRoot()),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
