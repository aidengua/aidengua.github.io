var posts=["2024/11/27/比賽紀錄之台鋼實作競賽/","2024/11/12/專案旅行-專案設計/","2024/11/06/比賽紀錄之新興科技/","2024/10/31/專案旅行-第三天/","2024/10/31/專案旅行-第二天/","2024/10/31/專案旅行-第一天/","2024/10/11/課堂筆記-漁村創業/","2024/10/08/TWS辦公桌音響設計/","2024/10/04/動手做之個人部落格搭建/","2024/10/02/好物推薦之KeychronK3無線藍芽鍵盤/","2024/09/27/比賽紀錄之長庚杯/","2024/09/27/比賽紀錄之中學生黑客松/","2024/09/26/動手做之PicoGameBoy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };