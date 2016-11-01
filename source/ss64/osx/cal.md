---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>cal / ncal</h1> 
<p>Display a calendar. ncal offers an alternative layout,
more options and the date of easter. </p>
<pre>Syntax
     cal [-jy] [[<i>month</i>] <i>year</i>]
<br>     cal [-j] -m <i>month</i> [<i>year</i>]
<br>     ncal [-jJpwy] [-s <i>country_code</i>] [[<i>month</i>] <i>year</i>]
<br>     ncal [-Jeo] [<i>year</i>]

Options:
 
   -J       Display Julian Calendar, if combined with the -e option, display
            date of easter according to the Julian Calendar.

   -e       Display date of easter (for western churches).

   -j       Display Julian days (days one-based, numbered from January 1).

   -m <i>month</i> Display the specified month.

   -o       Display date of orthodox easter (Greek and Russian Orthodox Churches).

   -p       Print the country codes and switching days from Julian to Grego-
            rian Calendar as they are assumed by ncal.  The country code as
            determined from the local environment is marked with an asterisk.

   -s country_code
            Assume the switch from Julian to Gregorian Calendar at the date
            associated with the country_code.  If not specified, ncal tries
            to guess the switch date from the local environment or falls back
            to September 2, 1752.  This was when Great Britain and her
            colonies switched to the Gregorian Calendar.

   -w       Print the number of the week below each week column.

   -y       Display a calendar for the specified year.
</pre>
<p>The year must be specified with 4 digits.</p>
<p>ncal offers an
alternative layout, more options and displays the date of easter. The ncal format is a little
cramped but it makes a year fit on a 25x80 terminal. By default ncal is not installed, it can be enabled by creating a <a href="ln.html">link</a> as follows:</p>
<p class="code">$ mkdir -p $HOME/bin<br>
$ ln `which cal` $HOME/bin/ncal<br>
$ $HOME/bin/ncal -w</p>
<p>If no parameters are specified, the current month's calendar is displayed.</p>
<p><b>Examples:</b></p>
<p>Show the calendar for 2016<br>
<span class="code">$ cal 2016</span></p>
<p>Copy the calendar to the clipboard<br>
<span class="code">$ cal | <a href="pbcopy.html">pbcopy</a></span><br>
<br>
<i class="quote">“If everything seems under control, then you're not going fast enough” - Mario Andretti</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/cal.1.html">cal man page</a> - Apple.com<br>
calendar - reminder service<br>
<a href="dc.html">dc</a> - Desk Calculator<br>
<a href="units.html">units</a> - Convert units from one scale to another<br>
<a href="wc.html">wc</a> - Print byte, word, and line counts<br>
<a href="http://funrei.wordpress.com/2008/01/23/become-a-non-autistic-calendar-counting-genius/">Calculate the day of the week, for any date, in your head</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
