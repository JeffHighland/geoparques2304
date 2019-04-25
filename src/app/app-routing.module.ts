import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'consult', loadChildren: './consult/consult.module#ConsultPageModule' },
  { path: 'options', loadChildren: './options/options.module#OptionsPageModule' },
  { path: 'perimeter', loadChildren: './perimeter/perimeter.module#PerimeterPageModule' },
  { path: 'mobiliar', loadChildren: './mobiliar/mobiliar.module#MobiliarPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'preconsult', loadChildren: './preconsult/preconsult.module#PreconsultPageModule' },
  { path: 'firstpoint', loadChildren: './firstpoint/firstpoint.module#FirstpointPageModule' },
  { path: 'maintwo', loadChildren: './maintwo/maintwo.module#MaintwoPageModule' },
  { path: 'mobquality', loadChildren: './mobquality/mobquality.module#MobqualityPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
