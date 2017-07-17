import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { APP_MESSAGES } from './tokens'

import { MessageService } from './services/message.service'

import { AppComponent } from './app.component'
import { SenderComponent } from './components/sender.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SenderComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
