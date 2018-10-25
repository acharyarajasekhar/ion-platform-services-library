import { Injectable } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@Injectable()
export class PhotoViewerService {

    constructor(private photoViewer: PhotoViewer) { }

    show(photoURL, title) {
        let tempImgUrl = photoURL;
        if (tempImgUrl.includes('staticflickr.com')) {
            tempImgUrl = tempImgUrl.slice(0, -6) + '_h.jpg'
        }
        this.photoViewer.show(tempImgUrl, title);
    }

}
