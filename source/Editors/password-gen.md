---
title: Heavy-Duty Password Generator
---

<script type="text/javascript">
  function choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  var phr = {
    "phrases": [
      "#stewed# #carrot# #slices# #with# #stewed# #carrot# #slices#",
      "#stewed# #carrot#",
      "#stewed# #carrot# #slices#"
    ],
    "stewed": ["", "", "Fragrant",
      "Sumptuous", "Deep-fried", "",
      "Spiced", "Creamy", "Roasted",
      "Sizzling", "Delicious", "Hot",
      "", "Flame-broiled", "", "",
      "Stuffed", "", "", "Grilled",
      "Spicy", "Decadent", "Baked", "",
      "Tepid", "Barbecued", "", "", "",
      "Toasted", "Pan-fried", "",
      "Yellowed", "Stewed", "Aged", "",
      "Salted", "", "Greenish",
      "Peeled", "Chilled", "Fermented",
      "", "Steamed", "Brown", "Dried",
      "Broiled", "", "", "Colorful",
      "Dry-roasted", "Steaming",
      "Reddish", "", "Sauteed", "",
      "Sweet and Sour", "Savory",
      "Sweet", "", "Beige", "Orange"
    ],
    "carrot": ["#yam# and #yam#", "#yam#",
      "#yam# and #yam#", "#yam#",
      "#yam#", "#yam# and #yam#"
    ],
    "yam": ["Cardamom", "Tortilla",
      "Pumpkin", "Tangerine", "Kale",
      "Sea Urchin", "Duck", "Kielbasa",
      "Rice", "Squash", "Liver", "Goat",
      "Cheese", "Lunch Meat", "Mustard",
      "Tofu", "Cheese", "Salmon",
      "Bacon", "Turmeric", "Oyster",
      "Walnut", "Polish Sausage",
      "Sausage", "Seaweed",
      "Head Cheese", "Shellfish",
      "Cheddar", "Lamb", "Clam",
      "Garlic", "Muskrat", "Turkey",
      "Mystery Meat", "Chard",
      "Pine Nut", "Abalone", "Mussel",
      "Mushroom", "Veal", "Apple",
      "Meat", "Trout", "Cod",
      "Hazelnut", "Hot Dog", "Banana",
      "Pork", "Spam", "Peanut",
      "Grapefruit", "Frankfurter",
      "Rhubarb", "Bell Pepper", "Tuna",
      "Tamarind", "Roast Beef",
      "Swordfish", "Beaver", "Ketchup",
      "Pastrami", "Watermelon",
      "Coriander", "Bass", "Rutabaga",
      "Scallop", "Lemon", "Lime", "Ham",
      "Oatmeal", "Chicken", "Carrot",
      "Grape", "Pulled Pork", "Yam",
      "Mock-Duck", "Pineapple",
      "Almond", "Meat", "Spinach"
    ],
    "slices": ["Puree", "Scramble", "",
      "Sandwich", "Flatbread", "Soup",
      "Salad", "Paste", "Drippings",
      "Bread", "Pie", "Gravy", "Balls",
      "", "Muffins", "Jam", "",
      "Fritters", "Jerky", "Scones",
      "Cake", "", "Slices", "Pizza",
      "Gravy", "Pasta", "Shish-Kebab",
      "Souffle", "Paste", "Stew",
      "Noodles", "", "Cookies", "Juice",
      "Beverage", "Sauce", "Pastry",
      "Stroganoff", "Sticks", "Powder",
      "", "Chutney", "", "", "Chunks",
      "", "Roll", "Pie", "Oil",
      "Pudding", "Drink", "Pilaf", "",
      "Smoothie", "", "Sushi", "Burger",
      "Tarts", "Milkshake", "Fondue",
      "Tea", "Brownies", "", "Omelette"
    ],
    "with": ["with", "served with",
      "with a side of", "topped with",
      "with", "on a bed of",
      "tossed with"
    ]
  };

  function genPhrase() {
    var phrase = choose(phr.phrases);
    phrase = phrase.replace(/\#(\w+)\#/g, function(match, $1) {
      return choose(phr[$1]);
    }).replace(/\#(\w+)\#/g, function(match, $1) {
      return choose(phr[$1]);
    }).replace(/ +/g, ' ').replace(/-/g, '').trim();
    return phrase;
  }

  window.onload = function() {
    var el1 = document.getElementById('pass');
    var nw = document.getElementById('numwords');
    var join = document.getElementById('join');
    window.dictionary = {};

    function clickStronk(dictUrl) {
      if (!window.dictionary[dictUrl]) {
        el1.value = 'Please wait, loading word dictionary...'
        var client = new XMLHttpRequest();
        client.open('GET', dictUrl);
        client.onreadystatechange = function() {
          window.dictionary[dictUrl] = client.responseText.split('\n');
          clickStronk();
        }
        client.send();
      } else {
        var value = [];
        for (var i = 0, val = nw.value; i < val; i++) {
          value.push(choose(window.dictionary[dictUrl]));
        }
        el1.value = value.join(join.value);
      }
    }
    document.getElementById('gen').onclick = function() {
      clickStronk('https://rafa1231518.github.io/nfmm-addons/words.txt');
    };
    document.getElementById('gen2').onclick = function() {
      el1.value = genPhrase().replace(/ /g, join.value);
    };
    document.getElementById('gen3').onclick = function() {
      clickStronk('https://rafa1231518.github.io/nfmm-addons/words2.txt');
    };
  };
</script>

<style type="text/css">
#gen, #gen2, #gen3, #numwords {
  margin-bottom: 4px;
}
</style>

<input name="pass" id="pass" class="pass" tabindex="5" size="40"><p></p>

Amount of words: <input id="numwords" name="numwords" type="number" min="1" max="10" value="4" size="3">
Character to join the words: <input name="join" id="join" class="join" tabindex="5" size="3">
<input id="gen" class="genbtn" value="Generate strong password" tabindex="4" type="submit"> <sup>1</sup>
<input id="gen2" class="genbtn" value="Generate a fairly readable food password" tabindex="4" type="submit"> <sup>2</sup>
<input id="gen3" class="genbtn" value="Generate a strong, but readable password" tabindex="4" type="submit"> <sup>3</sup>

1: Generates a fairly safe password from somewhere around 29,981,220,663,656,114,112,016 (416114<sup>4</sup>) possibilities (≈18 bits of entropy per word).
2: Generates a dish that can be used as a relatively safe password. Consider adjusting it to your taste. This will ignore your "amount of words" setting.
3: Generates a password from a dictionary of 10,000 common words (≈13 bits of entropy per word).

Remember to wipe your browser's saved field data after generating!