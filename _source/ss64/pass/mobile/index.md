
    <div class="container">
        <form method="post" class="form-generator" name="ot" id="ot" onsubmit="setvals();otpassword.value = b64_sha256(customRoot.value+':'+ CustomSite.value).substr(0,20); if(customRoot.value.length==0 || customRoot.value==null){otpassword.value = ''}; document.ot.otpassword.focus(); return false;">
            <h3 class="form-generator-heading">Password Generator</h3>
            <input type="password" id="main" class="form-control" placeholder="Master password" autocapitalize="none" autofocus="">
            <label class="checkbox">
                <input type="checkbox" value="show-password" onclick="toggleType();">Show password
            </label>
            <script type="text/javascript">
            for(var i = 0; i < sites.length; i++) {
                document.writeln("<input type=\"text\" name=\"site\" class=\"form-control site\" value=\"" + sites[i].seed + "\" readonly=\"readonly\">");
                document.writeln("<input type=\"text\" name=\"password\" id=\"" + sites[i].seed + "\" class=\"form-control password\" readonly=\"readonly\" value=\"\">");
            }
            </script>
            <input id="customRoot" type="hidden" value="">
            <input type="text" class="form-control site" name="CustomSite" onkeyup="otpassword.value = '';" placeholder="Custom" autocapitalize="none">
            <input type="text" class="form-control password" name="otpassword" id="otpass" placeholder="" readonly="readonly">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Generate</button>
            <button class="btn btn-lg btn-danger btn-block" type="button" onclick="window.location.href=window.location.href">Clear</button>
        </form>
    </div>

