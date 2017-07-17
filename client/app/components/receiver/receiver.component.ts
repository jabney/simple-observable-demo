import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'receiver',
  templateUrl: 'receiver.component.html',
  styleUrls: ['receiver.component.scss']
})

export class ReceiverComponent implements OnInit {
  private subscribed: boolean

  @Output() private subscribeAction = new EventEmitter<number>()

  constructor() { }

  public subscribe() {
    this.subscribed = true
    this.subscribeAction.emit(1)
  }

  public unsubscribe() {
    this.subscribed = false
    this.subscribeAction.emit(-1)
  }

  public isSubscribed() {
    return this.subscribed
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
