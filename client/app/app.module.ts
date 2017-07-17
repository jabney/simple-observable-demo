import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { APP_MESSAGES } from './tokens'

import { MessageService } from './services/message.service'

import { AppComponent } from './app.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
