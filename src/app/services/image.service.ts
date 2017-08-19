import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image-model';
import { Images } from '../mock-images';

@Injectable()
export class ImageService {

  constructor() { }

  getImages(): Promise<ImageModel[]> {
    return Promise.resolve(Images);
  }
}
