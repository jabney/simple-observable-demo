import { SimpleSubject, ISubscriptionToken, TNotifyCallback } from 'simple-subject/src'
import { Injectable } from '@angular/core'

@Injectable()
export class MessageService<T> {
  private subject: SimpleSubject<T>

  constructor() {
    this.subject = new SimpleSubject()
  }

  public broadcast(payload: T, async = false) {
    if (async) {
      this.subject.notifyAsync(payload)
    } else {
      this.subject.notify(payload)
    }
  }

  public subscribe(callback: TNotifyCallback): ISubscriptionToken {
    return this.subject.subscribe(callback)
  }
}

export { ISubscriptionToken, TNotifyCallback }
