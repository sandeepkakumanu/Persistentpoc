
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(){
    console.log("user");
    
  }
  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem('data'));
    console.log(user,"user");
    this.listData = user;
    
  }
  title = 'Projectlist';
  listData:any=[
    //    {
    //      name:'Products',
    //      data:[
    //        'Samsung', 'iphone10', 'Realme'
    //      ]
    //    },
    //    {
    //    name:'Services',
    //    data:[
    //      'Hyderabad', 'Banglore', 'pune'
    //    ]
    //  }  
  ];
  name:string;
  dataInCard:string;
  id:any;
  namesList: any;
  LIST_IDS: any=[];

  
  
  addList(){
   
    
    const objData = {

      name:this.name,
      data:[]
    }

  
    this.listData.push(objData);
    
    this.name=''
    console.log(this.listData);
    
  }
  addCardAtIndex(id){    
    this.id = id
  }
  addCard(){
    this.listData[this.id].data.push(this.dataInCard);
    localStorage.setItem('data', JSON.stringify(this.listData));
    this.listData = JSON.parse(localStorage.getItem('data'));
    this.dataInCard = '';

  }
  delete(index, i){
    console.log(index,i);
    this.listData[i].data.splice(index,1);
    localStorage.setItem('data', JSON.stringify(this.listData));
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event);
    
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }
 

  drop(event: CdkDragDrop<string[]>,index) {
    console.log(event.container, event.previousIndex, event.currentIndex,event.previousContainer,index);

    // if (event.previousContainer === event.container) {
    //    console.log("1111");
    //    this.listData[index].data=event.previousContainer.data
    //    this.listData[this.listData.length-index].data=event.previousContainer.data
    //    console.log(this.listData);
       
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
      console.log("2222");

      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        
    // }
    console.log(this.listData);
    localStorage.setItem('data', JSON.stringify(this.listData));
    // this.listData[index].data=event.previousContainer.data
    console.log(this.listData);
    
  }
  change(name){
    return name
  }

  addId(i) {
    this.LIST_IDS.push(i);

    return i;
}
}


