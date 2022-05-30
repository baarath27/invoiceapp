import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BuyerModel } from './Models/Buyer';
import { ItemModel } from './Models/Items';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  ItemModel=new ItemModel
  updateBuyerdetailflag:boolean=false;
  
 
  constructor( private http :HttpClient) { 
    
  this.updateBuyerdetailflag=false;
  
  }
  public Buyer = new BehaviorSubject<any>(new BuyerModel)
  BuyerSample= this.Buyer.asObservable(); 

  updateBuyerdetail(data): any{
    // console.log(data)
    this.Buyer.next(data)
    if(data!=null && data!=undefined){

      this.updateBuyerdetailflag=true;
    }
    else{
      this.updateBuyerdetailflag=false;

    }

  }
  postItem(data: any){
      
     return this.http.post<any>("http://localhost:3000/ItemModel/",data);
  }

  getItem(){
    return this.http.get<any>("http://localhost:3000/ItemModel/");
  
  }
  
  deleteAllitem(id){
    return this.http.delete<any>("http://localhost:3000/ItemModel/"+id).subscribe(data=>{
      console.log(data)
    })
   }
}
