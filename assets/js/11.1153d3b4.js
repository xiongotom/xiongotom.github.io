(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(t,e,n){"use strict";n.r(e);var _=n(0),i=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"unix哲学之补救原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unix哲学之补救原则","aria-hidden":"true"}},[t._v("#")]),t._v(" Unix哲学之补救原则")]),t._v(" "),n("p",[n("em",[t._v("《UNIX编辑艺术》读书笔记")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("em",[t._v("【声明】读书笔记包括原文摘抄和个人思考心得，原文一切版权归本书作者所有")])]),t._v(" "),n("blockquote",[n("p",[t._v("出现异常时，马上退出并给出足量错误信息")])]),t._v(" "),n("p",[t._v("正文摘抄：")]),t._v(" "),n("ol",[n("li",[t._v("……软件要尽可能从容地应付各种错误输入和自身的运行错误。但是，如果做不到这一点，就让程序尽可能以一种容易诊断错误的方式终止。")]),t._v(" "),n("li",[t._v("“宽容的收，谨慎的发”……就算输入的数据很不规范，一个设计良好的程序也会尽量领会其中的意义，以尽量与别的程序协作：然后，要么响亮地倒塌，要么为工作链下一环的程序输出一个严谨干净正确的数据。")]),t._v(" "),n("li",[t._v("McIlroy要求我们在设计时要考虑宽容性，而不是用过分纵容的实现来补救标准的不足。否则，正如他所指出的一样，一不留神你就会死的很难看。")])]),t._v(" "),n("p",[t._v("理解及感受：\n就我自己的感觉来说，补救原则也算是健壮原则的一种补充：程序要健壮，但总会无法处理的情况，如果无法处理，那就抛出异常，结束。另一方面，设计时就要考虑到程序能处理的边界，如果事后填坑，很可能陷入到异常 -> 特例 -> 新的异常的难堪境地。")])])}],!1,null,null,null);i.options.__file="PhilRemedy.md";e.default=i.exports}}]);