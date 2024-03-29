import { Component } from '@angular/core';
import {
  filterBy,
  CompositeFilterDescriptor,
} from "@progress/kendo-data-query";
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
                  kendoTreeListExpandable [filterable]="true"
                  [filter]="itemfilter"
                  [height]="480">
            
             <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>
            
            <kendo-treelist-column [expandable]="true" field="name" title="SKU" [width]="140">
            </kendo-treelist-column>
            
            <kendo-treelist-column field="desc" title="Description" >
            </kendo-treelist-column>
            
            <kendo-treelist-column field="actualOrder" title="Actual Order" [width]="110" [filterable]="false" class="text-right" >
            </kendo-treelist-column>
            <kendo-treelist-column field="transfered" title="Transfer" [width]="80" class="text-right" [filterable]="false">
            </kendo-treelist-column>
            <kendo-treelist-column field="qtyRemaining" title="Qty To" [width]="80" class="text-right" [filterable]="false">
            </kendo-treelist-column>
        </kendo-treelist>

        <div style="height:1000px; width:100%; padding-top:'50px;'">

        <div style="width:'360px'; float: left; ">
        <kendo-treelist [kendoTreeListHierarchyBinding]="storeData" childrenField="contents" idField="id"
                  kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                  kendoTreeListExpandable
                  [height]="480" [filterable]="true"
                  [filter]="storefilter"
                  >
            <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>
            
            <kendo-treelist-column [expandable]="true" field="warehouse" title="Dist Warehouse" [width]="170" [filterable]="false"
            [style]="{'font-weight': 'bold'}">
            </kendo-treelist-column>
            
            <kendo-treelist-column field="store" title="Store" class="text-right" > 
            </kendo-treelist-column>
 
        </kendo-treelist>
        </div>

        <div style="width:'230px'; float: right; ">

        <kendo-treelist style="display:none" [kendoTreeListHierarchyBinding]="storeData2" childrenField="contents" idField="id"
                  kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                  kendoTreeListExpandable
                  [height]="545" [filterable]="true"
                  [filter]="storefilter"
                  >
            <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>

            <kendo-treelist-column [expandable]="true" field="store" title="Store" >
            </kendo-treelist-column>
 
        </kendo-treelist>
        </div>
        </div>

        <div style="height:1000px; width:100%; padding-top:'50px;'">

        <kendo-treelist [kendoTreeListHierarchyBinding]="data" childrenField="contents" idField="id"
                  [initiallyExpanded]="true"
                  kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                  kendoTreeListExpandable [filterable]="true"
                  [filter]="itemfilter"
                  [height]="480">
            
             <kendo-treelist-checkbox-column [width]="40" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>
            
            <kendo-treelist-column [expandable]="true" field="name" title="SKU" [width]="140">
            </kendo-treelist-column>
            
            <kendo-treelist-column field="desc" title="Description" >
            </kendo-treelist-column>
            
            <kendo-treelist-column field="actualOrder" title="Production Qty" [width]="120" [filterable]="false" class="text-right"  [headerStyle]="{'white-space': 'pre-wrap'}">
            </kendo-treelist-column>
            <kendo-treelist-column field="transfered" title="Transferred Qty" [width]="130" class="text-right" [filterable]="false"  [headerStyle]="{'white-space': 'pre-wrap' }">
            </kendo-treelist-column>
        </kendo-treelist>


      `,
      styles: [
        `
          .k-grid .k-column-title {
            white-space: normal;
          }
        `,
      ],
})
export class AppComponent {
  public data: Entry[] = filesystem;
  public storeData: StoreEntry[] = storeList;
  public storeData2: StoreEntry[] = storeList2;

  public itemfilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [],
  };
  
  public storefilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [],
  };

  public settings: SelectableSettings = {
    mode: 'row',
    multiple: true,
    drag: false,
  };

  public selected: any[] = [];


}
