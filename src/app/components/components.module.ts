import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';
import { RepoUserComponent } from './repo-user/repo-user.component';
import { ComponentesRoutingModule } from './components.routing.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { DescriptionRepoPipe } from '../pipes/description-repo.pipe';

@NgModule({
  declarations: [SearchUserComponent, RepoUserComponent, DescriptionRepoPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentesRoutingModule,
    NgbAccordionModule,
  ],
  exports: [SearchUserComponent],
})
export class ComponentsModule {}
