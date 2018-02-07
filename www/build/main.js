webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/suchin/Documents/workspace/private_project/s-mende.party-game/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the\n    <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab [root]="chatRoot" tabTitle="Chat" tabIcon="chat"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/suchin/Documents/workspace/private_project/s-mende.party-game/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/suchin/Documents/workspace/private_project/s-mende.party-game/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/suchin/Documents/workspace/private_project/s-mende.party-game/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BingoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sound_effect_sound_effect__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BingoPage = (function () {
    function BingoPage(navCtrl, navParams, soundEffectProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soundEffectProvider = soundEffectProvider;
        this.startButton = ' ᠡᠬᠢᠯᠡᠬᠦ ';
        this.resetButton = 'ᠪᠠᠯᠠᠯᠠᠬᠤ';
        this.historiesDivs = [];
        this.isStarted = false;
        this.storage = sessionStorage;
        this.listKey = 'partybingo.numberlist';
        this.removedKey = 'partybingo.removedlist';
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
        }
        else {
            this.resetLists();
        }
    }
    // 2桁に統一する
    BingoPage.prototype.toBingoString = function (n) {
        if (n > 9) {
            return n.toString(10);
        }
        else if (n < 0) {
            return '00';
        }
        else {
            return '0' + n.toString(10);
        }
    };
    // ボタンがクリックされた時
    BingoPage.prototype.startClicked = function (e) {
        if (this.isStarted) {
            this.stop();
        }
        else {
            this.start();
        }
    };
    ;
    //ストップ処理
    BingoPage.prototype.stop = function () {
        this.isStarted = false;
        this.startButton = ' ᠡᠬᠢᠯᠡᠬᠦ ';
        var n = this.removeNumberRamdom();
        this.pingoNumber = this.toBingoString(n);
        this.pingoNumberMgl = this.numberListMglJson["number"][n - 1];
        //履歴作成
        this.historiesDivs[this.historiesDivs.length] = this.toBingoString(n);
        //サウンド停止
        this.soundEffectProvider.soundRulet(true);
    };
    BingoPage.prototype.removeNumberRamdom = function () {
        if (this.numberList.length === 0) {
            return -1;
        }
        clearInterval(this.intervalId);
        var i = Math.floor(Math.random() * this.numberList.length);
        var removed = this.numberList[i];
        this.numberList.splice(i, 1);
        this.storage.setItem(this.listKey, JSON.stringify(this.numberList));
        this.removedList.push(removed);
        this.storage.setItem(this.removedKey, JSON.stringify(this.removedList));
        return removed;
    };
    //スタート処理
    BingoPage.prototype.start = function () {
        this.isStarted = true;
        this.startButton = 'ᠵᠤᠭᠰᠤᠬᠤ';
        console.log('ᠡᠬᠢᠯᠡᠪᠡ');
        this.soundEffectProvider.soundRulet(false);
        this.rourletto();
    };
    BingoPage.prototype.rourletto = function () {
        var _this = this;
        if (this.isStarted) {
            this.intervalId = setInterval(function () {
                var i = Math.floor(Math.random() * _this.numberList.length);
                _this.pingoNumber = String(_this.toBingoString(_this.numberList[i]));
                _this.pingoNumberMgl = String(_this.numberListMglJson["number"][i]);
            }, 60);
        }
    };
    // 履歴クリア
    BingoPage.prototype.resetLists = function () {
        this.storage.setItem(this.listKey, JSON.stringify(this.numberListAll));
        this.storage.setItem(this.removedKey, JSON.stringify([]));
    };
    // リセットボタン
    BingoPage.prototype.resetClicked = function () {
        if (confirm('bugudiig ballanuu?')) {
            this.resetLists();
            this.pingoNumber = '00';
            this.pingoNumberMgl = 'ᠲᠢᠭ᠌';
            this.historiesDivs = [];
        }
    };
    ;
    BingoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bingo',template:/*ion-inline-start:"/Users/suchin/Documents/workspace/private_project/s-mende.party-game/src/pages/bingo/bingo.html"*/'<ion-content class="main">\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n\n  <div id="main-area">\n    <p id="pingo-number">{{pingoNumber}}</p>\n    <p id="p-number-mgl" class="mgl">\n      <font face="Mongolian ZS">\n        <span id="pingo-number-mgl">{{pingoNumberMgl}}</span>\n      </font>\n    </p>\n    <div id="buttons" class="mgl">\n      <div id="start-button" class="my-button" (click)="startClicked();">\n        <ion-icon name="game-controller-b"></ion-icon> {{ startButton }} </div>\n      <div id="reset-button" class="my-button" (click)="resetClicked();">\n        <ion-icon name="trash" isActive="false"></ion-icon> {{ resetButton }} </div>\n    </div>\n  </div>\n  <div id="history-area">\n    <div class="history-title mgl">\n      <h3>ᠭᠠᠷᠴᠤ ᠦᠩᠭᠡᠷᠡᠭᠰᠡᠨ ᠲᠤᠭ᠎ᠠ</h3>\n    </div>\n    <div id="histories" class="row histories">\n      <div class="col-md-1" *ngFor="let historiesDiv of historiesDivs">\n        <p class="history-number">{{ historiesDiv }}</p>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/suchin/Documents/workspace/private_project/s-mende.party-game/src/pages/bingo/bingo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sound_effect_sound_effect__["a" /* SoundEffectProvider */]])
    ], BingoPage);
    return BingoPage;
}());

//# sourceMappingURL=bingo.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundEffectProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NativeAudio } from '@ionic-native/native-audio';
// import { Vibration } from '@ionic-native/vibration';

var SoundEffectProvider = (function () {
    function SoundEffectProvider(
        // private nativeAudio: NativeAudio,
        // private vibration: Vibration,
        platform) {
        this.platform = platform;
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
    SoundEffectProvider.prototype.soundRulet = function (fl) {
        var soundRulet = 'assets/audio/nc79078.mp3';
        var audio = {
            key: "soundRulet",
            asset: soundRulet,
            type: 'html5'
        };
        var audioAsset = new Audio(audio.asset);
        if (fl === false) {
            console.log('fl1===' + fl);
            audioAsset.play();
        }
        else {
            console.log('fl2===' + fl);
            audioAsset.pause();
        }
        //    this.nativeAudio.play('soundRulet');
    };
    // OK時の音・バイブレーション
    SoundEffectProvider.prototype.soundOk = function () {
        var soundOk = 'assets/audio/ok001.mp3';
        var audio = {
            key: "soundOk",
            asset: soundOk,
            type: 'html5'
        };
        var audioAsset = new Audio(audio.asset);
        audioAsset.play();
        //    this.nativeAudio.play('soundOk');
    };
    // エラー時の音・バイブレーション
    SoundEffectProvider.prototype.soundError = function () {
        var soundError = 'assets/audio/error001.mp3';
        var audio = {
            key: "soundError",
            asset: soundError,
            type: 'html5'
        };
        var audioAsset = new Audio(audio.asset);
        audioAsset.play();
        //    this.nativeAudio.play('soundError');
        // 3回バイブさせたいが、1回しか反応しない可能性あり
        // this.vibration.vibrate([1000, 500, 1000, 500, 1000]);
    };
    // 完了時の音・バイブレーション
    SoundEffectProvider.prototype.soundComplete = function () {
        var soundComplete = 'assets/audio/ok001.mp3';
        var audio = {
            key: "soundComplete",
            asset: soundComplete,
            type: 'html5'
        };
        var audioAsset = new Audio(audio.asset);
        audioAsset.play();
        //    this.nativeAudio.play('soundComplete');
        //    this.vibration.vibrate(1000);
    };
    SoundEffectProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], SoundEffectProvider);
    return SoundEffectProvider;
}());

//# sourceMappingURL=sound-effect.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bingo_bingo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sound_effect_sound_effect__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bingo_bingo__["a" /* BingoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bingo_bingo__["a" /* BingoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_sound_effect_sound_effect__["a" /* SoundEffectProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bingo_bingo__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Bingo', component: __WEBPACK_IMPORTED_MODULE_6__pages_bingo_bingo__["a" /* BingoPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/suchin/Documents/workspace/private_project/s-mende.party-game/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/suchin/Documents/workspace/private_project/s-mende.party-game/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map