---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_docs.lbi" --><!-- #EndLibraryItem --><h1>Command line password generator</h1>
<p>This page contains scripts that may be used to create 20 digit passwords on the command line. These are compatible with the online SS64 <a href="index.html">password generator</a> and will produce the same passwords.
</p><pre># Bash version
strongpw() {
    read -rs -p 'Encryption key: ' key
    echo '' # line break
    echo -n "$key:$1" | sha256sum | perl -ne "s/([0-9a-f]{2})/print chr hex \$1/gie" | base64 | tr +/ Ea | cut -b 1-20
}


# OS X bash version
strongpw() {
    read -rs -p 'Encryption key: ' key
    echo '' # line break
    echo -n "$key:$1" | shasum -a 256 | perl -ne "s/([0-9a-f]{2})/print chr hex \$1/gie" | base64 | tr +/ Ea | cut -b 1-20
}</pre>
<p> Written by Benoit Mortgat  who has also kindly provided a <a href="strongpw.zip">zip file</a> containing both a <b>bash</b> module and a <b>PowerShell</b> module. These can be loaded as part of your startup profile making them easily available.<br>
Also <a href="https://github.com/salsifis/ss64-password-generators">available on GitHub</a>, pull requests are welcome.</p>
<p><b>Examples:</b></p>
<p><span class="code">$ strongpw paypal<br>
Encryption key:<br>
5h8RDZxO6xyXbaLrxKE6</span><br>
</p>
<h2>Security</h2>
<p>Command-line scripts can be an aid to cracking passwords. If you enter a password into a website which saves the password as <a href="http://plaintextoffenders.com/">plain text</a> (no password hashing) and if that website is subsequently hacked, the attacker would have one of your passwords. The attacker could then run a  brute force or dictionary attack through the same hash algorithm until they find a match with the first password, the attacker would then have your master password.</p>
<p>The way to protect yourself against this type of attack is to ensure that your Master Password is long enough (with enough <a href="../docs/security.html">entropy</a>) that such an  attack would  take an impractical length of time to complete.</p>
<p>Related:</p>
<p><a href="http://security.stackexchange.com/questions/44368/are-the-ss64-com-password-generators-a-good-approach">Are the SS64.com password generators a good approach</a>? - StackExchange<br>
<a href="../docs/security.html">Password security and a comparison of Password Generators</a><br>
<a href="http://www.passwordstore.org/">PasswordStore.org</a> - Unix password manager (command line)</p>
<p class="quote">“Excellence is not an act but a habit. The things you do the most are the things you will do the best” ~ Marva Collins</p><!-- #BeginLibraryItem "/Library/foot_menu.lbi" --><hr>
<div id="bl" class="footer"><a href="command-line.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

