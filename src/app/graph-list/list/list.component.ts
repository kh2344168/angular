import { Component } from '@angular/core';
import {MyDataObject} from "./list.model"
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  myObjects: MyDataObject[] = [
    new MyDataObject(
      '../../../assets/images/gas-station-svgrepo-com.png',
      'STATION NAME DUMMY',
      ['Total Sales','62,721 m','Compression State','Compression ','Max Transaction / hour','20',],
      ['Total Value','550 EGP','Total Transaction Count','5161 ','Max Transaction Date-Time','8-1-2021 | 10:16 PM',],
    ),
    new MyDataObject(
      '../../../assets/images/gas-station-svgrepo-com.png',
      'STATION NAME DUMMY',
      ['Total Sales','62,721 m','Compression State','Compression ','Max Transaction / hour','20',],
      ['Total Value','550 EGP','Total Transaction Count','5161 ','Max Transaction Date-Time','8-1-2021 | 10:16 PM',],
    ),
    new MyDataObject(
      '../../../assets/images/gas-station-svgrepo-com.png',
      'STATION NAME DUMMY',
      ['Total Sales','62,721 m','Compression State','Compression ','Max Transaction / hour','20',],
      ['Total Value','550 EGP','Total Transaction Count','5161 ','Max Transaction Date-Time','8-1-2021 | 10:16 PM',],
    ),
    new MyDataObject(
      '../../../assets/images/gas-station-svgrepo-com.png',
      'STATION NAME DUMMY',
      ['Total Sales','62,721 m','Compression State','Compression ','Max Transaction / hour','20',],
      ['Total Value','550 EGP','Total Transaction Count','5161 ','Max Transaction Date-Time','8-1-2021 | 10:16 PM',],
    ),
    new MyDataObject(
      '../../../assets/images/gas-station-svgrepo-com.png',
      'STATION NAME DUMMY',
      ['Total Sales','62,721 m','Compression State','Compression ','Max Transaction / hour','20',],
      ['Total Value','550 EGP','Total Transaction Count','5161 ','Max Transaction Date-Time','8-1-2021 | 10:16 PM',],
    ),
  ];

  salesData = [

  ];
  

  
}
