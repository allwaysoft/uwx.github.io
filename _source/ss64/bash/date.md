---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>date</h1> 
<p>Display or change the date.</p>
<pre>Syntax
      date [<i>option</i>]... [+<i>Format</i>]
  
      date [<i>option</i>] [MMDDhhmm[[CC]YY][.ss]]
</pre>
<p>'date' with no arguments prints the current time and date, in the
format of the <span class="code">%c</span> directive (described below).<br>
<br>
If given an argument that starts with a <span class="code">+</span>, <span class="code">date</span> prints the
current time and date (or the time and date specified by the<span class="code"> --date</span> option, see below) in the format defined by that argument, which is the
same as in the <span class="code">strftime</span> function.  </p>
<p>Except for directives, which start
with <span class="code">%</span>, characters in the format string are printed unchanged.  The
directives are described below.</p>
<pre>Options:
  -d, --date=<i>String</i>         Display time described by <i>String</i>, instead of 'now'
                            this can be in almost any common format.  
                            It can contain month names, timezones, 'am' and 'pm',
                            'yesterday', 'ago', 'next', etc.

  -f, --file=<i>DateFile</i>       like --date once for each line of <i>DateFile</i>
                            If <i>DateFile</i> is '-', use standard input.  This is
                            useful when you have many dates to process, 
                            because the system overhead of starting up the
                            'date' executable many times can be considerable.

  -I, --iso-8601[=<i>Timespec</i>] Output an <a href="../dates.html">ISO 8601</a> compliant date/time string., '%Y-%m-%d'.
                            <i>Timespec</i>='date' (or missing) for date only,
                            'hours', 'minutes', or 'seconds' for date and
                            time to the indicated precision.
                            If showing any time terms, then include the time zone 
                            using the format '%z'.  If '--utc' is also specified, 
                            use '%Z' in place of '%z'.

  -r, --reference=<i>File</i>      Display the last modification time of <i>File</i>

  -R, --rfc-822             Output RFC-822 compliant date string
                            Example: Mon, 19 Nov 2012 12:44:56 -0600

  -s, --set=<i>String</i>          Set time described by <i>String</i> (see -d above)

  -u, --utc, --universal    Print or set Coordinated Universal Time

      --help                Display this help and exit
      --version             output version information and exit</pre>
<p><i><a id="format"></a>Format</i> controls the output as follows.  The only valid option for the second form <span class="code">(MMDDhhmm[[CC]YY][.ss])</span>will specify Coordinated Universal Time.  </p>
<p> Interpreted sequences are:</p>
<pre>     Date:
        D    Date in mm/dd/yy format (06/24/13)
        x    Date in standard format for locale (09/24/13 for English-US)
        
     Year:
        C   Century (20 for 2015)
        Y   Year in 4-digit format (2015)
        y   Year in 2-digit format (14)
        G   Same as 'Y'
        g   Same as 'y'
        
     Month: 
        b   Month name - abbreviated (Jan)
        B   Month name - full (January)
        h   Same as 'b'
        m   Month number (09)
        
     Week:
        W  Week of the year (00-52)

        V  Week of the year (01-53)
           If the week containing January 1 has four or
           more days in the new year, then it is considered week 1;
           otherwise, it is week 53 of the previous year, and the next week
           is week 1. Similar to <a href="../dates.html">ISO 8601</a> (but not 100% compliant.)

        U  Same as 'W'
        
     Day:
        a   Day of the week - abbreviated name (Mon)
        A   Day of the week - full name (Monday)
        u   Day of the week - number (Monday = 1)
        d   Day of the month - 2 digits (05)
        e   Day of the month - digit preceded by a space ( 5)
        j   Day of the year - (1-366)
        w   Same as 'u'
        
     Time:
        p   AM or PM
        r   Time in 12-hour format (09:15:36 AM)
        R   Time in 24-hour format - no seconds (17:45)
        T   Time in 24 hour format (17:45:52)
        X   Same as 'T'
        Z   Time offset from UTC (-07) This generally consists of Time Zone+<abbr title="Daylight Savings Time">DST</abbr>
        
     Hour: 
        H   Hour in 24-hour format (17)
        I   Hour in 12 hour format (05)
        k   Same as 'H'
        l   Same as 'I' (Upper-case I = Lower-case L)
        
     Minutes &amp; Seconds:
        M   Minutes (35)
        S   Seconds (05)
        s   Seconds elapsed since January 1, 1970 00:00:00 GMT (<a href="http://en.wikipedia.org/wiki/Unix_time">Unix time</a>)</pre>
<p>Here are the same format codes in alphabetical order:</p>
<pre>  %%   a literal %
  %a   locale's abbreviated weekday name (Sun..Sat)
  %A   locale's full weekday name, variable length (Sunday..Saturday)
  %b   locale's abbreviated month name (Jan..Dec)
  %B   locale's full month name, variable length (January..December)
  %c   locale's date and time (Sat Nov 04 12:02:33 EST 1989)
  %d   day of month (01..31)
  %D   date (mm/dd/yy)
  %e   day of month, blank padded ( 1..31)
  %h   same as %b, locale's abbreviated month name (Jan..Dec)
  %H   hour :24 hour(00..23)
  %I   hour :12 hour(01..12)
  %j   day of year (001..366)
  %k   hour :24 hour(00..23)
  %l   hour :12 hour(01..12)
  %m   month (01..12)
  %M   minute (00..59)
  %n   a newline
  %p   locale's AM or PM
  %r   Time, 12-hour (hh:mm:ss [AP]M)
  %s   Seconds since 1970-01-01 00:00:00,  (a GNU extension)
       Note that this value is defined by the localtime system
       call.  It isn't changed by the '--date' option.
  %S   second (00..60)
  %t   a horizontal tab
  %T   Time, 24-hour (hh:mm:ss)
  %U   Week number of year with Sunday as first day of week (00..53)
  %V   Week number of year with Monday as first day of week (01..53)
       If the week containing January 1 has four or
       more days in the new year, then it is considered week 1;
       otherwise, it is week 53 of the previous year, and the next week
       is week 1. Similar to <a href="../dates.html">ISO 8601</a> (but not 100% compliant.)

  %w   day of week (0..6);  0 represents Sunday
  %W   week number of year with Monday as first day of week (00..53)
  %x   locale's date representation (mm/dd/yy)
  %X   locale's time representation (%H:%M:%S)
  %y   last two digits of year (00..99)
  %Y   year (1970...)
  %z   RFC-822 style numeric timezone (-0500) (a nonstandard extension)
       This value reflects the <i>current</i> time zone.
       Is not changed  by the --date option.
  %Z   Time offset from UTC (-07) This generally consists of Time Zone+<abbr title="Daylight Savings Time">DST</abbr>
       Is not changed by the --date option.</pre>
<p>By default, date pads numeric fields with zeroes.  GNU date recognizes the following modifiers between <span class="code">%</span> and a numeric directive.<br>
<br>
<span class="code">-</span> (hyphen) do not pad the field;  useful if the output is intended for human consumption.<br>
<span class="code">_</span> (underscore) pad the field with spaces; useful if you need a fixed number of characters in the output, but zeroes are too distracting.</p>
<p>The<span class="code"> - </span>and<span class="code"> _ </span>are GNU extensions. Here is an example illustrating the differences:</p>
<pre>     date +%d/%m -d "Feb 1"
     =&gt; 01/02
     date +%-d/%-m -d "Feb 1"
     =&gt; 1/2
     date +%_d/%_m -d "Feb 1"
     =&gt;  1/ 2
</pre>
<h2>Setting the time</h2>
<p>If given an argument that does not start with <span class="code">+</span>, <span class="code">date</span> sets the
system clock to the time and date specified by that argument (as
described below).  You must have appropriate privileges to set the
system clock.  The <span class="code">--date</span> and <span class="code">--set</span> options can not be used with such an argument.  The <span class="code">--universal</span> option can be used with such an
argument to indicate that the specified time and date are relative to Coordinated Universal Time rather than to the local time zone.<br>
<br>
The argument must consist entirely of digits, which have the following meaning:</p>
<pre> MM     month
 DD     day within month
 HH     hour
 MM     minute
 CC     first two digits of year (optional)
 YY     last two digits of year (optional)
 SS     second (optional) 
 
 The '--set' option also sets the system clock; see the examples below.</pre>
<p><b>Examples</b><br>
<br>
Print the date of the day before yesterday:<br>
 <span class="code">$ date --date='2 days ago'</span><br>
<br>
Rename a file with the current date and time <br>
<span class="code">$ STAMPME=$HOME/demo_file_$(date +%Y%m%d-%H%M).txt<br>
$ mv $HOME/demo_file</span> <span class="code">$STAMPME</span><br>
<br>
Print the date of the day three months and one day hence:<br>
<span class="code">$ date --date='3 months 1 day'</span><br>
<br>
Print the day of year of Christmas in the current year:<br>
<span class="code">$ date --date='25 Dec' +%j</span><br>
<br>
Print the current full month name and the day of the month:<br>
<span class="code">$ date '+%B %d'</span><br>
 Note that the '%d' expands to a zero-padded two-digit field,
for example:<br>
<span class="code">$ date -d 1may '+%B %d'</span> &nbsp;will print 'May 01'.<br>
<br>
Print a date without the leading zero for one-digit days of the
month, you can use the (GNU extension) '-' modifier to suppress
the padding altogether.<br>
<span class="code">$ date -d=1may '+%B %-d'</span><br>
<br>
Print the current date and time in the format required by many
non-GNU versions of 'date' when setting the system clock:<br>
<span class="code">$ date +%m%d%H%M%Y.%S</span><br>
<br>
Set the system date and time<br>
<span class="code">$ date --set="2012-6-29 11:59 AM"   </span><br>
<br>   
Set the system clock forward by two minutes:<br>          
<span class="code">$ date --set='+2 minutes'</span><br>
<br>   
Print the date in the format specified by RFC-822 (day month year hh:mm:ss zzz), use <br>
<span class="code">$ date     
  --rfc</span><br>
  <br>   
  To convert a date string to the number of seconds since the epoch 1970-01-01 00:00:00 GMT (<a href="http://en.wikipedia.org/wiki/Unix_time">Unix time</a>), use the '--date' option with the '%s' format.  That can be useful in sorting and/or graphing /or comparing data by date.  The following command outputs the number of the seconds since the epoch for the time one second later than the epoch, but in time zone five hours later (Cambridge,Massachusetts), thus a total of five hours and one second after     
  the epoch:<br>
  <br>          
  <span class="code">$ date --date='2000-01-01 00:00:01 UTC +5 hours' +%s<br>
946706400</span><br>
  <br>     
  Suppose you had <b>not</b> specified time zone information in the example above.  Then, date would have used your computer's idea of     
  the time zone (and <abbr title="Daylight Savings Time">DST</abbr>) when interpreting the string.  Here's what you would get if you were in Greenwich, England:<br>
  <br>          
  # local time zone used<br>          
  <span class="code">$ date --date='2000-01-01 00:00:01' +%s<br>
  946684800</span><br>
  <br>   
  Seconds since the 1970 epoch can be useful when sorting or graphing dated data . But to convert a number of seconds back to a more     
  readable date, use a command like:<br>
  <br>          
  <span class="code">$ date -d '1970-01-01 946684800 sec' +"%Y-%m-%d %T %z"<br>          
  2000-01-01 00:00:00 +0000</span><br>
</p>
<p><i class="quote">“Carpe Diem - Seize the day” ~ Horace</i> 
  <br>
<b><br>
Related:</b><br>
<br>
<a href="cal.html">cal</a> - Display a calendar<br>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later time<br>
<a href="time.html">time</a> - Measure Program Resource Use<br>
<a href="times.html">times</a> - User and system times <br>
<a href="touch.html">touch</a> - Change file timestamps<br>
<a href="../dates.html">Standard date and time notation</a> - YYYY-MM-DD<br>
<a href="http://www.unixtimestamp.com/">Unixtimestamp.com</a> - online converter<br>
Equivalent Windows command: <a href="../nt/date.html">DATE</a> - Display or set the date + <a href="../nt/time.html">TIME</a> - Display or set the system time. </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="date.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

