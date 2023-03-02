import { Component } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-treelist';
import { filesystem, Entry } from './filesystem';

@Component({
    selector: 'my-app',
    template: `
        <h5 style="display:none">Selected rows: {{ selected.length }}</h5>
        <kendo-treelist [kendoTreeListHierarchyBinding]="data" childrenField="contents" idField="id"
                        kendoTreeListSelectable [selectable]="settings" [(selectedItems)]="selected"
                        kendoTreeListExpandable
                        [height]="410">
            <kendo-treelist-checkbox-column [width]="35" [checkChildren]="true" [showSelectAll]="true">
            </kendo-treelist-checkbox-column>
            <kendo-treelist-column [expandable]="true" field="name" title="Name" [width]="250">
            </kendo-treelist-column>
            <kendo-treelist-column field="type" title="Type" [width]="100">
            </kendo-treelist-column>
            <kendo-treelist-column field="size" title="Size" [width]="200">
            </kendo-treelist-column>
        </kendo-treelist>
    `
})
export class AppComponent {
    public data: Entry[] = filesystem;

    public settings: SelectableSettings = {
        mode: 'row',
        multiple: true,
        drag: false
    };

    public selected: any[] = [];
}
