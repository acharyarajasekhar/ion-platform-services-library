import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef
} from '@angular/core';

@Injectable()
export class DynamicDomInjectorService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    attach(component: any, options: any): any {
        // 1. Create a component reference from the component 
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);

        for (let opt in options) {
            componentRef.instance[opt] = options[opt].toString();
        }

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        document.body.appendChild(domElem);

        return componentRef;
    }

    // Remove it from the component tree and from the DOM
    detach(componentRef: any) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }

}