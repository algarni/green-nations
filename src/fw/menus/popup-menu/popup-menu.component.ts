import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from "fw/services/menu.service";
import { MenuItem } from "fw/services/IMenuItem";

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  @Input() menu: Array<MenuItem>

  ngOnInit() {
  }

}
