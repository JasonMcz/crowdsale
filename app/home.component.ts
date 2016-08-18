import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {NgModel} from '@angular/forms';
import {CountDown} from './countdown.component'

import {Navbar} from './navbar.component'
import {CrowdSale} from './sale.component'


@Component({
  selector: 'home',
  directives: [AlertComponent, DATEPICKER_DIRECTIVES, NgModel,CountDown,Navbar,CrowdSale],
  template: `
    <header id="intro">
      <div class="container">
        <div class="table">
          <div class="header-text">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1><img src = "resources/img/logo.png" width="55%" height="auto"></h1>
              </div>
              <section class="content">
              <p class="subtitle" style="color:#fff">Time Left Until Crowdsale</p>

              <countdown inputDate="September 26, 2016 00:00:00">Loading...</countdown>
              <p class="subtitle">Notify Me When It's Ready</p>

              <div id="newsletter" class="form-wrap">
                          <form action="subscribe.php" method="post" id="newsletter-form" novalidate="novalidate">
                            <p class="form-field">
                              <label for="newsletter_email" class="screen-reader-text">Please enter your email</label>
                              <input type="text" name="newsletter_email" id="newsletter_email" value="" placeholder="Your email">
                            </p>
                            <p class="form-submit">
                              <input type="submit" name="newsletter_submit" id="newsletter_submit" value="Subscribe">
                            </p>
                          </form>
              <div class="loading" style="display: none;"><span class="bounce1"></span><span class="bounce2"></span><span class="bounce3"></span></div><div class="success" style="display: none;"></div></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav-bar></nav-bar>

  `,
})


export class HomeComponent {

}
