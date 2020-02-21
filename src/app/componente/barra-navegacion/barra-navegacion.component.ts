import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpservice: HttpService , private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  getCantidad() {
    return this.httpservice.total;
  }

  logoutUser() {
    this.authService.logout()
      .then(res => {
        console.log(res);
        //this.userDetails = undefined;
        //localStorage.removeItem('user');
        this.router.navigate(['./']);
      }, err => {
        //this.showMessage('danger', err.message);
      });
  }


}
