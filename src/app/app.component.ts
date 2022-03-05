import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    AsyncPipe,
  ]
})
export class AppComponent {

  @ViewChild('dynamic', {
    read: ViewContainerRef
  }) private viewContainerRef!: ViewContainerRef;

  private componentRef!: ComponentRef<DynamicComponent>;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  showDynamicComponent() {
    this.viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);

    this.componentRef = this.viewContainerRef.createComponent<DynamicComponent>(componentFactory);
  }

  removeDynamicComponent() {
    this.componentRef.destroy();
  }
}
