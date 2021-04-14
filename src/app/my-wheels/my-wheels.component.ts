import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-my-wheels',
  templateUrl: './my-wheels.component.html',
  styleUrls: ['./my-wheels.component.scss'],
})
export class MyWheelsComponent implements OnInit {
  myCollections = [];

  myCollection = new FormControl();

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.dataService.getCollections(1).subscribe((list) => {
    //   const collections = [];
    //   list.forEach((col) => {
    //     collections.push({
    //       label: col.collectionName,
    //       value: col.collectionId,
    //     });
    //   });
    //   collections.push({ label: 'All Collections', value: 'all' });
    //   this.myCollections = collections;
    // });
  }
}
