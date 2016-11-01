---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Date</h1> 
<p>Get the current date and time.</p>
<pre>Syntax
      Get-Date [[-date] <i>DateTime</i>]
         [-displayHint {Date | Time | DateTime}]
           {[-format <i>string</i>] | [-<b>u</b>Format <i>string</i>]}
              [-year <i>int</i>] [-month <i>int</i>] [-day <i>int</i>] [-hour <i>int</i>]
                 [-minute <i>int</i>] [-second <i>int</i>] [<i>CommonParameters</i>]

key
   -date <i>DateTime</i>
       By default, Get-Date returns the current system date and time.
       The -date parameter allows you to specify
       (usually via the pipeline) a specific date and time. 

   -displayHint <i>DisplayHintType</i>
       Display only the Date, only the Time or the DateTime.
       This does not affect the DateTime object that is retrieved.

   -format <i>string</i>
       Display the date and time in the .NET format
       as indicated by <i>String</i> representing a <a href="syntax-dateformats.html">format specifier</a>. 
        
   -uFormat <i>string</i>
       Display the date and time in <a href="../bash/date.html#format">Unix format</a>.
<br>   -year -month -day -hour -minute -second 
       These allow you to set individual items to be displayed in place
       of the current date/time. e.g. you could set the time to 12:00

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  When you use <span class="code">-format</span> or <span class="code">-uformat</span>, PowerShell will retrieve only the properties that it needs to display the date in the format that you specify. As a result, some properties and methods of DateTime objects might not be available.</p>
<p>Date Properties:</p>
<p class="code">$a = (get-date).day<br>
$a = (get-date).dayofweek<br>
$a = (get-date).dayofyear<br>
$a = (get-date).hour<br>
$a = (get-date).millisecond<br>
$a = (get-date).minute<br>
$a = (get-date).month<br>
$a = (get-date).second<br>
$a = (get-date).timeofday<br>
$a = (get-date).year</p>
<p>To see all the properties and methods of the DateTime object, type <span class="code">get-date get-member</span></p>
<p>If you specify a value that is greater than the number of days in the month,  PowerShell adds the number
of days to the month and displays the result. For example, "get-date -month 2 -day 31" displays "March 3", not "February 31".</p>
<p><b>Examples</b></p>
<p>Retrieve the current date and time, but display only the date:</p>
<p><span class="code">PS C:\&gt; get-date -DisplayHint date</span><br>
  <br>
  Retrieve the current date and time:</p>
<p class="code">PS C:\&gt; $now=Get-Date -format "dd-MMM-yyyy HH:mm"</p>
<p>Retrieve  the current date and time,  display as a General short date/time:</p>
<p class="code">PS C:\&gt; get-date -format g</p>
<p>Display the day of the year:</p>
<p class="code">PS C:\&gt; (get-date).dayofyear</p>
<p>Get the day of the week as an integer (1=Monday, 7=Sunday):</p>
<p class="code">PS C:\&gt; [Int]$dow = Get-Date  | Select-Object -ExpandProperty DayOfWeek<br>
PS C:\&gt; $dow<br>
</p>
<p>Display yesterdays date, using the .AddDays <a href="syntax-methods.html">method</a>:</p>
<p class="code">PS C:\&gt; (Get-Date).AddDays(-1) </p>
<p>Display  daylight savings and UTC:</p>
<p class="code">PS C:\&gt;$a = get-date<br> 
$a.IsDaylightSavingTime()<br>
$a.ToUniversalTime()</p>
<p>Display the bios date of a remote machine using WMI:</p>
<p class="code">PS C:\&gt;$a = get-wmiobject win32_bios -computer SERVER64<br>
$a | format-list -property Name, @{Label="BIOS Date "; `<br>
Expression={$_.ConvertToDateTime($_.ReleaseDate)}}</p>
<p>The backtick character (`) is the line continuation character</p>
<p class="quote"><i>“Carpe Diem - Seize the day” ~ Horace </i></p>
<p><b>Related:</b><br>
  <br>
<a href="set-date.html">
Set-Date</a> - Set system time on the host system<br> 
<a href="new-timespan.html">New-Timespan</a> - Create a timespan object<br>
Equivalent bash command: <a href="../bash/date.html">date</a> - Display or change the date</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-date.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

