---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>NLS Formats, Languages and Territories</h1> 
<p> Specifying an NLS parameter for an SQL function means that any User Session 
  NLS parameters (or the lack of) will not affect evaluation 
  of the function.<br>
  <br>
  This feature can be important for SQL statements that contain numbers and dates 
  as string literals. For example, the following query is evaluated correctly 
only if the language specified for dates is American: </p>
<pre>SELECT ENAME FROM EMP
WHERE HIREDATE &gt; '1-JAN-01'
</pre>
<p>This can be made independent of the current date language by specifying NLS_DATE_LANGUAGE: </p>
<pre>SELECT ENAME FROM EMP
WHERE HIREDATE &gt; <a href="syntax-to_date.html">TO_DATE</a>('1-JAN-01','DD-MON-YY',
   'NLS_DATE_LANGUAGE = AMERICAN')


Using all numerics is also language-independent:

SELECT ENAME FROM EMP
WHERE HIREDATE &gt; TO_DATE('1-01-01','DD-MM-YY')
</pre>
<p>NLS settings include Character set, Language and Territory<br>
<br>
Common character sets:</p>
<pre>WE8ISO8859P15 European English includes euro character
US7ASCII      American English
</pre>
<p>The DATE datatype always stores a four-digit year internally.<br>
    <br>
  If you use the standard date format DD-MON-YY<br>
  YY will assume a year in the range  1900-1999 - 
  it is strongly recommended you apply a specific format mask.<br>
    <br>
<b>YEAR 2000  Check:</b></p>
<pre>SELECT
to_char(add_months(to_date('01-JAN-1998', 'DD-MON-YYYY'),1 * 12),'DD-MON-YYYY') y1999,
to_char(add_months(to_date('01-JAN-1998', 'DD-MON-YYYY'),2 * 12),'DD-MON-YYYY') y2000,
to_char(add_months(to_date('01-JAN-1998', 'DD-MON-YYYY'),7 * 12),'DD-MON-YYYY') y2005,
to_char(add_months(to_date('01-JAN-1998', 'DD-MON-YYYY'),52 * 12),'DD-MON-YYYY') y2050
FROM
DUAL;

-- Expected output from script above

-- Y1999       Y2000       Y2005       Y2050
-- ----------- ----------- ----------- -----------
-- 01-JAN-1999 01-JAN-2000 01-JAN-2005 01-JAN-2050
</pre>
<p><b>Oracle Languages</b><br>
<br>
e.g. NLS_LANGUAGE = "MEXICAN SPANISH" </p>
<pre>  us  AMERICAN
  ar  ARABIC

  bn  BENGALI
  ptb BRAZILIAN PORTUGUESE  
  bg  BULGARIAN

  frc CANADIAN FRENCH
  ca  CATALAN
  zhs SIMPLIFIED CHINESE 
  hr  CROATIAN
  cs  CZECH

  dk  DANISH
  nl  DUTCH

  eg  EGYPTIAN
  gb  ENGLISH
  et  ESTONIAN

  sf  FINNISH
  f   FRENCH

  din GERMAN DIN  
  d   GERMAN
  el  GREEK

  iw  HEBREW  
  hu  HUNGARIAN

  is  ICELANDIC
  in  INDONESIAN
  i   ITALIAN

  ja  JAPANESE

  ko  KOREAN

  esa LATIN AMERICAN SPANISH  
  lv  LATVIAN
  lt  LITHUANIAN

  ms  MALAY  
  esm MEXICAN SPANISH

  n   NORWEGIAN

  pl  POLISH
  pt  PORTUGUESE

  ro  ROMANIAN  
  ru  RUSSIAN

  sk  SLOVAK
  sl  SLOVENIAN  
  e   SPANISH
  s   SWEDISH

  th  THAI  
  zht TRADITIONAL CHINESE
  tr  TURKISH

  uk  UKRAINIAN

  vn  VIETNAMESE
</pre>
<p>The NLS_LANGUAGE above implicitly defines several other parameters:<br>
NLS_DATE_LANGUAGE, NLS_SORT<br>
<br>
<b>Oracle Territories</b><br>
<br>
e.g. NLS_TERRITORY = "UNITED KINGDOM"</p>
<pre>  ALGERIA
  AMERICA
  AUSTRALIA
  AUSTRIA

  BAHRAIN
  BANGLADESH
  BELGIUM
  BRAZIL
  BULGARIA

  CANADA
  CATALONIA
  CHINA
  CIS
  CROATIA
  CYPRUS
  CZECH
  CZECHOSLOVAKIA

  DENMARK
  DJIBOUTI

  EGYPT
  ESTONIA

  FINLAND
  FRANCE

  GERMANY
  GREECE

  HONG KONG
  HUNGARY

  ICELAND
  INDONESIA
  IRAQ
  IRELAND
  ISRAEL
  ITALY

  JAPAN
  JORDAN

  KAZAKHSTAN
  KOREA
  KUWAIT

  LATVIA
  LEBANON
  LIBYA
  LITHUANIA
  LUXEMBOURG

  MALAYSIA
  MAURITANIA
  MEXICO
  MOROCCO

  NEW ZEALAND
  NORWAY

  OMAN

  POLAND
  PORTUGAL

  QATAR

  ROMANIA

  SAUDI ARABIA
  SINGAPORE
  SLOVAKIA
  SLOVENIA
  SOMALIA
  SOUTH AFRICA
  SPAIN
  SUDAN
  SWEDEN
  SWITZERLAND
  SYRIA

  TAIWAN
  THAILAND
  THE NETHERLANDS
  TUNISIA
  TURKEY

  UKRAINE
  UNITED ARAB EMIRATES
  UNITED KINGDOM
  UZBEKISTAN

  VIETNAM

  YEMEN</pre>
<p>The NLS_TERRITORY implicitly defines several other parameters:<br>
NLS_NUMERIC_CHARACTERS, NLS_CURRENCY, NLS_ISO_CURRENCY, NLS_DATE_FORMAT, NLS_MONETARY_CHARACTERS, NLS_CREDIT, NLS_DEBIT<br>
<br>
If necessary these can be explicitly defined e.g. <span class="code">NLS_NUMERIC_CHARACTERS = ",."</span><br>
<br>

NLS_COMP<br>
This provides a simple alternative to specifying NLS_SORT in an SQL WHERE clause</p>
<p>&gt;NLS formats will affect SQL statements in 
  views, CHECK constraints, and triggers.<br>
  <br>
  <b>Related Commands</b><br>
  <br>
<a href="session_a.html">ALTER SESSION</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-nls.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

