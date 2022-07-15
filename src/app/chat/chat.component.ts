import { Component, OnInit } from '@angular/core';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    public intercom: Intercom
  ) { }

  ngOnInit(): void {
    this.intercom.boot({
      app_id: "g6vnkysd",
      // Supports all optional configuration.
      widget: {
        "activator": "#intercom"
      }
    });
  }

}
