---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_home.lbi" --><!-- #EndLibraryItem --><h1>The vi editor (<b>vi</b>sual editor) - A quick reference guide.</h1>
<p><b>To startup vi:</b></p>
<p> <span class="code">vi <i>filename</i></span><br>
<br> 
<b>Insert text </b>(Insert mode)<b>:</b></p>
<p>Vi has two modes <i>insert</i> mode and <i>command</i> mode. The editor begins in command mode, where  cursor movement and copy/paste commands can be issued.</p>
<table>
  <tbody><tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Open line ab<u>o</u>ve cursor </div></td>
    <td class="code">O</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><div class="label"><u>I</u>nsert text at beginning of line</div></td>
    <td class="code">I </td>
    <td><div class="label"><u>I</u>nsert text at cursor</div></td>
    <td class="code">i</td>
    <td><div class="label"><u>a</u>ppend text after cursor</div></td>
    <td class="code">a</td>
    <td><div class="label"><u>A</u>ppend text at line end</div></td>
    <td class="code">A</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Open line bel<u>o</u>w cursor</div></td>
    <td class="code">o</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</tbody></table>
<p><b>Switch to Command mode:</b></p>
<blockquote>
<p><span class="label">Switch to command mode:</span> <span class="code">[ESC]</span></p>
<p>Most commands execute as soon as typed except for "colon" commands which execute when you press the return key. </p>
</blockquote>
<p><b>Cursor Movement</b> (command mode):</p>
<table>
  <tbody><tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Scroll <u>B</u>ackward 1 screen</div></td>
    <td class="code">[ctrl] b</td>
    <td>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Scroll <u>U</u>p 1/2 screen</div></td>
    <td class="code">[ctrl] u</td>
    <td>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td><div class="label">Go to beginning of line</div></td>
    <td class="code">0</td>
    <td><div class="label">Go to line <span class="grn"><var>n</var></span></div></td>
    <td><var class="grn">n</var><span class="code">G</span></td>
    <td><div class="label">Go to end of line</div></td>
    <td><div class="code">$</div></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Scroll <u>D</u>own 1/2 screen</div></td>
    <td class="code">[ctrl] d</td>
    <td><div class="label">Go to line number <span class="grn">##</span></div></td>
    <td><div class="code">:<span class="grn">##</span></div></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Scroll <u>F</u>orward 1 screen</div></td>
    <td class="code">[ctrl] f</td>
    <td>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Go to last line</div></td>
    <td class="code">G</td>
    <td>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td><div class="label">Scroll by sentence <abbr title="Forward/Back">f/b</abbr></div></td>
    <td class="code">( )</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td><div class="label">Scroll by word <abbr title="Forward/Back">f/b</abbr></div></td>
    <td class="code">w b</td>
    <td><div class="label">Move left, down, up, right</div></td>
    <td class="code"><abbr title="The four keys HJKL in a line make it possible to keep one finger on each and move about as quickly as possible">h j k l</abbr></td>
    <td><div class="label">Left <span class="grn">6</span> chars</div></td>
    <td><div class="code"><span class="grn">6</span>h</div></td>
  </tr>
  <tr>
    <td><div class="label">Scroll by paragraph <abbr title="Forward/Back">f/b</abbr></div></td>
    <td class="code">{ } </td>
    <td><div class="label">Move left, down, up, right</div></td>
    <td class="code">← <span class="code1">↓ </span><span class="code1">↑ </span> →<span class="code1"> Arrow Keys</span></td>
    <td><div class="label">Go to line #<span class="grn">6</span></div></td>
    <td><div class="code"><span class="grn">6</span>G</div></td>
  </tr>
</tbody></table>
<p><b>Delete text</b> (command mode):</p>
<table>
  <tbody><tr>
    <td><div class="label">Change word </div></td>
    <td class="code">cw</td>
    <td><div class="label">Replace one character</div></td>
    <td class="code">r</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><div class="label">Delete word</div></td>
    <td class="code">dw</td>
    <td><div class="label">Delete text at cursor</div></td>
    <td class="code">x</td>
    <td><div class="label">Delete entire line (to buffer)</div></td>
    <td class="code">dd</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Delete (backspace) text at cursor</div></td>
    <td class="code">X</td>
    <td><div class="label">Delete <span class="grn">5</span> lines (to buffer)</div></td>
    <td class="code"><span class="grn">5</span>dd</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Delete current to end of line</div></td>
    <td class="code">D</td>
    <td><div class="label">Delete lines <span class="grn">5-10</span></div></td>
    <td class="code">:<span class="grn">5,10</span>d </td>
  </tr>
</tbody></table>
<p><b>Editing</b> (command mode):</p>
<table>
  <tbody><tr>
    <td><div class="label">Copy line</div></td>
    <td class="code">yy </td>
    <td><div class="label">Copy <var class="grn">n</var> lines</div></td>
    <td class="code"><var class="grn">n</var>yy</td>
    <td><div class="label">Copy lines <span class="grn">1-2 </span>/paste after&nbsp;<span class="grn">3</span></div></td>
    <td class="code">:<span class="grn">1,2</span>t<span class="grn">3</span></td>
  </tr>
  <tr>
    <td><div class="label">Paste above current line</div></td>
    <td class="code">P</td>
    <td><div> </div></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><div class="label">Paste below current line</div></td>
    <td class="code">p</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Move lines <span class="grn">4-5 </span>/paste after&nbsp;<span class="grn">6</span></div></td>
    <td class="code">:<span class="grn">4,5</span>m<span class="grn">6</span></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Join previous line</div></td>
    <td class="code">J</td>
  </tr>
  <tr>
    <td><div class="label">Search backward for <var>string</var></div></td>
    <td class="code">?<var>string</var></td>
    <td><div class="label">Search forward for <var>string</var></div></td>
    <td class="code">/<var>string</var></td>
    <td><div class="label">Find next <var>string</var> occurrence</div></td>
    <td class="code">n</td>
  </tr>
  <tr>
    <td><div class="label">% (entire file)<b> s </b>(search and replace) /old text with new/ <b>c</b> (confirm) <b>g</b> (global - all)</div></td>
    <td class="code"><b>:%s/</b>oldstring<b>/</b>newstring<b>/cg</b></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><div class="label">Ignore case during search</div></td>
    <td class="code">:set&nbsp;ic</td>
  </tr>
  <tr>
    <td><div class="label">Repeat last command</div></td>
    <td><b class="code">.</b></td>
    <td><div class="label">Undo previous command</div></td>
    <td class="code">u</td>
    <td><div class="label">Undo all changes to line</div></td>
    <td class="code">U</td>
  </tr>
</tbody></table>
<p><b>Save and Quit</b> (command mode):</p>
<table>
  <tbody><tr>
    <td><div class="label">Save changes to buffer</div></td>
    <td><div class="code">
<div class="code">:w</div>
</div></td>
    <td><div class="label">Save changes and quit vi</div></td>
    <td><div class="code">ZZ or :wq</div></td>
    <td><div class="label">Save file to new file</div></td>
    <td><div class="code">
<div class="code">:w <i>file</i></div>
</div></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td></td>
    <td><div class="label">Quit without saving</div></td>
    <td><div class="code">
<div class="code">:q!</div>
</div></td>
    <td><div class="label">Save lines to new file</div></td>
    <td><div class="code">
<div class="code">:<span class="grn">10,15</span>w <i>file</i></div>
</div></td>
  </tr>
</tbody></table>
<p>In general a  number <span class="code"><i>n</i></span> preceding any vi command will tell vi to repeat
that command <span class="code"><i>n</i></span> times.</p>
<p><span class="code">:syntax on</span> Turn on syntax highlighting<br>
<span class="code">:syntax off </span>Turn off syntax highlighting<br>
<span class="code">:set number</span> Turn on Line numbering (shorthand :set nu) <br>
<span class="code">:set nonumber</span> Turn off Line numbering (shorthand :set nonu) </p>
<p><span class="code">:set ignorecase</span> Ignore case sensitivity when searching<br>
<span class="code">:set noignorecase</span> Restore case sensitivity (default) <br>
<br>
<span class="code">:set autoindent </span>Turn on Auto-indentation <br>
Use the command<span class="code"> &gt;&gt;</span> to indent and the <span class="code">&lt;&lt;</span> command to outdent <br>
<span class="code">:set shiftwidth=4</span> Set indentation to four spaces<br>
<span class="code">:set noautoindent</span> Turn off Auto-indentation<br>
Change all Windows CR/LF to Unix style LF line endings in the current file:<br>
<span class="code">:g/^M/s///g<br>
</span>(To enter the <span class="code">^M</span>, type CTRL-V CTRL-M)</p>
<p> The vi editor  was an update on the earlier <span class="code">ex</span> (and <span class="code">ed</span>) editors, it introduced a <i>Visual Interactive</i> mode which was contracted to give the name <span class="code">vi</span>.</p>
<p class="quote"><i>“vi was written for a world that doesn't exist anymore - unless you decide to get a satellite phone and use it to connect to the Net at 2400 baud” - <a href="http://www.theregister.co.uk/Print/2003/09/11/bill_joys_greatest_gift/">Bill Joy</a></i></p>
<p><b>Related:</b></p>
<p><a href="vi-reference.html">Full list of VI commands</a> <br>
<a href="http://michael.peopleofhonoronly.com/vim/">Programmers Vim cheat sheet</a><br>
<a href="http://www.openvim.com/tutorial.html">VIM tutor</a><br>
<a href="http://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118">How to grok vi</a> - Stack Overflow<br>
<a href="http://happyedit.se/">HappyEdit</a> - The modern Vim-inspired text editor<br>
<a href="http://vim.spf13.com/">vim.spf13</a> - The Ultimate Vim Distribution<br>
<a href="https://github.com/grantm/bcvi">bcvi</a> - Back Channel vi - remote file editing with SSH<br>
<a href="http://www.amazon.com/exec/obidos/ASIN/059652983X/ss64">Book - Learning the vi &amp; vim Editor</a><br>
<a href="http://code.google.com/p/macvim/">MacVim</a> &amp; <a href="http://jeffkreeftmeijer.com/2011/vim-is-hard-i-just-want-to-click-around/">MacVim vs TextMate</a> </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="vi.html#"><img src="images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

