import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { SenderComponent } from './components/sender/sender.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SenderComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
