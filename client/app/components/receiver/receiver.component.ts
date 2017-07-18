import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core'
import { MessageService, ISubscriptionToken } from "../../services/message.service"
import { MSG_INTERVAL } from "../../msg-tokens"
import { IMsgInterval } from "../../msg-interfaces"

@Component({
  selector: 'receiver',
  templateUrl: 'receiver.component.html',
  styleUrls: ['receiver.component.scss']
})

export class ReceiverComponent implements OnInit {
  public events: object[]

  private subscription: ISubscriptionToken

  @Input() private resetAt: number
  @Output() private subscribeAction = new EventEmitter<number>()

  constructor(@Inject(MSG_INTERVAL) private messageService: MessageService<IMsgInterval>) {
    this.events = []
    this.subscription = null
  }

  public subscribe() {
    this.subscribeAction.emit(1)

    this.subscription = this.messageService.subscribe((payload, id) => {
      if (this.events.length % this.resetAt === 0) {
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
