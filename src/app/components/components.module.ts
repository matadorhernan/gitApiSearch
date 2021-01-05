import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';
import { RepoUserComponent } from './repo-user/repo-user.component';
import { ComponentesRoutingModule } from './components.routing.module';

@NgModule({
  declarations: [SearchUserComponent, RepoUserComponent],
  imports: [CommonModule, ReactiveFormsModule, ComponentesRoutingModule],
  exports: [SearchUserComponent],
})
export class ComponentsModule {}
