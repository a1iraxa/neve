!function(){"use strict";function c(e,n){for(var t=0;t<e.length;t++)n(e[t])}function t(e){var n=e.split("#");return 1<n.length?n[0]:e}function r(e,n,t){for(var o=e instanceof NodeList?e:[e],r=0;r<o.length;r++)o[r]&&o[r].addEventListener(n,t)}function o(e,n){a(e,n,"toggle")}function e(){var e,n;i=window.location.href,y(),function(){var e=document.querySelectorAll(".nv-nav-wrap a");if(0===e.length)return;c(e,function(e){e.addEventListener("click",function(e){var n=e.target.getAttribute("href");if(null===n)return!1;t(n)===t(i)&&window.HFG.toggleMenuSidebar(!1)})})}(),e=document.querySelectorAll(".caret-wrap"),c(e,function(t){t.addEventListener("click",function(e){e.preventDefault();var n=t.parentNode.parentNode.querySelector(".sub-menu");o(t,"dropdown-open"),o(n,"dropdown-open"),w(document.querySelectorAll(".dropdown-open"),"dropdown-open")})}),g(),h(),!0===/(Trident|MSIE|Edge)/.test(window.navigator.userAgent)&&(n=document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu'),c(n,function(e){var n=e.parentNode;n.addEventListener("mouseenter",function(){u(e,"dropdown-open")}),n.addEventListener("mouseleave",function(){l(e,"dropdown-open")})})),window.HFG.initSearch=function(){g()}}var i,u=function(e,n){a(e,n,"add")},l=function(e,n){a(e,n,"remove")},a=function(e,n,t){for(var o=n.split(" "),r=e instanceof NodeList?e:[e],i=0;i<r.length;i++)r[i]&&r[i].classList[t].apply(r[i].classList,o)},d=null,s=null,v=2,n=function(){return!("enabled"!==NeveProperties.masonry||NeveProperties.masonryColumns<2)&&(null!==(s=document.querySelector(".nv-index-posts .posts-wrapper"))&&void imagesLoaded(s,function(){d=new Masonry(s,{itemSelector:"article.layout-grid",columnWidth:"article.layout-grid",percentPosition:!0})}))},p=function(){return"enabled"===NeveProperties.infiniteScroll&&(null!==document.querySelector(".nv-index-posts .posts-wrapper")&&void function(e,n,t){var o=2<arguments.length&&void 0!==t?t:.5;new IntersectionObserver(function(e){e[0].intersectionRatio<=o||n()}).observe(e)}(document.querySelector(".infinite-scroll-trigger"),function(){return parent.wp.customize?(parent.wp.customize.requestChangesetUpdate().then(function(){f()}),!1):void f()}))},f=function(){var e=document.querySelector(".infinite-scroll-trigger");if(null===e)return!1;if(document.querySelector(".nv-loader").style.display="block",v>NeveProperties.infiniteScrollMaxPages)return e.parentNode.removeChild(e),!(document.querySelector(".nv-loader").style.display="none");var n,t,o,r,i=document.querySelector(".nv-index-posts .posts-wrapper"),u=m(NeveProperties.infiniteScrollEndpoint+v);v++,n=u,t=function(e){var n;"enabled"!==NeveProperties.masonry?i.innerHTML+=JSON.parse(e):((n=document.createElement("div")).innerHTML=JSON.parse(e),c(n.children,function(e){s.append(e),d.appended(e)}))},o=NeveProperties.infiniteScrollQuery,(r=new XMLHttpRequest).onload=function(){4===r.readyState&&200===r.status&&t(r.response)},r.onerror=function(e){console.error(e)},r.open("POST",n,!0),r.setRequestHeader("Content-Type","application/json; charset=UTF-8"),r.send(o)},m=function(e){return void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview)},y=function(){var o=NeveProperties.isRTL,e=document.querySelectorAll(".sub-menu");if(0===e.length)return!1;var r=window.innerWidth;c(e,function(e){var n=e.getBoundingClientRect(),t=n.left;t<0&&(o?(e.style.right="-100%",e.style.left="auto"):(e.style.left="0",e.style.right="auto")),t+n.width>=r&&(o?(e.style.left="auto",e.style.right="0"):(e.style.right="100%",e.style.left="auto"))})};function g(){var e=document.querySelectorAll(".nv-nav-search"),t=document.querySelectorAll(".menu-item-nav-search"),n=document.querySelectorAll(".close-responsive-search");c(t,function(n){n.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),o(n,"active"),n.querySelector(".search-field").focus(),window.innerWidth<=960||w(n,"active")})}),c(e,function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),c(n,function(e){e.addEventListener("click",function(e){e.preventDefault(),c(t,function(e){l(e,"active")});var n=document.querySelector(".nav-clickaway-overlay");null!==n&&n.parentNode.removeChild(n)})})}function h(){var e=document.querySelectorAll(".header--row .nv-nav-cart");0!==e.length&&c(e,function(e){e.getBoundingClientRect().left<0&&(e.style.left=0)})}function w(e,n){var t=document.querySelector(".nav-clickaway-overlay");null!==t&&t.parentNode.removeChild(t),t=document.createElement("div"),u(t,"nav-clickaway-overlay");var o=document.querySelector("header.header");o.parentNode.insertBefore(t,o),t.addEventListener("click",function(){l(e,n),t.parentNode.removeChild(t)})}window.addEventListener("resize",h);function S(){this.options={menuToggleDuration:300},this.init()}var b;function q(){window.HFG=new S,function(){if(null===document.querySelector(".blog.nv-index-posts"))return;n(),p()}(),e()}function L(){y()}S.prototype.init=function(){var e=".menu-mobile-toggle";!1===(0<arguments.length&&void 0!==arguments[0]&&arguments[0])&&(e+=", #header-menu-sidebar .close-panel, .close-sidebar-panel");function n(e){e.preventDefault(),this.toggleMenuSidebar()}var t=document.querySelectorAll(e);c(t,function(e){e.removeEventListener("click",n.bind(this))}.bind(this)),r(t,"click",n.bind(this));var o=document.querySelector(".header-menu-sidebar-overlay");r(o,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},S.prototype.toggleMenuSidebar=function(e){var n,t=document.querySelectorAll(".menu-mobile-toggle");l(document.body,"hiding-header-menu-sidebar"),document.body.classList.contains("is-menu-sidebar")||!1===e?(null!==(n=document.querySelector(".nav-clickaway-overlay"))&&n.parentNode.removeChild(n),u(document.body,"hiding-header-menu-sidebar"),l(document.body,"is-menu-sidebar"),l(t,"is-active"),setTimeout(function(){l(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3)):(u(document.body,"is-menu-sidebar"),u(t,"is-active"))},window.addEventListener("load",function(){q()}),window.addEventListener("resize",function(){clearTimeout(b),b=setTimeout(L,500)})}();
