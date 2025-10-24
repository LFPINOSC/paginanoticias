import { Injectable } from "@angular/core";
import { CanActivate,  Router } from "@angular/router";
import { AuthServicio } from "../servicio/auth-servicio";

@Injectable({
    providedIn:'root'
})

export class AuthGuardo implements CanActivate{
    constructor(private authServicio: AuthServicio,private router:Router){}
    canActivate(): boolean {
        if(!this.authServicio.isAuthenticated()){
            console.log('hola')
            this.router.navigate(['/login']);
            return false;
        }
        return true;       
    }
} 