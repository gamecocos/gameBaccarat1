window.__require=function i(t,e,n){function s(a,c){if(!e[a]){if(!t[a]){var u=a.split("/");if(u=u[u.length-1],!t[u]){var l="function"==typeof __require&&__require;if(!c&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+a+"'")}a=u}var r=e[a]={exports:{}};t[a][0].call(r.exports,function(i){return s(t[a][1][i]||i)},r,r.exports,i,t,e,n)}return e[a].exports}for(var o="function"==typeof __require&&__require,a=0;a<n.length;a++)s(n[a]);return s}({ButtonAnimation:[function(i,t){"use strict";cc._RF.push(t,"a636cKx2xNJlIbqoyf0iDuj","ButtonAnimation");var e=cc.Class({extends:cc.Component,properties:{},onLoad:function(){e.instance=this},buttonanimation:function(i){var t=i.addComponent(cc.Button);t.transition=cc.Button.Transition.SCALE,t.duration=.1,t.zoomScale=1.1}});cc._RF.pop()},{}],Coinmove:[function(i,t){"use strict";cc._RF.push(t,"9e01c4QV1JIfqabF3ieeWNN","Coinmove"),i("audioManager");var e=cc.Class({extends:cc.Component,properties:{},onLoad:function(){e.instance=this},coinmoveFun:function(i,t,e,n){var s=this,o=this.getValue(-150,150),a=this.getValue(-50,50);i.runAction(cc.sequence(cc.moveTo(.05,cc.v2(e.x+o,e.y-a)),cc.callFunc(function(){var e=cc.instantiate(i);e.setPosition(i.position),s.node.addChild(e),n.push(e),i.setPosition(t)})))},coinmovetaiFun:function(i,t,e,n){var s=this,o=this.getValue(-120,120),a=this.getValue(-50,50);i.runAction(cc.sequence(cc.moveTo(.05,cc.v2(e.x+o,e.y-a)),cc.callFunc(function(){var e=cc.instantiate(i);e.setPosition(i.position),s.node.addChild(e),n.push(e),i.setPosition(t)})))},coinBankFun:function(i,t,e,n){var s=this,o=this.getValue(-150,150),a=this.getValue(-50,50);i.runAction(cc.sequence(cc.moveTo(.05,cc.v2(e.x+o,e.y-a)),cc.callFunc(function(){var e=cc.instantiate(i);e.setPosition(i.position),s.node.addChild(e),n.push(e),i.setPosition(t)})))},getValue:function(i,t){return Math.floor(Math.random()*(t-i+1))+i},resultBetTaiXiu:function(i,t){return Math.floor(Math.random()*(t-i+1))+i}});cc._RF.pop()},{audioManager:"audioManager"}],Loading:[function(i,t){"use strict";cc._RF.push(t,"6eff1LfMWNESKRowzx3C4H2","Loading"),cc.Class({extends:cc.Component,Play:function(){cc.director.loadScene("game")},Quit:function(){cc.game.end()}}),cc._RF.pop()},{}],Valuecard:[function(i,t){"use strict";cc._RF.push(t,"4fc02jy41dLCK3rXQRiMRlJ","Valuecard");var e=cc.Class({extends:cc.Component,properties:{},onLoad:function(){e.instance=this},setvalue:function(i){var t=0;return i>=0&&i<=3?t=1:i>=4&&i<=7?t=2:i>=8&&i<=11?t=3:i>=12&&i<=15?t=4:i>=16&&i<=19?t=5:i>=20&&i<=23?t=6:i>=24&&i<=27?t=7:i>=28&&i<=31?t=8:i>=32&&i<=35?t=9:i>=36&&i<=39?t=0:i>=40&&i<=43?t=0:i>=44&&i<=47?t=0:i>=48&&i<=51?t=0:console.log("------------------------error"),t}});cc._RF.pop()},{}],audioManager:[function(i,t){"use strict";cc._RF.push(t,"2c277oFuv1BFKJoxXD+rBYR","audioManager");var e=i("sound"),n=cc.Class({extends:cc.Component,properties:{musicSound:[e],sfxSound:[e],musicSource:{default:null,type:cc.AudioSource},sfxSource:{default:null,type:cc.AudioSource},musicSprite:{default:null,type:cc.Sprite},onMusicSpriteFrame:{default:null,type:cc.SpriteFrame},offMusicSpriteFrame:{default:null,type:cc.SpriteFrame},sfxSprite:{default:null,type:cc.Sprite},onSFXSpriteFrame:{default:null,type:cc.SpriteFrame},offSFXSpriteFrame:{default:null,type:cc.SpriteFrame},state1:{default:!0,visible:!1},state2:{default:!0,visible:!1},musicSlider:{default:null,type:cc.Slider},sfxSlider:{default:null,type:cc.Slider}},statics:{instance:null},onLoad:function(){n.instance=this},start:function(){},PlayMusic:function(i){var t=this.musicSound.find(function(t){return t.n===i});null==t?console.log("not found"):(this.musicSource.clip=t.clip,this.musicSource.play())},PlaySFX:function(i){var t=this.sfxSound.find(function(t){return t.n===i});null==t?console.log("not found"):(this.sfxSource.clip=t.clip,this.sfxSource.play())},MusicButton:function(){this.state1=!this.state1,this.state1?(this.musicSource.volume=.8,this.musicSprite.spriteFrame=this.onMusicSpriteFrame):this.state1&&0!=this.musicSource.volume||(this.musicSource.volume=0,this.musicSprite.spriteFrame=this.offMusicSpriteFrame),this.musicSlider.progress=this.musicSource.volume},SFXButton:function(){console.log("JJJJ"),this.state2=!this.state2,this.state2?(this.sfxSource.volume=1,this.sfxSprite.spriteFrame=this.onSFXSpriteFrame):this.state2||(this.sfxSource.volume=0,this.sfxSprite.spriteFrame=this.offSFXSpriteFrame),this.sfxSlider.progress=this.sfxSource.volume},MusicVolume:function(){this.musicSource.volume=this.musicSlider.progress,0==this.musicSource.volume?(this.musicSprite.spriteFrame=this.offMusicSpriteFrame,this.state1=!1):(this.musicSprite.spriteFrame=this.onMusicSpriteFrame,this.state1=!0)},SFXVolume:function(){this.sfxSource.volume=this.sfxSlider.progress,0==this.sfxSource.volume?(this.sfxSprite.spriteFrame=this.offSFXSpriteFrame,this.state2=!1):(this.sfxSprite.spriteFrame=this.onSFXSpriteFrame,this.state2=!0)}});cc._RF.pop()},{sound:"sound"}],coinswitch:[function(i,t){"use strict";cc._RF.push(t,"9d81cgV4N1JM4P0ElBxD/hk","coinswitch");var e=cc.Class({extends:cc.Component,onLoad:function(){e.instance=this},coinfun:function(i,t,e){i.opacity=0;var n=cc.instantiate(t[0]);n.setPosition(i.position),this.node.addChild(n),(i=n).setPosition(e)}});cc._RF.pop()},{}],game:[function(i,t){"use strict";var e;function n(i,t){var e;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(e=s(i))||t&&i&&"number"==typeof i.length){e&&(i=e);var n=0;return function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=i[Symbol.iterator]()).next.bind(e)}function s(i,t){if(i){if("string"==typeof i)return o(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);return"Object"===e&&i.constructor&&(e=i.constructor.name),"Map"===e||"Set"===e?Array.from(i):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(i,t):void 0}}function o(i,t){(null==t||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}cc._RF.push(t,"f9acbqSKVJJz63b+uj0AJie","game");var a=i("audioManager"),c=i("Coinmove"),u=i("Valuecard"),l=i("coinswitch");cc.Class(((e={extends:cc.Component,properties:{card1:{default:null,type:cc.Node},card2:{default:null,type:cc.Node},card3:{default:null,type:cc.Node},card4:{default:null,type:cc.Node},card5:{default:null,type:cc.Node},card6:{default:null,type:cc.Node},card:{default:null,type:cc.Node},cardclose:{default:null,type:cc.Node},cardprefab:{default:[],type:[cc.Prefab]},timecout:{default:0,visible:!1,type:cc.Integer},timelabel:{default:null,type:cc.Label},arrayCard:{default:[],visible:!1,type:[cc.Node]},coin1:{default:[],type:[cc.Prefab]},coin2:{default:[],type:[cc.Prefab]},coin3:{default:[],type:[cc.Prefab]},coin4:{default:[],type:[cc.Prefab]},coin5:{default:[],type:[cc.Prefab]},coin6:{default:[],type:[cc.Prefab]},coinmove:{default:[],type:[cc.Node]},coinNode:{default:[],type:[cc.Node]},valuecoin1:{default:!0,visible:!1,type:cc.Boolean},valuecoin2:{default:!0,visible:!1,type:cc.Boolean},valuecoin3:{default:!0,visible:!1,type:cc.Boolean},valuecoin4:{default:!0,visible:!1,type:cc.Boolean},valuecoin5:{default:!0,visible:!1,type:cc.Boolean},valuecoin6:{default:!0,visible:!1,type:cc.Boolean},totalCreditValue:{default:0,visible:!1,type:cc.Integer},creditLabel:{default:null,type:cc.Label},arrayPlayer:{default:[],visible:!1,type:[cc.Node]},playerNode:{default:null,type:cc.Node},playerCoinStop:{default:null,type:cc.Node},playerLabe:{default:null,type:cc.Label},playerValue:{default:0,visible:!1,type:cc.Integer},arrayTie:{default:[],visible:!1,type:[cc.Node]},tieNode:{default:null,type:cc.Node},tieCoinStop:{default:null,type:cc.Node},tieLabel:{default:null,type:cc.Label},tieValue:{default:0,visible:!1,type:cc.Integer},arrayBanker:{default:[],visible:!1,type:[cc.Node]},BankerNode:{default:null,type:cc.Node},BankerCoinStop:{default:null,type:cc.Node},BankerLabe:{default:null,type:cc.Label},BankerValue:{default:0,visible:!1,type:cc.Integer},valuecard1:{default:20,visible:!1,type:cc.Integer},valuecard2:{default:20,visible:!1,type:cc.Integer},valuecard3:{default:20,visible:!1,type:cc.Integer},valuecard4:{default:20,visible:!1,type:cc.Integer},valuecard5:{default:20,visible:!1,type:cc.Integer},valuecard6:{default:20,visible:!1,type:cc.Integer},winLabel:{default:null,type:cc.Label},playerwinNode:{default:null,type:cc.Node},tiewinNode:{default:null,type:cc.Node},bankerwinNode:{default:null,type:cc.Node},player:{default:0,visible:!1,type:cc.Integer},banker:{default:0,visible:!1,type:cc.Integer},tie:{default:0,visible:!1,type:cc.Integer},index1:{default:0,visible:!1,type:cc.Integer},index2:{default:0,visible:!1,type:cc.Integer},index3:{default:0,visible:!1,type:cc.Integer},index4:{default:0,visible:!1,type:cc.Integer},index5:{default:0,visible:!1,type:cc.Integer},index6:{default:0,visible:!1,type:cc.Integer},rety:{default:null,type:cc.Node},setting:{default:null,type:cc.Node},settingButton:{default:null,type:cc.Node},crossButton:{default:null,type:cc.Button},playeranimation:{default:null,type:cc.Animation},tieanimation:{default:null,type:cc.Animation},bankeranimation:{default:null,type:cc.Animation},isPlayerWin:{default:null,type:cc.Node},isTieWin:{default:null,type:cc.Node},isBankerWin:{default:null,type:cc.Node},labelPlayer:{default:null,type:cc.Label},labelBanker:{default:null,type:cc.Label},ShowHideStt:{default:null,type:cc.Animation},checkStt:{default:!0,type:cc.Boolean}},statics:{defaultcard:null,defaultSprCoin1:null,defaultSprCoin2:null,defaultSprCoin3:null,defaultSprCoin4:null,defaultSprCoin5:null,defaultSprCoin6:null},onLoad:function(){this.setValue(),this.supportfun(),this.evenNode(),this.random()},back:function(){a.instance.PlaySFX("Tap"),cc.audioEngine.stopAll(),cc.director.loadScene("Loading")},supportfun:function(){this.defaultcard=this.card.position,this.defaultSprCoin1=this.coinNode[0].position,this.defaultSprCoin2=this.coinNode[1].position,this.defaultSprCoin3=this.coinNode[2].position,this.defaultSprCoin4=this.coinNode[3].position,this.defaultSprCoin5=this.coinNode[4].position,this.defaultSprCoin6=this.coinNode[5].position,this.buttonanimation(this.playerNode),this.buttonanimation(this.tieNode),this.buttonanimation(this.BankerNode),this.buttonanimation(this.rety),this.evenNode1(),this.coinNode[0].on(cc.Node.EventType.TOUCH_START,this.coin1Bet,this),this.coinNode[1].on(cc.Node.EventType.TOUCH_START,this.coin2Bet,this),this.coinNode[2].on(cc.Node.EventType.TOUCH_START,this.coin3Bet,this),this.coinNode[3].on(cc.Node.EventType.TOUCH_START,this.coin4Bet,this),this.coinNode[4].on(cc.Node.EventType.TOUCH_START,this.coin5Bet,this),this.coinNode[5].on(cc.Node.EventType.TOUCH_START,this.coin6Bet,this)},setValue:function(){this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.valuecoin6=!0},evenNode1:function(){this.coinmove[0].on(cc.Node.EventType.TOUCH_START,this.coin1Value,this),this.coinmove[1].on(cc.Node.EventType.TOUCH_START,this.coin2Value,this),this.coinmove[2].on(cc.Node.EventType.TOUCH_START,this.coin3Value,this),this.coinmove[3].on(cc.Node.EventType.TOUCH_START,this.coin4Value,this),this.coinmove[4].on(cc.Node.EventType.TOUCH_START,this.coin5Value,this),this.coinmove[5].on(cc.Node.EventType.TOUCH_START,this.coin6Value,this)},evenNode:function(){this.playerNode.on(cc.Node.EventType.TOUCH_START,this.playerButton,this),this.BankerNode.on(cc.Node.EventType.TOUCH_START,this.bankerButton,this),this.tieNode.on(cc.Node.EventType.TOUCH_START,this.tieButton,this)},random:function(){this.timecout=15,this.schedule(function(){this.timecout>=0?this.timelabel.string=this.timecout:this.timelabel.string="VS",this.timecout<=15&&this.timecout>=0&&a.instance.PlaySFX("timecount"),-0==this.timecout&&this.CheckCard(),this.timecout<-10&&(this.closewinNode(),this.cardMoveIn(),this.ClearLabel(),this.CleanCoin(),this.timecout=16),this.timecout--},1)},coin1function:function(){1==this.valuecoin1&&l.instance.coinfun(this.coinNode[0],this.coin1,this.defaultSprCoin1)},coin2function:function(){1==this.valuecoin2&&l.instance.coinfun(this.coinNode[1],this.coin2,this.defaultSprCoin2)},coin3function:function(){1==this.valuecoin3&&l.instance.coinfun(this.coinNode[2],this.coin3,this.defaultSprCoin3)},coin4function:function(){1==this.valuecoin4&&l.instance.coinfun(this.coinNode[3],this.coin4,this.defaultSprCoin4)},coin5function:function(){1==this.valuecoin5&&l.instance.coinfun(this.coinNode[4],this.coin5,this.defaultSprCoin5)},coin6function:function(){1==this.valuecoin6&&l.instance.coinfun(this.coinNode[5],this.coin6,this.defaultSprCoin6)},cardMoveIn:function(){this.labelPlayer.string="0",this.labelBanker.string="0";for(var i,t=n(this.arrayCard);!(i=t()).done;){var e=i.value;cc.tween(e).repeat(1,cc.tween().to(1,{position:cc.v2(0,369)})).start()}a.instance.PlaySFX("cardIn")},coin1Bet:function(){if(1==this.valuecoin1){this.coinNode[0].opacity=0;var i=cc.instantiate(this.coin1[1]);i.setPosition(this.coinNode[0].position),this.node.addChild(i),this.coinNode[0]=i,this.coinNode[0].setPosition(this.defaultSprCoin1),this.valuecoin1=!1,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.coin2function(),this.coin3function(),this.coin4function(),this.coin5function(),this.coin6function()}else{this.valuecoin2=!0,this.coinNode[1].opacity=0;var t=cc.instantiate(this.coin2[0]);t.setPosition(this.coinNode[1].position),this.node.addChild(t),this.coinNode[1]=t,this.coinNode[1].setPosition(this.defaultSprCoin2)}},coinbet1:function(){this.coinNode[1].opacity=0;var i=cc.instantiate(this.coin2[1]);i.setPosition(this.coinNode[1].position),this.node.addChild(i),this.coinNode[1]=i,this.coinNode[1].setPosition(this.defaultSprCoin2),this.valuecoin2=!1,this.valuecoin1=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.coin1function(),this.coin3function(),this.coin4function(),this.coin5function(),this.coin6function()},subcoinbet1:function(){this.valuecoin2=!0,this.coinNode[1].opacity=0;var i=cc.instantiate(this.coin2[0]);i.setPosition(this.coinNode[1].position),this.node.addChild(i),this.coinNode[1]=i,this.coinNode[1].setPosition(this.defaultSprCoin2)},coin2Bet:function(){1==this.valuecoin2?this.coinbet1():this.subcoinbet1()},coinbet3:function(){this.coinNode[2].opacity=0;var i=cc.instantiate(this.coin3[1]);i.setPosition(this.coinNode[2].position),this.node.addChild(i),this.coinNode[2]=i,this.coinNode[2].setPosition(this.defaultSprCoin3),this.valuecoin3=!1,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.coin1function(),this.coin2function(),this.coin4function(),this.coin5function(),this.coin6function()},subcoinbet3:function(){this.coinNode[2].opacity=0;var i=cc.instantiate(this.coin3[0]);i.setPosition(this.coinNode[2].position),this.node.addChild(i),this.coinNode[2]=i,this.coinNode[2].setPosition(this.defaultSprCoin3),this.valuecoin3=!0},coin3Bet:function(){1==this.valuecoin3?this.coinbet3():this.subcoinbet3()},coinbet4:function(){this.coinNode[3].opacity=0;var i=cc.instantiate(this.coin4[1]);i.setPosition(this.coinNode[3].position),this.node.addChild(i),this.coinNode[3]=i,this.coinNode[3].setPosition(this.defaultSprCoin4),this.valuecoin4=!1,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin5=!0,this.valuecoin6=!0,this.coin1function(),this.coin2function(),this.coin3function(),this.coin5function(),this.coin6function()},subcoinbet4:function(){this.coinNode[3].opacity=0;var i=cc.instantiate(this.coin4[0]);i.setPosition(this.coinNode[3].position),this.node.addChild(i),this.coinNode[3]=i,this.coinNode[3].setPosition(this.defaultSprCoin4),this.valuecoin4=!0},coin4Bet:function(){1==this.valuecoin4?this.coinbet4():this.subcoinbet4()},coinbet5:function(){this.coinNode[4].opacity=0;var i=cc.instantiate(this.coin5[1]);i.setPosition(this.coinNode[4].position),this.node.addChild(i),this.coinNode[4]=i,this.coinNode[4].setPosition(this.defaultSprCoin5),this.valuecoin5=!1,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin6=!0,this.coin1function(),this.coin2function(),this.coin3function(),this.coin4function(),this.coin6function()},subcoinbet:function(){this.coinNode[4].opacity=0;var i=cc.instantiate(this.coin5[0]);i.setPosition(this.coinNode[4].position),this.node.addChild(i),this.coinNode[4]=i,this.coinNode[4].setPosition(this.defaultSprCoin5),this.valuecoin5=!0},coin5Bet:function(){1==this.valuecoin5?this.coinbet5():this.subcoinbet()},coinbet6:function(){this.coinNode[5].opacity=0;var i=cc.instantiate(this.coin6[1]);i.setPosition(this.coinNode[5].position),this.node.addChild(i),this.coinNode[5]=i,this.coinNode[5].setPosition(this.defaultSprCoin6),this.valuecoin6=!1,this.valuecoin1=!0,this.valuecoin2=!0,this.valuecoin3=!0,this.valuecoin4=!0,this.valuecoin5=!0,this.coin1function(),this.coin2function(),this.coin3function(),this.coin4function(),this.coin5function()}}).subcoinbet=function(){this.coinNode[5].opacity=0;var i=cc.instantiate(this.coin6[0]);i.setPosition(this.coinNode[5].position),this.node.addChild(i),this.coinNode[5]=i,this.coinNode[5].setPosition(this.defaultSprCoin6),this.valuecoin6=!0},e.coin6Bet=function(){1==this.valuecoin6?this.coinbet6():this.subcoinbet()},e.playerButton=function(){this.buttonplay()},e.buttonplay=function(){this.timecout<0||(0==this.valuecoin1?this.button1Queen():0==this.valuecoin2?this.button2Queen():0==this.valuecoin3?this.button3Queen():0==this.valuecoin4?this.button4Queen():0==this.valuecoin5?this.button5Queen():0==this.valuecoin6&&this.button6Queen())},e.SubTie1=function(){this.totalCreditValue-=1,this.tieValue+=1,this.tieLabel.string=""+this.tieValue,this.creditLabel.string=this.totalCreditValue+""},e.Tie1Button=function(){this.totalCreditValue>=1&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmovetaiFun(this.coinmove[0],this.defaultSprCoin1,this.tieCoinStop,this.arrayTie),this.SubTie1())},e.SubTie2=function(){this.totalCreditValue-=5,this.tieValue+=5,this.tieLabel.string=""+this.tieValue,this.creditLabel.string=this.totalCreditValue+""},e.Tie2Button=function(){this.totalCreditValue>=5&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmovetaiFun(this.coinmove[1],this.defaultSprCoin2,this.tieCoinStop,this.arrayTie),this.SubTie2())},e.Tie3Button=function(){this.totalCreditValue>=10&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmovetaiFun(this.coinmove[2],this.defaultSprCoin3,this.tieCoinStop,this.arrayTie),this.subtaithree())},e.subtaithree=function(){this.totalCreditValue-=10,this.tieValue+=10,this.tieLabel.string=""+this.tieValue,this.creditLabel.string=this.totalCreditValue+""},e.subtaifour=function(){this.totalCreditValue-=20,this.tieValue+=20,this.tieLabel.string=""+this.tieValue,this.creditLabel.string=this.totalCreditValue+""},e.Tie4Button=function(){this.totalCreditValue>=20&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmovetaiFun(this.coinmove[3],this.defaultSprCoin4,this.tieCoinStop,this.arrayTie),this.subtaifour())},e.Tie5Button=function(){this.totalCreditValue>=50&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmovetaiFun(this.coinmove[4],this.defaultSprCoin5,this.tieCoinStop,this.arrayTie),this.subtaifive())},e.subtaifive=function(){this.totalCreditValue-=50,this.tieValue+=50,this.tieLabel.string=""+this.tieValue,this.creditLabel.string=this.totalCreditValue+""},e.Tie6Button=function(){this.totalCreditValue>=100&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmovetaiFun(this.coinmove[5],this.defaultSprCoin6,this.tieCoinStop,this.arrayTie),this.subsixfun())},e.subsixfun=function(){this.totalCreditValue-=100,this.tieValue+=100,this.tieLabel.string=""+this.tieValue,this.creditLabel.string=this.totalCreditValue+""},e.tieButton=function(){this.timecout<0||(0==this.valuecoin1?this.Tie1Button():0==this.valuecoin2?this.totalCreditValue>=5&&this.Tie2Button():0==this.valuecoin3?this.totalCreditValue>=10&&this.Tie3Button():0==this.valuecoin4?this.totalCreditValue>=20&&this.Tie4Button():0==this.valuecoin5?this.totalCreditValue>=50&&this.Tie5Button():0==this.valuecoin6&&this.totalCreditValue>=100&&this.Tie6Button())},e.betQueenBtn1=function(){this.totalCreditValue>=1&&(a.instance.PlaySFX("insertCoin"),c.instance.coinBankFun(this.coinmove[0],this.defaultSprCoin1,this.BankerCoinStop,this.arrayBanker),this.totalCreditValue-=1,this.totalCreditValue-=1,this.BankerValue+=1,this.BankerLabe.string=""+this.BankerValue,this.creditLabel.string=this.totalCreditValue+"")},e.betQueenBtn2=function(){this.totalCreditValue>=5&&(a.instance.PlaySFX("insertCoin"),c.instance.coinBankFun(this.coinmove[1],this.defaultSprCoin2,this.BankerCoinStop,this.arrayBanker),this.totalCreditValue-=5,this.BankerValue+=5,this.BankerLabe.string=""+this.BankerValue,this.creditLabel.string=this.totalCreditValue+"")},e.betQueenBtn3=function(){this.totalCreditValue>=10&&(a.instance.PlaySFX("insertCoin"),c.instance.coinBankFun(this.coinmove[2],this.defaultSprCoin3,this.BankerCoinStop,this.arrayBanker),this.totalCreditValue-=10,this.BankerValue+=10,this.BankerLabe.string=""+this.BankerValue,this.creditLabel.string=this.totalCreditValue+"")},e.betQueenBtn4=function(){this.totalCreditValue>=20&&(a.instance.PlaySFX("insertCoin"),c.instance.coinBankFun(this.coinmove[3],this.defaultSprCoin4,this.BankerCoinStop,this.arrayBanker),this.totalCreditValue-=20,this.BankerValue+=20,this.BankerLabe.string=""+this.BankerValue,this.creditLabel.string=this.totalCreditValue+"")},e.betQueenBtn5=function(){this.totalCreditValue>=50&&(a.instance.PlaySFX("insertCoin"),c.instance.coinBankFun(this.coinmove[4],this.defaultSprCoin5,this.BankerCoinStop,this.arrayBanker),this.totalCreditValue-=50,this.BankerValue+=50,this.BankerLabe.string=""+this.BankerValue,this.creditLabel.string=this.totalCreditValue+"")},e.betQueenBtn6=function(){this.totalCreditValue>=100&&(a.instance.PlaySFX("insertCoin"),c.instance.coinBankFun(this.coinmove[5],this.defaultSprCoin6,this.BankerCoinStop,this.arrayBanker),this.totalCreditValue-=100,this.BankerValue+=100,this.BankerLabe.string=""+this.BankerValue,this.creditLabel.string=this.totalCreditValue+"")},e.bankerButton=function(){this.timecout<0||(0==this.valuecoin1?this.betQueenBtn1():0==this.valuecoin2?this.betQueenBtn2():0==this.valuecoin3?this.betQueenBtn3():0==this.valuecoin4?this.betQueenBtn4():0==this.valuecoin5?this.betQueenBtn5():0==this.valuecoin6&&this.betQueenBtn6())},e.winMove=function(i){for(var t,e=n(i);!(t=e()).done;){var s=t.value;cc.tween(s).repeat(1,cc.tween().to(3,{position:cc.v2(0,-2e3)})).start()}},e.loseMove=function(i){for(var t,e=n(i);!(t=e()).done;){var s=t.value;cc.tween(s).repeat(1,cc.tween().to(3,{position:cc.v2(0,2e3)})).start()}},e.ClearLabel=function(){this.playerValue=0,this.tieValue=0,this.BankerValue=0,this.playerLabe.string=this.playerValue+"",this.tieLabel.string=this.tieValue+"",this.BankerLabe.string=this.BankerValue+""},e.CleanCoin=function(){for(var i,t=n(this.arrayPlayer);!(i=t()).done;)i.value.destroy();for(var e,s=n(this.arrayBanker);!(e=s()).done;)e.value.destroy();for(var o,a=n(this.arrayTie);!(o=a()).done;)o.value.destroy()},e.CheckCard=function(){var i=this;if(this.index1=this.getValue(0,51),this.index2=this.getValue(0,51),this.index3=this.getValue(0,51),this.index4=this.getValue(0,51),this.index1==this.index2||this.index1==this.index3||this.index1==this.index4)do{this.index1=this.getValue(0,51)}while(this.index1==this.index2||this.index1==this.index3||this.index1==this.index4);if(this.index2==this.index1||this.index2==this.index3||this.index2==this.index4)do{this.index2=this.getValue(0,51)}while(this.index2==this.index1||this.index2==this.index3||this.index2==this.index4);if(this.index3==this.index1||this.index3==this.index2||this.index3==this.index4)do{this.index3=this.getValue(0,51)}while(this.index3==this.index1||this.index3==this.index2||this.index3==this.index4);if(this.index4==this.index1||this.index4==this.index2||this.index4==this.index3)do{this.index4=this.getValue(0,51)}while(this.index4==this.index1||this.index4==this.index2||this.index4==this.index3);var t=cc.instantiate(this.cardprefab[this.index1]);this.node.addChild(t),t.setPosition(cc.v2(this.card.position)),t.runAction(cc.sequence(cc.moveTo(.1,cc.v2(this.card1.position)),cc.callFunc(function(){i.arrayCard.push(t)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("insertCard2");var e=cc.instantiate(this.cardprefab[this.index2]);this.node.addChild(e),e.setPosition(cc.v2(this.card.position)),e.runAction(cc.sequence(cc.moveTo(.3,cc.v2(this.card6.position)),cc.callFunc(function(){i.arrayCard.push(e)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("insertCard2");var n=cc.instantiate(this.cardprefab[this.index3]);this.node.addChild(n),n.setPosition(cc.v2(this.card.position)),n.runAction(cc.sequence(cc.moveTo(.5,cc.v2(this.card2.position)),cc.callFunc(function(){i.arrayCard.push(n)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("insertCard2");var s=cc.instantiate(this.cardprefab[this.index4]);this.node.addChild(s),s.setPosition(cc.v2(this.card.position)),s.runAction(cc.sequence(cc.moveTo(1,cc.v2(this.card5.position)),cc.callFunc(function(){i.arrayCard.push(s)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("insertCard2"),this.valuecard1=u.instance.setvalue(this.index1),this.valuecard3=u.instance.setvalue(this.index3),this.valuecard2=u.instance.setvalue(this.index2),this.valuecard4=u.instance.setvalue(this.index4),this.player=this.valuecard1+this.valuecard3,this.banker=this.valuecard2+this.valuecard4,this.player>9&&(this.player=this.player%10),this.banker>9&&(this.banker=this.banker%10);var o=this.player,c=this.banker;if(this.index5=this.getValue(0,51),this.index6=this.getValue(0,51),o<6&&c<8&&(this.index5==this.index1||this.index5==this.index2||this.index5==this.index3||this.index5==this.index4))do{this.index5=this.getValue(0,51)}while(this.index5==this.index1||this.index5==this.index2||this.index5==this.index3||this.index5==this.index4);if(setTimeout(function(){if(o<6&&c<8){i.valuecard5=u.instance.setvalue(i.index5);var t=cc.instantiate(i.cardprefab[i.index5]);i.node.addChild(t),t.setPosition(cc.v2(i.card.position)),t.runAction(cc.sequence(cc.moveTo(2,cc.v2(i.card3.position)),cc.callFunc(function(){i.arrayCard.push(t)}))),i.card.setPosition(i.defaultcard),a.instance.PlaySFX("insertCard2"),i.player=i.player+i.valuecard5,i.player>9&&(i.player=i.player%10)}},"2000"),c<6&&o<8&&(this.index6==this.index1||this.index6==this.index2||this.index6==this.index3||this.index6==this.index4||this.index6==this.index5))do{this.index6=this.getValue(0,51)}while(this.index6==this.index1||this.index6==this.index2||this.index6==this.index3||this.index6==this.index4||this.index6==this.index5);setTimeout(function(){if(c<=5&&o<=7)if(c<=2){i.valuecard6=u.instance.setvalue(i.index6);var t=cc.instantiate(i.cardprefab[i.index6]);i.node.addChild(t),t.setPosition(cc.v2(i.card.position)),t.runAction(cc.sequence(cc.moveTo(2,cc.v2(i.card4.position)),cc.callFunc(function(){i.arrayCard.push(t)}))),i.card.setPosition(i.defaultcard),a.instance.PlaySFX("insertCard2"),i.banker=i.banker+i.valuecard6,i.banker>9&&(i.banker=i.banker%10)}else 3==c&&8!=i.valuecard5?i.card4funi():4!=c||0==i.valuecard5&&1==i.valuecard5&&8==i.valuecard5&&9==i.valuecard5?5!=c||0==i.valuecard5&&1==i.valuecard5&&2==i.valuecard5&&3==i.valuecard5&&8==i.valuecard5&&9==i.valuecard5?6!=i.valuecard5&&7!=i.valuecard5||6!=c&&7!=c||i.card1funi():i.card2funi():i.card3funi()},"3000"),setTimeout(function(){i.labelPlayer.string=i.player.toString(),i.labelBanker.string=i.banker.toString(),i.player>i.banker?i.QueenWinning():i.banker>i.player?i.KingWinning():i.TieWinning()},"5000")},e.card4funi=function(){var i=this;this.valuecard6=u.instance.setvalue(this.index6);var t=cc.instantiate(this.cardprefab[this.index6]);this.node.addChild(t),t.setPosition(cc.v2(this.card.position)),t.runAction(cc.sequence(cc.moveTo(2,cc.v2(this.card4.position)),cc.callFunc(function(){i.arrayCard.push(t)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("insertCard2"),this.banker=this.banker+this.valuecard6,this.banker>9&&(this.banker=this.banker%10)},e.card3funi=function(){var i=this;this.valuecard6=u.instance.setvalue(this.index6);var t=cc.instantiate(this.cardprefab[this.index6]);this.node.addChild(t),t.setPosition(cc.v2(this.card.position)),t.runAction(cc.sequence(cc.moveTo(2,cc.v2(this.card4.position)),cc.callFunc(function(){i.arrayCard.push(t)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("insertCard2"),this.banker=this.banker+this.valuecard6,this.banker>9&&(this.banker=this.banker%10)},e.card2funi=function(){var i=this;this.valuecard6=u.instance.setvalue(this.index6);var t=cc.instantiate(this.cardprefab[this.index6]);this.node.addChild(t),t.setPosition(cc.v2(this.card.position)),t.runAction(cc.sequence(cc.moveTo(2,cc.v2(this.card4.position)),cc.callFunc(function(){i.arrayCard.push(t)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("insertCard2"),this.banker=this.banker+this.valuecard6,this.banker>9&&(this.banker=this.banker%10)},e.card1funi=function(){var i=this;this.valuecard6=u.instance.setvalue(this.index6);var t=cc.instantiate(this.cardprefab[this.index6]);this.node.addChild(t),t.setPosition(cc.v2(this.card.position)),t.runAction(cc.sequence(cc.moveTo(2,cc.v2(this.card4.position)),cc.callFunc(function(){i.arrayCard.push(t)}))),this.card.setPosition(this.defaultcard),a.instance.PlaySFX("insertCard2"),this.banker=this.banker+this.valuecard6,this.banker>9&&(this.banker=this.banker%10)},e.QueenWinning=function(){this.playerValue=2*this.playerValue,this.winLabel.string=this.playerValue+"",this.totalCreditValue+=this.playerValue,this.creditLabel.string=this.totalCreditValue+"",this.playerwinNode.opacity=255,this.isPlayerWin.opacity=0,a.instance.PlaySFX("Winning"),this.playeranimation.play(),this.winMove(this.arrayPlayer),this.loseMove(this.arrayBanker),this.loseMove(this.arrayTie)},e.KingWinning=function(){this.BankerValue=2*this.BankerValue,this.winLabel.string=this.BankerValue+"",this.totalCreditValue+=this.BankerValue,this.creditLabel.string=this.totalCreditValue+"",this.bankerwinNode.opacity=255,this.isBankerWin.opacity=0,a.instance.PlaySFX("Winning"),this.bankeranimation.play(),this.winMove(this.arrayBanker),this.loseMove(this.arrayPlayer),this.loseMove(this.arrayTie)},e.TieWinning=function(){this.tieValue=2*this.tieValue,this.winLabel.string=this.tieValue+"",this.totalCreditValue+=this.tieValue,this.creditLabel.string=this.totalCreditValue+"",this.tiewinNode.opacity=255,this.isTieWin.opacity=0,this.tieanimation.play(),a.instance.PlaySFX("Winning"),this.winMove(this.arrayTie),this.loseMove(this.arrayPlayer),this.loseMove(this.arrayBanker)},e.getValue=function(i,t){return Math.floor(Math.random()*(t-i+1))+i},e.buttonanimation=function(i){var t=i.addComponent(cc.Button);t.transition=cc.Button.Transition.SCALE,t.duration=.1,t.zoomScale=1.1},e.closewinNode=function(){this.playerwinNode.opacity=0,this.tiewinNode.opacity=0,this.bankerwinNode.opacity=0,this.isPlayerWin.opacity=255,this.isTieWin.opacity=255,this.isBankerWin.opacity=255},e.start=function(){this.totalCreditValue=5e3,this.creditLabel.string=this.totalCreditValue+"",this.playerCoinStop.opacity=0,this.tieCoinStop.opacity=0,this.BankerCoinStop.opacity=0,this.coinnuf(),a.instance.PlayMusic("background")},e.coinnuf=function(){this.closewinNode(),this.coin1function(),this.coin2function(),this.coin3function(),this.coin4function(),this.coin5function(),this.coin6function()},e.button1Queen=function(){this.totalCreditValue>=1&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmoveFun(this.coinmove[0],this.defaultSprCoin1,this.playerCoinStop,this.arrayPlayer),this.suboneplayer())},e.suboneplayer=function(){this.totalCreditValue-=1,this.playerValue+=1,this.playerLabe.string=""+this.playerValue,this.creditLabel.string=this.totalCreditValue+""},e.button2Queen=function(){this.totalCreditValue>=5&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmovetaiFun(this.coinmove[1],this.defaultSprCoin2,this.playerCoinStop,this.arrayPlayer),this.subtwoplayer())},e.subtwoplayer=function(){this.totalCreditValue-=5,this.playerValue+=5,this.playerLabe.string=""+this.playerValue,this.creditLabel.string=this.totalCreditValue+""},e.button3Queen=function(){this.totalCreditValue>=10&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmoveFun(this.coinmove[2],this.defaultSprCoin3,this.playerCoinStop,this.arrayPlayer),this.subthreeplayer())},e.subthreeplayer=function(){this.totalCreditValue-=10,this.playerValue+=10,this.playerLabe.string=""+this.playerValue,this.creditLabel.string=this.totalCreditValue+""},e.button4Queen=function(){this.totalCreditValue>=20&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmoveFun(this.coinmove[3],this.defaultSprCoin4,this.playerCoinStop,this.arrayPlayer),this.subfourplayer())},e.subfourplayer=function(){this.totalCreditValue-=20,this.playerValue+=20,this.playerLabe.string=""+this.playerValue,this.creditLabel.string=this.totalCreditValue+""},e.button5Queen=function(){this.totalCreditValue>=50&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmoveFun(this.coinmove[4],this.defaultSprCoin5,this.playerCoinStop,this.arrayPlayer),this.subplayerfive())},e.subplayerfive=function(){this.totalCreditValue-=50,this.playerValue+=50,this.playerLabe.string=""+this.playerValue,this.creditLabel.string=this.totalCreditValue+""},e.button6Queen=function(){this.totalCreditValue>=100&&(a.instance.PlaySFX("insertCoin"),c.instance.coinmoveFun(this.coinmove[5],this.defaultSprCoin6,this.playerCoinStop,this.arrayPlayer),this.buttonsix())},e.buttonsix=function(){this.totalCreditValue-=100,this.playerValue+=100,this.playerLabe.string=""+this.playerValue,this.creditLabel.string=this.totalCreditValue+""},e.showSetting=function(){a.instance.PlaySFX("Tap"),1==this.checkStt?(this.ShowHideStt.play("ShowStt"),this.checkStt=!1):0==this.checkStt&&(this.ShowHideStt.play("HideStt"),this.checkStt=!0)},e)),cc._RF.pop()},{Coinmove:"Coinmove",Valuecard:"Valuecard",audioManager:"audioManager",coinswitch:"coinswitch"}],getValue:[function(i,t){"use strict";cc._RF.push(t,"0cf694u5AtIibPyECK7xEgQ","getValue");var e=cc.Class({extends:cc.Component,onLoad:function(){e.instance=this},getValue:function(i,t){return Math.floor(Math.random()*(t-i+1))+i}});cc._RF.pop()},{}],sound:[function(i,t){"use strict";cc._RF.push(t,"ad209nglkZNQrfKAMHcMmV8","sound"),cc.Class({properties:{n:{default:"",type:cc.String},clip:{default:null,type:cc.AudioClip}}}),cc._RF.pop()},{}]},{},["ButtonAnimation","Coinmove","Loading","Valuecard","audioManager","coinswitch","game","getValue","sound"]);