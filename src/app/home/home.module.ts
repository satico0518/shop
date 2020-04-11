import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, SharedModule],
    exports: [HomeComponent, CartListComponent],
    declarations: [HomeComponent, CartListComponent],
    providers: [],
})
export class HomeModule { }
