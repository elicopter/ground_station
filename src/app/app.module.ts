import { BrowserModule }        from "@angular/platform-browser";
import { NgModule }             from "@angular/core";
import { FormsModule }          from "@angular/forms";
import { HttpModule }           from "@angular/http";
import { RouterModule, Router } from "@angular/router";
import { NgbModule }            from "@ng-bootstrap/ng-bootstrap";

import { AppComponent }           from "./app.component";
import { CatchAllComponent }      from "./catch-all/catch-all.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";

import { HomeModule }      from "./home/home.module";
import { MonitoringModule } from "./monitoring/monitoring.module";
import { SocketService }   from "./socket/socket.service";

export const routes = [
  { path: "**", component: CatchAllComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CatchAllComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HomeModule,
    MonitoringModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }