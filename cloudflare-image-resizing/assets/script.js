!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=wp.i18n.__,p=wp.components,m=p.BaseControl,g=p.Button,_=(p.ExternalLink,p.PanelBody),d=p.PanelRow,y=p.Placeholder,h=p.Spinner,w=(p.ToggleControl,wp.element),b=w.render,v=w.Component,E=w.Fragment,P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(w,e);var t,n,i,p=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,i=c(e);if(t()){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return s(this,n)}}(w);function w(){var e;return o(this,w),(e=p.apply(this,arguments)).changeOptions=e.changeOptions.bind(u(e)),e.state={isAPILoaded:!1,isAPISaving:!1,cf_image_resizing_siteurl_status:!1,cf_image_resizing_siteurl:""},e}return t=w,(n=[{key:"componentDidMount",value:function(){var e=this;wp.api.loadPromise.then((function(){e.settings=new wp.api.models.Settings,!1===e.state.isAPILoaded&&e.settings.fetch().then((function(t){e.setState({cf_image_resizing_siteurl_status:Boolean(t.cf_image_resizing_siteurl_status),cf_image_resizing_siteurl:t.cf_image_resizing_siteurl,isAPILoaded:!0})}))}))}},{key:"changeOptions",value:function(e,t){var n=this;this.setState({isAPISaving:!0}),new wp.api.models.Settings(r({},e,t)).save().then((function(t){var i;n.setState((r(i={},e,t[e]),r(i,"isAPISaving",!1),i)),window.alert("Saved OK!"),window.location.reload(!1)}))}},{key:"render",value:function(){var e=this;return this.state.isAPILoaded?wp.element.createElement(E,null,wp.element.createElement("div",{className:"cf_image_resizing_header"},wp.element.createElement("div",{className:"cf_image_resizing_container"},wp.element.createElement("div",{className:"cf_image_resizing_logo"},wp.element.createElement("h1",null,f("Cloudflare® Image Resizing"))))),wp.element.createElement("div",{className:"cf_image_resizing_main"},wp.element.createElement(_,{title:f("Settings")},wp.element.createElement(d,null,wp.element.createElement(m,{label:f("Site URL"),help:"Please enter your website URL, without trailing slash (/).",id:"cf_image_resizing_options-siteurl",className:"cf_image_resizing_text-field"},wp.element.createElement("input",{type:"text",id:"cf_image_resizing_options-siteurl",value:this.state.cf_image_resizing_siteurl,placeholder:f("https://example.com"),disabled:this.state.isAPISaving,onChange:function(t){return e.setState({cf_image_resizing_siteurl:t.target.value})}}),wp.element.createElement("div",{className:"cf_image_resizing_text-field-button-group"},wp.element.createElement(g,{isPrimary:!0,disabled:this.state.isAPISaving,onClick:function(){return e.changeOptions("cf_image_resizing_siteurl",e.state.cf_image_resizing_siteurl)}},f("Save"))))),wp.element.createElement("p",null,wp.element.createElement("strong",null,f("More settings are coming soon to this page. You can edit manually config.php meanwhile.")))),wp.element.createElement(_,null,wp.element.createElement("div",{className:"cf_image_resizing_info"},wp.element.createElement("h2",null,f("Information")),wp.element.createElement("p",null,f("Thank you for using my plugin.")),wp.element.createElement("p",null,f("By using this plugin you will have super fast on-the-fly image delivery in next generation formats without any performance overhead on your WordPress. You can tweak settings by editing config.php.")),wp.element.createElement("p",null,f("Please consider sponsoring this plugin for further development.")),wp.element.createElement("div",{className:"cf_image_resizing_info-button-group"},wp.element.createElement(g,{isDefault:!0,target:"_blank",href:"https://github.com/Mecanik/cloudflare-image-resizing/issues/new"},f("Report Bug"))," ",wp.element.createElement(g,{isDefault:!0,target:"_blank",href:"https://github.com/sponsors/Mecanik"},f("Sponsor Plugin"))),wp.element.createElement("hr",null),wp.element.createElement("p",null,f("Copyright (c) 2022 - Mecanik.")))))):wp.element.createElement(y,null,wp.element.createElement(h,null))}}])&&l(t.prototype,n),i&&l(t,i),w}(v);b(wp.element.createElement(P,null),document.getElementById("cf_image_resizing_plugin"))},function(e,t,n){}]);