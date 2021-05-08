import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    { text: 'Básicos', path: './template/basicos' },
    { text: 'Dinámicos', path: './template/dinamicos' },
    { text: 'Switches', path: './template/switches' },
  ];
  
  reactiveMenu: MenuItem[] = [
    { text: 'Básicos', path: './reactive/basicos' },
    { text: 'Dinámicos', path: './reactive/dinamicos' },
    { text: 'Switches', path: './reactive/switches' },
  ];
  
  authMenu: MenuItem[] = [
    { text: 'Login', path: './auth/login' },
    { text: 'Registro', path: './auth/registro' },
  ];
}
