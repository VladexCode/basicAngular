import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styles: [],
})
export class RutasComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //  this.index=this.route.snapshot.params['id'];
  }

  navegarPersona() {
    this.router.navigate(['']);
  }
}
