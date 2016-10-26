---
title: CSS Minifier and Beautifier
date: 2016-08-15 13:49:34
---

<script src="/libraries/lib/codemirror.js"></script>

<link rel="stylesheet" href="/libraries/lib/codemirror.css">

<script src="/libraries/mode/css/css.js"></script>

<script src="/libraries/csslint.js"></script>

<script src="/libraries/shift-array.js"></script>

<script src="/libraries/common.js"></script>

<script type="text/javascript">
// TODO: is this a bad idea?
HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

window.onload = function() {

  function minify(str) {
    return str
      .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"") // comments
      .replace(/\s{1,}/g,' ')
      .replace(/\{\s{1,}/g,"{")
      .replace(/\}\s{1,}/g,"}")
      .replace(/\;\s{1,}/g,";")
      .replace(/\/\*\s{1,}/g,"/*")
      .replace(/\*\/\s{1,}/g,"*/");
  }
  function beautify(text) {
    var ar = text.replace(/\s{1,}/g,' ')
            .replace(/\{/g,"{~::~")
            .replace(/\}/g,"~::~}~::~")
            .replace(/\;/g,";~::~")
            .replace(/\/\*/g,"~::~/*")
            .replace(/\*\//g,"*/~::~")
            .replace(/~::~\s{0,}~::~/g,"~::~")
            .split('~::~'),
        len = ar.length,
        deep = 0,
        str = '',
        ix = 0;//,
        //shift = step ? createShiftArr(step) : this.shift;

    for(ix=0;ix<len;ix++) {

        if( /\{/.exec(ar[ix]))  {
            str += shift[deep++]+ar[ix];
        } else
        if( /\}/.exec(ar[ix]))  {
            str += shift[--deep]+ar[ix];
        } else
        if( /\*\\/.exec(ar[ix]))  {
            str += shift[deep]+ar[ix];
        }
        else {
            str += shift[deep]+ar[ix];
        }
    }
    return str.replace(/^\n{1,}/,'');
  }
  window.myCodeMirror = CodeMirror(document.getElementById('textfield'), {
    value: "/* CSS example from http://www.w3schools.com/css/tryit.asp?filename=trycss_border-width */\n/*\nvkBeautify used under the MIT license:\n\nThe MIT License (MIT)\n\nCopyright (c) 2013 Vadim Kiryukhin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n*/\np.one {\n    border-style: solid;\n    border-width: 5px;\n}\n\np.two {\n    border-style: solid;\n    border-width: medium;\n}\n\np.three {\n    border-style: dotted;\n    border-width: 2px;\n}\n\np.four {\n    border-style: dotted;\n    border-width: thick;\n}\n\np.five {\n    border-style: double;\n    border-width: 15px;\n}\n\np.six {\n    border-style: double;\n    border-width: thick;\n}\n\np.seven {\n    border-style: solid;\n    border-width: 2px 10px 4px 20px;\n}",
    mode:  "css",
    lineWrapping: true,
    lineNumbers: true
  });

  // Minify
  document.getElementById('do-min').onclick = makeFunc(minify, 'Could not minify: ');
  // Beautify
  document.getElementById('do-bt').onclick = makeFunc(beautify, 'Could not beautify: ');

  // just to keep it DRY
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Lint
  document.getElementById('do-lint').onclick = makeFunc(function(text) {
    //var options = JSON.parse(document.getElementById('csslint-rules').textContent);
    var options = {};
    var i;
    for (i = checkboxes.length - 1; i >= 0; i--) {
    	options[checkboxes[i].name] = !!checkboxes[i].checked;
    }

    var output = CSSLint.verify(text, options);
    var errors = output.messages;
    //if (errors.length === 0) return text;
    var errText = [];
    for (i = errors.length - 1; i >= 0; i--) {
      errText.push(errors[i].line + ':' + errors[i].col + ' - ' + errors[i].type + ': ' + errors[i].message);
    }

    outputText(errText.join('<br>'));

    return text;
  }, 'Could not run CSSLint: ');

  // CSSLint select buttons
  document.getElementsByClassName('groupSelectAll').forEach(function(el) {
	el.onclick = function() {
		this.parentElement.parentElement.parentElement.querySelectorAll('input[type="checkbox"]').forEach(function(v) {
			v.checked = true;
			localStorage.setItem('check-' + v.name, v.checked);
		});
	}
  });
  document.getElementsByClassName('groupSelectNone').forEach(function(el) {
	el.onclick = function() {
		this.parentElement.parentElement.parentElement.querySelectorAll('input[type="checkbox"]').forEach(function(v) {
			v.checked = false;
			localStorage.setItem('check-' + v.name, v.checked);
		});
	}
  });
  document.getElementsByClassName('globalSelectAll').forEach(function(el) {
	el.onclick = function() {
		checkboxes.forEach(function(v) {
			v.checked = true;
			localStorage.setItem('check-' + v.name, v.checked);
		});
	}
  });
  document.getElementsByClassName('globalSelectNone').forEach(function(el) {
	el.onclick = function() {
		checkboxes.forEach(function(v) {
			v.checked = false;
			localStorage.setItem('check-' + v.name, v.checked);
		});
	}
  });
  // load saved selections
  checkboxes.forEach(function(el) {
  	el.onclick = function() {
		localStorage.setItem('check-' + this.name, this.checked); // or the opposite? idk
	};
	el.checked = localStorage.getItem('check-' + el.name) == 'true';
  });

};
</script>

<style type="text/css">
.CodeMirror { /* not at all stolen from http://jsbeautifier.org/ */
    border: 1px solid #ccc;
    height: 450px;
    font-size: 90%;
    margin-bottom: 6px;
    background: white;
}
.groupSelectAll:hover, .groupSelectNone:hover, .globalSelectAll:hover, .globalSelectNone:hover {
	cursor: pointer;
	text-decoration: none;
}
.groupSelectAll, .groupSelectNone, .globalSelectAll, .globalSelectNone {
    font-weight: normal;
}
.optionsList {
	list-style-type: none !important;
}
</style>

<button class="submit" id="do-min">Minify</button> <button class="submit" id="do-bt">Beautify</button> <button class="submit" id="do-lint">CSSLint</button>

<div id="textfield"></div>

<div id="lint-output" style="display: none !important;">placeholder text, this should not be visible</div>

<div class="btnDrop">
    <p class="summary mvm pvn">You can pick and choose which errors and warnings to test for below. <sup><a class="globalSelectAll">(All)</a> | <a class="globalSelectNone">(None)</a></sup></p>
    <div class="line">
        <div class="unit size1of3">
            <h3>Errors <sup><a class="groupSelectAll">(All)</a> | <a class="groupSelectNone">(None)</a></sup></h3>
            <ul class="optionsList">
                <li><label><input name="box-model" checked="" type="checkbox">&nbsp;Beware of broken box sizing</label></li>
                <li><label><input name="display-property-grouping" checked="" type="checkbox">&nbsp;Require properties appropriate for <code>display</code></label></li>
                <li><label><input name="duplicate-properties" checked="" type="checkbox">&nbsp;Disallow duplicate properties</label></li>
                <li><label><input name="empty-rules" checked="" type="checkbox">&nbsp;Disallow empty rules</label></li>
                <li><label><input name="known-properties" checked="" type="checkbox">&nbsp;Require use of known properties</label></li>
            </ul>
        </div>
        <div class="unit size1of3">
            <h3>Compatibility <sup><a class="groupSelectAll">(All)</a> | <a class="groupSelectNone">(None)</a></sup></h3>
            <ul class="optionsList">
                <li><label><input name="adjoining-classes" checked="" type="checkbox">&nbsp;Disallow adjoining classes</label></li>
                <li><label><input name="box-sizing" checked="" type="checkbox">&nbsp;Disallow <code>box-sizing</code></label></li>
                <li><label><input name="compatible-vendor-prefixes" checked="" type="checkbox">&nbsp;Require compatible vendor prefixes</label></li>
                <li><label><input name="gradients" checked="" type="checkbox">&nbsp;Require all gradient definitions</label></li>
                <li><label><input name="text-indent" checked="" type="checkbox">&nbsp;Disallow negative <code>text-indent</code></label></li>
                <li><label><input name="vendor-prefix" checked="" type="checkbox">&nbsp;Require standard property with vendor prefix</label></li>
                <li><label><input name="fallback-colors" checked="" type="checkbox">&nbsp;Require fallback colors</label></li>
                <li><label><input name="star-property-hack" checked="" type="checkbox">&nbsp;Disallow star hack</label></li>
                <li><label><input name="underscore-property-hack" checked="" type="checkbox">&nbsp;Disallow underscore hack</label></li>
                <li><label><input name="bulletproof-font-face" checked="" type="checkbox">&nbsp;Bullet-proof @font-face</label></li>
            </ul>
        </div>
        <div class="unit size1of3 lastUnit">
            <h3>Performance <sup><a class="groupSelectAll">(All)</a> | <a class="groupSelectNone">(None)</a></sup></h3>
            <ul class="optionsList">
                <li><label><input name="font-faces" checked="" type="checkbox">&nbsp;Don't use too many web fonts</label></li>
                <li><label><input name="import" checked="" type="checkbox">&nbsp;Disallow <code>@import</code></label></li>
                <li><label><input name="duplicate-background-images" checked="" type="checkbox">&nbsp;Disallow duplicate background images</label></li>
                <li><label><input name="regex-selectors" checked="" type="checkbox">&nbsp;Disallow selectors that look like regexs</label></li>
                <li><label><input name="universal-selector" checked="" type="checkbox">&nbsp;Disallow universal selector</label></li>
                <li><label><input name="unqualified-attributes" checked="" type="checkbox">&nbsp;Disallow unqualified attribute selectors</label></li>
                <li><label><input name="zero-units" checked="" type="checkbox">&nbsp;Disallow units for 0 values</label></li>
                <li><label><input name="overqualified-elements" checked="" type="checkbox">&nbsp;Disallow overqualified elements</label></li>
                <li><label><input name="shorthand" checked="" type="checkbox">&nbsp;Require shorthand properties</label></li>
            </ul>
        </div>
    </div>
    <div class="line">
        <div class="unit size1of3">
            <h3>Maintainability &amp; Duplication <sup><a class="groupSelectAll">(All)</a> | <a class="groupSelectNone">(None)</a></sup></h3>
            <ul class="optionsList">
                <li><label><input name="floats" checked="" type="checkbox">&nbsp;Disallow too many floats</label></li>
                <li><label><input name="font-sizes" checked="" type="checkbox">&nbsp;Don't use too many font sizes</label></li>
                <li><label><input name="ids" checked="" type="checkbox">&nbsp;Disallow IDs in selectors</label></li>
                <li><label><input name="important" checked="" type="checkbox">&nbsp;Disallow <code>!important</code></label></li>
            </ul>
        </div>
        <div class="unit size1of3">
            <h3>Accessibility <sup><a class="groupSelectAll">(All)</a> | <a class="groupSelectNone">(None)</a></sup></h3>
            <ul class="optionsList">
                <li><label><input name="outline-none" checked="" type="checkbox">&nbsp;Disallow <code>outline:none</code></label></li>
            </ul>
        </div>
        <div class="unit size1of3 lastUnit">
            <h3>OOCSS <sup><a class="groupSelectAll">(All)</a> | <a class="groupSelectNone">(None)</a></sup></h3>
            <ul class="optionsList">
                <li><label><input name="qualified-headings" checked="" type="checkbox">&nbsp;Disallow qualified headings</label></li>
                <li><label><input name="unique-headings" checked="" type="checkbox">&nbsp;Heading should only be defined once</label></li>
            </ul>
        </div>
    </div>
    <a class="right" href="https://github.com/CSSLint/csslint/wiki/Rules">Learn More About the Rules</a>
</div>

<!--
<textarea id="csslint-rules" style="width: 47.48%; height: 15em; resize: vertical;">
{
	"box-model": true,
	"display-property-grouping": true,
	"duplicate-properties": true,
	"empty-rules": true,
	"known-properties": true,
	"adjoining-classes": true,
	"box-sizing": true,
	"compatible-vendor-prefixes": true,
	"gradients": true,
	"text-indent": true,
	"vendor-prefix": true,
	"fallback-colors": true,
	"star-property-hack": true,
	"underscore-property-hack": true,
	"bulletproof-font-face": true,
	"font-faces": true,
	"import": true,
	"duplicate-background-images": true,
	"regex-selectors": true,
	"universal-selector": true,
	"unqualified-attributes": true,
	"zero-units": true,
	"overqualified-elements": true,
	"shorthand": true,
	"floats": true,
	"font-sizes": true,
	"ids": false,
	"important": false,
	"outline-none": true,
	"qualified-headings": true,
	"unique-headings": true
}
</textarea>
-->