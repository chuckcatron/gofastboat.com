import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image-model';
import { Images } from '../mock-images';

@Injectable()
export class ImageService {
  images: ImageModel[];
  constructor() { }

  getImages(): Promise<ImageModel[]> {
    return Promise.resolve(Images);
  }

  deleteImage(id: number): Promise<ImageModel[]> {
    this.getImages().then(i => this.images = i);
    return Promise.resolve(this.images.filter(obj => obj.id !== id));
  }
}
