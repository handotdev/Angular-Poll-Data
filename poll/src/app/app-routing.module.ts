import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollsComponent } from './polls/polls.component';
import { DataComponent } from './data/data.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'polls', component: PollsComponent },
  { path: 'data', component: DataComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
