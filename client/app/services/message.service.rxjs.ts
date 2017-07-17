import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

export interface IMessage {
  type: string
  payload: any
}

export type MessageCallback = (payload: any) => void

@Injectable()
export class MessageService {
  private handler: Subject<IMessage>

  constructor() {
    this.handler = new Subject<IMessage>()
  }

  public broadcast(type: string, payload: any) {
    this.handler.next({ type, payload })
  }

  public subscribe(type: string, callback: MessageCallback): Subscription {
    return this.handler
      .filter((message) => message.type === type)
      .map((message) => message.payload)
      .subscribe(callback)
  }
}
