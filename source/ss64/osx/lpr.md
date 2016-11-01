---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>lpr</h1> 
<p>Print files</p>
<pre>Syntax
      lpr  [-E] [-P <i>destination</i>]
             [-# <i>num-copies</i> [-l] [-o <i>option</i>]
                [-p] [-r] [-C/J/T <i>title</i>] [ <i>file(s)</i> ]

Options
  -E     Force encryption when connecting to the server.

  -P <i>destination</i>
         Print files to the named printer.

  -# <i>copies</i>
         Sets the number of copies to print from 1 to 100.

  -C <i>name</i>   Sets the job name.

  -J <i>name</i>   Sets the job name.

  -T <i>name</i>   Sets the job name.
     
  -l        Specifies that the print file is already formatted for the desti-
      nation and should be sent without filtering. This option is equiv-
      alent to "-oraw".

  -o <i>option</i>
      Sets a job option.

  -p      Specifies that the print file should be formatted with a shaded
      header with the date, time, job name, and page number. This option
      is  equivalent to "-oprettyprint" and is only useful when printing
      text files.

  -r      Specifies that the named print files should be deleted after
          printing them.</pre>
<p>lpr submits files for printing. Files named on the command line 
  are sent to the named printer (or the system default destination if no des- 
  tination is specified). If no files are listed on the command-line lpr reads 
  the print file from the standard input.</p>
<p class="quote"><i>"Documentation 
  is the castor oil of programming. Managers know it must be good because the 
  programmers hate it so much" ~ Anon </i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/lpr.1.html">lpr man page</a> - Apple.com<br>
<a href="enable.html">enable</a> - Stop or start printers and classes. <br>
<a href="lprm.html">lprm</a> - Remove jobs from the print queue<br>
<a href="lpstat.html">lpstat</a> - Printer status information <br>
cancel(1) - cancel print<br>
lp - print files<br>
lpadmin - printer admin<br>
<a href="lpc.html">lpc</a> - Line printer control program</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lpr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
