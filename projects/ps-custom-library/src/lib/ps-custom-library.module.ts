import { NgModule } from '@angular/core';
import { PsCardComponent } from './ps-card/ps-card.component';
import { PsTableComponent } from './ps-table/ps-table.component';
import { PsHeaderComponent } from './ps-header/ps-header.component';
import { PsUserProfileDetailsComponent } from './ps-user-profile-details/ps-user-profile-details.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { PsTabsComponent } from './ps-tabs/ps-tabs.component';
import { PsFooterComponent } from './ps-footer/ps-footer.component';
import { OutsideClickDirective } from './directives/outside-click.directive';



@NgModule({
  declarations: [
    PsCardComponent,
    PsTableComponent,
    PsHeaderComponent,
    PsTabsComponent,
    PsUserProfileDetailsComponent,
    PsFooterComponent,
    OutsideClickDirective
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TableModule,
    MenuModule,
    TabMenuModule,
    ImageModule
  ],
  exports: [
    PsTableComponent,
    PsCardComponent,
    PsHeaderComponent,
    PsUserProfileDetailsComponent,
    PsTabsComponent,
    PsFooterComponent
  ]
})
export class PsCustomLibraryModule { }
