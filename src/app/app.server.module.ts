import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { RootModule } from './root.module';
import { RootComponent } from './root.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [ { path: 'offline-shell', component: AppShellComponent }];

@NgModule({
  imports: [
    RootModule,
    ServerModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [RootComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {}
