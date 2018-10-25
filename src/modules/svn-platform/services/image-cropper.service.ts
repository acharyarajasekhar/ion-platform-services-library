import { Injectable } from '@angular/core';
import { ToastMessageService } from './toast-message.service';
import { Crop } from '@ionic-native/crop';

@Injectable()
export class ImageCropperService {

  private cropOptions = {
    quality: 100,
    targetHeight: 400,
    targetWidth: 400
  }

  constructor(
    private toastr: ToastMessageService,
    private cropper: Crop) { }

  cropSingle(image: string): Promise<any> {
    return this.cropMultiple([image]);
  }

  cropMultiple(images: Array<string>): Promise<any> {
    return images.reduce((imagesChain: any, currentImage: any) => {
      return imagesChain.then((cropped_images) => {
        return this.cropper.crop(currentImage, this.cropOptions)
          .then(cropped_image => [...cropped_images, cropped_image]).catch(err => this.toastr.show("Error while cropping image: " + JSON.stringify(err), true));
      });
    }, Promise.resolve([]));
  }

}
