import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppShellComponent } from './app-shell/app-shell.component';
import { RootComponent } from './root.component';
import { RootModule } from './root.module';

const routes: Routes = [
  { path: 'offline-shell', component: AppShellComponent }
];

@NgModule({
  imports: [
    RootModule,
    ServerModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js')
  ],
  bootstrap: [RootComponent],
  declarations: [AppShellComponent]
})
export class AppServerModule {}
