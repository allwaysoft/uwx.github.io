---
title: Dynamic Font Tester
---

<style type="text/css">
/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #f8f8f2;
}

.namespace {
  opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #f92672;
}

.token.boolean,
.token.number {
  color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function {
  color: #e6db74;
}

.token.keyword {
  color: #66d9ef;
}

.token.regex,
.token.important {
  color: #fd971f;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

</style>

<style type="text/css">
.blok {
  white-space: pre !important;
  border: none !important;
}
#selector {
  width: 100%; font-size: 15pt; margin-bottom: 5px; border: 1px solid rgb(162, 230, 247); border-radius: 3px; margin: 0 auto 5px auto;
}
@font-face {
  font-family: "SourceCodePro-BoldIt";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-BoldIt.ttf");
}
@font-face {
  font-family: "SourceCodePro-ExtraLight";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-ExtraLight.ttf");
}
@font-face {
  font-family: "SourceCodePro-ExtraLightIt";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-ExtraLightIt.ttf");
}
@font-face {
  font-family: "SourceCodePro-It";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-It.ttf");
}
@font-face {
  font-family: "SourceCodePro-Light";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-Light.ttf");
}
@font-face {
  font-family: "SourceCodePro-LightIt";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-LightIt.ttf");
}
@font-face {
  font-family: "SourceCodePro-Medium";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-Medium.ttf");
}
@font-face {
  font-family: "SourceCodePro-MediumIt";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-MediumIt.ttf");
}
@font-face {
  font-family: "SourceCodePro-Regular";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-Regular.ttf");
}
@font-face {
  font-family: "SourceCodePro-Semibold";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-Semibold.ttf");
}
@font-face {
  font-family: "SourceCodePro-SemiboldIt";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-SemiboldIt.ttf");
}
@font-face {
  font-family: "UbuntuMono-B";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/UbuntuMono-B.ttf");
}
@font-face {
  font-family: "UbuntuMono-BI";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/UbuntuMono-BI.ttf");
}
@font-face {
  font-family: "UbuntuMono-R";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/UbuntuMono-R.ttf");
}
@font-face {
  font-family: "UbuntuMono-RI";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/UbuntuMono-RI.ttf");
}
@font-face {
  font-family: "Vera";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Vera.ttf");
}
@font-face {
  font-family: "VeraBd";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraBd.ttf");
}
@font-face {
  font-family: "VeraBI";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraBI.ttf");
}
@font-face {
  font-family: "VeraIt";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraIt.ttf");
}
@font-face {
  font-family: "VeraMoBd";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraMoBd.ttf");
}
@font-face {
  font-family: "VeraMoBI";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraMoBI.ttf");
}
@font-face {
  font-family: "VeraMoIt";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraMoIt.ttf");
}
@font-face {
  font-family: "VeraMono";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraMono.ttf");
}
@font-face {
  font-family: "VeraSe";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraSe.ttf");
}
@font-face {
  font-family: "VeraSeBd";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/VeraSeBd.ttf");
}
@font-face {
  font-family: "Anonymous Pro B";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Anonymous Pro B.ttf");
}
@font-face {
  font-family: "Anonymous Pro BI";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Anonymous Pro BI.ttf");
}
@font-face {
  font-family: "Anonymous Pro I";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Anonymous Pro I.ttf");
}
@font-face {
  font-family: "Anonymous Pro";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Anonymous Pro.ttf");
}
@font-face {
  font-family: "Courier Prime Bold Italic";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Courier Prime Bold Italic.ttf");
}
@font-face {
  font-family: "Courier Prime Bold";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Courier Prime Bold.ttf");
}
@font-face {
  font-family: "Courier Prime Italic";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Courier Prime Italic.ttf");
}
@font-face {
  font-family: "Courier Prime";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Courier Prime.ttf");
}
@font-face {
  font-family: "DroidSansMono";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/DroidSansMono.ttf");
}
@font-face {
  font-family: "Envy Code R Bold";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Envy Code R Bold.ttf");
}
@font-face {
  font-family: "Envy Code R Italic";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Envy Code R Italic.ttf");
}
@font-face {
  font-family: "Envy Code R";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Envy Code R.ttf");
}
@font-face {
  font-family: "Inconsolata-Bold";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Inconsolata-Bold.ttf");
}
@font-face {
  font-family: "Inconsolata-Regular";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/Inconsolata-Regular.ttf");
}
@font-face {
  font-family: "ProFontWindows";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/ProFontWindows.ttf");
}
@font-face {
  font-family: "SourceCodePro-Black";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-Black.ttf");
}
@font-face {
  font-family: "SourceCodePro-BlackIt";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-BlackIt.ttf");
}
@font-face {
  font-family: "SourceCodePro-Bold";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/SourceCodePro-Bold.ttf");
}
@font-face {
  font-family: "monof55";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/monof55.ttf");
}
@font-face {
  font-family: "monof56";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/monof56.ttf");
}
@font-face {
  font-family: "Unifont Upper";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/unifont_upper-9.0.04.ttf");
}
@font-face {
  font-family: "Unifont Lower";
  src: url("https://rafa1231518.github.io/nfmm-addons/fonts/unifont_csur-9.0.04.ttf");
}
#f-SourceCodePro-BoldIt {
  font-family: "SourceCodePro-BoldIt";
}
#f-SourceCodePro-ExtraLight {
  font-family: "SourceCodePro-ExtraLight";
}
#f-SourceCodePro-ExtraLightIt {
  font-family: "SourceCodePro-ExtraLightIt";
}
#f-SourceCodePro-It {
  font-family: "SourceCodePro-It";
}
#f-SourceCodePro-Light {
  font-family: "SourceCodePro-Light";
}
#f-SourceCodePro-LightIt {
  font-family: "SourceCodePro-LightIt";
}
#f-SourceCodePro-Medium {
  font-family: "SourceCodePro-Medium";
}
#f-SourceCodePro-MediumIt {
  font-family: "SourceCodePro-MediumIt";
}
#f-SourceCodePro-Regular {
  font-family: "SourceCodePro-Regular";
}
#f-SourceCodePro-Semibold {
  font-family: "SourceCodePro-Semibold";
}
#f-SourceCodePro-SemiboldIt {
  font-family: "SourceCodePro-SemiboldIt";
}
#f-UbuntuMono-B {
  font-family: "UbuntuMono-B";
}
#f-UbuntuMono-BI {
  font-family: "UbuntuMono-BI";
}
#f-UbuntuMono-R {
  font-family: "UbuntuMono-R";
}
#f-UbuntuMono-RI {
  font-family: "UbuntuMono-RI";
}
#f-Vera {
  font-family: "Vera";
}
#f-VeraBd {
  font-family: "VeraBd";
}
#f-VeraBI {
  font-family: "VeraBI";
}
#f-VeraIt {
  font-family: "VeraIt";
}
#f-VeraMoBd {
  font-family: "VeraMoBd";
}
#f-VeraMoBI {
  font-family: "VeraMoBI";
}
#f-VeraMoIt {
  font-family: "VeraMoIt";
}
#f-VeraMono {
  font-family: "VeraMono";
}
#f-VeraSe {
  font-family: "VeraSe";
}
#f-VeraSeBd {
  font-family: "VeraSeBd";
}
#f-Anonymous_Pro_B {
  font-family: "Anonymous Pro B";
}
#f-Anonymous_Pro_BI {
  font-family: "Anonymous Pro BI";
}
#f-Anonymous_Pro_I {
  font-family: "Anonymous Pro I";
}
#f-Anonymous_Pro {
  font-family: "Anonymous Pro";
}
#f-Courier_Prime_Bold_Italic {
  font-family: "Courier Prime Bold Italic";
}
#f-Courier_Prime_Bold {
  font-family: "Courier Prime Bold";
}
#f-Courier_Prime_Italic {
  font-family: "Courier Prime Italic";
}
#f-Courier_Prime {
  font-family: "Courier Prime";
}
#f-DroidSansMono {
  font-family: "DroidSansMono";
}
#f-Envy_Code_R_Bold {
  font-family: "Envy Code R Bold";
}
#f-Envy_Code_R_Italic {
  font-family: "Envy Code R Italic";
}
#f-Envy_Code_R {
  font-family: "Envy Code R";
}
#f-Inconsolata-Bold {
  font-family: "Inconsolata-Bold";
}
#f-Inconsolata-Regular {
  font-family: "Inconsolata-Regular";
}
#f-ProFontWindows {
  font-family: "ProFontWindows";
}
#f-SourceCodePro-Black {
  font-family: "SourceCodePro-Black";
}
#f-SourceCodePro-BlackIt {
  font-family: "SourceCodePro-BlackIt";
}
#f-SourceCodePro-Bold {
  font-family: "SourceCodePro-Bold";
}
#f-Courier {
  font-family: "Courier";
}
#f-Courier-New {
  font-family: "Courier New";
}
#f-Consolas {
  font-family: "Consolas";
}
#f-monof55 {
  font-family: "monof55";
}
#f-monof56 {
  font-family: "monof56";
}
#f-Unifont-Upper {
  font-family: "Unifont-Upper";
}
#f-Unifont-Lower {
  font-family: "Unifont-Lower";
}
</style>

<script type="text/javascript">
  var element;
  window.onload = function() {
    element = document.getElementById('h-style-me');
    var selector = document.getElementById('selector');
    document.getElementById('dlfont').onclick = function() {
      if (selector.value.startsWith('Envy')) { // redistribution prohibited
        window.open('https://download.damieng.com/fonts/original/EnvyCodeR-PR7.zip');
      } else if (selector.value == 'Courier' || selector.value == 'Courier-New') {
        window.alert('This font should come built-in with any decent operating system.\nWe\'re not gonna include a download link for licensing concerns.');
      } else if (selector.value == 'Consolas') {
        window.alert('Consolas is a neat font, but is not free. It comes with Microsoft Office.');
      } else if (selector.value.startsWith('Unifont')) { // it's a weird GPL
        window.open('http://unifoundry.com/unifont.html');
      } else {
        window.open('https://rafa1231518.github.io/nfmm-addons/fonts/' + selector.value + '.ttf');
      }
    }
  }

  window.onclick = function(e) {
    e = e || window.event;

    if (e.target.tagName == 'OPTION') {
      element.style.fontFamily = e.target.value;
    }
  }
</script>

<select id="selector">
<option id="f-SourceCodePro-BoldIt" value="SourceCodePro-BoldIt">Source Code Pro - Bold Italic</option>
<option id="f-SourceCodePro-ExtraLight" value="SourceCodePro-ExtraLight">Source Code Pro - Extra Light</option>
<option id="f-SourceCodePro-ExtraLightIt" value="SourceCodePro-ExtraLightIt">Source Code Pro - Extra Light Italic</option>
<option id="f-SourceCodePro-It" value="SourceCodePro-It">Source Code Pro - Italic</option>
<option id="f-SourceCodePro-Light" value="SourceCodePro-Light">Source Code Pro - Light</option>
<option id="f-SourceCodePro-LightIt" value="SourceCodePro-LightIt">Source Code Pro - Light Italic</option>
<option id="f-SourceCodePro-Medium" value="SourceCodePro-Medium">Source Code Pro - Medium</option>
<option id="f-SourceCodePro-MediumIt" value="SourceCodePro-MediumIt">Source Code Pro - Medium Italic</option>
<option id="f-SourceCodePro-Regular" value="SourceCodePro-Regular">Source Code Pro - Regular</option>
<option id="f-SourceCodePro-Semibold" value="SourceCodePro-Semibold">Source Code Pro - Semibold</option>
<option id="f-SourceCodePro-SemiboldIt" value="SourceCodePro-SemiboldIt">Source Code Pro - Semibold Italic</option>
<option id="f-UbuntuMono-B" value="UbuntuMono-B">Ubuntu Mono - Bold</option>
<option id="f-UbuntuMono-BI" value="UbuntuMono-BI">Ubuntu Mono - Bold Italic</option>
<option id="f-UbuntuMono-R" value="UbuntuMono-R">Ubuntu Mono - Regular</option>
<option id="f-UbuntuMono-RI" value="UbuntuMono-RI">Ubuntu Mono - Regular Italic</option>
<option id="f-Vera" value="Vera">Vera</option>
<option id="f-VeraBd" value="VeraBd">Vera Bold</option>
<option id="f-VeraBI" value="VeraBI">Vera Bold Italic</option>
<option id="f-VeraIt" value="VeraIt">Vera Italic</option>
<option id="f-VeraMoBd" value="VeraMoBd">Vera Mono Bold</option>
<option id="f-VeraMoBI" value="VeraMoBI">Vera Mono Bold Italic</option>
<option id="f-VeraMoIt" value="VeraMoIt">Vera Mono Italic</option>
<option id="f-VeraMono" value="VeraMono">Vera Mono</option>
<option id="f-VeraSe" value="VeraSe">Vera Serif</option>
<option id="f-VeraSeBd" value="VeraSeBd">Vera Serif Bold</option>
<option id="f-Anonymous_Pro_B" value="Anonymous Pro B">Anonymous Pro Bold</option>
<option id="f-Anonymous_Pro_BI" value="Anonymous Pro BI">Anonymous Pro Bold Italic</option>
<option id="f-Anonymous_Pro_I" value="Anonymous Pro I">Anonymous Pro Italic</option>
<option id="f-Anonymous_Pro" value="Anonymous Pro">Anonymous Pro</option>
<option id="f-Courier_Prime_Bold_Italic" value="Courier Prime Bold Italic">Courier Prime Bold Italic</option>
<option id="f-Courier_Prime_Bold" value="Courier Prime Bold">Courier Prime Bold</option>
<option id="f-Courier_Prime_Italic" value="Courier Prime Italic">Courier Prime Italic</option>
<option id="f-Courier_Prime" value="Courier Prime">Courier Prime</option>
<option id="f-DroidSansMono" value="DroidSansMono">Droid Sans Mono</option>
<option id="f-Envy_Code_R_Bold" value="Envy Code R Bold">Envy Code R Bold</option>
<option id="f-Envy_Code_R_Italic" value="Envy Code R Italic">Envy Code R Italic</option>
<option id="f-Envy_Code_R" value="Envy Code R">Envy Code R</option>
<option id="f-Inconsolata-Bold" value="Inconsolata-Bold">Inconsolata Bold</option>
<option id="f-Inconsolata-Regular" value="Inconsolata-Regular">Inconsolata Regular</option>
<option id="f-ProFontWindows" value="ProFontWindows">ProFont (Windows)</option>
<option id="f-SourceCodePro-Black" value="SourceCodePro-Black">Source Code Pro - Black</option>
<option id="f-SourceCodePro-BlackIt" value="SourceCodePro-BlackIt">Source Code Pro - BlackItalic</option>
<option id="f-SourceCodePro-Bold" value="SourceCodePro-Bold">Source Code Pro - Bold</option>
<option id="f-Courier" value="Courier">Courier</option>
<option id="f-Courier-New" value="Courier-New">Courier New</option>
<option id="f-Consolas" value="Consolas">Consolas</option>
<option id="f-monof55" value="monof55">Monofur</option>
<option id="f-monof56" value="monof56">Monofur Italic</option>
<option value="Unifont Upper">GNU Unifont - Upper glyphs (warning: 1mb, no preview)</option>
<option value="Unifont Lower">GNU Unifont - CSUR glyphs (warning: 1mb, no preview)</option>
</select>
<input style="margin: 0 0 5px 0;" id="dlfont" value="Download Font" type="submit"><br><i style="font-size: 9pt;">Note: Large fonts may display as the default font while they are being downloaded. Browsers such as Internet Explorer 8 and lower might not support CSS3 fonts, and they will also be displayed as the default font.</i>

{% raw %}
<div style="background: #272822;border: 1px black;padding: 5px;">
<code id="h-style-me" class="blok language-c"><span class="token comment" spellcheck="true">/*
 * Supplementary group IDs
 */</span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/cred.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/export.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/slab.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/security.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/syscalls.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/user_namespace.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;asm/uaccess.h&gt;</span></span>

<span class="token keyword">struct</span> group_info <span class="token operator">*</span><span class="token function">groups_alloc</span><span class="token punctuation">(</span><span class="token keyword">int</span> gidsetsize<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">;</span>
        <span class="token keyword">int</span> nblocks<span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>

        nblocks <span class="token operator">=</span> <span class="token punctuation">(</span>gidsetsize <span class="token operator">+</span> NGROUPS_PER_BLOCK <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> NGROUPS_PER_BLOCK<span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">/* Make sure we always allocate at least one indirect block pointer */</span>
        nblocks <span class="token operator">=</span> nblocks <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
        group_info <span class="token operator">=</span> <span class="token function">kmalloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token operator">*</span>group_info<span class="token punctuation">)</span> <span class="token operator">+</span> nblocks<span class="token operator">*</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>gid_t <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> GFP_USER<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>group_info<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        group_info<span class="token operator">-&gt;</span>ngroups <span class="token operator">=</span> gidsetsize<span class="token punctuation">;</span>
        group_info<span class="token operator">-&gt;</span>nblocks <span class="token operator">=</span> nblocks<span class="token punctuation">;</span>
        <span class="token function">atomic_set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group_info<span class="token operator">-&gt;</span>usage<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>gidsetsize <span class="token operator">&lt;=</span> NGROUPS_SMALL<span class="token punctuation">)</span>
                group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>small_block<span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nblocks<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        kgid_t <span class="token operator">*</span>b<span class="token punctuation">;</span>
                        b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">__get_free_page</span><span class="token punctuation">(</span>GFP_USER<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>b<span class="token punctuation">)</span>
                                <span class="token keyword">goto</span> out_undo_partial_alloc<span class="token punctuation">;</span>
                        group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> group_info<span class="token punctuation">;</span>

out_undo_partial_alloc<span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">free_page</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span>group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">kfree</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>groups_alloc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">groups_free</span><span class="token punctuation">(</span><span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> group_info<span class="token operator">-&gt;</span>small_block<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> i<span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> group_info<span class="token operator">-&gt;</span>nblocks<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                        <span class="token function">free_page</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span>group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">kfree</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>groups_free<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">/* export the group_info to a user-space array */</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">groups_to_user</span><span class="token punctuation">(</span>gid_t __user <span class="token operator">*</span>grouplist<span class="token punctuation">,</span>
                          <span class="token keyword">const</span> <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> user_namespace <span class="token operator">*</span>user_ns <span class="token operator">=</span> <span class="token function">current_user_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> count <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                gid_t gid<span class="token punctuation">;</span>
                gid <span class="token operator">=</span> <span class="token function">from_kgid_munged</span><span class="token punctuation">(</span>user_ns<span class="token punctuation">,</span> <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">put_user</span><span class="token punctuation">(</span>gid<span class="token punctuation">,</span> grouplist<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">return</span> <span class="token operator">-</span>EFAULT<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/* fill a group_info from a user-space array - it must be allocated already */</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">groups_from_user</span><span class="token punctuation">(</span><span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">,</span>
    gid_t __user <span class="token operator">*</span>grouplist<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> user_namespace <span class="token operator">*</span>user_ns <span class="token operator">=</span> <span class="token function">current_user_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> count <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                gid_t gid<span class="token punctuation">;</span>
                kgid_t kgid<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">get_user</span><span class="token punctuation">(</span>gid<span class="token punctuation">,</span> grouplist<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">return</span> <span class="token operator">-</span>EFAULT<span class="token punctuation">;</span>

                kgid <span class="token operator">=</span> <span class="token function">make_kgid</span><span class="token punctuation">(</span>user_ns<span class="token punctuation">,</span> gid<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">gid_valid</span><span class="token punctuation">(</span>kgid<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>

                <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span> kgid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/* a simple Shell sort */</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">groups_sort</span><span class="token punctuation">(</span><span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">int</span> base<span class="token punctuation">,</span> max<span class="token punctuation">,</span> stride<span class="token punctuation">;</span>
        <span class="token keyword">int</span> gidsetsize <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>stride <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> stride <span class="token operator">&lt;</span> gidsetsize<span class="token punctuation">;</span> stride <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> stride <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token punctuation">;</span> <span class="token comment" spellcheck="true">/* nothing */</span>
        stride <span class="token operator">/</span><span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>stride<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> gidsetsize <span class="token operator">-</span> stride<span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span>base <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> base <span class="token operator">&lt;</span> max<span class="token punctuation">;</span> base<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">int</span> left <span class="token operator">=</span> base<span class="token punctuation">;</span>
                        <span class="token keyword">int</span> right <span class="token operator">=</span> left <span class="token operator">+</span> stride<span class="token punctuation">;</span>
                        kgid_t tmp <span class="token operator">=</span> <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">gid_gt</span><span class="token punctuation">(</span><span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> left<span class="token punctuation">)</span><span class="token punctuation">,</span> tmp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=</span>
                                    <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                                right <span class="token operator">=</span> left<span class="token punctuation">;</span>
                                left <span class="token operator">-</span><span class="token operator">=</span> stride<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                stride <span class="token operator">/</span><span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/* a simple bsearch */</span>
<span class="token keyword">int</span> <span class="token function">groups_search</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">,</span> kgid_t grp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>group_info<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

        left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        right <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">unsigned</span> <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left<span class="token operator">+</span>right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">gid_gt</span><span class="token punctuation">(</span>grp<span class="token punctuation">,</span> <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">gid_lt</span><span class="token punctuation">(</span>grp<span class="token punctuation">,</span> <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
                <span class="token keyword">else</span>
                        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/**
 * set_groups - Change a group subscription in a set of credentials
 * @new: The newly prepared set of credentials to alter
 * @group_info: The group list to install
 */</span>
<span class="token keyword">void</span> <span class="token function">set_groups</span><span class="token punctuation">(</span><span class="token keyword">struct</span> cred <span class="token operator">*</span>new<span class="token punctuation">,</span> <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token function">put_group_info</span><span class="token punctuation">(</span>new<span class="token operator">-&gt;</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">groups_sort</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">get_group_info</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        new<span class="token operator">-&gt;</span>group_info <span class="token operator">=</span> group_info<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>set_groups<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">/**
 * set_current_groups - Change current's group subscription
 * @group_info: The group list to impose
 *
 * Validate a group subscription and, if valid, impose it upon current's task
 * security record.
 */</span>
<span class="token keyword">int</span> <span class="token function">set_current_groups</span><span class="token punctuation">(</span><span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> cred <span class="token operator">*</span>new<span class="token punctuation">;</span>

        new <span class="token operator">=</span> <span class="token function">prepare_creds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>new<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>ENOMEM<span class="token punctuation">;</span>

        <span class="token function">set_groups</span><span class="token punctuation">(</span>new<span class="token punctuation">,</span> group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">commit_creds</span><span class="token punctuation">(</span>new<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>set_current_groups<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">SYSCALL_DEFINE2</span><span class="token punctuation">(</span>getgroups<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> gidsetsize<span class="token punctuation">,</span> gid_t __user <span class="token operator">*</span><span class="token punctuation">,</span> grouplist<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token keyword">struct</span> cred <span class="token operator">*</span>cred <span class="token operator">=</span> <span class="token function">current_cred</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>gidsetsize <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>

        <span class="token comment" spellcheck="true">/* no need to grab task_lock here; it cannot change */</span>
        i <span class="token operator">=</span> cred<span class="token operator">-&gt;</span>group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>gidsetsize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> gidsetsize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        i <span class="token operator">=</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>
                        <span class="token keyword">goto</span> out<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">groups_to_user</span><span class="token punctuation">(</span>grouplist<span class="token punctuation">,</span> cred<span class="token operator">-&gt;</span>group_info<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        i <span class="token operator">=</span> <span class="token operator">-</span>EFAULT<span class="token punctuation">;</span>
                        <span class="token keyword">goto</span> out<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
out<span class="token punctuation">:</span>
        <span class="token keyword">return</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">may_setgroups</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> user_namespace <span class="token operator">*</span>user_ns <span class="token operator">=</span> <span class="token function">current_user_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">ns_capable</span><span class="token punctuation">(</span>user_ns<span class="token punctuation">,</span> CAP_SETGID<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token function">userns_may_setgroups</span><span class="token punctuation">(</span>user_ns<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/*
 *      SMP: Our groups are copy-on-write. We can set them safely
 *      without another task interfering.
 */</span>

<span class="token function">SYSCALL_DEFINE2</span><span class="token punctuation">(</span>setgroups<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> gidsetsize<span class="token punctuation">,</span> gid_t __user <span class="token operator">*</span><span class="token punctuation">,</span> grouplist<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">;</span>
        <span class="token keyword">int</span> retval<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">may_setgroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>EPERM<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span><span class="token punctuation">)</span>gidsetsize <span class="token operator">&gt;</span> NGROUPS_MAX<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>

        group_info <span class="token operator">=</span> <span class="token function">groups_alloc</span><span class="token punctuation">(</span>gidsetsize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>group_info<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>ENOMEM<span class="token punctuation">;</span>
        retval <span class="token operator">=</span> <span class="token function">groups_from_user</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> grouplist<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>retval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">put_group_info</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> retval<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        retval <span class="token operator">=</span> <span class="token function">set_current_groups</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">put_group_info</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> retval<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/*
 * Check whether we're fsgid/egid or in the supplemental group..
 */</span>
<span class="token keyword">int</span> <span class="token function">in_group_p</span><span class="token punctuation">(</span>kgid_t grp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token keyword">struct</span> cred <span class="token operator">*</span>cred <span class="token operator">=</span> <span class="token function">current_cred</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> retval <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">gid_eq</span><span class="token punctuation">(</span>grp<span class="token punctuation">,</span> cred<span class="token operator">-&gt;</span>fsgid<span class="token punctuation">)</span><span class="token punctuation">)</span>
                retval <span class="token operator">=</span> <span class="token function">groups_search</span><span class="token punctuation">(</span>cred<span class="token operator">-&gt;</span>group_info<span class="token punctuation">,</span> grp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> retval<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>in_group_p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">in_egroup_p</span><span class="token punctuation">(</span>kgid_t grp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token keyword">struct</span> cred <span class="token operator">*</span>cred <span class="token operator">=</span> <span class="token function">current_cred</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> retval <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">gid_eq</span><span class="token punctuation">(</span>grp<span class="token punctuation">,</span> cred<span class="token operator">-&gt;</span>egid<span class="token punctuation">)</span><span class="token punctuation">)</span>
                retval <span class="token operator">=</span> <span class="token function">groups_search</span><span class="token punctuation">(</span>cred<span class="token operator">-&gt;</span>group_info<span class="token punctuation">,</span> grp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> retval<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>in_egroup_p<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>
</div>
{% endraw %}

Sample source code is from the Linux kernel [kernel/groups.c](http://lxr.free-electrons.com/source/kernel/groups.c). Linux is licensed under the [GNU GPL, version 2](https://www.kernel.org/pub/linux/kernel/COPYING).  
Syntax highlighting from [Prism](http://prismjs.com/) using the built-in Okaidia theme, under the [MIT license](http://www.opensource.org/licenses/mit-license.php/).

Each font is licensed under its specific license:  
[Anonymous Pro](http://www.marksimonson.com/fonts/view/anonymous-pro) is distributed with the Open Font License (OFL).  
[Adobe Source Code Pro](http://blog.typekit.com/2012/09/24/source-code-pro/) is licensed under the [SIL Open Font License](http://scripts.sil.org/OFL)  
[Bitstream Vera Sans Mono](http://ftp.gnome.org/pub/GNOME/sources/ttf-bitstream-vera/1.10/) is licensed under a (seemingly) modified MIT license. A mirror is available [here](https://rafa1231518.github.io/nfmm-addons/fonts/lic1.txt).  
[Courier Prime](http://quoteunquoteapps.com/courierprime/) is released under the [SIL Open Font License (OFL)](http://scripts.sil.org/OFL) license.  
[Droid Sans Mono](https://damieng.com/blog/2007/11/14/droid-sans-mono-great-coding-font) is licensed under the [Apache License Version 2.0](http://www.apache.org/licenses/), with a mirror available [here](https://rafa1231518.github.io/nfmm-addons/fonts/lic2.txt).  
The copyright notice for [Envy Code R](https://damieng.com/blog/2008/05/26/envy-code-r-preview-7-coding-font-released) states "Free to use but redistribution prohibited."
[Inconsolata](http://www.levien.com/type/myfonts/inconsolata.html) is licensed under the [SIL Open Font License (OFL)](https://raw.githubusercontent.com/google/fonts/master/ofl/inconsolata/OFL.txt).
[ProFont](http://www.tobias-jung.de/seekingprofont/) is licensed under the MIT license. A mirror is available [here](https://rafa1231518.github.io/nfmm-addons/fonts/lic3.txt).  
The [Ubuntu Fonts](http://font.ubuntu.com/) are licensed under the Ubuntu Font Licence. A mirror is available [here](https://rafa1231518.github.io/nfmm-addons/fonts/lic4.txt).  
[Monofur](http://www.dafont.com/monofur.font)'s license is available [here]([here](https://rafa1231518.github.io/nfmm-addons/fonts/lic5.txt).
The [GNU Unifont](http://unifoundry.com/unifont.html) is licensed under the [GNU General Public License, with the exception that embedding the font in a document does not in itself constitute a violation of the GNU GPL](http://unifoundry.com/LICENSE.txt).