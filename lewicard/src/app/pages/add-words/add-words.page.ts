import {Component, OnInit, ViewChild} from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {Word} from '../../interface/claseWord';
import {Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.page.html',
  styleUrls: ['./add-words.page.scss'],
})
export class AddWordsPage implements OnInit {
  words: any;
  word: string;
  translation: string;
  headerWords: any;
  headerTranslate: any;
  item: string;
  constructor(private alert: AlertController , public modalCtrl: ModalController,private service: ServicesService) {
    this.words = [];
    this.headerWords = 'Words';
    this.headerTranslate = 'translate';
    this.item = '';
    this.word = '';
    this.translation = '';
  }
  ngOnInit() {
    if (localStorage.getItem('saveItems')){
      this.words = JSON.parse(localStorage.getItem('saveItems'));
    }
  }
  onSave() {
    const wordCreate = new Word();
    // wordCreate.id++;
    if (this.word !== '' && this.translation !== '' && this.word !== ' ' && this.translation !== ' '  ){
      wordCreate.englishWord = this.word;
      wordCreate.translation = this.translation;
      this.service.create(wordCreate).subscribe((e) => {
        console.log(e);
      });
      // wordCreate.words = {englishWord: this.word,translation:this.translation};
      // this.words.splice(0,0,wordCreate.words);
      // this.word = '';
      // this.translation = '';
      // this.item = JSON.stringify(this.words);
      // localStorage.setItem('saveItems',this.item);
    }else {
     this.presentAlert('ALERT','Elemento vacío','Por favor rellene todos los campos').then(() => {
       console.log('alert ok');
     });
    }
  }
  confirm() {
    this.modalCtrl.dismiss(this.words,'confirm').then(() => console.log('confirmado') ).catch(error => {
      console.log(error);

    });
  }

  cancel() {
     this.modalCtrl.dismiss(null,'cancel').then(() => this.modalCtrl).catch(error => {
       console.log(error);
     });
  }

  removeElement(i: number) {

    this.words.splice(i, 1);
    console.log(this.words);
    this.item = JSON.stringify(this.words);
    localStorage.setItem('saveItems',this.item);
  }
  async presentAlert(h: string, sb: string, msg: string) {
    const alert = await this.alert.create({
      header: h,
      subHeader: sb,
      message: msg,
      buttons: [{
        text: 'OK',
        cssClass: 'alert-button-confirm',
      },],
    });

    await alert.present();
  }
}
