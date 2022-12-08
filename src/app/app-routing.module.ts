import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

const routes: Routes = [
  {
		path: '', component: NavbarComponent,
		children: [
			{ path: '', redirectTo: 'digite_a_resposta_aqui', pathMatch: 'full' },
      		{ path: 'digite_a_resposta_aqui', component: PuzzleComponent},
      		{ path: 'nove', component: PuzzleComponent},
      		{ path: 'jamesbond', component: PuzzleComponent},
      		{ path: 'james', component: PuzzleComponent},
      		{ path: 'bond', component: PuzzleComponent},
      		{ path: 'jokenpo', component: PuzzleComponent},
      		{ path: 'desenho', component: PuzzleComponent},
      		{ path: 'invisivel', component: PuzzleComponent},
      		{ path: 'palindromo', component: PuzzleComponent},
		]
	},
	{ path: '**', redirectTo: 'digite_a_resposta_aqui' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
