import { Component } from "@angular/core";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    classe: any;

    handleChange() {
        this.classe = 'hide-sidebar'
    }
}