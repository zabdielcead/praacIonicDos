import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje;  // voy a recibir una variable del exterior
  @Output() clickPost = new EventEmitter<number>();
      // poner que tipo es el clickPost en este caso sera un evento y especificar que va a emitir



  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.mensaje.id);
    this.clickPost.emit(this.mensaje.id);
    // podemos emitir cualquier cosa por ejemplo emit({id: 'ABC'})   emit(123) pero EventEmitter<number>() se especifica el numero
  }

}
