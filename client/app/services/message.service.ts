import { SimpleSubject, ISubscriptionToken, TNotifyCallback } from 'simple-subject/src'
import { Injectable } from '@angular/core'

@Injectable()
export class MessageService {
  private subject: SimpleSubject

  constructor() {
    this.subject = new SimpleSubject()
  }

  public broadcast(payload: any) {
    this.subject.notify({ payload })
  }

  public subscribe(callback: TNotifyCallback): ISubscriptionToken {
    return this.subject.subscribe(callback)
  }
}

export { ISubscriptionToken, TNotifyCallback }
