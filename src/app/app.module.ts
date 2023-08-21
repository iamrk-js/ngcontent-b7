import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './shared/components/test/test.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AccordianComponent } from './shared/components/accordian/accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AuthComponent,
    AccordianComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
