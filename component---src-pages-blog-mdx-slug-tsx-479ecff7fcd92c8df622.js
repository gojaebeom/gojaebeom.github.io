(self.webpackChunkjb_log=self.webpackChunkjb_log||[]).push([[672,319],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),l=r(7067);function o(t,r,a){return l()?(e.exports=o=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var l=[null];l.push.apply(l,t);var o=new(Function.bind.apply(e,l));return r&&n(o,r.prototype),o},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),l=r(6860),o=r(379),a=r(8206);e.exports=function(e){return n(e)||l(e)||o(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),l=r(319),o=r(9713),a=r(7316),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=r(7294),i=r(4983).mdx,m=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=a(e,s),c=m(t),p=f.useMemo((function(){if(!r)return null;var e=u({React:f,mdx:i},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(l(t),[""+r])).apply(void 0,[{}].concat(l(o)))}),[r,t]);return f.createElement(p,u({},o))}},4528:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7294),l=r(1597),o=r(8532),a=r(2102),s=r(4896);function c(e){var t=e.data,c=(0,n.useState)(!1),u=c[0],f=c[1];return(0,n.useEffect)((function(){s.j&&r.e(317).then(r.bind(r,4110)).then((function(e){(0,e.imgProcess)(),f(!0)}))}),[]),n.createElement(o.$$,null,!u&&n.createElement("div",{className:"fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 font-jetbrain-b"},"..loading"),n.createElement("div",{className:"flex flex-col lg:flex-row justify-items-start p-2"},n.createElement("div",{className:"w-full lg:w-2/3"},n.createElement("div",null,n.createElement("img",{src:"/"+t.mdx.frontmatter.cover,className:"rounded-xl"})),n.createElement("h1",{className:"text-3xl lg:text-4xl font-noto-b mt-4"},t.mdx.frontmatter.title),n.createElement("p",{className:"text-sm mt-4"},n.createElement("i",{className:"mr-1 fa-light fa-timer"}),t.mdx.frontmatter.date),n.createElement("div",{className:"prose-lg text-white rounded-xl mt-10"},n.createElement(a.MDXRenderer,null,t.mdx.body))),n.createElement("div",{className:"lg:ml-4 w-full lg:w-1/3"},n.createElement("h3",{className:"font-founder-b px-2 text-xl"},"Other Posts"),n.createElement("div",{className:"w-full masonry-layout"},t.allMdx.nodes.map((function(e){return n.createElement(l.Link,{to:"/blog/"+e.frontmatter.slug,key:e.id},n.createElement("article",{className:"w-1/2 md:w-1/3 lg:w-full xl:w-1/2 p-2 masonry-item mb-4"},n.createElement("div",{className:"w-full overflow-hidden rounded-xl"},n.createElement("img",{src:"/"+e.frontmatter.thumbnail,loading:"lazy"})),n.createElement("div",{className:"p-2"},n.createElement("div",{className:"text-sm lg:text-md"},n.createElement("i",{className:"mr-1 fa-light fa-timer"}),n.createElement("span",{className:"font-noto-l"},e.frontmatter.date)),n.createElement("div",{className:"text-lg lg:text-xl font-noto-b2"},e.frontmatter.title),n.createElement("div",{className:"text-xs lg:text-sm"},e.frontmatter.excerpt),n.createElement("div",{className:"flex flex-wrap justify-start"},n.createElement("span",{className:"flex items-center justify-center text-xs font-jetbrain-l font-semibold text-blue-500"},n.createElement("i",{className:"fa-light fa-hashtag mr-0.5"}),n.createElement("span",null,e.frontmatter.category))))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-tsx-479ecff7fcd92c8df622.js.map