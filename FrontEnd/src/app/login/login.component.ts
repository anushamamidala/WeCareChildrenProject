import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() {
    this.changeMotherImage()
  }
  title = 'We Care';

  motherImageName = "mother-image1"

  changeMotherImage = () => {
    setInterval(() => {
      console.log(this.motherImageName)
      switch (this.motherImageName) {
        case "mother-image1": {
          this.motherImageName = "mother-image2";
          break;
        }
        case "mother-image2": {
          this.motherImageName = "mother-image3";
          break;
        }
        case "mother-image3": {
          this.motherImageName = "mother-image1";
          break;
        }
        default: {
          this.motherImageName = "mother-image1"
        }
      }
    }, 3000)
  }
}
