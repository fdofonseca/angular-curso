import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent], //Componentes del módulo
  exports: [ListadoComponent], //Componentes que se podrán exportar fuera de este módulo
  imports: [CommonModule], //Modulos
})
export class HeroesModule {}
