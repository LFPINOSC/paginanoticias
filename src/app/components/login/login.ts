import { Component } from '@angular/core';
import { AuthServicio } from '../../servicio/auth-servicio';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username='';
  password='';
  error='';
  constructor( private authServicio : AuthServicio
    , private router: Router){}
    login(){
      this.authServicio.login(this.username,this.password).subscribe({
        next:(ok)=>{
            if(ok) this.router.navigate(['/dasboard']);
            else this.error=('credeciales incorectas')
        },
        error:()=>(this.error="Error en el servidor no validad")
      })
    }

}
