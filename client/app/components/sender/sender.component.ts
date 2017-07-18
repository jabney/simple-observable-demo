import { Component, OnInit, Inject, Input } from '@angular/core'
import { MessageService } from "../../services/message.service"
import { MSG_INTERVAL } from "../../tokens"

@Component({
  selector: 'sender',
  templateUrl: 'sender.component.html',
  styleUrls: ['sender.component.scss']
})
export class SenderComponent implements OnInit {
  public events: object[]

  @Input() public subscribers: object[]

  private messageCount: number
  private intervalId: number

  @Input() private interval: number
  @Input() private resetAt: number

  constructor(@Inject(MSG_INTERVAL) private messageService: MessageService) {
    this.messageCount = 0
    this.intervalId = null
    this.events = []
  }

  public buttonText(): string {
    return this.isRunning() ? 'Stop' : 'Start'
  }

  public isRunning() {
    return this.intervalId !== null
  }

  public start() {
    this.intervalId = window.setInterval(() => {
      if (this.events.length % this.resetAt === 0) {
        this.events = []
      }

      const event = {type: 'msg.interval', id: this.messageCount++}
      this.events.push(event)
      this.messageService.broadcast(event, true)
    }, +this.interval)
  }

  public stop() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  public clear() {
    this.events = []
  }

  public toggle() {
    if (this.isRunning()) {
      this.stop()
    } else {
      this.start()
    }
  }

  public ngOnInit() { }
}
