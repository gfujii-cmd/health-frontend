import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private tokenService: TokenStorageService,
    private router: Router
    ) { }

  checkToken(): boolean {
    try {
      return this.tokenService.decodeToken(this.tokenService.getToken()) !== undefined ? true : false;
    } catch (err) {
      console.log(`Token Inválido! ${err.message}`);
      this.router.navigate(['account/login']);
      return false;
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.checkToken();
  }

  canLoad() {
    return this.checkToken();
  }

  checkIfUserValid(): void {
    
  }
}
