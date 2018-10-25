import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { ImagePicker, ImagePickerOptions, OutputType } from '@ionic-native/image-picker';
import { BusyIndicatorService } from './busy-indicator.service';

@Injectable()
export class ImagePickerService {

    private options: ImagePickerOptions = {
        maximumImagesCount: 1,
        quality: 100,
        outputType: OutputType.FILE_URL
    }

    constructor(
        private file: File,
        private busyInd: BusyIndicatorService,
        private imgPicker: ImagePicker) {
        this.imgPicker.hasReadPermission().then(result => {
            if (!result) this.imgPicker.requestReadPermission();
        }, err => console.log("Error while checking imagepicker permission: " + JSON.stringify(err)));
    }

    pickOne(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.imgPicker.hasReadPermission().then(result => {
                if (!result) this.imgPicker.requestReadPermission();
                else {
                    this.imgPicker.getPictures(this.options).then(results => {
                        if (results && results.length === 1) {
                            this.busyInd.show();
                            this.file.resolveLocalFilesystemUrl(results[0]).then((fileEntry: any) => {
                                fileEntry.file(file => {
                                    var reader = new FileReader();
                                    reader.onloadend = (evt: any) => {
                                        this.busyInd.hide();
                                        resolve(evt.target.result);
                                    };
                                    reader.readAsDataURL(file);
                                }, err => { this.busyInd.hide(); reject("Error while reading image file: " + JSON.stringify(err)); })
                            }).catch(err => { this.busyInd.hide(); reject("Error while resolving image file url: " + JSON.stringify(err)) })
                        }
                    }).catch(err => reject("Error while getting images: " + JSON.stringify(err)));
                }
            }).catch(err => reject("Error while checking imagepicker permission: " + JSON.stringify(err)));
        });
    }

    pick(noOfImages: number = 1): Promise<Array<string>> {
        if (noOfImages) this.options.maximumImagesCount = noOfImages;
        return new Promise((resolve, reject) => {
            this.imgPicker.hasReadPermission().then(result => {
                if (!result) this.imgPicker.requestReadPermission();
                else {
                    this.imgPicker.getPictures(this.options).then(results => {
                        this.busyInd.show();
                        let l = results.length;
                        let temp = [];
                        for (let i = 0; i < l; i++) {
                            let imageUrl = results[i];
                            this.file.resolveLocalFilesystemUrl(imageUrl).then((fileEntry: any) => {
                                fileEntry.file(file => {
                                    var reader = new FileReader();
                                    reader.onloadend = (evt: any) => {
                                        temp.push(evt.target.result);
                                        if (i == l - 1) {
                                            resolve(temp);
                                        }
                                    };
                                    reader.readAsDataURL(file);
                                }, err => { this.busyInd.hide(); reject("Error while reading image file: " + JSON.stringify(err)); })
                            }).catch(err => { this.busyInd.hide(); reject("Error while resolving image file url: " + JSON.stringify(err)) })
                        }
                    }).catch(err => reject("Error while getting images: " + JSON.stringify(err)));
                }
            }).catch(err => reject("Error while checking imagepicker permission: " + JSON.stringify(err)));
        });
    }
}
