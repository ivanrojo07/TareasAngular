import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.css']
})
export class TareaIndividualComponent implements OnInit {
	@Input()
	tareaInfo: any;
	 public tareas:Array<Object>;
	 public tareaModel:any;
	@Output()
	cambioTarea: EventEmitter<number>  = new EventEmitter();
	mostrarDatos:boolean;
  constructor(private _http: Http) {
  	this.mostrarDatos = true;
   }

  ngOnInit() {
  	this.tareaModel=null;
  }

  borrarRegistro(id:number){
  	this._http.delete('http://localhost:8000/api/lista/'+id).subscribe((resp:Response)=>{
  		this.cambioTarea.emit();
  	});
  	
  }
  activarEdicion(){
  	this.mostrarDatos = false;
  	this.tareaModel = this.tareaInfo.texto;

  }
  editarTarea(id: number){
  	var parametros = { texto : this.tareaModel };
  	this._http.put('http://localhost:8000/api/lista/'+id, parametros)
  	.subscribe((resp:Response)=>{
  		this.cambioTarea.emit();
  	});
  }
}
