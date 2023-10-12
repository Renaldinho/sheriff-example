import {Component, inject} from '@angular/core';
import {ManageProfileService} from "../../data/manage-profile.service";
import {AuthenticationService} from "../../../sign-in/data/authentication.service";

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent {
  data = inject(ManageProfileService);

  constructor(private service: AuthenticationService) {
  }
}
