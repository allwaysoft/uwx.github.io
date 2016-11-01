---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Random</h1> 
<p>Get a random number, or select objects randomly from a collection.</p>
<pre>Syntax
      Get-Random [-InputObject] <i>Object</i>[] [-Count <i>int</i>]
         [-SetSeed <i>int</i>] [<i>CommonParameters</i>]

      Get-Random [[-Maximum] <i>Object</i>] [-Minimum <i>Object</i>]
         [-SetSeed <i>int</i>] [<i>CommonParameters</i>]

key
   -Count <i>int</i>
       Determines how many objects are returned.
       If the value of <i>Count</i> exceeds the number of objects in the 
       collection, Get-Random returns all of the objects in random order.
       The default is 1. 

   -InputObject<i>Object</i>
       A collection of objects.
       Get-Random gets randomly selected objects in random order from the collection.
       Enter the objects, a variable that contains the objects, or a command or
       expression that gets the objects.
       A collection of objects may also be piped to Get-Random.

   -Maximum <i>Object</i>
       A maximum value for the random number.
       Get-Random will return a value that is less than the maximum (not equal).
       Enter a 32-bit integer or a double-precision floating-point number, or
       an object that can be converted, such as a numeric string ("100").
       The value of -Maximum must be greater than (not equal to) the value of -Minimum. 

       If the value of -Maximum or -Minimum is a floating-point number, Get-Random
       will return a randomly selected floating-point number.

       If the value of Minimum is a double (a floating-point number), the default value
       of Maximum is Double.MaxValue.
       Otherwise, the default value is Int32.MaxValue (2,147,483,647)
        
   -Minimum <i>Object</i>
       A minimum value for the random number.
       Enter a 32-bit integer or a double-precision floating-point number, or
       an object that can be converted, such as a numeric string ("100").
       The default value is 0 (zero). 

       The value of Minimum must be less than (not equal to) the value of Maximum.
       If the value of -Maximum or -Minimum is a floating-point number, Get-Random
       will return a randomly selected floating-point number.

   -SetSeed <i>int</i>
       A seed value for the random number generator.
       This seed value is used for the current command and for all subsequent
       Get-Random commands in the current session until SetSeed is used again
       The seed cannot be reset back to its default, clock-based value.<br>        <br>       -SetSeed is not required. By default, Get-Random uses the system clock
       to generate a seed value.
       Using SetSeed will result in non-random behavior, it is typically used 
       to reproduce behavior, such as when debugging or analyzing a script.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  Get-Random  gets a randomly selected number.<br> 
If a collection of objects is submitted to Get-Random, then one or more randomly selected objects from the collection will be returned.</p>
<p>An alternative approach is to create a random object:</p>
<p class="code">$objRand = <a href="new-object.html">new-object</a> random<br>
$num = $objRand.next(1,500)</p>
<p><b>Examples</b></p>
<p>Get a random integer between 0 (zero) and Int32.MaxValue:</p>
<pre>PS C:&gt; get-random</pre>
<p>Get a random integer between 0 (zero) and 99:</p>
<pre>PS C:&gt; get-random -maximum 100</pre>
<p>Get a random integer between -100 and 99:</p>
<pre>PS C:&gt; get-random -minimum -100 -maximum 100</pre>
<p>Get four randomly selected numbers in random order from an array:</p>
<pre>PS C:&gt; get-random -input 1, 2, 3, 5, 8, 13 -count 4</pre>
<p>Get  a randomly selected sample of 25 files from the C: drive of the local computer:</p>
<pre>PS C:&gt; $files = dir -path c:\* -recurse<br>PS C:&gt; $sample = $files | get-random -count 25</pre>
<p class="quote"><i>“Anyone who attempts to generate random numbers by deterministic means is, of course, living in a state of sin” - John von Neumann</i></p>
<p><b>Related:</b><br>
  <br>
<a href="get-unique.html">Get-Unique</a> - Return the unique items from a sorted list.<br>
<a href="../nt/syntax-random.html">Random Numbers</a> in CMD or .js </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-random.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

