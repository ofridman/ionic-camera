import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera'
import { normalizeURL } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public error
  public picture

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  pickPicture() {
      this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  takePicture(sourceType) {
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    }

    this.camera.getPicture(options).then(imagePath => {
      console.log(imagePath)
      this.picture = normalizeURL(imagePath);
    }, err => {
      this.error = 'Error selecting the image'
    })
  }

}
