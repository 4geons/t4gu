"use strict";(()=>{var c=document.documentElement;function s(){c.setAttribute("data-mode","dark")}function i(){c.setAttribute("data-mode","light")}var d=localStorage.getItem("mode");d==="dark"?s():d==="light"&&i();function u(){let o=c.getAttribute("data-mode"),n=localStorage.getItem("darkAccent"),r=localStorage.getItem("lightAccent"),t;return o==="dark"?n===null?t="#26A269":t=n:r===null?t="#1f676b":t=r,t}var a=u(),l=c.style;l.setProperty("--accent",a);var m=document.querySelector("meta[name=theme-color]");m.setAttribute("content",a);document.addEventListener("DOMContentLoaded",function(){let o=document.querySelector("footer input");function n(){let e=u();l.setProperty("--accent",e),o.value=e,m.setAttribute("content",e)}o.onchange=function(){let e=o.value;l.setProperty("--accent",e),c.getAttribute("data-mode")==="dark"?localStorage.setItem("darkAccent",e):localStorage.setItem("lightAccent",e),n()},o.value=a;function r(){document.body.style.transition=document.querySelector("header").style.transition=document.querySelector("footer").style.transition="background-color .3s ease, color .3s ease"}function t(){r(),c.getAttribute("data-mode")==="light"?(s(),localStorage.setItem("mode","dark")):(i(),localStorage.setItem("mode","light")),n()}document.querySelector("footer button").addEventListener("click",t)});})();
