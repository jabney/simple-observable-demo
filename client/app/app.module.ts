import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { SenderComponent } from './components/sender/sender.component'
import { ReceiverComponent } from './components/receiver/receiver.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SenderComponent, ReceiverComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
