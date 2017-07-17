import { Component, OnInit, Inject, Input } from '@angular/core'
import { MessageService } from "../../services/message.service"
import { APP_MESSAGES } from "../../tokens"

@Component({
  selector: 'sender',
  templateUrl: 'sender.component.html',
  styleUrls: ['sender.component.scss']
})
export class SenderComponent implements OnInit {
  private messageCount: number
  private intervalId: number

  @Input() private subscribers: object[]
  @Input() private interval: number

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
    this.messageService.broadcast(null)

    this.intervalId = window.setInterval(() => {
      this.messageService.broadcast(null)
    }, +this.interval)
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
