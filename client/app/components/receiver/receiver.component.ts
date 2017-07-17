import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core'
import { MessageService, ISubscriptionToken } from "../../services/message.service"
import { APP_MESSAGES } from "../../tokens"

@Component({
  selector: 'receiver',
  templateUrl: 'receiver.component.html',
  styleUrls: ['receiver.component.scss']
})

export class ReceiverComponent implements OnInit {
  private events: object[]
  private subscription: ISubscriptionToken

  @Output() private subscribeAction = new EventEmitter<number>()

  constructor(@Inject(APP_MESSAGES) private messageService: MessageService) {
    this.events = []
    this.subscription = null
  }

  public subscribe() {
    this.subscribeAction.emit(1)

    this.subscription = this.messageService.subscribe((payload, id) => {
      if (this.events.length % 5 === 0) {
        this.events = []
      }
      this.events.push(payload)
    })

  }

  public clear() {
    this.events = []
  }

  public unsubscribe() {
    this.subscribeAction.emit(-1)
    this.subscription.unsubscribe()
    this.subscription = null
  }

  public isSubscribed() {
    return this.subscription !== null
  }

  public toggle() {
    if (this.isSubscribed()) {
      this.unsubscribe()
    } else {
      this.subscribe()
    }
  }

  public buttonText() {
    return this.isSubscribed() ? 'Unsubscribe' : 'Subscribe'
  }

  public ngOnInit() { }
}
