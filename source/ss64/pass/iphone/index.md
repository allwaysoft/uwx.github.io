
    <div class="toolbar">
        <h1 id="pageTitle">Generator</h1>
        <a class="button" href="../pass.html">Help</a>
    </div>
		<form class="panel" action="index.html#" selected="true" name="f" method="post" onsubmit="password.value = b64_sha1(master.value+':'+ site.value).substr(0,8) + '1a'; document.f.password.focus(); document.f.password.select(); return false;"> 
        <h2>Input</h2>
        <fieldset>

<div class="row">
<label>Master</label>
<input name="master" type="password" autocomplete="off" autocapitalize="none">
</div>
<script type="text/javascript"><!--
document.f.master.focus()
//--></script>

<div class="row">
<label>Site name</label>
<input name="site" autocomplete="off" autocapitalize="none">
</div>
</fieldset>

<input type="submit" value="Generate">
<br><br>
<h2>Output</h2>

<fieldset>
<div class="row">
<label>Generated</label>
<input name="password">
</div>
</fieldset>
</form>

