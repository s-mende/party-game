import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SoundEffectProvider } from '../../providers/sound-effect/sound-effect';

@Component({
  selector: 'page-bingo',
  templateUrl: 'bingo.html'
})
export class BingoPage {
  public pingoNumber: string;
  public pingoNumberMgl: string;
  public startButton: string = ' ᠡᠬᠢᠯᠡᠬᠦ ';
  public resetButton: string = 'ᠪᠠᠯᠠᠯᠠᠬᠤ';
  public historiesDivs: string[] = [];
  public screenWidth: number;
  public screenHeight: number;

  isStarted = false;
  numberListAll: number[];
  numberListMglAll: string;
  storage = sessionStorage;
  numberListMglJson: object;
  listKey: string = 'partybingo.numberlist';
  removedKey: string = 'partybingo.removedlist';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private soundEffectProvider: SoundEffectProvider,
  ) {
    // init number list and storage
    this.numberListAll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
    this.numberListMglAll = '{"number":["ᠨᠢᠭᠡ","ᠬᠤᠶᠠᠷ","ᠭᠤᠷᠪᠡ","ᠲᠦᠷᠪᠡ","ᠲᠠᠪᠤ","ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠲᠤᠯᠤᠭ᠎ᠠ","ᠨᠠᠢ᠋ᠮᠠ","ᠶᠢᠰᠤ","ᠠᠷᠪᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡ","ᠠᠷᠪᠠᠨ ᠬᠤᠶᠠᠷ","ᠠᠷᠪᠠᠨ ᠭᠤᠷᠪᠡ","ᠠᠷᠪᠠᠨ ᠲᠦᠷᠪᠡ","ᠠᠷᠪᠠᠨ ᠲᠠᠪᠤ","ᠠᠷᠪᠠᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠠᠷᠪᠠᠨ ᠶᠢᠰᠤ","ᠬᠤᠷᠢ","ᠬᠤᠷᠢᠨ ᠨᠢᠭᠡ","ᠬᠤᠷᠢᠨ ᠬᠤᠶᠠᠷ","ᠬᠤᠷᠢᠨ ᠭᠤᠷᠪᠡ","ᠬᠤᠷᠢᠨ ᠲᠦᠷᠪᠡ","ᠬᠤᠷᠢᠨ ᠲᠠᠪᠤ","ᠬᠤᠷᠢᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠬᠤᠷᠢᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠬᠤᠷᠢᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠬᠤᠷᠢ ᠶᠢᠰᠤ","ᠭᠤᠴᠢ","ᠭᠤᠴᠢᠨ ᠨᠢᠭᠡ","ᠭᠤᠴᠢᠨ ᠬᠤᠶᠠᠷ","ᠭᠤᠴᠢᠨ ᠭᠤᠷᠪᠡ","ᠭᠤᠴᠢᠨ ᠲᠦᠷᠪᠡ","ᠭᠤᠴᠢᠨ ᠲᠠᠪᠤ","ᠭᠤᠴᠢᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠭᠤᠴᠢᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠭᠤᠴᠢᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠭᠤᠴᠢ ᠶᠢᠰᠤ","ᠲᠦᠴᠢ","ᠲᠦᠴᠢᠨ ᠨᠢᠭᠡ","ᠲᠦᠴᠢᠨ ᠬᠤᠶᠠᠷ","ᠲᠦᠴᠢᠨ ᠭᠤᠷᠪᠡ","ᠲᠦᠴᠢᠨ ᠲᠦᠷᠪᠡ","ᠲᠦᠴᠢᠨ ᠲᠠᠪᠤ","ᠲᠦᠴᠢᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠲᠦᠴᠢᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠲᠦᠴᠢᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠲᠦᠴᠢ ᠶᠢᠰᠤ","ᠲᠠᠪᠢ","ᠲᠠᠪᠢᠨ ᠨᠢᠭᠡ","ᠲᠠᠪᠢᠨ ᠬᠤᠶᠠᠷ","ᠲᠠᠪᠢᠨ ᠭᠤᠷᠪᠡ","ᠲᠠᠪᠢᠨ ᠲᠦᠷᠪᠡ","ᠲᠠᠪᠢᠨ ᠲᠠᠪᠤ","ᠲᠠᠪᠢᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠲᠠᠪᠢᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠲᠠᠪᠢᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠲᠠᠪᠢ ᠶᠢᠰᠤ","ᠵᠢᠷᠠ","ᠵᠢᠷᠠᠨ ᠨᠢᠭᠡ","ᠵᠢᠷᠠᠨ ᠬᠤᠶᠠᠷ","ᠵᠢᠷᠠᠨ ᠭᠤᠷᠪᠡ","ᠵᠢᠷᠠᠨ ᠲᠦᠷᠪᠡ","ᠵᠢᠷᠠᠨ ᠲᠠᠪᠤ","ᠵᠢᠷᠠᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠵᠢᠷᠠᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠵᠢᠷᠠᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠵᠢᠷᠠ ᠶᠢᠰᠤ","ᠲᠠᠯᠠ","ᠲᠠᠯᠠᠨ ᠨᠢᠭᠡ","ᠲᠠᠯᠠᠨ ᠬᠤᠶᠠᠷ","ᠲᠠᠯᠠᠨ ᠭᠤᠷᠪᠡ","ᠲᠠᠯᠠᠨ ᠲᠦᠷᠪᠡ","ᠲᠠᠯᠠᠨ ᠲᠠᠪᠤ"]}';
    this.numberListMglJson = JSON.parse(this.numberListMglAll);

    this.resetLists();
    this.getScreenSize();

    // create initial list or loadHistory
    var loadedNumberList = this.getNumberList();
    var loadedRemovedList = this.getRemovedList();
    if (loadedNumberList && loadedRemovedList) {
      for (var i = 0; i < loadedRemovedList.length; i++) {
        this.addHistory(loadedRemovedList[i]);
      }
    } else {
      this.resetLists();
    }

  }


  startClicked = function (e) {
    if (this.isStarted) {
      this.stop(null);
    } else {
      this.start();
      // let n: number = 0;
      // while (n < 60) {
      //   this.rourletto();
      //   n++;
      // }
      // setTimeout(
      this.rourletto();
      // , 25);
    }
  };

  stop = function (time) {
    this.isStarted = false;
    this.startButton = ' ᠡᠬᠢᠯᠡᠬᠦ ';
    var n = this.removeNumberRamdom();
    this.pingoNumber = this.toBingoString(n);
    this.pingoNumberMgl = this.numberListMglJson.number[n - 1];
    this.addHistory(n);
    // this.soundEffectProvider.soundRuletStop();
    this.soundEffectProvider.soundRulet(true);
  }

  start = function () {
    this.isStarted = true;
    this.startButton = 'ᠵᠤᠭᠰᠤᠬᠤ';
    // drumAudio.currentTime = 0;
    // drumAudio.play();
    this.soundEffectProvider.soundRulet(false);
    // this.rourletto();
  }

  removeNumberRamdom = function () {
    var numberList = this.getNumberList();
    if (numberList.length === 0) {
      return -1;
    }
    var i = Math.floor(Math.random() * numberList.length);
    var removed = numberList[i];
    numberList.splice(i, 1);
    this.setNumberList(numberList);
    var removedList = this.getRemovedList();
    removedList.push(removed);
    this.setRemovedList(removedList);
    return removed;
  }

  toBingoString = function (n) {
    if (n > 9) {
      return n.toString(10);
    } else if (n < 0) {
      return '00';
    } else {
      return '0' + n.toString(10);
    }
  }

  rourletto() {
    if (this.isStarted) {
      this.pingoNumber = this.toBingoString(this.getNumberRamdom());
      console.log(this.pingoNumber);
      setTimeout(this.rourletto(), 60);
    }
  }

  getNumberRamdom = function () {
    var numberList = this.getNumberList();
    var i = Math.floor(Math.random() * numberList.length);
    return numberList[i];
  }

  getNumberList = function () {
    return JSON.parse(this.storage.getItem(this.listKey));
  }

  setRemovedList = function (a) {
    console.log("a=====" + JSON.stringify(a));
    this.storage.setItem(this.removedKey, JSON.stringify(a));
  }

  getRemovedList = function () {
    return JSON.parse(this.storage.getItem(this.removedKey));
  }

  resetLists = function () {
    this.setNumberList(this.numberListAll);
    this.setRemovedList([]);
  }

  setNumberList = function (a) {
    console.log("a=====" + JSON.stringify(a));
    this.storage.setItem(this.listKey, JSON.stringify(a));
  };

  addHistory = function (n) {
    console.log('historiesDivs===' + this.historiesDivs.length);
    this.historiesDivs[this.historiesDivs.length] = this.toBingoString(n);
  };

  resetClicked = function () {
    if (confirm('bugudiig ballanuu?')) {
      this.resetLists();
      this.pingoNumber = '00';
      this.pingoNumberMgl = 'ᠲᠢᠭ᠌';
      this.historiesDivs = [];
      // drumAudio.pause();
      // this.startButton.focus();
    }
  };

  getScreenSize() {
    this.screenWidth = window.parent.screen.width;
    this.screenHeight = window.parent.screen.height;
  };
}
