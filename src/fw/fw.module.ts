import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from "fw/framework-body/framework-body.component";
import { ContentComponent } from "fw/content/content.component";
import { TitleBarComponent } from "fw/title-bar/title-bar.component";
import { FrameworkConfigService } from "fw/services/framework-config.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent
  ],
  providers: [
    FrameworkConfigService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
