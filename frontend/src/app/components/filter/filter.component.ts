import { Component, OnInit, ViewEncapsulation,NgZone  } from '@angular/core';
import { Post } from "../../post";
import { PostService } from "../../services/post.service";
import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation: ViewEncapsulation.None
})

/** The class responsible for filtering posts based on users' selection  */
export class FilterComponent implements OnInit {
  area: String[];
  price: String[];

  constructor(private postService: PostService, private messageService: MessageService, private zone: NgZone) { }
  
  ngOnInit() {
    this.area = [];
    this.price = [];
  }

  //search post by price when user select price option
  searchPostByPrice(price, bCheck) {
    console.log('set price');
    //set price 
    if(bCheck) {
      if(this.price.indexOf(price) == -1) {
        this.price.push(price);
      }
    } else {
      let price_tmp = [];
      for(var i = 0; i < this.price.length; ++i) {
        if(this.price[i] == price) {
          continue;
        } else {
          price_tmp.push(this.price[i]);
        }
      }
      this.price = price_tmp;
    }
    console.log(this.price);
    this.price.sort();
    this.postService.searchPostByPrice(this.price).subscribe(data => {
       this.messageService.sendMessage((data));
    })
  }
  
  //search posts by area
  seachPostByArea() {
    this.postService.searchPostByArea(this.area).subscribe(data => {
       console.log(data);
       this.messageService.sendMessage((data));
    })
  }

}
