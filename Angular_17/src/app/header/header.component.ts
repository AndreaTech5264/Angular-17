// header.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="header-content">
        <div class="logo">Logo</div>
        <nav>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/about">About</a></li>
            <!-- Aggiungi altri link del menu se necessario -->
          </ul>
        </nav>
        <div class="spacer"></div>
        <div class="right-content">
          <div class="right-text">Login</div>
          <div class="right-text">Registrati</div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: #1a1a1a; /* Colore di sfondo scuro */
      color: #00bcd4; /* Colore del testo azzurro */
      padding: 10px 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Ombra più pronunciata */
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5em;
      font-weight: bold;
      color: #fff; /* Colore del testo bianco */
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
      margin-right: 100px;
      display: flex;
      align-items: center;
    }

    .right-text {
      margin-left: 20px;
      font-weight: bold;
      color: #00bcd4; /* Colore del testo azzurro */
      font-size: 1.2em;
      /* Aggiungi altri stili futuristici se necessario */
    }
  `]
})
export class HeaderComponent {
  // Puoi aggiungere logica aggiuntiva qui se necessario
}
