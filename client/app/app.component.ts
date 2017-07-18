import { Component } from '@angular/core'
import { Inject } from '@angular/core'

import { MSG_INTERVAL } from './msg-tokens'

import { MessageService } from './services/message.service'

import '../scss/app.scss'
import { IMsgInterval } from "./msg-interfaces"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: MSG_INTERVAL, useClass: MessageService }
  ]
})
export class AppComponent {
  public numSubscribers: number

  constructor() {
    this.numSubscribers = 0
  }

  public subscribeAction(subscribers: number) {
    this.numSubscribers += subscribers
  }
}
