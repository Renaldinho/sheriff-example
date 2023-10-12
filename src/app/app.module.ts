import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageProfileComponent } from './domains/profile/feature/manage-profile/manage-profile.component';
import { UserAvatarComponent } from './domains/profile/ui/user-avatar/user-avatar.component';
import { ProfileNavigationComponent } from './domains/profile/ui/profile-navigation/profile-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageProfileComponent,
    UserAvatarComponent,
    ProfileNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
