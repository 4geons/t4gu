"use strict";(()=>{var c=document.documentElement;function i(){c.setAttribute("data-mode","dark")}function d(){c.setAttribute("data-mode","light")}var s=localStorage.getItem("mode");s==="dark"?i():s==="light"&&d();function u(){let o=c.getAttribute("data-mode"),n=localStorage.getItem("darkAccent"),r=localStorage.getItem("lightAccent"),t;return o==="dark"?n===null?t="#26A269":t=n:r===null?t="#1f676b":t=r,t}var l=u(),a=c.style;a.setProperty("--accent",l);var m=document.querySelector("meta[name=theme-color]");m.setAttribute("content",l);document.addEventListener("DOMContentLoaded",function(){let o=document.querySelector("footer input");function n(){let e=u();a.setProperty("--accent",e),o.value=e,m.setAttribute("content",e)}o.onchange=function(){let e=o.value;a.setProperty("--accent",e),c.getAttribute("data-mode")==="dark"?localStorage.setItem("darkAccent",e):localStorage.setItem("lightAccent",e),n()},o.value=l;function r(){document.body.style.transition=document.querySelector("header").style.transition=document.querySelector("footer").style.transition="background-color .3s ease, color .3s ease"}function t(){r(),c.getAttribute("data-mode")==="light"?(i(),localStorage.setItem("mode","dark")):(d(),localStorage.setItem("mode","light")),n()}document.querySelector("footer button").addEventListener("click",t)});})();
