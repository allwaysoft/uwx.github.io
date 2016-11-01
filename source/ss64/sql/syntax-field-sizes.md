---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Database field sizes</h1>
<p>Some popular best practices on length and data type for common database fields.</p>
<pre> Title          Max 35 chars (Mr,Mrs,Miss,Ms,Dr,Rev,Sir,Lady,Lord,Captain,Major,Professor,Dame,Colonel.)

 Gender         Unknown(0), Male(1), Female(2), Indeterminate:Male+Female(3),
                Male from Female(4), Female from Male(5), Not Applicable(9) 

 First Name     Max 35 chars (no spaces)
 Last Name      Max 35 chars
 Display name   Max 70 chars
 NameSuffix     Max 35 chars (OBE, MBE, BSc etc)

 Address
    Flat Number/Name  Max 35 chars
    Building Number   Max 35 chars
    Street            Max 35 chars
    Town              Max 35 chars
    State/County      Max 35 chars (Optional)
    Postcode/Zipcode  Min  6 chars Max 9 chars (some countries use non numeric <a href="http://www.barnesandnoble.com/help/cds2.asp?PID=8134">codes</a>)
    Country           Max 70 chars (<a href="http://en.wikipedia.org/wiki/ISO_3166-1">ISO 3166</a>)

 Email          Min 7 Chars, Max 255 chars  A <a href="http://stackoverflow.com/questions/3968500/regex-to-validate-a-message-id-as-per-rfc2822">full</a> <a href="http://programmers.stackexchange.com/questions/78353/how-far-should-one-take-e-mail-address-validation?newreg=b3ec09a231f94325bebac75c6ef86ad8">validated</a> <a href="http://en.wikipedia.org/wiki/Email_address">email address</a>  

 Phone Number   Max 15 chars (no spaces) <a href="http://en.wikipedia.org/wiki/E.164">ITU E.164</a></pre>
<p>Setting sensible maximum sizes improves data quality by minimising copy/paste errors, if First_Name accepts 2000 characters then sooner or later somebody will paste the entire contents of an HTML email into that field.</p>
<p>Some of the recommendations above are somewhat larger than real data samples might suggest is necessary but they provide space to accomodate possible future changes e.g. the formation of a new country with a very long name.</p>
<p>Splitting address into several fields will simplify the design of automated letters &amp; mail merge.</p>
<p>Use <a href="http://www.joelonsoftware.com/articles/Unicode.html">unicode</a>, other text encoding schemes will not prevent users from entering carets or umlauts, they just make displaying the text difficult.</p>
<p>The 'Display name' can  default to a concatenation of Title+ First + Last name, display names are often used for unofficial 'known as' names , e.g.  William Helkathhazzurim is known to everyone as Bill Helka.</p>
<p class="quote"><i>“I'd call it a new version of voodoo economics, but I'm afraid that would give witch doctors a bad name” - Geraldine A. Ferraro</i></p>
<p><b>Related:</b></p>
<p><a href="http://webarchive.nationalarchives.gov.uk/+/http://www.cabinetoffice.gov.uk/media/254290/GDS%20Catalogue%20Vol%202.pdf">UK Data Type Standard</a>(pdf) - e-Government Interoperability Framework (e-GIF) <br>
BS7666 - The British standard for the representation of address information<br>
<a href="http://tools.ietf.org/html/rfc3696">IETF RFC 3696</a> - Checking email addresses<br>
<a href="http://www.ietf.org/rfc/rfc2822.txt">IETF RFC 2822</a> - Data standard for email addresses<br>
ISO/IEC 5218 - Gender codes (additions  are not limited to those in the standard)<!-- #BeginLibraryItem "/Library/foot_sql.lbi" --></p><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-field-sizes.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

