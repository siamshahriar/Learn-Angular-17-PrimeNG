import { Routes } from '@angular/router';
import { FormContainerComponent } from './components/form/form-container/form-container.component';
import { ButtonDataComponent } from './components/button/button-data/button-data.component';
import { PaneloverlaycontainerComponent } from './components/paneloverlay/paneloverlaycontainer/paneloverlaycontainer.component';
import { MenucontainerComponent } from './components/menu/menucontainer/menucontainer.component';

export const routes: Routes = [
    {
        path: "",
        component: FormContainerComponent
    },
    {
        path: "button",
        component: ButtonDataComponent
    },
    {
        path: "paneloverlay",
        component: PaneloverlaycontainerComponent
    },
    {
        path: "menu",
        component: MenucontainerComponent
    }
];
