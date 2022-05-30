import { Component, OnInit } from '@angular/core';
// import { ItemModel} from '../Models/Items';
import { BuyerModel } from '../Models/Buyer';
import { ItemModel } from '../Models/Items';
import { DataserviceService } from '../dataservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListViewComponent } from '../list-view/list-view.component';




@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {

  BuyerIsDisable: boolean = false;


  BillerName: string = "";
  GstNo: string = ""
  state = ""
  placeofsupply = ""
  InvoiceNo = ""
  BillDate
  // addbuyerdisable :boolean= false;
  ItemList: any

  ItemName: String = ""
  HSNNo
  Quantity
  Unit: String = ""
  PricePerUnit
  Amount

  productForm!: FormGroup;
  ListViewComponent = new ListViewComponent(this.Dataservice);


  constructor(private BuyerModel: BuyerModel, private Dataservice: DataserviceService, private ItemModel: ItemModel, private formBuilder: FormBuilder) {


    this.BuyerIsDisable = false



  }

  ngOnInit(): void {
    //  this.addbuyerdisable = false;
    this.productForm = this.formBuilder.group({
      ItemName: ["", Validators.required],
      HSNNo: ["", Validators.required],

      Quantity: ["", Validators.required],

      Unit: ["", Validators.required],

      PricePerUnit: ["", Validators.required],

      Amount: ["", Validators.required],



    })

  }

  AddBuyer() {
    this.BuyerModel.BillerName = this.BillerName
    this.BuyerModel.GstNo = this.GstNo
    this.BuyerModel.state = this.state
    this.BuyerModel.placeofsupply = this.placeofsupply
    this.BuyerModel.InvoiceNo = this.InvoiceNo
    this.BuyerModel.BillDate = this.BillDate
    // this.addbuyerdisable= true


    this.updateBuyer()

  }


  updateBuyer() {
    this.Dataservice.updateBuyerdetail(this.BuyerModel)
    this.BuyerIsDisable = true;


  }
  ResetBuyerDetail() {
    this.BuyerIsDisable = false;


  }

  addItem() {



    // this.ItemModel.ItemName=this.ItemName
    // this.ItemModel.HSNNo=this.HSNNo
    // this.ItemModel.Quantity=this.Quantity
    // this.ItemModel.Unit=this.Unit
    // this.ItemModel.PricePerUnit=this.PricePerUnit
    // this.ItemModel.Amount=this.Amount

    this.productForm.value.Amount = this.productForm.value.Quantity * this.productForm.value.PricePerUnit;

    this.postItem(this.productForm.value)

  }

  postItem(data) {
    this.Dataservice.postItem(data)
      .subscribe({
        next: (res) => {
          alert("added successfuly ")

          this.ListViewComponent = new ListViewComponent(this.Dataservice);

          this.productForm.reset();

        },
        error: () => {
          alert("error while adding ")
        }
      })
  }


}
