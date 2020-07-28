import {Component} from '@angular/core';
import {Sort} from '@angular/material/sort';

export interface Dessert {
book_Title:string;
book_Author:string;
book_Published:number;
}

/**
* @title Sorting overview
*/
@Component({
selector: 'app-book',
templateUrl: 'book-details.component.html',
styleUrls: ['book-details.component.css'],
})
export class bookDetailsComponent {
desserts: Dessert[] = [
{
"book_Title": "SpringBoot",
"book_Author": "RodJohnson",
"book_Published": 2005
},
{
"book_Title": "Python",
"book_Author": "Guido van Rossum",
"book_Published": 1991
},
{
"book_Title": "Rich Dad And Poor Dad",
"book_Author": "Robert Kiyosaki",
"book_Published": 1997
},
{
"book_Title": "Java",
"book_Author": "James Gosling",
"book_Published": 1995
},
{
"book_Title": "Into The Wild",
"book_Author": "Chris McCandless",
"book_Published": 1992
},
{
"book_Title": "New York Times Cook Book",
"book_Author": "Craig Claiborne",
"book_Published": 1961
}
];


sortedData: Dessert[];

constructor() {
this.sortedData = this.desserts.slice();
}

sortData(sort: Sort) {
const data = this.desserts.slice();
if (!sort.active || sort.direction === '') {
this.sortedData = data;
return;
}

this.sortedData = data.sort((a, b) => {
const isAsc = sort.direction === 'asc';
switch (sort.active) {
case 'book_Title': return compare(a.book_Title, b.book_Title, isAsc);
case 'book_Author': return compare(a.book_Author, b.book_Author, isAsc);
case 'book_Published': return compare(a.book_Published, b.book_Published, isAsc);
default: return 0;
}
});
}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/** Copyright 2020 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license */