(function(){"use strict";var e;function o(o){e(o)}function t(){var e;o("99 bottles of beer on the wall, 99 bottles of beer.");for(e=98;e>1;e--){o("Take one down and pass it around, "+e+" bottles of beer on the wall.\n");o("");o(e+" bottles of beer on the wall, "+e+" bottles of beer.\n")}o("Take one down and pass it around, 1 bottle of beer on the wall.");o("");o("1 bottle of beer on the wall, 1 bottle of beer.");o("Take one down and pass it around, no more bottles of beer on the wall.");o("");o("No more bottles of beer on the wall, no more bottles of beer.");o("Go to the store and buy some more, 99 bottles of beer on the wall.");return 0}function l(l,n){e=l;var r=0;var s;for(var f=0;f<n.length;f++){s=n[f];if(r==-1||r==256){r=0}if(s=="i"||s=="I"||s=="+"){r++}else if(s=="d"||s=="D"){r--}else if(s=="s"||s=="S"){r*=r}else if(s=="o"||s=="O"){o(r)}else if(s=="h"||s=="H"){o("Hello World.")}else if(s=="q"||s=="Q"){o(n)}else if(s=="9"){t()}else if(s=="k"||s=="K"){e=null;return}}e=null}window.fishq9plus=l})();