/* 
 * jsgb.toolbox.js - This is part of JSGB, a JavaScript GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
 
var br='<br/'+'>\n';

// Convert an 8 bit number into a JavaScript signed integer
// Z80's negative numbers are in two's complement
function sb(n){return (n>127)?((n&127)-128):n;}

// Left zero fill until length of s = l
function zf(s,l) {while (s.length<l)s='0'+s;return s;}

// Convert decimal to hexadecimal
function hex(n){return (n*1).toString(16).toUpperCase();}
function hex2(n) {return zf(hex(n),2);};
function hex4(n) {return zf(hex(n),4);};

// Convert decimal to binary
function bin(n){return (n*1).toString(2);}

// Insert a space every "l" chars.
// for example: sp('12345678',4) returns '1234 5678'
function sp(s,l){
  var r=[],i=0;
  while (s.length>l) {
    r[i++]=s.substr(0,l);
    s=s.substr(l);
  }
  if (s.length>0) r[i]=s;
  return r.join('&nbsp;');
}

// Get element from id
function $(id){return document.getElementById(id);}

// Get milliseconds from the UNIX epoch
function get_ms(){return new Date().getTime();}

// Random number between a and b
function rand2(a,b) { return a+Math.round(Math.random()*(b-a)); }

// Get object properties
function printObj(o) {
  var s = "" ;
  for (var p in o) s+=p+" = "+o[p]+"\n" ;
  return s ;
}






/* 
 * scrollbar.js v0.1 - A simple scrollbar for JavaScript
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * ____________________________________________________________________________
 *
 * Note: this doesn't works in MSIE.
 *
 * CSS Styles used by scrollBar Object:
 * .SCROLLBAR 
 * .SCROLLBAR > .BACKGROUND
 * .SCROLLBAR > .BACKGROUND > .DRAG
 */
 
function dragMachine(dragid,onchange) {
  var d=this;
//d.startX=0;
  d.startY=0;
//d.objX=0;
  d.objY=0;
//d.oldX=0;
  d.oldY=0;
  d.obj=$(dragid);
  d.maxY=0;
  d.minY=0;
//d.posX=0;  
  d.posY=0; // position (0~1)
  d.onchange=onchange;

  d.drag=function(event) {
  //d.startX=event.clientX+window.scrollX;
    d.startY=event.clientY+window.scrollY;
    document.addEventListener("mousemove", d.dragging, true);
    document.addEventListener("mouseup", d.drop, true);
    d.objX=parseInt(d.obj.style.left);
    d.objY=parseInt(d.obj.style.top );
  //obj.style.zIndex++;
    event.preventDefault();
  };

  d.dragging=function(event) {
    var nowX, nowY;
  //nowX=event.clientX+window.scrollX;
    nowY=event.clientY+window.scrollY;
  //var X=d.objX+nowX-d.startX;
    var Y=d.objY+nowY-d.startY;
  //if (X>d.maxX) X=d.maxX; if (X<d.minX) X=d.minX;
    if (Y>d.maxY) Y=d.maxY; if (Y<d.minY) Y=d.minY;
    d.posY=(Y/d.maxY);
  //d.obj.style.left=X+"px";
    d.obj.style.top=Y+"px";
    event.preventDefault();
    if ((d.oldY!=Y)/* ||(d.oldX!=X) */) {
      onchange();
      d.oldY=Y;
    //d.oldX=X;
    }  
  }
  
  d.setpos=function(x,y) {
  //d.posX=x;
    if (y>1.0) y=1.0; else if (y<0.0) y=0.0;
    d.posY=y;
  //d.obj.style.left=Math.round(d.posX*d.maxX)+'px';
    d.obj.style.top=Math.round(d.posY*d.maxY)+'px';
  }

  d.drop=function(event) {
    document.removeEventListener("mousemove", d.dragging, true);
    document.removeEventListener("mouseup", d.drop, true);
  };
  
}

function scrollBar(parent,onchange) {
  var scb=this;
  scb.parentid=parent;
  scb.startX=0,
  scb.startY=0
  scb.backid=parent+"_BG"; // background id
  scb.dragid=parent+"_DG"; // drag thing id
  scb.dragger = null;
  
  scb.update=function(){
    $(scb.backid).style.height=$(scb.parentid).clientHeight+'px';
    scb.dragger.maxY=$(scb.parentid).clientHeight-$(scb.dragid).clientHeight-4;
    $(scb.dragid).style.top=Math.round(scb.dragger.maxY*scb.dragger.posY)+'px';
  };    

  (scb.create=function(){
    $(scb.parentid).className='SCROLLBAR';
    $(scb.parentid).innerHTML=
      '<div id="'+scb.backid+'" class="BACKGROUND">'+
      '<div id="'+scb.dragid+'" class="DRAG"></div></div>';
    scb.dragger = new dragMachine(scb.dragid,onchange);
    $(scb.dragid).addEventListener("mousedown", scb.dragger.drag, true);
  })(); 
}




/*
 * jsgb.cpu.js v0.021 - GB CPU Emulator for JSGB, a JavaScript GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */

var gbEnableCallerStack = false;

// CPU Registers
var RA=0; // Accumulator
var FZ=0, // bit 7 - Zero
    FN=0, // bit 6 - Sub
    FH=0, // bit 5 - Half Carry
    FC=0; // bit 4 - Carry
var RB=0; // Register B
var RC=0; // Register C
var RD=0; // Register D
var RE=0; // Register E
var HL=0; // Registers H and L
var SP=0; // Stack Pointer
var PC=0; // Program Counter
var T1=0; // Temp Register 1
var T2=0; // Temp Register 2

var gbHalt = false; 
var gbPause = true;  
var gbIME = true;
var gbCPUTicks = 0;  
var gbDAATable = []; 

// OpCode Arrays
var OP=[], OPCB=[]; // Opcode Array
var MN=[], MNCB=[]; // Mnemonics

for (var i=0;i<=0xFF;i++) {
  MN[i]=function() { return 'DB 0x'+hex2(MEMR(PC))+'; unknown'; };
  OPCB[i]=function() {};
  MNCB[i]=function() { return 'DW 0xCB'+hex2(MEMR(PC+1)); };
}

if (gbEnableCallerStack) {
  var gbCallerStack = [];
  var gb_Save_Caller = function() {
    gbCallerStack.unshift(PC-1);
    if (gbCallerStack.length>8) gbCallerStack.pop();
  }
  var gb_Dump_Caller_Stack = function() {
    var s='Caller Stack:\n';
    for (var i in gbCallerStack) s+='0x'+hex4(gbCallerStack[i])+'\n';
    return s;
  }
}  
else {
  var gb_Dump_Caller_Stack = function() { 
    return 'Caller stack disabled.\n'+
           'To enable set gbEnableCallerStack=true in jsgb.cpu.js';
  }         
}  
function gb_CPU_UNK() {
  gb_Pause();
  alert(
    'Unknown opcode: '+
    'PC='+hex(PC)+' - '+
    'OP=0x'+hex(MEMR(PC))+'\n\n'+
    gb_Dump_Caller_Stack()
  );
}
function gb_CPU_RL(n) {
  T1=FC;
  FC=(n>>7)&1;
  n=((n<<1)&0xFF)|T1;
  FN=FH=0;
  FZ=(n==0);
  gbCPUTicks=8;
  return n;
}
function gb_CPU_RLC(n) {
  FC=(n>>7)&1;
  n=((n<<1)&0xFF)|FC;
  FN=FH=0;
  FZ=(n==0);
  gbCPUTicks=8;
  return n;
}
function gb_CPU_RR(n) {
  T1=FC;
  FC=n&1;
  n=(n>>1)|(T1<<7);
  FN=FH=0;
  FZ=(n==0);
  gbCPUTicks=8;
  return n;
}
function gb_CPU_RRC(n) {
  FC=n&1;
  n=(n>>1)|(FC<<7);
  FN=FH=0;
  FZ=(n==0);
  gbCPUTicks=8;
  return n;
}
function gb_CPU_SWAP(R) {
  if (R=='H') return ''+
    'HL=((HL&0x0F00)<<4) | ((HL&0xF000)>>4) | (HL&0x00FF);'+
    'gbCPUTicks=8;';
  else if (R=='L') return ''+
    'HL=((HL&0x000F)<<4) | ((HL&0x00F0)>>4) | (HL&0xFF00);'+
    'gbCPUTicks=8;';
  else if (R=='(HL)') return ''+
  'T1=MEMR(HL);'+
  'MEMW(HL, ((T1<<4)|(T1>>4))&0xFF);'+
  'gbCPUTicks=8;';
  else return ''+
  ''+R+'=(('+R+'<<4)|('+R+'>>4))&0xFF;'+
  'gbCPUTicks=8;';  
}
function gb_CPU_ADD_A(R,C) {
  return ''+
  'FH=((RA&0x0F)+('+R+'&0x0F))>0x0F;'+
  'FC=((RA&0xFF)+('+R+'&0xFF))>0xFF;'+
  'RA=(RA+'+R+')&0xFF;'+
  'FZ=(RA==0);'+
  'FN=0;'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_ADC_A(R,C) {
  return ''+
  'T2=FC;'+
  'FH=((RA&0x0F)+('+R+'&0x0F)+T2)>0x0F;'+
  'FC=((RA&0xFF)+('+R+'&0xFF)+T2)>0xFF;'+
  'RA=(RA+'+R+'+T2)&0xFF;'+
  'FZ=(RA==0);'+
  'FN=0;'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_SUB_A(R,C) { //!!!
  if (R=='RA') return ''+
  'FH=false;'+
  'FC=false;'+
  'RA=0;'+
  'FZ=true;'+
  'FN=1;'+
  'gbCPUTicks='+C+';';
  else return ''+
  'FH=(RA&0x0F)<('+R+'&0x0F);'+
  'FC=(RA&0xFF)<('+R+'&0xFF);'+
  'RA=(RA-'+R+')&0xFF;'+
  'FZ=(RA==0);'+
  'FN=1;'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_SBC_A(R,C) {
  return ''+
  'T2=FC;'+
  'FH=((RA&0x0F)<(('+R+'&0x0F)+T2));'+
  'FC=((RA&0xFF)<(('+R+'&0xFF)+T2));'+
  'RA=(RA-'+R+'-T2)&0xFF;'+
  'FZ=(RA==0);'+
  'FN=1;'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_AND_A(R,C) {
  return ''+
  ((R=='RA')?'':'RA&='+R+';')+
  'FZ=(RA==0);'+
  'FH=1;'+
  'FN=FC=0;'+
  'gbCPUTicks='+C+';'; 
}
function gb_CPU_OR_A(R,C) {
  return ''+
  ((R=='RA')?'':'RA|='+R+';')+
  'FZ=(RA==0);'+
  'FN=FH=FC=0;'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_XOR_A(R,C) {
  return ''+
  ((R=='RA')?'RA=0;':'RA^='+R+';')+
  ((R=='RA')?'FZ=1;':'FZ=(RA==0);')+
  'FN=FH=FC=0;'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_CP_A(R,C) {
  return ''+
  'FZ=(RA=='+R+');'+
  'FN=1;'+
  'FC=RA<'+R+';'+
  'FH=(RA&0x0F)<('+R+'&0x0F);'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_INC(R,C) { //!!!
  return ''+
  ''+R+'=(++'+R+')&0xFF;'+
  'FZ=('+R+'==0);'+
  'FN=0;'+
  'FH=('+R+'&0xF)==0;'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_DEC(R,C) {
  return ''+
  ''+R+'=(--'+R+')&0xFF;'+
  'FZ=('+R+'==0);'+
  'FN=1;'+
  'FH=('+R+'&0xF)==0xF;'+
  'gbCPUTicks=4;';
}
function gb_CPU_ADD16(n1,n2) {
  FN=0;
  FH=((n1&0xFFF)+(n2&0xFFF))>0xFFF; // TODO test bit 11. Not sure on this
  n1+=n2;
  FC=n1>0xFFFF;
  n1&=0xFFFF;
  gbCPUTicks=8;
  return n1;
}
function gb_CPU_INC16(n) {
  gbCPUTicks=8;
  return (n+1)&0xFFFF;
}
function gb_CPU_JR(c) {
  if (c=='true') return ''+
  'PC+=sb(MEMR(PC))+1;'+
  'gbCPUTicks=12;';
  else return ''+
  'if ('+c+') {'+
  '  PC+=sb(MEMR(PC))+1; gbCPUTicks=12;'+
  '} else {'+
  '  PC++;'+
  '  gbCPUTicks=8;'+
  '}';
}
function gb_CPU_JP(c) {
  if (c=='true') return ''+
  'PC=(MEMR(PC+1)<<8)|MEMR(PC);'+
  'gbCPUTicks=12;';
  else return ''+
  'if ('+c+') PC=(MEMR(PC+1)<<8)|MEMR(PC);'+
  'else PC+=2;'+
  'gbCPUTicks=12;';
}
function gb_CPU_CALL(c) {
  if (c=='true') return ''+
  ((gbEnableCallerStack)?'gb_Save_Caller();':'')+
  'PC+=2;'+
  'MEMW(--SP,PC>>8);'+
  'MEMW(--SP,PC&0xFF);'+
  'PC=(MEMR(PC-1)<<8)|MEMR(PC-2);'+
  'gbCPUTicks=12;'; 
  else return ''+
  ((gbEnableCallerStack)?'gb_Save_Caller();':'')+
  'PC+=2;'+
  'if ('+c+') {'+
  '  MEMW(--SP,PC>>8);'+
  '  MEMW(--SP,PC&0xFF);'+
  '  PC=(MEMR(PC-1)<<8)|MEMR(PC-2);'+
  '}'+
  'gbCPUTicks=12;'; 
}
function gb_CPU_RST(a) {
  return ''+
  'MEMW(--SP,PC>>8);'+
  'MEMW(--SP,PC&0xFF);'+
  'PC='+a+';'+
  'gbCPUTicks=32;';
}
function gb_CPU_RET(c) { //!!!
  if (c=='true') return ''+
  'PC=(MEMR(SP+1)<<8)|MEMR(SP);'+
  'SP+=2;'+
  'gbCPUTicks=8;';
  else return ''+
  'if ('+c+') {'+
  '  PC=(MEMR(SP+1)<<8)|MEMR(SP);'+
  '  SP+=2;'+
  '}'+
  'gbCPUTicks=8;';
}
function gb_CPU_DDA() { //!!!
  return ''+
  'T1=RA;'+
  'if(FC)T1|=256;'+
  'if(FH)T1|=512;'+
  'if(FN)T1|=1024;'+
  'T1=gbDAATable[T1];'+
  'RA=T1>>8;'+
  'FZ=(T1>>7)&1;'+
  'FN=(T1>>6)&1;'+
  'FH=(T1>>5)&1;'+
  'FC=(T1>>4)&1;'+
  'gbCPUTicks=4;';
}
function gb_CPU_RLA() { //!!!
  return ''+
  'T1=FC;'+
  'FC=(RA>>7)&1;'+
  'RA=((RA<<1)&0xFF)|T1;'+
  'FN=FH=0;'+
  'FZ=(RA==0);'+ // TODO not sure. on z80 Z is not affected
  'gbCPUTicks=4;';
}  
function gb_CPU_HALT() {
  return ''+
  'if (gbIME) gbHalt=true;'+
  'else {'+
  '  gb_Pause();'+
  '  alert(\'HALT instruction with interrupts disabled.\');'+
  '}'+
  'gbCPUTicks=4;';
}
function gb_LD_MEM_R16(R,C) {
  return ''+
  'T1=(MEMR(PC+1)<<8)+MEMR(PC);'+
  'MEMW(T1++,'+R+'&0xFF);'+
  'MEMW(T1,'+R+'>>8);'+
  'PC+=2;'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_SLA_R(R, C) {
  return ''+
  'FC=('+R+'>>7)&1;'+
  ''+R+'=('+R+'<<1)&0xFF;'+
  'FN=FH=0;'+
  'FZ=('+R+'==0);'+
  'gbCPUTicks='+C+';';
}
function gb_CPU_NOP() {
  gbCPUTicks=0;
}

OP[0x00]=gb_CPU_NOP; // NOP
OP[0x01]=function(){ RC=MEMR(PC++); RB=MEMR(PC++); gbCPUTicks=12; }; // LD BC,u16
OP[0x02]=function(){ MEMW((RB<<8)|RC,RA); gbCPUTicks=8; }; // LD (BC),A
OP[0x03]=function(){ T1=gb_CPU_INC16((RB<<8)|RC); RB=T1>>8; RC=T1&0xFF; }; // INC BC
OP[0x04]=new Function(gb_CPU_INC('RB',4)); // INC B
OP[0x05]=new Function(gb_CPU_DEC('RB',4)); // DEC B
OP[0x06]=function(){ RB=MEMR(PC++); gbCPUTicks=8; }; // LD B,u8
OP[0x07]=function(){ FC=(RA>>7)&1; RA=((RA<<1)&0xFF)|FC; FN=FH=0; FZ=RA==0; gbCPUTicks=4; }; // RLCA
OP[0x08]=new Function(gb_LD_MEM_R16('HL',20)); // LD (u16),SP
OP[0x09]=function(){ HL=gb_CPU_ADD16(HL,(RB<<8)|RC); }; // ADD HL,BC
OP[0x0A]=function(){ RA=MEMR(((RB&0x00FF)<<8)|RC); gbCPUTicks=8; }; // LD A,(BC)
OP[0x0B]=function(){ var BC=((RB<<8)+RC-1)&0xFFFF; RB=BC>>8; RC=BC&0xFF; gbCPUTicks=8; }; // DEC BC
OP[0x0C]=new Function(gb_CPU_INC('RC',4)); // INC C
OP[0x0D]=new Function(gb_CPU_DEC('RC',4)); // DEC C
OP[0x0E]=function(){ RC=MEMR(PC++); gbCPUTicks=8; }; // LD C,u8;
OP[0x0F]=function(){ FC=RA&1; RA=(RA>>1)|(FC<<7); FN=0; FH=0; FZ=RA==0; gbCPUTicks=4; }; // RRCA
OP[0x10]=function(){ gb_Pause();alert('STOP instruction\n'+gb_Dump_Caller_Stack()); gbCPUTicks=4; }; // STOP
OP[0x11]=function(){ RE=MEMR(PC++); RD=MEMR(PC++); gbCPUTicks=12; }; // LD DE,u16
OP[0x12]=function(){ MEMW((RD<<8)|RE,RA); gbCPUTicks=8; }; // LD (DE),A
OP[0x13]=function(){ T1=gb_CPU_INC16((RD<<8)|RE); RD=T1>>8; RE=T1&0xFF; }; // INC DE
OP[0x14]=new Function(gb_CPU_INC('RD',4)); // INC D
OP[0x15]=new Function(gb_CPU_DEC('RD',4)); // DEC D
OP[0x16]=function(){ RD=MEMR(PC++); gbCPUTicks=8; }; // LD D,u8
OP[0x17]=new Function(gb_CPU_RLA()); // RLA
OP[0x18]=new Function(gb_CPU_JR('true')); // JR s8
OP[0x19]=function(){ HL=gb_CPU_ADD16(HL,(RD<<8)|RE); }; // ADD HL,DE
OP[0x1A]=function(){ RA=MEMR(((RD&0x00FF)<<8)|RE); gbCPUTicks=8; }; // LD A,(DE)
OP[0x1B]=function(){ var DE=((RD<<8)+RE-1)&0xFFFF; RD=DE>>8; RE=DE&0xFF; gbCPUTicks=8; }; // DEC DE
OP[0x1C]=new Function(gb_CPU_INC('RE',4)); // INC E
OP[0x1D]=new Function(gb_CPU_DEC('RE',4)); // DEC E
OP[0x1E]=function(){ RE=MEMR(PC++); gbCPUTicks=8; }; // LD E,u8;
OP[0x1F]=function(){ T1=FC; FC=RA&1; RA=(RA>>1)|(T1<<7); FN=0; FH=0; FZ=RA==0; gbCPUTicks=4; }; // RRA
OP[0x20]=new Function(gb_CPU_JR('!FZ')); // JR NZ,s8
OP[0x21]=function(){ HL=(MEMR(PC+1)<<8)|MEMR(PC); PC+=2; gbCPUTicks=12; }; // LD HL,u16;
OP[0x22]=function(){ MEMW(HL,RA); HL=(++HL)&0xFFFF; gbCPUTicks=8; }; // LDI (HL),A
OP[0x23]=function(){ HL=gb_CPU_INC16(HL); }; // INC HL
OP[0x24]=new Function('T1=HL>>8;'+gb_CPU_INC('T1',4)+'HL=(HL&0x00FF)|(T1<<8);'); // INC H
OP[0x25]=new Function('T1=HL>>8;'+gb_CPU_DEC('T1',4)+'HL=(HL&0x00FF)|(T1<<8);'); // DEC H
OP[0x26]=function(){ HL&=0x00FF; HL|=MEMR(PC++)<<8; gbCPUTicks=8; }; // LD H,u8
OP[0x27]=new Function(gb_CPU_DDA()); // DAA
OP[0x28]=new Function(gb_CPU_JR('FZ')); // JR Z,s8
OP[0x29]=function(){ HL=gb_CPU_ADD16(HL,HL); }; // ADD HL,HL
OP[0x2A]=function(){ RA=MEMR(HL); HL=(HL+1)&0xFFFF; gbCPUTicks=8; }; // LDI A,(HL)
OP[0x2B]=function(){ HL=(HL-1)&0xFFFF; gbCPUTicks=8; }; // DEC HL
OP[0x2C]=new Function('T1=HL&0xFF;'+gb_CPU_INC('T1',4)+'HL=(HL&0xFF00)|T1;'); // INC L
OP[0x2D]=new Function('T1=HL&0xFF;'+gb_CPU_DEC('T1',4)+'HL=(HL&0xFF00)|T1;'); // DEC L
OP[0x2E]=function(){ HL&=0xFF00; HL|=MEMR(PC++); gbCPUTicks=8; }; // LD L,u8
OP[0x2F]=function(){ RA^=0xFF; FN=1; FH=1; gbCPUTicks=4; }; // CPL
OP[0x30]=new Function(gb_CPU_JR('!FC')); // JR NC,s8
OP[0x31]=function(){ SP=(MEMR(PC+1)<<8)|MEMR(PC); PC+=2; gbCPUTicks=12; }; // LD SP,u16
OP[0x32]=function(){ MEMW(HL,RA); HL=(HL-1)&0xFFFF; gbCPUTicks=8; }; // LDD (HL),A
OP[0x33]=function(){ SP=gb_CPU_INC16(SP); }; // INC SP
OP[0x34]=new Function('T1=MEMR(HL);'+gb_CPU_INC('T1',12)+'MEMW(HL,T1);'); // INC (HL)
OP[0x35]=new Function('T1=MEMR(HL);'+gb_CPU_DEC('T1',12)+'MEMW(HL,T1);'); // DEC (HL)
OP[0x36]=function(){ MEMW(HL,MEMR(PC++)); gbCPUTicks=12; }; // LD (HL),u8;
OP[0x37]=function(){ FC=1; FN=0; FH=0; gbCPUTicks=4; }; // SCF
OP[0x38]=new Function(gb_CPU_JR('FC')); // JR C,s8
OP[0x39]=function(){ HL=gb_CPU_ADD16(HL,SP); }; // ADD HL,SP
OP[0x3A]=function(){ RA=MEMR(HL); HL=(HL-1)&0xFFFF; gbCPUTicks=8; }; // LDD A,(HL)
OP[0x3B]=function(){ SP=(SP-1)&0xFFFF; gbCPUTicks=8; }; // DEC SP
OP[0x3C]=new Function(gb_CPU_INC('RA',4)); // INC A
OP[0x3D]=new Function(gb_CPU_DEC('RA',4)); // DEC A
OP[0x3E]=function(){ RA=MEMR(PC++); gbCPUTicks=8; }; // LD A,u8;
OP[0x3F]=function(){ FC=(~FC)&1; FN=FH=0; gbCPUTicks=4; }; // CCF
OP[0x40]=gb_CPU_NOP; // LD B,B
OP[0x41]=function(){ RB=RC; gbCPUTicks=4; }; // LD B,C
OP[0x42]=function(){ RB=RD; gbCPUTicks=4; }; // LD B,D
OP[0x43]=function(){ RB=RE; gbCPUTicks=4; }; // LD B,E
OP[0x44]=function(){ RB=HL>>8; gbCPUTicks=4; }; // LD B,H
OP[0x45]=function(){ RB=HL&0xFF; gbCPUTicks=4; }; // LD B,L
OP[0x46]=function(){ RB=MEMR(HL); gbCPUTicks=8; }; // LD B,(HL)
OP[0x47]=function(){ RB=RA; gbCPUTicks=4; }; // LD B,A
OP[0x48]=function(){ RC=RB; gbCPUTicks=4; }; // LD C,B
OP[0x49]=gb_CPU_NOP; // LD C,C
OP[0x4A]=function(){ RC=RD; gbCPUTicks=4; }; // LD C,D
OP[0x4B]=function(){ RC=RE; gbCPUTicks=4; }; // LD C,E
OP[0x4C]=function(){ RC=HL>>8; gbCPUTicks=4; }; // LD C,H
OP[0x4D]=function(){ RC=HL&0xFF; gbCPUTicks=4; }; // LD C,L
OP[0x4E]=function(){ RC=MEMR(HL); gbCPUTicks=8; }; // LD C,(HL)
OP[0x4F]=function(){ RC=RA; gbCPUTicks=4; }; // LD C,A
OP[0x50]=function(){ RD=RB; gbCPUTicks=4; }; // LD D,B
OP[0x51]=function(){ RD=RC; gbCPUTicks=4; }; // LD D,C
OP[0x52]=gb_CPU_NOP; // LD D,D
OP[0x53]=function(){ RD=RE; gbCPUTicks=4; }; // LD D,E
OP[0x54]=function(){ RD=HL>>8; gbCPUTicks=4; }; // LD D,H
OP[0x55]=function(){ RD=HL&0xFF; gbCPUTicks=4; }; // LD D,L
OP[0x56]=function(){ RD=MEMR(HL); gbCPUTicks=8; }; // LD D,(HL)
OP[0x57]=function(){ RD=RA; gbCPUTicks=4; }; // LD D,A
OP[0x58]=function(){ RE=RB; gbCPUTicks=4; }; // LD E,B
OP[0x59]=function(){ RE=RC; gbCPUTicks=4; }; // LD E,C
OP[0x5A]=function(){ RE=RD; gbCPUTicks=4; }; // LD E,D
OP[0x5B]=gb_CPU_NOP; // LD E,E
OP[0x5C]=function(){ RE=HL>>8; gbCPUTicks=4; }; // LD E,H
OP[0x5D]=function(){ RE=HL&0xFF; gbCPUTicks=4; }; // LD E,L
OP[0x5E]=function(){ RE=MEMR(HL); gbCPUTicks=8; }; // LD E,(HL)
OP[0x5F]=function(){ RE=RA; gbCPUTicks=4; }; // LD E,A
OP[0x60]=function(){ HL=(HL&0x00FF)|(RB<<8); gbCPUTicks=4; }; // LD H,B
OP[0x61]=function(){ HL=(HL&0x00FF)|(RC<<8); gbCPUTicks=4; }; // LD H,C
OP[0x62]=function(){ HL=(HL&0x00FF)|(RD<<8); gbCPUTicks=4; }; // LD H,D
OP[0x63]=function(){ HL=(HL&0x00FF)|(RE<<8); gbCPUTicks=4; }; // LD H,E
OP[0x64]=gb_CPU_NOP; // LD H,H
OP[0x65]=function(){ HL=(HL&0x00FF)|((HL&0xFF)<<8); gbCPUTicks=4; }; // LD H,L
OP[0x66]=function(){ HL=(HL&0x00FF)|(MEMR(HL)<<8); gbCPUTicks=8; }; // LD H,(HL)
OP[0x67]=function(){ HL=(RA<<8)|(HL&0xFF); gbCPUTicks=4; }; // LD H,A
OP[0x68]=function(){ HL=(HL&0xFF00)|RB; gbCPUTicks=4; }; // LD L,B
OP[0x69]=function(){ HL=(HL&0xFF00)|RC; gbCPUTicks=4; }; // LD L,C
OP[0x6A]=function(){ HL=(HL&0xFF00)|RD; gbCPUTicks=4; }; // LD L,D
OP[0x6B]=function(){ HL=(HL&0xFF00)|RE; gbCPUTicks=4; }; // LD L,E
OP[0x6C]=function(){ HL=(HL&0xFF00)|(HL>>8); gbCPUTicks=4; }; // LD L,H
OP[0x6D]=gb_CPU_NOP; // LD L,L
OP[0x6E]=function(){ HL=(HL&0xFF00)|(MEMR(HL)); gbCPUTicks=8; }; // LD L,(HL)
OP[0x6F]=function(){ HL=RA|(HL&0xFF00); gbCPUTicks=4; }; // LD L,A
OP[0x70]=function(){ MEMW(HL,RB); gbCPUTicks=8; }; // LD (HL),B
OP[0x71]=function(){ MEMW(HL,RC); gbCPUTicks=8; }; // LD (HL),C
OP[0x72]=function(){ MEMW(HL,RD); gbCPUTicks=8; }; // LD (HL),D
OP[0x73]=function(){ MEMW(HL,RE); gbCPUTicks=8; }; // LD (HL),E
OP[0x74]=function(){ MEMW(HL,HL>>8); gbCPUTicks=8; }; // LD (HL),H
OP[0x75]=function(){ MEMW(HL,HL&0x00FF); gbCPUTicks=8; }; // LD (HL),L
OP[0x76]=new Function(gb_CPU_HALT()); // HALT
OP[0x77]=function(){ MEMW(HL,RA); gbCPUTicks=8; }; // LD (HL),A
OP[0x78]=function(){ RA=RB; gbCPUTicks=4; }; // LD A,B
OP[0x79]=function(){ RA=RC; gbCPUTicks=4; }; // LD A,C
OP[0x7A]=function(){ RA=RD; gbCPUTicks=4; }; // LD A,D
OP[0x7B]=function(){ RA=RE; gbCPUTicks=4; }; // LD A,E
OP[0x7C]=function(){ RA=HL>>8; gbCPUTicks=4; }; // LD A,H
OP[0x7D]=function(){ RA=HL&0xFF; gbCPUTicks=4; }; // LD A,L
OP[0x7E]=function(){ RA=MEMR(HL); gbCPUTicks=8; }; // LD A,(HL)
OP[0x7F]=gb_CPU_NOP; // LD A,A
OP[0x80]=new Function(gb_CPU_ADD_A('RB',4)); // ADD A,B
OP[0x81]=new Function(gb_CPU_ADD_A('RC',4)); // ADD A,C
OP[0x82]=new Function(gb_CPU_ADD_A('RD',4)); // ADD A,D
OP[0x83]=new Function(gb_CPU_ADD_A('RE',4)); // ADD A,E
OP[0x84]=new Function('T1=HL>>8;'+gb_CPU_ADD_A('T1',4)); // ADD A,H
OP[0x85]=new Function('T1=HL&0xFF;'+gb_CPU_ADD_A('T1',4)); // ADD A,L
OP[0x86]=new Function('T1=MEMR(HL);'+gb_CPU_ADD_A('T1',8)); // ADD A,(HL)
OP[0x87]=new Function(gb_CPU_ADD_A('RA',4)); // ADD A,A
OP[0x88]=new Function(gb_CPU_ADC_A('RB',4)); // ADC A,B
OP[0x89]=new Function(gb_CPU_ADC_A('RC',4)); // ADC A,C
OP[0x8A]=new Function(gb_CPU_ADC_A('RD',4)); // ADC A,D
OP[0x8B]=new Function(gb_CPU_ADC_A('RE',4)); // ADC A,E
OP[0x8C]=new Function('T1=HL>>8;'+gb_CPU_ADC_A('T1',4)); // ADC A,H
OP[0x8D]=new Function('T1=HL&0xFF;'+gb_CPU_ADC_A('T1',4)); // ADC A,L
OP[0x8E]=new Function('T1=MEMR(HL);'+gb_CPU_ADC_A('T1',8)); // ADC A,(HL)
OP[0x8F]=new Function(gb_CPU_ADC_A('RA',4)); // ADC A,A
OP[0x90]=new Function(gb_CPU_SUB_A('RB',4)); // SUB B
OP[0x91]=new Function(gb_CPU_SUB_A('RC',4)); // SUB C
OP[0x92]=new Function(gb_CPU_SUB_A('RD',4)); // SUB D
OP[0x93]=new Function(gb_CPU_SUB_A('RE',4)); // SUB E
OP[0x94]=new Function('T1=HL>>8;'+gb_CPU_SUB_A('T1',4)); // SUB H
OP[0x95]=new Function('T1=HL&0xFF;'+gb_CPU_SUB_A('T1',4)); // SUB L
OP[0x96]=new Function('T1=MEMR(HL);'+gb_CPU_SUB_A('T1',8)); // SUB (HL)
OP[0x97]=new Function(gb_CPU_SUB_A('RA',4)); // SUB A
OP[0x98]=new Function(gb_CPU_SBC_A('RB',4)); // SBC A,B
OP[0x99]=new Function(gb_CPU_SBC_A('RC',4)); // SBC A,C
OP[0x9A]=new Function(gb_CPU_SBC_A('RD',4)); // SBC A,D
OP[0x9B]=new Function(gb_CPU_SBC_A('RE',4)); // SBC A,E
OP[0x9C]=new Function('T1=HL>>8;'+gb_CPU_SBC_A('T1',4)); // SBC A,H
OP[0x9D]=new Function('T1=HL&0xFF;'+gb_CPU_SBC_A('T1',4)); // SBC A,L
OP[0x9E]=new Function('T1=MEMR(HL);'+gb_CPU_SBC_A('T1',8)); // SBC A,(HL)
OP[0x9F]=new Function(gb_CPU_SBC_A('RA',4)); // SBC A,A
OP[0xA0]=new Function(gb_CPU_AND_A('RB',4)); // AND B
OP[0xA1]=new Function(gb_CPU_AND_A('RC',4)); // AND C
OP[0xA2]=new Function(gb_CPU_AND_A('RD',4)); // AND D
OP[0xA3]=new Function(gb_CPU_AND_A('RE',4)); // AND E
OP[0xA4]=new Function(gb_CPU_AND_A('HL>>8',4)); // AND H
OP[0xA5]=new Function(gb_CPU_AND_A('HL&0xFF',4)); // AND L
OP[0xA6]=new Function(gb_CPU_AND_A('MEMR(HL)',8)); // AND (HL)
OP[0xA7]=new Function(gb_CPU_AND_A('RA',4)); // AND A
OP[0xA8]=new Function(gb_CPU_XOR_A('RB',4)); // XOR B
OP[0xA9]=new Function(gb_CPU_XOR_A('RC',4)); // XOR C
OP[0xAA]=new Function(gb_CPU_XOR_A('RD',4)); // XOR D
OP[0xAB]=new Function(gb_CPU_XOR_A('RE',4)); // XOR E
OP[0xAC]=new Function(gb_CPU_XOR_A('HL>>8',4)); // XOR H
OP[0xAD]=new Function(gb_CPU_XOR_A('HL&0xFF',4)); // XOR L
OP[0xAE]=new Function(gb_CPU_XOR_A('MEMR(HL)',8)); // XOR (HL)
OP[0xAF]=new Function(gb_CPU_XOR_A('RA',4)); // XOR A
OP[0xB0]=new Function(gb_CPU_OR_A('RB',4)); // OR B
OP[0xB1]=new Function(gb_CPU_OR_A('RC',4)); // OR C
OP[0xB2]=new Function(gb_CPU_OR_A('RD',4)); // OR D
OP[0xB3]=new Function(gb_CPU_OR_A('RE',4)); // OR E
OP[0xB4]=new Function(gb_CPU_OR_A('HL>>8',4)); // OR H
OP[0xB5]=new Function(gb_CPU_OR_A('HL&0xFF',4)); // OR L
OP[0xB6]=new Function(gb_CPU_OR_A('MEMR(HL)',8)); // OR (HL)
OP[0xB7]=new Function(gb_CPU_OR_A('RA',4)); // OR A
OP[0xB8]=new Function(gb_CPU_CP_A('RB',4)); // CP B
OP[0xB9]=new Function(gb_CPU_CP_A('RC',4)); // CP C
OP[0xBA]=new Function(gb_CPU_CP_A('RD',4)); // CP D
OP[0xBB]=new Function(gb_CPU_CP_A('RE',4)); // CP E
OP[0xBC]=new Function('T1=HL>>8;'+gb_CPU_CP_A('T1',4)); // CP H
OP[0xBD]=new Function('T1=HL&0xFF;'+gb_CPU_CP_A('T1',4)); // CP L
OP[0xBE]=new Function('T1=MEMR(HL);'+gb_CPU_CP_A('T1',8)); // CP (HL)
OP[0xBF]=new Function(gb_CPU_CP_A('RA',4)); // CP A
OP[0xC0]=new Function(gb_CPU_RET('!FZ')); // RET NZ
OP[0xC1]=function(){ RC=MEMR(SP++); RB=MEMR(SP++); gbCPUTicks=12; }; // POP BC
OP[0xC2]=new Function(gb_CPU_JP('!FZ')); // JP NZ,u16
OP[0xC3]=new Function(gb_CPU_JP('true')); // JP u16;
OP[0xC4]=new Function(gb_CPU_CALL('!FZ')); // CALL NZ,u16
OP[0xC5]=function(){ MEMW(--SP,RB); MEMW(--SP,RC); gbCPUTicks=16; }; // PUSH BC
OP[0xC6]=new Function('T1=MEMR(PC++);'+gb_CPU_ADD_A('T1',8)); // ADD A,u8
OP[0xC7]=new Function(gb_CPU_RST('0x00')); // RST 0x00
OP[0xC8]=new Function(gb_CPU_RET('FZ')); // RET Z
OP[0xC9]=new Function(gb_CPU_RET('true')); // RET
OP[0xCA]=new Function(gb_CPU_JP('FZ')); // JP Z,u16;
OP[0xCB]=function(){ OPCB[MEMR(PC++)](); };
OP[0xCC]=new Function(gb_CPU_CALL('FZ')); // CALL Z,u16
OP[0xCD]=new Function(gb_CPU_CALL('true')); // CALL u16
OP[0xCE]=new Function('T1=MEMR(PC++);'+gb_CPU_ADC_A('T1',4)); // ADC A,u8;
OP[0xCF]=new Function(gb_CPU_RST('0x08')); // RST 0x08
OP[0xD0]=new Function(gb_CPU_RET('!FC')); // RET NC
OP[0xD1]=function(){ RE=MEMR(SP++); RD=MEMR(SP++); gbCPUTicks=12; }; // POP DE
OP[0xD2]=new Function(gb_CPU_JP('!FC')); // JP NC,u16
OP[0xD3]=gb_CPU_UNK;
OP[0xD4]=new Function(gb_CPU_CALL('!FC')); // CALL NC,u16
OP[0xD5]=function(){ MEMW(--SP,RD); MEMW(--SP,RE); gbCPUTicks=16; }; // PUSH DE
OP[0xD6]=new Function('T1=MEMR(PC++);'+gb_CPU_SUB_A('T1',8)); // SUB u8
OP[0xD7]=new Function(gb_CPU_RST('0x10')); // RST 0x10
OP[0xD8]=new Function(gb_CPU_RET('FC')); // RET C
OP[0xD9]=new Function(gb_CPU_RET('true')+'gbIME=true;'); // RETI
OP[0xDA]=new Function(gb_CPU_JP('FC')); // JP C,u16
OP[0xDB]=gb_CPU_UNK;
OP[0xDC]=new Function(gb_CPU_CALL('FC')); // CALL C,u16
OP[0xDD]=gb_CPU_UNK;
OP[0xDE]=new Function('T1=MEMR(PC++);'+gb_CPU_SBC_A('T1',8)); // SBC A,u8;
OP[0xDF]=new Function(gb_CPU_RST('0x18')); // RST 0x18
OP[0xE0]=function(){ MEMW(0xFF00+MEMR(PC++),RA); gbCPUTicks=12; }; // LD (0xFF00+u8),A
OP[0xE1]=function(){ T1=MEMR(SP++); HL=(MEMR(SP++)<<8)|T1; gbCPUTicks=12; }; // POP HL
OP[0xE2]=function(){ MEMW(0xFF00+RC,RA); gbCPUTicks=8; }; // LD (0xFF00+C),A
OP[0xE3]=gb_CPU_UNK;
OP[0xE4]=gb_CPU_UNK;
OP[0xE5]=function(){ MEMW(--SP,HL>>8); MEMW(--SP,HL&0xFF); gbCPUTicks=16; }; // PUSH HL
OP[0xE6]=new Function(gb_CPU_AND_A('MEMR(PC++)',8)); // AND u8
OP[0xE7]=new Function(gb_CPU_RST('0x20')); // RST 0x20
OP[0xE8]=function(){ SP=gb_CPU_ADD16(SP,sb(MEMR(PC++))); gbCPUTicks+=8; }; // ADD SP,u8
OP[0xE9]=function(){ PC=HL; gbCPUTicks=4; }; // JP (HL)
OP[0xEA]=function(){ MEMW((MEMR(PC+1)<<8)|MEMR(PC),RA); PC+=2; gbCPUTicks=16; }; // LD (u16),A
OP[0xEB]=gb_CPU_UNK;
OP[0xEC]=gb_CPU_UNK;
OP[0xED]=gb_CPU_UNK;
OP[0xEE]=new Function(gb_CPU_XOR_A('MEMR(PC++)',8)); // XOR u8
OP[0xEF]=new Function(gb_CPU_RST('0x28')); // RST 0x28
OP[0xF0]=function(){ RA=MEMR(0xFF00+MEMR(PC++)); gbCPUTicks=12; }; // LD A,(0xFF00+u8)
OP[0xF1]=function(){ T1=MEMR(SP++); RA=MEMR(SP++); FZ=(T1>>7)&1; FN=(T1>>6)&1; FH=(T1>>5)&1; FC=(T1>>4)&1; gbCPUTicks=12; }; // POP AF
OP[0xF2]=function(){ RA=MEMR(0xFF00+RC); gbCPUTicks=8; }; // LD A,(0xFF00+C)
OP[0xF3]=function(){ gbIME=false; gbCPUTicks=4; }; // DI
OP[0xF4]=gb_CPU_UNK;
OP[0xF5]=function(){ MEMW(--SP,RA); MEMW(--SP,(FZ<<7)|(FN<<6)|(FH<<5)|(FC<<4)); gbCPUTicks=16; }; // PUSH AF
OP[0xF6]=new Function(gb_CPU_OR_A('MEMR(PC++)',8)); // OR u8;
OP[0xF7]=new Function(gb_CPU_RST('0x30')); // RST 0x30
OP[0xF8]=function(){ var n=MEMR(PC++); HL=SP+sb(n); FZ=0; RN=0; FH=(((SP&0x0F)+(n&0x0F))>0x0F); FC=(((SP&0xFF)+(n&0xFF))>0xFF); gbCPUTicks=12; }; // LD HL,SP+u8;
OP[0xF9]=function(){ SP=HL; gbCPUTicks=8; }; // LD SP,HL
OP[0xFA]=function(){ RA=MEMR((MEMR(PC+1)<<8)|MEMR(PC)); PC+=2; gbCPUTicks=16; }; // LD A,(u16)
OP[0xFB]=function(){ gbIME=true; gbCPUTicks=4; }; // EI
OP[0xFC]=gb_CPU_UNK;
OP[0xFD]=gb_CPU_UNK;
OP[0xFE]=new Function('T1=MEMR(PC++);'+gb_CPU_CP_A('T1',8)); // CP u8
OP[0xFF]=new Function(gb_CPU_RST('0x38')); // RST 0x38

OPCB[0x00]=function(){ RB=gb_CPU_RLC(RB); };
OPCB[0x01]=function(){ RC=gb_CPU_RLC(RC); };
OPCB[0x02]=function(){ RD=gb_CPU_RLC(RD); };
OPCB[0x03]=function(){ RE=gb_CPU_RLC(RE); };
OPCB[0x04]=function(){ HL=(HL&0x00FF)|(gb_CPU_RLC(HL>>8)<<8); };
OPCB[0x05]=function(){ HL=(HL&0xFF00)|gb_CPU_RLC(HL&0xFF); };
OPCB[0x06]=function(){ MEMW(HL,gb_CPU_RLC(MEMR(HL))); gbCPUTicks+=8; };
OPCB[0x07]=function(){ RA=gb_CPU_RLC(RA); };
OPCB[0x08]=function(){ RB=gb_CPU_RRC(RB); };
OPCB[0x09]=function(){ RC=gb_CPU_RRC(RC); };
OPCB[0x0A]=function(){ RD=gb_CPU_RRC(RD); };
OPCB[0x0B]=function(){ RE=gb_CPU_RRC(RE); };
OPCB[0x0C]=function(){ HL=(HL&0x00FF)|(gb_CPU_RRC(HL>>8)<<8); };
OPCB[0x0D]=function(){ HL=(HL&0xFF00)|gb_CPU_RRC(HL&0xFF); };
OPCB[0x0E]=function(){ MEMW(HL,gb_CPU_RRC(MEMR(HL))); gbCPUTicks+=8; };
OPCB[0x0F]=function(){ RA=gb_CPU_RRC(RA); };
OPCB[0x10]=function(){ RB=gb_CPU_RL(RB); };
OPCB[0x11]=function(){ RC=gb_CPU_RL(RC); };
OPCB[0x12]=function(){ RD=gb_CPU_RL(RD); };
OPCB[0x13]=function(){ RE=gb_CPU_RL(RE); };
OPCB[0x14]=function(){ HL=(HL&0x00FF)|(gb_CPU_RL(HL>>8)<<8); };
OPCB[0x15]=function(){ HL=(HL&0xFF00)|gb_CPU_RL(HL&0xFF); };
OPCB[0x16]=function(){ MEMW(HL,gb_CPU_RL(MEMR(HL))); gbCPUTicks+=8; };
OPCB[0x17]=function(){ RA=gb_CPU_RL(RA); };
OPCB[0x18]=function(){ RB=gb_CPU_RR(RB); };
OPCB[0x19]=function(){ RC=gb_CPU_RR(RC); };
OPCB[0x1A]=function(){ RD=gb_CPU_RR(RD); };
OPCB[0x1B]=function(){ RE=gb_CPU_RR(RE); };
OPCB[0x1C]=function(){ HL=(HL&0x00FF)|(gb_CPU_RR(HL>>8)<<8); };
OPCB[0x1D]=function(){ HL=(HL&0xFF00)|gb_CPU_RR(HL&0xFF); };
OPCB[0x1E]=function(){ MEMW(HL,gb_CPU_RR(MEMR(HL))); gbCPUTicks+=8; };
OPCB[0x1F]=function(){ RA=gb_CPU_RR(RA); };
OPCB[0x20]=new Function(gb_CPU_SLA_R('RB',8)); // SLA B
OPCB[0x21]=new Function(gb_CPU_SLA_R('RC',8)); // SLA C
OPCB[0x22]=new Function(gb_CPU_SLA_R('RD',8)); // SLA D
OPCB[0x23]=new Function(gb_CPU_SLA_R('RE',8)); // SLA E
OPCB[0x24]=new Function('T1=HL>>8;'+gb_CPU_SLA_R('T1',8)+'HL=(T1<<8)|(HL&0x00FF);'); // SLA H
OPCB[0x25]=new Function('T1=HL&0xFF;'+gb_CPU_SLA_R('T1',8)+'HL=(HL&0xFF00)|T1;'); // SLA L
OPCB[0x26]=new Function('T1=MEMR(HL);'+gb_CPU_SLA_R('T1',16)+'MEMW(HL,T1);'); // SLA (HL)
OPCB[0x27]=new Function(gb_CPU_SLA_R('RA',8)); // SLA A
OPCB[0x28]=function(){ FC=RB&1; RB=(RB>>1)|(RB&0x80); FN=0;FH=0;FZ=RB==0; gbCPUTicks=8; }; // SRA n
OPCB[0x29]=function(){ FC=RC&1; RC=(RC>>1)|(RC&0x80); FN=0;FH=0;FZ=RC==0; gbCPUTicks=8; }; // SRA n
OPCB[0x2A]=function(){ FC=RD&1;RD=(RD>>1)|(RD&0x80); FN=0;FH=0;FZ=RD==0; gbCPUTicks=8; }; // SRA n
OPCB[0x2B]=function(){ FC=RE&1;RE=(RE>>1)|(RE&0x80); FN=0;FH=0;FZ=RE==0; gbCPUTicks=8; }; // SRA n
OPCB[0x2C]=function(){ var H=HL>>8; FC=H&1; H=(H>>1)|(H&0x80); FN=0;FH=0;FZ=H==0; HL=(H<<8)|(HL&0x00FF); gbCPUTicks=8; }; // SRA n
OPCB[0x2D]=function(){ var L=HL&0xFF; FC=L&1; L=(L>>1)|(L&0x80); FN=0;FH=0;FZ=L==0; HL=(HL&0xFF00)|L; gbCPUTicks=8; }; // SRA n
OPCB[0x2E]=function(){ var M=MEMR(HL); FC=M&1; M=(M>>1)|(M&0x80); FN=0;FH=0;FZ=M==0; MEMW(HL,M); gbCPUTicks=16; }; // SRA n
OPCB[0x2F]=function(){ FC=RA&1; RA=(RA>>1)|(RA&0x80); FN=0;FH=0;FZ=RA==0; gbCPUTicks=8; }; // SRA n
OPCB[0x30]=new Function(gb_CPU_SWAP('RB'));
OPCB[0x31]=new Function(gb_CPU_SWAP('RC'));
OPCB[0x32]=new Function(gb_CPU_SWAP('RD'));
OPCB[0x33]=new Function(gb_CPU_SWAP('RE'));
OPCB[0x34]=new Function(gb_CPU_SWAP('H'));
OPCB[0x35]=new Function(gb_CPU_SWAP('L'));
OPCB[0x36]=new Function(gb_CPU_SWAP('(HL)'));
OPCB[0x37]=new Function(gb_CPU_SWAP('RA'));
OPCB[0x38]=function(){ FC=RB&1; RB=RB>>1; FN=0;FH=0;FZ=RB==0; gbCPUTicks=8; }; // SRL n
OPCB[0x39]=function(){ FC=RC&1; RC=RC>>1; FN=0;FH=0;FZ=RC==0; gbCPUTicks=8; }; // SRL n
OPCB[0x3A]=function(){ FC=RD&1; RD=RD>>1; FN=0;FH=0;FZ=RD==0; gbCPUTicks=8; }; // SRL n
OPCB[0x3B]=function(){ FC=RE&1; RE=RE>>1; FN=0;FH=0;FZ=RE==0; gbCPUTicks=8; }; // SRL n
OPCB[0x3C]=function(){ var H=HL>>8; FC=H&1; H=H>>1; FN=0;FH=0;FZ=H==0; HL=(H<<8)|(HL&0x00FF); gbCPUTicks=8; }; // SRL n
OPCB[0x3D]=function(){ var L=HL&0xFF; FC=L&1; L=L>>1; FN=0;FH=0;FZ=L==0; HL=(HL&0xFF00)|L; gbCPUTicks=8; }; // SRL n
OPCB[0x3E]=function(){ var M=MEMR(HL); FC=M&1; M=M>>1; FN=0;FH=0;FZ=M==0; MEMW(HL,M); gbCPUTicks=16; }; // SRL n
OPCB[0x3F]=function(){ FC=RA&1; RA=RA>>1; FN=0;FH=0;FZ=RA==0; gbCPUTicks=8; }; // SRL n

for (var i=0;i<8;i++) {
  var o=(1<<6)|(i<<3);
  // BIT n,r - CB 01 xxx xxx - CB 01 bit reg
  OPCB[o|7]=new Function("FZ=!(RA&"+(1<<i)+");FN=0;FH=1; gbCPUTicks=8;");
  MNCB[o|7]=new Function("return 'BIT "+i+",A';");
  OPCB[o|0]=new Function("FZ=!(RB&"+(1<<i)+");FN=0;FH=1; gbCPUTicks=8;");
  MNCB[o|0]=new Function("return 'BIT "+i+",B';");
  OPCB[o|1]=new Function("FZ=!(RC&"+(1<<i)+");FN=0;FH=1; gbCPUTicks=8;");
  MNCB[o|1]=new Function("return 'BIT "+i+",C';");
  OPCB[o|2]=new Function("FZ=!(RD&"+(1<<i)+");FN=0;FH=1; gbCPUTicks=8;");
  MNCB[o|2]=new Function("return 'BIT "+i+",D';");
  OPCB[o|3]=new Function("FZ=!(RE&"+(1<<i)+");FN=0;FH=1; gbCPUTicks=8;");
  MNCB[o|3]=new Function("return 'BIT "+i+",E';");
  OPCB[o|4]=new Function("FZ=!(HL&"+(256<<i)+");FN=0;FH=1; gbCPUTicks=8;");
  MNCB[o|4]=new Function("return 'BIT "+i+",H';");
  OPCB[o|5]=new Function("FZ=!(HL&"+(1<<i)+");FN=0;FH=1; gbCPUTicks=8;");
  MNCB[o|5]=new Function("return 'BIT "+i+",L';");
  OPCB[o|6]=new Function("FZ=!(MEMR(HL)&"+(1<<i)+");FN=0;FH=1; gbCPUTicks=16;");
  MNCB[o|6]=new Function("return 'BIT "+i+",(HL)';");
  // RES n,r - CB 10 xxx xxx - CB 10 bit reg
  o=(2<<6)|(i<<3);
  OPCB[o|7]=new Function("RA&="+((~(1<<i))&0xFF)+"; gbCPUTicks=8;");
  MNCB[o|7]=new Function("return 'RES "+i+",A';");
  OPCB[o|0]=new Function("RB&="+((~(1<<i))&0xFF)+"; gbCPUTicks=8;");
  MNCB[o|0]=new Function("return 'RES "+i+",B';");
  OPCB[o|1]=new Function("RC&="+((~(1<<i))&0xFF)+"; gbCPUTicks=8;");
  MNCB[o|1]=new Function("return 'RES "+i+",C';");
  OPCB[o|2]=new Function("RD&="+((~(1<<i))&0xFF)+"; gbCPUTicks=8;");
  MNCB[o|2]=new Function("return 'RES "+i+",D';");
  OPCB[o|3]=new Function("RE&="+((~(1<<i))&0xFF)+"; gbCPUTicks=8;");
  MNCB[o|3]=new Function("return 'RES "+i+",E';");
  OPCB[o|4]=new Function("HL&="+((~(256<<i))&0xFFFF)+"; gbCPUTicks=8;");
  MNCB[o|4]=new Function("return 'RES "+i+",H';");
  OPCB[o|5]=new Function("HL&="+((~(1<<i))&0xFFFF)+"; gbCPUTicks=8;");
  MNCB[o|5]=new Function("return 'RES "+i+",L';");
  OPCB[o|6]=new Function("MEMW(HL,MEMR(HL)&"+((~(1<<i))&0xFF)+"); gbCPUTicks=16;");
  MNCB[o|6]=new Function("return 'RES "+i+",(HL)';");
  // SET n,r - CB 11 xxx xxx - CB 11 bit reg
  o=(3<<6)|(i<<3);
  OPCB[o|7]=new Function("RA|="+(1<<i)+"; gbCPUTicks=8;");
  MNCB[o|7]=new Function("return 'SET "+i+",A';");
  OPCB[o|0]=new Function("RB|="+(1<<i)+"; gbCPUTicks=8;");
  MNCB[o|0]=new Function("return 'SET "+i+",B';");
  OPCB[o|1]=new Function("RC|="+(1<<i)+"; gbCPUTicks=8;");
  MNCB[o|1]=new Function("return 'SET "+i+",C';");
  OPCB[o|2]=new Function("RD|="+(1<<i)+"; gbCPUTicks=8;");
  MNCB[o|2]=new Function("return 'SET "+i+",D';");
  OPCB[o|3]=new Function("RE|="+(1<<i)+"; gbCPUTicks=8;");
  MNCB[o|3]=new Function("return 'SET "+i+",E';");
  OPCB[o|4]=new Function("HL|="+(256<<i)+"; gbCPUTicks=8;");
  MNCB[o|4]=new Function("return 'SET "+i+",H';");
  OPCB[o|5]=new Function("HL|="+(1<<i)+"; gbCPUTicks=8;");
  MNCB[o|5]=new Function("return 'SET "+i+",L';");
  OPCB[o|6]=new Function("MEMW(HL,MEMR(HL)|"+(1<<i)+"); gbCPUTicks=16;");
  MNCB[o|6]=new Function("return 'SET "+i+",(HL)';");
}

MN[0x01]=function(){ return 'LD BC,0x'+hex4((MEMR(PC+2)<<8)+MEMR(PC+1)); };
MN[0x00]=function(){ return 'NOP'; };
MN[0x02]=function(){ return 'LD (BC),A'; };
MN[0x03]=function(){ return 'INC BC'; };
MN[0x04]=function(){ return 'INC B'; };
MN[0x05]=function(){ return 'DEC B'; };
MN[0x06]=function(){ return 'LD B,0x'+hex2(MEMR(PC+1)); };
MN[0x07]=function(){ return 'RLCA'; };
MN[0x08]=function(){ return 'LD(0x'+hex4((MEMR(PC+2)<<8)+MEMR(PC+1))+'),SP'; };
MN[0x09]=function(){ return 'ADD HL,BC'; };
MN[0x0A]=function(){ return 'LD A,(BC)'; };
MN[0x0B]=function(){ return 'DEC BC'; };
MN[0x0C]=function(){ return 'INC C'; };
MN[0x0D]=function(){ return 'DEC C'; };
MN[0x0E]=function(){ return 'LD C,0x'+hex2(MEMR(PC+1)); };
MN[0x0F]=function(){ return 'RRCA'; };
MN[0x10]=function(){ return 'STOP'; };
MN[0x11]=function(){ return 'LD DE,0x'+hex4((MEMR(PC+2)<<8)+MEMR(PC+1)); };
MN[0x12]=function(){ return 'LD (DE),A'; };
MN[0x13]=function(){ return 'INC DE'; };
MN[0x14]=function(){ return 'INC D'; };
MN[0x15]=function(){ return 'DEC D'; };
MN[0x16]=function(){ return 'LD D,0x'+hex2(MEMR(PC+1)); };
MN[0x17]=function(){ return 'RLA'; };
MN[0x18]=function(){ return 'JR '+sb(MEMR(PC+1))+'; 0x'+hex2(MEMR(PC+1)); };
MN[0x19]=function(){ return 'ADD HL,DE'; };
MN[0x1A]=function(){ return 'LD A,(DE)'; };
MN[0x1B]=function(){ return 'DEC DE'; };
MN[0x1C]=function(){ return 'INC E'; };
MN[0x1D]=function(){ return 'DEC E'; };
MN[0x1E]=function(){ return 'LD E,0x'+hex2(MEMR(PC+1)); };
MN[0x1F]=function(){ return 'RRA'; };
MN[0x20]=function(){ return 'JR NZ,'+sb(MEMR(PC+1))+'; 0x'+hex2(MEMR(PC+1)); };
MN[0x21]=function(){ return 'LD HL,0x'+hex4((MEMR(PC+2)<<8)+MEMR(PC+1)); };
MN[0x22]=function(){ return 'LDI (HL),A'; };
MN[0x23]=function(){ return 'INC HL'; };
MN[0x24]=function(){ return 'INC H'; };
MN[0x25]=function(){ return 'DEC H'; };
MN[0x26]=function(){ return 'LD H,0x'+hex2(MEMR(PC+1)); };
MN[0x27]=function(){ return 'DAA'; };
MN[0x28]=function(){ return 'JR Z,'+sb(MEMR(PC+1))+'; 0x'+hex2(MEMR(PC+1)); };
MN[0x29]=function(){ return 'ADD HL,HL'; };
MN[0x2A]=function(){ return 'LDI A,(HL)'; };
MN[0x2B]=function(){ return 'DEC HL'; };
MN[0x2C]=function(){ return 'INC L'; };
MN[0x2D]=function(){ return 'DEC L'; };
MN[0x2E]=function(){ return 'LD L,0x'+hex2(MEMR(PC+1)); };
MN[0x2F]=function(){ return 'CPL'; };
MN[0x30]=function(){ return 'JR NC,'+sb(MEMR(PC+1))+'; 0x'+hex2(MEMR(PC+1)); };
MN[0x31]=function(){ return 'LD SP,0x'+hex4((MEMR(PC+2)<<8)+MEMR(PC+1)); };
MN[0x32]=function(){ return 'LDD (HL),A'; };
MN[0x33]=function(){ return 'INC SP'; };
MN[0x34]=function(){ return 'INC (HL)'; };
MN[0x35]=function(){ return 'DEC (HL)'; };
MN[0x36]=function(){ return 'LD (HL),0x'+hex2(MEMR(PC+1)); };
MN[0x37]=function(){ return 'SCF'; };
MN[0x38]=function(){ return 'JR C,'+sb(MEMR(PC+1))+'; 0x'+hex2(MEMR(PC+1)); };
MN[0x39]=function(){ return 'ADD HL,SP'; };
MN[0x3A]=function(){ return 'LDD A,(HL)'; };
MN[0x3B]=function(){ return 'DEC SP'; };
MN[0x3C]=function(){ return 'INC A'; };
MN[0x3D]=function(){ return 'DEC A'; };
MN[0x3E]=function(){ return 'LD A,0x'+hex2(MEMR(PC+1)); }; // ???
MN[0x3F]=function(){ return 'CCF'; };
MN[0x40]=function(){ return 'LD B,B'; };
MN[0x41]=function(){ return 'LD B,C'; };
MN[0x42]=function(){ return 'LD B,D'; };
MN[0x43]=function(){ return 'LD B,E'; };
MN[0x44]=function(){ return 'LD B,H'; };
MN[0x45]=function(){ return 'LD B,L'; };
MN[0x46]=function(){ return 'LD B,(HL)'; };
MN[0x47]=function(){ return 'LD B,A'; };
MN[0x48]=function(){ return 'LD C,B'; };
MN[0x49]=function(){ return 'LD C,C'; };
MN[0x4A]=function(){ return 'LD C,D'; };
MN[0x4B]=function(){ return 'LD C,E'; };
MN[0x4C]=function(){ return 'LD C,H'; };
MN[0x4D]=function(){ return 'LD C,L'; };
MN[0x4E]=function(){ return 'LD C,(HL)'; };
MN[0x4F]=function(){ return 'LD C,A'; };
MN[0x50]=function(){ return 'LD D,B'; };
MN[0x51]=function(){ return 'LD D,C'; };
MN[0x52]=function(){ return 'LD D,D'; };
MN[0x53]=function(){ return 'LD D,E'; };
MN[0x54]=function(){ return 'LD D,H'; };
MN[0x55]=function(){ return 'LD D,L'; };
MN[0x56]=function(){ return 'LD D,(HL)'; };
MN[0x57]=function(){ return 'LD D,A'; };
MN[0x58]=function(){ return 'LD E,B'; };
MN[0x59]=function(){ return 'LD E,C'; };
MN[0x5A]=function(){ return 'LD E,D'; };
MN[0x5B]=function(){ return 'LD E,E'; };
MN[0x5C]=function(){ return 'LD E,H'; };
MN[0x5D]=function(){ return 'LD E,L'; };
MN[0x5E]=function(){ return 'LD E,(HL)'; };
MN[0x5F]=function(){ return 'LD E,A'; };
MN[0x60]=function(){ return 'LD H,B'; };
MN[0x61]=function(){ return 'LD H,C'; };
MN[0x62]=function(){ return 'LD H,D'; };
MN[0x63]=function(){ return 'LD H,E'; };
MN[0x64]=function(){ return 'LD H,H'; };
MN[0x65]=function(){ return 'LD H,L'; };
MN[0x66]=function(){ return 'LD H,(HL)'; };
MN[0x67]=function(){ return 'LD H,A'; };
MN[0x68]=function(){ return 'LD L,B'; };
MN[0x69]=function(){ return 'LD L,C'; };
MN[0x6A]=function(){ return 'LD L,D'; };
MN[0x6B]=function(){ return 'LD L,E'; };
MN[0x6C]=function(){ return 'LD L,H'; };
MN[0x6D]=function(){ return 'LD L,L'; };
MN[0x6E]=function(){ return 'LD L,(HL)'; };
MN[0x6F]=function(){ return 'LD L,A'; };
MN[0x70]=function(){ return 'LD (HL),B'; };
MN[0x71]=function(){ return 'LD (HL),C'; };
MN[0x72]=function(){ return 'LD (HL),D'; };
MN[0x73]=function(){ return 'LD (HL),E'; };
MN[0x74]=function(){ return 'LD (HL),H'; };
MN[0x75]=function(){ return 'LD (HL),L'; };
MN[0x76]=function(){ return 'HALT'; };
MN[0x77]=function(){ return 'LD (HL),A'; };
MN[0x78]=function(){ return 'LD A,B'; };
MN[0x79]=function(){ return 'LD A,C'; };
MN[0x7A]=function(){ return 'LD A,D'; };
MN[0x7B]=function(){ return 'LD A,E'; };
MN[0x7C]=function(){ return 'LD A,H'; };
MN[0x7D]=function(){ return 'LD A,L'; };
MN[0x7E]=function(){ return 'LD A,(HL)'; };
MN[0x7F]=function(){ return 'LD A,A'; };
MN[0x80]=function(){ return 'ADD A,B'; };
MN[0x81]=function(){ return 'ADD A,C'; };
MN[0x82]=function(){ return 'ADD A,D'; };
MN[0x83]=function(){ return 'ADD A,E'; };
MN[0x84]=function(){ return 'ADD A,H'; };
MN[0x85]=function(){ return 'ADD A,L'; };
MN[0x86]=function(){ return 'ADD A,(HL)'; };
MN[0x87]=function(){ return 'ADD A,A'; };
MN[0x88]=function(){ return 'ADC A,B'; };
MN[0x89]=function(){ return 'ADC A,C'; };
MN[0x8A]=function(){ return 'ADC A,D'; };
MN[0x8B]=function(){ return 'ADC A,E'; };
MN[0x8C]=function(){ return 'ADC A,H'; };
MN[0x8D]=function(){ return 'ADC A,L'; };
MN[0x8E]=function(){ return 'ADC A,(HL)'; };
MN[0x8F]=function(){ return 'ADC A,A'; };
MN[0x90]=function(){ return 'SUB B'; };
MN[0x91]=function(){ return 'SUB C'; };
MN[0x92]=function(){ return 'SUB D'; };
MN[0x93]=function(){ return 'SUB E'; };
MN[0x94]=function(){ return 'SUB H'; };
MN[0x95]=function(){ return 'SUB L'; };
MN[0x96]=function(){ return 'SUB (HL)'; };
MN[0x97]=function(){ return 'SUB A'; };
MN[0x98]=function(){ return 'SBC A,B'; };
MN[0x99]=function(){ return 'SBC A,C'; };
MN[0x9A]=function(){ return 'SBC A,D'; };
MN[0x9B]=function(){ return 'SBC A,E'; };
MN[0x9C]=function(){ return 'SBC A,H'; };
MN[0x9D]=function(){ return 'SBC A,L'; };
MN[0x9E]=function(){ return 'SBC A,(HL)'; };
MN[0x9F]=function(){ return 'SBC A,A'; };
MN[0xA0]=function(){ return 'AND B'; };
MN[0xA1]=function(){ return 'AND C'; };
MN[0xA2]=function(){ return 'AND D'; };
MN[0xA3]=function(){ return 'AND E'; };
MN[0xA4]=function(){ return 'AND H'; };
MN[0xA5]=function(){ return 'AND L'; };
MN[0xA6]=function(){ return 'AND (HL)'; };
MN[0xA7]=function(){ return 'AND A'; };
MN[0xA8]=function(){ return 'XOR B'; };
MN[0xA9]=function(){ return 'XOR C'; };
MN[0xAA]=function(){ return 'XOR D'; };
MN[0xAB]=function(){ return 'XOR E'; };
MN[0xAC]=function(){ return 'XOR H'; };
MN[0xAD]=function(){ return 'XOR L'; };
MN[0xAE]=function(){ return 'XOR (HL)'; };
MN[0xAF]=function(){ return 'XOR A'; };
MN[0xB0]=function(){ return 'OR B'; };
MN[0xB1]=function(){ return 'OR C'; };
MN[0xB2]=function(){ return 'OR D'; };
MN[0xB3]=function(){ return 'OR E'; };
MN[0xB4]=function(){ return 'OR H'; };
MN[0xB5]=function(){ return 'OR L'; };
MN[0xB6]=function(){ return 'OR (HL)'; };
MN[0xB7]=function(){ return 'OR A'; };
MN[0xB8]=function(){ return 'CP B'; };
MN[0xB9]=function(){ return 'CP C'; };
MN[0xBA]=function(){ return 'CP D'; };
MN[0xBB]=function(){ return 'CP E'; };
MN[0xBC]=function(){ return 'CP H'; };
MN[0xBD]=function(){ return 'CP L'; };
MN[0xBE]=function(){ return 'CP (HL)'; };
MN[0xBF]=function(){ return 'CP A'; };
MN[0xC0]=function(){ return 'RET NZ'; };
MN[0xC1]=function(){ return 'POP BC'; };
MN[0xC2]=function(){ return 'JP NZ,0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xC3]=function(){ return 'JP 0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xC4]=function(){ return 'CALL NZ,0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xC5]=function(){ return 'PUSH BC'; };
MN[0xC6]=function(){ return 'ADD A,0x'+hex2(MEMR(PC+1)); };
MN[0xC7]=function(){ return 'RST 0x00'; };
MN[0xC8]=function(){ return 'RET Z'; };
MN[0xC9]=function(){ return 'RET'; };
MN[0xCA]=function(){ return 'JP Z,0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xCB]=function(){ return MNCB[MEMR(PC+1)](); };
MN[0xCC]=function(){ return 'CALL Z,0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xCD]=function(){ return 'CALL 0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xCE]=function(){ return 'ADC A,0x'+hex2(MEMR(PC+1)); };
MN[0xCF]=function(){ return 'RST 0x08'; };
MN[0xD0]=function(){ return 'RET NC'; };
MN[0xD1]=function(){ return 'POP DE'; };
MN[0xD2]=function(){ return 'JP NC,0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xD4]=function(){ return 'CALL NC,0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xD5]=function(){ return 'PUSH DE'; };
MN[0xD6]=function(){ return 'SUB 0x'+hex2(MEMR(PC+1)); };
MN[0xD7]=function(){ return 'RST 0x10'; };
MN[0xD8]=function(){ return 'RET C'; };
MN[0xD9]=function(){ return 'RETI'; };
MN[0xDA]=function(){ return 'JP C,0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xDC]=function(){ return 'CALL C,0x'+hex(MEMR(PC+1)|(MEMR(PC+2)<<8)); };
MN[0xDE]=function(){ return 'SBC A,0x'+hex2(MEMR(PC+1)); };
MN[0xDF]=function(){ return 'RST 0x18'; };
MN[0xE0]=function(){ return 'LD (0xFF00+0x'+hex2(MEMR(PC+1))+'),A'; };
MN[0xE1]=function(){ return 'POP HL'; };
MN[0xE2]=function(){ return 'LD (0xFF00+C),A'; };
MN[0xE5]=function(){ return 'PUSH HL'; };
MN[0xE6]=function(){ return 'AND 0x'+hex2(MEMR(PC+1)); };
MN[0xE7]=function(){ return 'RST 0x20'; };
MN[0xE8]=function(){ return 'ADD SP,0x'+hex2(MEMR(PC+1)); };
MN[0xE9]=function(){ return 'JP (HL)'; };
MN[0xEA]=function(){ return 'LD (0x'+hex((MEMR(PC+2)<<8)|MEMR(PC+1),4)+'),A'; };
MN[0xEE]=function(){ return 'XOR 0x'+hex2(MEMR(PC+1)); };
MN[0xEF]=function(){ return 'RST 0x28'; };
MN[0xF0]=function(){ return 'LD A,(0xFF00+0x'+hex2(MEMR(PC+1))+')'; };
MN[0xF1]=function(){ return 'POP AF'; };
MN[0xF2]=function(){ return 'LD A,(0xFF00+C)'; };
MN[0xF3]=function(){ return 'DI'; };
MN[0xF5]=function(){ return 'PUSH AF'; };
MN[0xF6]=function(){ return 'OR 0x'+hex2(MEMR(PC+1)); };
MN[0xF7]=function(){ return 'RST 0x30'; };
MN[0xF8]=function(){ return 'LD HL,SP+0x'+hex2(MEMR(PC+1)); };
MN[0xF9]=function(){ return 'LD SP,HL'; };
MN[0xFA]=function(){ return 'LD A,(0x'+hex4((MEMR(PC+2)<<8)+MEMR(PC+1))+')'; };
MN[0xFB]=function(){ return 'EI'; };
MN[0xFE]=function(){ return 'CP '+MEMR(PC+1)+'; 0x'+hex2(MEMR(PC+1)); };
MN[0xFF]=function(){ return 'RST 0x38'; };

MNCB[0x00]=function(){ return 'RLC B'; };
MNCB[0x01]=function(){ return 'RLC C'; };
MNCB[0x02]=function(){ return 'RLC D'; };
MNCB[0x03]=function(){ return 'RLC E'; };
MNCB[0x04]=function(){ return 'RLC H'; };
MNCB[0x05]=function(){ return 'RLC L'; };
MNCB[0x06]=function(){ return 'RLC (HL)'; };
MNCB[0x07]=function(){ return 'RLC A'; };
MNCB[0x08]=function(){ return 'RRC B'; };
MNCB[0x09]=function(){ return 'RRC C'; };
MNCB[0x0A]=function(){ return 'RRC D'; };
MNCB[0x0B]=function(){ return 'RRC E'; };
MNCB[0x0C]=function(){ return 'RRC H'; };
MNCB[0x0D]=function(){ return 'RRC L'; };
MNCB[0x0E]=function(){ return 'RRC (HL)'; };
MNCB[0x0F]=function(){ return 'RRC A'; };
MNCB[0x10]=function(){ return 'RL B'; };
MNCB[0x11]=function(){ return 'RL C'; };
MNCB[0x12]=function(){ return 'RL D'; };
MNCB[0x13]=function(){ return 'RL E'; };
MNCB[0x14]=function(){ return 'RL H'; };
MNCB[0x15]=function(){ return 'RL L'; };
MNCB[0x16]=function(){ return 'RL (HL)'; };
MNCB[0x17]=function(){ return 'RL A'; };
MNCB[0x18]=function(){ return 'RR B'; };
MNCB[0x19]=function(){ return 'RR C'; };
MNCB[0x1A]=function(){ return 'RR D'; };
MNCB[0x1B]=function(){ return 'RR E'; };
MNCB[0x1C]=function(){ return 'RR H'; };
MNCB[0x1D]=function(){ return 'RR L'; };
MNCB[0x1E]=function(){ return 'RR (HL)'; };
MNCB[0x1F]=function(){ return 'RR A'; };
MNCB[0x20]=function(){ return 'SLA B'; };
MNCB[0x21]=function(){ return 'SLA C'; };
MNCB[0x22]=function(){ return 'SLA D'; };
MNCB[0x23]=function(){ return 'SLA E'; };
MNCB[0x24]=function(){ return 'SLA H'; };
MNCB[0x25]=function(){ return 'SLA L'; };
MNCB[0x26]=function(){ return 'SLA (HL)'; };
MNCB[0x27]=function(){ return 'SLA A'; };
MNCB[0x28]=function(){ return 'SRA B'; };
MNCB[0x29]=function(){ return 'SRA C'; };
MNCB[0x2A]=function(){ return 'SRA D'; };
MNCB[0x2B]=function(){ return 'SRA E'; };
MNCB[0x2C]=function(){ return 'SRA H'; };
MNCB[0x2D]=function(){ return 'SRA L'; };
MNCB[0x2E]=function(){ return 'SRA (HL)'; };
MNCB[0x2F]=function(){ return 'SRA A'; };
MNCB[0x30]=function(){ return 'SWAP B'; };
MNCB[0x31]=function(){ return 'SWAP C'; };
MNCB[0x32]=function(){ return 'SWAP D'; };
MNCB[0x33]=function(){ return 'SWAP E'; };
MNCB[0x34]=function(){ return 'SWAP H'; };
MNCB[0x35]=function(){ return 'SWAP L'; };
MNCB[0x36]=function(){ return 'SWAP (HL)'; };
MNCB[0x37]=function(){ return 'SWAP A'; };
MNCB[0x38]=function(){ return 'SRL B'; };
MNCB[0x39]=function(){ return 'SRL C'; };
MNCB[0x3A]=function(){ return 'SRL D'; };
MNCB[0x3B]=function(){ return 'SRL E'; };
MNCB[0x3C]=function(){ return 'SRL H'; };
MNCB[0x3D]=function(){ return 'SRL L'; };
MNCB[0x3E]=function(){ return 'SRL (HL)'; };
MNCB[0x3F]=function(){ return 'SRL A'; };

function gb_Init_CPU() {
  gbPause = true;
  RA=0x01; // 0x01->GB/SGB; 0xFF->GBP; 0x11->GBC
  FZ=0x01; // F=0xB0->Z1 N0 H1 C1
  FN=0x00;
  FH=0x01;
  FC=0x01;
  RB=0x00;
  RC=0x13;
  RD=0x00;
  RE=0xD8;
  PC=0x0100;
  SP=0xFFFE;
  HL=0x014D;
  gbCPUTicks=0;
}

var gbDAATable= [ // DDA code from VisualBoyAdvance
  0x0080,0x0100,0x0200,0x0300,0x0400,0x0500,0x0600,0x0700,
  0x0800,0x0900,0x1020,0x1120,0x1220,0x1320,0x1420,0x1520,
  0x1000,0x1100,0x1200,0x1300,0x1400,0x1500,0x1600,0x1700,
  0x1800,0x1900,0x2020,0x2120,0x2220,0x2320,0x2420,0x2520,
  0x2000,0x2100,0x2200,0x2300,0x2400,0x2500,0x2600,0x2700,
  0x2800,0x2900,0x3020,0x3120,0x3220,0x3320,0x3420,0x3520,
  0x3000,0x3100,0x3200,0x3300,0x3400,0x3500,0x3600,0x3700,
  0x3800,0x3900,0x4020,0x4120,0x4220,0x4320,0x4420,0x4520,
  0x4000,0x4100,0x4200,0x4300,0x4400,0x4500,0x4600,0x4700,
  0x4800,0x4900,0x5020,0x5120,0x5220,0x5320,0x5420,0x5520,
  0x5000,0x5100,0x5200,0x5300,0x5400,0x5500,0x5600,0x5700,
  0x5800,0x5900,0x6020,0x6120,0x6220,0x6320,0x6420,0x6520,
  0x6000,0x6100,0x6200,0x6300,0x6400,0x6500,0x6600,0x6700,
  0x6800,0x6900,0x7020,0x7120,0x7220,0x7320,0x7420,0x7520,
  0x7000,0x7100,0x7200,0x7300,0x7400,0x7500,0x7600,0x7700,
  0x7800,0x7900,0x8020,0x8120,0x8220,0x8320,0x8420,0x8520,
  0x8000,0x8100,0x8200,0x8300,0x8400,0x8500,0x8600,0x8700,
  0x8800,0x8900,0x9020,0x9120,0x9220,0x9320,0x9420,0x9520,
  0x9000,0x9100,0x9200,0x9300,0x9400,0x9500,0x9600,0x9700,
  0x9800,0x9900,0x00B0,0x0130,0x0230,0x0330,0x0430,0x0530,
  0x0090,0x0110,0x0210,0x0310,0x0410,0x0510,0x0610,0x0710,
  0x0810,0x0910,0x1030,0x1130,0x1230,0x1330,0x1430,0x1530,
  0x1010,0x1110,0x1210,0x1310,0x1410,0x1510,0x1610,0x1710,
  0x1810,0x1910,0x2030,0x2130,0x2230,0x2330,0x2430,0x2530,
  0x2010,0x2110,0x2210,0x2310,0x2410,0x2510,0x2610,0x2710,
  0x2810,0x2910,0x3030,0x3130,0x3230,0x3330,0x3430,0x3530,
  0x3010,0x3110,0x3210,0x3310,0x3410,0x3510,0x3610,0x3710,
  0x3810,0x3910,0x4030,0x4130,0x4230,0x4330,0x4430,0x4530,
  0x4010,0x4110,0x4210,0x4310,0x4410,0x4510,0x4610,0x4710,
  0x4810,0x4910,0x5030,0x5130,0x5230,0x5330,0x5430,0x5530,
  0x5010,0x5110,0x5210,0x5310,0x5410,0x5510,0x5610,0x5710,
  0x5810,0x5910,0x6030,0x6130,0x6230,0x6330,0x6430,0x6530,
  0x6010,0x6110,0x6210,0x6310,0x6410,0x6510,0x6610,0x6710,
  0x6810,0x6910,0x7030,0x7130,0x7230,0x7330,0x7430,0x7530,
  0x7010,0x7110,0x7210,0x7310,0x7410,0x7510,0x7610,0x7710,
  0x7810,0x7910,0x8030,0x8130,0x8230,0x8330,0x8430,0x8530,
  0x8010,0x8110,0x8210,0x8310,0x8410,0x8510,0x8610,0x8710,
  0x8810,0x8910,0x9030,0x9130,0x9230,0x9330,0x9430,0x9530,
  0x9010,0x9110,0x9210,0x9310,0x9410,0x9510,0x9610,0x9710,
  0x9810,0x9910,0xA030,0xA130,0xA230,0xA330,0xA430,0xA530,
  0xA010,0xA110,0xA210,0xA310,0xA410,0xA510,0xA610,0xA710,
  0xA810,0xA910,0xB030,0xB130,0xB230,0xB330,0xB430,0xB530,
  0xB010,0xB110,0xB210,0xB310,0xB410,0xB510,0xB610,0xB710,
  0xB810,0xB910,0xC030,0xC130,0xC230,0xC330,0xC430,0xC530,
  0xC010,0xC110,0xC210,0xC310,0xC410,0xC510,0xC610,0xC710,
  0xC810,0xC910,0xD030,0xD130,0xD230,0xD330,0xD430,0xD530,
  0xD010,0xD110,0xD210,0xD310,0xD410,0xD510,0xD610,0xD710,
  0xD810,0xD910,0xE030,0xE130,0xE230,0xE330,0xE430,0xE530,
  0xE010,0xE110,0xE210,0xE310,0xE410,0xE510,0xE610,0xE710,
  0xE810,0xE910,0xF030,0xF130,0xF230,0xF330,0xF430,0xF530,
  0xF010,0xF110,0xF210,0xF310,0xF410,0xF510,0xF610,0xF710,
  0xF810,0xF910,0x00B0,0x0130,0x0230,0x0330,0x0430,0x0530,
  0x0090,0x0110,0x0210,0x0310,0x0410,0x0510,0x0610,0x0710,
  0x0810,0x0910,0x1030,0x1130,0x1230,0x1330,0x1430,0x1530,
  0x1010,0x1110,0x1210,0x1310,0x1410,0x1510,0x1610,0x1710,
  0x1810,0x1910,0x2030,0x2130,0x2230,0x2330,0x2430,0x2530,
  0x2010,0x2110,0x2210,0x2310,0x2410,0x2510,0x2610,0x2710,
  0x2810,0x2910,0x3030,0x3130,0x3230,0x3330,0x3430,0x3530,
  0x3010,0x3110,0x3210,0x3310,0x3410,0x3510,0x3610,0x3710,
  0x3810,0x3910,0x4030,0x4130,0x4230,0x4330,0x4430,0x4530,
  0x4010,0x4110,0x4210,0x4310,0x4410,0x4510,0x4610,0x4710,
  0x4810,0x4910,0x5030,0x5130,0x5230,0x5330,0x5430,0x5530,
  0x5010,0x5110,0x5210,0x5310,0x5410,0x5510,0x5610,0x5710,
  0x5810,0x5910,0x6030,0x6130,0x6230,0x6330,0x6430,0x6530,
  0x0600,0x0700,0x0800,0x0900,0x0A00,0x0B00,0x0C00,0x0D00,
  0x0E00,0x0F00,0x1020,0x1120,0x1220,0x1320,0x1420,0x1520,
  0x1600,0x1700,0x1800,0x1900,0x1A00,0x1B00,0x1C00,0x1D00,
  0x1E00,0x1F00,0x2020,0x2120,0x2220,0x2320,0x2420,0x2520,
  0x2600,0x2700,0x2800,0x2900,0x2A00,0x2B00,0x2C00,0x2D00,
  0x2E00,0x2F00,0x3020,0x3120,0x3220,0x3320,0x3420,0x3520,
  0x3600,0x3700,0x3800,0x3900,0x3A00,0x3B00,0x3C00,0x3D00,
  0x3E00,0x3F00,0x4020,0x4120,0x4220,0x4320,0x4420,0x4520,
  0x4600,0x4700,0x4800,0x4900,0x4A00,0x4B00,0x4C00,0x4D00,
  0x4E00,0x4F00,0x5020,0x5120,0x5220,0x5320,0x5420,0x5520,
  0x5600,0x5700,0x5800,0x5900,0x5A00,0x5B00,0x5C00,0x5D00,
  0x5E00,0x5F00,0x6020,0x6120,0x6220,0x6320,0x6420,0x6520,
  0x6600,0x6700,0x6800,0x6900,0x6A00,0x6B00,0x6C00,0x6D00,
  0x6E00,0x6F00,0x7020,0x7120,0x7220,0x7320,0x7420,0x7520,
  0x7600,0x7700,0x7800,0x7900,0x7A00,0x7B00,0x7C00,0x7D00,
  0x7E00,0x7F00,0x8020,0x8120,0x8220,0x8320,0x8420,0x8520,
  0x8600,0x8700,0x8800,0x8900,0x8A00,0x8B00,0x8C00,0x8D00,
  0x8E00,0x8F00,0x9020,0x9120,0x9220,0x9320,0x9420,0x9520,
  0x9600,0x9700,0x9800,0x9900,0x9A00,0x9B00,0x9C00,0x9D00,
  0x9E00,0x9F00,0x00B0,0x0130,0x0230,0x0330,0x0430,0x0530,
  0x0610,0x0710,0x0810,0x0910,0x0A10,0x0B10,0x0C10,0x0D10,
  0x0E10,0x0F10,0x1030,0x1130,0x1230,0x1330,0x1430,0x1530,
  0x1610,0x1710,0x1810,0x1910,0x1A10,0x1B10,0x1C10,0x1D10,
  0x1E10,0x1F10,0x2030,0x2130,0x2230,0x2330,0x2430,0x2530,
  0x2610,0x2710,0x2810,0x2910,0x2A10,0x2B10,0x2C10,0x2D10,
  0x2E10,0x2F10,0x3030,0x3130,0x3230,0x3330,0x3430,0x3530,
  0x3610,0x3710,0x3810,0x3910,0x3A10,0x3B10,0x3C10,0x3D10,
  0x3E10,0x3F10,0x4030,0x4130,0x4230,0x4330,0x4430,0x4530,
  0x4610,0x4710,0x4810,0x4910,0x4A10,0x4B10,0x4C10,0x4D10,
  0x4E10,0x4F10,0x5030,0x5130,0x5230,0x5330,0x5430,0x5530,
  0x5610,0x5710,0x5810,0x5910,0x5A10,0x5B10,0x5C10,0x5D10,
  0x5E10,0x5F10,0x6030,0x6130,0x6230,0x6330,0x6430,0x6530,
  0x6610,0x6710,0x6810,0x6910,0x6A10,0x6B10,0x6C10,0x6D10,
  0x6E10,0x6F10,0x7030,0x7130,0x7230,0x7330,0x7430,0x7530,
  0x7610,0x7710,0x7810,0x7910,0x7A10,0x7B10,0x7C10,0x7D10,
  0x7E10,0x7F10,0x8030,0x8130,0x8230,0x8330,0x8430,0x8530,
  0x8610,0x8710,0x8810,0x8910,0x8A10,0x8B10,0x8C10,0x8D10,
  0x8E10,0x8F10,0x9030,0x9130,0x9230,0x9330,0x9430,0x9530,
  0x9610,0x9710,0x9810,0x9910,0x9A10,0x9B10,0x9C10,0x9D10,
  0x9E10,0x9F10,0xA030,0xA130,0xA230,0xA330,0xA430,0xA530,
  0xA610,0xA710,0xA810,0xA910,0xAA10,0xAB10,0xAC10,0xAD10,
  0xAE10,0xAF10,0xB030,0xB130,0xB230,0xB330,0xB430,0xB530,
  0xB610,0xB710,0xB810,0xB910,0xBA10,0xBB10,0xBC10,0xBD10,
  0xBE10,0xBF10,0xC030,0xC130,0xC230,0xC330,0xC430,0xC530,
  0xC610,0xC710,0xC810,0xC910,0xCA10,0xCB10,0xCC10,0xCD10,
  0xCE10,0xCF10,0xD030,0xD130,0xD230,0xD330,0xD430,0xD530,
  0xD610,0xD710,0xD810,0xD910,0xDA10,0xDB10,0xDC10,0xDD10,
  0xDE10,0xDF10,0xE030,0xE130,0xE230,0xE330,0xE430,0xE530,
  0xE610,0xE710,0xE810,0xE910,0xEA10,0xEB10,0xEC10,0xED10,
  0xEE10,0xEF10,0xF030,0xF130,0xF230,0xF330,0xF430,0xF530,
  0xF610,0xF710,0xF810,0xF910,0xFA10,0xFB10,0xFC10,0xFD10,
  0xFE10,0xFF10,0x00B0,0x0130,0x0230,0x0330,0x0430,0x0530,
  0x0610,0x0710,0x0810,0x0910,0x0A10,0x0B10,0x0C10,0x0D10,
  0x0E10,0x0F10,0x1030,0x1130,0x1230,0x1330,0x1430,0x1530,
  0x1610,0x1710,0x1810,0x1910,0x1A10,0x1B10,0x1C10,0x1D10,
  0x1E10,0x1F10,0x2030,0x2130,0x2230,0x2330,0x2430,0x2530,
  0x2610,0x2710,0x2810,0x2910,0x2A10,0x2B10,0x2C10,0x2D10,
  0x2E10,0x2F10,0x3030,0x3130,0x3230,0x3330,0x3430,0x3530,
  0x3610,0x3710,0x3810,0x3910,0x3A10,0x3B10,0x3C10,0x3D10,
  0x3E10,0x3F10,0x4030,0x4130,0x4230,0x4330,0x4430,0x4530,
  0x4610,0x4710,0x4810,0x4910,0x4A10,0x4B10,0x4C10,0x4D10,
  0x4E10,0x4F10,0x5030,0x5130,0x5230,0x5330,0x5430,0x5530,
  0x5610,0x5710,0x5810,0x5910,0x5A10,0x5B10,0x5C10,0x5D10,
  0x5E10,0x5F10,0x6030,0x6130,0x6230,0x6330,0x6430,0x6530,
  0x00C0,0x0140,0x0240,0x0340,0x0440,0x0540,0x0640,0x0740,
  0x0840,0x0940,0x0440,0x0540,0x0640,0x0740,0x0840,0x0940,
  0x1040,0x1140,0x1240,0x1340,0x1440,0x1540,0x1640,0x1740,
  0x1840,0x1940,0x1440,0x1540,0x1640,0x1740,0x1840,0x1940,
  0x2040,0x2140,0x2240,0x2340,0x2440,0x2540,0x2640,0x2740,
  0x2840,0x2940,0x2440,0x2540,0x2640,0x2740,0x2840,0x2940,
  0x3040,0x3140,0x3240,0x3340,0x3440,0x3540,0x3640,0x3740,
  0x3840,0x3940,0x3440,0x3540,0x3640,0x3740,0x3840,0x3940,
  0x4040,0x4140,0x4240,0x4340,0x4440,0x4540,0x4640,0x4740,
  0x4840,0x4940,0x4440,0x4540,0x4640,0x4740,0x4840,0x4940,
  0x5040,0x5140,0x5240,0x5340,0x5440,0x5540,0x5640,0x5740,
  0x5840,0x5940,0x5440,0x5540,0x5640,0x5740,0x5840,0x5940,
  0x6040,0x6140,0x6240,0x6340,0x6440,0x6540,0x6640,0x6740,
  0x6840,0x6940,0x6440,0x6540,0x6640,0x6740,0x6840,0x6940,
  0x7040,0x7140,0x7240,0x7340,0x7440,0x7540,0x7640,0x7740,
  0x7840,0x7940,0x7440,0x7540,0x7640,0x7740,0x7840,0x7940,
  0x8040,0x8140,0x8240,0x8340,0x8440,0x8540,0x8640,0x8740,
  0x8840,0x8940,0x8440,0x8540,0x8640,0x8740,0x8840,0x8940,
  0x9040,0x9140,0x9240,0x9340,0x9440,0x9540,0x9640,0x9740,
  0x9840,0x9940,0x3450,0x3550,0x3650,0x3750,0x3850,0x3950,
  0x4050,0x4150,0x4250,0x4350,0x4450,0x4550,0x4650,0x4750,
  0x4850,0x4950,0x4450,0x4550,0x4650,0x4750,0x4850,0x4950,
  0x5050,0x5150,0x5250,0x5350,0x5450,0x5550,0x5650,0x5750,
  0x5850,0x5950,0x5450,0x5550,0x5650,0x5750,0x5850,0x5950,
  0x6050,0x6150,0x6250,0x6350,0x6450,0x6550,0x6650,0x6750,
  0x6850,0x6950,0x6450,0x6550,0x6650,0x6750,0x6850,0x6950,
  0x7050,0x7150,0x7250,0x7350,0x7450,0x7550,0x7650,0x7750,
  0x7850,0x7950,0x7450,0x7550,0x7650,0x7750,0x7850,0x7950,
  0x8050,0x8150,0x8250,0x8350,0x8450,0x8550,0x8650,0x8750,
  0x8850,0x8950,0x8450,0x8550,0x8650,0x8750,0x8850,0x8950,
  0x9050,0x9150,0x9250,0x9350,0x9450,0x9550,0x9650,0x9750,
  0x9850,0x9950,0x9450,0x9550,0x9650,0x9750,0x9850,0x9950,
  0xA050,0xA150,0xA250,0xA350,0xA450,0xA550,0xA650,0xA750,
  0xA850,0xA950,0xA450,0xA550,0xA650,0xA750,0xA850,0xA950,
  0xB050,0xB150,0xB250,0xB350,0xB450,0xB550,0xB650,0xB750,
  0xB850,0xB950,0xB450,0xB550,0xB650,0xB750,0xB850,0xB950,
  0xC050,0xC150,0xC250,0xC350,0xC450,0xC550,0xC650,0xC750,
  0xC850,0xC950,0xC450,0xC550,0xC650,0xC750,0xC850,0xC950,
  0xD050,0xD150,0xD250,0xD350,0xD450,0xD550,0xD650,0xD750,
  0xD850,0xD950,0xD450,0xD550,0xD650,0xD750,0xD850,0xD950,
  0xE050,0xE150,0xE250,0xE350,0xE450,0xE550,0xE650,0xE750,
  0xE850,0xE950,0xE450,0xE550,0xE650,0xE750,0xE850,0xE950,
  0xF050,0xF150,0xF250,0xF350,0xF450,0xF550,0xF650,0xF750,
  0xF850,0xF950,0xF450,0xF550,0xF650,0xF750,0xF850,0xF950,
  0x00D0,0x0150,0x0250,0x0350,0x0450,0x0550,0x0650,0x0750,
  0x0850,0x0950,0x0450,0x0550,0x0650,0x0750,0x0850,0x0950,
  0x1050,0x1150,0x1250,0x1350,0x1450,0x1550,0x1650,0x1750,
  0x1850,0x1950,0x1450,0x1550,0x1650,0x1750,0x1850,0x1950,
  0x2050,0x2150,0x2250,0x2350,0x2450,0x2550,0x2650,0x2750,
  0x2850,0x2950,0x2450,0x2550,0x2650,0x2750,0x2850,0x2950,
  0x3050,0x3150,0x3250,0x3350,0x3450,0x3550,0x3650,0x3750,
  0x3850,0x3950,0x3450,0x3550,0x3650,0x3750,0x3850,0x3950,
  0x4050,0x4150,0x4250,0x4350,0x4450,0x4550,0x4650,0x4750,
  0x4850,0x4950,0x4450,0x4550,0x4650,0x4750,0x4850,0x4950,
  0x5050,0x5150,0x5250,0x5350,0x5450,0x5550,0x5650,0x5750,
  0x5850,0x5950,0x5450,0x5550,0x5650,0x5750,0x5850,0x5950,
  0x6050,0x6150,0x6250,0x6350,0x6450,0x6550,0x6650,0x6750,
  0x6850,0x6950,0x6450,0x6550,0x6650,0x6750,0x6850,0x6950,
  0x7050,0x7150,0x7250,0x7350,0x7450,0x7550,0x7650,0x7750,
  0x7850,0x7950,0x7450,0x7550,0x7650,0x7750,0x7850,0x7950,
  0x8050,0x8150,0x8250,0x8350,0x8450,0x8550,0x8650,0x8750,
  0x8850,0x8950,0x8450,0x8550,0x8650,0x8750,0x8850,0x8950,
  0x9050,0x9150,0x9250,0x9350,0x9450,0x9550,0x9650,0x9750,
  0x9850,0x9950,0x9450,0x9550,0x9650,0x9750,0x9850,0x9950,
  0xFA60,0xFB60,0xFC60,0xFD60,0xFE60,0xFF60,0x00C0,0x0140,
  0x0240,0x0340,0x0440,0x0540,0x0640,0x0740,0x0840,0x0940,
  0x0A60,0x0B60,0x0C60,0x0D60,0x0E60,0x0F60,0x1040,0x1140,
  0x1240,0x1340,0x1440,0x1540,0x1640,0x1740,0x1840,0x1940,
  0x1A60,0x1B60,0x1C60,0x1D60,0x1E60,0x1F60,0x2040,0x2140,
  0x2240,0x2340,0x2440,0x2540,0x2640,0x2740,0x2840,0x2940,
  0x2A60,0x2B60,0x2C60,0x2D60,0x2E60,0x2F60,0x3040,0x3140,
  0x3240,0x3340,0x3440,0x3540,0x3640,0x3740,0x3840,0x3940,
  0x3A60,0x3B60,0x3C60,0x3D60,0x3E60,0x3F60,0x4040,0x4140,
  0x4240,0x4340,0x4440,0x4540,0x4640,0x4740,0x4840,0x4940,
  0x4A60,0x4B60,0x4C60,0x4D60,0x4E60,0x4F60,0x5040,0x5140,
  0x5240,0x5340,0x5440,0x5540,0x5640,0x5740,0x5840,0x5940,
  0x5A60,0x5B60,0x5C60,0x5D60,0x5E60,0x5F60,0x6040,0x6140,
  0x6240,0x6340,0x6440,0x6540,0x6640,0x6740,0x6840,0x6940,
  0x6A60,0x6B60,0x6C60,0x6D60,0x6E60,0x6F60,0x7040,0x7140,
  0x7240,0x7340,0x7440,0x7540,0x7640,0x7740,0x7840,0x7940,
  0x7A60,0x7B60,0x7C60,0x7D60,0x7E60,0x7F60,0x8040,0x8140,
  0x8240,0x8340,0x8440,0x8540,0x8640,0x8740,0x8840,0x8940,
  0x8A60,0x8B60,0x8C60,0x8D60,0x8E60,0x8F60,0x9040,0x9140,
  0x9240,0x9340,0x3450,0x3550,0x3650,0x3750,0x3850,0x3950,
  0x3A70,0x3B70,0x3C70,0x3D70,0x3E70,0x3F70,0x4050,0x4150,
  0x4250,0x4350,0x4450,0x4550,0x4650,0x4750,0x4850,0x4950,
  0x4A70,0x4B70,0x4C70,0x4D70,0x4E70,0x4F70,0x5050,0x5150,
  0x5250,0x5350,0x5450,0x5550,0x5650,0x5750,0x5850,0x5950,
  0x5A70,0x5B70,0x5C70,0x5D70,0x5E70,0x5F70,0x6050,0x6150,
  0x6250,0x6350,0x6450,0x6550,0x6650,0x6750,0x6850,0x6950,
  0x6A70,0x6B70,0x6C70,0x6D70,0x6E70,0x6F70,0x7050,0x7150,
  0x7250,0x7350,0x7450,0x7550,0x7650,0x7750,0x7850,0x7950,
  0x7A70,0x7B70,0x7C70,0x7D70,0x7E70,0x7F70,0x8050,0x8150,
  0x8250,0x8350,0x8450,0x8550,0x8650,0x8750,0x8850,0x8950,
  0x8A70,0x8B70,0x8C70,0x8D70,0x8E70,0x8F70,0x9050,0x9150,
  0x9250,0x9350,0x9450,0x9550,0x9650,0x9750,0x9850,0x9950,
  0x9A70,0x9B70,0x9C70,0x9D70,0x9E70,0x9F70,0xA050,0xA150,
  0xA250,0xA350,0xA450,0xA550,0xA650,0xA750,0xA850,0xA950,
  0xAA70,0xAB70,0xAC70,0xAD70,0xAE70,0xAF70,0xB050,0xB150,
  0xB250,0xB350,0xB450,0xB550,0xB650,0xB750,0xB850,0xB950,
  0xBA70,0xBB70,0xBC70,0xBD70,0xBE70,0xBF70,0xC050,0xC150,
  0xC250,0xC350,0xC450,0xC550,0xC650,0xC750,0xC850,0xC950,
  0xCA70,0xCB70,0xCC70,0xCD70,0xCE70,0xCF70,0xD050,0xD150,
  0xD250,0xD350,0xD450,0xD550,0xD650,0xD750,0xD850,0xD950,
  0xDA70,0xDB70,0xDC70,0xDD70,0xDE70,0xDF70,0xE050,0xE150,
  0xE250,0xE350,0xE450,0xE550,0xE650,0xE750,0xE850,0xE950,
  0xEA70,0xEB70,0xEC70,0xED70,0xEE70,0xEF70,0xF050,0xF150,
  0xF250,0xF350,0xF450,0xF550,0xF650,0xF750,0xF850,0xF950,
  0xFA70,0xFB70,0xFC70,0xFD70,0xFE70,0xFF70,0x00D0,0x0150,
  0x0250,0x0350,0x0450,0x0550,0x0650,0x0750,0x0850,0x0950,
  0x0A70,0x0B70,0x0C70,0x0D70,0x0E70,0x0F70,0x1050,0x1150,
  0x1250,0x1350,0x1450,0x1550,0x1650,0x1750,0x1850,0x1950,
  0x1A70,0x1B70,0x1C70,0x1D70,0x1E70,0x1F70,0x2050,0x2150,
  0x2250,0x2350,0x2450,0x2550,0x2650,0x2750,0x2850,0x2950,
  0x2A70,0x2B70,0x2C70,0x2D70,0x2E70,0x2F70,0x3050,0x3150,
  0x3250,0x3350,0x3450,0x3550,0x3650,0x3750,0x3850,0x3950,
  0x3A70,0x3B70,0x3C70,0x3D70,0x3E70,0x3F70,0x4050,0x4150,
  0x4250,0x4350,0x4450,0x4550,0x4650,0x4750,0x4850,0x4950,
  0x4A70,0x4B70,0x4C70,0x4D70,0x4E70,0x4F70,0x5050,0x5150,
  0x5250,0x5350,0x5450,0x5550,0x5650,0x5750,0x5850,0x5950,
  0x5A70,0x5B70,0x5C70,0x5D70,0x5E70,0x5F70,0x6050,0x6150,
  0x6250,0x6350,0x6450,0x6550,0x6650,0x6750,0x6850,0x6950,
  0x6A70,0x6B70,0x6C70,0x6D70,0x6E70,0x6F70,0x7050,0x7150,
  0x7250,0x7350,0x7450,0x7550,0x7650,0x7750,0x7850,0x7950,
  0x7A70,0x7B70,0x7C70,0x7D70,0x7E70,0x7F70,0x8050,0x8150,
  0x8250,0x8350,0x8450,0x8550,0x8650,0x8750,0x8850,0x8950,
  0x8A70,0x8B70,0x8C70,0x8D70,0x8E70,0x8F70,0x9050,0x9150,
  0x9250,0x9350,0x9450,0x9550,0x9650,0x9750,0x9850,0x9950];




/* 
 * jsgb.debugger.js v0.02 - Memory module for JSGB, a GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
 
var gbMemory = new Array(0x10000);

// special register mirror values and bit states
var gbRegLY = 0;
var gbRegLYC = 0;
var gbRegSCY = 0;
var gbRegSCX = 0;
var gbRegWY = 0;
var gbRegWX = 0;
var gbRegDIV = 0;
var gbRegIF = 0;
var gbRegIE = 0;
var gbRegSTAT_Mode = 0;
var gbRegSTAT_IntLYLYC = false;
var gbRegSTAT_IntMode2 = false;
var gbRegSTAT_IntMode1 = false;
var gbRegSTAT_IntMode0 = false;

var gbRegLCDC_DisplayOn = false;
var gbRegLCDC_WindowYOffs = 0;
var gbRegLCDC_WindowDisplay = false;
var gbRegLCDC_SpriteDisplay = false;
var gbRegLCDC_SpriteSize = false;
var gbRegLCDC_BackgroundYOffs = 0;
var gbRegLCDC_BackgroundXOffs = 0;
var gbRegLCDC_BgAndWinDisplay = false;
var gbRegTAC_TimerOn = false;

// special register addresses
var _P1_   = 0xFF00;
var _SC_   = 0xFF02;
var _DIV_  = 0xFF04;
var _TIMA_ = 0xFF05;
var _TMA_  = 0xFF06;
var _TAC_  = 0xFF07;
var _IF_   = 0xFF0F;
var _LCDC_ = 0xFF40;
var _STAT_ = 0xFF41;
var _SCY_  = 0xFF42;
var _SCX_  = 0xFF43;
var _LY_   = 0xFF44;
var _LYC_  = 0xFF45;
var _DMA_  = 0xFF46;
var _BGP_  = 0xFF47;
var _OBP0_ = 0xFF48;
var _OBP1_ = 0xFF49;
var _WY_   = 0xFF4A;
var _WX_   = 0xFF4B;
var _IE_   = 0xFFFF;

// start addresses
var _ROM0_ = 0x0000;
var _ROM1_ = 0x4000; 
var _VRAM_ = 0x8000; // video RAM
var _BTD0_ = 0x8000; // backgroun tile data 0
var _BTD1_ = 0x8800; // backgroun tile data 1
var _BTM0_ = 0x9800; // background tile map 0
var _BTM1_ = 0x9C00; // background tile map 1
var _RAM1_ = 0xA000; // switchable RAM
var _RAM0_ = 0xC000; // internal RAM
var _ECHO_ = 0xE000; // echo of internal RAM
var _OAM_  = 0xFE00; // object attribute

function gb_Memory_Read_ROM_Only(a) {
  return gbMemory[a];
}

function gb_Memory_Read_MBC1_ROM(a) {
  switch (a>>12) {
    case 0:
    case 1:
    case 2:
    case 3: return gbMemory[a];
    case 4: 
    case 5: 
    case 6: 
    case 7: return gbROM[gbROMBank1offs+a];
    default: return gbMemory[a];
  }  
}

var MEMR = gb_Memory_Read_ROM_Only;

function MEMW(a,v) {
  // Special registers+HRAM
  if (a>=0xFF00) {
    switch(a&0xFF) {
    case 0x00: // FF00 P1 Joypad
      //if(v==3)gbMemory[a]=0xF0; else // Fx->GB/GBP; 3x->SGB
      gb_Read_Joypad(v);
      return;    
    case 0x02: // FF02 SC
      gbMemory[0xFF02]=0;
      return;
    case 0x04: // FF04 DIV  
      gbMemory[0xFF04]=0; // Writing any value sets it to 0.
      return;
    case 0x07: // FF07 TAC - TIMER CONTROL  
      gbMemory[0xFF07]=v;
      gbRegTAC_TimerOn=((v&4)!=0);
      gb_Set_Timer_Freq(v&3);
      return;    
    case 0x0F: // FF0F IF - Interrupt Flags
      gbMemory[0xFF0F]=gbRegIF=(v&31);
      return;    
    case 0x40: // FF40 LCDC      
      var i=((v>>7)!=0);
      if (i!=gbRegLCDC_DisplayOn) {
        // TODO not sure on this
        gbMemory[_LY_]=gbRegLY=gbLCDTicks=0;
        //if (!i) gb_Clear_Framebuffer();
      }  
      gbRegLCDC_DisplayOn=i;
      gbRegLCDC_WindowYOffs=(v&64)?256:0;
      gbRegLCDC_WindowDisplay=(v&32)?true:false;
      gbRegLCDC_BackgroundXOffs=(v&16)?0:256;
      gbRegLCDC_BackgroundYOffs=(v&8)?256:0;
      gbRegLCDC_SpriteSize=(v&4)?16:8;
      gbRegLCDC_SpriteDisplay=(v&2)?true:false;
      gbRegLCDC_BgAndWinDisplay=(v&1)?true:false;
      gbMemory[0xFF40]=v;      
      return;
    case 0x41: // FF41 STAT
      gbRegSTAT_Mode=v&3;
      gbRegSTAT_IntLYLYC=(v&64)?true:false;
      gbRegSTAT_IntMode2=(v&32)?true:false;
      gbRegSTAT_IntMode1=(v&16)?true:false;
      gbRegSTAT_IntMode0=(v&8)?true:false;
      gbMemory[0xFF41]=v;
      return;    
    case 0x42: // FF42 SCY
      gbMemory[0xFF42]=gbRegSCY=v;
      return;    
    case 0x43: // FF43 SCX
      gbMemory[0xFF43]=gbRegSCX=v;
      return;    
    case 0x44: // FF44 LY
      gbMemory[0xFF44]=gbRegLY=0; // Writing any value sets it to 0.
      return;
    case 0x45: // FF45 LYC
      gbMemory[0xFF45]=gbRegLYC=v;
      return;
    case 0x46: // FF46 DMA TRANSFER  
      v=v<<8; // start address of DMA
      a=0xFE00; // OAM addr
      while (a<0xFEA0) gbMemory[a++] = MEMR(v++);
      return;
    case 0x47: // FF47 BGP - Background Palette
      gbMemory[0xFF47]=v;
      gbBackPal[0]=v&3;
      gbBackPal[1]=(v>>2)&3;
      gbBackPal[2]=(v>>4)&3;
      gbBackPal[3]=(v>>6)&3;
      return;
    case 0x48: // FF48 OBP0 - Sprite Palette 0
      gbMemory[0xFF48]=v;
      gbSpritePal[0][0]=v&3;
      gbSpritePal[0][1]=(v>>2)&3;
      gbSpritePal[0][2]=(v>>4)&3;
      gbSpritePal[0][3]=(v>>6)&3;
      return;
    case 0x49: // FF49 OBP1 - Sprite Palette 1
      gbMemory[0xFF49]=v;
      gbSpritePal[1][0]=v&3;
      gbSpritePal[1][1]=(v>>2)&3;
      gbSpritePal[1][2]=(v>>4)&3;
      gbSpritePal[1][3]=(v>>6)&3;
      return;            
    case 0x4A: // FF4A WY
      gbMemory[0xFF4A]=gbRegWY=v;
      return;
    case 0x4B: // FF4B WX
      gbMemory[0xFF4B]=gbRegWX=v;
      return;
    case 0xFF: // FFFF IE - Interrupt Enable
      gbMemory[0xFFFF]=gbRegIE=(v&31);
      return;    
    default: // THE OTHERS
      gbMemory[a]=v;
      return;
    }  
  }
  // writing to ROM?
  else if (a<0x8000) {

    switch (gbCartridgeType) {

    case _ROM_ONLY_:
      return;
       
    case _ROM_MBC1_:
      switch (a>>12) {
      // write to 2000-3FFF: select ROM bank
      case 2:
      case 3: 
        //$('STATUS').innerHTML='Select ROM Bank: '+(v&31);
        gbROMBankSwitch(v&31);
        return;
      // write to 6000-7FFF: select MBC1 mode
      case 6:
      case 7: 
        gbMBC1Mode = v&1;
        return;
      // unhandled cases
      default:
        //$('STATUS').innerHTML='Unhandled MBC1 ROM write:\naddr: '+hex4(a)+' - val: '+hex2(v);
        return;
      }
    default:
      alert('Unknown Memory Bank Controller.\naddr: '+hex4(a)+' - val: '+hex2(v));
      gb_Pause();
      return;   
    }
  }
  // make changes if the new value is different
  else if (gbMemory[a]!=v) {
    // 8000-97FF: Tile data
    if (a<0x9800) {
      gbUpdateTiles=true;
      gbUpdateTilesList[(a-0x8000)>>4]=true;
      gbMemory[a]=v;
    }
    // 9800-9FFF: Tile maps
    else if (a<0xA000) {
      gbUpdateBackground=true;
      gbUpdateBackgroundTileList[a-0x9800]=true;
      gbMemory[a]=v;
    }
    // A000-BFFF: Switchable RAM
    else if (a<0xC000) {
      gbMemory[a]=v;
    }
    // C000-DFFF: Internal RAM
    else if (a<0xE000) {
      gbMemory[a]=v;
      // C000-DDFF: Writes to ECHO
      if (a<0xDE00) gbMemory[a+0x2000]=v;
    }
    // E000-FDFF: ECHO
    else if (a<0xFE00) {
      gbMemory[a]=v;
      gbMemory[a-0x2000]=v;
    }
    else gbMemory[a]=v;
  }  
}

function where_mem(a) { // TODO rewrite this
  if (a<0x4000) return 'ROM0'; else
  if (a<0x8000) return 'ROM1'; else
  if (a<0xA000) return 'VRAM'; else
  if (a<0xC000) return 'RAM1'; else
  if (a<0xE000) return 'RAM0'; else
  if (a<0xFE00) return 'ECHO'; else
  if (a<0xFEA0) return 'OAM&nbsp;'; else
  if (a<0xFF00) return 'I/O&nbsp;'; else
  if (a<0xFF4C) return 'I/O&nbsp;'; else
  if (a<0xFF80) return 'I/O&nbsp;'; else
  if (a<0xFFFF) return 'HRAM'; else
  if (a=0xFFFF) return 'IE&nbsp;&nbsp;'; else
  return '&nbsp;&nbsp;&nbsp;&nbsp;';
}

function gb_Init_Memory() {
  var i=0x100000;
  while (i) {
    gbMemory[--i] = 0;
    gbMemory[--i] = 0;
    gbMemory[--i] = 0;
    gbMemory[--i] = 0;
  }
  MEMW(0xFF00,0xFF); // P1
  MEMW(0xFF04,0xAF); // DIV
  MEMW(0xFF05,0x00); // TIMA
  MEMW(0xFF06,0x00); // TMA
  MEMW(0xFF07,0xF8); // TAC
  MEMW(0xFF0F,0x00); // IF 
  MEMW(0xFF10,0x80); // NR10
  MEMW(0xFF11,0xBF); // NR11
  MEMW(0xFF12,0xF3); // NR12
  MEMW(0xFF14,0xBF); // NR14
  MEMW(0xFF16,0x3F); // NR21
  MEMW(0xFF17,0x00); // NR22
  MEMW(0xFF19,0xBF); // NR24
  MEMW(0xFF1A,0x7F); // NR30
  MEMW(0xFF1B,0xFF); // NR31
  MEMW(0xFF1C,0x9F); // NR32
  MEMW(0xFF1E,0xBF); // NR33
  MEMW(0xFF20,0xFF); // NR41
  MEMW(0xFF21,0x00); // NR42
  MEMW(0xFF22,0x00); // NR43
  MEMW(0xFF23,0xBF); // NR30
  MEMW(0xFF24,0x77); // NR50
  MEMW(0xFF25,0xF3); // NR51
  MEMW(0xFF26,0xF1); // NR52 0xF1->GB; 0xF0->SGB
  MEMW(0xFF40,0x91); // LCDC
  MEMW(0xFF42,0x00); // SCY
  MEMW(0xFF43,0x00); // SCX
  MEMW(0xFF44,0x00); // LY
  MEMW(0xFF45,0x00); // LYC
  MEMW(0xFF47,0xFC); // BGP
  MEMW(0xFF48,0xFF); // OBP0
  MEMW(0xFF49,0xFF); // OBP1
  MEMW(0xFF4A,0x00); // WY
  MEMW(0xFF4B,0x00); // WX
  MEMW(0xFFFF,0x00); // IE
}  




/* 
 * jsgb.rom.js v0.01 - ROM loader for JSGB, a GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
 
var gbROM = [];
var gbCartridgeType = 0;
var gbBankSwitchCount = 0;

var _ROM_ONLY_ = 0x00;
var _ROM_MBC1_ = 0x01;

var gbMBC1Mode = 0;

var gbROMBank1offs = 0;

var gbCartridgeType = 0;
var gbCartridgeTypes = [];
gbCartridgeTypes[0] = 'ROM only';
gbCartridgeTypes[1] = 'ROM+MBC1';

var gbROMBanks = []; // 1 Bank = 16 KBytes = 256 Kbits
gbROMBanks[0x00] = 2;
gbROMBanks[0x01] = 4;
gbROMBanks[0x02] = 8;
gbROMBanks[0x03] = 16;
gbROMBanks[0x04] = 32;
gbROMBanks[0x05] = 64;
gbROMBanks[0x06] = 128;
gbROMBanks[0x52] = 72;
gbROMBanks[0x53] = 80;
gbROMBanks[0x54] = 96;

var gbRAMBanks = [];
gbRAMBanks[0] = 0;
gbRAMBanks[1] = 1;
gbRAMBanks[2] = 2; // ? docs say 1
gbRAMBanks[3] = 4;
gbRAMBanks[4] = 16;

var gbROMInfo = {};

function gb_ROM_Load(fileName) {
  gbBankSwitchCount = 0;    
  gbROM = [];
  var i = 0;
  var req = new XMLHttpRequest();
  req.open('GET', fileName, false);
  req.overrideMimeType('text/plain; charset=x-user-defined');
  req.send(null);
  if ((req.readyState==4)/*&&(req.status==200)*/) {
    var s=req.responseText;
    i=s.length;
    while (i--) gbROM[i]=s.charCodeAt(i)&0xff;
    i=0x8000;
    while (i--) gbMemory[i]=gbROM[i]; // copy 2 banks into memory
  }
  else {
    alert('Error loading ROM: '+fileName);
  }
  // ROM and RAM banks
  gbROMInfo.ROMBanks = gbROMBanks[gbROM[0x148]];
  gbROMInfo.RAMBanks = gbRAMBanks[gbROM[0x149]];
  // ROM name
  var s = gbROM.slice(0x0134,0x0143);
  gbROMInfo.Name = '';
  for (var i=0; i<16; i++) {
    if (s[i]==0) break;
    gbROMInfo.Name+=String.fromCharCode(s[i]);
  }
  // Cartridge type
  gbROMInfo.CartridgeType = gbCartridgeType = gbROM[0x147];
  // Set MEMR function
  switch (gbROMInfo.CartridgeType) {
  case _ROM_ONLY_:
    MEMR = gb_Memory_Read_ROM_Only;
    break;
  case _ROM_MBC1_:
    MEMR = gb_Memory_Read_MBC1_ROM; 
    gbMBC1Mode = 0;
    break;
  }

}

function gbROMBankSwitch(bank) {
  gbBankSwitchCount++;  
  gbROMBank1offs = (bank==0)?0:(--bank*0x4000); // new ROM Bank 1 address
  /*
  var i = (0x4000>>5)+1; // loops count
  var j = 0x4000-1; // write address
  var k = (bank==0)?((0x4000)-1):((bank*0x4000)-1); // read address
  while (--i) { 
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    //8
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    //16
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    //24
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    gbMemory[++j]=gbROM[++k]; gbMemory[++j]=gbROM[++k];
    //32
  }
  */
}


/*
   MBC1 (Memory Bank Controller 1)

     MBC1 has two different maximum memory modes:
     16Mbit ROM/8KByte RAM
     4Mbit ROM/32KByte RAM.

     The MBC1 defaults to 16Mbit ROM/8KByte RAM mode
     on power up.
     
     Writing a value (XXXXXXXS - X = Don't
     care, S = Memory model select) into 6000-7FFF area
     will select the memory model to use. 
     
     S = 0 selects 16/8 mode. -> default
     S = 1 selects 4/32 mode.

     Writing a value (XXXBBBBB - X = Don't cares, B =
     bank select bits) into 2000-3FFF area will select
     an appropriate ROM bank at 4000-7FFF. Values of 0
     and 1 do the same thing and point to ROM bank 1.

     Rom bank 0 is not accessible from 4000-7FFF and can
     only be read from 0000-3FFF.

      If memory model is set to 4/32: [1]
       Writing a value (XXXXXXBB - X = Don't care, B =
       bank select bits) into 4000-5FFF area will select
       an appropriate RAM bank at A000-C000. Before you
       can read or write to a RAM bank you have to enable
       it by writing a XXXX1010 into 0000-1FFF area*.
       
       To disable RAM bank operations write any value but
       XXXX1010 into 0000-1FFF area.
       Disabling a RAM bank probably protects that bank from false writes
       during power down of the GameBoy. (NOTE: Nintendo
       suggests values $0A to enable and $00 to disable
       RAM bank!!)
       
      If memory model is set to 16/8 mode: [0]
       Writing a value (XXXXXXBB - X = Don't care, B =
       bank select bits) into 4000-5FFF area will set the
       two most significant ROM address lines.
       
      * NOTE: The Super Smart Card doesn't require this
      operation because it's RAM bank is ALWAYS enabled.
      Include this operation anyway to allow your code
      to work with both.
*/



/* 
 * jsgb.interrupts.js v0.02 - Interrupt handling for JSGB, a GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */

var gbInterrupts = [];
 
function gb_Int_VBlank() { // IF/IE bit 0
  gbIME=gbHalt=false;
  MEMW(_IF_,gbRegIF&0xFE); // reset IF bit 0
  MEMW(--SP,PC>>8);
  MEMW(--SP,PC&0xFF);
  PC=0x0040;
  gbCPUTicks+=32;
}

function gb_Int_STAT() { // IF/IE bit 1
  gbIME=gbHalt=false;
  MEMW(_IF_,gbRegIF&0xFD); // reset IF bit 1
  MEMW(--SP,PC>>8);
  MEMW(--SP,PC&0xFF);
  PC=0x0048;
  gbCPUTicks+=32;
}

function gb_Int_Timer() { // IF/IE bit 2
  gbIME=gbHalt=false;
  MEMW(_IF_,gbRegIF&0xFB); // reset IF bit 2
  MEMW(--SP,PC>>8);
  MEMW(--SP,PC&0xFF);
  PC=0x0050;
  gbCPUTicks+=32;
}

function gb_Int_Serial() { // IF/IE bit 3
  gbIME=gbHalt=false;
  MEMW(_IF_,gbRegIF&0xF7); // reset IF bit 3
  MEMW(--SP,PC>>8);
  MEMW(--SP,PC&0xFF);
  PC=0x0058;
  gbCPUTicks+=32;
}

function gb_Int_Buttons() { // IF/IE bit 4
  gbIME=gbHalt=false;
  MEMW(_IF_,gbRegIF&0xEF); // reset IF bit 4
  MEMW(--SP,PC>>8);
  MEMW(--SP,PC&0xFF);
  PC=0x0060;
  gbCPUTicks+=32;
}

function gb_Init_Interrupts() {
  gbIME=gbHalt=false;
  for (var i=0; i<32; i++) {
    if (i&1) gbInterrupts[i] = gb_Int_VBlank; else    
    if (i&2) gbInterrupts[i] = gb_Int_STAT; else    
    if (i&4) gbInterrupts[i] = gb_Int_Timer; else    
    if (i&8) gbInterrupts[i] = gb_Int_Serial; else    
    if (i&16)gbInterrupts[i] = gb_Int_Buttons; else
    gbInterrupts[i] = function(){};   
  }
}



/* 
 * jsgb.input.js v0.02 - buttons input module for JSGB, a JS GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
 
var gbPin14=0; // up down left right
var gbPin15=0; // start select a b

function gb_Read_Joypad(v) {
  switch ((v>>4)&3) {
    case 0: gbMemory[_P1_]=gbPin14 & gbPin15; return; // TODO not sure on this
    case 1: gbMemory[_P1_]=gbPin15; return;
    case 2: gbMemory[_P1_]=gbPin14; return;
    case 3: gbMemory[_P1_]=0xFF; return; // TODO not sure on this
  }
}
    
function gb_OnKeyDown_Event(e) {
  //$('DEBUG').innerHTML=document.title=e.which;  
  switch (e.which) {
    // down
    case 40: gbPin14&=0xF7; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // up
    case 38: gbPin14&=0xFB; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // left
    case 37: gbPin14&=0xFD; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // right
    case 39: gbPin14&=0xFE; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;    
    // start
    case 65: gbPin15&=0xF7; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // select
    case 83: gbPin15&=0xFB; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // button B
    case 90: gbPin15&=0xFD; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // button A
    case 88: gbPin15&=0xFE; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
  }
}

function gb_OnKeyUp_Event(e) {
  switch (e.which) {
    // down
    case 40: gbPin14|=8; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // up
    case 38: gbPin14|=4; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // left
    case 37: gbPin14|=2; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // right
    case 39: gbPin14|=1; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // start
    case 65: gbPin15|=8; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // select
    case 83: gbPin15|=4; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // button B
    case 90: gbPin15|=2; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
    // button A
    case 88: gbPin15|=1; MEMW(_IF_,gbRegIF|16); e.preventDefault(); return;
  }
}

function gb_Init_Input() {
  document.onkeydown = gb_OnKeyDown_Event;
  document.onkeyup = gb_OnKeyUp_Event;
  gbPin14=0xEF;
  gbPin15=0xDF;
}  




/* 
 * jsgb.lcd.js v0.02 - LCD controller emulation for JSGB, a JS GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */

var gbTileData = []; // tile data arrays
var gbBackgroundData = [];
var gbLCDObj; // LCD Object
var gbLCDCtx; // LCD Context
var gbFrameBuffer = [];
var gbLCDImage; // LCD canvas image
var gbLCDImageData; // LCD canvas image data
//var gbLCDScanline; // LCD canvas scanline 
//var gbScanlineData = []; // Scanline data in GB memory
var gbFPS = 0; // Frames per second counter
var gbEndFrame = false;
var gbCurrentWinLine=0;

var gbUpdateTiles  = false;
var gbUpdateTilesList = [];
var gbUpdateBackground  = false 
var gbUpdateBackgroundTileList = [];
var gbUpdateBackgroundDataList = [];

var gbBackPal   = []; // BGP pallete - initialized in jsgb.memory.js
var gbSpritePal = [[],[]]; // palettes OBP0 and OBP1 - for sprites
var gbColors    = [[0xEF,0xFF,0xDE],[0xAD,0xD7,0x94],
                   [0x52,0x92,0x73],[0x18,0x34,0x42]];

function gb_Update_Tile_Data() {
  var tda = 0;     // tile data addr
  var line = 0;    // line (2 bytes)
  var j = 0;
  // loop tiles and redraw if needed
  for (var i=0;i<384;i++) if (gbUpdateTilesList[i]) { 
    tda=0x8000+i*16;
    for (j=0; j<8; j++) { // loop 8 lines    
      line = gbMemory[tda++];
      line|= gbMemory[tda++] << 8;
      gbTileData[i][j][0] = ((line & 0x8080) + 0x3FFF) >> 14;
      gbTileData[i][j][1] = ((line & 0x4040) + 0x1FFF) >> 13;
      gbTileData[i][j][2] = ((line & 0x2020) + 0x0FFF) >> 12;
      gbTileData[i][j][3] = ((line & 0x1010) + 0x07FF) >> 11;
      gbTileData[i][j][4] = ((line & 0x0808) + 0x03FF) >> 10;
      gbTileData[i][j][5] = ((line & 0x0404) + 0x01FF) >> 9;
      gbTileData[i][j][6] = ((line & 0x0202) + 0x00FF) >> 8;
      gbTileData[i][j][7] = ((line & 0x0101) + 0x007F) >> 7;   
    }
    // mark this tile for update in gb_Update_Background()
    gbUpdateBackgroundDataList[i] = gbUpdateBackground = true;
    gbUpdateTilesList[i] = false;
  }
  gbUpdateTiles=false;
}

function gb_Update_Background() {
/*
  This function draws 4 background buffers in a single array,
  one for every combination of source tile maps and tile data addresses.

  A tile is painted only if tile map or tile data has changed. It knows that
  looking at arrays gbUpdateBackgroundDataList and gbUpdateBackgroundTileList.
  These arrays are updated when writing to VRAM:
  - 8000-97FF: Tile data
  - 9800-9FFF: Tile maps
  
  +----------+----------+
  |          |          |
  |   Map0   |   Map0   |
  |  Tile0   |  Tile1   |
  |          |          |
  +----------+----------+
  |          |          |
  |   Map1   |   Map1   |
  |  Tile0   |  Tile1   |
  |          |          |
  +----------+----------+
  
  Map and Tile addresses can be switched in LCDC register.
  
  Map0  = tile map starting at 0x9800
  Map1  = tile map starting at 0x9C00
  Tile0 = tile data index at 0x8000+i (i=unsigned byte) 
  Tile1 = tile data index at 0x8800+i (i=signed byte)

  Tile0 and Tile1 share 128 indexes:
                 _______________________________
  Tile0 ->      [_______________________________]_______________
  Tile1 ->                      [_______________________________]
  Tile index -> 0Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·128Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·256Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·384
             
  This way the GameBoy can access 384 different tiles using a byte index.             
*/
  var tile0 = 0; // tile index for tiledata at 8000+(unsigned byte)
  var tile1 = 0; // tile index for tiledata at 8800+(signed byte)
  var x  = 0;
  var y  = 0;
  var z  = 0;
  var dy = 0;
  var addr = 0x9800;
  var tileline;
  var backline;
  
  for (var i=0;i<2048;i++) {
    tile0 = gbMemory[addr++];
    tile1 = 256+sb(tile0);
    if (gbUpdateBackgroundTileList[i] || gbUpdateBackgroundDataList[tile0]) {
      dy = 8;
      while (dy--) { 
        z = x;
        tileline=gbTileData[tile0][dy];
        backline=gbBackgroundData[y+dy];
        backline[z++] = tileline[0];
        backline[z++] = tileline[1];
        backline[z++] = tileline[2];
        backline[z++] = tileline[3];
        backline[z++] = tileline[4];
        backline[z++] = tileline[5];
        backline[z++] = tileline[6];
        backline[z++] = tileline[7];        
      }
    }
    if (gbUpdateBackgroundTileList[i] || gbUpdateBackgroundDataList[tile1]) {
      dy = 8;
      while (dy--) { 
        z = 256+x;
        tileline = gbTileData[tile1][dy];
        backline = gbBackgroundData[y+dy];
        backline[z++] = tileline[0];
        backline[z++] = tileline[1];
        backline[z++] = tileline[2];
        backline[z++] = tileline[3];
        backline[z++] = tileline[4];
        backline[z++] = tileline[5];
        backline[z++] = tileline[6];
        backline[z++] = tileline[7];        
      }
    }
    gbUpdateBackgroundTileList[i] = false;
    if ((x+=8)>=256) { x=0; y+=8; }
  }
  for (i=0;i<384;i++) gbUpdateBackgroundDataList[i]=false;
  gbUpdateBackground = false;
}

function gb_Framebuffer_to_LCD() {
  var x = 92160; // 144*160*4
  var y = 0;
  var i = 23040; // 144*160
  while (i) {
    y = gbColors[gbFrameBuffer[--i]];
    gbLCDImageData[x-=2] = y[2]; // b
    gbLCDImageData[--x ] = y[1]; // g
    gbLCDImageData[--x ] = y[0]; // r
    y = gbColors[gbFrameBuffer[--i]];
    gbLCDImageData[x-=2] = y[2]; // b
    gbLCDImageData[--x ] = y[1]; // g
    gbLCDImageData[--x ] = y[0]; // r
    y = gbColors[gbFrameBuffer[--i]];
    gbLCDImageData[x-=2] = y[2]; // b
    gbLCDImageData[--x ] = y[1]; // g
    gbLCDImageData[--x ] = y[0]; // r
    y = gbColors[gbFrameBuffer[--i]];
    gbLCDImageData[x-=2] = y[2]; // b
    gbLCDImageData[--x ] = y[1]; // g
    gbLCDImageData[--x ] = y[0]; // r
  }
  gbLCDCtx.putImageData(gbLCDImage, 0,0);
}

function gb_Clear_Scanline() {
  var offset = gbRegLY*160; // framebuffer's offset
  var i = 160+offset;
  while (offset<i) {
    gbFrameBuffer[--i] = 0; gbFrameBuffer[--i] = 0;
    gbFrameBuffer[--i] = 0; gbFrameBuffer[--i] = 0;
    gbFrameBuffer[--i] = 0; gbFrameBuffer[--i] = 0;
    gbFrameBuffer[--i] = 0; gbFrameBuffer[--i] = 0;
  }
}

function gb_Clear_Framebuffer() {
  var i = 23040; // 144*160
  while (i) {
    gbFrameBuffer[--i] = 0; gbFrameBuffer[--i] = 0;
    gbFrameBuffer[--i] = 0; gbFrameBuffer[--i] = 0;
    gbFrameBuffer[--i] = 0; gbFrameBuffer[--i] = 0;
    gbFrameBuffer[--i] = 0; gbFrameBuffer[--i] = 0;
  }
}

function gb_Draw_Scanline() {
  var i = 0;
  var j = 0;
  var k = 0;
  var x = 0;
  var y = 0;
  var offset = gbRegLY*160; // framebuffer's offset
  var line;

  if (gbRegLY==0) {
    gbCurrentWinLine=0;
    if (gbUpdateTiles) gb_Update_Tile_Data();
    if (gbUpdateBackground) gb_Update_Background();
  }
  
  // Draw Background
  if (gbRegLCDC_BgAndWinDisplay) {
    // copy background line
    y = gbRegLCDC_BackgroundYOffs+((gbRegSCY+gbRegLY)%256);
    x = 160+offset;
    i = 160;
    line = gbBackgroundData[y];
    // copy background line to framebuffer
    while (x>offset) { // loop unrolling
      gbFrameBuffer[--x] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+((--i+gbRegSCX)%256)]];
      gbFrameBuffer[--x] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+((--i+gbRegSCX)%256)]];
      gbFrameBuffer[--x] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+((--i+gbRegSCX)%256)]];
      gbFrameBuffer[--x] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+((--i+gbRegSCX)%256)]];
      gbFrameBuffer[--x] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+((--i+gbRegSCX)%256)]];
      gbFrameBuffer[--x] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+((--i+gbRegSCX)%256)]];
      gbFrameBuffer[--x] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+((--i+gbRegSCX)%256)]];
      gbFrameBuffer[--x] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+((--i+gbRegSCX)%256)]];
    }

    // Draw Window - TODO this could be buggy
    if (gbRegLCDC_WindowDisplay) if ((gbRegWY<=gbRegLY) && (gbRegWX<167)) {
      y = gbRegLCDC_WindowYOffs+gbCurrentWinLine;
      i = gbRegWX-7+offset;
      j = (i<0)?-i:0;
      line = gbBackgroundData[y];
      // copy window line to framebuffer
      for (x=j; x<167-gbRegWX; x++) {
        gbFrameBuffer[x+i] = gbBackPal[line[gbRegLCDC_BackgroundXOffs+x]];
      }
      gbCurrentWinLine++;
    }
  }  
  
  // Draw Sprites
  if (gbRegLCDC_SpriteDisplay) {
    var addr  = _OAM_;
    var tile  = 0; 
    var flags = 0; 
    var count = 0; // max 10 sprites per scanline
    var pixel = 0;
    var flip  = 0;
    var hide  = 0; // sprite priority 1=behind background
    var pal;
    j=40;
    while (j--) { // loop 40 sprites (160 bytes)
      y=gbMemory[addr++]-16;
      // check Y pos
      if ((gbRegLY>=y) && (gbRegLY<(y+gbRegLCDC_SpriteSize))) {
        // TODO handle Y flipped sprites with size = 16
        x=gbMemory[addr++]-8;
        // check X pos
        if ((x>-8) && (x<160)) {
          count++;
          tile  = gbMemory[addr++];
          flags = gbMemory[addr++];
          hide  = (flags>>7)&1;
          flip  = (flags>>5)&3;
          pal   = gbSpritePal[(flags>>4)&1];
          if (gbRegLCDC_SpriteSize==16) {
            tile&=0xFE;
            if (gbRegLY>=(y+8)) { // if it's the 2nd half of the sprite
              y+=8;
              if (flip<2) tile++; // not flip Y
            }
            else if (flip>1) tile++; // flip Y
          }  
          i=8;
          k=x+offset;
          switch (flip) {
          case 0: // no flip
            line=gbTileData[tile][gbRegLY-y]; // sprite line            
            while (i--) {
              if (pixel=line[i]) { // if not transparent
                if ((x+i)<0) break;
                if (!(hide && gbFrameBuffer[k+i]))
                  gbFrameBuffer[k+i]=pal[pixel];
              }  
            } 
            break;
          case 1: // flip X
            line=gbTileData[tile][gbRegLY-y]; // sprite line            
            while (i--) {
              if (pixel=line[7-i]) {
                if ((x+i)<0) break;
                if (!(hide && gbFrameBuffer[k+i]))
                  gbFrameBuffer[k+i]=pal[pixel];
              }  
            } 
            break;
          case 2: // flip Y
            line=gbTileData[tile][7-(gbRegLY-y)]; // sprite line            
            while (i--) {
              if (pixel=line[i]) {
                if ((x+i)<0) break;
                if (!(hide && gbFrameBuffer[k+i]))
                  gbFrameBuffer[k+i]=pal[pixel];
              }  
            } 
            break;
          case 3: // flip XY
            line=gbTileData[tile][7-(gbRegLY-y)]; // sprite line            
            while (i--) {
              if (pixel=line[7-i]) {
                if ((x+i)<0) break;
                if (!(hide && gbFrameBuffer[k+i]))
                  gbFrameBuffer[k+i]=pal[pixel];
              }  
            } 
            break;
          }
        } else addr+=2; // x fail
      } else addr+=3; // y fail
      if (count>=10) break;
    }
  }
}

function gb_Init_LCD() {
  gbScanlineCycles = 0;
  // init LCD Screen variables
  gbLCDObj=$('LCD');
  gbLCDCtx=gbLCDObj.getContext('2d');
  gbLCDCtx.width=160;
  gbLCDCtx.height=144;
  gbLCDCtx.fillStyle='rgb('+gbColors[0][0]+','+gbColors[0][1]+','+gbColors[0][2]+')';
  gbLCDCtx.fillRect(0,0,160,144);
  // get LCD scanline canvas data
  gbLCDImage = gbLCDCtx.getImageData(0,0,160,144);
  gbLCDImageData = gbLCDImage.data;
  // update tiles info
  gbUpdateTiles = false;
  for (var i=0; i<384; i++) {
    gbUpdateTilesList[i]=false;   
    gbUpdateBackgroundDataList[i]=false;
  }  
  // update bg info
  gbUpdateBackground = false;
  for (var i=0; i<2048; i++) {
    gbUpdateBackgroundTileList[i] = false;
  }
  // create Background lines
  for (var j=0; j<512; j++) {
    gbBackgroundData[j] = [];
    for (var i=0; i<512; i++) gbBackgroundData[j][i] = 0;
  }  
  // create Tiles
  for (var i=0; i<384; i++) {
    gbTileData[i] = []; 
    // create Tile lines
    for (var j=0; j<8; j++) {
      gbTileData[i][j] = [];
      for (var k=0; k<8; k++) gbTileData[i][j][k] = 0;
    }
  }
  // fill frame buffer
  gb_Clear_Framebuffer();
}




/* 
 * jsgb.graphics.js v0.02 - Timers functions for JSGB, a GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
 
var gbDIVTicks = 0;         // DIV Ticks Count
var gbLCDTicks = 0;         // ScanLine Counter
var gbTimerTicks = 0;       // Timer Ticks Count
var gbTimerOverflow = 1024; // Timer Max Ticks

function gb_Set_Timer_Freq(f) {
  switch(f) {   // TAC bits 0 and 1
    case 0: gbTimerOverflow=1024; return; // 4.096 KHz
    case 1: gbTimerOverflow=16; return;   // 262.144 Khz
    case 2: gbTimerOverflow=64; return;   // 65.536 KHz
    case 3: gbTimerOverflow=256; return;  // 16.384 KHz
  }  
}          

function gb_Mode0() { // H-Blank 
  if (gbRegSTAT_Mode!=0) {
    gbMemory[_STAT_]&=0xFC; // set STAT bits 1-0 to 0
    gbRegSTAT_Mode=0;
    if (gbRegSTAT_IntMode0) MEMW(_IF_,gbRegIF|2); // if STAT bit 3 -> set IF bit1
  }  
}

function gb_Mode2() { // OAM in use
  if (gbRegSTAT_Mode!=2) {
    gbRegSTAT_Mode=2;
    gbMemory[_STAT_]=(gbMemory[_STAT_]&0xFC)|2;// set STAT bits 1-0 to 2
    if (gbRegSTAT_IntMode2) MEMW(_IF_,gbRegIF|2);// set IF bit 1
  }  
}

function gb_Mode3() { // OAM+VRAM busy
  if (gbRegSTAT_Mode!=3) {
    gbRegSTAT_Mode=3;
    gbMemory[_STAT_]|=3; // set STAT bits 1-0 to 3
    if (gbRegLCDC_DisplayOn) gb_Draw_Scanline();
    else gb_Clear_Scanline();
  }
}

function gb_Mode1() { // V-Blank  
  gbRegSTAT_Mode=1;
  gbMemory[_STAT_]=(gbMemory[_STAT_]&0xFC)|1;
  if (gbRegSTAT_IntMode1) MEMW(_IF_,gbRegIF|2); // set IF flag 1
  MEMW(_IF_,gbRegIF|1); // set IF flag 0 
  if (gbRegLCDC_DisplayOn) gb_Framebuffer_to_LCD(); // Display frame
  else gbLCDCtx.fillRect(0,0,160,144);;
}

function gb_LY_LYC_compare() { // LY - LYC Compare
  if (gbRegLY==gbRegLYC) { // If LY==LCY
    gbMemory[_STAT_]|=0x04; // set STAT bit 2: LY-LYC coincidence flag
    if (gbRegSTAT_IntLYLYC) MEMW(_IF_,gbRegIF|2); // set IF bit 1
  }      
  else {
    gbMemory[_STAT_]&=0xFB; // reset STAT bit 2 (LY!=LYC)
  }  
}

function gb_TIMER_Control() {

  // DIV control
  if ((gbDIVTicks+=gbCPUTicks)>=256) {
    gbDIVTicks-=256;
    gbMemory[_DIV_]=(++gbMemory[_DIV_])&0xFF; // inc DIV
  }    

  // LCD Timing
  gbLCDTicks+=gbCPUTicks; // ScanLineCounter += InstructionCyclesCount
  if (gbLCDTicks>=456){ // when ScanLineCounter overflows -> new scanline        
    gbLCDTicks-=456;
    // I'm comparing LY and LYC before incrementing LY
    // that's because MarioLand and the dot under the coin
    gb_LY_LYC_compare(); 
    if ((++gbRegLY)>=154) gbRegLY-=154; // inc LY (current scanline)
    gbMemory[_LY_]=gbRegLY;
    if (gbRegLY==144) gb_Mode1(); // mode1: 4560 cycles
    else if (gbRegLY==0) {
      gbEndFrame=true;
      gbFPS++;
    }   
  }
  if (gbRegLY<144) { // if not in V-Blank
    if (gbLCDTicks<=204) gb_Mode0(); // mode0: 204 cycles
    else if (gbLCDTicks<=284) gb_Mode2(); // mode2: 80 cycles
    else gb_Mode3(); // mode3: 172 cycles
  }

  // Internal Timer
  if (gbRegTAC_TimerOn) {
    if ((gbTimerTicks+=gbCPUTicks)>=gbTimerOverflow) {
      gbTimerTicks-=gbTimerOverflow;
      if ((++gbMemory[_TIMA_])>=256) {
        gbMemory[_TIMA_]=gbMemory[_TMA_];
        MEMW(_IF_,gbRegIF|4); // set IF bit 2
      }
    }
  }  
}



/* 
 * jsgb.debugger.js v0.02 - Debugger for JSGB, a GameBoy Emulator
 * Copyright (C) 2009 Pedro Ladaria <Sonic1980 at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
 
var gbIsBreakpoint = false;
 
function gb_Dump_All() {
  gb_Dump_CPU();
  gb_Dump_IORegs();
  //asmScroll.dragger.posY*(0xFFFF-dump_asm_h+1)
  asmScroll.dragger.setpos(0,((PC-10<0)?0:(PC-10))/(0xFFFF-dump_asm_h+1));
  gb_Dump_ASM();
  gb_Dump_Mem();
  memScroll.update();
  asmScroll.update();
  //gb_Dump_Background();
  //dump_sp();
  gb_Dump_Cartridge_info();
}

// CPU //

function gb_Dump_CPU() {
  $('RA').innerHTML='A: '+zf(hex(RA),2)+br+sp(zf(bin(RA),8),4);
  $('RB').innerHTML='B: '+zf(hex(RB),2)+br+sp(zf(bin(RB),8),4);
  $('RC').innerHTML='C: '+zf(hex(RC),2)+br+sp(zf(bin(RC),8),4);
  $('RD').innerHTML='D: '+zf(hex(RD),2)+br+sp(zf(bin(RD),8),4);
  $('RE').innerHTML='E: '+zf(hex(RE),2)+br+sp(zf(bin(RE),8),4);
  $('HL').innerHTML='&nbsp;HL: '+zf(hex(HL),4)+br+sp(zf(bin(HL),16),4);
  $('SP').innerHTML='&nbsp;SP: '+zf(hex(SP),4)+br+sp(zf(bin(SP),16),4);
  $('PC').innerHTML='&nbsp;PC: '+zf(hex(PC),4)+br+sp(zf(bin(PC),16),4);
  $('RF').innerHTML='Z:'+(FZ*1)+' N:'+(FN*1)+'<br/'+'>H:'+(FH*1)+' C:'+(FC*1);
}

// SPECIAL REGISTERS //

function gb_Dump_IORegs() {
  $('SPRDUMP').innerHTML=
    'FF00:P1&nbsp; &nbsp;'+sp(zf(bin(gbMemory[0xFF00]),8),4)+br+
    'FF04:DIV&nbsp; '     +gbMemory[0xFF04]+'=0x'+zf(hex(gbMemory[0xFF04]),2)+br+
    'FF05:TIMA '          +gbMemory[0xFF05]+'=0x'+zf(hex(gbMemory[0xFF05]),2)+br+
    'FF06:TMA &nbsp;'     +gbMemory[0xFF06]+'=0x'+zf(hex(gbMemory[0xFF06]),2)+br+
    'FF07:TAC&nbsp; '     +sp(zf(bin(gbMemory[0xFF07]),8),4)+br+
    'FF0F:IF&nbsp; &nbsp;'+sp(zf(bin(gbMemory[0xFF0F]),8),4)+br+
    'FF40:LCDC '          +sp(zf(bin(gbMemory[_LCDC_]),8),4)+br+
    'FF41:STAT '          +sp(zf(bin(gbMemory[0xFF41]),8),4)+br+
    'FF42:SCY&nbsp; '     +gbMemory[0xFF42]+br+
    'FF43:SCX&nbsp; '     +gbMemory[0xFF43]+br+
    'FF44:LY&nbsp; &nbsp;'+gbMemory[0xFF44]+br+
    'FF45:LYC &nbsp;'     +gbMemory[0xFF45]+br+

    'FF46:DMA &nbsp;'     +'0x'+zf(hex(gbMemory[0xFF46]),2)+br+
    'FF47:BGP &nbsp;'     +sp(zf(bin(gbMemory[0xFF47]),8),4)+br+
    'FF48:OBP0&nbsp;'     +sp(zf(bin(gbMemory[0xFF48]),8),4)+br+
    'FF49:OBP1&nbsp;'     +sp(zf(bin(gbMemory[0xFF49]),8),4)+br+

    'FF4A:WY&nbsp; &nbsp;'+gbMemory[0xFF4A]+br+
    'FF4B:WX&nbsp; &nbsp;'+gbMemory[0xFF4B]+br+
    'FFFF:IE&nbsp; &nbsp;'+sp(zf(bin(gbMemory[0xFFFF]),8),4)+br+
    '<hr>'+
    'Emulator vars'+br+
    'IME: '+gbIME+br+
    'CPU Ticks: '+gbCPUTicks+br+
    'DIV Ticks: '+gbDIVTicks+br+
    'LCD Ticks: '+gbLCDTicks+br+
    'Timer Ticks: '+gbTimerTicks+br+
    'Timer Max: '+gbTimerOverflow+br;
}

// MEMORY //

var dump_mem_w=16;
var dump_mem_h=40;
var dump_mem_a=dump_mem_w*dump_mem_h;
function gb_Dump_Mem() {
  var s='';
  var w=dump_mem_w;
  var h=dump_mem_h;
  var c=0;    // char
  var d='';   // display char
  var hx= ''; // hex values string
  var as= ''; // ascii values string
  var of= Math.round(memScroll.dragger.posY*(0xFFFF-(dump_mem_a-w)))&(0xFFFF-w+1);
  for (var j=0;j<h;j++) {
    s+=where_mem(of)+':';
    s+=zf(hex(of),4)+'&nbsp; ';
    hx='';
    as='';
    for (var i=0;i<w;i++) {
      c=MEMR(of+i);
      hx+=zf(hex(c),2)+' ';
      d=String.fromCharCode(c);
      if (c>126) d='.';
      else if (c<32) d='.';
      else if (c==60) d='&lt;';
      else if (c==62) d='&gt;';
      else if (c==32) d='&nbsp;';
      as+=d;
    }  
    s+=hx+' '+as+'&nbsp;';
    s+=br;
    of+=w;
  }
  $('MEMDUMP').innerHTML=s;
}

// DISASSEMBLER + BREAKPOINTS STUFF //

function gb_GoTo_ASM(a) {
  a='0x'+a;
  asmScroll.dragger.setpos(0,((a-10<0)?0:(a-10))/(0xFFFF-dump_asm_h+1));
  gb_Dump_ASM();
}

function gb_Save_Breakpoints_Cookie(ba) {
  var date = new Date(); date.setTime(date.getTime()+(30*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  ba=(ba.length>0)?ba.join(','):'';
  //document.title='COOKIE WRITE:'+ba;
  document.cookie = 'JSGB_gbBreakpointsP='+ba+expires+"; path=/";
}

function gb_Load_Breakpoints_Cookie() {
  var n='JSGB_gbBreakpointsP=';
  var ca = document.cookie.split(';');
  for(var i in ca) {
    var c = ca[i];
    while (c.charAt(0)==' ') c=c.substring(1,c.length);
    if (c.indexOf(n)==0) {
      var ba=c.substring(n.length,c.length);
      if(ba=='')return [];
      ba=ba.split(',');
      for(var j in ba) ba[j]*=1;
      gbIsBreakpoint = ba.length>0;
      return ba;
    }  
  }
  return [];
}

var gbBreakpointsList = gb_Load_Breakpoints_Cookie();

function gb_Set_Breakpoint(addr) {
  addr*=1; // convert to integer
  if ((addr>0xFFFF) || (addr<0)) return;
  var i=gbBreakpointsList.indexOf(addr);  
  if (i<0) gbBreakpointsList.push(addr);// Set breakpoint
  else gbBreakpointsList.splice(i,1); // Remove breakpoint
  gb_Save_Breakpoints_Cookie(gbBreakpointsList);
  gbIsBreakpoint = gbBreakpointsList.length>0;
  gb_Dump_ASM();
}

function gb_Clear_All_Breakpoints() {
  gbBreakpointsList=[];
  gb_Save_Breakpoints_Cookie(gbBreakpointsList);
  gbIsBreakpoint = false;
  gb_Dump_ASM();
}

function gb_Show_Function(PC) {
  var s=(MEMR(PC)==0xCB)?OPCB[MEMR(PC+1)]:OP[MEMR(PC)];
  var ident = 0;
  s = s.toString().
        split('\n').join('').split('\t').join('').split(' ').join('').
        split('{').join(' {\n').split('}').join('}\n').split(';').join(';\n');
  s = s.split('\n');
  for (var i=0; i<s.length; i++) {
    if (s[i].indexOf('}')>=0) ident--;
    for (var j=0; j<ident; j++) s[i]='    '+s[i];
    if (s[i].indexOf('{')>=0) ident++;
  }
  s = s.join('\n');
  alert(s);      
}

var dump_asm_h = 40;
function gb_Dump_ASM() {
  var s='';
  var oPC=PC;
  var of=0;
  var id='';
  var st='';
  PC=Math.round(asmScroll.dragger.posY*(0xFFFF-dump_asm_h+1));
  if (PC<=0) PC=0;
  for (var i=0;i<dump_asm_h;i++) {
    id='ASM_'+PC;
    st=(gbBreakpointsList.indexOf(PC)>=0)?' class="BK"':'';
    st+=(oPC==PC)?' style="background:#9F9;"':'';
    s+='<div id="'+id+'"'+st+'>';
    s+='<span onclick="gb_Show_Function('+PC+');" class="CP U CB80">fn</span> ';
    s+='<span onclick="gb_Set_Breakpoint('+PC+');" class="CP C800">';
    s+=zf(hex(PC),4)+': ';
    s+=zf(hex(MEMR(PC)),2)+' = ';
    s+=MN[MEMR(PC)]();    
    s+='</span></div>\n';
    PC++;
  }
//else s+='<div>&nbsp;</div>\n';
  $('ASMDUMP').innerHTML=s;  

  PC=oPC;
}

// BACKGROUND //

function gb_Dump_Background() {
  //gb_Draw_Background();
  $('BG_CANVAS').width=512;  
  $('BG_CANVAS').height=512;  
  var bgctx = $('BG_CANVAS').getContext('2d');
  var img = bgctx.getImageData(0,0,512,512);

  var k = 0;
  var c = 0;
  for (var j=0; j<512; j++) {
    for (var i=0; i<512; i++) {
      c = gbColors[gbBackgroundData[j][i]];
      img.data[k++]=c[0];
      img.data[k++]=c[1];
      img.data[k++]=c[2];
      img.data[k++]=255;
    }
  }
  bgctx.putImageData(img, 0,0);

  var b=0;
  var s='BG/Win info @ LCDC Reg'+br;
  b=(gbMemory[_LCDC_]>>5)&1;
  s+='bit5='+b+'; Window display = '+(b==0?'off':'on')+br;

  b=(gbMemory[_LCDC_]>>4)&1;
  s+='bit4='+b+'; Tile data = '+((b==0)?'0x8800-0x97FF':'0x8000-0x8FFF')+br;

  b=(gbMemory[_LCDC_]>>3)&1;
  s+='bit3='+b+'; Tile map = '+((b==0)?'0x9800-0x9BFF':'0x9C00-0x9FFF')+br;

  b=(gbMemory[_LCDC_]>>0)&1;
  s+='bit0='+b+'; Display = '+((b==0)?'off':'on')+br;
  
  $('BG_INFO').innerHTML=s;
    
}

// CARTRIDGE INFO

function gb_Dump_Cartridge_info() {
  var s = '';
  s+= 'Game name:&nbsp;&nbsp;&nbsp;&nbsp;';
  s+= '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+br;
  s+= gbROMInfo.Name+'<hr>';
  s+= 'Type: '+br+gbCartridgeTypes[gbROMInfo.CartridgeType]+'<hr>';
  
  s+= 'ROM Size: '+br+gbROMInfo.ROMBanks+' banks: ';
  s+= (gbROMInfo.ROMBanks*32)+' Kb'+'<hr>';
  
  s+= 'RAM Size: '+br+gbROMInfo.RAMBanks+' banks: ';
  s+= (gbROMInfo.RAMBanks*32)+' Kb';
  
  $('ROM_INFO').innerHTML = s;
}

// SPRITES //
/*
function dump_sp() {
  var b=0;
  var s='Sprite info @ LCDC Reg'+br;

  b=(gbMemory[_LCDC_]>>2)&1;
  s+='bit2='+b+'; OBJ size='+((b==0)?'8x8':'8x16')+br;

  b=(gbMemory[_LCDC_]>>1)&1;
  s+='bit1='+b+'; OBJ display='+((b==1)?'On':'Off')+br;

  $('SP_INFO').innerHTML=s;
}
*/
// COMMON //

var memScroll;
var asmScroll;
var gbDebuggerInitiated = false;

function gb_Init_Debugger() {
  if (!gbDebuggerInitiated) {
    $('DEBUGGER').innerHTML=gbDebuggerControls;
    memScroll = new scrollBar('MEMSCROLL',gb_Dump_Mem);
    asmScroll = new scrollBar('ASMSCROLL',gb_Dump_ASM);
    gbDebuggerInitiated = true;
  }  
}

var gbDebuggerControls =
'<div class="FL MT MR MB">\
<table>\
<thead><tr><th colspan="2" style="min-width:270px;">Assembler</th></tr></thead>\
<tbody><tr><td colspan="2">\
<input class="BTN" type="button" onclick="gb_Clear_All_Breakpoints();" value="Clear all breakpoints"/>\
<input class="BTN" type="button" onclick="gb_GoTo_ASM(prompt(\'Enter address (in hex)\'));" value="Goto..."/>\
<input class="BTN" type="button" onclick="alert(gb_Dump_Caller_Stack());" value="Caller stack..."/>\
</td></tr>\
<tr>\
<td id="ASMDUMP">data</td>\
<td id="ASMSCROLL">s</td>\
</tr>\
</tbody>\
</table>\
</div>\
\
<div class="FL MT MR MB">\
<table>\
<thead><tr><th colspan="2">Memory dump</th></tr></thead>\
<tbody>\
<tr><td colspan="2">\
<input value="ROM0" class="BTN" type="button" onclick="memScroll.dragger.setpos(0,0x0000/(0xFFFF-dump_mem_a));gb_gb_Dump_Mem();"/>\
<input value="ROM1" class="BTN" type="button" onclick="memScroll.dragger.setpos(0,0x4000/(0xFFFF-dump_mem_a));gb_Dump_Mem();"/>\
<input value="VRAM" class="BTN" type="button" onclick="memScroll.dragger.setpos(0,0x8000/(0xFFFF-dump_mem_a));gb_Dump_Mem();"/>\
<input value="OAM" class="BTN" type="button" onclick="memScroll.dragger.setpos(0,0xFE00/(0xFFFF-dump_mem_a));gb_Dump_Mem();"/>\
<input value="PC" class="BTN" type="button" onclick="memScroll.dragger.setpos(0,PC/(0xFFFF-dump_mem_a));gb_Dump_Mem();"/>\
<input value="SP" class="BTN" type="button" onclick="memScroll.dragger.setpos(0,SP/(0xFFFF-dump_mem_a));gb_Dump_Mem();"/>\
<input value="HL" class="BTN" type="button" onclick="memScroll.dragger.setpos(0,HL/(0xFFFF-dump_mem_a));gb_Dump_Mem();"/>\
</td></tr>\
<tr>\
<td id="MEMDUMP">a</td>\
<td id="MEMSCROLL">s</td>\
</tr>\
</tbody>\
</table>\
</div>\
\
<div class="FL">\
<table class="FL MT MR MB C">\
<thead><tr><th colspan="2">CPU Dump</th></tr></thead>\
<tbody>\
<tr><td id="RA">A</td><td id="RF">F</td></tr>\
<tr><td id="RB">B</td><td id="RC">C</td></tr>\
<tr><td id="RD">D</td><td id="RE">E</td></tr>\
<tr><td colspan="2" id="HL">HL</td></tr>\
<tr><td colspan="2" id="SP">SP</td></tr>\
<tr><td colspan="2" id="PC">PC</td></tr>\
</tbody>\
</table>\
\
<table class="MT MR C CLR">\
<thead><tr><th>Cartridge Info</th></tr></thead>\
<tbody>\
<tr><td class="L" id="ROM_INFO">info</td></tr>\
</tbody>\
</table>\
</div>\
\
<div class="FL MT MR MB">\
<table>\
<thead><tr><th>Special regs</th></tr></thead>\
<tbody><tr><td id="SPRDUMP">data</td></tr></tbody>\
</table>\
</div>\
\
<!--\
<div class="FL MR CLR">\
<table class="C FL MR">\
<thead><tr><th>Tile images</th></tr></thead>\
<tbody>\
<tr><td id="TILES">tiles</td></tr>\
</tbody>\
</table>\
\
<table class="FL MR MB">\
<thead><tr><th>Background buffer</th></tr></thead>\
<tbody>\
<tr><td>\
<canvas id="BG_CANVAS" width="512" height="512"></canvas>\
<hr/>\
<span id="BG_INFO"></span>\
<input type="button" value="update" onclick="gb_Dump_Background()"/>\
</td></tr>\
</tbody>\
</table>\
\
\
<table class="FL MR MB">\
<thead><tr><th>Sprites</th></tr></thead>\
<tbody>\
<tr><td>\
<canvas style="background:#C8FFD0;" id="SP_CANVAS" width="160" height="144"></canvas>\
<hr/>\
<span id="SP_INFO"></span>\
</td></tr>\
</tbody>\
</table>\
</div>\
-->\
';



var gbRunInterval;
var gbFpsInterval;

function gb_Frame() {
  gbEndFrame=false;
  while (!(gbEndFrame||gbPause)) {
    if (!gbHalt) OP[MEMR(PC++)](); else gbCPUTicks=4;
    if (gbIME) gbInterrupts[gbRegIE & gbRegIF]();
    gb_TIMER_Control();
    if (gbIsBreakpoint) if (gbBreakpointsList.indexOf(PC)>=0) {
      gb_Pause();
      gb_Toggle_Debugger(true);
    }  
  }
}

function gb_Step(){
  if (!gbHalt) OP[MEMR(PC++)](); else gbCPUTicks=4;
  if (gbIME) gbInterrupts[gbRegIE & gbRegIF]();
  gb_TIMER_Control();
  gb_Dump_All();
}

function gb_Run() {
  if (!gbPause) return;
  gbPause=false;
  $('BR').disabled=1;
  $('BP').disabled=0;
  $('BS').disabled=1;
  gbFpsInterval=setInterval(gb_Show_Fps,1000);
  gbRunInterval=setInterval(gb_Frame,16);
}

function gb_Pause() {
  if (gbPause) return;
  gbPause=true;
  $('BR').disabled=0;
  $('BP').disabled=1;
  $('BS').disabled=0;
  clearInterval(gbRunInterval);
  clearInterval(gbFpsInterval);
  $('STATUS').innerHTML='Pause';
  gb_Dump_All();        
}

function gb_Insert_Cartridge(fileName, Start) {
  gb_Pause();
  gbSeconds = 0;
  gbFrames  = 0;
  gb_Init_Debugger();
  gb_Init_Memory();
  gb_Init_LCD();
  gb_Init_Interrupts();
  gb_Init_CPU();
  gb_Init_Input();
  gb_ROM_Load('roms/'+fileName);
  gb_Dump_All();
  if (Start) $('BR').onclick();
  else $('BP').onclick();
}





var gbSeconds = 0;
var gbFrames  = 0;

function gb_Resize_LCD() {
  if ($('BX').value=='Size x2') {
    $('BX').value='Size x3';
    $('LCD').style.width='320px';
    $('LCD').style.height='288px';
  }
  else if ($('BX').value=='Size x3') {
    $('BX').value='Size x1';
    $('LCD').style.width='480px';
    $('LCD').style.height='432px';
  }
  else {
    $('BX').value='Size x2';
    $('LCD').style.width='160px';
    $('LCD').style.height='144px';
  }
}

function gb_Show_Fps() {
  gbFrames+=gbFPS;
  gbSeconds++;
  $('STATUS').innerHTML = 
    'Running: '+gbFPS+' '+
    'fps - Average: '+(gbFrames/gbSeconds).toFixed(2)+' - '+
    'Bank switches/s: '+gbBankSwitchCount;
  gbFPS=0;
  gbBankSwitchCount=0;
}

function gb_Toggle_Debugger(show) {
  $('DEBUGGER').style.height=(show)?'auto':'0px';
}

window.onload = function() {
  gb_Insert_Cartridge($('CARTRIDGE').value, false);
  gb_Toggle_Debugger($('TOGGLE_DEBUGGER').checked);
}




<!--
google_ad_client = "pub-7288014189644083";
/* jsgb 468x60, creado 30/10/09 */
google_ad_slot = "9211520759";
google_ad_width = 468;
google_ad_height = 60;
//-->



(function(){var g=true,h=null,j=false,aa=(new Date).getTime(),k=function(a){var b=(new Date).getTime()-aa;b="&dtd="+(b<1E3?b:"M");return a+b};var l=this,ba=function(a,b,c){a=a.split(".");c=c||l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:(c[d]={})},m=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";
if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b},o=function(a){return m(a)=="array"},ca=function(a){var b=m(a);return b=="array"||b=="object"&&typeof a.length=="number"},p=function(a){return typeof a=="string"},da=function(a){a=m(a);return a=="object"||
a=="array"||a=="function"},ea=function(a){var b=m(a);if(b=="object"||b=="array"){if(a.clone)return a.clone.call(a);b=b=="array"?[]:{};for(var c in a)b[c]=ea(a[c]);return b}return a},fa=function(a,b){var c=b||l;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}},ga=Date.now||function(){return+new Date},q=function(a,
b,c){ba(a,b,c)};var r=function(a,b){a=parseFloat(a);return isNaN(a)||a>1||a<0?b:a},s=function(a,b){if(a=="true")return g;if(a=="false")return j;return b},ha=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,t=function(a,b){if(!a)return b;return(a=a.match(ha))?a[0]:b};var ia=function(){return t("","googleads.g.doubleclick.net")},ja=function(){return t("","pagead2.googlesyndication.com")},u=function(){return t("","pagead2.googlesyndication.com")};var v=Array.prototype,ka=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},la=function(){return v.concat.apply(v,arguments)},ma=function(a){if(o(a))return la(a);else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}};var w=function(a,b){this.width=a;this.height=b};w.prototype.clone=function(){return new w(this.width,this.height)};w.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};w.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};w.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
w.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};w.prototype.scale=function(a){this.width*=a;this.height*=a;return this};var na=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};var ta=function(a,b){if(b)return a.replace(oa,"&amp;").replace(pa,"&lt;").replace(qa,"&gt;").replace(ra,"&quot;");else{if(!sa.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(oa,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(pa,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(qa,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(ra,"&quot;");return a}},oa=/&/g,pa=/</g,qa=/>/g,ra=/\"/g,sa=/[&<>\"]/,wa=function(a){if(a.indexOf("&")!=-1)return"document"in l&&a.indexOf("<")==-1?ua(a):va(a);return a},ua=function(a){var b=
l.document.createElement("a");b.innerHTML=a;b.normalize&&b.normalize();a=b.firstChild.nodeValue;b.innerHTML="";return a},va=function(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(c.charAt(0)=="#"){c=Number("0"+c.substr(1));if(!isNaN(c))return String.fromCharCode(c)}return b}})},xa=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=c==1?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,
a.length-1)}return a},ya=function(a,b){var c=0;a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");b=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");for(var d=Math.max(a.length,b.length),e=0;c==0&&e<d;e++){var f=a[e]||"",i=b[e]||"",n=new RegExp("(\\d*)(\\D*)","g"),y=new RegExp("(\\d*)(\\D*)","g");do{var F=n.exec(f)||["","",""],G=y.exec(i)||["","",""];if(F[0].length==0&&G[0].length==0)break;c=F[1].length==0?0:parseInt(F[1],10);var ob=G[1].length==0?0:parseInt(G[1],10);c=x(c,ob)||
x(F[2].length==0,G[2].length==0)||x(F[2],G[2])}while(c==0)}return c},x=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};ga();var z,A,B,C,D,za,Aa,Ba,Ca,Da=function(){return l.navigator?l.navigator.userAgent:h},E=function(){return l.navigator},Ea=function(){D=C=B=A=z=j;var a;if(a=Da()){var b=E();z=a.indexOf("Opera")==0;A=!z&&a.indexOf("MSIE")!=-1;C=(B=!z&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;D=!z&&!B&&b.product=="Gecko"}};Ea();
var H=z,I=A,Fa=D,Ga=B,Ha=C,Ia=function(){var a=E();return a&&a.platform||""},Ja=Ia(),Ka=function(){za=Ja.indexOf("Mac")!=-1;Aa=Ja.indexOf("Win")!=-1;Ba=Ja.indexOf("Linux")!=-1;Ca=!!E()&&(E().appVersion||"").indexOf("X11")!=-1};Ka();
var La=za,Ma=Aa,Na=Ba,Oa=function(){var a="",b;if(H&&l.opera){a=l.opera.version;a=typeof a=="function"?a():a}else{if(Fa)b=/rv\:([^\);]+)(\)|;)/;else if(I)b=/MSIE\s+([^\);]+)(\)|;)/;else if(Ga)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(Da()))?a[1]:""}return a},Pa=Oa(),Qa={},J=function(a){return Qa[a]||(Qa[a]=ya(Pa,a)>=0)};var Ra=function(a){return p(a)?document.getElementById(a):a},Sa=Ra,Ua=function(a,b){na(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in Ta)a.setAttribute(Ta[d],c);else a[d]=c})},Ta={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},Va=function(a){var b=a.document;if(Ga&&!J("500")&&!Ha){if(typeof a.innerHeight==
"undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new w(a.innerWidth,b)}a=b.compatMode=="CSS1Compat"&&(!H||H&&J("9.50"))?b.documentElement:b.body;return new w(a.clientWidth,a.clientHeight)},Xa=function(){return Wa(document,arguments)},Wa=function(a,b){var c=b[0],d=b[1];if(I&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',ta(d.name),'"');if(d.type){c.push(' type="',ta(d.type),'"');d=ea(d);delete d.type}c.push(">");c=c.join("")}var e=
a.createElement(c);if(d)if(p(d))e.className=d;else Ua(e,d);if(b.length>2){d=function(i){if(i)e.appendChild(p(i)?a.createTextNode(i):i)};for(c=2;c<b.length;c++){var f=b[c];ca(f)&&!(da(f)&&f.nodeType>0)?ka(Ya(f)?ma(f):f,d):d(f)}}return e},Za=function(a,b){a.appendChild(b)},Ya=function(a){if(a&&typeof a.length=="number")if(da(a))return typeof a.item=="function"||typeof a.item=="string";else if(m(a)=="function")return typeof a.item=="function";return j};var $a=document,K=window;u();var L=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(h,a[c],c,a)},ab=function(a){if(arguments.length<2)return a.length;for(var b=1,c=arguments.length;b<c;++b)a.push(arguments[b]);return a.length};function M(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}
function bb(a,b,c){var d=document.createElement("script");d.type="text/javascript";if(b)d.onload=b;if(c)d.id=c;d.src=a;var e=document.getElementsByTagName("head")[0];if(!e)return j;window.setTimeout(function(){e.appendChild(d)},0);return g}function cb(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=new Image;c.src=b;a.google_image_requests.push(c)}function db(a){if(a in eb)return eb[a];return eb[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var eb={};
function fb(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){a=3;for(var b=1;b;)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(c){b=h}return a.toString()}else if(db("msie")&&!window.opera){b=h;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){a=
0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;b.AllowScriptAccess="always"}catch(e){if(a==6)return a.toString()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(b){a=b.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}}return"0"}function N(a){var b=a.google_ad_format;if(b)return b.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function O(a){return!!a&&a.indexOf("_sdo")!=-1}
function P(a,b){if(!(Math.random()<1.0E-4)){var c=Math.random();if(c<b){b=Math.floor(c/b*a.length);return a[b]}}return""}
var gb=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=window.history.length;a.u_java=navigator.javaEnabled();if(window.screen){a.u_h=window.screen.height;a.u_w=window.screen.width;a.u_ah=window.screen.availHeight;a.u_aw=window.screen.availWidth;a.u_cd=window.screen.colorDepth}if(navigator.plugins)a.u_nplug=navigator.plugins.length;if(navigator.mimeTypes)a.u_nmime=navigator.mimeTypes.length},hb=function(a){var b=K;if(a&&b.top!=b)b=b.top;try{return b.document&&!b.document.body?new w(-1,
-1):Va(b||window)}catch(c){return new w(-12245933,-12245933)}},ib=function(a,b){var c=a.length;if(c==0)return 0;b=b||305419896;for(var d=0;d<c;d++){var e=a.charCodeAt(d);b^=(b<<5)+(b>>2)+e&4294967295}return b},jb=function(a){if(a==a.top)return 0;var b=[];b.push(document.URL);a.name&&b.push(a.name);a=g;a=hb(!a);b.push(a.width.toString());b.push(a.height.toString());b=ib(b.join(""));return b>0?b:4294967296+b};var kb={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_allow_expandable_ads:"ea",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",
google_contents:"contents",google_country:"gl",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_font_face:"f",google_font_size:"fs",google_hints:"hints",
google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",google_page_url:"url",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_tag_info:"gut",google_targeting:"targeting",google_ui_features:"ui",google_ui_version:"uiv",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type"},lb={google_ad_client:"client",google_ad_format:"format",google_ad_output:"output",google_ad_callback:"callback",google_ad_height:"h",google_ad_override:"google_ad_override",
google_ad_slot:"slotname",google_ad_width:"w",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"},mb={google_only_pyv_ads:"pyv",
google_with_pyv_ads:"withpyv"};function nb(a,b){try{return a.top.document.URL==b.URL}catch(c){}return j}function pb(a,b,c,d){c=c||a.google_ad_width;d=d||a.google_ad_height;if(nb(a,b))return j;var e=b.documentElement;if(c&&d){var f=1,i=1;if(a.innerHeight){f=a.innerWidth;i=a.innerHeight}else if(e&&e.clientHeight){f=e.clientWidth;i=e.clientHeight}else if(b.body){f=b.body.clientWidth;i=b.body.clientHeight}if(i>2*d||f>2*c)return j}return g}function qb(a,b){L(b,function(c,d){a["google_"+d]=c})}
function rb(a,b){if(!b)return a.URL;return a.referrer}function sb(a,b){if(!b&&a.google_referrer_url==h)return"0";else if(b&&a.google_referrer_url==h)return"1";else if(!b&&a.google_referrer_url!=h)return"2";else if(b&&a.google_referrer_url!=h)return"3";return"4"}function tb(a,b,c,d){a.page_url=rb(c,d);a.page_location=h}function ub(a,b,c,d){a.page_url=b.google_page_url;a.page_location=rb(c,d)||"EMPTY"}
function vb(a,b){var c={},d=pb(a,b,a.google_ad_width,a.google_ad_height);c.iframing=sb(a,d);a.google_page_url?ub(c,a,b,d):tb(c,a,b,d);c.last_modified_time=b.URL==c.page_url?Date.parse(b.lastModified)/1E3:h;c.referrer_url=d?a.google_referrer_url:a.google_page_url&&a.google_referrer_url?a.google_referrer_url:b.referrer;return c}function wb(a){var b={},c=a.URL.substring(a.URL.lastIndexOf("http"));b.iframing=h;b.page_url=c;b.page_location=a.URL;b.last_modified_time=h;b.referrer_url=c;return b}
function xb(a,b){b=yb(a,b);qb(a,b)}function yb(a,b){return a=a.google_page_url==h&&zb[b.domain]?wb(b):vb(a,b)}var zb={};zb["ad.yieldmanager.com"]=g;var Ab=r("0.0001",0),Bb=r("1",0.01),Cb=r("0.01",0),Db=r("0.01",0),Eb=r("0.008",0),Fb=r("0.01",0),Gb=r("0",0);var Hb=s("false",j),Ib=s("false",j),Jb=s("false",j);var Kb=function(a,b,c){b=fa(b,l,a);a=window.onerror;window.onerror=b;try{c()}catch(d){c=d.toString();var e="";if(d.fileName)e=d.fileName;var f=-1;if(d.lineNumber)f=d.lineNumber;b=b(c,e,f);if(!b)throw d;}window.onerror=a};q("google_protectAndRun",Kb);
var Mb=function(a,b,c,d){if(Math.random()<0.01){var e=$a;a=["http://",ja(),"/pagead/gen_204","?id=jserror","&jscb=",Hb?1:0,"&jscd=",Ib?1:0,"&context=",M(a),"&msg=",M(b),"&file=",M(c),"&line=",M(d.toString()),"&url=",M(e.URL.substring(0,512)),"&ref=",M(e.referrer.substring(0,512))];a.push(Lb());cb(K,a.join(""))}return!Jb};q("google_handleError",Mb);
var Ob=function(a){Nb|=a},Nb=0,Lb=function(){var a=["&client=",M(K.google_ad_client),"&format=",M(K.google_ad_format),"&slotname=",M(K.google_ad_slot),"&output=",M(K.google_ad_output),"&ad_type=",M(K.google_ad_type)];return a.join("")};var Q="",Rb=function(){if(window.google_ad_frameborder==h)window.google_ad_frameborder=0;if(window.google_ad_output==h)window.google_ad_output="html";if(O(window.google_ad_format)){var a=window.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(a){window.google_ad_width=parseInt(a[1],10);window.google_ad_height=parseInt(a[2],10);window.google_ad_output="html"}}window.google_ad_format=Pb(window.google_ad_format,window.google_ad_output,window.google_ad_width,window.google_ad_height,window.google_ad_slot,
!!window.google_override_format);Q=window.google_ad_client||"";window.google_ad_client=Qb(window.google_ad_format,window.google_ad_client);xb(window,document);if(window.google_num_slots_by_channel==h)window.google_num_slots_by_channel={};if(window.google_viewed_host_channels==h)window.google_viewed_host_channels={};if(window.google_num_slots_by_client==h)window.google_num_slots_by_client={};if(window.google_prev_ad_formats_by_region==h)window.google_prev_ad_formats_by_region={};if(window.google_prev_ad_slotnames_by_region==
h)window.google_prev_ad_slotnames_by_region={};if(window.google_correlator==h)window.google_correlator=(new Date).getTime();if(window.google_adslot_loaded==h)window.google_adslot_loaded={};if(window.google_adContentsBySlot==h)window.google_adContentsBySlot={};if(window.google_flash_version==h)window.google_flash_version=fb();if(window.google_new_domain_checked==h)window.google_new_domain_checked=0;if(window.google_new_domain_enabled==h)window.google_new_domain_enabled=0;if(!window.google_num_ad_slots)window.google_num_ad_slots=
0;if(!window.google_num_0ad_slots)window.google_num_0ad_slots=0;if(!window.google_num_sdo_slots)window.google_num_sdo_slots=0;window.google_ad_section=window.google_ad_section||window.google_ad_region||"";window.google_country=window.google_country||window.google_gl||"";a=(new Date).getTime();if(o(window.google_color_bg))window.google_color_bg=R(window.google_color_bg,a);if(o(window.google_color_text))window.google_color_text=R(window.google_color_text,a);if(o(window.google_color_link))window.google_color_link=
R(window.google_color_link,a);if(o(window.google_color_url))window.google_color_url=R(window.google_color_url,a);if(o(window.google_color_border))window.google_color_border=R(window.google_color_border,a);if(o(window.google_color_line))window.google_color_line=R(window.google_color_line,a)},Sb=function(a){L(kb,function(b,c){a[c]=h});L(lb,function(b,c){a[c]=h});L(mb,function(b,c){a[c]=h});a.google_container_id=h;a.google_eids=h;a.google_page_location=h;a.google_referrer_url=h;a.google_ad_region=h;
a.google_gl=h},R=function(a,b){Ob(2);return a[b%a.length]},Qb=function(a,b){if(!b)return"";b=b.toLowerCase();return b=O(a)?Tb(b):Ub(b)},Ub=function(a){if(a&&a.substring(0,3)!="ca-")a="ca-"+a;return a},Tb=function(a){if(a&&a.substring(0,7)!="ca-aff-")a="ca-aff-"+a;return a},Pb=function(a,b,c,d,e,f){if(!a&&b=="html")a=c+"x"+d;return a=Vb(a,e,f)?a.toLowerCase():""},Vb=function(a,b,c){if(!a)return j;if(!b)return g;return c};var S=document,T=navigator,U=window;
function Wb(){var a=S.cookie,b=Math.round((new Date).getTime()/1E3),c=U.google_analytics_domain_name;c=typeof c=="undefined"?Xb("auto"):Xb(c);var d=a.indexOf("__utma="+c+".")>-1,e=a.indexOf("__utmb="+c)>-1,f=a.indexOf("__utmc="+c)>-1,i={},n=!!U&&!!U.gaGlobal;if(d){a=a.split("__utma="+c+".")[1].split(";")[0].split(".");i.sid=e&&f?a[3]+"":n&&U.gaGlobal.sid?U.gaGlobal.sid:b+"";i.vid=a[0]+"."+a[1];i.from_cookie=g}else{i.sid=n&&U.gaGlobal.sid?U.gaGlobal.sid:b+"";i.vid=n&&U.gaGlobal.vid?U.gaGlobal.vid:
(Math.round(Math.random()*2147483647)^Yb()&2147483647)+"."+b;i.from_cookie=j}i.dh=c;i.hid=n&&U.gaGlobal.hid?U.gaGlobal.hid:Math.round(Math.random()*2147483647);return U.gaGlobal=i}
function Yb(){var a=S.cookie?S.cookie:"",b=U.history.length,c,d=[T.appName,T.version,T.language?T.language:T.browserLanguage,T.platform,T.userAgent,T.javaEnabled()?1:0].join("");if(U.screen)d+=U.screen.width+"x"+U.screen.height+U.screen.colorDepth;else if(U.java){c=java.awt.Toolkit.getDefaultToolkit().getScreenSize();d+=c.screen.width+"x"+c.screen.height}d+=a;d+=S.referrer?S.referrer:"";for(a=d.length;b>0;)d+=b--^a++;return Zb(d)}
function Zb(a){var b=1,c=0,d;if(!(a==undefined||a=="")){b=0;for(d=a.length-1;d>=0;d--){c=a.charCodeAt(d);b=(b<<6&268435455)+c+(c<<14);c=b&266338304;b=c!=0?b^c>>21:b}}return b}function Xb(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=S.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return Zb(a.toLowerCase())};var V=function(){this.defaultBucket=[];this.layers={};for(var a=0,b=arguments.length;a<b;++a)this.layers[arguments[a]]=""},$b=function(a){for(var b=new V,c=0,d=a.defaultBucket.length;c<d;++c)b.defaultBucket.push(a.defaultBucket[c]);L(a.layers,fa(V.prototype.f,b));return b},ac=function(a){if(!(a&&a.defaultBucket&&a.defaultBucket.push&&a.layers))return j;var b=g,c=function(d,e){if(!(e in a)||typeof d!=typeof a[e])b=j};L(V.prototype,c);return b};V.prototype.f=function(a,b){this.layers[b]=a};
V.prototype.z=function(a,b){if(a=="")return"";if(!b){this.defaultBucket.push(a);return a}if(this.layers.hasOwnProperty(b))return this.layers[b]=a;return""};V.prototype.d=function(a,b,c){if(!(Math.random()<1.0E-4)&&this.p(c)){var d=Math.random();if(d<b){b=Math.floor(a.length*d/b);if(a=a[b])return this.z(a,c)}}return""};V.prototype.p=function(a){if(!a)return g;return this.layers.hasOwnProperty(a)&&this.layers[a]==""};V.prototype.a=function(a){if(this.layers.hasOwnProperty(a))return this.layers[a];return""};
V.prototype.o=function(){var a=[],b=function(c){c!=""&&a.push(c)};L(this.layers,b);if(this.defaultBucket.length>0&&a.length>0)return this.defaultBucket.join(",")+","+a.join(",");return this.defaultBucket.join(",")+a.join(",")};var bc={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1};function cc(a){a=a.google_page_location||a.google_page_url;if(!a)return j;a=a.toString();if(a.indexOf("http://")==0)a=a.substring(7,a.length);else if(a.indexOf("https://")==0)a=a.substring(8,a.length);var b=a.indexOf("/");if(b==-1)b=a.length;a=a.substring(0,b);a=a.split(".");b=j;if(a.length>=3)b=a[a.length-3]in bc;if(a.length>=2)b=b||a[a.length-2]in bc;return b}
function dc(a,b,c){if(cc(a)){a.google_new_domain_checked=1;return j}if(a.google_new_domain_checked==0){var d=Math.random();if(d<=c){c="http://"+ia()+"/pagead/test_domain.js";d="script";b.write("<"+d+' src="'+c+'"></'+d+">");a.google_new_domain_checked=1;return g}}return j}var ec=function(a,b){if(!b)return j;if(b.a("1")=="44901211")return 0==a%2;if(b.a("1")=="44901215")return 0==Math.floor(a/2)%2;if(b.a("1")=="44901216")return 1==Math.floor(a/2)%2;return j};
function fc(a,b,c){if(!cc(a)&&a.google_new_domain_enabled==1)return ec(b,c)?"http://"+t("","googleads2.g.doubleclick.net"):"http://"+ia();return"http://"+ja()};var W=function(a){this.A=a;this.i=[];this.h=0;this.b=[];this.t=0;this.c=[];this.r=j;this.j=this.k="";this.q=j};W.prototype.v=function(a,b){var c=this.A[b],d=this.i;this.A[b]=function(e){if(e&&e.length>0){var f=e.length>1?e[1].url:h;d.push([a,wa(e[0].url),f])}c(e)}};W.prototype.u=function(){this.h++};W.prototype.w=function(a){this.b.push(a)};var gc="http://"+u()+"/pagead/osd.js";W.prototype.s=function(){if(!this.r){bb(gc);this.r=g}};
W.prototype.l=function(a){if(this.h>0)for(var b=document.getElementsByTagName("iframe"),c=this.q?"google_ads_iframe_":"google_ads_frame",d=0;d<b.length;d++){var e=b.item(d);e.src&&e.name&&e.name.indexOf(c)==0&&a(e,e.src)}};
W.prototype.m=function(a){var b=this.i;if(b.length>0)for(var c=document.getElementsByTagName("a"),d=0;d<c.length;d++)for(var e=0;e<b.length;e++)if(c.item(d).href==b[e][1]){var f=c.item(d).parentNode;if(b[e][2])for(var i=f,n=0;n<4;n++){if(i.innerHTML.indexOf(b[e][2])>0){f=i;break}i=i.parentNode}a(f,b[e][0]);b.splice(e,1);break}};W.prototype.n=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b],d=hc(c);if(d)(d=document.getElementById("google_ads_div_"+d))&&a(d,c)}};
W.prototype.e=function(a){this.m(a);this.n(a);this.l(a)};W.prototype.setupOsd=function(a,b,c){this.t=a;this.k=b;this.j=c};W.prototype.getOsdMode=function(){return this.t};W.prototype.getEid=function(){return this.k};W.prototype.getCorrelator=function(){return this.j};W.prototype.g=function(){return this.i.length+this.h+this.b.length};W.prototype.setValidOutputTypes=function(a){this.c=a};
W.prototype.registerAdBlockByType=function(a,b,c){if(this.c.length>0){for(var d=0;d<this.c.length;d++)if(this.c[d]==a){this.q=c;if(a=="js")this.v(b,"google_ad_request_done");else if(a=="html")this.u();else a=="json_html"&&this.w(b)}this.s()}};var hc=function(a){if((a=a.match(/[&\?](?:slotname)=([^&]+)/))&&a.length==2)return a[1];return""},ic=function(){window.__google_ad_urls||(window.__google_ad_urls=new W(window));return window.__google_ad_urls};q("Goog_AdSense_getAdAdapterInstance",ic);
q("Goog_AdSense_OsdAdapter",W);q("Goog_AdSense_OsdAdapter.prototype.numBlocks",W.prototype.g);q("Goog_AdSense_OsdAdapter.prototype.findBlocks",W.prototype.e);q("Goog_AdSense_OsdAdapter.prototype.getOsdMode",W.prototype.getOsdMode);q("Goog_AdSense_OsdAdapter.prototype.getEid",W.prototype.getEid);q("Goog_AdSense_OsdAdapter.prototype.getCorrelator",W.prototype.getCorrelator);q("Goog_AdSense_OsdAdapter.prototype.setValidOutputTypes",W.prototype.setValidOutputTypes);
q("Goog_AdSense_OsdAdapter.prototype.setupOsd",W.prototype.setupOsd);q("Goog_AdSense_OsdAdapter.prototype.registerAdBlockByType",W.prototype.registerAdBlockByType);var jc=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a.document;if(c.defaultView&&c.defaultView.getComputedStyle)if(a=c.defaultView.getComputedStyle(a,""))return a[b];return h},kc=function(a,b){return jc(a,b)||(a.currentStyle?a.currentStyle[b]:h)||a.style[b]},lc=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);else{var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b}},mc=function(a){var b=
a.nodeType==9?a:a.ownerDocument||a.document,c="";if(b.createTextRange){c=b.body.createTextRange();c.moveToElementText(a);c=c.queryCommandValue("FontName")}if(!c){c=kc(a,"fontFamily");if(H&&Na)c=c.replace(/ \[[^\]]*\]/,"")}a=c.split(",");if(a.length>1)c=a[0];return xa(c,"\"'")},nc=/[^\d]+$/,oc=function(a){return(a=a.match(nc))&&a[0]||h},pc={cm:1,"in":1,mm:1,pc:1,pt:1},qc={em:1,ex:1},rc=function(a){var b=kc(a,"fontSize"),c=oc(b);if(b&&"px"==c)return parseInt(b,10);if(I)if(c in pc)return lc(a,b,"left",
"pixelLeft");else if(a.parentNode&&a.parentNode.nodeType==1&&c in qc){a=a.parentNode;c=kc(a,"fontSize");return lc(a,b==c?"1em":b,"left","pixelLeft")}c=Xa("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});Za(a,c);b=c.offsetHeight;c&&c.parentNode&&c.parentNode.removeChild(c);return b};var sc,X={};function tc(a){if(a==1)return g;return!X[a]}function uc(a,b){if(!(!a||a==""))if(b==1)if(X[b])X[b]+=","+a;else X[b]=a;else X[b]=a}function vc(){var a=[];L(X,function(b){a.push(b)});return a.join(",")}function wc(a,b){if(o(a))for(var c=0;c<a.length;c++)p(a[c])&&uc(a[c],b)}var Y=j;
function xc(a,b){var c="script";Y=yc(a,b);if(!Y)a.google_allow_expandable_ads=j;var d=!zc();Y&&d&&b.write("<"+c+' src="http://'+u()+'/pagead/expansion_embed.js"></'+c+">");a=dc(a,b,Bb);(d=d||a)&&db("msie")&&!window.opera?b.write("<"+c+' src="http://'+u()+'/pagead/render_ads.js"></'+c+">"):b.write("<"+c+'>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</'+c+">")}function Z(a){return a!=h?'"'+a+'"':'""'}
function Ac(a){var b="google_unique_id";if(a[b])++a[b];else a[b]=1;return a[b]}var Bc=function(a,b){var c=b.slice(-1),d=c=="?"||c=="#"?"":"&",e=[b];b=function(f,i){if(f||f===0||f===j){if(typeof f=="boolean")f=f?1:0;ab(e,d,i,"=",M(f));d="&"}};L(a,b);return e.join("")};function Cc(){var a=I&&J("6"),b=Fa&&J("1.8.1"),c=Ga&&J("525");if(Ma&&(a||b||c))return g;else if(La&&(c||b))return g;else if(Na&&b)return g;return j}
function zc(){return(typeof ExpandableAdSlotFactory=="function"||typeof ExpandableAdSlotFactory=="object")&&typeof ExpandableAdSlotFactory.createIframe=="function"}function yc(a,b){if(a.google_allow_expandable_ads===j||!b.body||a.google_ad_output!="html"||pb(a,b)||!Dc(a)||isNaN(a.google_ad_height)||isNaN(a.google_ad_width)||!Cc())return j;return g}function Dc(a){var b=a.google_ad_format;if(O(b))return j;if(N(a)&&b!="468x15_0ads_al")return j;return g}
function Ec(){var a;if(K.google_ad_output=="html"&&!(N(K)||O(K.google_ad_format))&&tc(0)){a=["6083035","6083034"];a=P(a,Gb);uc(a,0)}return a=="6083035"}function Fc(a,b){if((a.google_unique_id||0)!=0||O(a.google_ad_format))return"";var c="";a=N(a);if(b=="html"||a)c=P(["36815001","36815002"],Cb);if(c==""&&(b=="js"||a))c=P(["36815003","36815004"],Db);if(c==""&&(b=="html"||b=="js"))c=P(["36813005","36813006"],Eb);return c}
function Gc(){var a=ic(),b=window.google_enable_osd,c;if(b===g){c="36813006";Hc(c,a)}else if(b!==j&&tc(0)){c=a.getEid();if(c=="")(c=Fc(window,window.google_ad_output))&&Hc(c,a);else if(c!="36815001"&&c!="36815002"&&c!="36815003"&&c!="36815004"&&c!="36813005"&&c!="36813006")c=""}if(c){uc(c,0);return c}return""}
function Hc(a,b){var c=b.getOsdMode(),d=[];switch(a){case "36815004":c=1;d=["js"];break;case "36815002":c=1;d=["html"];break;case "36813006":c=0;d=["html","js"];break}d.length>0&&b.setValidOutputTypes(d);b.setupOsd(c,a,window.google_correlator)}
function Ic(a,b,c,d){var e=Ac(a);c=Bc({ifi:e},c);c=c.substring(0,1992);c=c.replace(/%\w?$/,"");var f="script";if((a.google_ad_output=="js"||a.google_ad_output=="json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))b.write("<"+f+' language="JavaScript1.1" src='+Z(k(c))+"></"+f+">");else if(a.google_ad_output=="html")if(Y&&zc()){b=a.google_container_id||d||h;a["google_expandable_ad_slot"+e]=ExpandableAdSlotFactory.createIframe("google_ads_frame"+e,k(c),a.google_ad_width,a.google_ad_height,
b)}else{e='<iframe name="google_ads_frame" width='+Z(a.google_ad_width)+" height="+Z(a.google_ad_height)+" frameborder="+Z(a.google_ad_frameborder)+" src="+Z(k(c))+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>';a.google_container_id?Jc(a.google_container_id,b,e):b.write(e)}return c}function Kc(a){Sb(a)}
function Lc(a){var b=Mc().a("ac1")=="44901217";if(!Nc(b))return j;b=Ec();var c=fc(window,window.google_unique_id||0,Mc());a=Oc(a);b=c+Pc(a.google_ad_format,b);window.google_ad_url=Bc(a,b);return g}
var Sc=function(a){a.dt=aa;var b=window.google_prev_ad_formats_by_region,c=window.google_ad_section,d=window.google_ad_format,e=window.google_ad_slot;if(b[c])if(!O(d)){a.prev_fmts=b[c];if(window.google_num_slots_by_client.length>1)a.slot=window.google_num_slots_by_client[Q]}var f=window.google_prev_ad_slotnames_by_region;if(f[c])a.prev_slotnames=f[c].toLowerCase();if(d){if(!O(d))if(b[c])b[c]+=","+d;else b[c]=d}else if(e)if(f[c])f[c]+=","+e;else f[c]=e;a.correlator=window.google_correlator;if(window.google_new_domain_checked==
1&&window.google_new_domain_enabled==0)a.dblk=1;if(window.google_ad_channel){b=window.google_num_slots_by_channel;c="";d=window.google_ad_channel.split(Qc);for(e=0;e<d.length;e++){f=d[e];if(b[f])c+=f+"+";else b[f]=1}a.pv_ch=c}if(window.google_ad_host_channel){b=Rc(window.google_ad_host_channel,window.google_viewed_host_channels);a.pv_h_ch=b}if(Hb)a.jscb=1;if(Ib)a.jscd=1;a.frm=window.google_iframing;b=Wb();a.ga_vid=b.vid;a.ga_sid=b.sid;a.ga_hid=b.hid;a.ga_fc=b.from_cookie;a.ga_wpids=window.google_analytics_uacct},
Tc=function(a){var b=g;if(b=hb(b)){a.biw=b.width;a.bih=b.height}},Uc=function(a){var b=jb(window);if(b!=0)a.ifk=b.toString()};function Rc(a,b){var c=a.split("|");a=-1;for(var d=[],e=0;e<c.length;e++){var f=c[e].split(Qc);b[e]||(b[e]={});for(var i="",n=0;n<f.length;n++){var y=f[n];if(y!="")if(b[e][y])i+="+"+y;else b[e][y]=1}i=i.slice(1);d[e]=i;if(i!="")a=e}b="";if(a>-1){for(e=0;e<a;e++)b+=d[e]+"|";b+=d[a]}return b}
var $=function(){if(window.google_exp_persistent&&ac(window.google_exp_persistent))return window.google_exp_persistent;return new V("1","ac1")};q("google_exp_persistent",$());var Mc=function(){sc||(sc=$b($()));return sc};function Vc(){var a=["44901211","44901215","44901216","44901212"];$().d(a,Ab,"1");a=["44901217","44901218"];$().d(a,Fb,"ac1")}
function Wc(){0==(window.google_unique_id||0)&&Vc();var a=Gc(),b=Math.random()<0.01,c=h,d="";if(b){d="google_temp_span";c=Xc(d)}b=Lc(c);c&&c.id==d&&(c&&c.parentNode?c.parentNode.removeChild(c):h);if(b){c=Ic(window,document,window.google_ad_url);a&&ic().registerAdBlockByType(window.google_ad_output,c,j);Kc(window)}}
var Yc=function(a){L(lb,function(b,c){a[b]=window[c]});L(kb,function(b,c){a[b]=window[c]});L(mb,function(b,c){a[b]=window[c]})},Zc=function(a){wc(window.google_eids,1);a.eid=vc();var b=Mc().o();if(a.eid.length>0&&b.length>0)a.eid+=",";a.eid+=b};function $c(a,b,c,d){a=Mb(a,b,c,d);xc(window,document);return a}function ad(){Rb()}
function bd(a){var b={};a=a.split("?");a=a[a.length-1].split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(d[0])try{b[d[0].toLowerCase()]=d.length>1?window.decodeURIComponent?decodeURIComponent(d[1].replace(/\+/g," ")):unescape(d[1]):""}catch(e){}}return b}function cd(){var a=window,b=bd(document.URL);if(b.google_ad_override){a.google_ad_override=b.google_ad_override;a.google_adtest="on"}}
function Jc(a,b,c){if(a)if((a=b.getElementById(a))&&c&&c.length!=""){a.style.visibility="visible";a.innerHTML=c}}
var Pc=function(a,b){return a=O(a)?"/pagead/sdo?":b?"/pagead/render_iframe_ads.html#":"/pagead/ads?"},dd=function(a,b){b.dff=mc(a);b.dfs=rc(a)},ed=function(a){a.ref=window.google_referrer_url;a.loc=window.google_page_location},Nc=function(a){var b=window.google_prev_ad_formats_by_region,c=window.google_prev_ad_slotnames_by_region,d=window.google_ad_section;if(O(window.google_ad_format)){window.google_num_sdo_slots+=1;if(!a&&window.google_num_sdo_slots>4)return j}else if(N(window)){window.google_num_0ad_slots+=
1;if(!a&&window.google_num_0ad_slots>3)return j}else{window.google_num_ad_slots+=1;if(window.google_num_slots_to_rotate){Ob(1);b[d]=h;c[d]=h;if(window.google_num_slot_to_show==h)window.google_num_slot_to_show=(new Date).getTime()%window.google_num_slots_to_rotate+1;if(window.google_num_slot_to_show!=window.google_num_ad_slots)return j}else if(!a&&window.google_num_ad_slots>6&&d=="")return j}a=window.google_num_slots_by_client;if(a[Q])a[Q]+=1;else{a[Q]=1;a.length+=1}return g},Oc=function(a){var b=
{};Yc(b);Sc(b);gb(b);a&&dd(a,b);Tc(b);Uc(b);Zc(b);ed(b);b.fu=Nb;return b},Xc=function(a){var b=window.google_container_id&&Sa(window.google_container_id)||Sa(a);if(!b&&!window.google_container_id&&a){document.write("<span id="+a+"></span>");b=Sa(a)}return b},Qc=/[+, ]/;window.google_render_ad=Wc;function fd(){if(Jb&&typeof K.alternateShowAds=="function")K.alternateShowAds.call(h);else{cd();Kb("show_ads.google_init_globals",$c,ad);xc(window,document)}}Kb("show_ads.main",Mb,fd);})()
