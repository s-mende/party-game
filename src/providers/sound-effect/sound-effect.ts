import { Injectable } from '@angular/core';
// import { NativeAudio } from '@ionic-native/native-audio';
// import { Vibration } from '@ionic-native/vibration';
import { Platform } from 'ionic-angular';

@Injectable()
export class SoundEffectProvider {
  constructor(
    // private nativeAudio: NativeAudio,
    // private vibration: Vibration,
    public platform: Platform
  ) {
    // let soundOk = 'assets/audio/mail-sent.mp3';
    // let soundError = 'assets/audio/ct-error.mp3';
    // let soundComplete = 'assets/audio/mail-sent.mp3';
    // if (this.platform.is('ios')) {
    //   soundOk = '/System/Library/Audio/UISounds/mail-sent.caf';
    //   soundError = '/System/Library/Audio/UISounds/alarm.caf';
    //   soundComplete = '/System/Library/Audio/UISounds/mail-sent.caf';
    // }
  }

  // ルーレット時の音・バイブレーション
  soundRulet(fl: boolean): void {

    let soundRulet = 'assets/audio/nc79078.mp3';

    let audio = {
      key: "soundRulet",
      asset: soundRulet,
      type: 'html5'
    };

    let audioAsset = new Audio(audio.asset);
    if (fl === false) {
      console.log('fl1===' + fl);
      audioAsset.play();
    } else {
      console.log('fl2===' + fl);
      audioAsset.pause();
    }


    //    this.nativeAudio.play('soundRulet');
  }


  // OK時の音・バイブレーション
  soundOk(): void {

    let soundOk = 'assets/audio/ok001.mp3';

    let audio = {
      key: "soundOk",
      asset: soundOk,
      type: 'html5'
    };

    let audioAsset = new Audio(audio.asset);
    audioAsset.play();

    //    this.nativeAudio.play('soundOk');
  }

  // エラー時の音・バイブレーション
  soundError(): void {

    let soundError = 'assets/audio/error001.mp3';

    let audio = {
      key: "soundError",
      asset: soundError,
      type: 'html5'
    };

    let audioAsset = new Audio(audio.asset);
    audioAsset.play();

    //    this.nativeAudio.play('soundError');

    // 3回バイブさせたいが、1回しか反応しない可能性あり
    // this.vibration.vibrate([1000, 500, 1000, 500, 1000]);
  }

  // 完了時の音・バイブレーション
  soundComplete(): void {

    let soundComplete = 'assets/audio/ok001.mp3';

    let audio = {
      key: "soundComplete",
      asset: soundComplete,
      type: 'html5'
    };

    let audioAsset = new Audio(audio.asset);
    audioAsset.play();

    //    this.nativeAudio.play('soundComplete');

    //    this.vibration.vibrate(1000);
  }
}
