import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../service/notification.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public hidePrimeButton: boolean = true;
  public showAction: boolean = false;

  constructor(
    public translate: TranslateService,
    public userService: UserService,
    private notifyService : NotificationService
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {
    this.hidePrimeButton =
      JSON.parse(localStorage.getItem('IsPrimeMember')) == 'true'
        ? false
        : true;
    this.showAction =
      JSON.parse(localStorage.getItem('IsPrimeMember')) == 'true'
        ? true
        : false;
    this.userService.isPrimeMember$.subscribe((isPrimeMember) => {
      if (isPrimeMember) {
        this.showAction = true;
      }
    });
  }

  public GetPrime() {
    localStorage.setItem('IsPrimeMember', JSON.stringify('true'));
    this.notifyService.showSuccess("You are now a Prime member !!", "")
    this.userService.isPrimeMember$.next(true);

  }
}
