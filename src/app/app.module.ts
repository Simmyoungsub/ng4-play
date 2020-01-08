import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, SubComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { CommerceModule } from './commerce/commerce.module';
// import { HomeModule } from './home/home.module';

const routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'mypage',
    loadChildren: './mypage/mypage.module#MypageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'pet',
    loadChildren: './pet/pet.module#PetModule'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommerceModule,
    RouterModule.forRoot(routes),
    // HomeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
