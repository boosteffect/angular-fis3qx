import { Component } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-treelist';
import { filesystem, Entry } from './filesystem';
import { storeList, StoreEntry } from './stores';

@Component({
  selector: 'my-app',
  template: `
        <h5 style="display:none">Selected rows: {{ selected.length }}</h5>
        <kendo-treelist [kendoTreeListHierarchyBinding]="data" childrenField="contents" idField="id"
                  [initiallyExpanded]="true"
                  kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                  kendoTreeListExpandable
                  [height]="435">
            <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>
            <kendo-treelist-column [expandable]="true" field="name" title="SKU" [width]="140">
            </kendo-treelist-column>
            <kendo-treelist-column field="desc" title="Description" >
            </kendo-treelist-column>
            <kendo-treelist-column field="actualOrder" title="Actual Order" [width]="110" class="text-right" >
            </kendo-treelist-column>
            <kendo-treelist-column field="transfered" title="Transfer" [width]="80" class="text-right" >
            </kendo-treelist-column>
            <kendo-treelist-column field="qtyRemaining" title="Qty To" [width]="80" class="text-right" >
            </kendo-treelist-column>
        </kendo-treelist>

        <div style="padding-top:'100px;'"></div>

        <div style="width:200px;">
        <kendo-treelist [kendoTreeListHierarchyBinding]="storeData" childrenField="contents" idField="id"
                  [initiallyExpanded]="true"
                  kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                  kendoTreeListExpandable
                  [height]="420"
                  >
            <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>
            <kendo-treelist-column [expandable]="true" field="name" title="Stores" class="text-right" >
            </kendo-treelist-column>
        </kendo-treelist>
        </div>
     `,
})
export class AppComponent {
  public data: Entry[] = filesystem;
  public storeData: StoreEntry[] = storeList;

  public settings: SelectableSettings = {
    mode: 'row',
    multiple: true,
    drag: false,
  };

  public selected: any[] = [];
}
