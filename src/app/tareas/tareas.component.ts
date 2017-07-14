import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  public tareas:Array<Object>;
  public item_a_guardar: Object;
  constructor(private http: Http) { 
    this.item_a_guardar = null;
  }

  ngOnInit() {
  	this.peticionExterna();
  }
  peticionExterna():void{
  	this.http.get('http://localhost:8000/api/lista')
  	.subscribe((respuesta:Response)=>{
  		this.tareas =respuesta.json();
  	});
  }
  actualizar(){
    this.peticionExterna();
  }
  guardarItem(){
    console.log(this.item_a_guardar);
    var parametros = { texto: this.item_a_guardar};
    this.http.post('http://localhost:8000/api/lista', parametros)
    .subscribe((respuesta:Response)=>{
      this.peticionExterna();
    });
  }

}
