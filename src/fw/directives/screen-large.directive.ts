import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { ScreenService } from "fw/services/screen.service";

@Directive({ selector: '[screenLarge]' })
export class NameDirective {
    private hasView = false;

    constructor(private viewContainer: ViewContainerRef,
                private template: TemplateRef<Object>,
                private screenService: ScreenService) { 
                    screenService.resize$.subscribe(()=>this.onResize());
                }

    @Input()
    set screenLarge(condition){
        // ignore the passed condition and set it based on screen size
        condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

        if(condition && !this.hasView){
            this.hasView = true;
            this.viewContainer.clear();
        }else if(!condition && this.hasView){
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize(){
        // trigger the stter
        this.screenLarge = false;
    }
}