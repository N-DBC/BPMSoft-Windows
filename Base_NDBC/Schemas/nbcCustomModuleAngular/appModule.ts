import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { nbcCustomModuleAngular } from "src/components/nbcCustomModuleAngular.component";
import { FormsModule } from "@angular/forms";
import { QRCodeModule } from "angularx-qrcode"; // импорт библиотеки
// библиотеки для получение по esq
/*import { ComparisonType, EntityColumnValue } from "@bpmstudio/sdk";
import {
  EntitySchemaQueryService,
  ColumnConfig,
} from "src/services/entity-schema-query-service";
import { TypedFilters } from "src/models/filters.interface";
import { Subject } from "rxjs";*/

@NgModule({
  declarations: [nbcCustomModuleAngular],
  imports: [BrowserModule, FormsModule, QRCodeModule],
  providers: [],
  entryComponents: [nbcCustomModuleAngular],
})
export class ComponentModule {}
