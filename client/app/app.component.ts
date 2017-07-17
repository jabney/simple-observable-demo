import { Component } from '@angular/core'
import { Inject } from '@angular/core'

import { APP_MESSAGES } from './tokens'

import { MessageService } from './services/message.service'

import '../scss/styles.scss'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: APP_MESSAGES, useClass: MessageService }
  ]
})
export class AppComponent {
  constructor(@Inject(APP_MESSAGES) private messageService: MessageService) {

  }
}
