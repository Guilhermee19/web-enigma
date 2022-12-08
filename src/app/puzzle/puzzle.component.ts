import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})

export class PuzzleComponent implements OnInit {

  constructor(
    private router: Router,
  ) { 
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationEnd || ev instanceof NavigationStart) {
        this.url = ev.url
      }
    });
  }

  url: string = '';
  image: string = '';
  puzzle: string = 'sete + dois';
  status: string = 'var(--default)';

  ngOnInit(): void {
    switch(this.url){
      case '/digite_a_resposta_aqui': 
        this.puzzle = 'sete + dois'; this.image = '';
        this.status = 'var(--default)'; break;
      case '/nove': 
        this.puzzle = '007'; this.image = '';
        this.status = 'var(--default)'; break;
      case '/bond': 
        this.puzzle = '...bond'; this.image = '';
        this.status = 'var(--error)'; break;
      case '/james': 
        this.puzzle = 'james...'; this.image = '';
        this.status = 'var(--error)'; break;
      case '/jamesbond': 
        this.puzzle = ''; 
        this.image = 'https://i.ibb.co/k11kbfZ/11102626071143.webp'
        this.status = 'var(--default)'; break;
      case '/jokenpo': 
        this.puzzle = 'ROT13 - qrfraub'; this.image = '';
        this.status = 'var(--default)'; break;
      case '/desenho':
        this.puzzle = 'ROT13 - qrfraub'; this.image = '';
        this.status = 'var(--default)'; break;

      default: 
        this.puzzle = ''; this.image = '';
        this.status = 'var(--default)'; break;
    }
  }

}
