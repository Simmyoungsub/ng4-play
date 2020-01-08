import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser'
@Component({
    selector: 'app-image-loader',
    template: `
        <div>
            <img [src]="src" style="width: 400px;height: 400px;"/>
        </div>
    `
})
export class ImageLoaderComponent implements OnInit {
    src: any;

    constructor (private changeDetectRef: ChangeDetectorRef,
        private sanitizer: DomSanitizer) {
        
    }
    
    ngOnInit(): void {
        // const url = `/assets/image/profile.jpg`;
        // const worker = new Worker('assets/js/worker.js');
        // worker.addEventListener('message', async event => {
        //     console.log(event);
        //     const objectURL = URL.createObjectURL(event.data.blob);
        //     console.log(objectURL);
        //     this.src = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        // });

        // worker.postMessage(url);
        this.src = 'https://pds.joins.com/news/component/htmlphoto_mmdata/201910/26/ce877ed2-0800-457f-b9a6-a86044718d40.jpg';
    }
}