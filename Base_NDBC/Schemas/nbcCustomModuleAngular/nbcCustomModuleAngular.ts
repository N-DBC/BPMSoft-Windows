import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ElementRef,
  ViewChild,
  ChangeDetectorRef, // метод оповещение об изменении Angular
} from "@angular/core";
/* Импорт библиотеки. */
import { QRCodeModule } from "angularx-qrcode"; /* Импорт библиотеки QR code */
import { ComparisonType, EntityColumnValue } from "@bpmstudio/sdk";
import {
  EntitySchemaQueryService,
  ColumnConfig,
} from "src/services/entity-schema-query-service";
import { TypedFilters } from "src/models/filters.interface";
import { Subject, Observable, of } from "rxjs";
import { switchMap, takeUntil, map, tap, take } from "rxjs/operators";
import { componentsDataService } from "src/services/components-data-service";
import { broadcastChannelService } from "src/services/broadcast-channel.service";

/*type Parameters = {
  Account: string;
};*/

@Component({
  selector: "nbcCustomModuleAngular",
  templateUrl: "./nbcCustomModuleAngular.component.html",
  styleUrls: ["./nbcCustomModuleAngular.component.scss"],
})
export class nbcCustomModuleAngular {
  myAngularxQrCode: string = "";
  idAccount: string = "";

  private destroy$$: Subject<void> = new Subject<void>();

  constructor(
    private esq: EntitySchemaQueryService,
    private componentsDataService: componentsDataService,
    private broadcastChannel: broadcastChannelService,
    private cdr: ChangeDetectorRef // Внедрение зависимости
  ) {}

  ngOnInit() {
    this.componentsDataService
      .getComponentsData()
      .pipe(
        switchMap((res: any) => {
          const { idAccount } = res;
          console.log({
            res: res,
          });
          this.idAccount = idAccount;
          this.broadcastChannel.getValueByName(this.idAccount);
          return this.broadcastChannel.subscribeOnChannel(this.idAccount);
        }),
        takeUntil(this.destroy$$)
      )
      .subscribe((value) => {
        const resValue = JSON.parse(value);
        this.idAccount = resValue.columnValue;
        console.log({
          idAccount: resValue.columnValue,
        });
        this.loadAccountData();
      });
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  private loadAccountData(): void {
    this.esq.entitySchemaName = "Account";
    this.esq.rowCount = 1;

    const columns: ColumnConfig[] = [
      { name: "Id" },
      { name: "Name" },
      { name: "Web" },
      { name: "CreatedOn" },
    ];
    const filters: TypedFilters[] = [];

    /*const result: Array<EntityColumnValue> = [
      "e308b781-3c5b-4ecb-89ef-5c1ed4da488e",
    ];*/
    const result: Array<EntityColumnValue> = [this.idAccount];

    filters.push({
      filterType: 1,
      item: {
        comparisonType: ComparisonType.Equal,
        columnPath: "Name",
        value: result,
      },
    });
    const data = this.esq.getItems(columns, filters);

    data.subscribe((response) => {
      if (response.result) {
        response.result.forEach((item: any) => {
          this.myAngularxQrCode = item.Web;
          this.cdr.detectChanges(); // Сообщаем Angular об изменении
          console.log("QR Code Data:", this.myAngularxQrCode);
          console.log({
            Name: item.Name,
          });
        });
      }
    });
  }
}
