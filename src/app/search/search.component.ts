import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  search = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.search = params['search'];
    })
  }
}
