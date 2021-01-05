import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [SearchUserComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchUserComponent],
})
export class ComponentsModule {}
