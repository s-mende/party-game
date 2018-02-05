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
  public intervalId;

  isStarted = false;
  numberListAll: number[];
  numberListMglAll: string;
  storage = sessionStorage;
  numberListMglJson: object;
  listKey: string = 'partybingo.numberlist';
  removedKey: string = 'partybingo.removedlist';
  numberList: object[];
  removedList: object[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private soundEffectProvider: SoundEffectProvider,
  ) {
    // bingo数字を初期か及びストレージ処理
    this.numberListAll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
    this.numberListMglAll = '{"number":["ᠨᠢᠭᠡ","ᠬᠤᠶᠠᠷ","ᠭᠤᠷᠪᠡ","ᠲᠦᠷᠪᠡ","ᠲᠠᠪᠤ","ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠲᠤᠯᠤᠭ᠎ᠠ","ᠨᠠᠢ᠋ᠮᠠ","ᠶᠢᠰᠤ","ᠠᠷᠪᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡ","ᠠᠷᠪᠠᠨ ᠬᠤᠶᠠᠷ","ᠠᠷᠪᠠᠨ ᠭᠤᠷᠪᠡ","ᠠᠷᠪᠠᠨ ᠲᠦᠷᠪᠡ","ᠠᠷᠪᠠᠨ ᠲᠠᠪᠤ","ᠠᠷᠪᠠᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠠᠷᠪᠠᠨ ᠶᠢᠰᠤ","ᠬᠤᠷᠢ","ᠬᠤᠷᠢᠨ ᠨᠢᠭᠡ","ᠬᠤᠷᠢᠨ ᠬᠤᠶᠠᠷ","ᠬᠤᠷᠢᠨ ᠭᠤᠷᠪᠡ","ᠬᠤᠷᠢᠨ ᠲᠦᠷᠪᠡ","ᠬᠤᠷᠢᠨ ᠲᠠᠪᠤ","ᠬᠤᠷᠢᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠬᠤᠷᠢᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠬᠤᠷᠢᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠬᠤᠷᠢ ᠶᠢᠰᠤ","ᠭᠤᠴᠢ","ᠭᠤᠴᠢᠨ ᠨᠢᠭᠡ","ᠭᠤᠴᠢᠨ ᠬᠤᠶᠠᠷ","ᠭᠤᠴᠢᠨ ᠭᠤᠷᠪᠡ","ᠭᠤᠴᠢᠨ ᠲᠦᠷᠪᠡ","ᠭᠤᠴᠢᠨ ᠲᠠᠪᠤ","ᠭᠤᠴᠢᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠭᠤᠴᠢᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠭᠤᠴᠢᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠭᠤᠴᠢ ᠶᠢᠰᠤ","ᠲᠦᠴᠢ","ᠲᠦᠴᠢᠨ ᠨᠢᠭᠡ","ᠲᠦᠴᠢᠨ ᠬᠤᠶᠠᠷ","ᠲᠦᠴᠢᠨ ᠭᠤᠷᠪᠡ","ᠲᠦᠴᠢᠨ ᠲᠦᠷᠪᠡ","ᠲᠦᠴᠢᠨ ᠲᠠᠪᠤ","ᠲᠦᠴᠢᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠲᠦᠴᠢᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠲᠦᠴᠢᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠲᠦᠴᠢ ᠶᠢᠰᠤ","ᠲᠠᠪᠢ","ᠲᠠᠪᠢᠨ ᠨᠢᠭᠡ","ᠲᠠᠪᠢᠨ ᠬᠤᠶᠠᠷ","ᠲᠠᠪᠢᠨ ᠭᠤᠷᠪᠡ","ᠲᠠᠪᠢᠨ ᠲᠦᠷᠪᠡ","ᠲᠠᠪᠢᠨ ᠲᠠᠪᠤ","ᠲᠠᠪᠢᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠲᠠᠪᠢᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠲᠠᠪᠢᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠲᠠᠪᠢ ᠶᠢᠰᠤ","ᠵᠢᠷᠠ","ᠵᠢᠷᠠᠨ ᠨᠢᠭᠡ","ᠵᠢᠷᠠᠨ ᠬᠤᠶᠠᠷ","ᠵᠢᠷᠠᠨ ᠭᠤᠷᠪᠡ","ᠵᠢᠷᠠᠨ ᠲᠦᠷᠪᠡ","ᠵᠢᠷᠠᠨ ᠲᠠᠪᠤ","ᠵᠢᠷᠠᠨ ᠵᠢᠷᠭᠤᠭ᠎ᠠ","ᠵᠢᠷᠠᠨ ᠲᠤᠯᠤᠭ᠎ᠠ","ᠵᠢᠷᠠᠨ ᠨᠠᠢ᠋ᠮᠠ","ᠵᠢᠷᠠ ᠶᠢᠰᠤ","ᠲᠠᠯᠠ","ᠲᠠᠯᠠᠨ ᠨᠢᠭᠡ","ᠲᠠᠯᠠᠨ ᠬᠤᠶᠠᠷ","ᠲᠠᠯᠠᠨ ᠭᠤᠷᠪᠡ","ᠲᠠᠯᠠᠨ ᠲᠦᠷᠪᠡ","ᠲᠠᠯᠠᠨ ᠲᠠᠪᠤ"]}';
    this.numberListMglJson = JSON.parse(this.numberListMglAll);

    this.numberList = JSON.parse(this.storage.getItem(this.listKey));
    this.removedList = JSON.parse(this.storage.getItem(this.removedKey));

    // 残りリスト作成or履歴作成
    if (this.numberList && this.removedList) {
      for (var i = 0; i < this.removedList.length; i++) {
        //履歴作成
        this.historiesDivs[this.historiesDivs.length] = this.toBingoString(this.removedList[i]);
      }
    } else {
      this.resetLists();
    }

  }

  // 2桁に統一する
  toBingoString(n) {
    if (n > 9) {
      return n.toString(10);
    } else if (n < 0) {
      return '00';
    } else {
      return '0' + n.toString(10);
    }
  }

  // ボタンがクリックされた時
  startClicked(e) {
    if (this.isStarted) {
      this.stop();
    } else {
      this.start();
    }
  };

  //ストップ処理
  stop() {
    this.isStarted = false;
    this.startButton = ' ᠡᠬᠢᠯᠡᠬᠦ ';
    var n = this.removeNumberRamdom();
    this.pingoNumber = this.toBingoString(n);
    this.pingoNumberMgl = this.numberListMglJson["number"][n - 1];
    //履歴作成
    this.historiesDivs[this.historiesDivs.length] = this.toBingoString(n);
    //サウンド停止
    this.soundEffectProvider.soundRulet(true);
  }
  removeNumberRamdom() {
    if (this.numberList.length === 0) {
      return -1;
    }
    clearInterval(this.intervalId);
    var i = Math.floor(Math.random() * this.numberList.length);
    var removed: any = this.numberList[i];
    this.numberList.splice(i, 1);
    this.storage.setItem(this.listKey, JSON.stringify(this.numberList));
    this.removedList.push(removed);
    this.storage.setItem(this.removedKey, JSON.stringify(this.removedList));
    return removed;
  }

  //スタート処理
  start() {
    this.isStarted = true;
    this.startButton = 'ᠵᠤᠭᠰᠤᠬᠤ';
    console.log('ᠡᠬᠢᠯᠡᠪᠡ');
    this.soundEffectProvider.soundRulet(false);
    this.rourletto();
  }
  rourletto() {
    if (this.isStarted) {
      this.intervalId = setInterval(() => {
        var i = Math.floor(Math.random() * this.numberList.length);
        this.pingoNumber = String(this.toBingoString(this.numberList[i]));
        this.pingoNumberMgl = String(this.numberListMglJson["number"][i]);
      }, 60);
    }
  }

  // 履歴クリア
  resetLists() {
    this.storage.setItem(this.listKey, JSON.stringify(this.numberListAll));
    this.storage.setItem(this.removedKey, JSON.stringify([]));
  }

  // リセットボタン
  resetClicked() {
    if (confirm('bugudiig ballanuu?')) {
      this.resetLists();
      this.pingoNumber = '00';
      this.pingoNumberMgl = 'ᠲᠢᠭ᠌';
      this.historiesDivs = [];
    }
  };

}
