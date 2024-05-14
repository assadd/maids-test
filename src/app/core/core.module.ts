import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadService } from './services/load.service';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/reducers/user.reducers';
import { UserEffects } from './state/user/effects/user.effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ users: userReducer }, {
    }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [
    LoadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
