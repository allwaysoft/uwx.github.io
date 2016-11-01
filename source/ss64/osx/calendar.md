---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>Calendar</h1> 
<p>Rreminder service. </p>
<pre>Syntax
      calendar [-a] [-A <i>num</i>] [-B <i>num</i>] [-F <i>friday</i>]
         [-f <i>calendarfile</i>] [-t <i>dd</i>[.<i>mm</i>[.<i>year</i>]]] [-W <i>num</i>]

Key
   -A <i>num</i>  Print lines from today and the next <i>num</i> days (forward, future).

   -a      Process the <i>calendar</i> files of all users and mail the results to them.
           This requires superuser privileges.

   -B <i>num</i>  Print lines from today and the previous <i>num</i> days.

   -F <i>friday</i>
             Specify which day of the week is Friday (the day before the weekend begins).
             Default is 5.

   -f <i>calendarfile</i>
             Use <i>calendarfile</i> as the default calendar file.

   -t <i>dd</i>[.<i>mm</i>[.<i>year</i>]]
             For test purposes only: set date directly to argument values.

   -W <i>num</i>  Print lines from today and the next <i>num</i> days.
           Ignore weekends when calculating the number of days.</pre>
<p>
  To handle calendars in your national code table you can specify ``LANG=
  <locale_name>
  '' in the calendar
  file as early as possible.  To handle national Easter names in the calendars ``Easter=
<national_name>''<br>
  (for Catholic Easter) or ``Paskha=
  <national_name>'' (for Orthodox Easter) can be used.<br>
  <br>
  Other lines should begin with a month and day.  They can be entered in almost any format, either
  numeric or as character strings.  If the proper locale is set, national month and weekday names can be
  used.  A single asterisk (``*'') matches every month.  A day without a month matches that day of every
  week.  A month without a day matches the first of that month.  Two numbers default to the month fol-lowed followed by the day.  Lines with leading tabs default to the last entered date, allowing multiple line
  specifications for a single date.<br>
  <br>
  `Easter', is Easter for this year, and can be followed by a positive or negative integer.<br>
  <br>
  `Paskha', is Orthodox Easter for this year, and can be followed by a positive or negative integer.<br>
  <br>
  Weekdays can be followed by ``-4'' ... ``+5'' (aliases for last, first, second, third, fourth) for moving events like ``the last Monday in April''.<br>
  <br>
  By convention, dates followed by an asterisk are not fixed, i.e., change from year to year.<br>
  <br>
  Day descriptions start after the first <tab> character in the line; if the line does not contain a  <tab> character, it is not displayed.  If the first character in the line is a <tab> character, it is
  treated as a continuation of the previous line.<br>
  <br>
  The `calendar' file is preprocessed by cpp(1), allowing the inclusion of shared files such as lists
  of company holidays or meetings.  If the shared file is not referenced by a full pathname, cpp(1)
  searches in the current (or home) directory first, and then in the directory /usr/share/calendar.<br>
  Empty lines and lines protected by the C commenting syntax (/* ... */) are ignored.<br>
  <br>
  Some possible calendar entries (<tab> characters highlighted by \t sequence)<br>
</tab></tab></tab></tab></national_name></national_name></locale_name></p>
<pre>           LANG=C
           Easter=Ostern

           #include <calendar.usholiday>
           #include <calendar.birthday>

           6/15\tJune 15 (if ambiguous, will default to month/day).
           Jun. 15\tJune 15.
           15 June\tJune 15.
           Thursday\tEvery Thursday.
           June\tEvery June 1st.
           15 *\t15th of every month.

           May Sun+2\tsecond Sunday in May (Muttertag)
           04/SunLast\tlast Sunday in April,
           \tsummer time in Europe
           Easter\tEaster
           Ostern-2\tGood Friday (2 days before Easter)
           Paskha\tOrthodox Easter


FILES
     calendar            file in current directory
     ~/.calendar         calendar HOME directory.  A chdir is done into this directory if it exists.
     ~/.calendar/calendar
                         calendar file to use if no calendar file exists in the current directory.
     ~/.calendar/nomail  do not send mail if this file exists.</calendar.birthday></calendar.usholiday></pre>
<p>  The following default calendar files are provided:<br>
</p>
<pre>     calendar.all          File which includes all the default files.
     calendar.australia    Calendar of events in Australia.
     calendar.birthday     Births and deaths of famous (and not-so-famous) people.
     calendar.christian    Christian holidays.  This calendar should be updated yearly by the local system
                           administrator so that roving holidays are set correctly for the current year.
     calendar.computer     Days of special significance to computer people.
     calendar.croatian     Calendar of events in Croatia.
     calendar.freebsd      Birthdays of FreeBSD committers.
     calendar.french       Calendar of events in France.
     calendar.german       Calendar of events in Germany.
     calendar.history      Everything else, mostly U.S. historical events.
     calendar.holiday      Other holidays, including the not-well-known, obscure, and really obscure.
     calendar.judaic       Jewish holidays.  This calendar should be updated yearly by the local system
                           administrator so that roving holidays are set correctly for the current year.
     calendar.music        Musical events, births, and deaths.  Strongly oriented toward rock 'n' roll.
     calendar.newzealand   Calendar of events in New Zealand.
     calendar.russian      Russian calendar.
     calendar.southafrica  Calendar of events in South Africa.
     calendar.usholiday    U.S. holidays.  This calendar should be updated yearly by the local system admin-istrator administrator
                           istrator so that roving holidays are set correctly for the current year.
     calendar.world        Includes all calendar files except for national files.

COMPATIBILITY
     The calendar program previously selected lines which had the correct date anywhere in the line.  This
     is no longer true, the date is only recognized when it occurs at the beginning of a line.

The calendar utility does not handle Jewish holidays and moon phases.</pre>
<p class="quote"><i>“Carpe Diem - Seize the day” ~ Horace </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/calendar.1.html">calendar man page</a> - Apple.com<br>
<a href="cal.html"> cal</a> - Display a calendar<br>
at(1), cpp(1), mail(1), <a href="cron.html">cron</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="calendar.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
