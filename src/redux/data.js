//initial state:
export const pieces = {
  allIds:['11','21','31','41','42','43','44','45','46','51'],
  byId:{
    '11':{id:'11',tabId:1,show:true,name:'地板',folder:'diban-keting',options:['29','31'],currentOption:1,position:[0,0,0],format:'jpg'},
    '21':{id:'21',tabId:2,show:true,name:'地板',folder:'diban-woshi',options:['52','30','53'],currentOption:1,position:[0,0,0],format:'jpg'},
    '31':{id:'31',tabId:3,show:true,name:'墙砖',folder:'qiangzhuan-chufang',options:['21','19','48','45'],currentOption:1,position:[0,0,0],format:'jpg'},
    '41':{id:'41',tabId:4,show:true,name:'花洒',folder:'huasa',options:['4'],currentOption:1,position:[0,0,1],format:'png'},
    '42':{id:'42',tabId:4,show:true,name:'马桶',folder:'matong',options:['1'],currentOption:1,position:[0,0,1],format:'png'},
    '43':{id:'43',tabId:4,show:true,name:'毛巾架',folder:'maojinjia',options:['5'],currentOption:1,position:[0,0,1],format:'png'},
    '44':{id:'44',tabId:4,show:true,name:'浴室柜',folder:'yushigui',options:['2','46'],currentOption:1,position:[0,0,1],format:'png'},
    '45':{id:'45',tabId:4,show:true,name:'置物架',folder:'zhiwujia',options:['47'],currentOption:1,position:[0,0,1],format:'png'},
    '46':{id:'46',tabId:4,show:true,name:'墙砖',folder:'qiangzhuan-weishenjian',options:['44'],currentOption:1,position:[0,0,0],format:'png'},
    '51':{id:'51',tabId:5,show:true,name:'墙砖',folder:'qiangzhuan-yangtai',options:['49','50','51'],currentOption:1,position:[0,0,0],format:'jpg'},
  },
}

//static data:
export const tabs = [
  {name:'客餐厅',background:'keting.jpg',icon:'keting.png',icon2:'keting2.png'},
  {name:'卧室',background:'woshi.jpg',icon:'woshi.png',icon2:'woshi2.png'},
  {name:'厨房',background:'chufang.jpg',icon:'chufang.png',icon2:'chufang2.png'},
  {name:'卫生间',background:'weishenjian.png',icon:'weishenjian.png',icon2:'weishenjian2.png'},
  {name:'阳台',background:'yangtai.jpg',icon:'yangtai.png',icon2:'yangtai2.png'},
]
