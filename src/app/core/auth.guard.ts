import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private auth:AuthService,
        private router: Router){}
    canActivate(): boolean{
        if (this.auth.token) return true
        this.router.navigateByUrl('/login')
            return false
        }
        }
