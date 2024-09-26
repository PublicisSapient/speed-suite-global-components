import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'lib-ps-tabs',
  templateUrl: './ps-tabs.component.html',
  styleUrls: ['./ps-tabs.component.scss']
})
export class PsTabsComponent {
  @Input() items:any;
	url='';
  activeTab:any;
  constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {
      this.routerEvent();
    }
    
    setActiveTabOnClick(url: string) {
      this.activeTab = this.items.filter((item:any) => {
        if(url?.includes(item.routerLink) || item?.routerLink?.includes(url)){
          return item;
        }
      })[0];
    }
    routerEvent() {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
        let urlWithoutParams = event.urlAfterRedirects.split('?');
        if (urlWithoutParams.length > 0) {
          this.url = urlWithoutParams[0];
        } else {
          this.url = event.urlAfterRedirects;
        }
        this.setActiveTabOnClick(this.url);
        }
      });
    }

}
