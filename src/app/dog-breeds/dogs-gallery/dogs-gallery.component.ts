import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs-gallery',
  templateUrl: './dogs-gallery.component.html',
  styleUrls: ['./dogs-gallery.component.css'],
})
export class DogsGalleryComponent implements OnInit {
  @Input() pictureList?: string[];

  constructor(
  ) {}

  ngOnInit(): void {
  }

}
