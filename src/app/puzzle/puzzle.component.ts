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
  invisible: string = '';
  status: string = 'var(--default)';

  ngOnInit(): void {
    console.log('->', this.url);
    
    switch(this.url){
      case '/': 
        this.puzzle = 'sete + dois'; this.image = '';  this.invisible = ''; 
        this.status = 'var(--default)'; break;
      case '/digite_a_resposta_aqui': 
        this.puzzle = 'sete + dois'; this.image = ''; this.invisible = ''; 
        this.status = 'var(--default)'; break;
      case '/nove': 
        this.puzzle = '007'; this.image = ''; this.invisible = ''; 
        this.status = 'var(--default)'; break;
      case '/bond': 
        this.puzzle = '...bond'; this.image = ''; this.invisible = ''; 
        this.status = 'var(--error)'; break;
      case '/james': 
        this.puzzle = 'james...'; this.image = ''; this.invisible = ''; 
        this.status = 'var(--error)'; break;
      case '/jamesbond': 
        this.puzzle = ''; 
        this.image = 'https://i.ibb.co/k11kbfZ/11102626071143.webp'; this.invisible = ''; 
        this.status = 'var(--default)'; break;
      case '/jokenpo': 
        this.puzzle = 'ROT13 - qrfraub'; this.image = ''; this.invisible = '';  //https://rot13.com/
        this.status = 'var(--default)'; break;
      case '/desenho':
        this.puzzle = 'Olhe melhor... <br><br> pois esta de baixo do seu nariz'; this.image = ''; this.invisible = 'invisivel';  //https://rot13.com/
        this.status = 'var(--default)'; break;
      case '/invisivel':
        this.puzzle = 'sacas <br><br> aibofobia <br><br> subi no onibus <br><br> omissíssimo <br><br> ...'; this.image = ''; this.invisible = '';  
        this.status = 'var(--default)'; break;
      case '/palindromo':
        this.puzzle = 'YOU WON !'; this.image = ''; this.invisible = ''; 
        this.status = 'var(--default)'; break;


      default: 
        this.puzzle = ''; this.image = ''; this.invisible = ''; 
        this.status = 'var(--default)'; break;
    }
  }

}
