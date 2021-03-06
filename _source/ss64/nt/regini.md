---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>REGINI (Windows7/2008 or XP <a href="../links/windows.html#kits">Resource kit</a>)</h1> 
<p>Change Registry Permissions.</p>
<pre>Syntax
      REGINI [-m \\<i>machinename</i>] [-i <i>n</i>]
         [-o <i>outputWidth</i>][-b] <i>textFiles</i>...

      REGINI [-h <i>hivefile hiveroot</i>] [-i <i>n</i>]
         [-o <i>outputWidth</i>][-b] <i>textFiles</i>...

Key
   -m     A remote computer to be modified.

   -h     The local hive to manipulate.

   -i <i>n</i>   The display indentation multiple.  Default is 4

   -o <i>outputWidth</i> 
          The width of the command output.  By default the outputWidth is set
          to the width of the console window unless standard output has 
          been redirected to a file, in which case, 240 is used.

  <i>textFiles</i>  One or more ANSI or Unicode text files containing registry data.

   -b     Make REGINI backward compatible with older versions of REGINI that
          did not strictly enforce line continuations and quoted strings
          Specifically, REG_BINARY, REG_RESOURCE_LIST and
          REG_RESOURCE_REQUIREMENTS_LIST data types did not need line
          continuations after the first number that gave the size of the data.
           It just kept looking on following lines until it found enough data
           values to equal the data length or hit invalid input.  Quoted
           strings were only allowed in REG_MULTI_SZ.  They could not be
           specified around key or value names, or around values for REG_SZ or
           REG_EXPAND_SZ  Finally, the old REGINI did not support the semicolon
           as an end of line comment character.</pre>
<p>To understand the format of the input <i>textFile</i>  use
the REGDMP command (22,288 bytes, Windows 2000 Resource Kit) with no arguments to dump the current contents of
the  registry to standard out.  Redirect standard out to a file and
this file is acceptable as input to REGINI. <br>
<span class="code">regdmp HKEY_CURRENT_USER &gt;hkcu.txt</span></p>
<blockquote>
<p>The REGDMP utility has not been supplied with any versions of Windows or any Resource Kits since Windows 2000, the likely expectation is that most people will now use PowerShell (<a href="../ps/get-acl.html">Get-ACL</a> and <a href="../ps/set-acl.html">Set-ACL</a>) for this, the new commands are widely available and <i>much</i> easier to use.</p>
</blockquote>
<p>Some general rules are:<br>
Semicolon character is an end-of-line comment character, provided it
is the first non-blank character on a line<br>
<br>           
Backslash character is a line continuation character.  All           
characters from the backslash up to but not including the first           
non-blank character of the next line are ignored.  If there is more           
than one space before the line continuation character, it is           
replaced by a single space.<br>
<br>           
Indentation is used to indicate the tree structure of registry keys           
The REGDMP program uses indentation in multiples of 4.  You can use           
hard tab characters for indentation, but embedded hard tab           
characters are converted to a single space regardless of their           
position<br>
<br>           
Values should come before child keys, as they are associated with           
the previous key at or above the value's indentation level.<br>
<br>           
For key names, leading and trailing space characters are ignored and           
not included in the key name, unless the key name is surrounded by           
quotes.  Imbedded spaces are part of a key name.<br>
<br>           
Key names can be followed by an Access Control List (ACL) which is a           
series of decimal numbers, separated by spaces, bracketed by a           
square brackets (e.g.  [8 4 17]).  The valid numbers and their           
meanings are:</p>
<pre>   1  - Administrators Full Access
   2  - Administrators Read Access
   3  - Administrators Read and Write Access
   4  - Administrators Read, Write and Delete Access
   5  - Creator Full Access
   6  - Creator Read and Write Access
   7  - World Full Access
   8  - World Read Access
   9  - World Read and Write Access
   10 - World Read, Write and Delete Access
   11 - Power Users Full Access
   12 - Power Users Read and Write Access
   13 - Power Users Read, Write and Delete Access
   14 - System Operators Full Access
   15 - System Operators Read and Write Access
   16 - System Operators Read, Write and Delete Access
   17 - System Full Access
   18 - System Read and Write Access
   19 - System Read Access
   20 - Administrators Read, Write and Execute Access
   21 - Interactive User Full Access
   22 - Interactive User Read and Write Access
   23 - Interactive User Read, Write and Delete Access</pre>
<p>If there is an equal sign on the same line as a left square bracket then the equal sign takes precedence, and the line is treated as a registry value.  If the text between the square brackets is the
string DELETE with no spaces, then REGINI will delete the key and
any values and keys under it.</p>
<pre>           For registry values, the syntax is:

              value Name = type data</pre>
<p>
Leading spaces, spaces on either side of the equal sign and spaces
between the type keyword and data are ignored, unless the value name<br>
is surrounded by quotes.  If the text to the right of the equal sign
is the string DELETE, then REGINI will delete the value.<br>
<br>
The value name can be left out or be specified by an @
character which will resolve to an empty value <i>name</i>. <br>
The following two lines are identical:<br>
<br>
<span class="code">= type data<br>
@ = type data</span><br>
<br>
This syntax means that you can't create a value with leading or
trailing spaces, an equal sign or an @ in the value name,
unless you put the name in quotes.</p>
<pre>Valid value types and format of data that follows are:

   REG_SZ <i>text</i>
   REG_EXPAND_SZ <i>text</i>
   REG_MULTI_SZ "<i>string1</i>" "<i>str</i>""<i>ing2</i>" ...
   REG_DATE <i>mm/dd/yyyy HH:MM DayOfWeek</i>
   REG_DWORD <i>numberDWORD</i>
   REG_BINARY <i>numberOfBytes numberDWORD(s)</i>...
   REG_NONE           (same format as REG_BINARY)
   REG_RESOURCE_LIST  (same format as REG_BINARY)
   REG_RESOURCE_REQUIREMENTS      (same format as REG_BINARY)
   REG_RESOURCE_REQUIREMENTS_LIST (same format as REG_BINARY)
   REG_FULL_RESOURCE_DESCRIPTOR   (same format as REG_BINARY)
   REG_QWORD <i>numberQWORD</i>
   REG_MULTISZ_FILE <i>fileName</i>
   REG_BINARYFILE <i>fileName</i>

If no value type is specified the default is REG_SZ <i>text</i></pre>
<p>
For REG_SZ and REG_EXPAND_SZ, if you want leading or trailing spaces
in the value text, surround the text with quotes.  The value text
can contain any number of imbedded quotes, and REGINI will ignore
them, as it only looks at the first and last character for quote
characters.<br>
<br>
For REG_MULTI_SZ, each component string is surrounded by quotes.  If
you want an imbedded quote character, then double quote it, as in
string2 above.<br>
<br>
For REG_BINARY, the value data consists of one or more numbers The
default base for numbers is decimal.  Hexidecimal can be specified
by using 0x prefix.  The first number is the number of data bytes,
excluding the first number.  After the first number must come enough
numbers to fill the value.  Each number represents one DWORD or 4
bytes.  So if the first number was 0x5 you would need two more
numbers after that to fill the 5 bytes.  The high order 3 bytes<br>
of the second DWORD would be ignored.<br>
<br>
Whenever specifying a registry path, either on the command line
or in an input file, the following prefix strings can be used:</p>
<pre>   HKEY_LOCAL_MACHINE
   HKEY_USERS
   HKEY_CURRENT_USER
   USER:
   Each of these strings can stand alone as the key name or be followed
   a backslash and a subkey path.</pre>
<p><b>Example</b></p>
<p>Grant Admin full access and World Read/Write access to an HKLM registry key on computer64:</p>
<p>regdemo.txt</p>
<p class="code">HKEY_LOCAL_MACHINE\Software\Classes\SS64 [1 9]</p>
<p>Command:</p>
<p><span class="code">C:\&gt; RegIni -m \\computer64 regdemo.txt </span><br>
  <br>

  <i class="quote">“If you're not failing every now and again, it's a sign you're not doing anything very innovative” - Woody Allen</i></p>
<p>  <b>Related:</b></p>
<p><a href="http://go.microsoft.com/fwlink/?LinkId=201803">Regini  documention</a> - Full docs originally provided as part of the Windows Server 2000 Resource Kit<br>  
<a href="regedit.html">REGEDIT</a> - Import or export registry settings<br>
<a href="reg.html">REG</a> - Registry: Read, Set, Export, Delete keys and values<br>
  <a href="https://support.microsoft.com/kb/245031">Q245031</a> - Use a script to change registry permissions<br>
<a href="https://support.microsoft.com/kb/237607">Q237607</a> - Use Regini.exe to set permissions on registry<br>
PowerShell equivalent: <a href="../ps/get-acl.html">Get-ACL</a> and <a href="../ps/set-acl.html">Set-ACL</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="regini.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

