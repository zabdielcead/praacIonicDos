import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  mensajes: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mensajes = this.dataService.getPosts();
     /* .subscribe( (posts: any []) => {
                    console.log(posts);
                    this.mensajes = posts;
                });*/
  }
  /*
    si queremos no saturar la memoria para que no se ejecute siempre en el onInit en el servicio en el destroy podemos dejar de suscribirnos
  */

 escuchaClick(event: number) {
    console.log('Click en:', event);
 }
}
