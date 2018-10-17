import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../services/post.service';
import { DeliveryService } from '../../services/delivery.service';
@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    encapsulation: ViewEncapsulation.None
})

/** 
 * The class responsible for filtering posts based on users' selection  
 */
export class FilterComponent implements OnInit {
    area: String;
    prices: String[];

    constructor(private postService: PostService, private DeliveryService: DeliveryService) { }

    ngOnInit() {
        this.area = '';
        this.prices = [];
    }

    /*
     * filter the posts by the user selected prices from the page.
     * The price options are: <100, 100-200,200-300,300-400,>400
     */
    searchPostByPrice(price, isChecked) {
        //store the index of price option in the prices list
        //If user ticked one of the price option boxes, then add its index to the prices list
        if (isChecked) {
            if (this.prices.indexOf(price) == -1) { // check existence of current select index
                this.prices.push(price);
            }
        } else { // if user unticked the box, remove the corresponding index from the list
            let price_tmp = [];
            for (var i = 0; i < this.prices.length; ++i) {
                if (this.prices[i] == price) {
                    continue;
                } else {
                    price_tmp.push(this.prices[i]);
                }
            }
            this.prices = price_tmp;
        }
        this.prices.sort();
        //call searchPostByPrice and uses the list contains the indexes of price options
        // and send search result to posts components
        this.postService.searchPostByPrice(this.prices).subscribe(data => {
            this.DeliveryService.sendMessage(data);
        });
    }

    /**
     * search posts by area and send result to posts component
     */
    seachPostByArea() {
        this.postService.searchPostByArea(this.area).subscribe(data => {
            this.DeliveryService.sendMessage(data);
        });
    }
}
