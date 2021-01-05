import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoUserComponent } from './repo-user/repo-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  { path: '', component: SearchUserComponent },
  { path: 'repo', component: RepoUserComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule {}
