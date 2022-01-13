import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
}) //This decorator is required for components in angular

export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';
}
