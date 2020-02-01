import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  newQuantity:any={name:'',pricr:0}
model: any = {
        TenantId: '',
        CustomFieldName: '',
        quantities: []
    };
    add()
    {
      if(this.newQuantity.name && this.newQuantity.price)
      {
      console.log(this.newQuantity)
      this.model.quantities.push({name:this.newQuantity.name,price:this.newQuantity.price})
      }
      
    }
}
