import { Injectable } from '@angular/core';
import { MenuItem } from "fw/services/IMenuItem";



@Injectable()
export class MenuService {

    items: Array<MenuItem>;
    isVertical = false;
    showingLeftSideMenu = false;

    toggleLeftSideMenu(): void {
        this.isVertical=true;
        this.showingLeftSideMenu = !this.showingLeftSideMenu;
    }

    toggleMenuOrientaion(){
        this.isVertical = !this.isVertical;
    }


    constructor() { }
}