import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponentComponent } from './directive-component/directive-component.component';
import { DirectiveAttributeComponentComponent } from './directive-attribute-component/directive-attribute-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    FourthComponentComponent,
    DirectiveComponentComponent,
    DirectiveAttributeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
