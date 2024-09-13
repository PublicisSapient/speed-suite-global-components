import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'lib-ps-user-profile-details',
  templateUrl: './ps-user-profile-details.component.html',
  styleUrls: ['./ps-user-profile-details.component.scss']
})
export class PsUserProfileDetailsComponent {
  @Input() items:any;
  @Input() userName:any;
  @Input() userBadgeName:any;

  constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {
    }
}
