---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Here Strings</h1>

<p>A here string can be considered as a stripped-down form of a <a href="syntax-here.html">here document</a>. <br>
It consists of nothing more than <span class="code">COMMAND &lt;&lt;&lt;$WORD</span>, where <span class="code">$WORD</span> is expanded and fed to the stdin of <span class="code">COMMAND</span>. </p>
<p> As a simple example, consider this alternative to the echo-grep construction. </p>
<pre># Instead of: 
if echo "$VAR" | grep -q txt   
# if [[ $VAR = *txt* ]] 
# etc.

# Try:
 if grep -q "txt" &lt;&lt;&lt; "$VAR"
 then
    echo "$VAR contains the substring sequence \"txt\""
 fi</pre>
<p>Or, in combination with <a href="read.html">read</a>:</p>
<pre>String="This is a string of words."

   read -r -a Words &lt;&lt;&lt; "$String" 
#  The -a option to "read" 
#+ assigns the resulting values to successive members of an array.

echo "First word in String is:    ${Words[0]}"   # This 
echo "Second word in String is:   ${Words[1]}"   # is 
echo "Third word in String is:    ${Words[2]}"   # a 
echo "Fourth word in String is:   ${Words[3]}"   # string 
echo "Fifth word in String is:    ${Words[4]}"   # of 
echo "Sixth word in String is:    ${Words[5]}"   # words. 
echo "Seventh word in String is:  ${Words[6]}"   # (null)
                                                 # Past end of $String.</pre>
<p> <b>Related:</b></p>
<p><a href="syntax-here.html">Here Documents</a><br>
<a href="http://tldp.org/LDP/abs/html/here-docs.html">Here Strings</a> - Advanced Bash-Scripting Guide<br>
<a href="syntax.html">OS X Syntax</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-here-string.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
