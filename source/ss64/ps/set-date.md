---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-Date</h1> 
<p>Change the computer system time.</p>
<pre>Syntax
      Set-Date <b>{</b> [-date] <i>DateTime</i>] <b>|</b> [-adjust] <i>TimeSpan</i> <b>}</b>
           [-displayHint <b>{</b>Date <b>|</b> Time <b>|</b> DateTime<b>}</b>]
              [-whatIf] [-confirm]  [<i>CommonParameters</i>]

Key
   -Date <i>DateTime</i>
       Change the date and time to <i>DateTime</i>.
       Pass a Date-Time object from <a href="get-date.html">Get-Date</a> or enter a date in  
       the short date format for your locale. 
        
       The time will default to midnight on the specified date.
       If you specify only a time, the date will not be changed.

   -Adjust <i>TimeSpan</i>
       Add or subtract <i>TimeSpan</i> from the current date and time. 
       Use the standard date and time format for your locale
       or pass a TimeSpan object from <a href="new-timespan.html">New-TimeSpan</a>.

   -DisplayHint <i>DisplayHintType</i>
       Display only the Date, only the Time or the DateTime.
       This does not affect the DateTime object that is retrieved.

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.
 
   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Add two days to the current system date, without changing the time:</p>
<p><span class="code">PS C:\&gt; Set-Date -Date (Get-Date).AddDays(2)</span><br>
<br>Set the current system time back by 30 minutes:</p>
<p class="code">PS C:\&gt; set-date -adjust -0:30:0 </p>
<p>Advance the system time on the local computer forwards by 30 minutes:</p>
<p class="code">PS C:\&gt; $halfhr = new-timespan -minutes 30<br>
PS C:\&gt; set-date -adjust $halfhr</p>
<p class="quote"><i>“I always play women I would date” ~ Angelina Jolie</i></p>
<p><b>Related:</b><br>
<br>
<a href="get-date.html">Get-Date</a> - Get current date and time <br>
<a href="new-timespan.html">New-Timespan</a> - Create a timespan object<br>
Equivalent bash command: <a href="../bash/date.html">date</a> - Display or change the date</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

