import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'action-button-cell',
  templateUrl: 'action-button-cell.component.html',
  styleUrls: ['action-button-cell.component.css']
})

export class ActionButtonCellRenderer implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  invokeParentMethod(action: string) {
    this.params.context.componentParent.onActionButtonClicked(this.params.data, action);
  }
}
