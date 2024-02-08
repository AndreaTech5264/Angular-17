import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="header-content">
        <div class="logo">Logo</div>
        <nav>
          <ul>
            <li><a routerLink="home">Home</a></li>
            <li><a routerLink="shop">Shop</a></li>
            <li><a routerLink="about">About</a></li>
            <li><a routerLink="contact">Contact</a></li>
          </ul>
        </nav>
        <div class="spacer"></div>
        <div class="right-content">
  <a routerLink="login">Login</a> <br>
  <a routerLink="register">Register</a>
</div>

      </div>
    </header>
    <div class="main-content">
      <!-- Il tuo contenuto principale qui -->
    </div>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(173, 216, 230, 0.5);
      color: #00bcd4;
      padding: 10px 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }

    
  .right-content a {
    margin-right: 10px; /* Puoi regolare il valore in base alle tue preferenze */
  }


    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5em;
      font-weight: bold;
      color: #fff;
    }

    nav ul {
      list-style: none;
      display: flex;
    }

    nav ul li {
      margin-right: 20px;
    }

    nav a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    }

    .spacer {
      flex-grow: 1;
    }

    .right-content {
      margin-right: 20px;
      display: flex;
      align-items: center;
    }

    .right-text {
      margin-left: 20px;
      font-weight: bold;
      color: #00bcd4;
      font-size: 1.2em;
      cursor: pointer;
    }

    .main-content {
      margin-top: 70px;
      padding: 20px;
    }
  `]
})
export class HeaderComponent {
  // Puoi aggiungere logica aggiuntiva qui se necessario
}
