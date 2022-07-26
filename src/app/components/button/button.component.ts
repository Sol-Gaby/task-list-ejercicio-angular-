import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() text: string="";
  @Input() color: string="";
  /* agregamos estos inputs que estan referenciados inline en el button.html esto hace que sea reutilizable nuestro componente boton*/
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    /*antes aca habiamos puesto un console.log("click!") que nos mostraba en cosola que el boton funcionaba al hacerle click*/
    this.btnClick.emit();
    /*este es un evento para el boton, como lo queremos sacar para afuera creamos el Output()btnClick*/
  }

}
