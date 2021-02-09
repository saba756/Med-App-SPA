import { AdminService } from './../admin-layout.service';
import { IFilter } from './../../shared/models/filter';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private readonly PAGE_SIZE = 5;
  queryResult : any ={};
  filter : IFilter;
  query : any= {
    pageSize: this.PAGE_SIZE
  }
  columns = [
    { title: 'Name', key: 'Name', isSortable: true },
    { title: 'Email', key: 'Email', isSortable: true },
    { title: 'City', key: 'City', isSortable: true },
    { title: 'Phoneno', key: 'Phoneno', isSortable: true },
    { }
  ];
  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.getUsersList();
  }
  getUsersList(){
   this.adminService.getUsersList(this.query).
   subscribe((result) =>
   {
    this.queryResult = result
    console.log("query result",this.queryResult);
    }
    );
    console.log("hii",this.filter);
  }
  onFilterChange(){
    this.query.page = 1;
  this.getUsersList();
  }
  sortBy(columnName){
    if(this.query.sortBy === columnName){
        this.query.isSortAscending =  !this.query.isSortAscending;
    }
    else{
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.getUsersList();
  }
  resetFilter(){
    this.query ={
      page:1,
      pageSize:this.PAGE_SIZE
    };
    this.onFilterChange();
    }
  onPageChange(page){
    console.log(page);
  this.query.page = page;
  this.getUsersList();
  }

}
