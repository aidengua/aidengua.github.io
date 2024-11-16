---
title: 動手做教學之PicoGameBoy(未完成)
cover: https://i.imgur.com/egQPCQP.jpeg
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2024-09-26 16:52:36
updated:
tags:
- 手作
- 教程
categories:
- 製作教程
keywords:
description:
top:
top_img:
comments:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
ai:
---

# Pico GameBoy主題介紹
我將透過影片與部落格帶你手把手製作屬於你的GameBoy復古遊戲機，主軸在外殼設計和電路邏輯上！   
編成與教學不易，不妨收藏本站並在我們的官方YouTube與Instagram關注更多教學！你們的關注就是對我的支持！

## 前導介紹
>在了解什麼是"Pico"前認識"GameBoy"吧！
GameBoy是一種復古掌上型遊戲機類型，能夠透過卡帶遊玩多種遊戲，多為單機片遊戲。
那為什麼名稱是Pico GameBoy呢？
我們的手作掌機內搭載Raspberry Pi Pico主板，這是一片單機版，可以驅動LCD螢幕並透過模擬器運行GameBoy遊戲！
當然在動手作當中技術往往不是最難的點，希望各位還是保持創新力打造屬於自己的外殼，我只提供一個基礎帶領各位能夠了解Raspberry Pi Pico的邏輯與復古遊戲的奧妙之處，讓大家可以基於我的設計改善外觀和體驗！

## 基礎技能須知
1. 需掌握烙鐵焊接技巧
2. 了解如何調適雷射切割機
3. 能夠看懂基礎電路電路圖
4. 動手能力強能夠撥線、畫圖等基礎技巧

## 材料準備
| 用途 | 材料名稱 | 建議購買途徑 | 數量 |
|:--:|:--:|:--:|:--:|
| 外殼設計  | 雷切用3mm密集板 | 線下購買 | x1 |
| 木板黏接 | 快乾強力膠水 | 線下購買 | x1 |
| 電線 | 1A多芯電線 | 線下購買 |  x1 |
| 主機板 | Raspberry Pi Pico | 線上選購 | x1 |
| 顯示螢幕 |2.2inch ILI9225 176×220 LCD Display Module| 線上選購 | x1 |
| 遊戲卡帶 | 32GB Micro SD Card with adapter | 線下購買 |  x1 |
| 控制按鈕 | Momentary Tactile Tact Touch, 6x6x6 mm, 4 pins | 線下購買 | x8 |
| 聲音解碼 | MAX98357 I2S Audio Amplifier Module | 線上選購 |  x1 |
| 遊戲音效 | Weewooday 2W 8 Ohm small speaker | 線上選購 | x1 |
| 電源 | Lithium Polymer Battery 3.7V 2000mAh | 線上選購 |  x1 |
| 充電與保護 | 	TP4056 Type-C Charger | 線上選購 |  x1 |
| 總電源 | 	SS12F15 Miniature Slide Switch | 線下購買 | x2 |

## 軟體燒入

## 動手製作

### Step 1：主板解構
![PicoBoard](https://cdn.discordapp.com/attachments/1288755285548335118/1289029113902006315/Screenshot_20240923_081149_bilibili.jpg?ex=66f75569&is=66f603e9&hm=f6bbe0377dab031f22f9f98c0b9f59226465e90103be7228ce380eb0f6a6b595&"Pico主板")
**上圖中為Raspberry Pi Pico的主板解構，每一個針腳都有其對應功能與用途讓我們開始了解吧！**
#### 燒入方式
每一種開發版都有其稍入程式的方法，Pico則較為簡單，可以使用MicroPython編輯軟體燒入，也可以直接將為啟動過的Pico

### Step 2：連接螢幕

### Step 3：連接喇叭

### Step 4：按鈕與電源

### Step 5：電力系統

### Step 6：外殼製作