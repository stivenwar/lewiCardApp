import {Component, OnInit} from '@angular/core';
import {AddWordsPage} from '../../pages/add-words/add-words.page';
import {ServicesService} from '../../services/services.service';
import {ModalController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  show: boolean;
  words: any;
  traduction: boolean;
  slideOpts: any = {
    initialSlide: 1,
    speed: 400
  };
  cardColor: any;
  constructor(private service: ServicesService,private modalCtrl: ModalController,public navCtrl: NavController) {
    this.show = true;
    // this.words = JSON.parse(localStorage.getItem('saveItems'));
    this.traduction = true;
    this.cardColor = 'secondary';
  }

  ngOnInit(){
        this.getAllWords();
    }
  getAllWords(){
    this.service.getAll().subscribe(e => {
      this.words = e;
    });

  }
  async showed(isShow){
    if (isShow === false){
      this.show = true;
    }

    const modal = await this.modalCtrl.create({component:AddWordsPage});
    await modal.present();
    const {data, role} = await modal.onWillDismiss();
    console.log(data);
    console.log(role);
    if (role === 'confirm') {
      this.getAllWords();
    }
  }

  showTraduction(showTraduction: boolean) {
    console.log('click');
    console.log(showTraduction);
    if (showTraduction !== true){
      this.traduction = true;
      this.cardColor = 'secondary';
    }else {
      this.traduction = false;
      this.cardColor = 'danger';
    }

  }
}
