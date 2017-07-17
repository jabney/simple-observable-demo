import { Component, OnInit, Inject, Input } from '@angular/core'
import { MessageService } from "../services/message.service"
import { APP_MESSAGES } from "../tokens"

@Component({
  selector: 'sender',
  templateUrl: 'sender.component.html',
  styleUrls: ['sender.component.scss']
})
export class SenderComponent implements OnInit {
  private messageCount: number
  private running: boolean

  @Input('subscribers') private subscribers: object[]

  constructor(@Inject(APP_MESSAGES) private messageService: MessageService) {
    this.messageCount = 0
    this.running = false
  }

  public buttonText() {
    return this.running ? 'Stop' : 'Start'
  }

  public start() {
    this.running = true
  }

  public stop() {
    this.running = false
  }

  public toggle() {
    if (this.running) {
      this.stop()
    } else {
      this.start()
    }
  }

  public ngOnInit() {
    if (this.running) { this.start() }
  }
}
