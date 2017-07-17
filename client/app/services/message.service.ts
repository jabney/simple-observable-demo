import { SimpleObservable, ISubscriptionToken } from 'simple-subject-observer/src'
import { Injectable } from '@angular/core'

@Injectable()
export class MessageService {
  private subject: SimpleObservable

  constructor() {
    this.subject = new SimpleObservable()
  }

  public broadcast(payload: any) {
    this.subject.notify({ payload })
  }

  public subscribe(callback: (payload: any, id: number) => void): ISubscriptionToken {
    return this.subject.subscribe(callback)
  }
}

export { ISubscriptionToken }
