import { Camera, CameraOptions } from '@ionic-native/camera';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file'

@Injectable()
export class CameraService {

    options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true,
        targetHeight: 600,
        targetWidth: 600,
        cameraDirection: this.camera.Direction.FRONT
    }

    constructor(
        private camera: Camera,
        private file: File) { }

    pickPhoto(sourceType: number): Promise<string> {
        return new Promise((resolve, reject) => {
            this.options.sourceType = sourceType; // PHOTOLIBRARY : 0, CAMERA : 1, SAVEDPHOTOALBUM : 2
            this.camera.getPicture(this.options).then((imageURL: string) => {

                let filename = imageURL.substring(imageURL.lastIndexOf('/') + 1);
                let path = imageURL.substring(0, imageURL.lastIndexOf('/') + 1);
                this.file.readAsDataURL(path, filename).then(res => {
                    resolve(res)
                });

            }).catch(err => {
                reject("Error while capturing photo from CAMERA: " + JSON.stringify(err));
            });
        });
    }

}
