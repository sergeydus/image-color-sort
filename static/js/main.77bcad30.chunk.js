(this["webpackJsonpimage-color-sort"]=this["webpackJsonpimage-color-sort"]||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){e.exports=a(23)},20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),o=a.n(r),c=(a(20),a(21),a(22),a(4)),i=(a(12),a(9),a(10)),g=a(7),h=a(8),u=a(6),d=null;function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e.current,l=n.getContext("2d"),r=n.width,o=n.height,c=l.getImageData(0,0,r,o),i=[];if(t)if(a){for(var g=0;g<o;g++){for(var h=[],u=0;u<r;u++){var d=k([c.data[4*(g*r+u)+0],c.data[4*(g*r+u)+1],c.data[4*(g*r+u)+2]]).h;h.push(d)}i.push(h)}console.log(i)}else for(var s=0;s<r;s++){for(var m=[],f=0;f<o;f++){var v=k([c.data[4*(f*r+s)+0],c.data[4*(f*r+s)+1],c.data[4*(f*r+s)+2]]).h;m.push(v)}i.push(m)}else for(var p=0;p<r;p++)for(var E=0;E<o;E++){var b=k([c.data[4*(p*o+E)+0],c.data[4*(p*o+E)+1],c.data[4*(p*o+E)+2]]).h;i.push(b)}return i}function m(e,t){var a,n=e.current,l=n.width,r=n.height,o=n.getContext("2d"),c=o.getImageData(0,0,l,r),i=c.data,g=!1;a=s(e,!1);for(var h=1;h<a.length;h++)if(a[h]<a[h-1]){g=!0;var u=i[4*h+0],m=i[4*h+1],f=i[4*h+2],v=i[4*h+3];i[4*h+0]=i[4*(h-1)+0],i[4*h+1]=i[4*(h-1)+1],i[4*h+2]=i[4*(h-1)+2],i[4*h+3]=i[4*(h-1)+3],i[4*(h-1)+0]=u,i[4*(h-1)+1]=m,i[4*(h-1)+2]=f,i[4*(h-1)+3]=v}o.putImageData(c,0,0),g||(clearInterval(d),console.log("done",d),t(!1))}function f(e,t){var a,n=e.current,l=n.width,r=n.height,o=n.getContext("2d"),c=o.getImageData(0,0,l,r),i=c.data,g=!1;a=s(e,!0);for(var h=0;h<a.length;h++)for(var u=1;u<a[h].length;u++)if(a[h][u]<a[h][u-1]){g=!0;var m=i[4*(h*a[0].length+u)+0],f=i[4*(h*a[0].length+u)+1],v=i[4*(h*a[0].length+u)+2],p=i[4*(h*a[0].length+u)+3];i[4*(h*a[0].length+u)+0]=i[4*(h*a[0].length+u-1)+0],i[4*(h*a[0].length+u)+1]=i[4*(h*a[0].length+u-1)+1],i[4*(h*a[0].length+u)+2]=i[4*(h*a[0].length+u-1)+2],i[4*(h*a[0].length+u)+3]=i[4*(h*a[0].length+u-1)+3],i[4*(h*a[0].length+u-1)+0]=m,i[4*(h*a[0].length+u-1)+1]=f,i[4*(h*a[0].length+u-1)+2]=v,i[4*(h*a[0].length+u-1)+3]=p}o.putImageData(c,0,0),g||(console.log("done",d,"calling callback"),clearInterval(d),t(!1))}function v(e,t){var a,n=e.current,l=n.width,r=n.height,o=n.getContext("2d"),c=o.getImageData(0,0,l,r),i=c.data,g=!1;a=s(e,!0,!1),console.log(a);for(var h=0;h<a.length;h++)for(var u=1;u<a[h].length;u++)if(a[h][u]<a[h][u-1]){g=!0;var m=i[4*(u*a.length+h)+0],f=i[4*(u*a.length+h)+1],v=i[4*(u*a.length+h)+2],p=i[4*(u*a.length+h)+3];i[4*(u*a.length+h)+0]=i[4*((u-1)*a.length+h)+0],i[4*(u*a.length+h)+1]=i[4*((u-1)*a.length+h)+1],i[4*(u*a.length+h)+2]=i[4*((u-1)*a.length+h)+2],i[4*(u*a.length+h)+3]=i[4*((u-1)*a.length+h)+3],i[4*((u-1)*a.length+h)+0]=m,i[4*((u-1)*a.length+h)+1]=f,i[4*((u-1)*a.length+h)+2]=v,i[4*((u-1)*a.length+h)+3]=p}o.putImageData(c,0,0),g||(console.log("done",d,"calling callback"),clearInterval(d),t(!1))}function p(e,t){var a=e.current,n=a.width,l=a.height,r=a.getContext("2d"),o=r.getImageData(0,0,n,l),c=o.data,i=[],g=!1;i=s(e,!0);for(var h=0;h<i.length;h++)for(var u=i[h].length,m=1;m<u;m++){for(var f=!1,v=i[h][m],p=c[4*(h*i[0].length+m)+0],E=c[4*(h*i[0].length+m)+1],b=c[4*(h*i[0].length+m)+2],k=c[4*(h*i[0].length+m)+3],w=m-1;w>=0&&i[h][w]>v;)g=!0,f=!0,i[h][w+1]=i[h][w],c[4*(h*i[0].length+w+1)+0]=c[4*(h*i[0].length+w)+0],c[4*(h*i[0].length+w+1)+1]=c[4*(h*i[0].length+w)+1],c[4*(h*i[0].length+w+1)+2]=c[4*(h*i[0].length+w)+2],c[4*(h*i[0].length+w+1)+3]=c[4*(h*i[0].length+w)+3],w-=1;if(i[h][w+1]=v,c[4*(h*i[0].length+w+1)+0]=p,c[4*(h*i[0].length+w+1)+1]=E,c[4*(h*i[0].length+w+1)+2]=b,c[4*(h*i[0].length+w+1)+3]=k,f)break}r.putImageData(o,0,0),g||(console.log("done",d,"calling callback"),clearInterval(d),t(!1))}function E(e,t){var a=e.current,n=a.width,l=a.height,r=a.getContext("2d"),o=r.getImageData(0,0,n,l),c=o.data,i=[],g=!1;i=s(e,!0,!1);for(var h=0;h<i.length;h++){console.log(i.length,i[0].length+"!@#@!");for(var u=i[0].length,m=1;m<u;m++){for(var f=!1,v=i[h][m],p=c[4*(m*i.length+h)+0],E=c[4*(m*i.length+h)+1],b=c[4*(m*i.length+h)+2],k=c[4*(m*i.length+h)+3],w=m-1;w>=0&&i[h][w]>v;)g=!0,f=!0,i[h][w+1]=i[h][w],c[4*((w+1)*i.length+h)+0]=c[4*(w*i.length+h)+0],c[4*((w+1)*i.length+h)+1]=c[4*(w*i.length+h)+1],c[4*((w+1)*i.length+h)+2]=c[4*(w*i.length+h)+2],c[4*((w+1)*i.length+h)+3]=c[4*(w*i.length+h)+3],w-=1;if(i[h][w+1]=v,c[4*((w+1)*i.length+h)+0]=p,c[4*((w+1)*i.length+h)+1]=E,c[4*((w+1)*i.length+h)+2]=b,c[4*((w+1)*i.length+h)+3]=k,f)break}}r.putImageData(o,0,0),g||(console.log("done",d,"calling callback"),clearInterval(d),t(!1))}function b(e,t){var a=e.current,n=a.width,l=a.height,r=a.getContext("2d"),o=r.getImageData(0,0,n,l),c=o.data,i=[],g=!1;i=s(e,!1);for(var h=1;h<i.length;h++){for(var u=!1,m=i[h],f=c[4*h+0],v=c[4*h+1],p=c[4*h+2],E=c[4*h+3],b=h-1;b>=0&&i[b]>m;)g=!0,u=!0,i[b+1]=i[b],c[4*(b+1)+0]=c[4*b+0],c[4*(b+1)+1]=c[4*b+1],c[4*(b+1)+2]=c[4*b+2],c[4*(b+1)+3]=c[4*b+3],b-=1;if(i[b+1]=m,c[4*(b+1)+0]=f,c[4*(b+1)+1]=v,c[4*(b+1)+2]=p,c[4*(b+1)+3]=E,u)break}r.putImageData(o,0,0),g||(console.log("done",d,"calling callback"),clearInterval(d),t(!1))}function k(e){var t,a,n=e[0]/255,l=e[1]/255,r=e[2]/255,o=Math.max(n,l,r),c=Math.min(n,l,r),i=(o+c)/2;if(o===c)t=a=0;else{var g=o-c;switch(a=i>.5?g/(2-o-c):g/(o+c),o){case n:t=(l-r)/g+(l<r?6:0);break;case l:t=(r-n)/g+2;break;case r:t=(n-l)/g+4}t/=6}return{h:360*t,s:100*a,l:100*i}}function w(e,t,a,n){d=setInterval(e,t,a,n),n(!0),console.log(d)}function S(e){d&&(e(!1),clearInterval(d))}function y(e){var t=e.canvasRef;console.log(t),console.log(" sort type-rerendered");var a=Object(n.useState)(!1),r=Object(c.a)(a,2),o=r[0],i=r[1],g=Object(n.useState)(null),h=Object(c.a)(g,2),d=(h[0],h[1],Object(n.useState)(0)),s=Object(c.a)(d,2),k=s[0],y=s[1],C=Object(n.useState)(0),I=Object(c.a)(C,2),R=I[0],j=I[1],O=Object(n.useState)(0),x=Object(c.a)(O,2),D=x[0],N=x[1];function B(){switch(D){case 0:switch(R){case 0:w(f,k,t,i);break;case 1:w(v,k,t,i);break;case 2:w(m,k,t,i);break;default:w(f,k,t,i)}break;case 1:switch(R){case 0:w(p,k,t,i);break;case 1:w(E,k,t,i);break;case 2:w(b,k,t,i);break;default:w(p,k,t,i)}}}return console.log("rerender?",o),Object(n.useEffect)((function(){console.log("rerender, issortrunning=",o,"sortdirection:",R,"sortalgorithm:",D)})),l.a.createElement("div",{className:"input-container"},l.a.createElement("div",{className:"input-container-item"},l.a.createElement("p",null,"Sort Algorithm:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"SortRadio",checked:0===D,onChange:function(){N(0)}}),"Bubble Sort"),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"SortRadio",checked:1===D,onChange:function(){N(1)}}),"Insertion Sort"),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"SortRadio",checked:2===D,disabled:!0,onChange:function(){N(2)}}),"PlaceHolder"),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"SortRadio",checked:3===D,disabled:!0,onChange:function(){N(3)}}),"PlaceHolder"))),l.a.createElement("div",{className:"input-container-item"},"Sort Direction:",l.a.createElement("ul",{onChange:function(e){return console.log(e.target)}},l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"SortTypeRadio",value:"",checked:0===R,onChange:function(){j(0)}}),"By Row"),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"SortTypeRadio",value:"",checked:1===R,onChange:function(){j(1)}}),"By Column"),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"SortTypeRadio",value:"",checked:2===R,onChange:function(){j(2)}}),"Top to Bottom (takes a while)"))),l.a.createElement("div",{className:"input-container-item"},"Sort By:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",name:"SortByRadio"}),"Hue")),l.a.createElement("li",null,l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",name:"SortByRadio",disabled:!0}),"Proximity")),l.a.createElement("li",null,l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",name:"SortByRadio",disabled:!0}),"RGB")))),l.a.createElement("p",null,"Sort speed:",100-k),l.a.createElement("div",{className:"input-container-item"},l.a.createElement("input",{type:"range",min:"0",max:"100",value:100-k,onChange:function(e){console.log(100-e.target.value),y(100-e.target.value),o&&(S(i),B())}})),l.a.createElement("div",{className:"button-container"},l.a.createElement(u.a,{variant:"success",className:"btn-block",onClick:B},"Sort Image"),o?l.a.createElement("div",null,l.a.createElement(u.a,{style:{width:"50%"},onClick:function(){return S(i)}},"Cancel"),l.a.createElement(u.a,{style:{width:"50%"},onClick:function(){return S(i)}},"Skip")):l.a.createElement(l.a.Fragment,null),l.a.createElement(u.a,{variant:"warning",className:"btn-block",onClick:function(){return function(e){var t=e.current,a=t.getContext("2d");a.clearRect(0,0,t.width,t.height);for(var n=t.height,l=0;l<n;l++)for(var r=t.width,o=0;o<r;o++)a.fillStyle="hsla(".concat(360*Math.random(),", 100%, 50%, 1)"),a.fillRect(o,l,1,1);console.log(t.width,t.height)}(t)}},"Randomize Canvas"),l.a.createElement("input",{type:"file",id:"file_input",onChange:function(t){var a=e.canvasRef.current.getContext("2d"),n=(window.webkitURL||window.URL).createObjectURL(t.target.files[0]),l=new Image;l.src=n,l.onload=function(){var t=l.width,n=l.height;e.SetHeight(n),e.SetWidth(t),a.drawImage(l,0,0,t,n)}}})))}var C=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(300),a=Object(c.a)(t,2),r=a[0],o=a[1],u=Object(n.useState)(300),d=Object(c.a)(u,2),s=d[0],m=d[1];return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(g.a,null),l.a.createElement(g.a,null,l.a.createElement(h.a,{sm:12,md:8},l.a.createElement("canvas",{ref:e,height:r,width:s})),l.a.createElement(h.a,{sm:12,md:4},l.a.createElement(y,{canvasRef:e,SetHeight:o,SetWidth:m})))))};var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.77bcad30.chunk.js.map