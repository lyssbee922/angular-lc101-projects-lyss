import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Hello Images';
  image1 = 'https://m.media-amazon.com/images/M/MV5BZDU2YjA4MmItODk0OS00OTllLWFmNzUtMTg2ZmM3YWYzOGFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg';
  image2 = '';
  image3 = 'https://media.licdn.com/dms/image/D5612AQGnE4nCrXpDiw/article-cover_image-shrink_600_2000/0/1661921891814?e=2147483647&v=beta&t=K1ToKrH3cZEBUzDLk63KFlvJPAGsiSrPAMbf7KHMAxY';

  constructor() { }

  ngOnInit() {
  }

}