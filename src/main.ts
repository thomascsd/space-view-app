import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection(),importProvidersFrom(BrowserModule, AppRoutingModule), provideHttpClient()],
}).catch((err) => console.error(err));
