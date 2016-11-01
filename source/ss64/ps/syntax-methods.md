---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Methods</h1>
<p>Methods allow you to examine, compare and format many properties of a PowerShell Object.</p>
<p>Discover the methods available for an object with <a href="get-member.html">Get-Member</a></p>
<p>For example, an integer:<span class="code"> 123 | get-member</span> will return the methods:<span class="code"> CompareTo, Equals, GetHashCode, GetType, GetTypeCode, ToString</span></p>
<p>Using some of those methods:<br> 
<span class="code">(123).equals(456)</span>  will return false <br>
<span class="code">(123).CompareTo(150)</span>will return<span class="code"> -1 <br>
(123).ToString()<br>
</span>Note that CompareTo() differs from equals() in that it returns different values if the item is greater than or less than. </p>
<p>Finding methods for a string: <span class="code"> "The world is everlasting" | get-member </span>will return the methods:<span class="code"> Clone, CompareTo, Contains, CopyTo, EndsWith, Equals,GetEnumerator,
GetHashCode, GetType, GetTypeCode, GetChars, GetLength, IndexOf, IndexOfAny, Insert,
IsNormalised, LastIndexOf, 
LastIndexOfAny, Normalize, PadLeft, PadRight, Remove, 
<a href="replace.html">Replace</a>, <a href="split.html">Split</a>, StartsWith, Substring, ToCharArray, ToLower, ToLowerInvariant, ToString,
ToUpper,ToUpperInvariant, <a href="trim.html">Trim</a>,<a href="trim.html">TrimEnd</a>,<a href="trim.html">TrimStart</a>, Chars, Length</span></p>
<p>Examples:</p>
<p><span class="code">($myStringVar1).ToLower()<br>
($myStringVar1).equals($myStringVar2)<br>
($myStringVar1).CompareTo($myStringVar2)<br>
($myStringVar1).PadRight() + "**"<br>
("a b c").split("b")<br>
("aBCdefBCghi").split("BC")<br>
("aBCdefBCghBi").split("[BC]")<br>
$strings = 'first','second','third'<br>
$strings -join '--'</span></p>
<h2>An (incomplete) List of  the many .Net Methods available in PowerShell:</h2>
<pre>  AddDays()
  AddHours()
 
  Clone() 
  Create()
  Chars(<i>IntIndex</i>) {get;}
  CompareTo(<i>Object</i> ) 
  CompareTo(<i>String</i>) 
  Contains(<i>strValue</i>) 
  CopyTo(<i>IntSourceIndex</i>, <i>strDestination</i>, <i>IntDestinationIndex</i>, <i>IntCount</i>) 
 
  Delete()
 
  EndsWith(<i>String </i>[, <i>StringComparisonType</i>])
  Equals(<i>Object</i>)
  Equals(<i>strValue</i>)
  Equals(<i>strValue</i>, <i>StringComparisonType</i>)
 
  get_CreationTime()
  get_CreationTimeUtc()
  GetEnumerator() 
  get_FullName()
  get_LastAccessTime()
  get_LastWriteTime()
  GetType() 
  get_Chars(<i>IntIndex</i>) 
  get_Length() 
 
  IndexOf(<i>StrValue</i>, <i>IntStartIndex</i>, <i>IntCount</i>)
  IndexOfAny(<i>strAnyOf</i>, [<i>IntStartIndex</i>, <i>IntCount</i>])
  Insert(<i>IntStartIndex</i>, String value)
  Join(<i>string_separator</i>, <i>StringArray</i>)
  Length {get;}
 
  PadLeft(<i>IntTotalWidth </i>[, <i>StrPaddingChar</i>] )
  PadRight(<i>IntTotalWidth </i>[, <i>StrPaddingChar</i>] )
 
  Remove(<i>IntStartIndex</i> [, <i>IntCount</i>])
 <a href="replace.html"> Replace</a>(<i>strOldChar</i>, <i>strNewChar</i>)
 
  <a href="split.html">Split</a>(<i>strSeparator</i> [,<i>MaxSubstrings</i>])
  StartsWith(<i>strValue</i> [,<i>strComparisonType</i>)
  Substring(<i>IntStartIndex</i>[, <i>IntLength</i>])
 
  ToCharArray([<i>IntStartIndex</i>, <i>IntLength</i>]) 
  ToLower() 
  ToString() 
  ToUpper() 
  <a href="trim.html">Trim</a>(<i>strTrimChars</i>]) 
  <a href="trim.html">TrimEnd</a>(<i>strTrimChars</i>) 
  <a href="trim.html">TrimStart</a>(<i>strTrimChars</i>) </pre>
<p class="quote"><i>“There nearly always is method in madness. It's what drives men mad, being
methodical” ~ G. K. Chesterton</i></p>
<p><b>Related:</b></p>
<p><a href="get-item.html">Get-Item</a> Variable:<br>
<a href="get-variable.html">Get-Variable</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

