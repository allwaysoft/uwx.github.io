---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> PowerShell Shortcut Keys</h1> 
<pre>⌫ Backspace Delete the character to the left of the cursor.
Alt+F7    Clear the command history. 
Ctrl+C    Break out of the subprompt or terminate execution.

Ctrl+End  Delete all the characters in the line after the cursor. 
Ctrl+L.Arrow  Move left one word at a time. 
Ctrl+R.Arrow  Move right one word at a time. 
Ctrl+S    Pause or resume the display of output.
Delete    Delete the character under the cursor 
Esc       Clear the current line. 
Home      Move to the beginning of the line. 
End       Move to the end of the line. 
Insert    Switch between insert mode and overwrite mode.

Left Arrow  Move the cursor left on the current line. 
Right Arrow Move the cursor right on the current line. 

Tab       Access the tab expansion function (also Shift+Tab). 
Up        Scan backward through command history.
Down      Scan forward through command history.
Pg Up     Access the first command in the command history.
Pg Dn     Access the last command in the command history.

F1        Move the cursor one character to the right on the command line.
          At the end of the line, insert one character from the text of your last command.

F2        Create a new command line by copying your last command line up to the character you type.

F3        Complete the command line with the content from your last command line,
          starting from the current cursor position to the end of the line.

F4        Delete characters from your current command line, starting from
          the current cursor position up to the character you type.

F5        Scan backward through your command history.

F7        Displays a pop-up window with your command history and allows you to select a command.
          Use the arrow keys to scroll through the list. Press Enter to select a command to run,
          or press the Right arrow key to place the text on the command line.

F8        Use text you’ve entered to scan backward through your command history
          for commands that match the text you’ve typed so far on the command line.

F9        Run a specific numbered command from your command history.
          Command numbers are listed when you press F7.

` [Backward apostrophe key] insert a line break or as an escape character to make a literal character.
   You can also break a line at the pipe (|) character.

Alt+Space+E Display an editing shortcut menu.

Right-click If QuickEdit is disabled, displays an editing shortcut menu
            To copy the screen buffer to the Clipboard, right-click, choose Select, and then press Enter. 

$$       The last token in the last line received by the session. (Like !$ in bash )
         (Strictly speaking, this is an <a href="syntax-automatic-variables.html">automatic variable</a>)

<b>PowerShell ISE shortcuts:</b>
Ctrl-M   Expand or Collapse Outlining
CTRL+F   Find in script
CTRL+S   Save
F5       Run
F8       Run Selection</pre>
<p><b>Examples:</b></p>
<p>Check the 'hosts' file exists with DIR</p>
<p><span class="code">PS&gt; dir C:\windows\system32\drivers\etc\hosts<br>
</span><span class="code"> Directory: C:\windows\system32\drivers\etc<br>
...</span></p>
<p><span class="code">Now open it in notepad<br>
PS&gt; notepad $$<br>
</span></p>
<p class="quote"><i class="quote">"Seeing is not enough; you have to feel what you photograph" ~ Andre Kertesz</i></p>
<p><b>Related:</b></p>
<p><a href="clear-history.html">Clear-History</a> - Delete entries from the command history<br>
<a href="get-history.html">Get-History</a> - Get a listing of the session history</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

