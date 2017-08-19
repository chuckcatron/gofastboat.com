import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ImageModel } from '../../models/image-model';

@Component({
  selector: 'app-image-rotator',
  templateUrl: './image-rotator.component.html',
  styleUrls: ['./image-rotator.component.css']
})
export class ImageRotatorComponent implements OnInit {
  images: ImageModel[];
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.imageService.getImages().then(i => this.images = i);
  }

  deleteImage(): void{
    alert('Delete Image Clicked');
  }
}
