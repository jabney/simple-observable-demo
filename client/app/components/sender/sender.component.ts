import { Component, OnInit, Inject, Input } from '@angular/core'
import { MessageService } from "../../services/message.service"
import { APP_MESSAGES } from "../../tokens"

const INTERVAL_MS = 1000

@Component({
  selector: 'sender',
  templateUrl: 'sender.component.html',
  styleUrls: ['sender.component.scss']
})
export class SenderComponent implements OnInit {
  private messageCount: number
  private intervalId: number

  @Input('subscribers') private subscribers: object[]

  constructor(@Inject(APP_MESSAGES) private messageService: MessageService) {
    this.messageCount = 0
    this.intervalId = null
  }

  public buttonText(): string {
    return this.isRunning() ? 'Stop' : 'Start'
  }

  public isRunning() {
    return this.intervalId !== null
  }

  public start() {
    this.intervalId = window.setInterval(() => {
      this.messageService.broadcast(null)
    }, INTERVAL_MS)
  }

  public stop() {
    clearInterval(this.intervalId)
    this.intervalId = null
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
