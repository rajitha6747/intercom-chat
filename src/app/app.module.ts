import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IntercomModule } from 'ng-intercom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { IntercomServicesComponent } from './intercom-services/intercom-services.component';
import { IntercomFooterComponent } from './intercom-footer/intercom-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    ContactSectionComponent,
    IntercomServicesComponent,
    IntercomFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntercomModule.forRoot({
      appId: "dG9rOjFjMGFjMDhkXzJkZWRfNGI1Zl84YTM0XzM5MDQ0OTIwODE0ZDoxOjA=", // from your Intercom config
      updateOnRouterChange: true // will automatically run `update` on router event changes. Default: `false`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
