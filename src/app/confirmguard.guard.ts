import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Comp1Component } from './comp1/comp1.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmguardGuard implements CanDeactivate<Comp1Component> {
  canDeactivate(
    component: Comp1Component,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('deactivate');
    let subject = new Subject<boolean>();
    component.openDialog();
    subject = component.subject;
    return subject.asObservable();
  }
}
