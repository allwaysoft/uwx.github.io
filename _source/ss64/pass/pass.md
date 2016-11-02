
<!-- Begin navigation -->

<!--  End navigation -->
<h1>SS64 Password Generator</h1>
<form name="m" id="m">
<div id="mp">
<p>Master password<br>
<input name="main" id="main" class="masterbox" value="" autocomplete="off" autocapitalize="none" onblur="setvals();" onkeyup="copyTo(this, 'maintext');" type="password" tabindex="1">
<input name="maintext" id="maintext" class="masterbox" value="" autocomplete="off" autocapitalize="none" onblur="setvals();" onkeyup="copyTo(this, 'main');" style="display: none;" tabindex="2">
<input value="Generate" class="genbtn" onclick="setvals();" type="button"> <input name="reveal" onclick="revealPassword(this.checked);" type="checkbox" id="show"> 
<label id="showlbl" for="show">show password</label></p></div>
</form><form method="post">
<p><script type="text/javascript">
for (var i = 0; i < sites.length; i++) {
  document.write("<label><a href="http://ss64.com/pass/%5C%22%22" + sites[i].url + "\">" + sites[i].displayName + "</a></label>");
  document.writeln(" <input name=\"site\" class=\"sitebox\" value=\"" + sites[i].seed + "\" readonly=\"\">");
  document.writeln("<input name=\"password\" id=\"" + sites[i].seed + "\" class=\"pass\" readonly=\"\" onclick=\"highlight(this);\" tabindex=\"6\" value=\"\"><br>");
}
</script></p>
</form><br>
<!--custom-->
<form method="post" name="ot" class="callout" id="ot" onsubmit="setvals();otpassword.value = b64_sha1(customRoot.value+':'+ CustomSite.value).substr(0,8) + '1a'; if(customRoot.value.length==0 || customRoot.value==null){otpassword.value = ''}; document.ot.otpassword.focus(); document.ot.otpassword.select(); return false;">
<input name="passwd" id="customRoot" type="hidden">
<label>Custom: </label> 
<input name="CustomSite" class="sitebox" autocapitalize="none" onkeyup="otpassword.value = '';" tabindex="3">
<input name="otpassword" id="otpass" class="pass" readonly="" onclick="highlight(this);" tabindex="5">
&nbsp;&nbsp;
<input type="submit" class="genbtn" value="Generate" tabindex="4">
<input type="button" class="genbtn" value="Clear All" onclick="window.location.href=window.location.href">
</form>
<a id="help"></a><h1>Explanation</h1>
<p>Using the same password for multiple email, shopping and social networking websites is risky, it means that a <a href="http://www.privacyrights.org/data-breach">security breach</a> at  one website will compromise <a href="http://www.readwriteweb.com/archives/monstercom_loses_user_data_aga.php">all</a> your accounts, possibly even leading to <a href="http://en.wikipedia.org/wiki/Identity_theft">identity theft</a>.</p>
<p>So, the idea is that you memorise just one, reasonably long/<a href="http://howsecureismypassword.net/">secure</a> master password and use that to  generate a set of  non-dictionary passwords. Copy and paste the new password(s) into the website and set your web browser to remember them.</p>
<p>All the websites get different passwords, but you only have to remember one!</p>
<p>Using a different PC? you can re-generate the same set of passwords at any time by returning to this page and entering the same master password. </p>
<ul>
<li>For any website that's not on the list, just type the name into the 'Custom' box (the last one in the list) and press Generate. </li>
<li>All the generated passwords end in "1a", to guarantee they contain at least one letter and one number.</li>
<li>Using UPPER or lower case will produce different passwords, when using this for the first time it’s a good idea to use the 'Show Password' tickbox to check for any typos.</li>
<li>Most websites  will send a password reset via email, so set the password for that email account to something completely different, just in case you ever forget the master password!</li>
<li>To navigate this page using the keyboard, use the TAB and RETURN keys.</li>
<li><b>NEW</b>… there is now an <a href="index.html">extra strong version</a> of this page that generates <a href="../docs/security.html">20</a> character passwords.</li>
</ul>
<p>This password generator works using Javascript, entirely within the page, no data is ever passed back to my server. Notwithstanding this, it is a very good idea to save your own copy of this page. <a href="passwords.zip">Zip file here</a>. Keeping your own copy ensures that the password generator will still be available to you even if this website goes off-line. You can also <i>View-Source</i> and see exactly how the javascript works, copy it to a USB stick, email it to yourself, even upload it to your own website (it’s open source.) There are no dependent files, just save as a single HTML file.</p>

<p>Credits</p>
<p class="tagline">This page is based on (and is compatible with) <a href="http://angel.net/%7Enic/passwd.sha1.1a.html">Nic Wolff’s password generator</a> it uses the  same JavaScript implementation of the Secure <a href="http://en.wikipedia.org/wiki/Cryptographic_hash_function">Hash Algorithm</a>, (SHA-1, ©Paul Johnston, distributed under the <a href="http://en.wikipedia.org/wiki/BSD_License">BSD License</a>.)
&nbsp;&nbsp;Add <a href="iphone/index.html">the iPhone version</a> to your home screen (by Karim Cassam Chenaï@<a href="http://www.weedo.fr/">weedo</a>.)</p>
<p class="tagline"><a href="../index.html">Simon Sheppard</a>, Sept 2016</p>
