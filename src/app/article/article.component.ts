import {Component, HostBinding, OnInit, Input} from '@angular/core';
import {ArticleModel} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() articale: ArticleModel;

  constructor() {
    // this.articale = new ArticleModel(
    //   'Angular',
    //   'http://angular.io',
    //   10
    // );
  }

  voteUp(): boolean {
    this.articale.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.articale.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
