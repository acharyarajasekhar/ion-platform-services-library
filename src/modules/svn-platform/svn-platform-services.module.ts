import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';

import { BackButtonEventHandler } from './handlers/back-button.handler';
import { BusyIndicatorService } from './services/busy-indicator.service';
import { CallNumberService } from './services/call-number.service';
import { CameraService } from './services/camera.service';
import { ImageCropperService } from './services/image-cropper.service';
import { ImagePickerService } from './services/image-picker.service';
import { PhotoViewerService } from './services/photo-viewer.service';
import { SentryLoggerService } from './services/sentry-logger.service';
import { ToastMessageService } from './services/toast-message.service';
import { WindowService } from './services/window.service';
import { IonBusyIndicatorComponent } from './components/ion-busy-indicator.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        IonBusyIndicatorComponent
    ],
    exports: [
        IonBusyIndicatorComponent
    ],
    providers: [
        BackButtonEventHandler,
        BusyIndicatorService,
        CallNumberService,
        CameraService,
        ImageCropperService,
        ImagePickerService,
        PhotoViewerService,
        SentryLoggerService,
        ToastMessageService,
        WindowService
    ]
})
export class SvnPlatformServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SvnPlatformServicesModule,
            providers: [
                BackButtonEventHandler,
                BusyIndicatorService,
                CallNumberService,
                CameraService,
                ImageCropperService,
                ImagePickerService,
                PhotoViewerService,
                SentryLoggerService,
                ToastMessageService,
                WindowService
            ]
        };
    }
}