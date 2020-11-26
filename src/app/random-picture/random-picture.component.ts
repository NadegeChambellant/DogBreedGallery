import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Picture } from './picture.model';
import { RandomPictureService } from './random-picture.service';

@Component({
  selector: 'app-random-picture',
  templateUrl: './random-picture.component.html',
  styleUrls: ['./random-picture.component.css'],
})
export class RandomPictureComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  randomPicture?: Picture;

  constructor(private randomPictureService: RandomPictureService) {}

  ngOnInit(): void {
    this.subscription = this.randomPictureService
      .getPicture()
      .pipe(tap((data) => (this.randomPicture = data)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
