import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BarraNavegacionComponent } from './componente/barra-navegacion/barra-navegacion.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

