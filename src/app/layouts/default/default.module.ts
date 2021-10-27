import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
  ]
})
export class DefaultModule { }
