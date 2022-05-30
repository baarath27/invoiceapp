import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { ItemModel } from '../Models/Items';
import { BuyerModel } from '../Models/Buyer';
import { DataserviceService } from '../dataservice.service';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { DataSource } from '@angular/cdk/collections';
import {jsPDF} from 'jspdf';



// import { exit } from 'process';s


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  Items: any

  displayedColumns: string[] = ['ItemName', 'HSNNo', 'Quantity', 'Unit', 'PricePerUnit', 'Amount'];


  flag = 0
  ItemLength
  sum = 0
  cgst = 0
  sgst = 0;
  Total = 0;


  BuyerDetail = new BuyerModel()

  // Items: ItemModel[] = [
  //   {
  //   ItemName: 'Peter Dinklage',
  //   HSNNo:  1221212,
  //   Quantity:  10,
  //       Unit: 'Alive',
  //       PricePerUnit:100,
  //       Amount: 500
  //   },
  //   {
  //     ItemName: 'Peter Dinklage',
  //     HSNNo:  1221212,
  //     Quantity:  10,
  //         Unit: 'Alive',
  //         PricePerUnit:100,
  //         Amount: 500    },
  //   {
  //     ItemName: 'Peter Dinklage',
  //     HSNNo:  1221212,
  //     Quantity:  10,
  //         Unit: 'Alive',
  //         PricePerUnit:100,
  //         Amount: 500
  //   },
  //   {
  //     ItemName: 'Peter Dinklage',
  //     HSNNo:  1221212,
  //     Quantity:  10,
  //         Unit: 'Alive',
  //         PricePerUnit:100,
  //         Amount: 500
  //   }
  // ];

  // @ViewChild('table', {static: false}) table : ElementRef;


  constructor(private Dataservice: DataserviceService) {


    this.Refreshtable()

  }

  ngOnInit(): void {


  }

  ngDoCheck() {
    // this.Dataservice.deleteAllitem()

    if (this.Dataservice.updateBuyerdetailflag == true) {
      this.Dataservice.BuyerSample.subscribe(data => this.BuyerDetail = data)

    }
    

  }
  OnChanges() {


  }

  DeleteItems() {
    this.ItemLength = Object.keys(this.Items).length

    for (let i = 1; i <= this.ItemLength; i++) {
      this.Dataservice.deleteAllitem(i);
    }

  }
  Refreshtable() {
    this.Dataservice.getItem().subscribe({
      next: (res) => {
        this.Items = res


        this.Refreshtable()


      },

    })

    // this.SubTotal(this.Items)
  }
  SubTotal() {

    this.ItemLength = Object.keys(this.Items).length
    for (let i = 0; i < this.ItemLength; i++) {
      this.sum += parseFloat(this.Items[i].Amount)


    }
    this.cgst = (this.sum * 18) / 100;
    this.sgst = (this.sum * 18) / 100;
    this.Total = this.sum + this.cgst + this.sgst


  }

  download() {
    var element = document.getElementById('table');
    var opt = {
      margin: 1,
      filename: 'output.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
  }
  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   };

  //   const table = this.table.nativeElement;

  //   doc.fromHTML(table.innerHTML, 15, 15, {
  //     width: 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('tableToPdf.pdf');
 
  // }


 }
