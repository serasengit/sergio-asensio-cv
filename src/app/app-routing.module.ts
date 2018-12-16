import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from 'src/app/components/portada/portada.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProgrammingAreaComponent } from './components/programming-area/programming-area.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'cv', component: CurriculumComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'programmingArea', component: ProgrammingAreaComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
