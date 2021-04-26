import { Component } from "@angular/core";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    classe: any;
    open: boolean = true;

    handleChange(action: boolean) {
        console.log(action);
        action ? this.classe = 'hide-sidebar' : this.classe = 'show-sidebar'


    }
}