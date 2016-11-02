---
title: Heavy-Duty Password Generator
---

<script type="text/javascript">
  window.onload = function() {
    var el1 = document.getElementById('pass');
    function click() {
      if (!window.dictionary) {
        el1.value = 'Please wait, loading word dictionary...'
        var client = new XMLHttpRequest();
        client.open('GET', 'https://rafa1231518.github.io/nfmm-addons/words.txt');
        client.onreadystatechange = function() {
          window.dictionary = client.responseText.split('\n');
          click();
        }
        client.send();
      } else {
        el1.value = window.dictionary[~~(Math.random() * window.dictionary.length)] + 
                    window.dictionary[~~(Math.random() * window.dictionary.length)] + 
                    window.dictionary[~~(Math.random() * window.dictionary.length)] + 
                    window.dictionary[~~(Math.random() * window.dictionary.length)];
      }
    }
    document.getElementById('gen').onclick = click;
  };
</script>

<input name="pass" id="pass" class="pass" tabindex="5" size="40"> <input id="gen" class="genbtn" value="Generate" tabindex="4" type="submit">

Generates a fairly safe word from at least 29,981,220,663,656,114,112,016 (416114<sup>4</sup>) possibilities.