import { Component } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-treelist';
import { filesystem, Entry } from './filesystem';
import { storeList, storeList2, StoreEntry } from './stores';

@Component({
  selector: 'my-app',
  template: `
        <h5 style="display:none">Selected rows: {{ selected.length }}</h5>
        <kendo-treelist [kendoTreeListHierarchyBinding]="data" childrenField="contents" idField="id"
                  [initiallyExpanded]="true"
                  kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                  kendoTreeListExpandable
                  [height]="480">
            
             <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>
            
            <kendo-treelist-column [expandable]="true" field="name" title="SKU" [width]="140">
            </kendo-treelist-column>
            
            <kendo-treelist-column field="desc" title="Description" >
            </kendo-treelist-column>
            
            <kendo-treelist-column field="actualOrder" title="Actual Order" [width]="110" class="text-right" >
            </kendo-treelist-column>
            <kendo-treelist-column field="transfered" title="Transfer" [width]="80" class="text-right">
            </kendo-treelist-column>
            <kendo-treelist-column field="qtyRemaining" title="Qty To" [width]="80" class="text-right" >
            </kendo-treelist-column>
        </kendo-treelist>

        <div style="height:1000px; width:100%; padding-top:'10px;'">

        <div style="width:'300px'; float: left; ">
        <kendo-treelist [kendoTreeListHierarchyBinding]="storeData" childrenField="contents" idField="id"
                  kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                  kendoTreeListExpandable
                  [height]="480"
                  >
            <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>
            
            <kendo-treelist-column [expandable]="true" field="warehouse" title="Dist Warehouse" [width]="170"
            [style]="{'font-weight': 'bold'}">
            </kendo-treelist-column>
            
            <kendo-treelist-column field="store" title="Store" class="text-right" >
            </kendo-treelist-column>
 
        </kendo-treelist>
        </div>

        <div style="width:'230px'; float: right; ">
        <kendo-treelist [kendoTreeListHierarchyBinding]="storeData2" childrenField="contents" idField="id"
                  kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                  kendoTreeListExpandable
                  [height]="545"
                  >
            <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>

            <kendo-treelist-column [expandable]="true" field="store" title="Store" >
            </kendo-treelist-column>
 
        </kendo-treelist>
        </div>
        </div>
      `,
})
export class AppComponent {
  public data: Entry[] = filesystem;
  public storeData: StoreEntry[] = storeList;
  public storeData2: StoreEntry[] = storeList2;

  public settings: SelectableSettings = {
    mode: 'row',
    multiple: true,
    drag: false,
  };

  public selected: any[] = [];
}
