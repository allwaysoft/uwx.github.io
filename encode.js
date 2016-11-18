'use strict';
const fs= require('fs');

var a = `2Xtreme - SCUS-94508.html
3, 2, 1... Smurf! My First Racing Game - SLES-03120.html
3D Baseball - SLUS-00066.html
3D Bouncing Ball Puzzle - SLPS-00000.html
3D Kakutou Tsukuru - SLPS-01434.html
3D Ko II - SLPS-00000.html
3D Lemmings - SCES-00009.html
3D Lemmings - SCUS-94601.html
3Xtreme - SCUS-94231.html
4X4 World Trophy - SLES-00000.html
007 - Die Welt Ist Nicht Genug (German)SLES-03136.html
007 - El Mundo Nunca Es Suficiente (Spanish) - SLES-03137.html
007 - Racing - SLUS-01300.html
007 - Racing (German) - SLES-03357.html
007 - The World IS Not Enought - SLUS-00000.html
007 - The World IS Not Enought (Uk) - SLES-03134.html
007 - Tomorrow Never Dies - SLES-01324.html
007 - Tomorrow Never Dies - SLPS-00000.html
007 - Tomorrow Never Dies - SLUS-00975.html
007 - Tomorrow Never Dies (German) - SLES-02376.html
007 - Tomorrow Never Dies (Uk) - SLES-01324.html
20 Seiki Striker Retsuden - SLPS-02348.html
40 Winks  - Con Ruff & Tumble (Spanish) - SLES-01941.html
40 Winks - Conquer Your Dreams (Dutch) - SLES-01937.html
40 Winks - Conquer Your Dreams (Uk) - SLES-01937.html
40 Winks - SLUS-00000.html
70's Robot Anime Geppy-X - SLPS-00000.html
100 Manyen Quiz Hunter - SLPS-01730.html
360 Racing Competition - SLUS-00000.html
360 Three Sixty - SLES-02089.html
10101 Will The Starship - SLPS-01054.html
A IV Evolution Global  A-Ressha de Ikou 4 Global - SLPS-00125 - SLPS-91019.html
A IV Evolution Global - SLES-00290.html
A Ressha de Ikou Z - Mezase! tairiku oudan - SLPS-02050.html
A Sangre Fria (Spanish) - SCES-02153.html
A2 Racer Goes Usa - Usa Racer - SLES-00000.html
A5 - A Ressha de Ikou 5 - SLPS-01120.html
Abalaburn - SLPS-00000.html
Abe a Go Go - SLPS-01118.html
Ace Combat - SLES-00000.html
Ace Combat - SLPS-000061.html
Ace Combat 2 - SLPS-00830.html
Ace Combat 2 - SLUS-00404.html
Ace Combat 2 (German) - SCES-00902.html
Ace Combat 2 (Uk) - SCES-00699.html
Ace Combat 3 - Electrosphere - SLPS-02021 - SLPS-02020.html
Ace Combat 3 - Electrosphere - SLUS-00972.html
Ace Combat 3 - Electrosphere (Playstation the Best) - SLPS-91214 - SLPS-91215.html
Ace Combat 3 - SCES-02066.html
Aces Of The Air - SLUS-001470.html
Acid - SLPS-02119.html
Aconcagua - SCPS-10131.html
Action Bass - SLUS-01248.html
Action Man Destruction x - SLES-00000.html
Action Man Mission Extreme - SLES-01761.html
Action ManOperation Extreme - SLUS-00000.html
Activision Classics - SLUS-00777.html
Actua Golf 2 - SLES-00000.html
Actua Golf 3 - SLES-01042.html
Actua Icehockey - SLPS-00000.html
Actua Pool - SLES-01647.html
Actua Soccer - Club Edition - SLES-00190.html
Actua Soccer 3 - SLES-01645.html
Ad Lib Ouji - Prince & Unpleasant Friends - SLPS-03510.html
Adiboo & Paziral's Secret - SLES-04108.html
Adidas Power Soccer - SCUS-94502.html
Adidas Power Soccer - SLES-00189.html
Advan Racing - SLPS-01689.html
Advanced V.G. - SLPS-00208.html
Advanced V.G. 2 - SLPS-00000.html
Adventure Game (Net Yaroze) - SLES-00000.html
Adventure Of Monkey God - SLPS-00000.html
Afraid Gear - SLPS-00995.html
Afraid Gear Another - SLPM-86834.html
Agent Armstrong - SLES-00474.html
Agile Warrior - SLES-00124.html
Agile Warrior F-Iiix - SLUS-00023.html
Air Combat - SCES-00007.html
Air Combat - SLUS-00001.html
Air Grave - SLPS-00000.html
Air Hockey - SLUS-01467.html
Air Land Battle - SCPS-91008.html
Air Management '96 - SLPS-00269.html
Air Race - SLES-00762.html
Air Race Championship - SLPS-00000.html
Airgrave - SLPS-00559.html
Aironauts - SLES-02137.html
Aitakute Your Smiles In My Heart - SLPM-86257.html
Aiv Evolution Global - SCES-00290.html
Aizouban Houshinengi - SLPM-86209.html
Akagawa Jirou - Yasoukyoku - SLPS-01462 - SLPS-91151.html
Akagi Topaiten - SLPS-02995.html
Akuji - The Heartless - SLES-01298.html
Akuji - The Heartless - SLUS-00715.html
Akumajou Dracula X Gekka no Yasoukyoku(Dracula x - Nocturne in the Moonlight) - SLPM-86023.html
Alabama - Pop de Cute na Shinri Test - SLPS-02961.html
Alex Ferguson Player Manager 2001 - SLES-03150.html
Alexi Lalas International Soccer - SLUS-00872.html
Alfred Chicken - SLES-03817.html
Alien - SLPS-00000.html
Alien Resurrection - SLES-00000.html
Alien Resurrection - SLUS-00633.html
Alien Trilogy - SLES-00101.html
Alien Trilogy - SLPS-00332.html
Alien Trilogy - SLUS-00007.html
Alien Trilogy (German) - SLES-00246.html
All Star Baseball '97 - Featuring Frank Thomas - SLUS-00392.html
All Star Racing - SLES-03740.html
All Star Racing 2 - SLES-00000.html
Allied General - SLES-00417.html
Allied General - SLUS-00303.html
All-Star Mahjong - Kareinaru Shobushi Kara no Chosen - SLPS-00993.html
All-Star Tennis '99 - SLES-01433.html
Alnam No Kiba - Fang Of Alnam - SLPS-00173.html
Alnam No Tsubasa - Wing Of Alnam - SLPS-01187.html
Alone In The Dark - The New Nightmare - SLUS 01201.html
Alone In The Dark - The New Nightmare (German) - SLES-02803 - SLES-12803.html
Alone In The Dark - The New Nightmare (Spanish) - SLES-02804 - SLES-12804.html
Alone In The Dark - The New Nightmare (Uk) - SLES 0280112801.html
Alone In The Dark 2 - SLES-00037.html
Alone In The Dark 2 - SLPS-00000.html
Alone In The Dark 2 - SLUS-00239.html
Alundra - SCPS-10035.html
Alundra - SLUS-00553.html
Alundra (French) - SLES-01198.html
Alundra (German) - SLES-01256.html
Alundra (Spanish) - SLES-01258.html
Alundra 2 - Mashinka No Nazo - SCPS 10115.html
Alundra 2 - SLUS-01017.html
Alundra 2 (German) - SLES-02602.html
Alundra 2 (Uk) - SLES-02600.html
Alundra Uk - SLES-01135.html
America Oudan Ultra Quiz - SLPS-00241 - SLPS-01802.html
American Pool - SLUS-01488.html
Anami 2000 - SLPS-00000.html
Ancient Roman - SLPS-01108.html
Andretti Racing - SLUS-00264.html
Angel BladeNeo Tokyo Guardians - SLPS-00894.html
Angel Eyes - SLPS-01168.html
Angel Graffiti - Anathe no profile - SLPS-00163.html
Angelique Special - SLPS-00320.html
Angelique Special 2 - SLPS-00805.html
Angelique Tenkuu no Requiem - SLPM-86165.html
Angolmois 99 [Superlite 1500 series] - SLPM-86278.html
Animal Snap - Rescue them 2 by 2 - SLES-04036.html
Animetic Story - Card Captor Sakura - SLPS-01830.html
Animorphs Shattered Dreams  - SLUS-01010.html
Anna Kournikova's Smash Court Tennis - SCES-01833.html
Anokodokonoko - SLPS-01522.html
Another Memories - SLPS-01431.html
Another Mind - SLPS-01655.html
Ao No Rokugou - Antarctica - SLPS-02940.html
Ao Zora To Nakama Tachi - Yume No Bouken - SLPS-03564.html
Ape Escape - SCUS-94423.html
Ape Escape (French) - SCES-02028.html
Ape Escape (German) - SCES-02029.html
Ape Escape (Spanish) - SCES-02031.html
Ape Escape (Uk) - SLES-01564.html
Apocalypse - SLUS-00373.html
Apocalypse (French) - SLES-00834.html
Apocalypse (German) - SLES-00835.html
Apocalypse (Uk) - SLES-00460.html
Aqua Gt - SLES-02930.html
Aqua Paradise Boku no Suizokukan - SLPS-03095.html
Aquarian AgeTokyo Wars - SLPS-02731.html
Arc The Lad - SCPS-10008.html
Arc The Lad - SLUS-00000.html
Arc The Lad 2 - SLPS-00000.html
Arc The Lad 2 - SLUS-01252.html
Arc The Lad 3 - SCPS-00000.html
Arc The Lad 3 - SLUS-01253 - SLUS-01254.html
Arcade Hits - Crazy Climber [Major Wave Series] - SLPM-87067.html
Arcade Hits - Frisky Tom [Major Wave Series] - SLPM-87118.html
Arcade Party Pak - SLUS-00952.html
Arcade's Greatest Hits - Atari Collection - SLUS-00399.html
Arcade's Greatest Hits - Atari Collection 2 - SLES-00712.html
Arcade's Greatest Hits - Atari Collection 2 - SLUS-00449.html
Arcade's Greatest Hits - Midway Collection 2 - SLUS-00450.html
Area 51 - SLES-00578.html
Area 51 - SLUS-00164.html
Arkanoid R 2000 - SLPM-86262.html
Arkanoid Returns - SLPS-00948.html
Armed Fighter - SLPS-01598.html
Armored Core - Master Of Arena - SLPS-01855.html
Armored Core - Masters Of The Arena - SLUS-01030 - SLUS-00684.html
Armored Core - Project Phantasma - SLPS-00000.html
Armored Core - Project Phantasma - SLUS-00670.html
Armored Core - SCES-00842.html
Armored Core - SCPS-45060.html
Armored Core - SCUS-94182.html
Armorines - Project S.W.A.R.M. - SLUS-00000.html
Armorines - Project S.W.A.R.M. (German) - SLES-02726.html
Armorines - Project S.W.A.R.M. (Uk) - SLES-02617.html
Army Men - Air Attack - SLES-02498.html
Army Men - Air Attack - SLUS-02498.html
Army Men - Air Attack 2 - SLUS-01132.html
Army Men - Air Attack 2 (German) - SLES-03228.html
Army Men - Green Rogue - slus-00000.html
Army Men - Land, Sea & Air - SLES-03231.html
Army Men - Lock'n'Loaded - SLES-03414.html
Army Men - Omega Soldier - SLES-03431.html
Army Men - Operation Meltdown - SLES-02855.html
Army Men - Sarge's Heroes  - SLUS-00914.html
Army Men - Sarge's Heroes (German) - SLES-02628.html
Army Men - Sarge's Heroes (Spanish) - SLES-02629.html
Army Men - Sarge's Heroes (Uk) - SLES-02626.html
Army Men - Sarge's Heroes 2 - SLES-03316.html
Army Men - Sarge's Heroes 2 - SLUS-01202.html
Army Men - Team Assault - SLES-03633.html
Army Men - World War - SLUS-01079.html
Army Men - World War - Team Assault - SLUS-01435.html
Army Men 3D - SLES-02378.html
Army Men 3D - SLUS-00491.html
Army Men Air Attack (English, italian & Spanish) - SLES-02620.html
Army Men World WarLand Sea And Air - SLUS-00000.html
Art Camion - SLPS-00000.html
Art Camion Geijutsuden - SLPS-02405.html
Art Camion Sugorokuden - SLPS-02710.html
Art Truck Battle - SLPS-01441.html
Art Truck Battle 2 - SLPS-02465.html
Arthur Ready To Race - SLUS-00000.html
Ascii Demo Disk - SLUS-00000.html
Assault - SLES-01244.html
Assault Retribution - SLUS-00713.html
Assault Rigs - SCUS-94405.html
Assault Rigs - SLES-00093.html
Assault Suits Valken 2 - SLPS-00000.html
Asterix - SLES-01416.html
Asterix - SLUS-00000.html
Asterix & Obelix - Contra Cesar - SLES-02473.html
Asterix (ALL Your Cartoon Favourites Version) (G)(I)(S) - SLES-01748.html
Asterix And Obelix Take On Caesar - SLES-01416.html
Asterix Mega Madness - SLES-03324.html
Asteroids - SLUS-00773.html
Asteroids (German) - SLES-01469.html
Astronoka - SLPM-86088-9.html
Asuka 120% Burning Fest Excellent - SLPS-00849.html
Asuka 120% Burning Fest Final - SLPS-02074.html
Asuka 120% Burning Fest Special - SLPS-00231.html
Asuncia - SLPS-01097.html
Atelier Elie - SLPS-01751.html
Atelier Elie [Plastation the Best] - SLPS-91180.html
Atelier Marie - SLPS-00856.html
Atelier Marie Plus - SLPS-01418.html
Athena - Awakening From Ordinary Life - SLPM-86185.html
Athena no Kateiban - Family Games - SLPS-00263.html
Atlanta Olympic Games - SLPS-00000.html
Atlantis - Das Sagenhafte Abenteuer (German) - SLES-01603.html
A-Train - SLES-00000.html
A-Train - SLUS-00003.html
Attack Of The Saucerman - SLES-01718.html
Atv Mania - SLUS-01545.html
Atv Quad Power Racing - SLUS-01137.html
ATV Racers - SLES-04059.html
ATV Racers - SLUS-01572.html
Aubirdforce [Limited Edition] - SLPS-00533.html
Aubirdforce After - SLPS-01606.html
Aura Battler Dunbine - SLPS-02390.html
Auto Destruct - SLES-00909.html
Auto Destruct - SLUS-00522.html
Autobahn Raser 2 (German) - SLES-02341.html
Ayrton Senna Kart Duel - SLPS-00000.html
Ayrton Senna Kart Duel 2 - SLPS-01072.html
Ayrton Senna Kart Duel Special - SLPS-01659.html
Azito - SLPS-00683.html
Azito 2 - SLPS-01526.html
Azito 3 - SLPS-02496.html
Aztecs (F-G) - SLES-03052.html
Azumanga Dontara Daiou - SLPS-03424.html
Azure Dreams - SLES-01219.html
Azure Dreams - SLPS-00000.html
Azure Dreams - SLUS-00614.html
B.L.U.E. Legend Of Water - SLPS-01459.html
Baby Felix Tennis - SLES-03991.html
Backgainer - Yomigaeru Yuusha-tachi Hishou-hen Uragiri no Senjou - SLPS-01446.html
Backgainer - Yomigaeru Yuusha-tachi Kakusei-hen Gainer Tensei - SLPS-01217.html
Backstreet Billiards - SLUS-00659.html
Bakumatsu Roman - The Last Blade - SLPM-86118.html
Bakuretsu Akindo - SLPS-00236.html
Bakuretsu Hunter - Sorezore no Omoi - Nowaan Chatte - SLPS-00718.html
Bakuretsu Hunter Mahjong Special - SLPS-00541.html
Bakuryu - SLPS-02429.html
Bakushou!! Oru Yoshimoto Quiz Okettei Ikusa DX - SLPS-00158.html
Bakusou Dekotora - SLPS-00000.html
Bakusou Dekotora Densetsu 2 - Otoko Jinsei Yume Ichiro - SLPS-02465.html
Bakusou Kyoudai Let's & Go Eternal Wings - SLPS-01489.html
Bakuten Shoot Beyblade 2002 - Beybattle Tournament 2 - SLPM-87130.html
Baldur's Gate - SLUS-01037.html
Ball Breakers - SLUS-00000.html
BallBlazer Champions - SLUS-00068.html
Ballerburg Castle Chaos - SLES-04017.html
Ballistic - SLUS-00966.html
Barbie Explorer - SLUS-01361.html
Barbie Explorer(German) - SLES-3694.html
Barbie Explorer(Spanish) - SLES-3696.html
Barbie Race And Ride - SLUS-00981.html
Barbie Race And Ride (German) - SLES-02367.html
Barbie Super Sports - SLUS-00946.html
Bardysh Kromeford No Juunin - SLPS-02187.html
Baroque [Limited Edition] - SLPM-86328.html
Bases Loaded 96 - SLUS-00086.html
Bass Landing - SLPS-00000.html
Bass Rise - SLUS-00905.html
Bastard!! - SLPS-00542.html
Batman & Robin - SLES-00102.html
Batman & Robin - SLPS-00000.html
Batman & Robin - SLUS-00000.html
Batman Beyond - Return Of The Joker  - SLUS-01207.html
Batman Forever - The Arcade Game - SLUS-00387.html
Batman Gotham City Racer - SLES-02874.html
Batman Gotham City Racer - SLUS-00000.html
Batman Of The Future - Return Of The Joker - SLES-02902.html
Battle Arena Nitoshinden - SLPS-00485.html
Battle Arena Toshinden - SCES-00002.html
Battle Arena Toshinden - SCUS-94003.html
Battle Arena Toshinden - SLPS-00000.html
Battle Arena Toshinden 2 - SCES-00232.html
Battle Arena Toshinden 2 - SCUS-00232.html
Battle Arena Toshinden 2 - SLPS-00200.html
Battle Arena Toshinden 3 - SCES-00700.html
Battle Arena Toshinden 3 - SLPS-00000.html
Battle Arena Toshinden 3 - SLUS-00000.html
Battle Arena Toshinden 4 - SLES-02493.html
Battle Arena Toshinden Subaru - SLPS-02022.html
Battle Athletess Daiundokai GTO - SLPS-01548.html
Battle Athletess Daiundoukai Alternative - SLPS-01133.html
Battle Formation - SLPS-00968.html
Battle Hunter - SLUS-01335.html
Battle Konchuuden - SLPS-01779.html
Battle Round Usa - SLPS-00000.html
Battle Round Usa - SLUS-00000.html
Battle Sabers - SLPS-00000.html
BattleSport - SLUS-00389.html
Battlestations - SLES-00662.html
BattleStations - SLUS-00000.html
BattleTanx Global Assault - SLES-02773.html
BattleTanx Global Assault (English, Italian & Spanish) - SLES-02774.html
BattleTanx-Global Assault - SLUS-01044.html
Bealpharet - SCPS-10138.html
Beast Wars - Transformers - SLES-00709.html
Beast Wars - Transformers - SLPS-01076.html
Beast Wars - Transformers - SLUS-00508.html
Beast Wars - Transformers - Transmetal - SLUS-01160.html
Beat Planet Music - SCPS-18013.html
Beatmania - SLPS-00000.html
Beatmania Append 4th Mix - SLPS-00000.html
Beatmania Append Gottamix - SLPM-86229.html
Beatmania European Edition - SLES-02096.html
Bedlam - SLES-00334.html
Beltlogger 9 - SLPS-00000.html
Beretta 9 - SLPS-00000.html
Beyblade - SLUS-01489.html
Beyond the Beyond - SCPS-10014.html
Beyond The Beyond - SCUS-94702.html
Big Air - SLES-01513.html
Big Air - SLPS-00000.html
Big Air - SLUS-00645.html
Big Bass World Championship - SLUS-00228.html
Big Challenge Golf - Tokyo Yomiuri Country Club Hen - SLPS-00459.html
Big Strike Bowling - SLUS-01478.html
Billards - SLUS-01289.html
Bio Freaks - SLUS-00502.html
Biohazard & Director's Cut - SLPS-00222 - SLPS-00998.html
Biohazard 2 & Dual Shock  - SLPS-01222 - SLPS-01223 - SLPS-01511 - SLPS-01512.html
Biohazard 3 Last Escape - SLPS-02300.html
Biohazard Gun Survivor - SLPS-02553.html
Bishi Bashi Special - SLES-02537.html
Bishi Bashi Special 2 - SLPM-86267.html
Bishi Bashi Special 3 - Step Champ - SLPM-86539.html
Bishoujo Senshi Sailor Moon Super S - SLPS-00260.html
Black Bass With Blue Marlin - SLUS-00648.html
Black Dawn - SLES-00407.html
Black Dawn - SLUS-00321.html
Black Jack Vs Bunny Girls - SLPS-01983.html
Black Matrix 00 (Limited Edition) - SLPS-03571.html
Black Matrix Cross - SLPS-02962.html
Blackjack Vs Matsua Jun - SLPS-00000.html
Blade - SLUS-00000.html
Blade (German) - SLES-03215.html
Blade (uk) - SLES-03213.html
Blade Arts - SLPS-86602.html
Blade Of The Darkness - SLPS-00000.html
Blademaker - Arms Shop - SLPS-01795.html
Blam! Machinehead (Germany) - SLES-00351.html
Blam! Machinehead (UK) - SLES-00349.html
Blast Chamber - SLES-00476.html
Blast Chamber - SLUS-00219.html
Blast Lacrosse - SLUS-01380.html
Blast Radius - SLES-01169.html
Blast Radius - SLUS-00000.html
Blaster Master-Blasting Again - SLES-02273.html
Blaster Master-Blasting Again - SLUS-01031.html
Blasto - ScES-01224.html
Blasto - SCUS-94412.html
Blaze & Blade - Busters - SLPS-01576.html
Blaze & Blade - Eternal Quest - SLES-00845.html
Blaze & Blade Busters 2 - SLPM-00000.html
Block Buster - SLES-04067.html
Block Kuzushi - Deden no Gyakushuu - SLPS-00353.html
Block Kuzushi - Kowashite Help! - SLPS-003042.html
Block Kuzushi 2 - SLPS-02578.html
Block Wars - SLPS-03219.html
Blockids - SLUS-01946.html
Blood Factory - SLPS-00000.html
Blood Lines - SLUS-00000.html
Blood Omen - Legacy Of Kain - SLUS-00027.html
Blood Omen - Legacy of Kain (French) - SLES-00522.html
Blood Omen - Legacy of Kain (German) - SLES-00523.html
Bloody Bride - SLPS-00000.html
Bloody Roar - SCUS-94199.html
Bloody Roar - SLES-01010.html
Bloody Roar - SLPS-001070.html
Bloody Roar 2 - SCUS-94424.html
Bloody Roar 2 - SLES-01722.html
Bloody Roar 2 - SLPS-01842.html
Bloody Roar 2 Bringer Of The New Age Beta - SLPS-00000.html
Blue Breaker Burst Bishou o Anata to - SLPS-01469.html
Blue Breaker Burst Egao no Ashita ni - SLPS-01580.html
Blue Breaker Egao No Yakushoku - SLPS-01122.html
Blue Forest Story - Kaze No Fuuin - SLPS-00566.html
Blue Knight Saber - SLPS-00000.html
B-Movie (German) - SLES-01260.html
Board Game Topshop - SLUS-01333.html
Bob The Builder - SLUS-00000.html
Body Hazard - SLPS-00000.html
Bogey Dead 6 - SCUS-94307.html
Boku no Natsuyasumi - Summer Holiday 20th Century - SCPS-10088 - SCPS-91232.html
Boku wa Koukuu Kanseikan - SLPS-02514.html
Bokujou Monogatari - Harvest Moon - SLPS-02489.html
Bokujou Monogatari - Harvest Moon For Girls - SLPS-03087.html
Bokujyoukeieiteiki Board Game Umapoly - SLPM-86403.html
Bomberman - SLES-01893.html
Bomberman Fantasy Race - SLES-01712.html
Bomberman Fantasy Race - SLPS-01525.html
Bomberman Fantasy Race - SLUS-00823.html
Bomberman Land - SLPS-01347.html
Bomberman Party Edition - SLUS-01189.html
Bomberman Wars - SLPS-01347.html
Bomberman World - SCES-01078.html
Bomberman World - SLPS-01155.html
Bomberman World - SLUS-00680.html
Bombing Islands, The - SLUS-00000.html
Boom Bots - SLUS-00968.html
Boundary Gate - Daughter of Kingdom - SLPS-00907.html
Bounty Sword - Double Edge - SLPS-01479.html
Bounty Sword - First - SLPS-00757.html
Bowling - SLUS-01268.html
Box-Champions (German) - SLES-01451.html
Boxer's Road - SLPS-91007.html
Boxing - SLUS-01301.html
Boys Be... - SLPS-00779.html
Brahma Force - The Assault On Beltlogger 9 - SLES-00754.html
Brahma Force - The Assault On Beltlogger 9 - SLUS-00444.html
Bratz - SLUS-01508.html
Brave Fencer Musashi - SLUS-00726.html
Brave Fencer Musashiden - SLPS-1490 - SCPS-45291.html
Brave Prove - SLPS-00000.html
Brave Saga 2 - SLPS-02580.html
Brave Sword - SLPS-02889.html
Bravo Air Race - SLUS-00488.html
Break Out - SLES-02854.html
Break Out - SLUS-00000.html
Breath Of Fire 3 - SLPS-00990.html
Breath Of Fire 3 - SLUS-00422.html
Breath of Fire 3 (French) - SLES-01319.html
Breath of Fire 3 (German) - SLES-01320.html
Breath Of Fire 3 (Uk) - SLES-01304.html
Breath of Fire 4 - SLES-03552.html
Breath Of Fire 4 - SLPS-02728.html
Breath of Fire 4 - SLUS-10324.html
Breeding Stud - Bokujou de aimashou - SLPM-86012.html
Breeding Stud 2 - SLPM-86012.html
Breeding Stud 99 - SLPM-86316.html
Brian Lara Cricket - SLES-00759.html
Brigandine - Grand Edition - SLPS-02661-2.html
Brigandine - SLPS-01107.html
Brigandine - The Legend of Forsena - SLUS-00687.html
Brightis - SLPS-10105.html
Broken Helix - Die Wahrheit ber Area 51 (German) - SLES-00962.html
Broken Helix - SLUS-00000.html
Broken Sword 2 - SLUS-00000.html
Brunswick Circuit Pro Bowling - SLUS-01376.html
Brunswick Circuit Pro Bowling 2 - SLUS-00000.html
Bubble Bobble 2 - SLES-00458.html
Bubble Bobble Feat Rainbow Islands - SLES-00448.html
Bubble Bobble Feat Rainbow Islands - SLUS-00370.html
Bubblegun Kid - SLPS-01710.html
Bubsy 3D - SLES-00122.html
Bubsy 3D - SLUS-00110.html
Buggy - SLES-00000.html
Bugi - SLPM-86133.html
Bugriders - SLUS-00354.html
Bugriders The Race Of Kings - SLES-00875.html
Bugs & Taz Time Busters - SLES-02896.html
Bugs & Taz Time Busters - SLUS-01144.html
Bugs Bunny - Lost In Time - SLES-01726.html
Bugs Bunny - Lost In Time - SLUS-00838.html
Builders Block - SLUS-00000.html
Bundesliga Stars 2000 (German) - SLES-02143.html
Burger Burger - SLPS-00888.html
Burger Burger 2 - SLPM-86246.html
Burning Road - SLES-00345.html
Burning Road - SLPS-00518.html
Burning Road - SLUS-00324.html
Burstrick Wake Boarding - SLES-03338.html
Burstrick Wake Boarding - SLUS-01317.html
Bushido Blade - SCES-00899.html
Bushido Blade - SCPS-45028 - SLPM-86020.html
Bushido Blade - SCUS-94180.html
Bushido Blade 2 - SLPS-01294.html
Bushido Blade 2 - SLUS-00663.html
Bust A Move Dance & Rhythm Action - SLPS-01237.html
Bust-A-Groove - SCES-01313.html
Bust-A-Groove - SCUS-94263.html
Bust-A-Groove 2 - SLUS-01159.html
Bust-A-Move 2 - SLES-00278.html
Bust-A-Move 2 - SLUS-00233.html
Bust-A-Move 3Dx - SLES-00991.html
Bust-A-Move 4 - SLES-01389.html
Bust-A-Move 4 - SLUS-00754.html
Bust-A-Move '95 - SLUS-00725.html
Bust-A-Move '99 - SLUS-00725.html
Buster Bros Collection - SLUS-00208.html
Butage - Deiin Janai - SLPS-01169.html
C The Contra Adventure - SLUS-00000.html
C1 Circuit Racing - SLPS-00000.html
C3 Racing - SLES-01363.html
C-12 Final Resistance - SCUS-94666.html
C-12 Final Resistance - SLES-00000.html
C-12 Final Resistance (F & G) - SCES-03365.html
C-12 Final Resistance (UK) - SCES-03364.html
C-12 Resistencia Final - SCES-03366.html
Cabela's Big Game Hunter - Ultimate Challenge - SLUS-01391.html
Cabela's Ultimate Deer Hunt Open Season - SLUS-01474.html
Caesar's Palace - SLES-01008.html
Caesar's Palace - SLUS-00285.html
Caesar's Palace 2000 - SLUS-01089.html
Caesar's Palace II - SLES-01486.html
Caesar's Palace II - SLUS-00780.html
California Surfing - SLES-03921.html
Capcom Generation 1 - SLPS-01535.html
Capcom Generation 2 - SLPS-00000.html
Capcom Generation 3 - SLPS-00000.html
Capcom Generation 4 - SLPS-01701.html
Capcom Generation 5 - SLPS-01725.html
Capcom Generations 1 - SLES-02098.html
Capcom Generations 2 - SLES-12098.html
Capcom Generations 3 - SLES-22098.html
Capcom Generations 4 (Pal) - SLES-31881.html
Capcom Vs Snk Pro - SLES-03889.html
Capcom Vs Snk Pro - SLUS-01476.html
Capcom vs. SNK Millennium Fight 2000 Pro - SLPM-87053.html
Captain Commando - SLPS-01567.html
Captain Tsubasa - Aratanaru Densetsu Josho - SLPM-87060.html
Captain Tsubasa J - Get In The Tomorrow - SLPS-00310.html
Car And Driver - SLUS-00494.html
Card Captor Sakura Crow Card Magic - SLPS-02651.html
Card Games - SLUS-01379.html
Cardinal Syn - SLUS-94156.html
Cardinal Syn (Spanish) - SCES-01206.html
Cardinal Syn (Uk)ScES-01043.html
Carmageddon (German) - SLES-01961.html
Carmageddon(Uk) - SLES-01960.html
Carnage Heart - SCES-00441.html
Carnage Heart - SCUS-94604.html
Carnage Heat Ez - SLPS-00000.html
Carom Shot - SLPS-00837.html
Carom Shot 2 - SLPS-01486.html
Cart World Series - SCUS-94416.html
Casper - SLES-00045.html
Casper - SLUS-00162.html
Casper Friends around the World - SLES-03113.html
Casper Friends Around The World - SLUS-01245.html
Castlevania - Chonicles - SLUS-01384.html
Castlevania - Chronicles - SLES-03532.html
Castlevania - Symphony Of The Night - SLUS-00067.html
Castlevania Symphony Of The Night - SLES-00524.html
Castrol Honda Superbikes - SLES-01182.html
Castrol Honda Vtr - SLES-02942.html
Catch! Kimochi Sensation [Pandora Max Series Vol.4] - SLPS-02712.html
Centipede - SLES-01900.html
Centipede - SLUS-00807.html
Championship Bass - SLUS-00000.html
Championship Motocross 2001 Feat Ricky Carmichael - SLUS-01152.html
Championship Motocross Feat Ricky Carmichael - SLES-02200.html
Championship Motocross Feat Ricky Carmichael - SLUS-00790.html
Championship Surfer - SLUS-01216.html
Chaos Break - SLES-03107.html
Chaos Break - SLPM-86363.html
Chaos Control - SLPS-00168.html
Chaos Heat - SLPS-00000.html
Charumera (Zanmai Series) - SLPS-03031.html
Chase The Express - El Expreso De La Muerte (Spanish) - SCES-02816.html
Chase The Express - SLPS-00000.html
Chase The Express (German) - SCES-02814.html
Chase The Express (Uk) - SCES-02812.html
Cheesy - SLES-00053.html
Cheesy - SLPS-00000.html
Chibi-Chara Game Gingaeiyu Densetsu - SLPS-02026.html
Chicken Run - SLUS-00000.html
Chicken Run (Multi-4) - SLES-03285.html
Chiichi na Oukoku Erutoria - SLPS-02750.html
Chiisana Kyojin Microman - SLPS-0000.html
Chill - SLES-00711.html
Chippoke Ralph no Daibouken - SLPS-01853.html
Cho Aniki - Kyuukyoku Muteki Ginga Saikyou Otoko - SLPS-00183.html
Chocobo Collection - SLPS-00000.html
Chocobo Mysterious Dungeon - SLPS-01234.html
Chocobo no Fushigi na Dungeon 2 - SLPS-01771.html
Chocobo Racing - SLES-02079.html
Chocobo Racing - SLPS-01951.html
Chocobo Racing - SLUS-00814.html
Chocobo Stallion - SLPS-00000.html
Chocobo's Dungeon 2 - SLUS-00814.html
Cho-Nazo-Oh - SLPS-02123.html
Choro Q - SLPS-00000.html
Choro Q 2 - SLPS-00710.html
Choro Q 3 - SLPS-01244.html
Choro Q Jet Rainbow Wings - SLPS-00000.html
Choro Q Marine Q~Boat - SLPS-00000.html
Choro Q Wonderful - SLPS-02205.html
Chou Hatsumei Boy Kanipan Hirameki Wonderland - SLPM-86299.html
Choujin Gakuen Gowcaizer - SLPS-00527.html
Chou-Kousoku Gran Doll - SLPS-00935.html
Chou-Mahsin Eiyuuden Wataru - Another Step - SLPS-01368.html
Chousentou Kyuugi - The Ultimate Ballgame Van Borg - SLPS-01871.html
Chrono Cross - SLPS-00000.html
Chrono Cross - SLUS-01041.html
Chrono Trigger - SLPS-00000.html
Chrono Trigger - SLUS-01363.html
Cindy's Caribbean Holiday - SLES-04148.html
Circadia - SCPS-10077.html
Circuit Beat - SLPS-00000.html
Circuit Breakers - SLES-00753.html
Circuit Breakers - SLUS-00697.html
City Bravo - SLPS-00361.html
City Bravo Business Hen - SLPS-02421.html
Civilization - SLPS-00336.html
Civilization 2 - SLPS-01735.html
Civilization 2 - SLUS-00000.html
Civilization 2 (German) - SLES-01796.html
Civilization 2 (Spanish) - SLES-01798.html
Civizard - Majutsu No Keifu - SLPS-00618.html
Classic Road 2 - SLPS-02039.html
Classic Road Yuushun 2 - SLPS-01325.html
Cleopatra's Fortune - SLUS-01491.html
Click Medic - SLPS-01838.html
Clock Tower - Ghost  Head - SLPS-01290.html
Clock Tower - SLUS-00539.html
Clock Tower - The First Fear - SLPS-00917.html
Clock Tower 2 - SLPS-00657.html
Clock Tower 2 - SLUS-00695.html
Clockworks - SLPS-00387.html
Codename-Tenka - SCUS-94409.html
Cold Blood (German) - SCES-02151.html
Colin McRae - The Rally - SLPS-01938.html
Colin Mcrae Rally - SCUS-94744.html
Colin Mcrae Rally - SLES-00477 - SLES-01204.html
Colin Mcrae Rally 2.0 - SLES-02605.html
Colin McRae Rally 2.0 - SLUS-01222.html
College Slam - SLUS-00196.html
Colony Wars - Red Sun - SLUS-00866.html
Colony Wars - Red Sun (German) - SCES-02622.html
Colony Wars - Red Sun (Uk) - SLES-00000.html
Colony Wars - SLPS-00000.html
Colony Wars - SLUS-00554.html
Colony Wars - Sol Rojo - SCES-02624.html
Colony Wars - Vengeance - SLUS-00722.html
Colony Wars - Vengeance (French) - SLES-01405.html
Colony Wars - Vengeance (German) - SLES-01406.html
Colony Wars - Vengeance (Spanish) - SLES-01408.html
Colony Wars - Vengeance (Uk) - SLES-01392.html
Colony Wars (German) - SLES-00000.html
Colony Wars (Spanish) - SLES-00864.html
Colony Wars (Uk) - SLES-00860 - SLES-10860.html
Combat Choro Q - SLPS-01904.html
Command & Conquer - Alarmstufe Rot - Gegenschlag (German) - SLES-01345 - SLES-11345.html
Command & Conquer - Alarmstufe Rot (German) - SLES-01007.html
Command & Conquer - Alerte Rouge - Mission Tesla - SLES-01344 - SLES-11344.html
Command & Conquer - Alerte Rouge (French) - SLES 01006.html
Command & Conquer - Red Alert - SLUS-00431.html
Command & Conquer - Red Alert (UK) - SLES-00949.html
Command & Conquer - Retaliation (Uk) - SLES-01343.html
Command & Conquer - SLPS-00976.html
Command & Conquer - SLUS-00379 - SLUS-00410.html
Command & Conquer (French) - SLES-00531 - SLES-10531.html
Command & Conquer (UK) - SLES-00530 - SLES-10530.html
Command & Conquer- Red Alert - Retaliation - SLUS-00665 - SLUS-00667.html
Community Pom - SLPS-00817.html
Complete Onside Soccer - SLPS-01062.html
Constructor - SLES-00927.html
Contender - SCUS-94294.html
Contender 2 - SLUS-01305.html
Contra - Legacy Of War - SLES-00608.html
Contra - Legacy Of War - SLUS-00288.html
Cool Boarders - SCES-00568.html
Cool Boarders - SCUS-94356.html
Cool Boarders - SLPS-00456.html
Cool Boarders 2 - SCES-00992.html
Cool Boarders 2 - SCUS-94358.html
Cool Boarders 3 - SCES-01615.html
Cool Boarders 3 - SLPS-01698.html
Cool Boarders 3 (Greatest Hits) - SCUS-94251.html
Cool Boarders 4 - SCES-02283.html
Cool Boarders 4 - SCUS-94559.html
Cool Boarders 2001 - SCUS-94597.html
Cosmic Race - SLPS-00009.html
Cosmowarrior Rei Zero - SLPM-86484.html
Cotton 100% [Superlite 1500 Series] - SLPM-87211.html
Countdown Vampire - SLUS-00898.html
Countdown Vampires - SLPS-02504.html
Courier Crisis - SLUS-00442.html
Cover Ops Nuclear Down - SLUS-00000.html
Cowboy Bebop - SLPS-01126.html
Crash Bandicoot - SCES-00344.html
Crash Bandicoot - SCPS-10031 - SCPS-91304.html
Crash Bandicoot - SCUS-94900.html
Crash Bandicoot 2 - Cortex no Gyakushuu! - SLPS-00000.html
Crash Bandicoot 2 - Cortex Strikes Back  - SCES-00967.html
Crash Bandicoot 2 - Cortex Strikes Back - SCUS-94154.html
Crash Bandicoot 3 - Buttobi! Sekai Isshuu - SCPS-10073 - SCPS-91318.html
Crash Bandicoot 3 - Warped - SCES-01420.html
Crash Bandicoot 3 - Warped - SCUS-94244.html
Crash Bash - SCES-02834.html
Crash Bash - SCUS-94570.html
Crash Team Racing - SCES-02105.html
Crash Team Racing - SCUS-94426.html
Crazy Balloon 2000 [Superlite 1500 Series] - SLPM-86660.html
Crazy Chase 2 - SLPS-00000.html
Crazy Climber - SLPS-00000.html
Crazy Climber 2000 - SLPS-00000.html
Creature Shock - SLPS-00120.html
Creatures - SLUS-01438.html
Crime Crackers - SCPS-10003.html
Crime Crackers 2 - SCPS-10037.html
Crime Kiler - SLUS-00576.html
Crime Killer - SLES-00000.html
Crisis Beat - SLES-02793.html
Crisis beat - SLPS-01430.html
Crisis City - SLPS-00000.html
Critical Blow - SLPS-01044.html
Critical Depth - SLUS-00428.html
Criticom - SLES-00196.html
Criticom - SLUS-00046.html
Croc - Legend Of The Gobbos - SLES-00593.html
Croc - Legend Of The Gobbos - SLUS-00530.html
Croc - Pau Pau Island! - SLPS-01055.html
Croc 2 - SLES-02088.html
Croc 2 - SLUS-00634.html
Croc Adventure - SLPM-86310.html
Croket Kindan No Kinka Box - SLPM-87235.html
Cross Romance - SLPS-00713.html
Crossroad Crisis - SLUS-01342.html
Crusader No Remorse - SLES-00589.html
Crusader No Remorse - SLUS-00268.html
Crusaders of Might & Magic (Spanish) - SLES-02691.html
Crusaders Of Might And Magic - SLUS-00799.html
Crusaders Of Might And Magic (German) - SLES-02584.html
Crusaders Of Might And Magic (Uk) - SLES-02582.html
CRW - Counter Revolution War - SLPS-00220.html
Crypt Killer - SLES-00292.html
Crypt Killer - SLUS-00335.html
Ct Special Forces - SLES-03986.html
Ct Special Forces 2 Back To Hell - SLES-04123.html
Ct Special Forces 3 Bioterror - SLES-04155.html
Cubix Robots for Everyone - Race'n Robots - SLUS-01422.html
Culcept Expansion Plus - SLPM-86223.html
Culdcept Expansion - SLPM-86223.html
Cyball Zone (German) - SLES-01216.html
Cyber Daisenryaku [Superlite 1500 Series] - SLPM-86580.html
Cyber Egg - SLPS-00000.html
Cyber Org - SCPS-45381.html
Cyber Sled - SCES-00006.html
Cyber Sled - SLPS-00000.html
Cyber Sled - SLUS-00000.html
Cyber Speed - SLPS-00000.html
Cyber Speed - SLUS-00116.html
Cyberbots - Full Metal Madness - SLPS-01011.html
Cyberia - SLUS-00053.html
Cybernetic Empire - SLPS-00000.html
CyberTiger - SLUS-01004.html
D - SLES-00160.html
D - SLUS-00128 - SLUS-00173 - SLUS-00174.html
D no Shokutaku - Complete Graphics - SLPS-00133-00135.html
Daibouken Deluxe Harukanaru Umi - SLPS-00813.html
Daikoukai Jidai Gaiden - SLPS-01021.html
Daikoukai Jidai II - SLPS-00656.html
Daikoukai Jidai IV Porto Estado - SLPM-00000.html
Daisenryaku - Master's Combat - SLPS-01699.html
Daisenryaku - Player's Spirit - SLPS-00299.html
Dakar '97 - SLPS-00634.html
Damdam Stompland - SLPS-01135.html
Dance Dance Revolution  - Disney Mix - SLUS-01281.html
Dance Dance Revolution - 2nd Remix - SLPM-86252.html
Dance Dance Revolution - 2nd Remix Append Club Version Vol.1 - SLPM-86370.html
Dance Dance Revolution - 2nd Remix Append Club Version Vol.2 - SLPM-86399.html
Dance Dance Revolution - 3rd Mix - SLPM-86503.html
Dance Dance Revolution - 4th Mix - SLPM-86752.html
Dance Dance Revolution - 5th Mix - SLPM-86897.html
Dance Dance Revolution - Disney's Rave - SLPM-86667.html
Dance Dance Revolution - Konamix - SLUS-01446.html
Dance Dance Revolution - SLPM-86222.html
Dance Dance Revolution - SLUS-01280.html
Dance Dance Revolution Extra Mix - SLPM-86831.html
Dance! Dance! Dance! - SLPM-86150.html
Dancing Blade - Katteni Momotenshi - SLPM-00000.html
Dancing Blade 2 - Katten Momotenshi - SLPS-00000.html
Dancing Stage Disney Mix - SLES-03384.html
Dancing Stage Dreams Come True - SLPM-86505.html
Dancing Stage Euro Mix - SLES-01941.html
Dancing Stage Featuring True Kiss Destination - SLPM-86411.html
Dancing Stage Fever - SLES-04097.html
Dancing Stage Fusion - SLES-04093.html
Dancing Stage Party Edition - SLES-03882.html
Dangan - SLPS-02609.html
Danger Girl - SLES-03198.html
Danger Girl - SLUS-00881.html
Dare Devil Derby 3D - SLUS-00300.html
Darius Gaiden - SLPS-00574.html
Dark Hunter - Ge Youma No Mori - SLPS-00789.html
Dark Messiah - SLPS-01422.html
Darklight Conflict - SLES-00663.html
Darklight Conflict - SLUS-00000.html
Darkstalkers - The Night Warriors - SLES-00251.html
Darkstalkers - The Night Warriors - SLUS-00036.html
Darkstalkers 3 - SLES-01719.html
Darkstalkers 3 - SLUS-00745.html
Darkstone - SLES-00612.html
Darkstone - SLUS-01182.html
Dave Mirra Freestyle Bmx - SLES-02740.html
Dave Mirra Freestyle Bmx - SLUS-01026.html
Dave Mirra Freestyle Bmx Max Remix - SLES-03371.html
Dave Mirra Freestyle Bmx Max Remix - SLUS-00000.html
Davis Cup Complete Tennis - SLES-00096.html
Dead Ball Zone - SLUS-00658.html
Dead Heat Road - SLPS-00267.html
Dead In The Water - SLUS-00693.html
Dead or Alive - SCES-01259.html
Dead or Alive - SLPS-01289.html
Dead OR Alive - SLUS-00606.html
Deadly Skies - SLPS-01036.html
Debut 21 - SLPS-01229.html
Deception 3 Dark Dellusion - SLUS-01067.html
Deep Freeze - SLPS-01817.html
Deep Sea Adventure - SLPS-00000.html
Defcon 5 - SLUS-00000.html
Defcon 5 (German) - SLES-00148.html
Defcon 5 (Uk) - SLES-00081.html
Defeat Lightning - SLPS-00853.html
Dekiru Game Center - SLPS-01810.html
Delta Force Urban Warfare - SLUS-01429.html
Demolition Racer - SLES-02018.html
Demolition Racer - SLUS-00969.html
Denryu Iraira-Bo Returns - SCPS 45221.html
Densetsu no Ogre Battle - The March of the Black Queen - SLPS-00481.html
Densha Daisuki - SLPS-01753.html
Densha De Go! - SLPS-00000.html
Densha De Go! 2 - SLPM-86142.html
Densha De Go! Nagoya Railroad - SLPM-86424.html
Densha De Go!Professional - SLPM-86378.html
Derby Jockey R - SLPS-00616.html
Derby Stallion - SLPS-00777.html
Descent - SLES-00055.html
Descent - SLPS-00212.html
Descent - SLUS-00037.html
Descent 2 - SLES-00558.html
Descent Maximum - SLUS-00460.html
Deserted Island - SLPS-00602.html
Destrega - SLPS-01591.html
Destrega - SLUS-00732.html
Destrega (German) - SCES-01770.html
Destrega (Spanish) - SCES-01772.html
Destrega (Uk) - SCES-01768.html
Destruction Derby - ScUS-94302.html
Destruction Derby - SIPS-60001.html
Destruction Derby - SLES-00000.html
Destruction Derby 2 - SCUS-94350.html
Destruction Derby 2 - SIPS-60012.html
Destruction Derby 2 - SLES-00299.html
Destruction Derby Raw - SCES-02060.html
Destruction Derby Raw - SLUS-00912.html
Destructo 2 - SLES-04073.html
Detana! Twinbee Yahho Deluxe Pack - SLPS-00100.html
Devicereign - SLPS-01889.html
Devil Dice - SCES-01312.html
Devil Dice - SLUS-00672.html
Devil Summoner - Soul Hackers - SLPS-01921.html
Devilman - SLPS-02275.html
Devil's Deception - SLES-00848.html
Dewprism  - SLPS-02230.html
Dexter Laboratory - Mandark's Lab - SLES-03627.html
Dexter Laboratory - Mandark's Lab - SLUS-00000.html
Dezaemon Kids - SLPS-01503 - SLPS-01504.html
Dezaemon Plus - SLPS-00000.html
Diablo - SLES-01156.html
Diablo - SLPS-01416.html
Diablo - SLUS-00619.html
Dice De Chocobo - SLPS-02523.html
Die Hard Trilogy - SLES-00445.html
Die Hard Trilogy - SLUS-00119.html
Die Hard Trilogy 2 - Viva Las Vegas - SLUS-01015.html
Die Hard Trilogy 2 - Viva Las Vegas (German) - SLES-02748.html
Die Hard Trilogy 2 - Viva Las Vegas (Uk) - SLES-00000.html
Dig A-Dig Pukka - SCPS-10133.html
Digimon - Digital Card Batle - SLUS-01328.html
Digimon Rumble Arena - SLUS-00000.html
Digimon World - Digital Card Battle - SLPS-02506.html
Digimon World - SLPS-00000.html
Digimon World - SLUS-01032.html
Digimon World (German) - SLES-03434.html
Digimon World (Spanish) - SLES-03436.html
Digimon World (Uk) - SLES-02914.html
Digimon World 2 - SLPS-00000.html
Digimon World 2 - SLUS-00000.html
Digimon World 3 - SLUS-01436.html
Digimon World 2003 - SLES-03936.html
Digital Figure Iina - SLPS-01481.html
Digital Glider Airman - SLPS-02276.html
Dino Crisis - SLPS-02180.html
Dino Crisis - SLUS-00922.html
Dino Crisis (French) - SLES-02208.html
Dino Crisis (German) - SLES-02209.html
Dino Crisis (Italy) - SLES-02210.html
Dino Crisis (Spanish) - SLES-02211.html
Dino Crisis (Uk) - SLES-02207.html
Dino Crisis 2 - SLPM-86627.html
Dino Crisis 2 - SLUS-00000.html
Dino Crisis 2 (German) - SLES-03223.html
Dino Crisis 2 (Spanish) - SLES-03225.html
Dino Crisis 2 (Uk) - SLES-03221.html
Dinomaster Party - SLES-03989.html
Dioramos - SLPS-02797.html
Dirt Jockey Heavy Equipment Operator - SLUS-01552.html
Disney  Pixar - 1001 Pattes F (French) - SCES-01520.html
Disney  Pixar - A Bug's Life - SCUS-94288.html
Disney  Pixar - A Bug's Life - SLPM-86330.html
Disney  Pixar - A Bug's Life (German) - SCES-01521.html
Disney  Pixar - A Bug's Life (Uk) - SCES-01489.html
Disney  Pixar - Bichos - SCES-01523.html
Disney  Pixar - Buzz Lightyear Guardianes Del Espacio - SLES-03315.html
Disney  Pixar - Buzz Lightyear Of Star Command - SLUS-01192.html
Disney  Pixar - Captain Buzz Lightyear - Star Command (German) - SLES-03313.html
Disney  Pixar - Monster Academy - SLPS-03365.html
Disney  Pixar - Monsters Inc - SCUS-94635.html
Disney  Pixar - Monsters Inc (Uk) - SCES-03759.html
Disney  Pixar - Monstruos Sa - SCES-03767.html
Disney  Pixar - Toy Story 2 - Buzz l'Eclair a la rescousse! (French) - SLES-02405.html
Disney  Pixar - Toy Story 2 - Buzz Lightyear Al Rescate (Spanish) - SLES-02408.html
Disney  Pixar - Toy Story 2 - Buzz Lightyear eilt zur Hilfe!(German) - SLES-02406.html
Disney  Pixar - Toy Story 2 - Buzz Lightyear to the Rescue - SLUS-00893.html
Disney  Pixar - Toy Story 2 - Buzz Lightyear to the Rescue (UK) - SLES-02067.html
Disney  Pixar - Toy Story Racer - SLUS-00000.html
Disney  Pixar - Toy Story Racer (F-G) - SLES-03397.html
Disney  Pixar - Toy Story Racer (Spanish-Italian.Dutch) - SLES-03398.html
Disney  Pixar - Toy Story Racer(Uk) - SLES-03396.html
Disney's 101 Dalmatians II - Patches London Adventure - SLUS-01574.html
Disney's 102 Dalmatians - Puppies To The Rescue - SLUS-01152.html
Disney's 102 Dalmatians - Puppies to the Rescue (Multi-5) - SLES-03191.html
Disney's Aladdin - In Nasira's Revenge - SCUS-94569.html
Disney's Aladdin - La Venganza de Nasira (Spanish) - SCES-03008.html
Disney's Aladdin - Nasira's Revenge (Uk) - SCES-03000.html
Disney's Atlantis - Das Geheimnis Der Verlorenen Stadt (German) - SCES-03538.html
Disney's Atlantis - El Imperio Perdido (Spanish) - SCES-03541.html
Disney's Atlantis - The Lost Empire - SCUS-94636.html
Disney's Der Kvnig Der Lvwen - Simbas Grosses Abenteuer (German) - SLES-03270.html
Disney's Dinosaurio (German) - SLES-02892.html
Disney's Dinosaurio (Spanish) - SLES-02894.html
Disney's Dinosaurs - SLUS-01167.html
Disney's Donald Duck Going Quackers - SLUS-01242.html
Disney's Donald Duck Going Quackers [E][F][G][I] - SLES-03095.html
Disney's El Emperador Y Sus Locuras - SCES-03018.html
Disney's El Planeta Del Tesoro - SCES-03941.html
Disney's El Rey Leon - Las Aventuras Del Poderoso Simba - SLES-03272.html
Disney's El Tetris un Magico Desafio - SCES-02177.html
Disney's Goofy Fun House - SLUS-00000.html
Disney's Goofy Fun House (German) - SLES-03639.html
Disney's Hercules - SLUS-00529.html
Disney's Hercules (German) - SCES-00893.html
Disney's Hercules (Spanish) - SCES-00895.html
Disney's Hercules (UK) - SCES-00891.html
Disney's La Sirenita 2 (Spanish) - SCES-03036.html
Disney's Lilo & Stitch - SCUS-94646.html
Disney's Lilo & Stitch en Problemas en el Paraiso (Spanish) - SCES-03875.html
Disney's Lion King - Simba's Mighty Adventure - SLUS-01282.html
Disney's Lion King - Simba's Mighty Adventure (UK) - SLES-03267.html
Disney's Little Mermaid 2 - SLUS-01286.html
Disney's Magical Tetris Challenge - SCES-02154.html
Disney's Mulan Story Studio - SLUS-01038.html
Disney's Pato Donald Cuac Attack(Spanish) - SLES-03099.html
Disney's Peter Pan Aventuras En El Pais De Nunca Jamas - SCES-03715.html
Disney's Peter Pan Return To Never Land - SLUS-00000.html
Disney's Pooh's Party Game - In Search of the Treasure - SLUS-01437.html
Disney's Tarzan  - SCUS-94456.html
Disney's Tarzan - SLPM-86383.html
Disney's Tarzan (German) - SCES-01516.html
Disney's Tarzan (Italian) - SCES-01518.html
Disney's Tarzan (Spanish) - SCES-01519.html
Disney's Tarzan (Uk) - SCES-01431.html
Disney's The Emperor's New Groove - SCUS-94571.html
Disney's The Jungle Book - Rhythm n' Groove Party - SLUS-01278.html
Disney's Tigger tras un bote de miel (Spanish) - SLES-03259.html
Disney's Tigger's Honey Hunt - SLES-03179.html
Disney's Tigger's Honey Hunt - SLUS-00000.html
Disney's Treasure's Planet - SCUS-94647.html
Disney's Treasure's Planet (Uk) - SCES-03937.html
Disruptor - SLPS-00804.html
Disruptor - SLUS-00224.html
Disruptor (French) - SLES-00564.html
Disruptor (German) - SLES-00565.html
Disruptor (Uk) - SLES-00535.html
Diver's Dream - SLES-01535.html
Dodge Ball - SLPS-00000.html
Dodgem Arena - SLES-01082.html
Dodonpachi - SLPS-01364.html
Dokapon Ikari No Tetsuken - SLPS-01559.html
Doki Doki Poyatchio!! - SLPS-01573.html
Doki Doki Pretty League - SLPS-01507 - SLPS-01508 - SLPS-01509.html
Doki Doki Shutter Chance's - SLPS-01038.html
Dokodemo Hamster 4 - SLPS-03250.html
Dokodemo Hamster B! Quick Club - SLPS-03356.html
Dolphin's Dream - SLPM-86122.html
Domino-kun o Tomenaide - SLPS-01095.html
Donpachi - SLPS-00548.html
Doom - SLES-00132.html
Doom - SLUS-00077.html
Door To Phanomile - SLPS-00000.html
Doraemon - Nobitaito Fukkatsu No Hoshi  - SLPS-00233.html
Doraemon 2  Sos! Otogino Kuni - SLPS-00628.html
Doraemon 3 Makai No Dungeon - SLPS-03076.html
Dosukoi Densetsu - SLPS-01984.html
Double Dragon - SLPS-00191.html
Douga De Puzzle Da! Puppukupuu  - SLPS-00077.html
Doukyuu Billiard Master - SLPS-01385.html
Doukyuusei 2 - SLPS-00691.html
Doukyuusei Mahjong - SLPS-00673.html
Downhill Snow - SLPS-01391.html
Dr. Slump - SLPS-00000.html
Dracula 2 - El zltimo santuario (Spanish) - SLES-03352.html
Dracula Resurrection (German) - SLES-02759 - SLES-12759.html
Dragon Ball Final Bout - SLPS-00949 - SLPS-91079.html
Dragon Ball Gt - Final Bout - SLUS-00493.html
Dragon Ball Gt Final Bout (Spanish) - SLES-03685.html
Dragon Ball Z - Idainaru Dragon ball Densetsu - SLPS-91035 - SLPS-00355.html
Dragon Ball Z - SLPS-00000.html
Dragon Ball Z - Ultimate Battle 22 - SLPS-00073.html
Dragon Ball Z - Ultimate Battle 22 - SLUS-01550.html
Dragon Ball Z - Ultimate Battle 22 (French) - SLES-00291.html
Dragon Ball Z - Ultimate Battle 22 (German) - SLES-03736.html
Dragon Ball Z - Ultimate Battle 22 (Spanish) - SLES-03739.html
Dragon Beat - Legend of Pinball - SLPS-01067.html
Dragon Drive Tactics Break - SLPS-03470.html
Dragon Heart - Fire & Steel - SLUS-00226.html
Dragon Heart - SLPS-00000.html
Dragon Heart -Fire And Steel - SLES-00000.html
Dragon Knight 4 - SLPS-00664.html
Dragon Knights Glorious - SLPS-02391.html
Dragon Money - SLPS-02037.html
Dragon Quest Characters - Torneko no Daibouken 2 - Fushigi no Dungeon - SLPM-86293.html
Dragon Quest IV - SLPM-86916.html
Dragon Quest Monsters i & II - SLPM-87050.html
Dragon Quest VII - SLPM-86500.html
Dragon Seeds - SLUS-00734.html
Dragon Tales-Dragonseek - SLUS-00000.html
Dragon Valor - SLPS-02190.html
Dragon Valor - SLUS-00000.html
Dragon Valor (German) - SCES-02566.html
Dragon Valor (Uk) - SCES-02564.html
Dragon Valor(Spanish) - SCES-02568.html
Dragon Warrior VII - SLUS-01206.html
Dragonbeat - Legend Of Pinball - SLPS-00000.html
Dragonseeds - SLPS-00000.html
Dream Generation - Koi Ka Shigoto Ka! - SLPS-01482.html
Dreams - SLES-00714.html
Dreamworks Gold And Glory The Road To El Dorado - SLUS-00000.html
Driver - SLUS-00842.html
Driver (French) - SLES-01976.html
Driver (German) - SLES-01975.html
Driver (Italian) - SLES-01977.html
Driver (Spanish) - SLES-01978.html
Driver (Uk) - SLES-01816.html
Driver 2 - SLUS-00000.html
Driver 2 (German) - SLES-02995.html
Driver 2 (Spanish) - SLES-02997.html
Driver 2 (Uk) - SLES-02993 - 12993.html
Driver 2 v1.1 (Disc 1) - SLUS-01161.html
Druid - Yamie no Tsuisekisiya - SLPS-01246.html
Ducati Life - SLES-02821.html
Ducati World - Racing Challenge - SLUS-01025.html
Duke Nukem - Land Of The Babes - SLES-03405.html
Duke Nukem - Land Of The Babes - SLUS-00000.html
Duke Nukem - Land Of The Babes (French) - SLES-03440.html
Duke Nukem - Time to Kill - SLES-01515.html
Duke Nukem - Time to Kill - SLUS-00583.html
Duke Nukem - Time To Kill (French) - SLES-01619.html
Duke Nukem - Total Meltdown - SLUS-00355.html
Duke Nukem - Total Meltdown (Uk) - SLES-00703.html
Dune 2000 - SLUS-00973.html
Dune 2000 (German) - SLES-02249.html
Dune 2000 (Spanish) - SLES-02250.html
Dune 2000 (UK) - SLES-02247.html
Dungeon Creator - SLPS-00349.html
Dungeon Shoutenkai - Densetsu no Ken Hajimemashita - SLPS-01650.html
Dx Ceo Game - SLPS-00000.html
DX Jinsei Game - SLPS-00155.html
DX Jinsei Game 2 - The Game of Life - SLPS-00918.html
Dx Jinsei Game 3 - SLPS-02464.html
Dx Jinsei Game 5 - SLPM-87187.html
DX Monopoly - SLPS-02943.html
Dx Nippon Tokkyuu Ryokou Game - Playstation The Best - SLPS-91046.html
Dx Okuman Chouja Game - Playstation The Best - SLPS-91046.html
Dx Shachou Game - SLPS-020105.html
Dynamite Boxing - SLPS-01387.html
Dynamite Soccer - SLPS-00000.html
Dynasty Warriors - SLES-00885.html
Dynasty Warriors - SLUS-00438.html
E.A. Sports Supercross 2001 - SLUS-01319.html
E.A.Sports Supercross - SLES-03399.html
Eagle One - Harrier Attack - SLES-01715.html
Eagle One - Harrier Attack - SLUS-00943.html
Earthworm Jim 2 - SLES-00343.html
Easter Bunny's Big Day - SLUS-01551.html
Eberouge 2 [Worldland Series] - SLPS-01905.html
Echo Night - SLPS-01518.html
Echo Night - SLUS-00000.html
Echo Night 2 - SLPS-02167.html
Ecsaform - SLPS-01791.html
Ecw Anarchy Rulz - SLES-03069.html
ECW Anarchy Rulz - SLUS-01169.html
Ecw Hardcore Revolution - SLUS-01045.html
Efficus - Kono Omoi o Kimi ni... - SLPS-01549.html
Egg (Majorwave 1500 Series] - SLPM-86543.html
Eggs Of Steel - SLUS-00751.html
Ehrgeiz - SLES-02111.html
Ehrgeiz - SLPS-01750.html
Ehrgeiz - SLUS-00809.html
Eikan wa Kimi ni 4 - SLPS-02173.html
Einhander - SLPS-01008.html
Einhdnder - SCUS-94243.html
Eithea - SLPS-03141.html
Eko no Kids - Taga tame hi kane ha naru - SLPS-00648.html
Elan - SLPS-01925.html
Elan Plus - SLPS-02759.html
Elder Gate - SLPM-86494.html
Elemental Gearbolt - SCPS-10038.html
Elemental Gearbolt - SLUS-00654.html
Elemental Pinball - SLES-04038.html
Elf wo karu Monotachi 2 - SLPS-01456.html
Elf wo Karu Monotachi Hanafuda hen - SLPS-00904.html
Elfin Paradise - SLPS-00778.html
Eliminator - SLES-01364.html
Eliminator - SLUS-00699.html
En Busca Del Valle Encantado El Regreso Al Gran Valle - SLES-02985.html
End Sector - SLPS-01584.html
Engacho! - SLPS-02263.html
Enigma - SLPS-01351.html
Eos - Edge Of Skyhigh - SLPS-00000.html
Epica Stella - SLPS-01465.html
Epidemic - SCES-00393.html
Epidemic - SCUS-94152.html
Equestriad 2001 - SLES-02943.html
Equestrian Showcase - SLUS-01462.html
Erezvayu - SLPS-01790.html
Espn Extreme Games - SCES-00063.html
Espn Extreme Games - SCUS-94503.html
ESPN MLS Gamenight - SLUS-01186.html
ESPN X-Games Pro Boarder - SLUS-00704.html
Et The Extra-Terrestrial Interplanetary Mission - SLES-03805.html
Et The Extra-terrestrian - SLUS-01385.html
Eternal Eyes - SLES-02270.html
Eternal Eyes - SLUS-01034.html
Eternal Melody - SLPS-00584.html
Eternal Wings - Bakusou Kyoudai Let's And Go - SLPS-01489.html
Europe Racer - SLES-03415.html
Eve Zero - SLPM-86478.html
Evergreen Avenue - SLPS-03278.html
Everybody's Golf - SCES-00983.html
Everybody's Golf 2 - SCES-02146.html
Evil Dead - Hail to the King - SLES-03428.html
Evil Dead Hail To The King - SLUS-01072.html
Evil Zone - SLES-01903.html
Evil Zone - SLUS-00855.html
Evo's Space Adventure - SLES-01871.html
Exalegiuse - SLPS-01117.html
Excalibur 2555 A.D. - SLES-00478.html
Excalibur 2555 A.D. - SLUS-00541.html
Exciting Bass 2 - SLPS-00000.html
Exector - SLPS-00091.html
Exhumed - SLES-00097.html
Exodus Guilty - SLPS-01721.html
Expert - SLPS-00342.html
Explosive Racing - SLES-00716.html
Extra Bright - SLPS-00000.html
Extreme 500 - SLES-02220.html
Extreme Ghostbusters - SLES-03990.html
Extreme Go-Kart Racing - SLUS-01530.html
Extreme Pinball - SLUS-00200.html
Extreme Power - SLPS-00329.html
Extreme Snow Break - SLES-00501.html
F1 2000 - SLES-02722.html
F1 2000 - SLUS-00000.html
F1 Grand Prix 1996 Team Unei Simulation - SLPS-00677.html
F1 Racing Championship - SLES-02501.html
F1 World Grand Prix - 1999 Season  - SLES-00887.html
F1 World Grand Prix - 1999 Season  - SLUS-01036.html
F1 World Grand Prix 2000 - SLUS-01241.html
F1 World Grand Prix 2000 (German) - SLES-03346.html
Fade To Black - SLES-00209.html
Fade To Black - SLPS-00812.html
Fade To Black - SLUS-00236.html
Falcata - SLPS-00010.html
Familie Feuerstein - Bedrock Bowling (Germna) - SLES-03320.html
Family Feud - SLUS-01171.html
Family Game Pack - SLUS-01049.html
Famires E Youkosou! (Welcome To Family Restaurant) - SLPS-01665.html
Fantastic Fortune - SLPS-03214.html
Fantastic Four - SLES-00548.html
Fantastic Four - SLPS-01034.html
Fantastic Four - SLUS-00395.html
Fantastic Night Dreams - Cotton Original - SLPS-02034.html
Fantastic Night Dreams - Cotton Original [Superlite 1500 Series] - SLPM-86461.html
Farland Saga - Toki No Ichisirube - SLPS-01903.html
Farland Story - Yottsu No Fuuin - SLPS-00797.html
Fatal Fury - Wild Ambition - SLUS-01001.html
Favorite Dear - Junshiro no Yogenmono - SLPS-02754.html
Favorite Dear - SLPS-01759.html
Favorite Dear Enkan No Monogatari - SLPS-03286.html
Fear Effect - SLUS-00000.html
Fear Effect (English, Italian & Spanish) - SLES-02166.html
Fear Effect (German) - SLES-02168 - SLES-12168 - SLES-22168 - SLES-32168.html
Fear Effect 2 - Retro Helix - SLES-03386.html
Fear Effect 2 Retro Helix - SLUS-00000.html
Feda 2 - White Surge The Platoon - SLPS-00723.html
Felony 11-79 - SLES-00940.html
Felony 11-79 - SLUS-00533.html
FIFA - Road to World Cup '98 - SLES-00914.html
FIFA - Road to World Cup '98 - SLUS-00320.html
FIFA - Road to World Cup 98 - World Cup e no Michi - SLPS-01383.html
Fifa '96 - SLES-00116.html
Fifa '96 - SLUS-00038.html
Fifa '97 - SLUS-00269.html
Fifa '99 - SLES-01586 - SLES-01584.html
Fifa '99 - SLUS-00782.html
Fifa 2000 - SLES-02315.html
Fifa 2001 - SLES-03140.html
Fifa 2002 - Major League Soccer - SLUS-01408.html
FIFA World Cup 98 - France 98 Soushuuhen - SLPS-01719.html
Fighter Maker - SLUS-00641.html
Fighters' Impact - SLPS-00822.html
Fighting Eyes - SLPS-01313.html
Fighting Force - SLES-00731.html
Fighting Force - SLUS-00433.html
Fighting Force 2 - SLUS-00934.html
Fighting Force 2 (English & French) - SLES-02233.html
Fighting Force 2 (German) - SLES-02235.html
Fighting Force 2 (Spanish & Italian) - SLES-02237.html
Fighting Illusion - K-1 Grand Prix - SLPS-00000.html
Fighting Illusion K-1 Grand Prix '98 - SLPS-01696.html
Fighting Illusion K-1 Grand Prix '99 - SLPS-02304.html
Fighting Illusion K1 Grand Prix 2000 - SLPS-02985.html
Fighting Illusion K-1 Revenge - SLPS-00978.html
Final Doom - SLES-00487.html
Final Doom - SLUS-00331.html
Final Fantasy I - SLES-04034.html
Final Fantasy I - SLUS-00000.html
Final Fantasy II - SLES-00000.html
Final Fantasy II - SLUS-00000.html
Final Fantasy II Premium Package - SLPS-03501.html
Final Fantasy IV - Final Fantasy Collection Anniversary Package - SLPS-01948.html
Final Fantasy IV - SLUS-01360.html
Final Fantasy IX - SLPS-02000-3.html
Final Fantasy IX - SLUS-01251 - SLUS-01295 - SLUS-01296 - SLUS-01297.html
Final Fantasy IX (German) - SLES-02967.html
Final Fantasy IX (Spanish) - SLES-02969.html
Final Fantasy IX (Uk) - SLES-00000.html
Final Fantasy Tactics - SCUS-94221.html
Final Fantasy Tactics - SLPS-00770.html
Final Fantasy V - Final Fantasy Collection Anniversary Package - SLPS-01949.html
Final Fantasy V - SLPM-86081.html
Final Fantasy V - SLUS-00879.html
Final Fantasy VI - Final Fantasy Collection Anniversary Package - SLPS-01950.html
Final Fantasy VI - SCES-03828.html
Final Fantasy VI - SLPS-00000.html
Final Fantasy VI - SLUS-00900.html
Final Fantasy VII - SCUS-94163 - SCUS-94164 - SCUS-94165.html
Final Fantasy VII - SLPS-00700-2.html
Final Fantasy VII (French) - SCES-00868.html
Final Fantasy VII (German) - SCES-00869 - SCES-10869 - SCES-20869.html
Final Fantasy VII (Spanish) - SCES-00900.html
Final Fantasy VII (Uk) - SCES-00867.html
Final Fantasy VII International - SLPS-00000.html
Final Fantasy VIII - SLPS-01880 - SLPS-01881 - SLPS-01882 - SLPS-01883.html
Final Fantasy VIII - SLUS-00892 - SLUS-00908 - SLUS-00909 - SLUS-00910.html
Final Fantasy VIII (French) - SLES-02081.html
Final Fantasy VIII (German) - SLES-02082.html
Final Fantasy VIII (Italy) - SLES-02083.html
Final Fantasy VIII (Spanish) - SLES-02084.html
Final Fantasy VIII (Uk) - SLES-02080.html
Final Round - SLPS-01266.html
Fire Panic - Mack no Rescue Daisakusen - SCPS-10055.html
Fire Pro Wrestling Fight - SLPS-00277.html
Fire Pro Wrestling G - SLPS-02065.html
Fire Woman Matoigumi - SLPS-01315.html
Firebugs - SCES-03884.html
Firo & Klawd (German) - SLES-00253.html
Firo & Klawd (uk) - SLES-00094.html
First Kiss Star Monogatari - SLPS-01708.html
First Queen IV - War History of Balkia - SLPS-00604.html
Fisherman's Bait - SLES-02085.html
Fisherman's Bait - SLUS-00802.html
Fisherman's Bait 2 - Big Ol' Bass - SLES-02596.html
Fisherman's Bait 2 - Big Ol' Bass - SLUS-00999.html
Fisherman's Bait 3 - SLES-03295.html
Fisher's Road - SLPS-01943.html
Fishing Freaks - SLPS-01930.html
Fist - SLPS-00538.html
Flamberge no Seirei - SLPS-02719.html
Flamberge no Seirei(Siperlite 1500 Series) - SLPM-86711.html
Floating Runner - 7-tsu no Suishou no Monogatari - SLPS-00147.html
Floating Runner - Quest for the 7 crystals - SLES-00453.html
Floating Runner - Quest for the 7 crystals - SLUS-00231.html
Flying Squadron - SLES-04156.html
Ford Racing - SLES-03276.html
Ford Racing - SLUS-01301.html
Ford Truck Mania - SLES-04019.html
Ford Truck Mania - SLUS-01540.html
Formation Soccer '98 - Nippon In France - SLPS-00000.html
Formel 1  Formula 1 - SLES-00298.html
Formula 1 - Championship Edition - SLUS-00546.html
Formula 1 - SCUS-94353.html
Formula 1 '97 - SLES-00859.html
Formula 1 '98 - SLES-01421.html
Formula 1 2001 - SCES-03404.html
Formula Circus - SLPS-00358.html
Formula GP - SLES-03994.html
Formula Grand Prix 1997 - Team Unei Simulation 2 - SLPS-01154.html
Formula Karts Special Edition - SLPS-00726.html
Formula Nippon (French & German) - SLES-02527.html
Formula Nippon (Uk) - SLES-02526.html
Formula Nippon 99 - SLPS-02259.html
Formula One 99 - SCES-01979.html
Formula One '99 - SCPS-10101.html
Formula One 2000 - SLUS-01134.html
Formula One 2001 (Spanish) - SCES-03424.html
Formula One Arcade - SCES-03886.html
Forsaken - SLUS-00458.html
Forsaken (French) - SLES-01086.html
Forsaken (German) - SLES-01087.html
Forsaken (Spanish) - SLES-01089.html
Forsaken (Uk) - SLES-00000.html
Fox Junction - SLPS-01355.html
Foxhunt - SLUS-00000.html
Frank Thomas Big Hurt Baseball - SLUS-00010.html
Frankreich 98 Die Fu_Ball-Wm (German) - SLES-01267.html
Free Talk Studio - Mari no Kimamana Oshaberi - SLPS-00985.html
Freestyle Boarding 99 - SLUS-00767.html
Freestyle Motocross Mcgraw Vs Pastrana - SLES-02820.html
Freestyle Motocross Mcgraw Vs Pastrana - SLUS-01122.html
Freestyle Scooter - SLES-03363.html
Frenzy! - SLES-00784.html
Frogger - SLES-00704.html
Frogger - SLUS-00506.html
Frogger 2 Swampy's Revenge - SLES-02853.html
Frogger 2 Swampy's Revenge - SLUS-01172.html
From TV Animation - One Piece - Ocean of Dreams - SLPS-03550.html
From TV Animation - One Piece - Tobidase Kaizokudan! - SLPS-03252.html
From TV Animation - One Piece Grand Battle - SLPS-03164.html
From TV Animation - One Piece Grand Battle 2 - SLPS-03408.html
Front Mission 1st - SLPM-87317.html
Front Mission 2 - SLPS-01000.html
Front Mission 3 - SLPS-02222.html
Front Mission 3 - SLUS-00000.html
Front Mission Alternative - SLPS-00953 - SCPS-45090.html
Frontschweine (German) - SLES-02767.html
Fun! Fun! Pingu (Limited Edition) - SLPS-02306.html
Funky Boxers - SLPS-03496.html
Furaiki - SLPS-03094.html
Furimukeba Tonari Ni - SLPM-86808.html
Future Cop L.A.P.D. - SLUS-00000.html
Future Cop L.A.P.D. (German) - SLES-01482.html
Future Cop L.A.P.D. (Uk) - SLES-01449.html
Future Racer - SLES-03508.html
Fuuun Gokuu Ninden(Adventures Of Monkey God) - SLPS-00441.html
G.Darius - SLES-01314.html
G.Darius - SLPS-01348.html
G.Darius - SLUS-00690.html
G1 Jockey - SLPM-86195.html
G1 Jockey 2000 - SLPM-86413.html
Gaball Screen - SLPS-00676.html
Gaia Masters - SLPS-02075.html
Gaia Seed - SLPS-000624.html
Gakkou no Kowai Uwasa - Hanako Sangakita! - SLPS-00078.html
Gakkou o tsukurou - Let's make a school - SLPS-01103.html
Gakkou o Tsukurou 2 - SLPS-01660.html
Gakkou O Tsukurou Koushou Sensei Monogatari - SLPS-02998.html
Gakuen Sentai Solblast - SLPS-01852.html
Galaga Destination Earth - SLES-02212.html
Galaga Destination Earth - SLUS-01258.html
Galaxian 3 - SCES-00206.html
Galaxian 3 - SLPS-00270.html
Galaxy Fight - SLES-00197.html
Galaxy Fight - Universal Warriors - SLPS-00000.html
Gale Gunner - SLPS-02596.html
Galeoz - SLPS-00000.html
Galerians - SLPS-02192-4.html
Galerians - SLUS-00000.html
Galerians (German) - SLES-02330.html
Galerians (uk) - SLES-02328.html
Gallop Racer - SLPS-00507.html
Gallop Racer - SLUS-00000.html
Gallop Racer 2 - SLPS-01077.html
Gallop Racer 3 - SLPS-01981.html
Gallop Racer 2000 - SLPS-02623.html
Gambler Jiko Chuushinka Ippatsushoubu! - Tokyo Mahjong Land - SLPS-02509.html
Gameday '98 - SLUS-00000.html
Gamera 2000 - SLPS-00833.html
Gamesoft wo Tsukurou - Let's be a Super Game Creator - SLPS-01607.html
Ganbare Goemon - Kuranarakoi! Ayashi Geikka no Kuroi Kage! - SLPM-86155.html
Ganbare Goemon Ooedo Daikaten - SLPM-86774.html
Ganbare Goemon Uchuu Kaizoku - SLPS-00217.html
Ganbare Morikawa Kime 2nd - Pet in TV - SCPS-10033.html
Ganbare! Nippon! Olympic 2000  - SLPM-86482.html
Ganeoz - SLPS-00621.html
Gangway Monsters - SLPS-01468.html
Ganso Family Mahjong - SLPS-01373.html
Garou Densetsu - Wild Ambition - SLPM-86236.html
Gate Keepers - SLPS-02246-7.html
Gauntlet Legends - SLES-02791.html
Gauntlet Legends - SLUS-00624.html
Gauntlet LEgends (German) - SLES-02932.html
Gear Senshi Dendoh  Gear Fighter Dendoh - SLPS-03189.html
Gegege No Kitarou Gyakishuu! Youkai Daichisen  - SLPM-87286.html
Gekido - Urban Fighters - SLUS-00970.html
Gekido Urban Fighters - SLES-01241.html
Gekioh Shooting King - SLUS-01498.html
Geki-Oh Shooting King-Shienryu - SLPS-02056.html
Gekitotsu Toma L'Arc - L'Arc En Ciel Vs Tomarunner - SCPS-10134.html
Gekitou! Crush Gear Turbo - SLPS-03453.html
Gekka Ni no Kishi - o Ryusen - SLPS-00421.html
Genei Tougi Shadow Struggle - SLPS-00491.html
Genso Suiko Gaiden Vol,2 - Crystal Vallet No Kettou - SLPM-00000.html
Genso Suiko Gaiden vol.1 - Harmonia no Kenshi - SLPM-86637.html
Genso Suikoden - SLPS-00097.html
Genso Suikoden II - SLPS-00000.html
Gensomaden Saiyuki - Harukanaru Nishi He - SLPM-86986.html
Geom Cube - SLUS-00024.html
Geometry Duel - SLPS-01575.html
Germs - SLPS-02107.html
GetBackers Dakkanya - SLPM-86848.html
Getter Robo - The Big Battle! - SLPS-02232.html
Getter Robot - The Big Battle! [Digital Emotion Best] - SLPS-03017.html
Gex - SLES-00133.html
Gex - SLUS-00042.html
Gex 2 - Enter The Gecko - SLES-00596.html
Gex 2 - Enter The Gecko - SLUS-00598.html
Gex 3 - Deep Cover Gecko - SLUS-00806.html
Gex 3 - Deep Cover Gecko (E-I-S) - SLES-01299.html
Gex 3 - Deep Cover Gecko (GermanFrench) - SLES-01908.html
Ghost In The Shell - SLUS-00000.html
Ghost In The Shell (German) - SCES-01075.html
Ghost in the Shell (Koukaku Kidoutai) - SCPS-10043.html
Ghost In The Shell (UK) - SCES-01050.html
Ghoul Panic - SCES-02453.html
Ginga Eiyuu Densetsu - SLPS-01358.html
Ginga O Jousama Densetsu Yuna Final Edition - SLPS-01451.html
Gion Hana 2 - Kanazawa Bunko-hen - SLPS-01858.html
Glint Glitters - SLPM-86200.html
Global Domination (UK) - SLES-01419.html
Global Force - SCPS-10082.html
Glover - SLES-02213.html
Glover - SLUS-00890.html
Goal Storm - SLES-00069.html
Goal Storm - SLUS-00055.html
Goal Storm '97 - SLUS-00295.html
Gochachiru (Pandora Max Series vol.5) - SLPS-02944.html
G-O-D Pure - Growth Of Devolution - SLPS-00944.html
Goemon Shin Sedai Shuumei - SLPS-00000.html
Goiken Muyou 2 - SLPS-01542.html
Go-Jin Senki - SLPS-01471.html
Gokujou Parodius Da! Deluxe Pack - SLPS-00002.html
Gokuu Densetsu Magic Beast Warriors - SLPS-00048.html
Golden Nugget - SLUS-00319 - SLUS-00555.html
Goo! Goo! Sundy - SLPM-86250.html
Googootrops - SLPM-86148.html
Goryujin + Electro - SLPS-01620.html
Gotha 2-Tenkuu No Kishi - SLPS-00422.html
Gotouchi Hello Kittysugoroku monogatari - SLPS-03552.html
Gouketuji Ichozoku 2 (Power Instinct 2) - SLPS-00104.html
Gourmet Action Game - Manpuku!! Nabe Kazoku - SLPS-03381.html
G-Police - SCPS-10065 - SCPS-10066.html
G-Police - SLUS-00000.html
G-Police - Weapons Of Justice - SLUS-00798.html
G-Police - Weapons of Justice (Spanish) - SCES-01919.html
G-Police - Weapons Of Justice (Uk) - SCES-01625.html
G-Police (French) - SLES-00853 - SLES-10853.html
G-Police (German) - SLES-00854.html
G-Police (Spanish) - SLES-00856 - SLES-10856.html
G-Police (Uk) - SLES-00082.html
G-Police Weapons Of Justice (German) - SCES-01918.html
Gradius Deluxe Pack - SLPS-00303.html
Gradius Gaiden - SLPM-86042.html
Gran Turismo - SCES-00984.html
Gran Turismo - SCPS-10045.html
Gran Turismo (Version 1.0) - SCUS-94194.html
Gran Turismo 2 - SCES-02380 - SCES-12380.html
Gran Turismo 2 - SLPS-10116 - SLPS-10117 - SCPS-10117.html
Gran Turismo 2 V1.0 - SCUS-94455 - SLUS-94488 - SCUS-94488 - SLUS-94455.html
Gran Turismo 2 Version 1.1 - SLUS-00000.html
Gran Turismo 2 Version 1.2 - SLUS-00000.html
Grand Slam - SLUS-00127.html
Grand Theft Auto - London 1969 - SLES-01714.html
Grand Theft Auto - London 1969 - SLUS-00846.html
Grand Theft Auto - SLES-00032.html
Grand Theft Auto - SLPS-01554.html
Grand Theft Auto - SLUS-00106.html
Grand Theft Auto 2 - SLES-01404.html
Grand Theft Auto 2 - SLUS-00789.html
Grandia - SCUS-94457.html
Grandia - SLPS-02124.html
Grandia (French) - SLES-02398.html
Grandia (German) - SLES-02399.html
Grid Run - SLES-00381.html
Grid Runner - SLPS-00659.html
Grid Runner - SLUS-00323.html
Grind Session - SCES-02885.html
Grind Session - SCUS-94568.html
Groove Adventure Rave - Mikan No Hiseki - SLPM-87138.html
Groove Adventure Rave - Plue no Daibouken - SLPM-87121.html
Groove Adventure Rave - Yukyu no Kizuna - SLPM-87011.html
Ground Stroke Tennis - SLPS-00000.html
Growlanser - SLPS-02380.html
Grudge Warrior - SLES-02223.html
Grudge Warriors - SLUS-01150.html
Gt All Japan Touring Car Championship - SLPS-00219.html
GT Straight Victory - SLPS-01310.html
Guardian Recall - SLPS-01297.html
Guardian's Crusade  - SLUS-00811.html
Guardians Crusade (German) - SLES-00000.html
Gubble - SLES-3208.html
Gubble - SLUS-01466.html
Guilty Gear - SLES-02494.html
Guilty Gear - SLPS-01357.html
Guilty Gear - SLUS-00772.html
Guitar Freaks - SLPM-86265.html
Guitar Freaks Append Second Mix - SLPM-86446.html
Gunbare - The Game Paradise 2 - SLPS-01322.html
GunBarl - SLPS-01500.html
Gunbird - SLPS-00157.html
Gunbullet - SLPS-00929.html
Gundam - The Battle Master - SLPS-00883.html
Gundam - The Battle Master 2 - SLPS-01286.html
Gundam Battle Assault - SLES-03650.html
Gundam Battle Assault - SLPM-86746.html
Gundam Battle Assault - SLUS-01226.html
Gundam Battle Assault 2 - SLES-03934.html
Gundam Battle Assault 2 - SLUS-01418.html
Gundress - SLPS-02512.html
Gunfighter The Legend Of Jesse James - SLES-03689.html
Gunfighter The Legend Of Jesse James - SLUS-01398.html
Gungage - SLES-02069.html
Gungage - SLPM-86233.html
Gungho Brigade - SLPS-01902.html
Gunner's Heaven - SCPS-10006.html
Gunnm Kasei no Kioku (Martian Memory) - SLPS-01408.html
Gunparade March - SCPS-10136.html
Gunpey - SLPS-02485.html
Gunship - SLES-00027.html
Gunship 2000 - SLUS-00000.html
Guntu Western Front June 1944 - SLPS-01106.html
Gussun Oyoyo - SLPS-02723.html
Gussun Paradise - SLPS 00588.html
Guuchu de Park - Theme Park Monogatari - SLPS-00626.html
Hai-Shin 2 - SLPM-86066.html
Hajime no Ippo - The Fighting - SLPS-00945.html
Hakai Ou King Of Crusher - SLPS-01677.html
Hamster Club-I - SLPS-03266.html
Hamster Monogatari - SLPS-02724.html
Hamunaptra - Ushinawareta Sabaku no Miyako - SLPM-86662.html
Hana to Ryuu - SLPS-01532.html
Hanafuda graffiti - Koi monogatari - SLPS-00367.html
Happy Hotel - SLPS-01110.html
Happy Salvage - SLPS-02821.html
Hard Boiled - SLPS-00000.html
Hard Boiled (English) - SLES-00033.html
Hard Boiled (German) - SLES-00852.html
Hard Edge - SLES-01539.html
Hard Edge - SLPS-01733.html
Hard Rock Cab - SLPS-00224.html
Hardball 5 - SLUS-00108.html
Hardball 99 - SLUS-00651.html
Hardcore 4X4 - SLES-00261.html
Harlem Beat-You Are The One - SLPM-86329.html
Harry Potter And The Chamber Of Secrets - SLES-00000.html
Harry Potter And The Chamber Of Secrets - SLUS-00000.html
Harry Potter And The Sorcerers Stone - SLUS-01415.html
Harry Potter And The Sorcerers Stone (E-F-G) - SLES-03662.html
Harry Potter to Kenja no Ish - SLPS-03355.html
Harry Potter Y La Camara Secreta (Spanish, Italian & Portuguese) - SLES-03973.html
Harry Potter y la Piedra Filosofal (Spanish, Italian & Portuguese) - SLES-03663.html
Harukanaru Toki no Naka de - Banue Yuugi - SLPM-87241.html
Harukanaru Toki No Naka De - SLPM-86466.html
Harukaze Sentai V-Force - SLPS-00578.html
Harvest Moon Back To Nature - SLUS-01115.html
Hashiriya Ookamitachi No Densetsu  - SLPS-00704.html
Hatsukoi Valentine - SLPS-00831.html
HBO Boxing - SLES-02738.html
HBO Boxing - SLUS-01027.html
Heart of Darkness - SLUS-00696-00741.html
Heart of Darkness (German) - SLES-00463-10463.html
Heart of Darkness (Spanish) - SLES-00465 - SLES-10465.html
Heart Of Darkness (Uk) - SLES-00461.html
Heavens Gate Yusha - SLES-00713.html
Heaven's Gate Yusha - SLPS-00667.html
Hellboy - SLUS-01414.html
Hello Charlie! - SLPM-86083.html
Hello Kitty Kitty The Kool! - SLPS-01566.html
Hello Kitty White Present - SLPS-01776.html
Hello Kitty's Cube Frenzy - SLUS-00778.html
Herc's Adventures - SLUS-00000.html
Herc's Adventures (German) - SLES-00586.html
Herc's Adventures (Spanish) - SLES-0645.html
Herc's Adventures (Uk) - SLES-00653.html
Heroine Dream - SLPS-00470.html
Heroine Dream 2 - SLPS-02933.html
Hexamoon Guardians - SLPS-02641.html
Hexen - SLES-00555.html
Hexen - SLPS-00972.html
Hexen - SLUS-00348.html
Hidden & Dangerous - SLES-03602.html
High Brown Gag & Pure Shooting - Harmful Park - SLPS-00498.html
High Heat - Major League Baseball 2002 - SLUS-01244.html
High Heat Baseball 2000 - SLUS-00830.html
High School Of Blitz - SLPS-02351.html
Hi-Hou-Oh - SLPS-00821.html
Hikari No Shima - Seven Lithographs In Shining Island - SLPS-02305.html
Hikaru no Go - Heian Gensou Ibunroku - SLPM-87059.html
Himiko Den - SLPS-01890.html
Himitsu Kessha Q - SLPS-01334.html
Himitsu Sentai Metamor V Deluxe - SLPS-01626-7.html
Hi-Octane - SLES-00115.html
Hi-Octane - SLUS-00157.html
Hissatsu Pachinko Station - Monster House Special - SLPS-01577.html
Hissatsu Pachinko Station 2 - SLPS-01185.html
Hissatsu Pachinko Station 3 - Genshijin ga Ippai [Limited Edition] - SLPS-01702.html
Hissatsu Pachinko Station 4 - Hero Tachi no Chousen - SLPS-01907.html
Hissatsu Pachinko Station 5 - Ushiwaka to Lemi - SLPS-02097.html
Hissatsu Pachinko Station 6 - Gakideka & Jamaica - SLPS-02144.html
Hissatsu Pachinko Station 9 - Ushiwaka to Lemi - SLPS-02765.html
Hit Back - SLPS-01381.html
Hiza No Ue No Partner - Kitty On Your Lap - SLPS-01302.html
Hogs Of War - SLUS-01195.html
Hogs Of War (Marranos en Guerra) (Spanish) - SLES-02768.html
Hogs Of War (Uk) - SLES-01041.html
Hokuto No Ken - Seikimatsu Kyuuseishu Densetsu - SLPS-02993.html
Hokuto no Ken - SLPS-00369.html
Hole Of The Legend Monster - Monster Complete World Ver.2 - SLPS-02297.html
Honkaku Hanafuda - SLPS-01656.html
Honkaku Mahjong - Tetsuman Special - SLPS-00238.html
Honoo no Ryourinin Cooking Fighter Tao - SLPS-01382.html
Hooters Road Trip - SLUS-01394.html
Horned Owl - SCPS-10016.html
Hoshi no Oka Gakuen Monogatari - Gakuensai - SLPS-01638.html
Hoshigami - Shizumiyuku Aoki Daichi - SLPS-02904.html
Hoshigami Ruining Blue Earth - SLUS-00000.html
Hot Shot - SLES-04050.html
Hot Shots Golf - SCUS-94188.html
Hot Shots Golf 2 - SLUS-00000.html
Hot Wheels Extreme Racing - SLES-03595.html
Hot Wheels Extreme Racing - SLUS-01293.html
Hot Wheels Turbo Racing - SLES-02198.html
Hot Wheels-Turbo Racing - SLUS-00000.html
Hugo (English) - SLES-01666.html
Hugo 2 (English) - SLES-01805.html
Hugo 2 (German) - SLES-01807.html
Hugo 3 - The quest for the sunstones - SLES-02590.html
Hugo 4 - Black Diamond Fever (English) - SLES-03487.html
Hugo 4 Black Diamond Fever - SLES-03513.html
Hugo 5 - Frog Fighter - SLES-03686.html
Hugo 6 - The Evil Mirror - SLUS-01559.html
Hunter x Hunter - Uwareta Aura Stone - SLPM-86895.html
Hunter x Hunter Maboroshi No Greed Island - SLPM-86651.html
Hunter-Not Treasure - SLPS-00000.html
Hyakujuu Sentai Gaoranger - SLPS-03353.html
Hybrid - SLES-03531.html
Hybrid - SLPS-01102.html
Hydro Thunder - SLES-02337.html
Hydro Thunder - SLUS-00000.html
Hyouryuu Ki - The Reportage Beyond The Sea - SLPS-02358.html
Hyper Crazy Climber - SLPS-00248.html
Hyper Final Match Tennis - SLES-00309.html
Hyper Olympic in Atlanta - SLPM-86002.html
Hyper Pachinko [Hyper Value 2800] - SLPM-86418.html
Hyper Rally - SLPS-00462.html
Hyper Securities 2 - SLPS-01417.html
Hyper Value 2800 - Hanafuda - SLPM-86417.html
I.Q Intelligent Qube - SCPS-00000.html
I.Q. - Intelligent Qube [PlayStation the Best] - SCPS-91068.html
I.Q. Final - SCPS-10071.html
Ian Livingstone's - Deathtrap Dungeon - SLES-00746.html
Ian Livingstone's - Deathtrap Dungeon - SLUS-00566.html
Ibarado Rapture no Kaeru Machi - SLPS-01027.html
Ichigeki - Hagane no hito - SLPS-02199.html
Ide Yohsuke Meijin no Shin Jissen Mahjong - SLPS-00328.html
Ide Yohsuke no Mahjong Kazoku - SLPS-00058.html
Ide Yohsuke No Mahjong Kyoshitsu - SLPS-02272.html
Idol Janchi Suchie-Pai II Limited - SLPS-00290.html
Idol Janchi Suchie-Pai Limited - SLPS-00029.html
Idol Promotion - Yumie Suzuki - SLPS-00343.html
Ihra Drag Racing - SLUS-01097.html
Ikasama Cheating Mahjong - SLPS-02606.html
Image Fight X-Multiply - SLPS-01267.html
Impact Racing - SLUS-00225.html
In Cold Blood - SLUS-01294.html
In Cold Blood (UK) - SCES-02149.html
In einem Land vor unserer Zeit - Die Rckkehr ins gro_e Tal (German) - SLES-02983.html
In The Hunt - SLES-00342.html
In The Hunt - SLUS-00172.html
Incredible Crisis - SLES-02933.html
Incredible Crisis - SLUS-01225.html
Independence Day - SLES-00607.html
Independence Day - SLUS-00221.html
Indy 500 - SLES-00135.html
Indy 500 - SLPS-00860.html
Infestation - SLES-01870.html
Infinity - SLPS-02669.html
Initial d - SLPS-00000.html
Inspector Gadget - Gadget Crazy Maze - SLES-03084.html
Inspector Gadget - Gadget Crazy Maze - SLUS-01267.html
Intelligent Qube - SCUS-94181.html
Intellivision Classic Games - SLUS-00906.html
International Karate + - SLES-04040.html
International Moto X - SLES-00099.html
International Moto-X - SLPS-00000.html
International Superstar Soccer Deluxe - SLES-00511.html
International Superstar Soccer Pro Evolution - SLPS-00000.html
International Track & Field - SLES-00333.html
International Track & Field - SLUS-00238.html
International Track & Field 2 - SLES-02448.html
International Track and Field 2000 - SLUS-00987.html
Interplay Sports Baseballl 2000 - SLUS-00850.html
Inuyasha - Sengoku Otogi Kassen - SLPS-03503.html
Inuyasha A Feudal Fairy Tale - SLUS-01534.html
Inuyasha Rpg - SLPS-03374.html
Invasion - SLES-00443.html
Invasion From Beyond - SLUS-00709.html
Irem Arcade Classics - SLPS-00341.html
Iron & Blood - SLUS-00378.html
Iron Man X-O Manowar - In Heavy Metal - SLUS-00235.html
Iron ManX-O Manowar - In Heavy Metal - SLES-00281.html
Iron ManX-O Manowar - In Heavy Metal - SLPS-00455.html
Iron Soldier 3 - SLES-03250.html
Iron Soldier 3 - SLUS-01061.html
Irritating Stick - SLUS-00775.html
Is Internal Section - SLPS-01868.html
Ishin no Arashi - Bakumatsu Shishiden - SLPM-86144.html
Ishin no Arashi - SLPS-01158.html
ISS Pro Evolution - SLUS-01014.html
Itadaki Street - Gorgeous King - SLPM-86120.html
Iwatobi Penguin Rocky X Hopper - SLPS-00832.html
Iwatobi Penguin Rocky X Hopper 2 - SLPS-01283.html
Iznogoud - SLES-00480.html
Jackie Chan Stuntmaster - SCES-01444.html
Jackie Chan Stuntmaster - SLUS-00684.html
Jade Cocoon - SLUS-00854.html
Jade Cocoon - Story of the Tamamayu [Spanish] - SLES-02205.html
Jade Cocoon (German) - SLES-02203.html
Jade Cocoon (Uk) - SLES-02201.html
Jaja-Uma Quartet - Mega Dream Destruction - SLPS-01558.html
Jang Jang Koi Shimashow - Lovely Pop 2 in 1 - SLPS-01134.html
Jang Jang Koi Shimashow - Separate 1 - Jang Jang Shimashow - SLPS-02708.html
Jang Jang Koi Shimashow - Separate 2 - Koi Koi Shimashow - SLPS-02709.html
Janhai Yuugi '99 - Tanuki no Kawazanyou - SLPS-01760.html
Jarrett & Labonte Stock Car Racing - SLUS-01139.html
Jeff Wayne's War of the Worlds (German) - SLES-01984.html
Jeopardy - SLUS-00682.html
Jeopardy Second Edition - SLUS-00000.html
Jeremy Mcgrath Supercross '98 - SLES-01281.html
Jeremy Mcgrath Supercross '98 - SLUS-00479.html
Jeremy Mcgrath Supercross 2000 - SLES-01981.html
Jeremy Mcgrath Supercross 2000 - SLUS-00832.html
Jersey Devil - SCUS-94907.html
Jersey Devil - SLES-00598.html
Jersey Devil no Daibouken - SLPM-86075.html
Jet Ace - SLES-04125.html
Jet Copter x - SLPM-86894.html
Jet De Go! Let's go by airliner - SLPM-86812.html
Jet Moto - SCUS-94309.html
Jet Moto 2 - SCUS-94167.html
Jet Moto 3 - SCUS-94555.html
Jet Rider - SCES-00566.html
Jet Rider 2 - SCES-01045.html
JGTC - All Japan Grand Touring Car Championship - SLPS-01428.html
Jigsaw Land - Japan Grafitti - SLPS-00473.html
Jigsaw Madnedss - SLUS-01509.html
Jikkyou Golf Master 2000 - SLPM-86464.html
Jikkyou J.League 1999 Perfect Striker - SLPM-86317.html
Jikkyou Oshaberi Parodius - Forever With Me - SLPM-86008.html
Jikkyou Pawafuru Puroyakyu 97 Kaimakuban - SLPM-86024.html
Jikkyou Pawafuru Puroyakyu 99 Kaimakuban - SLPM-86253.html
Jikkyou Pawafuru Puroyakyu 2000 Kaimakuban - SLPM-86578.html
Jikkyou Pawafuru Puroyakyu 2000 Ketteiban - SLPM-86694.html
Jikkyou Pawafuru Puroyakyu 2001 - SLPM-86807.html
Jikkyou Pawafuru Puroyakyu 2002 Haru - SLPM-87033.html
Jikkyou Pawafuru Puroyakyu 2003 Premiumban - SLPM-87216.html
Jimmy Johnson's VR Football '98 - SLUS-00500.html
Jinx - SLES-03908.html
Jitsumei Jikkyou Keiba Dream Classic - SLPS-02727.html
Jockey Zero - SLPS-00429.html
Johnny Bazookatone - SLES-00112.html
Johnny Bazookatone - SLUS-00194.html
Jojo's Bizarre Adventure - SLES-02599.html
Jojo's Bizarre Adventure - SLUS-01060.html
Jojo's Bizarre Adventure -JoJo no Kimyou na Bouken - SLPS-02236.html
Jounetsu nekketsu athletes - SLPS-00936.html
J's Racin' - SLPS-01007.html
Judge Dredd - SLES-00755.html
Judge Dredd - SLUS-00630.html
Jumping Flash 2 - SCES-00111.html
Jumping Flash 2 - SLUS-00000.html
Jumping Flash! - Aloha Danshaku Funky Daisakusen no Kan - SCPS-10007.html
Jumping Flash! - SCES-00003.html
Jumping Flash! - SCUS-00000.html
Jumping Flash! 2 - Aloha Danshaku Ooyowari no Maki - SCPS-10021.html
Jumpstart Wildlife Safary Field Trip - SLUS-01383.html
Junclassic C.C. & Rope Club - SLPM-86080.html
Jungla De Cristal Trilogia 2 - Viva Las Vegas (Spanish) - SLES-02750.html
Jupiter Strike - SLES-00138.html
Jupiter Strike - SLUS-00177.html
K.O. The Live Boxing - SLPS-01413.html
K-1 - The Arena Fighters - SLUS-00414.html
K-1 Ouja Ni Narou! - SLPS-02602.html
K-1 Revenge - SLUS-00766.html
K-1 The Arena Fighters - SLES-00767.html
K-1 World Grand Prix 2001 Kaimakuban BY Xing - SLPM-86763.html
K1-Grand Prix - SLES-02753.html
K1-Grand Prix - SLUS-00941.html
Kaeru No Ehon - Nakushita Kioku Wo Motomete - SLPS-02332.html
Kaettekita Cyborg Kurochan - SLPM-87174.html
Kagero - Deception 2 - SLES-01967.html
Kagero - Deception 2 - SLUS-00677.html
Kagero - Kokumeikan Shinshou - SLPS-01421.html
Kaibutsu Para-Dice - Monster Paradise - SLES-00915.html
Kaijuu Senki - SLPS-00529.html
Kain The Vampire - SLPS-00743.html
Kaisoku Tenshi-The Rapid Angel - SLPS-01553.html
Kaitei Daisensou - In the Hunt - SLPS-00086.html
Kaitohranma Miyabi - SLPS-01825.html
Kaitou Apricot - SLPS-03532.html
Kakugee Yarou - Fighting Game Creator - SLPS-02595.html
Kamen Raider V3 - SLPS-02964.html
Kamen Rider - SLPS-01570.html
Kamen Rider Agito - SLPS-03344.html
Kamen Rider Kuuga - SLPS-03090.html
Kamen Rider Ryuki  - SLPS-03495.html
Kartia - SLUS-00631.html
Kasei Monogatari - SLPS-01630.html
Katobi Tune - SLPS-01253.html
Kawa no nushi tsuri - Hikyiou o motomete - SLPS-01536.html
Kaze no Klonoa - Door To Phantomile - SLPS-01010.html
Kekkon Marriage - SLPS-00469.html
Kenkaku Ibunroku - Yomigaerishi Soukou no Ha - Samurai Spirits Shinshou - SLPM-86345.html
Kenki Ippatsu Crane Master Ni Narou! - SLPS-02831.html
Kensei - The King Of Boxing - SLPS-00502.html
Kensei Sacred Fist - SLES-01081.html
Kensei Sacred Fist - SLUS-00600.html
Kensetsu Kikai Simulator - Kenki Ippai!! - SLPS-02605.html
Kero Kero King - SLPM-86621.html
Khamrai - SLPS-02640.html
Kickboxing - SLUS-00000.html
Kickboxing Knockout - SLES-03959.html
Kid Clown In Crazy Chase 2 - Love Love Hani Soudatsuden - SLPS-00454.html
Kid Mix Section Character Collection - SLPS-03236.html
Kidou Senshi Gundam - Giren no Yabou - Zeon no Keifu - SLPS-02570.html
Kidou Senshi Gundam-Giren no Yabou-Zeon no Keifu-Kouryaku Shireisho - SLPS-02820.html
Kids Station - Barbapapa - SLPS-00000.html
Kids Station - Kamen Raider Heroes - SLPS-03403.html
Kids Station - Unten Daisuki Doki Doki Norimono Daibouken - SLPS-03337.html
Kids Station Hello Kitty no Oshaberi ABC - SLPM-86904.html
Kiganjo - SLPS-02370.html
Kileak - The Blood  - SLPS-00027.html
Kileak - The Blood - SCES-00035.html
Kileak - The Blood 2 - SLPS-00170.html
Kileak - The DNA Imperative - SCUS-94102.html
Killer Loop - SLES-01878.html
Killer Loop - SLUS-00000.html
Killing Zone - SLPS-00296.html
Killing Zone - SLUS-00000.html
Kimagure My Baby - Musume no Sugoroku Seichouki - SLPS-01177.html
Kimero Hero Gakuen Eiyuu ni Shinjutsu Nashi - SLPS-02545.html
Kimi Ni Steady - SLPS-02965.html
Kimi no Kimochi Boku no Kokoro - SLPS-02271.html
Kindaichi Shounen No Jikenbo - Hihoushima Aratanaru Sangeki - SLPS-00601.html
King of Parlor - SLPS-00524.html
King of Parlor 2 - SLPS-01423.html
King of Producer - SLPS-01124.html
King of Stallion - SLPS-00247.html
King's Field - SCES-00510.html
King's Field - SLPS-00017.html
King's Field - SLUS-00158.html
King's Field (Translated to English) - SLPS-00017.html
King's Field II - SLPS-00069.html
King's Field II - SLUS-00255.html
King's Field III - The Story of Verdite - SLPS-00377.html
King's Field III - The Story of Verdite (Playstation the Best) - SLPS-91089.html
Kingsley's Adventure - SLES-01659.html
Kinniku Banzuke - Road to Sasuke - SLPM-86490.html
Kinniku Banzuke Vol.3 -  Saikyou No Challenger Tanjou! - SLPM-86690.html
Kirikou (English, French & German) - SLES-03676.html
Kirikou (Italian, Portuguese & Spanish) - SLES-03677.html
Kisha de GO! - SLPM-86449.html
Kisou Jidaigeki Sugoroku - Shinobi No Roku - SLPS-02877.html
Kiss Pimball - SLES-03211.html
Kiss Pinball - SLUS-01366.html
Kitchen Panic - SLPS-01395.html
Kizuna to Iuna no pendant with toy box stories - SLPS-02681-2.html
Klaymen Gun Hockey - SLPS-02424.html
Klaymen Klaymen 2 Skullmonkey No Gyakushuu - SLPS-01501.html
Klonoa - Door To Phantomile - SLUS-00585.html
Klonoa - Door To Phantomile (French) - SCES-01185.html
Klonoa - Door To Phantomile (German) - SCES-01187.html
Klonoa - Door To Phantomile (Spanish) - SLES-01188.html
Klonoa Beach Volley - SLPS-03433.html
Klonoa Beach Volleyball - SCES-03922.html
Knockout Kings - SLUS-00737.html
Knockout Kings '99 (Uk) - SLES-01448.html
Knockout Kings 2000 - SLUS-00993.html
Knockout Kings 2000 (UK) - SLES-02322.html
Knockout Kings 2001 - SLES-03121.html
Knockout Kings 2001 - SLUS-01269.html
Kogepan - Pan mo Game wo Yarurashi - SLPS-03499.html
Kojin Kyouju - La Lecon Particuliere - SLPS-01354.html
Kokumeikan - Trap Simulator Game - SLPS-91033.html
Kombi Mahjong Awase Uchi with Maboroshi Tsukiyo - SLPM-86515.html
Konami 80's Arcade Gallery - SLPM-86228.html
Konami Antiques MSX Collection vol.1 - SLPM-86052.html
Konami Antiques Msx Collection Vol.2 - SCPS-45155.html
Konami Antiques MSX Collection vol.3 - SLPM-86072.html
Konami Arcade Classics - SLUS-00945.html
Konami Open Golf - SLES-00337.html
Korokoro Postnin - SLPS-03479.html
Kosodate Quiz Motto My Angel - SLPS-01885.html
Kosodate Quiz My Angel - SLPS-00970.html
Kotobuki Grand Prix - SLPS-01941.html
Koudelka - SLPS 02460~3.html
Koudelka - SLUS-01051.html
Koudelka (French) - SLES-02898.html
Koudelka (German) - SLES-02899.html
Koudelka (Spanish) - SLES-02901.html
Koudelka (UK) - SLE-02897.html
Koukai Sarena Katta Shuki - The Note - SLPS-00684.html
Koukroseatro - Yuukyuu no Hitomi - SLPS-02385.html
Koutetsu Reiki Steeldom - SLPS-00431.html
Kowai Syasin Shinrei Syasin Kitan - SLPS-03454.html
Kowloon's Gate - SLPS-00669-72.html
Koyasai a sherd of youthful memories - SLPS-01775.html
Krazy Ivan - SCUS-94303.html
Krazy Ivan - SLPS-00492.html
Krazy Ivan (German) - SLES-00127.html
Krazy Ivan (Uk) - SLES-00084.html
Kula Quest - SCPS-10064.html
Kula World - SCES-01000.html
Kuma no Puutarou - SLPS-00115.html
Kumitate Battle Kutto Ketto - SLPS-01208.html
Kunoichi Torimonocho - SLPS-01773.html
Kuon no Kizuna - SLPS-01676.html
Kuro No Ken - Blade Of Darkness - SLPS-01030.html
Kuroi Hitomi No Noir - Cielgris Fantasm - SLPS-01450.html
Kurt Warner's Arena Football Unleashed - SLUS-01125.html
Kuru Kuru Marumaru - SLPM-86785.html
Kurushi - SCES-00866.html
Kyorochan No Purikura Daisakusen - SLPS-01692.html
Kyotei Wars Mark 6 - SLPS-03451.html
Kyousouba Ikusei Simulation - Derby Stallion - SLPS-00777.html
Kyousouba Ikusei Simulation - Derby Stallion 99 - SLPS-02299.html
Kyuin - SLPS-00214.html
Kyuukyoku No Soukoban - 3D Puzzle & Cinema - SLPS-00475.html
Kyuutenkai Fantastic Pinball - SLPS-00031.html
Lagnacure - SLPS-01009.html
Lagnacure Legend - SLPS-02832.html
Lake Master Pro - SLPS-02177.html
Landmaker - SLES-02682.html
Landmaker - SLUS-01086.html
Langrisser I & II - SLPS-00896.html
Langrisser IV - SLPS-01818.html
Langrisser V - SLPS-01819.html
Largo Winch - SLUS-01441.html
Largo Winch Commando Sar - SLES-03688.html
Las Vegas Dream 2 - SLPS-00732.html
Lattice 200Ec7 - SLPM-86491.html
Le Mans 24 Hours - SLES-01362.html
Legacy Of Kain - Soul Reaver - SLUS-00708.html
Legacy Of Kain Soul Reaver (French) - SLES-02024.html
Legacy Of Kain Soul Reaver (German) - SLES-02025.html
Legacy Of Kain Soul Reaver (Spanish) - SLES-02026.html
Legacy Of Kain Soul Reaver (UK) - SLES-01301.html
Legaia Densetsu - SCPS-10059.html
Legend - SLES-00730.html
Legend of Kartia - SLES-01710.html
Legend Of Legaia - SCUS-94254.html
Legend of Legaia (German) - SCES-01945.html
Legend of Legaia (Spanish) - SCES-01947.html
Legend of Legaia (Uk) - SCES-01752.html
Legend Of Mana - SLUS-01013.html
Lego Island 2 - SLUS-00000.html
Lego Racers - SLUS-00581.html
Lego Rock Raiders - SLES-01690.html
Lego Rock Raiders - SLUS-00937.html
Lemmings & Oh No! More Lemmings - SLES-01461.html
Lemmings & Oh No! More Lemmings - SLUS-00760.html
Lemmings 3D - SCES-00009.html
Lemmings 3D - SCUS-94601.html
Lemmings 3D - SIPS-60002.html
Lethal Enforcers I & II - SLES-00552.html
Lethal Enforcers I & II - SLUS-00293.html
Let's go bassfishing! - sSLPS-01914.html
Libero Grande - SCES-01430.html
Libero Grande - SLPS-01681.html
Libero Grande International - SCES-3254.html
Lifeforce Tenka (German) - SLES-00615.html
Lifescape 2 - Body Bionics - Kyoui no Shouuchuu Jintai - SLPS-00629.html
Lightning Legend - SLPM-86015.html
Linda Cubed Again - SCPS-10039.html
Ling Rise - SLPS-01769.html
Little Big Adventure - SLES-00698.html
Little Big Adventure - SLPS-00376.html
Little Lovers - She So Game - SLPM-86269.html
Little Princess +1 - Maru Oukoko no Ningyou Hime 2 - SLPS-03012.html
Little Witching Mischiefs - SLPS-00000.html
Live Wire! - SLES-01332.html
Lma Manager - SLES-01016.html
LMA Manager 2001 - SLES-02975.html
Loaded - SLES-00013.html
Loaded - SLUS-00076.html
Lode Runner - SLUS-00557.html
Lode Runner - The Legend Returns - SLPS-00182.html
Logic Mahjong Souryuu - Sannin Uchi - 3 Players Game is a mahjong game - SLPS-02036.html
Logic Pro Adventure - SLPS-03011.html
Lomax - SLPS-00987.html
Lomax - The Adventures Of Lemmingsland - SLES-00451.html
London Racer - SLES-02694.html
London Racer 2 - SLES-03822.html
London Seirei Tantei-Dan - SLPS-01787.html
Lone Soldier - SLES-00131.html
Lone Soldier - SLPS-00322.html
Lone Soldier (German) - SLES-00142.html
Looney Toon Racing - SLUS-01145.html
Looney Tunes - Sheep - Dog 'n' Wolf - SLES-02895.html
Looney Tunes - Sheep Raider - SLUS-01369.html
Lord Monarch - SLPS-00000.html
Lord Of Fist - SLPS-02168.html
Lord Of Monsters - SCPS-10086.html
Lost Sword - SLPS-01307.html
Lost Vikings 2 - Norse BY Northwest - SLES-00057.html
Love & Destroy - SCPS-10124.html
Love Game's - Wai Wai Tennis - SLPM-86541.html
Love Game's - Wai Wai Tennis 2 (Value 1500) - SLPS-02983.html
Love Hina - Ai Ha Kotoba No Naka Ni - SLPM-86652.html
Love Hina 2 - Kotoba wa Konayuki No Youni - SLPM-86677.html
Love Love Torokko - SLPS-02112.html
Love Para  Lovely Tokyo Para-Para Musume (Fukyuuban 1500 Series) - SLPS-03097.html
Love Therapy - SLPS-01370.html
Lucifer Ring - SLPS-01784.html
Lucky Luke - SLES-00943.html
Lucky Luke - SLUS-00719.html
Lucky Luke Western Fever - SLES-03530.html
Lunar - The Silver Star Story Complete - SLPS-01397-8.html
Lunar - The Silver Star Story Complete - SLUS-00628.html
Lunar 2 Eternal Blue - SLPS-00000.html
Lunar 2 Eternal Blue - SLUS-01071.html
Lunar Wing - SLPM-86777.html
Lunatic Dawn 3 - SLPS-01739.html
Lunatic Dawn Odyssey - SLPS-02420.html
Lupin the3RD Punch The Monkey - SLPS-02805.html
M&M Shell Shocked - SLUS-O1306.html
M[Emu] - Kimi Wo Tsutaete - SLPS-00393.html
Mach Go Go Go - SLPS-00295.html
Machine Head - SLUS-00383.html
Machine Hunter - SLUS-00470.html
Machine Hunter(G) - SLES-00831.html
Macross Digital Mission Vf-X - SLPS-00386.html
Macross Digital Mission Vf-X 2 - SLPS-02237.html
Macross Do You Remember Love - SLPS-02005.html
Macross Plus Game Edition - SLPS-02791.html
Mad Panic Coaster - SLPS-00880.html
Mad Stalker - Full Metal Force! - SLPS-00734.html
Madden '97 - SLUS-00018.html
Madden Nfl '98 - SLUS-00516.html
Madden Nfl '99 - SLES-01427.html
Madden NFL '99 - SLUS-00729.html
Madden Nfl 2000 - SLUS-00961.html
Madden Nfl 2000 (German) - SLES-02192.html
Madden NFL 2001 - SLUS-01241.html
Madden NFL 2002 - SLUS-01402.html
Madden NFL 2003 - SLUS-01482.html
Madden NFL 2004 - SLUS-01570.html
Madden NFL 2005 - SLUS-01584.html
Magic - The Gathering - Battlemage - SLUS-00247.html
Magic Carpet - SLES-00211.html
Magic Carpet - SLPS-00587.html
Magic Carpet - SLUS-00029.html
Magical Date - Doki Doki Kokuhaku Daisakusen - SLPS-01091.html
Magical Dice Kids - SCPS-10135.html
Magical Drop - SLPS-00201.html
Magical Drop 3 - SLES-02964.html
Magical Drop 3 Wonderful! - SLPS-01918.html
Magical Hoppers - SLPS-00737.html
Magical Medical - SLPM-86099.html
Magical Zunou Power!! Party Selection (Vap Best Thanks 1800) - SLPS-02552.html
Magnetic Power Microman 2000 - SLPS-02490.html
Maha Go! Go! Go! - SLPS-00000.html
Mahjong [Hyper Value 2800] - SLPM-86292.html
Mahjong de Asobo - SLPS-02995.html
Mahjong Goku Tenjiku '99 - SLPS-02098.html
Mahjong II [Superlite 1500 Series] - SLPM-86258.html
Mahjong Kurabu [1300 Yen Series] - SLPS-02080.html
Mahjong Station Mazin - Mashin - SLPS-00005.html
Mahjong Taikai II Special - SLPS-00603.html
Mahjong Yarouze! - SLPM-86173.html
Mahjong Youchien - Tamago-Gumi R - Jong For Beginners - SLPS-02546.html
Mahjong Youchien Tamago-Gumi 2 - Taikai e Ikou! - SLPS-02956.html
Mahou Shoujo Fancy Coco - SLPS-00460.html
Mahou Tsukai Ni Naru Houhou - SLPS-01754.html
Mainichi Neko Youbi - SLPS-01249.html
Ma-Jyan de Pon! Hanahuda de Koi! Our Graduation - SLPS-02576.html
Makeruna Makendo 2 - SLPS-00128.html
Manic Game Girl - SLPM-88501.html
Marby Baby Story - SLPS-01738.html
Marionette Company - SLPS-02058.html
Marionette Company 2 - SLPS-00000.html
Marl Jong!! [Limited Edition] - SLPS-03537.html
Martial Beat - SLPM-87014.html
Martial Beat 2 - SLPM-87148-9.html
Martian Gothic Unification - SLES-01350.html
Martian Gothic Unification - SLUS-01148.html
Martian Gothic Unification (German) - SLES-02998.html
Marvel Super Heroes - SLES-00932.html
Marvel Super Heroes - SLPS-00763.html
Marvel Super Heroes - SLUS-00257.html
Marvel Super Heroes vs Street Fighter - EX Edition - SLPS-01915.html
Marvel Super Heroes vs Street Fighter - SLES-01792.html
Marvel Super Heroes vs Street Fighter - SLUS-00793.html
Marvel Vs Capcom-Clash Of The Superheroes - SLES-02305.html
Marvel vs. Capcom - Clash of Super Heroes - EX Edition - SLPS-02368.html
Marvel Vs. Capcom-Clash Of The Superheroes - SLUS-00000.html
Mary Kate & Ashley - Crush Curse - SLUS-01386.html
Mary Kate & Ashley - Winning Circle - SLUS-01362.html
Mary Kate &Ashley - Magical Mistery Mall - SLUS-01121.html
Mary King's Riding Star - SLES-02379.html
Mass Destruction - SLES-00098.html
Mass Destruction - SLUS-00462.html
Master of Monsters - Disciples of Gaia - SLES-00244.html
Master of Monsters - Disciples of Gaia - SLUS-00595.html
Masters - Shin Harukanaru Augusta - SLPS-00703.html
Masumon Kids - The Another World Of Master Of Monsters - SLPS-01426.html
Mat Hoffman Pro Bmx - SLUS-01113.html
Mat Hoffman's Pro BMX (German) - SLES-03219.html
Mat Hoffman's Pro BMX (UK) - SLES-03217.html
Matsumoto Reiji - Story of the Galaxy Express 999 - SLPS-03220.html
Mawatte mucho - SCPS-45242.html
Max Power Racing - SLES-01694.html
Max Surfing 2 - SLPS-02871.html
Maximum Force - SLES-01001.html
Maximum Force - SLUS-00503.html
Maxracer - SLPS-00795.html
Maze Heroes - SLPS-03490.html
Mdk - SCPS-10052.html
Mdk - SLES-00599.html
Mdk - SLUS-00426.html
Mechwarrior 2 - SLUS-00401.html
Mechwarrior 2 (German) - SLES-00375.html
Mechwarrior 2 (Uk) - SLES-00340.html
Medal Of Honor (German) - SLES-02472.html
Medal Of Honor (Uk) - SLES-00000.html
Medal Of Honor Underground - SLUS-01270.html
Medal of Honor Underground (German) - SLES-03126.html
Medal of Honor Underground (UK) - SLES-03124.html
Medal Of Honour - SLUS-00000.html
Medarot R - Parts Collection - SLPS-02635.html
Medarot R - SLPS-02414.html
Medievil - SCUS-94227.html
Medievil - Yomigaetta Gallowmere no Yuusha - SCPS-10081.html
Medievil (French) - SCES-01492.html
Medievil (German) - SCES-01493.html
Medievil (Spanish) - SCES-01495.html
Medievil (UK) - SCES-00311.html
Medievil 2 - SLUS-00000.html
Medievil 2(E-F-G) - SCES-02544.html
Medievil II (SpanishItalianPortuguese) - SCES-02545.html
Megaman 8 - SLES-01064.html
Megaman 8 - SLUS-00453.html
Megaman Battle & Chase - SLES-00766.html
Megaman Legends - SLES-01485.html
Megaman Legends - SLUS-00603.html
Megaman Legends 2 - SLES-03556.html
Megaman Legends 2 - SLUS-01140.html
Megaman X3 - SLES-00503.html
Megaman X4 - SLES-01176.html
Megaman X4 - SLUS-00561.html
Megaman X5 - SLES-03557.html
Megaman X5 - SLUS-01334.html
Megaman X6 - SLUS-00000.html
Megami Ibunroku Persona  - SLPS-00500.html
Megatudo 2096 - SLPS-00435.html
Meguri Aishite - SLPS-01714.html
Meisha Retsuden Greatest 70's - SLPS-01153.html
Meitantei Conan - Saikou No Aibou - SLPS-03425.html
Melty Lancer - Ginga Shoujo Keisatsu - SLPS-00282.html
Melty lancer - The Third Planet - SLPM-86231 - SLPM-86232.html
Melty Lancer Re-Inforce - SLPS-01147 - SLPS-01148.html
Memorial Star Series-Sunsoft Vol.1 - Ikki & Super Arabian - sSLPS-03135.html
Memorial Star Series-Sunsoft Vol.2 - Route 16 -turbo & Atlantis no nazo - sSLPS-03186.html
Memorial Star Series-Sunsoft Vol.3 - Madoola no Tsubasa & Toukaidou Gojuusan Tsugi - SLPS-03366.html
Memorial Star Series-Sunsoft Vol.4 - Chou wakusei senki metafight & Lipple island - SLPS-03382.html
Memorial Star Series-Sunsoft Vol.5 - Raf world & Hebereke - SLPS-03397.html
Memorial star Series-Sunsoft Vol.6 - Battle formula & Gimmick! - SLPS-03486.html
Memories Off - SLPS-02296 - SLPM-86583.html
Memories Off 2nd - SLPS-03289 - SLPS-03290 - SLPS-03291 - SLPS-03292 - SLPS-03293.html
Men In Black (France) - SLES-01199.html
Men In Black (German) - SLES-01200.html
Men In Black (Uk) - SLES-01047.html
Men In Black The Series - Crashdown - SLUS-01387.html
Men in Black the Series - Crashdown (German) - SLES-03521.html
Men in Black the Series - Crashdown (Spanish) - SLES-03523.html
Menkyo O Torou (Get The License) - SLPS-02685.html
Meremanoid - SLPS-01664.html
Mermaid no Kisetsu Curtain Call - SLPM-87108.html
Merriment Carrying Caravan - SLPS-01493.html
Metal Angel 3 - SLPS-00867.html
Metal Fist - SLPS-01164.html
Metal Gear Solid - SLPM-86114.html
Metal Gear Solid - SLUS-00594.html
Metal Gear Solid - Special Missions - SLES-02136.html
Metal Gear Solid - VR Missions - SLUS-00957.html
Metal Gear Solid (French) - SLES-01506 - SLES-11506.html
Metal Gear Solid (German) - SLES-01507 - SLES-11507.html
Metal Gear Solid (Italian) - SLES-00000.html
Metal Gear Solid (Spanish) - SLES-01734.html
Metal Gear Solid (Uk) - SLES-01370.html
Metal Gear Solid Integral - SLPM-86247-9.html
Metal Jacked - SLPS-00008.html
Metal Slug - Super Vehicle 001 - SLPS-00950.html
Metal Slug - Super Vehicle 001 {SNK Best Collection} - SLPM-86315.html
Metal Slug X - SLPM-86456.html
Metal Slug X - SLUS-01212.html
Metal Slug X (SNK Best Collection) - SLPS-03449.html
Metamor Panic Doki Doki Doki Doki Youma Basutazu - SLPS-00039.html
Meta-Ph-List - Gamma X 2097 - SLPS-00680.html
Mezase! Senkyuuou - SLPS-00313.html
Michael Schumacher World Racing Cart - SLES-03931.html
Michelin Rally Masters - SLUS-01229.html
Michelin Rally Masters (E-G-SW) - SLES-01545.html
Michinoku Hisen Koimonogatari - SLPS-00941.html
Michinoku Hitou Koimonogatari Kai - SLPS-02502.html
Mickey's Wild Adventure - SCES-00163.html
Micro Machines V3 - SLES-00016.html
Micro Machines V3 - SLPS-01111.html
Micro Machines V3 - SLUS-00559.html
Micro Maniacs - SLES-01921.html
Micro Maniacs - SLUS-01129.html
Midnight In Vegas - SLES-02499.html
Midnight Run - Road Fighter 2 - SLPM-86022.html
Midnight Run - SLES-00590.html
Migakura Shoujo Tanteidan - SLPS-01611.html
Mighty Hits - SLPS-00583.html
Mighty Hits Special - SLES-02244.html
Mighty Hits Special [Pop Collection 1280Yen Vol.4] - SLPS-02165.html
Mike Tyson Boxing - SLES-02839.html
Mike Tyson Boxing - SLUS-01162.html
Milano No Arubaito Collection  - SLPS-02143.html
Milky Seasons - SLPS-03367.html
Mille Miglia - SLES-02826.html
Millenium Soldier Expendable - SLUS-01075.html
Millennium Soldier Expendable - SLES-01716.html
Million Classic - SLPS-01609.html
Mini Moni - Dice de Pyon! - SLPM-87015 - SLPM-87201.html
Mini-Yonku Bakusou Kyoudai Rettsu & Go!! Wgp Hyper Heat - SLPS-01078.html
Minna no Golf  - SCPS-10042.html
Minna no Golf 2 - SCPS-10093.html
Miracle Jim no - Bassing Beat 2 - SLPS-02859.html
Miracle Jumpers - SLPS-01224.html
Miracle Space Race - SLUS-01556.html
Misa no Mahou Monogatari - Heartful Memories - SLPS-01276.html
Misaki-Agressive - SLPS-01474.html
Miss Spider Tea Party - SLUS-01123.html
Missile Command - SLUS-00992.html
Missile Command (GermanFrench) - SLES-02482.html
Mission - Impossible - SLES-01906.html
Mission - Impossible - SLUS-01106.html
Missland - SLPS-00047.html
Missland 2 - SLPS-01715.html
Mitouhou E No Chousen Alps-Hen - SLPS-00662.html
Mitsumete Knight - SLPM-86068.html
Mitsumete Knight R - SLPM-86134.html
Mizuki Shigeru No Yokai Butouden - SLPS-00806.html
Mizzurna Falls  - SLPS-01783.html
MLB 98 - SCUS-94170.html
MLB 99 - SCUS-94233.html
MLB 2000 - SCUS-94359.html
MLB 2001 - SLUS-00000.html
MLB 2002 - SCUS-94638.html
MLB 2003 - SCUS-94653.html
MLB 2004 - SCUS-94689.html
MLB 2005 - SCUS-94692.html
MLB Pennant Race - SCUS-94507.html
Mobil 1 Rally Championship - SLES-02574.html
Mobil 1 Rally Championship - SLUS-01103.html
Mobile Armor - SLUS-01469.html
Mobile Police Patlabor - SLPS-02239.html
Mobile Suit Gundam - Perfect One Year War - SLPS-00920.html
Mobile Suit Gundam Char Counter Attack - SLPS-01724 - SLPS-03259.html
Mobile Suit Gundam Version 2.0 - SLPS-00281.html
Mobile Suit Z Gundam - SLPS-01142-3.html
Moho - SLES-02830.html
Momotarou Densetsu - SLPS-01785.html
Momotarou Densetsu 7 - SLPS-01156.html
Momotarou Densetsu V - SLPS-02456.html
Momotarou Matsuri - SLPM-86888.html
Monaco Gran Prix - SLUS-00834.html
Monkey Hero - SLES-01965.html
Monkey Hero - SLUS-00765.html
Monkey Magic - SLPS-02583.html
Monkey Magic - SLUS-00930.html
Monopoly - SLES-00945.html
Monopoly - SLUS-00507.html
Monster Bass - SLUS-01490.html
Monster Collection - Kamen no Madoushi  - SLPS-02245.html
Monster Complete World - SLPS-00000.html
Monster Farm - Battle Card Professional - SLPS-02653.html
Monster Farm - SLPS-00910.html
Monster Farm 2 - SLPS-01906.html
Monster Punish - SLPS-02491.html
Monster Racer - SLES-03246.html
Monster Rancher - SCES-02872.html
Monster Rancher - SLUS-00568.html
Monster Rancher 2 - SLUS-00917.html
Monster Rancher Battle Card Ep 2 - SLUS-01178.html
Monster Rancher Hoop A Bout - SLUS-00000.html
Monster Trucks - SLES-00314.html
Monsterseed - SLES-01540.html
Monsterseed - SLUS-00000.html
Monsterseeds - SLPS-01572.html
Monte Carlo Games Compendium - SLES-03813.html
Moon Remix Rpg - SLPS-01031.html
Mori No Oukoku - Kingdom Of Forest - SLPS-01861.html
Moritaka Chisato - Safari Tokyo - SLPM-86130-1.html
Mort The Chicken - SLES-02712.html
Mort The Chicken - SLUS-01021.html
Mortal Kombat - Special Forces - SLES-02338.html
Mortal Kombat - Special Forces - SLUS-00824.html
Mortal Kombat 2 - SLPS-00444.html
Mortal Kombat 3 - SCES-00060.html
Mortal Kombat 3 - SIPS-60006.html
Mortal Kombat 3 - SLUS-01126.html
Mortal Kombat 4 - SLES-01349.html
Mortal Kombat 4 - SLUS-00605.html
Mortal Kombat Mythologies - Sub Zero - SLES-01020.html
Mortal Kombat Mythologies - Sub Zero - SLUS-00476.html
Mortal Kombat Trilogy - SLES-00528.html
Mortal Kombat Trilogy - SLPS-00791.html
Mortal Kombat Trilogy (Version 1.0) - SLUS-00330.html
Moto Racer - SLES-00469.html
Moto Racer - SLUS-00498.html
Moto Racer 2 - SLES-01184.html
Moto Racer 2 - SLPS-02040.html
Moto Racer 2 - SLUS-00738.html
Moto Racer World Tour - SCES-03037.html
Moto Racer World Tour - SLUS-01321.html
Motocross Mania - SLES-03325.html
Motocross Mania - SLUS-01357.html
Motocross Mania 2 - SLES-04098.html
Motocross Mania 2 - SLUS-01531.html
Motor Mash  - SLES-00310.html
Motor Toon Grand Prix - SCPS-10001.html
Motor Toon Grand Prix - SCUS-94355.html
Motor Toon Grand Prix 2 - SCES-00245.html
Motor Toon Grand Prix 2 - SCPS-10018-9.html
Motorhead - SLES-00556.html
Motorhead - SLUS-00717.html
Mouri Motonari - Chikai no Sanshi - SLPS-01285.html
Mr Driller - SCES-02771.html
Mr Driller - SLPS-02600.html
Mr Driller - SLUS-01111.html
Mr Driller G - SLPS-03336.html
Mr Prospector - Horiate-Kun - SLPS-02226.html
Ms Pacman Maze Madness - ScES-03805 - ScES-03806 - ScES-03807.html
Ms Pacman Maze Madness - SLUS-01018.html
Mtb Dirt Cross - SLPS-01467.html
Mtv Pure Ride - SLUS-00000.html
MTV Sports - Pure Ride - SLES-03162.html
Mtv Sports - Snowboarding - SLES-02353.html
Mtv Sports - Snowboarding - SLUS-00990.html
Mtv Sports Skateboarding - SLES-03133.html
Mtv Sports T.J. Lavin's Ultimate Bmx - SLES-03430.html
Mtv Sports T.J. Lavin's Ultimate Bmx - SLUS-01233.html
MTV'S Celebrity Deathmatch - SLES-03967.html
Muppet Monster Adventure - SLUS-00000.html
Muppet Monster Adventure (German) - SCES-03091.html
Muppet Monster Adventure (Spanish) - SLES-03093.html
Muppet Monster Adventure (UK) - SCES-02403.html
Muppet Race Mania - SLUS-01237.html
Muppet Racemania (German) - SCES-02484.html
Murakoshi Seikai no Bakuchou Nihon Rettou - SLPS-01392.html
Murakoshi Seikai no Bakuchou Nihon Rettou 2 - SLPS-02890.html
Mushi no idokoro - SLPS-00375.html
Mushi Taro - SLPS-02816.html
Muteki-Oh Tri-Zenon - SLPM-86790.html
My Dream - On Air - SLPS-00996-7.html
My Garden - SLPS-02213.html
Mystic Ark Maboroshi Gekijyo - SLPM-86147.html
Mystic Mind - Yureru Omoi - SLPS-01562.html
N2O - Nitrous Oxide - SLUS-00637.html
N20 - Nitrous Oxide - SLES-00809.html
Nagano Winter Olympics '98 - SLES-00999.html
Nagano Winter Olympics '98 - SLUS-00591.html
Nage Libre - Rasen No Soukoku  - SLPS-00692.html
Najavu No Daibouken - My Favourite Namjatown - SLPM-86601.html
Namco Anthology vol.01 - SLPS-01220.html
Namco Anthology Vol.02 - SLPS-01221.html
Namco Mahjong Sparrow Garden - SLPS-00074.html
Namco Museum Vol. 1 - SCES-00243.html
Namco Museum Vol. 1 - SLUS-00215.html
Namco Museum Vol. 2 - SCES-00267.html
Namco Museum Vol. 2 - SLPS-00209.html
Namco Museum Vol. 3 - SCES-00268.html
Namco Museum Vol. 3 - SLUS-00398.html
Namco Museum vol.1 - SLPS-00107.html
Namco Museum Vol.2 - SLUS-00216.html
Namco Museum vol.3 - SLPS-00390.html
Namco Museum vol.4 - SLPS-00540.html
Namco Museum vol.4 - SLUS-00416.html
Namco Museum Vol.5 - SCES-00702.html
Namco Museum vol.6 Encore - SLPS-01050.html
Namco Musuem Vol. 5 - SLPS-00705.html
Namco Musuem Vol. 5 - SLUS-00417.html
Namco Soccer Prime Goal - SCES-00266.html
Namco Tennis Smash Court - SCES-00263.html
Naniwa Ninyuu Michi - Aoki Yuuji no Seken Munazanyou - SLPS-03049.html
Naniwa no Akindo - Futte Nanbo no Saikoro Jinsei - SLPS-00768.html
Naniwa Wangan Battle - SLPS-00000.html
Nanotek Warrior - SLES-00329.html
Nanotek Warrior - SLUS-00325.html
Naruto - SLPS-03553.html
Nascar 98 - Collector's Edition - SLUS-00647.html
Nascar 98 - SLUS-00521.html
Nascar 99 - SLUS-00740.html
Nascar 99 Legacy - SLUS-00883.html
Nascar 2000 - SLES-02191.html
Nascar 2000 - SLUS-00962.html
Nascar 2001 - SLUS-01265.html
Nascar Heat - SLUS-01166.html
Nascar Racing - SLUS-00374.html
Nascar Rumble - SLUS-01068.html
Nascar Thunder 2002 - SLUS-01403.html
Nascar Thunder 2004 - SLUS-01571.html
Navit - SLPS-01530.html
Nazo-Oh - SLPS-00447.html
NBA Basketball 2000 - SLUS-00926.html
Nba Fast Break '98 - SLUS-00000.html
NBA Hangtime - SLUS-00329.html
NBA Hoopz - SLES-03362.html
NBA Hoopz - SLUS-01331.html
Nba In The Zone - SLUS-00048.html
NBA in the zone 2 - SLES-00560.html
NBA in the zone 2 - SLUS-00294.html
Nba In The Zone '98 - SLUS-00445.html
NBA in the zone '99 - SLUS-00791.html
Nba In The Zone 2000 - SLUS-01028.html
Nba Jam Extreme - SLES-00529.html
Nba Jam Extreme - SLUS-00388.html
Nba Jam T.E. - SLES-00068.html
Nba Jam T.E. - SLUS-00002.html
Nba Live '96 - SLUS-00060.html
NBA Live '97 - SLUS-00267.html
Nba Live '98 - SLES-00906.html
Nba Live '98 - SLUS-00523.html
Nba Live '99 - SLUS-00736.html
Nba Live '99 (German) - SLES-01455.html
Nba Live 2000 - SLUS-00000.html
Nba Live 2000 (German) - SLES-02360.html
Nba Live 2001 - SLUS-01271.html
NBA Live 2002 - SLUS-01416.html
NBA Live 2002(Spanish) - SLES-03722.html
NBA Live 2003 - SLUS-01483.html
NBA Power Dunkers 3 - SLPM-86060.html
Nba Powerdunkers - SLPS-00000.html
Nba Pro '98 - SLES-00882.html
Nba Pro '99 - SLES-01970.html
Nba Shootout - SCUS-94500.html
Nba Shootout '97 - SCUS-94552.html
NBA Shootout 98 - SCUS-94171.html
NBA Shootout 2000 - SCUS-94561.html
NBA Shootout 2001 - SCUS-94581.html
NBA Shootout 2002 - SCUS-94641.html
NBA Shootout 2003 - SCUS-94673.html
NBA Show Time - NBA on NBC - SLUS-00948.html
NBA Show TimeNBA on NBC - SLES-02336.html
Ncaa Basketball Final Four '97 - SLUS-00142.html
Ncaa Final Four '99 - SCUS-94264.html
NCAA Final Four 2000 - SCUS-94562.html
NCAA Final Four 2001 - SCUS-94579.html
NCAA Football 98 - SLUS-00514.html
NCAA Football 99 - SLUS-00688.html
NCAA Football 2000 - SLUS-00932.html
NCAA Football 2001 - SLUS-01219.html
Ncaa Gamebreaker - SLUS-00000.html
Ncaa Gamebreaker '98 - SCUS-94172.html
NCAA Gamebreaker '99 - SCUS-94246.html
Ncaa Gamebreaker 2000 - SCUS-94557.html
Ncaa Gamebreaker 2001 - SCUS-94573.html
NCAA March Madness '98 - SLUS-00526.html
NCAA March Madness '99 - SLUS-00805.html
NCAA March Madness 2000 - SLUS-01023.html
NCAA March Madness 2001 - SLUS-01320.html
Need For Speed - Porsche Unleashed - SLUS-01104.html
Need For Speed - Road & Track - SLES-00223.html
Need For Speed - V-Rally - SLUS-00590.html
Need For Speed - V-Rally 2 - SLUS-01003.html
Need For Speed 2 - SLES-00658.html
Need For Speed 2 - SLUS-00276.html
Need For Speed 3 - Hot Pursuit - SLUS-00620.html
Need For Speed 3 - SLES-01154.html
Need For Speed 4 - Road Challenge (E-I-S) - SLES-01790.html
Need For Speed 4 - Road Challenge (E-Sw) - SLES-01788.html
Need For Speed 4 - Road Challenge (F-G) - SLES-01789.html
Need For Speed 4 High Stakes - SLUS-00826.html
Need For Speed 5 -  Porsche 2000 (E-G-SW) - SLES-02689.html
Need For Speed 5 -  Porsche 2000 (F-I-S) - SLES-02700.html
Nekketsu Oyako - Hot Blooded Family - SLPS-00006.html
Neko Zamurai - SLPS-01543.html
Nemu Lu Mayu - Sleeping Cocoon - SLPS-02597.html
Neo Atlas - SLPM-87240.html
Neo Atlas 2 - SLPS-02238.html
Neo Planet - SLPS-00323.html
Neon Genesis Evangelion  - Girlfriend of Steel is - SLPS-01377-8.html
Neorude - SLPS-00823.html
Neorude 2 - SLPS-01112.html
Neorude Kizamareta Monshou - SLPS-02417.html
Nessa No Hoshi - SLPS-00913.html
Neues - SLPS-02559.html
Newman Haas Racing - SLUS-00602.html
Next King - Koi no Sennen Oukoku - SLPS-00859.html
Nfl Blitz - SLUS-00617.html
NFL Blitz 2000 - SLUS-00861.html
NFL Blitz 2001 - SLUS-01146.html
Nfl Full Contact - SLUS-00000.html
Nfl Gameday - SCUS-94505.html
NFL Gameday 97 - SCUS-94510.html
NFL Gameday 98 - SCUS-94173.html
NFL Gameday 99 - SCUS-94234.html
NFL Gameday 2000 - SCUS-94556.html
NFL Gameday 2001 - SCUS-94575.html
NFL Gameday 2002 - SCUS-94639.html
NFL Gameday 2003 - SCUS-94665.html
NFL Gameday 2004 - SCUS-94690.html
NFL Quarterback Club '97 - SLUS-00011.html
Nfl Xtreme - SCUS-94245.html
NFL Xtreme 2 - SCUS-94420.html
N-Gauge Unten Kibun Game Gatan Goton - SLPM-86217.html
N-Gen Racing - SLES-02086.html
N-Gen Racing - SLUS-01155.html
NHL - Blades of Steel - SLUS-00835.html
NHL 97 - SLUS-00030.html
Nhl '98 - SLUS-00519.html
Nhl '98 (German) - SLES-00512.html
NHL '99 - SLES-01445.html
Nhl '99 - SLUS-00735.html
Nhl '99 (German) - SLES-01458.html
NHL 2000 - SLUS-00965.html
Nhl 2000 (German) - SLES-02227.html
NHL 2001 - SLUS-01264.html
Nhl Blades Of Steel 2000 - SLES-02514.html
Nhl Breakaway '98 - SLUS-00391.html
Nhl Championship 2000 - SLES-02298.html
Nhl Face Off - SCUS-94504.html
NHL Face Off 97 - SCUS-94550.html
Nhl Face Off '98 - SCUS-94174.html
Nhl Face Off '99 - SCES-01736.html
NHL Face Off 99 - SCUS-94235.html
NHL Face Off 2001 - SCUS-94577.html
NHL Faceoff 2000 - SCES-02451.html
NHL Faceoff 2000 - SCUS-94558.html
Nhl Open Ice - SLUS-00327.html
Nhl Powerplay '98 - SLUS-00528.html
NHL Rock the Ring - SLES-02794.html
NHL Rock the Ring - SLUS-01085.html
Nichibutsu Mahjong - SLPS-00038.html
Nicktoon4S Racing - SLUS-01047.html
Night Head The Labyrinth - SLPS-00111.html
Night Raid - SLPM-87048.html
Night Striker - SLPS-00050.html
Nightmare Creatures - SCES-00582.html
Nightmare Creatures - SIPS-60027.html
Nightmare Creatures - SLUS-00582.html
Nightmare Creatures (German) - SCES-00684.html
Nightmare Creatures 2 - SLES-02571.html
Nightmare Creatures 2 - SLUS-01112.html
Nijiiro Dodgeball - SLPM-87039.html
Nikakudori Deluxe (Nice Price Series Vol.11) - SLPS-03431.html
Ningio No Rakuin - SLPS-02854.html
Ninja - L'ombre Des Tenebres (French) - SLES-00757.html
Ninja - Shadow Of Darkness - SLUS-00435.html
Ninja - Shadow Of Darkness (German) - SLES-00758.html
Ninja - Shadow Of Darkness (Uk) - SLES-01554.html
Ninja - Shadow Of Darkness(Spa-Ita) - SLES-00756.html
Ninja Hayate - SLPS-00384.html
Ninja Jajamaru - SLPS-00494.html
Ninku - SLPS-00172.html
Ninpu Sentai Harikenger - SLPS-03493.html
Nippon Golf Kyoukai KanshuuDouble Eagle - SLPS-00658.html
Nippon Sumo Kyoukai Kounin - Nihon Ohzumo - SLPM-86575.html
Nishijin Pachinko Tengoku Vol.3 - SLPS-01761.html
No Fear Downhill Mountain Bike Racing - SLES-00849.html
No Fear Downhill Mountain Bike Racing - SLUS-01000.html
No One Can Stop Mr. Domino - SLES-01354.html
No One Can Stop Mr. Domino - SLUS-00804.html
No-Appointment Gals Olympos Syokaiban - SLPS-00493.html
Nobunaga no Yabou - Reppuuden - SLPM-86300.html
Nokl Not Digital - SLPS-00316 - SLPS-00317 - SLPS-91043 - SLPS-91044.html
Noon - New Type action game - SLPM-86063.html
Norse BY Northwest - The Lost Vikings 2 - SLUS-00466.html
Not Tresure Hunter - SLPS-00274.html
Novastorm - SCES-00011.html
Novastorm - SCUS-94404.html
Novastorm - SLPS-00314 - SLPS-00315.html
Nuclear Strike - SLUS-00518.html
Nuclear Strike (German) - SLES-00921.html
Nuclear Strike (Uk) - SLES-00919.html
Nupa - Numeric Paint Puzzle - SLPS-00294.html
Nurse Story - SLPS-01939.html
Nya Nyan Ga Nyan - Light Fantasy Gaiden - SLPS-02336.html
O.D.T. - SLUS-00698.html
O.D.T. (French) - SLES-01409.html
O.D.T. (German) - SLES-01410.html
O.D.T. (Spanish) - SLES-01412.html
O.D.T. (Uk) - SLES-01391.html
Oasis Road - SLPS-01899.html
Ochan no Oekaki Logic 2 - Color mo Arimasuwa - SLPS-00345.html
Oda Nobunaga Den - SLPS-01595.html
Oddworld - Abe's Exoddus - SLUS-00710 - SLUS-00731.html
Oddworld - Abe's Exoddus (German) - SLES-01503 - SLES-11503.html
Oddworld - Abe's Exoddus (Spain) - SLES-01505-11505.html
Oddworld - Abe's Oddysee (French) - SLES-00838.html
Oddworld - Abe's Oddysee (German) - SLES-00839.html
Oddworld - Abe's Oddysee (Uk) - SLES-00664.html
Oddworld - Abe's Oddysee Version 1.0 - SLUS-00190.html
Oddworld - Abe's Oddysee Version 1.1 - SLUS-00000.html
Oddworld L'exode D'Abe (French) - SLES-01502 - SLES-11502.html
Odo Odo Oddity - SLPS-00754.html
Off-World Interceptor Extreme - SLES-00047.html
Off-World Interceptor Extreme - SLUS-00020.html
Ogre Battle Saga - The March of the Black Quuen - SLUS-00467.html
Oh No - SLPS-02764.html
Oha Studio - Dance Dance Revolution - SLPM-86603.html
Oja Majo Do-Re-Mi Dokkaan! Nijiiro Para-Dice - SLPS-03497.html
Ojyousama Express - SLPS-01495.html
Olympic Soccer - SLUS-00156.html
Olympic Summer Games - SLUS-00148.html
Omega Assault - SLES-04051.html
Omega Boost - SCES-02120.html
Omega Boost - SCPS-45399.html
Omega Boost - SCUS-94449.html
Omiaikomandoh Bakappuru Ni Tukkomi Wo - SLPM-86439.html
Omise De Tensyu - SLPS-01876.html
Omizu no Hanamichi - SLPS-02815.html
One  - SLES-00944.html
One - SLPS-01812.html
One - SLUS-00469.html
One Piece Grand Battle - SLES-03807.html
One Piece Mansion - SLES-03723.html
One Piece Mansion - SLUS-01406.html
Oni Zero Fukattsu (Pandora Max Series Vol6) - SLPS-03106.html
Ooedo Huusui Ingaritsu Hanabi 2 - SLPS-02814.html
Option Tuning Car Battle - SLPS-01207.html
Option Tuning Car Battle 2 - SLPS-01857.html
Option Tuning Car Battle Spec R - SLPS-02587.html
Ore no Ryouri - SCPS-10099.html
Ore no Shikabane wo Koete Yuke  - SCPS-10074.html
Ore! Tomba - SLPS-01144.html
Oshigotoshiki Jinsei Game - SLPS-03056.html
Othello World II - Yume to Michi e no Chousen - SLPS-00136.html
Other Life Azure Dreams - SLPM-00000.html
Otona no Asobi [Nichibutsu Collection 2000) - SLPS-02459.html
Ouji-Sama Lv1 - SLPS-03412.html
Ouji-Sama Lv1.5 - Ouji-Sama no Tamago - SLPS-03534.html
Oukyuu No Hihou Tension - SLPS-00438.html
Out Live - Be Eliminate Yesterday - SLPS-00746.html
Over Drivin' II - SLPS-00895.html
Over Drivin' III - Hot Pursuit - SLPS 01593.html
Over Drivin'Skyline Memorial - SLPS-01024.html
OverBlood - 3D Active Adventure - SLPS-00392.html
Overblood - SLUS-00464.html
Overblood (German) - SLES-00770.html
Overblood (UK) - SLES-00768.html
Overblood 2 - SLES-01879.html
Overblood 2 - SLPS-01261.html
Overblood 2 (German) - SLES-02187.html
Overboard - SLES-00865.html
Pac Man World - SLUS-00439.html
Paca Paca Passion - SLPS-02122.html
Pachi Pachi Saga - SLPS-00288.html
Pachiokun - Pachinko Land Adventure - SLPS-00037.html
Pac-Man World - SLPS-02345.html
Pac-Man World (German) - SCES-02278.html
Pac-Man World (Spanish) - SCES-02280.html
Pac-Man World(UK) - SCES-00934.html
Pajama Sam - You Are What You Eat From Your Head to Your Feet - SLUS-01389.html
PAL - Shinken Densetsu - SLPS-00346.html
Palm Town - SLPS-01820.html
Pandemonium - SLES-00526.html
Pandemonium - SLUS-00232.html
Pandemonium 2 - SLES-00965.html
Pandemonium 2 - SLUS-00578.html
Panekit - Infinitive Crafting Toy Case - SCPS-10096.html
Panel Quiz Attack 25 - SLPS-01162.html
Pangaea (Superlite 1500 Series) - SLPM-86276.html
Panzer Bandit - SLPS-00899.html
Panzer Front - SLES-03339.html
Panzer Front - SLPS-02503.html
Panzer Front - SLUS-01399.html
Panzer General - SLES-00041.html
Panzer General - SLUS-00132.html
Paradise Casino - SLES-04048.html
Paranoia Scape - SLPS-01375.html
Parappa The Rapper - SCES-00743.html
PaRappa The Rapper - SCPS-18002.html
Parappa The Rapper - SCUS-94183.html
Parasite Eve - SLPS-01230 - SCPS-45203 - SCPS-45204.html
Parasite Eve - SLUS-00662 - SLUS-00668.html
Parasite Eve 2 - SLPS-02480 - SLPS-02481.html
Parasite Eve 2 - SLUS-01042-01055.html
Parasite Eve 2 (German) - SLES-02560.html
Parasite Eve 2 (Italian) - SLES-02562.html
Parasite Eve 2 (Spanish) - SLES-02561.html
Parasite Eve 2 (UK) - SLES-02558.html
Paris-Marseille Racing  - SLES-03108.html
Paris-Marseille Racing 2 - SLES-03918.html
Parlor Pro - SLPS-00838.html
Parlor Station - SLPS-01539.html
Parlor! Pro 3 - SLPS-01453.html
Parlor! Pro 4 - SLPS-01646.html
Parlor! Pro 5 - SLPS-01828.html
Parlor! Pro 7 - SLPS-01971.html
Paro Wars - SLPM-86016.html
Parodius - SLES-00036.html
Patriotic Pinball - SLUS-01539.html
Pax Corpus - SLES-00953.html
Peak Performance - SLES-00727.html
Peak Performance - SLUS-00400.html
Penny Racers - SLES-00000.html
Pepsi Man - SLPS-01762.html
Pequeqos Guerreros - SLES-01583.html
Perfect Assasin - SLES-00805.html
Perfect Weapon - SLUS-00341.html
Persona - Revelations - SLUS-00339.html
Persona 2 - Eternal Punishment - SCPS-45495.html
Persona 2 - Eternal Punishment - SLPS-02825.html
Persona 2 - Eternal Punishment - SLUS-01158.html
Persona 2 - Innocent Sin - SLPS-02100.html
Pet in TV with my dear dog - SCPS-10111.html
Pet Pet Pet - SLPS-02292.html
Peter Jacobson Golden Tee Golf - SLUS-01130.html
Pga European Tour Golf - SLES-02061.html
Pga Tour '96 - SLUS-00016.html
Pga Tour '97 - SLUS-00261.html
Pga Tour '98 - SLUS-00517.html
Phat Air Extreme Snowboarding - SLES-01178.html
Philosoma - SCES-00059.html
Philosoma - SCPS-10009.html
Philosoma - SCUS-94403.html
Phix no Daibouken - Phix in the Magnetix World - SLPS-02648.html
Phix The Adventure - SLUS-01523.html
Photo Genic - SLPS-01116.html
Pikinya! Excellent - SLPS-01345.html
Pilot ni Narou! - SLPS-01600.html
Pinball Fantasies Deluxe - SLPS-00482.html
Pink Panther In Pinkadelic Pursuit - SLES-03932.html
Pinobee - SLES-04014.html
Pinobee - SLUS-01494.html
Pinobee no Daibouken [Hudson the Best] - SLPM-87110.html
Pipe Dreams 3D - SLUS-01409.html
Pitball - SLES-00201.html
Pitball - SLUS-00146.html
Pitfall - Beyond the Jungle (German) -  - SLES-00837.html
Pitfall 3D - Beyond The Jungle - SLUS-00254.html
Pitfall 3D - SLPS-01669.html
Plane Crazy - SLES-02087.html
Planet Laika - SLPM-86264.html
Planet Of The Apes - SLES-03844.html
Planet of the Apes - SLUS-01468.html
Play De Oboeru Eitango Deruderu 1700 - [Slpm-89001] - SLPM-89001.html
Play de Oboeru Series - Seikaishi Keyword Deruderu 1800 - SLPS-02696.html
Play Stadium 3 - SLPS-01369.html
Player Manager 99 (German) - SLES-01766.html
Player Manager 2000 - SLES-02325.html
Pocket Dungeon - SCPS-10075.html
Pocket Family - Happy Family Plan - SLPS-02134.html
Pocket Fighter - SLES-01378.html
Pocket Fighter - SLPS-01360.html
Pocket Fighter - SLUS-00653.html
Pocket Muu Muu - SCPS-10076.html
Po'Ed - SLES-00168.html
Po'Ed - SLPS-00437.html
Po'Ed - SLUS-00097.html
Point Blank - SCES-00886.html
Point Blank - SLUS-00481.html
Point Blank 2 - SCES-02180.html
Point Blank 2 - SLUS-00796.html
Point Blank 3 - SCES-03383.html
Point Blank 3 - SLUS-01354.html
Poiter's Point - SLPM-86034.html
Poiter's Point 2 - Sodom's Plan - SLPM-86061.html
Poketan (Grey 5800yen)  - SCPS-10102.html
Polaris Snowcross - SLUS-01033.html
Policenauts - SLPS-00215.html
Pong - SLES-02020.html
Pong - SLUS-00889.html
Pool Hustler - SLES-01688.html
Pool Hustler - SLUS-00758.html
Pop And Tanks - SLPM-86146.html
Pop'n Music - Disney Tunes - SLPS-00000.html
Pop'n Music - SLPM-86183.html
Pop'n Music 2 - SLPM-86294.html
Pop'n Music 3 - SLPM-86415.html
Pop'N'Music - Animation Melody - SLPM-86592.html
Pop'N'Music 4 - SLPM-86649.html
Pop'N'Music 5 - SLPM-86937.html
Pop'N'Music 6 - SLPM-87089.html
Pop'n'Pop  - SLES-01971.html
Popolocrois - SCPS-10023.html
Popolocrois II - SCPS-10111.html
Poporogue - SCPS-10050.html
Popstar Maker - SLES-03657.html
Populous - The Beginning - SLES-01760.html
Populous - The Beginning - SLUS-00277.html
Porsche Challenge - SCES-00409.html
Porsche Challenge - SCUS-94187.html
Porsche Challenge - SIPS-60016.html
Power Diggerz  - SLES-03388.html
Power Move Pro Wrestling - SLUS-00408.html
POWER PLAY - Sports Trivia - SLUS-01445.html
Power Ranger Time Force - SLUS-01351.html
Power Rangers Lightspeed Rescue - SLES-03286.html
Power Rangers Lightspeed Rescue - SLUS-01114.html
Power Rangers Zeo - Full Tilt Battle Pinball - SLUS-00256.html
Power Rangers Zeo - Full Time Battle Pinball - SLPS-00490.html
Power Serve - SLES-00118.html
Power Shovel ni Norou! - SLPM-86629.html
Power Showel - SLUS-01343.html
Powerslave - SLUS-00102.html
Powerspike Pro Beach Volleyball - SLUS-01196.html
Poy Poy - SLES-00785.html
Poy Poy - SLUS-00486.html
Poy Poy 2 - SLES-01536.html
Premier Manager 98 - SLES-00738.html
Premier Manager 2000 - SLES-00000.html
Premier Manager Ninety Nine - SLES-01544.html
Primal Rage - SLES-00140.html
Primal Rage - SLUS-00126.html
Prince Naseem Boxing - SLES-00017.html
Princess Maker - Go!Go! Princess - SLPS-01505.html
Princess Maker - Yumemiru Yousei - SCPS-10032.html
Prism Court - SLPS-01226.html
Prism Land - SLES-03284.html
Prism Land Story - SLPS-01252.html
Prisoner - SLPS-02387.html
Pro 18 - World Tour Golf - SLES-01559.html
Pro 18 - World Tour Golf - SLUS-00000.html
Pro Evolution Soccer 2 - SLES-03946.html
Pro Logic Mahjong Hai-Shin - SLPM-86018.html
Pro Mahjong Kiwame Plus  - SLPS-00402.html
Pro Mahjong Kiwame Plus II - SLPS-01605.html
Pro Mahjong Kiwame Tengensenhen - SLPS-02347.html
Pro Pinball - SLUS-00371.html
Pro Yakyuu Simulation Dugout '99 - SLPS-02333.html
Professional Underground League Of Pain - SCUS-94551.html
Project - Horned Owl - SCUS-94408.html
Project Gaiaray - SLPS-01013.html
Project Overkill - SLES-00500.html
Project Overkill - SLUS-00045.html
Project V6 - SLPS-01260.html
Pro-Pinball - Big Race USA - SLES-01211.html
Pro-Pinball - Big Race USA - SLUS-01260.html
Pro-Pinball - Fantastic Journey - SLES-02466.html
Pro-Pinball - The Web - SLES-00259.html
Pro-Pinball - Timeshock - SLES-00606.html
Pro-Pinball - Timeshock - SLUS-00639.html
Psybadek - SLES-00929.html
Psybadek - SLUS-00730.html
Psychic Force - SLES-00629.html
Psychic Force - SLPS-00520.html
Psychic Force - SLUS-00419.html
Psychic Force 2 - SLES-02557.html
Psychic Force 2 - SLPM-86273.html
Psychic Force Puzzle Taisen - SLPS-01018.html
Psychometrer Eiji - SLPS-01869.html
Pu.Li.Ru.La. - SLPS-00928.html
Puffy - P.S. I Love You - ESPM-70003.html
Pukunpa Joshikousei No Houkago - SLPS-00409.html
Puma Street Soccer - SLES-01203.html
Punky Skunk - SLUS-00579.html
Puppet Zoo Pilomy - SLPS-00149.html
Purumui Purumui - SLPS-02163.html
Pururun with Shape up girls - SLPS-00679.html
Putter Golf - SLUS-01371.html
Puyo Puyo 4 - Car-Kun to Issho - SLPS-02412.html
Puyo Puyo Sun Ketteiban (Expert) - SLPS-01080.html
Puzz Loop - SLPS-00000.html
Puzzle Arena To Shin Den - SLPS-00879.html
Puzzle Bobble 2 - SLPS-00284.html
Puzzle Bobble 3 Dx - SLPS-01065.html
Puzzle Bobble 4 - SLPS-01492.html
Puzzle Star Sweep - SLUS-01307.html
Puzznic - SLES-03915.html
Puzznic - SLUS-01492.html
Q-Bert - SLES-02214.html
Q-Bert - SLUS-00904.html
Qin Shi Huang - The First Emperor - SLPS-00863.html
Qix Neo - SLUS-01561.html
Quake 2 - SLES-01534.html
Quake 2 - SLUS-00757.html
Queens Road - SLPS-00711.html
Quiz Darake no Jinsei Game - SLPS-02282.html
Quiz de Battle [Nice Price Series Vol. 06]  - SLPS-03384.html
Quiz Master Blue [Superlite 1500 Series] - SLPM-86517.html
Quiz Master Red [Superlite 1500 Series] - SLPM-86516.html
Quiz Master Yellow [Superlite 1500 Series] - SLPM-86518.html
Quiz Nanairo Dreams - Nijiiro Maki No Kiseki  - SLPS-00875.html
Quo Vadis - Iberukatsu Seneki - SLPS-00733.html
R4 - Ridge Racer Type 4 - SLPS-01798 - SLPS-01800.html
R4 - Ridge Racer Type 4 - SLUS-00797.html
Race Drivin'A Go! Go! - SLPS-00161.html
Racing Lagoon - SLPS-02038.html
Racingroovy - SLPS-00417.html
Radikal Bikers - SLES-01943.html
Rage Racer - SLES-00650.html
Rage Racer - SLPS-00600.html
Rage Racer - SLUS-00403.html
Rageball - SLES-03511.html
Rageball - SLUS-01461.html
Raging Skies - SCES-00222.html
Raiden Dx - SLPS-00728.html
Raiden Project - SLPS-00013.html
Railroad Tycoon II - SLES-02426.html
Railroad Tycoon II - SLUS-00808.html
Rakugaki Showtime - SLPM-86272.html
Rally Cross - SCUS-94308.html
Rally Cross - SIPS-60022.html
Rally Cross - SLES-00408.html
Rally Cross 2 - SCES-01631.html
Rally Cross 2 - SCUS-94247.html
Rally De Africa - SLPS-02258.html
Rally De Europe - SLPS-02679.html
Ramen Hashi - SLPS-02293.html
Rami-Chan no OOeto Surogoku - Keio Yugekitai Gaiden - SLPS-01546.html
Rampage 2 Universal Tour - SLES-02021.html
Rampage 2 Universal Tour - SLUS-00742.html
Rampage Through Time - SLES-02849.html
Rampage Through Time - SLUS-01065.html
Rampage World Tour - SLES-01011.html
Rampage World Tour - SLUS-00549.html
Ranma 12 - Renaissance - SLPS-00522.html
Rapid Racer - SCES-00394.html
Rapid Racer - SCPS-10060.html
Rapid Reload - SCES-00004.html
Rascal - SLES-00858.html
Rascal - SLUS-00542.html
Rascal Racers - SLUS-01575.html
Rat Attack! - SLES-01103.html
Rat Attack! - SLUS-00656.html
Ray Tracers - SCES-00741.html
Ray Tracers - SLPS-00098.html
Ray Tracers - SLUS-00534.html
Raycrisis - Series Termination - SLUS-01217.html
Raycrisis - SLES-02882.html
Raycrisis - SLPM-86450.html
Rayman - SLES-00049.html
Rayman - SLPS-00026.html
Rayman - SLUS-00005.html
Rayman 2 - SLUS-01235.html
Rayman 2 (E-I-S) - SLES-02906.html
Rayman 2 (F-G) - SLES-02905.html
Rayman Brain Games - SLUS-01265.html
Rayman Junior - Level 1 - SLES-02798.html
Raystorm - SCES-00742.html
Raystorm - SLPS-00678.html
Raystorm - SLUS-00482.html
Razor Freestyle Scooter - SLUS-01322.html
Razor Racing - SLUS-01410.html
Rc De Go - SLPM-86546.html
Rc De Go! - SLES-03068.html
Rc De Go! - SLUS-01285.html
RC Helicopter - SLUS-01376.html
Rc Revenge - SLES-02824.html
RC Revenge - SLUS-01168.html
RC Stunt Copter - SLES-01459.html
RC Stunt Copter - SLUS-00954.html
RC Stunt Copter (German) - SLES-02140.html
Ready 2 Rumble - SLES-02333.html
Ready 2 Rumble - SLUS-00857.html
Ready 2 Rumble Boxing - Round 2 - SLES-02850.html
Ready 2 Rumble Boxing - Round 2 - SLUS-01147.html
Real Bout Dominated Mind - SLPM-86090.html
Real Bout Fatal Fury - SCES-00561.html
Real Bout Garou Densetsu - SLPS-00640.html
Real Robots - Battle Line - SLPS-02139.html
Real Robots - Final Attack - SLPS-01125.html
Reboot - SLUS-00282.html
Reboot (German) - SLES-00924.html
Rebus - SLPS-01343.html
Recipro Heat 5000 - SLPS-00744.html
Red Asphalt - SLUS-00282.html
Reel Fishing - SLUS-00440.html
Reel Fishing II - SLUS-00843.html
Refrain Love - Anata Ni Aitai - SLPS-00753.html
Refrain Love - Anata Ni Aitai [Riverhill Soft Best] - SLPS-02151.html
Refrain Love 2 - SLPS-01840.html
Re-Loaded - SLES-00537.html
Re-Loaded - SLUS-00382.html
Remote Control Dandy - 02243.html
Renai Kouhosei Starlight Scramble - SLPS-01407.html
Renegade Racers - SLES-02274.html
Renegade Racers - SLUS-01012.html
Rescue 24 Hours - SLPS-00572.html
Rescue Copter - SLUS-01507.html
Rescue Shot - SCES-02569.html
Rescue Shot Bubibo - SLPS-02555.html
Resident Evil & Director's Cut - SLUS-00170SLUS-00747.html
Resident Evil & Director's Cut (French) - SLES-00227SLES-00970.html
Resident Evil & Director's Cut (German) - SLES-00228SLES-00971.html
Resident Evil & Director's Cut (UK) - SLES-00200SLES-00969.html
Resident Evil 2 - SLUS-00421 - SLUS-00592.html
Resident Evil 2 (Dualshock Edition) - SLUS-00748.html
Resident Evil 2 (French) - SLES-00973 - SLES-10973.html
Resident Evil 2 (German) - Claire - SLES-10974.html
Resident Evil 2 (German) - Leon - SLES-00974.html
Resident Evil 2 (Italian) - SLES-00975 - SLES-10975.html
Resident Evil 2 (Spanish) - SLES-00976 - SLES-10976.html
Resident Evil 2 (Uk) - SLES-00972 - SLES-10972.html
Resident Evil 3 -  Nemesis (German) - SLES-02531.html
Resident Evil 3 - Nemesis - SLUS-00923.html
Resident Evil 3 - Nemesis (French) - SLES-02530.html
Resident Evil 3 - Nemesis (Spanish) - SLES-02532.html
Resident Evil 3 - Nemesis (Uk) - SLES-02529.html
Resident Evil Survivor - SLES-02732.html
Resident Evil Survivor - SLUS-01087.html
Restaurant Dream - SLPS-01974.html
Retro force - SLES-01661.html
Return Fire - SLES-00177.html
Return Fire - SLUS-00184.html
Reverthion - SLPS-00143.html
Re-Volt - SLES-01973.html
Re-Volt - SLUS-00851.html
Revolution x - SLES-00129.html
Revolution x - SLUS-00012.html
Rhapsody A Musical Adventure - SLUS-01073.html
Ridegear Guybrave - SLPS-00905.html
Ridegear Guybrave 2 - SLPS-01643.html
Ridge Racer - SCES-00001.html
Ridge Racer - SCUS-94300.html
Ridge Racer - SLPS-00001.html
Ridge Racer Revolution - SCES-00242.html
Ridge Racer Revolution - SLPS-00150.html
Ridge Racer Revolution - SLUS-00214.html
Ridge Racer Type 4 - SCES-01706.html
Riot - SLES-00472.html
Riot Stars - SLPS-00829.html
Rise 2 - Resurrection - SLES-00164.html
Rise 2 - Resurrection - SLUS-00186.html
Rise Of Robots 2 - Resurrection - SLPS-00249.html
Rising Zan - The Samurai Gunman - SLES-01779.html
Rising Zan - The Samurai Gunman - SLPS-01691.html
Rising Zan - The Samurai Gunman - SLUS-00829.html
Risk - SLES-00707.html
Risk - SLUS-00616.html
Rittai Ninja Katsugeki Tenchu - Shinobi Gaisen - SLPS-01901.html
Rittai Ninja Katsugeki Tenchu - Shinobi Haykusen - SLPS-02400.html
Rittai Ninja Katsugeki Tenchu - SLPS-01272.html
Rittai Ninja Katsugeki Tenchu 2 - SLPS-03040.html
Rival Schools - Unified By Fate - SLES-01436-11436.html
Rival Schools Arcade And Evolution - SLUS-00681-00771.html
Road & Tracks Presents - Over Drivin' DX - SLPS-00327.html
Road & Tracks Presents - The Need for Speed - SLUS-00204.html
Road Rash - Jailbreak - SLES-02552.html
Road Rash - Jailbreak - SLUS-01053.html
Road Rash - SLES-00158.html
Road Rash - SLPS-000243.html
Road Rash - SLUS-00035.html
Road Rash 3D - SLES-00910.html
Road Rash 3D - SLUS-00524.html
Road Rash 3D (French) - SLES-01157.html
Road Rash 3D (German) - SLES-01158.html
Roadsters - SLES-02326.html
Roadsters - SLUS-01024.html
Robbit Mon Dieu - SCPS-10103.html
Robin Hood the Siege - SLES-04110.html
Robin Lloyd No Daibouken - SLPS-02501.html
Robo Pit - SLPS-00000.html
Robo Pit - SLUS-00316.html
Robo Pit 2 - SLES 04054.html
Robo Pit 2 - SLUS-01563.html
Robocod - James Pond II - SLES-04112.html
Robo-Pit 2 - SLPS-00000.html
Robotron x - SLES-00539.html
Robotron x - SLUS-00252.html
Rock'Em Sock'Em Robots Arena - SLUS-01124.html
Rocket Power - Team Rocket Rescue - SLES-03702.html
Rocket Power - Team Rocket Rescue - SLUS-01353.html
Rockman 1 Complete Works - SLPS-02220.html
Rockman 2 - Dr Wily no nazo - SLPS-02255.html
Rockman 3 - Dr Wily no saigo! - SLPS-02262.html
Rockman 4 - Aratanaru Yabou!! - SLPS-02324.html
Rockman 5 - Blues no wana! - SLPS-02338.html
Rockman 6 - Shijou Saidai no Tatakai!! - SLPS-02379.html
Rockman 8 - SLPS-00630.html
Rockman Battle & Chase - SLPS-91093.html
Rockman Dash - SLPS-01141.html
Rockman Dash 2 - SLPS-02711.html
Rockman X3 - SLPS-00283.html
Rockman X4 - SLPS-00902.html
Rockman x5 - SLPM-86666.html
Rockman X6 - SLPM-86959.html
Rogue Trip - Vacation 2012 - SLES-01417.html
Rogue Trip - Vacation 2012 - SLUS-00643.html
Roland Garros 2001 - SLES-03449.html
Roll Away - SLUS-00724.html
Rollcage - SLES-01660.html
Rollcage - SLUS-00800.html
Rollcage Stage II - SCES-01922.html
Rollcage Stage II - SLUS-00867.html
Romance of the Three Kingdoms IV - Wall of Fire - SLUS-00195.html
Romance Of The Three Kingdoms VI - SLUS-00918.html
Romance Wa Ken No Kagayaki 2 - SLPM-87111 - SLPM-87112.html
Ronin Blade - SLES-02094.html
Rosco Mcqueen - Firefighter Extreme - SCES-00257.html
Rosco Mcqueen - Firefighter Extreme - SLUS-00750.html
Roswell Conspiracies-Aliens, Myths & Legends - SLES-02591.html
Roswell Conspiracies-Aliens, Myths & Legends - SLUS-01062.html
Rox - SLPS-01691.html
Rpg Maker - SLUS-00000.html
RPG Tsukuru 4 - SLPS-02861.html
R-Rock'n Riders - SLPS-02047.html
Rtl Skispringen 2002 - SLES-03772.html
R-Type Delta - SCES-01762.html
R-Type Delta - SLPS-01688.html
R-Type Delta - SLUS-00877.html
R-Types - SLES-01355.html
R-Types - SLPS-01236.html
R-Types - SLUS-00753.html
Rubbish Blazon (Pandora Max Series Vol.3) - SLPS-02637.html
Ruff & Tumble (German) - SLES-01939.html
Rugrats - Auf der Suche nach Reptar (German) - SLES-01670.html
Rugrats - Excursion al Estudio - SLES-02911.html
Rugrats - La Busqueda de Reptar - SLES-02049.html
Rugrats - Search For Reptar - SLUS-00650.html
Rugrats - Totally Angelica - SLUS-01364.html
Rugrats en Paris la Pelicula - SLES-03344.html
Rugrats In Paris - SLUS-01116.html
Rugrats Studio Tour - SLUS-00880.html
Rugrats Studio Tour (German) - SLES-02523.html
Runabout - SLPS-00857.html
Runabout 2 - SLPS-02403.html
Runabout 2 - SLUS-01135.html
Rune No Joka Hikari To Yami No Sei-Oujo - SLPS-00483.html
Rung Rung Oz No Mahoutsoukai Another World - SLPS-02335.html
Running High - SLPS-00751.html
Running Wild - SCES-01630.html
Running Wild - SCUS-94272.html
Rurouni Kenshin - Meiji Kenkaku Romantan - Ishin Gekitouhen - SCPS-10030.html
Rurouni Kenshin - Meiji Kenyaku Romantan - Juuyuushi Inbou Hen - SCPS-10048.html
Rush Hour - SCUS-94417.html
Rushdown - SLUS-00828.html
Ryuki Densyo Dragoon - SLPS-01035.html
S.C.A.R.S - SLES-01286.html
S.C.A.R.S. - SLUS-00692.html
S.Q. - Sound Qube - SLPS-01309.html
Saber Marionette J Battle Sabers - SLPS-00739.html
Sabrina The Teenage Witch - A Twicht In Time - SLES-03561.html
Sabrina The Teenage Witch - SLUS-01208.html
Saga Frontier - SCUS-94230.html
Saga Frontier - SLPS-00898.html
Saga Frontier 2 - SLPS-01990.html
Saga Frontier 2 - SLUS-00933.html
Saga Frontier 2 (German) - SLES-02118.html
Saga Frontier 2 (UK) - SLES-02112.html
Saiyuki - Journey West - SLUS-01381.html
Saiyuki - SLPM-86339.html
Sakuma-Shinki Jinsei Game - SLPS-01740.html
Salamander Deluxe Pack Plus - SLPM-86037.html
Salary Man Settai Mahjong - SLPS-03175.html
Saltwater Sportfishing - SLES-03753.html
Saltwater Sportfishing - SLUS-01397.html
Sammy Sosa High Heat Baseball 2001 - SLUS-01063.html
Sammy Sosa Softball Slam - SLUS-00000.html
Sampras Extreme Tennis - SLES-00217.html
Sampras Extreme Tennis - SLPS-00000.html
Samurai Deeper Kyo - SLPS-03505.html
Samurai Showdown - Warriors Rage - SLUS-01039.html
Samurai Showdown III - Blades of Blood - SCUS-94206.html
Samurai Showdown III - SCES-00563.html
Samurai Spirits - Amakusa Kourin Special - SLPS-01171.html
Samurai Spirits - Kenkaku Shinan Pack - SLPS-00647.html
Samurai Spirits - Zankurou Musouken - SLPS-00350.html
San Francisco Rush - Extreme Racing - SLES-01208.html
San Francisco Rush - Extreme Racing - SLUS-00505.html
Sangoku Musou - SLPS-00731.html
Sangokushi Eiketsuden - SLPS-00309.html
Sangokushi Koumeiden - SLPS-00688.html
Sangokushi Returns - SLPS-00474.html
Sankyo Fever Vol.2 - Mihata Simulation - SLPS-01176.html
Sankyo Fever Vol.3 - Mihata Simulation - SLPS-01393.html
Santa Claus Saves The Earth - SLES-04023.html
Sanvein - SLES-02919.html
Sanyo Pachinko Paradise - SLPS-02164.html
Sanyo Pachinko Paradise 2 - Umi Monogatari Special - SLPS-02389.html
Saru! Get You! - SCPS-00000.html
Satellitv - SLPS-01203.html
Satomi No Nazo - SLPS-00613.html
Schrvdinger no Neko - SLPS-00780.html
Scooby Doo And The Cyberchase - SLUS-01396.html
Scooter Racing - SLES-03770.html
Scrabble - SLUS-00903.html
Screen - SLPS-02757.html
SD Gundam Eiyuuden Daikessen - Knight Vs. Musha - SLPS-03145.html
SD Gundam G Generation - SLPS-01560.html
SD Gundam G Generation F - SLPS-02900.html
SD Gundam G Generation Zero - SLPS-02200.html
SD Gundam G Generation-F.I.F - SLPS-03195.html
SD Gundam G-Century - SLPS-00785.html
SD Gundam Over Galaxian - SLPS-00385.html
Sea-doo HydroCross - SLUS-01149.html
Segare Ijiri - SLPM-86230.html
Seikai no Monshou (Crest of the Stars) - SLPS-02323.html
Seiken Densetsu - Legend of Mana - SLPS-02170.html
Seikoku 1092 Souheiden - SLPS-00740.html
Seirei Hata RayBlade - SLPS-02652.html
Seirishoukan Princess Of Darkness - SLPS-01271.html
Sengoku Cyber - Fujimaru Jigokuhen  - SCPS-10011.html
Sengoku Mugen - SLPS-03151.html
Senkai Taisen - Tv Animation Senkaiden Houshin Engi Yori - SLPS-02736.html
Senryaku Shidan - Tora! Tora! Tora! Rikusenhen - SLPS-02631.html
Sentimental Graffiti - SLPS-03184.html
Sentimental Graffiti Yakusoku - SLPS-03183.html
Sentimental Journey - SLPS-01473.html
Sentinel Returns - SLES-01051.html
Sentinel Returns - SLUS-00604.html
Sentou Kokka - Air Land Battle - SCPS-10015.html
Septentrion - Out Of The Blue - SLPM-86612.html
Serofans - SLPS-01081.html
Sesame Street Elmo's Letter Adventure - SLUS-00621.html
Sesame Street Elmo's Number Journey - SLUS-00622.html
Sexy Parodius - SLPM-86009.html
Shachou Eiyuuuden -The Eagle Shooting Heroes - SCPS-10139.html
Shadow Gunner - SLES-01359.html
Shadow Madness - SLUS-00000.html
Shadow Madness (German) - SCES-02101 - SCES-12101.html
Shadow Madness (Spanish) - SCES-02103 - SCES-12103.html
Shadow Man - SLUS-00895.html
Shadow Man (German) - SLES-02282.html
Shadow Man (Uk) - SLES-00947.html
Shadow Master - SLES-00888.html
Shadow Master - SLUS-00545.html
Shadow Tower - SLPS-01420.html
Shadow Tower - SLUS-00863.html
Shake Kids - SLPS-01472.html
Shaman King - Spirit Of Shamans - SLPS-03432.html
Shanghai - Banri no Choujou - The Great Wall - SCPS-10004.html
Shanghai - Shoryu Sairin - SLPM-86836.html
Shanghai - True Valor - SLES-01618.html
Shanghai - True Valor - SLUS-00795.html
Shao-Lin - SLES-01658.html
Sheep - SLES-02218.html
Sheep - SLUS-01298.html
Shellshock - SLPS-00486.html
Shellshock - SLUS-00031.html
Shellshock (German) - SLES-00216.html
Shellshock (Uk) - SLES-00026.html
Shibas 1-2-3 Destiny! Unmei O Kaerusha! - SLPS-01893.html
Shichisei Toushin Guyferd Crown Kaimetsu Sakusen - SLPS-01619.html
Shin Fortune Quest - Shokutaku no Kishi-Tachi - SLPS-00382.html
Shin Masou Kishin Panzer Warfare - SLPS-02319.html
Shin Megami Tensei - Devil Children - Kuro no Sho - Aka no Sho - SLPM-87040.html
Shin Megami Tensei - SLPS-03170.html
Shin Megami Tensei if - SLPM-87154.html
Shin Megami Tensei II - SLPM-86924.html
Shin Nihon Pro Wrestling - Toukon Retsuden 3 - SLPS-01314 - SLPS-01366.html
Shin SD Sengokuden - Kidou Musha Taise - SLPS-00576 - SLPS-00655.html
Shin Sedai Robot Senki - Brave Saga - SLPS-01756.html
Shin Seiki Evangelion - Eva to Yukai na Nakamatachi - SLPS-01485.html
Shin Super Robot Taisen - SLPS-00550.html
Shin Theme Park - SLPS-00810.html
Shinji Dangeki Action Rasetsu No Ken-Soul Of The Samurai - SLPM-86177.html
Shinseiden Megaseed Fukkatsu-Hen - SLPS-00925.html
Shinseiki GPX Cyber Formula - Aratanaru Chousensha - SLPS-01958-9.html
Shinsetsu Samurai Spirits - Bushidou Retsuden (Samurai Spirits Rpg) - SLPS-00814.html
ShipWreckers - SLUS-00558.html
Shiritsu Justice Gakuen - Legion of Heroes - SLPS-01240 - SLPS-01241.html
Shiritsu Justice Gakuen - Nekketsu Seishun Nikki 2 - SLPS-02120.html
Shisenfuu Gekikara Mahjong - SLPS-01648.html
ShockWave - SLPS-00419.html
Shockwave Assault - SLES-00071 - SLES-10071.html
Shockwave Assault - SLUS-00028 - SLUS-00137.html
Shockwave Operation Jumpate - SLPS-00516.html
Shooter - Starfighter Sanvein - SLUS-01302.html
Shooter Space Shot - SLUS-01308.html
Shrek Treasure Hunt - SLES-03996.html
Shrek Treasure Hunt - SLUS-01463.html
Shura No Mon - SLPS-01202.html
Shutokou Battle - Drift King - SLPS-00250.html
Shutokou Battle Gaiden - Super Technic Challenge - SLPS-00573.html
Shutokou Battle R - SLPS-00828.html
Side by Side Special - SLPS-01175.html
Side by Side Special 2000 - SLPM-86344.html
Sidewinder - SLPS-00156.html
Sidewinder 2 - SLPS-00954.html
Silent Bomber - SLPS-02334.html
Silent Bomber - SLUS-00902.html
Silent Bomber (Spanish) - SLES-02992.html
Silent Bomber(German) - SLES-02990.html
Silent Bomber(U.K) - SLES-02990.html
Silent Hill - SLES-01514.html
Silent Hill - SLPS-00000.html
Silent Hill - SLUS-00707.html
Silent Iron - SLES-04157.html
Silent Mobius - Case Titanic - SLPS-01618.html
Silent Mobius - Genei No Datenshi - SLPS-01803.html
Silhoutte Stories - SLPS-00374.html
Silouette Mirage - Reprogrammed Hope - SLPS-01449.html
Silouette Mirage - SLUS-00728.html
Sim Theme Park - SLUS-01069.html
SimCity 2000 - SLES-00471.html
SimCity 2000 - SLPS-00420.html
SimCity 2000 - SLUS-00113.html
Simple 1500 Jitsuyou Series Vol.14 - Kurashi no Manners - Kankonsousai Hen - SLPM-87022.html
Simple 1500 Jitsuyou Series Vol.18 - Planetarium - SLPM-87049.html
Simple 1500 Series Hello Kitty Vol.1 Hello Kitty Bowling - SLPM-86866.html
Simple 1500 Series Hello Kitty vol.3 Hello Kitty Block Kuzushi - SLPM-86911.html
Simple 1500 Series vol.001 - The Mahjong [Rerelease] - SLPS-02437.html
Simple 1500 Series vol.011 - The Pinball - SLPS-02178.html
Simple 1500 Series vol.012 - The Quiz - SLPS-02179.html
Simple 1500 Series Vol.013 - The Race - SLPS-02197.html
Simple 1500 Series Vol.017 - The Bike Race - SLPS-02303 - SLPS-02453.html
Simple 1500 Series vol.019 - The Sugoroku - SLPS-02435.html
Simple 1500 Series Vol.024 - The Gun Shooting - SLPS-02474.html
Simple 1500 Series Vol.028 - The Dungeon Rpg - SLPS-02726.html
Simple 1500 Series vol.033 - The Takkyuu - SLPS-02908.html
Simple 1500 Series vol.034 - The Quiz Bangumi - SLPS-02909.html
Simple 1500 Series Vol.035 - The Shooting - SLPS-02910.html
Simple 1500 Series vol.039 - The Mahjong 2 - SLPS-03004.html
Simple 1500 Series vol.043 - The Hanafuda 2 - SLPS-03009.html
Simple 1500 Series vol.046 - The Mahjong Ochige - Raku Jongg - SLPS-03035.html
Simple 1500 Series vol.047 - The Skateboard - SLPS-03037.html
Simple 1500 Series vol.049 - The Casino - SLPM-86699.html
Simple 1500 Series Vol.053 - The Helicopter - SLPM-86701.html
Simple 1500 Series Vol.055 - The Darts - SLPM-86714.html
Simple 1500 Series Vol.056 - The Sniper - SLPM-86762.html
Simple 1500 Series Vol.057 - The Maze - SLPM-86715.html
Simple 1500 Series Vol.060 - The table Hockey - SLPS-86761.html
Simple 1500 Series vol.062 - The Ski - SLPM-86801.html
Simple 1500 Series Vol.063 - The Gun Shooting 2 - SLPM-86816.html
Simple 1500 Series vol.070 - The War Simulation - Nin no Tsukurishisha-tachi - SLPM-86869.html
Simple 1500 Series Vol.071 - The Renai Simulation 2 - SLPM-86870.html
Simple 1500 Series Vol.072 - The Beach Volley - SLPM-86871.html
Simple 1500 Series vol.073 - The Invaders - Space Invaders 1500 - SLPM-86900.html
Simple 1500 Series vol.076 - The Dodgeball - SLPM-86914.html
Simple 1500 Series Vol.078 - The Zero Yon - SLPM-86712.html
Simple 1500 Series Vol.079 - The Shisenshou - SLPM-86970.html
Simple 1500 Series Vol.081 - The Renai Adventure - Okaeri! - SLPM-86972.html
Simple 1500 Series Vol.082 - The Sensuikan - SLPM-86973.html
Simple 1500 Series vol.084 - The Intro Quiz - SLPM-86974.html
Simple 1500 Series Vol.086 - The Onigokko - SLPM-87017.html
Simple 1500 Series Vol.087 - The Kyotei(Motorboat race) - SLPM-87026.html
Simple 1500 Series vol.088 - The Gal Mahjong Love Songs Idol wa High Rate - SLPM-87023.html
Simple 1500 series vol.091 - The Gambler - SLPM-86975.html
Simple 1500 series vol.092 - The Tozan RPG - SLPM-87036.html
Simple 1500 Series Vol.94 - The Cameraman - SLPM-87096.html
Simple 1500 Series Vol.099 - The Kendo - Ken no Hanamichi - SLPM-87140.html
Simple 1500 Series Vol.100 - The Astronaut - SLPM-00000.html
Simple 1500 series vol.101 the Sentou - SLPM-87142.html
Simple Characters 2000 Series Vol 03 - Kamen Rider The Bike Race  - SLPS-03308.html
Simple Characters 2000 Series Vol.04 - Jarinko Chie - The Hanafuda - SLPS-03350.html
Simple Characters 2000 Series Vol.05 - Highschool Kimengumi The Table Hockey - SLPS-03362.html
Simple Characters 2000 Series Vol.06 - Dokonjou Gaeru - The Mahjong - SLPS-03363.html
Simple Characters 2000 Series vol.08 - Gatchaman the Shooting - SLPS-03444.html
Simple Characters 2000 Series vol.12 - Kidou Butouden G Gundam - SLPS-03471.html
Simple Characters 2000 Series vol.13 - Kidou Senki Gundam W - The Battle - SLPS-03472.html
Simple Characters 2000 Series vol.14 - Nante Tantei Idol The Jigsaw Puzzle - SLPS-03473.html
Simple Characters 2000 Series Vol.15 - Cyborg 009 - SLPS-03474.html
Simulation Zoo - Sekaiichi no Doubutsuen o Tsukurou - SLPS-00458.html
Sitting Ducks - SLES-04152.html
Skeleton Warriors - SLES-00341.html
Skeleton Warriors - SLUS-00209.html
Ski Air Max - SLPS-01476.html
Skullmonkeys - SLUS-00601.html
Skullmonkeys (German) - SLES-01091.html
Sky Diving Extreme - SLUS-01392.html
Sky Sports Football Quiz Season 02 - SLES-03856.html
Sl De Ikou - SLPS-01739.html
SL de Ikou II - SLPS-02478.html
Slam Dragon - SLPS-00246.html
Slam 'n Jam '96 - SLES-00076.html
Slam 'n Jam '96 - SLPS-00426.html
Slamscape - SLES-00427.html
Slamscape - SLUS-00080.html
Slap Happy Rhythm Busters - SLPS-02789.html
Slayers Royal - SLPS-01363.html
Slayers Royal 2 - SLPS-02115.html
Slayers Wonderful - SLPS-01599.html
Sled Storm - SLES-02194.html
Sled Storm - SLUS-00955.html
Slot! Pro 2 - Bakuretsu Oozumou Kurenai & Murasaki  - SLPS-03179.html
Slots - SLUS-01555.html
Small Soldiers - SLUS-00781.html
Small Soldiers (French) - SLES-01581.html
Small Soldiers (German) - SLES-01582.html
Small Soldiers (uk) - SLES-01580.html
Smash Court - SLPS-00450.html
Smash Court 2 - SLPS-01693.html
Smash Court 3 - SLPS-03001.html
Smurf Racer - SLUS-01359.html
Sno Cross Championship Racing - SLES-02763.html
Sno Cross Championship Racing - SLUS-01093.html
Snobow Kids Plus - SLPS-01823.html
Snow Break - SLPS-00000.html
Snow Racer '98 - SLES-01106.html
Snowboard Racer - SLES-03960.html
Snowboarding - SLUS-01287.html
Soccer Kid - SLES-04020.html
Sol Divide - SLPS-01463.html
Sol Divide - SLUS-01519.html
Sold Out - SLPS-00597.html
Solid Link - Dungeon Side - SLPS-03028.html
Solid Link - Tower Side - SLPS-03027.html
Sonata - SLPS-01843 - SLPS-01844.html
Sonic Wings Special - SLES-04102.html
Sonic Wings Special - SLPS-00307.html
Sorcerer's Maze - SLES-04086.html
Sorcerer's Maze - SLUS-01495.html
Sotsugyou III - Wedding Bell - SLPS-01332.html
Sotsugyou R - Graduation Real - SLPS-00318.html
Sotsugyou Vacation - SLPS-00989.html
Sougaku Toshi Osaka - SLPS-01722 - SLPS-01723.html
Soukaigi - SLPS-01291 - SLPS-01292 - SLPS-01293.html
Soukou Kidoutai L.A.P.D. - SLPS-02091.html
Soukou Kihei Votoms - Koutetsu no Gunzei - SLPS-02315.html
Soukou Kihei Votoms - Woodo Kummen - SLPS-01331.html
Soukou Kihei Votoms Gaiden - Blue Knight Bersaga Story - SLPS-00981 - SLPS-00982.html
Soukou Kihei Votoms Lightning Slash - SLPS-01960 - SLPS-01961.html
Soukuu No Tsubasa Gotha World - SLPS-1041-2.html
Soukyu-Gurentai Oubushutugeki - SLPS-01172.html
Soul Blade - SCES-00577.html
Soul Blade - SLUS-00240.html
Soul Edge - SLPS-00555.html
Soul Of The Samurai - SLUS-00822.html
Soulmaster - SLPS-01090.html
Soumatou - SLPS 02479.html
Sound Novel Evolution 1 - Otogirisou - Sosei-Hen - SLPS-01645.html
Sound Novel Evolution 1 - Otogirisou - Sosei-Hen (Playstation the Best) - SLPS-91225.html
Sound Novel Evolution 2 - Kamaitachi No Yoru - SLPS-01794.html
Souten no Shiroki Kami no Za - Great Peak - SCPS-10058.html
South Park - Chefs Luv Shack - SLES-01972.html
South Park - Chefs Luv Shack - SLUS-00997.html
South Park - SLES-02158.html
South Park - SLUS-00936.html
South Park Rally - SLES-02352.html
South Park Rally - SLUS-00984.html
Soviet Strike - SLPS-00735.html
Soviet Strike - SLUS-00061.html
Soviet Strike (German) - SLES-00509.html
Space Adventure Cobra The Shooting - SLPS-00312.html
Space Battleship Yamato - Eiyuu no Kiseki - Part 1 Fan Disc - SLPS-02952.html
Space Battleship Yamato 2 - SLPS-02761.html
Space Battleship Yamato Distant Iskandar - SLPS-01900.html
Space Chaser 2000 [Superlite 1500 Series] - SLPM-86661.html
Space Debris (German) - SLES-02431.html
Space Debris (Spanish) - SCES-02433.html
Space Debris (Uk) - SCES-02290.html
Space Griffon - SLUS-00153.html
Space Hulk - SLES-00207.html
Space Hulk - SLUS-00205.html
Space Invaders - SLES-02144.html
Space Invaders - SLPS-00940.html
Space Invaders - SLUS-00928.html
Space Invaders 2000 - SLPM-86153.html
Space Jam - SLES-00284.html
Space Jam - SLUS-00243.html
Space Rider - SLES-04126.html
Spawn The Eternal - SCES-01056.html
Spawn The Eternal - SLPS-01400.html
Spawn The Eternal - SLUS-00000.html
Spec Ops - Stealth Patrol - SLES-00844.html
Spec Ops - Stealth Patrol - SLUS-01131.html
Spec Ops-Airborne Commando - SLES-03891.html
Spec Ops-Airborne Commando - SLUS-01447.html
Spec Ops-Cover Assault - SLES-03515.html
Spec Ops-Ranger Elite - SLES-03157.html
Spec Ops-Ranger Elite - SLUS-01299.html
Spectral Blade - SLPS-02526.html
Spectral Force - Lovely Wickedness - SLPS-02233.html
Spectral Force - SLPS-00969 - SLPS-01056.html
Spectral Force - The Band of Meymay Knights (Seishoujo Gaiden Junjou De Karen Meymay Shikidan) - SLPS-02431.html
Spectral Force 2 - SLPS-01628.html
Spectral Tower - SLPS-00476.html
Spectral Tower II - SLPS-01179.html
Speed Freaks - SCES-01763.html
Speed King - SLPM-86013.html
Speed Punks - SCUS-94563.html
Speed Racer - SLUS-00613.html
Speedball 2100 - SLES-02782.html
Speedball 2100 - SLUS-01218.html
Speedpower Gunbike - SLPS-01066.html
Speedster - SLES-00575.html
Spice World - SLUS-00723.html
Spider - The Videogame - SLUS-00230.html
Spider - The Videogame (French) - SLES-00681.html
Spider - The Videogame (German) - SLES-00682.html
Spider - The Videogame (Uk) - SLES-00117.html
Spider-man - SLPM-86739.html
Spider-Man - SLUS-00875.html
Spider-Man (German) - SLES-02888.html
Spider-Man (UK) - SLES-02886.html
Spider-Man 2 - Enter Elektro - SLPM-87073.html
Spider-man 2 - Enter Elektro - SLUS-01378.html
Spider-Man 2 - Enter Elektro (German) - SLES-03625.html
Spider-Man 2 - Enter Elektro (UK) - SLES-03623.html
Spin Jam - SLES-02790.html
Spin Jam - SLUS-01250.html
Spin Tail - SLPS-01461.html
Spongebob Squarepants Supesponge - SLES-03704.html
Spongebob Squarepants Supesponge - SLUS-01352.html
Sports Car GT (German) - SLES-01916.html
Sports Car GT (UK) - SLES-01361.html
Sports Car Supreme Gt - SLUS-00655.html
Spot goes to Hollywood - SLES-00330.html
Spot Goes To Hollywood - SLUS-00014.html
Spriggan Lunar Verse - SLPS-02117.html
Spyro 2 - Gateway To Glimmer - SCES-02104.html
Spyro 2 - Riptor's Rage - SCUS-94425.html
Spyro The Dragon - SCES-01438.html
Spyro The Dragon - SCPS-01083.html
Spyro The Dragon - SCUS-94228.html
Spyro The Year Of The Dragon - SCES-02835.html
Spyro X Sparx - Tondemo Tour - SCPS-10128.html
Spyro Year Of The Dragon - SCUS-94467.html
Stahlfeder - Tetsukou Hikuudan - SLPS-00162.html
Stakes Winner -  G1 Kanzen Seihahe no Michi - SLPS-00850.html
Star Fighter - SLUS-00241.html
Star Gladiator - Episode 1 - The Final Crusade - SLES-00495.html
Star Gladiator - Episode 1 - The Final Crusade - SLPS-00539.html
Star Gladiator - Episode 1 - The Final Crusade - SLUS-00372.html
Star Ixiom - SCES-01707.html
Star Ixion - SLPS-01680.html
Star Monja - SLPS-01390.html
Star Ocean - The Second Story - SCUS-94421 - SCUS-94422.html
Star Ocean - The Second Story - SLPM-86105-7.html
Star Ocean - The Second Story (German) - SCES-02161 - SCES-12161.html
Star Ocean - The Second Story (Uk) - SCES-02159.html
Star Sweep - SLES-02921.html
Star Sweep - SLPS-01040.html
Star Trek Invasion - SLUS-00924.html
Star Trek Invasion (German) - SLES-02884.html
Star Trek Invasion (UK) - SLES-02068.html
Star Wars - Dark Forces - SLPS-00685.html
Star Wars - Dark Forces - SLUS-00297.html
Star Wars - Dark Forces (Spanish) - SLES-00646.html
Star Wars - Dark Forces (Uk) - SLES-00585.html
Star Wars - Demolition - SLUS-01183.html
Star Wars - Demolition (German) - SLES-03275.html
Star Wars - Demolition (UK) - SLES-03273.html
Star Wars - Episode 1 - Jedi Power Battles - SLUS-01046.html
Star Wars - Episode 1 - Jedi Power Battles (French) - SLES-02608.html
Star Wars - Episode 1 - Jedi Power Battles (German) - SLES-02609.html
Star Wars - Episode 1 - Jedi Power Battles (Spanish) - SLES-02611.html
Star Wars - Episode 1 - Jedi Power Battles (Uk) - SLES-02607.html
Star Wars - Episode 1 - The Phantom Menace - SLPS-02153.html
Star Wars - Episode 1 - The Phantom Menace - SLUS-00884.html
Star Wars - Episode 1 - The Phantom Menace (Uk) - SLES-02034.html
Star Wars - Episode I - Die Dunkle Bedrohung(German) - SLES-02036.html
Star Wars - Episode I - La Menace Fanttme (French) - SLES-02035.html
Star Wars - Episodio 1 - La Amenaza Fantasma - SLES-02038.html
Star Wars - Masters Of TerdS KdSi - SLUS-00562.html
Star Wars - Rebel Assault 2 - The Hidden Empire  - SLPS-00638 - 00639.html
Star Wars - Rebel Assault 2 - The Hidden Empire - SLUS-00381 - SLUS-00386.html
Star Wars - Rebel Assault 2 - The Hidden Empire (German) - SLES-00584.html
Star Wars - Rebel Assault 2 - The Hidden Empire (Spanish) - SLES-00644 - 10644.html
Star Wars - Rebel Assault 2 - The Hidden Empire (Uk) - SLES-00654.html
Star Wars Masters Of TerdS KdSi - SLES-01111.html
Starblade Alpha - ScES-00034.html
Starblade Alpha - SLPS-00022.html
Starblade Alpha - SLUS-00057.html
Starborders - SLPS-00958.html
Starfighter 3000 - SLES-00293.html
Startling Odyssey i - Blue Evolution - SLPS-02043.html
Starwinder - The Ultimate Space Race - SLES-00090.html
Starwinder - The Ultimate Space Race - SLUS-00094.html
Steel Harbinger - SLES-00373.html
Steel Harbinger - SLUS-00093.html
Steel Reign - SCES-01023.html
Steel Reign - SCUS-94902.html
Stolen Song - SCPS-18007.html
Stone Walkers - SLPS-00472.html
Streak - Hoverboard Racing - SLES-01437.html
Streak - Hoverboard Racing - SLUS-00629.html
Streeet Scooter - SLPS-02186.html
Street Boarders - SLPS-01622.html
Street Figher Zero 3 - SLPS-00000.html
Street Fighter - The Movie - SLES-00050.html
Street Fighter - The Movie - SLUS-00041.html
Street Fighter Alpha - Warriors' Dream - SLUS-00197.html
Street Fighter Alpha - Warriors Dreams - SLES-00199.html
Street Fighter Alpha 2 - SLES-00496.html
Street Fighter Alpha 2 - SLUS-00258.html
Street Fighter Alpha 3 - SLES-01863.html
Street Fighter Alpha 3 - SLUS-00821.html
Street Fighter Collection - SLES-00998 - SLES-10998.html
Street Fighter Collection - SLPS-00800 - SLPS-00801.html
Street Fighter Collection - SLUS-00423 - SLUS-00584.html
Street Fighter Collection 2 - SLES-01721.html
Street Fighter Collection 2 - SLUS-00746.html
Street Fighter EX Plus Alpha  - SLPM-86041.html
Street Fighter Ex Plus Alpha - SLES-00939.html
Street Fighter Ex Plus Alpha - SLUS-00548.html
Street Fighter Ex2 Plus - SLES-02598.html
Street Fighter Ex2 Plus - SLPS-02508.html
Street Fighter Ex2 Plus - SLUS-01105.html
Street Fighter -The Movie Real Battle On Film - SLPS-00070.html
Street Fighter Zero - SLPS-00176.html
Street Fighter Zero 2 - SLPS-00415.html
Street Fighter Zero 3 - SLPS-01777.html
Street Games '97 - SIPS-60019.html
Street Racer - SLES-00296.html
Street Racquetball - SLUS-01450.html
Street Scooters - SLES-02528.html
Street Sk8er - SLES-01759.html
Street Sk8Er - SLUS-00818.html
Street Sk8Ter 2 - SLES-02703.html
Street Sk8Ter 2 - SLUS-01083.html
Stressless Lesson - Les Les - SLPS-00885.html
Strider - SLES-02867.html
Strider 1 - SLUS-01142.html
Strider 2 - SLES-12867.html
Strider 2 - SLUS-01163.html
Strider Hiryuu 1 & 2 - SLPS 02620.html
Strike Force Hydra - SLES-04046.html
Strike Point  - The Hex Missions - SLES-00425.html
Strike Point - SLUS-00139.html
Striker - World Cup Premiere Stage - SLPS-00127.html
Striker '96 - SLES-00023.html
Striker Pro 2000 - SLUS-01078.html
Strikers 1945 - SLPS-00407.html
Strikers 1945 - SLUS-01337.html
Strikers 1945 II - SLPS-01637.html
Stuart Little 2 - SCUS-94669.html
Stuart Little 2 (Spanish) - SCES-03849.html
Studio P - SLPS-00403.html
Study Quest - Keisanjima no Daibouken - SLPS-02725.html
Submarine Commander - SLES-02728.html
Submarine Hunter Sya-Chi - SLPS-02234.html
Suikkodn II (German) - SLES-02444.html
Suiko Enbu - Outlaws of the Lost Dynasty - SLPS-00137.html
Suikoden - SLES-00527.html
Suikoden - SLUS-00292.html
Suikoden II - SLUS-00958.html
Suikoden II (Spanish) - SLES-02445.html
Suikoden II (UK) - SLES-02442.html
Suizokukan Project Fish Hunter e no Michi - SLPS-01809.html
Summon Night - SLPS-02542.html
Summon Night 2 - SLPS-03237.html
Suna No Embrace - SLPS-02858.html
Super Adventure Rockman - SLPS-01051 - SLPS-01052 - SLPS-01053.html
Super Bass Fishing - SLPS-02219.html
Super Bubble Pop - SLUS-01528.html
Super Dropzone - Intergalactic Resuce Mission - SLES-04045.html
Super Gals! Kotobukiran Special - Ikenen get your gals party - SLPM-87135.html
Super Hero Sakusen - SLPS-01776.html
Super Hero Sakusen Daidan - SLPS-03020.html
Super Pang Collection - SLES-00000.html
Super Price Series - Block & Switch  - SLPS-03386.html
Super Price Series - Hanafuda - SLPS-03387.html
Super Price Series - Mahjong - SLPS-03225.html
Super Puzzle Fighter II Turbo - SLES-00605.html
Super Puzzle Fighter II Turbo - SLUS-00418.html
Super Puzzle Fighter II X - SLPS-00611.html
Super Robot Shooting - SLPS-00000.html
Super Robot Wars Alpha - SLPS-02636.html
Super Robot Wars Alpha Gaiden - SLPS-03148.html
Super Robot Wars Complete Box - SLPS-02070.html
Super Robot Wars EX - SLPS-02529.html
Super Robot Wars F - SLPS-01727.html
Super Robot Wars F Final - SLPS-01924.html
Super Robot Wars II - SLPS-02406.html
Super Robot Wars IV Scramble - SLPS-00196.html
Super Robot Wars IV Scramble (PLAYSTATION THE BEST) - SLPS-91014.html
Super Shot Soccer - SLUS-01464.html
Super Tokusatsu Taisen 2001 - SLPS-02863.html
Superbike 2000 - SLES-02538.html
Supercross 2000 - SLES-02373.html
Supercross 2000 - SLUS-01005.html
Supercross Circuit - SCUS-94453.html
Superlite 1500 Series - Bomb Boat  - SLPM-87090.html
Superlite 1500 Series - Card II - SLPM-86298.html
Superlite 1500 Series Battle Qix - SLPM-87165.html
Superlite 1500 Series Qix 2000 - SLPM-86659.html
Superstar Dance Club - SLUS-01493.html
Surf Riders - sSLUS-01190.html
Susume Taisen Puzurudama - SLPS-00255.html
Susume! Kaizoku  - Be Pirates - SLPS-01737.html
Suzu Monogatari - SLPS-02730.html
Suzuki Bakuhatsu - SLPM-86513.html
SvLdnerschild Special - SLPS-01319.html
Swagman - SLES-00025.html
Swagman - SLUS-00151.html
Sydney 2000 - SLUS-01177.html
Sydney 2000 (German) - SLES-02859.html
Syndicate Wars - SLES-00213.html
Syndicate Wars - SLUS-00262.html
Syndicate Wars (German) - SLES-00212.html
Syphon Filter - SLPS-02216.html
Syphon Filter - SLUS-00000.html
Syphon Filter (Spanish) - SCES-01914.html
Syphon Filter (UK) - SCES-01910.html
Syphon Filter 2 - SCUS-94451.html
Syphon Filter 2 (French) - SCES-02286SCES-12286.html
Syphon Filter 2 (German) - SCES-02287 - SLES-12287.html
Syphon Filter 2 (Spanish) - SLES-02289.html
Syphon Filter 2 (Uk) - SCES-02285 - SCES-12285.html
Syphon Filter 3 - SCUS-94640.html
Syphon Filter 3(German) - SCES-03699.html
Syphon Filter 3(Spanish) - SCES-03701.html
Syphon Filter 3(UK) - SCES-03697.html
Syphon Filter(German) - SCES-01912.html
Syusse Mahjong Daisettai - SLPS-00276.html
T Kara Hajimaru Monogatari - SLPS-01350.html
T.R.A.G.Mission Of Mercy - SLUS-00813.html
Tactic Ogre - SLPS-00767.html
Tactical Armor Custom Gasaraki - SLPS-02181.html
Tactics Ogre - Let Us Cling Together - SLUS-00560.html
Tadaima Wakusei Kaitakuchuu! - SLPS-00116.html
T'Ai Fu - Die Rache Des Tigers (German) - SLES-01473.html
Tai Fu-Wrath Of Tiger - SLUS-00787.html
Taikou Risshiden II - SLPS-00234.html
Tail Concerto - SLPS-01299.html
Tail Concerto - SLUS-00660.html
Tail Concerto (French) - SLES-01390.html
Tail Of The Sun - SCUS-94607.html
Taisen Renai Simulation - Trifers Mahou Gakuen - SLPS-02672.html
Taiyou no Shippo - Wild, Pure, Simple Life - SLPS-00330.html
Tales Of Destiny - SLPS-01100.html
Tales of Destiny - SLUS-00626.html
Tales Of Destiny 2 - SLUS-01355.html
Tales of Eternia - SLPS-03050.html
Tales Of Fandom Vol.1 - SLPS-03375 - SLP-03376.html
Tales Of Phantasia - SLPS-01770.html
Tall Infinity - SLUS-01547.html
Tama - Adventurous Ball In Giddy Labyrinth - SLPS-00003.html
Tamago de Puzzle - SCPS-10044.html
Tamamayu Monogatari - SLPS-01729.html
Tank Racer - SLES-01248.html
Tanoshii-Mahjong - SLPM-86172.html
Tantei Jinguji Saburo - Tomisibi ga keinu ma ni - SLPS-02427.html
Tantei Jinguuji Saburou - Mikan no Rupo - SLPS-00544 - SLPS-03016.html
Taregoro Tarepanda no Iru Nichijou - SLPS-02883.html
Tasokage No Ode - Ode To The Sunset Era - SLPS-00532.html
Tatsunoko Fight - SLPS-02939.html
Taxi 2 - SLES-03597.html
Team Buddies - SLUS-00869.html
Team Buddies(E-F-G) - SCES-01923.html
Team Losi RC Racer - SLUS-00666.html
Tearring Saga - SLPS-03177.html
Techno BB - SLPM-86738.html
TechnoMage - Die Rckkehr Der Ewigkeit (German) - SLES-02831.html
Technomage - El retorno de la Eternidad (Spanish) - SLES-03244.html
Technomage (UK) - SLES-03241.html
Tecmo Super Bowl - SLUS-00070.html
Tecmo World Golf - SLUS-00299.html
Tecmo's Deception - Invitation to Darkness - SLUS-00340.html
Tekken - SCES-00005.html
Tekken - SLPS-00040.html
Tekken - SLUS-00006.html
Tekken 2 - SCES-00255.html
Tekken 2 - SLPS-00300.html
Tekken 2 - SLUS-00213.html
Tekken 3 - SCES-01237.html
Tekken 3 - SLPS-01300 - SCPS-45215 - SLPM-86339.html
Tekken 3 - SLUS-00402.html
Tempest X3 - SLES-00316.html
Tempest X3 - SLUS-00283.html
Tenchi Wo Kurau II - SLPS-00203.html
Tenchu - SLUS-00706.html
Tenchu - Stealth Assassin - SLES-01374.html
Tenchu 2 - Birth of the Stealth Assassins (German) - SLES-02463.html
Tenchu 2 - Birth of the Stealth Assassins (uk) - SLES-02452.html
Tenchu 2 - SLUS-00939.html
Tenga Seiha - SLPS-00712.html
Tenis - SLUS-01348.html
Tenkuu No Restaurant - SLPM-86584.html
Tenkuu No Restaurant Hello Project Version - SLPM-86734.html
Tennis Arena - SLES-00935.html
Tennis Arena - SLUS-00596.html
Tennis no Oji-Sama - Sweat & Tears - SLPM-87155.html
Tennis no Oji-Sama - The Prince of Tennis - SLPM-87028.html
Tensen-Nyannyan - Gekigyouban  - SLPS-01278.html
Tenshi Doumei - SLPS-01228.html
Tenshi Na Konamaiki - SLPS-03466.html
Terracon - SCES-02836.html
Test Drive 4 - SLES-00948.html
Test Drive 4 - SLUS-00487.html
Test Drive 4x4 - SLES-01179.html
Test Drive 5 - SLES-01165.html
Test Drive 5 - SLUS-00610.html
Test Drive 6 - SLES-02752.html
Test Drive 6 - SLUS-00839.html
Test Drive Le Mans - SLUS-01077.html
Test Drive Off Road Racing - SLUS-00396.html
Test Drive Off-Road 2 - SLPS-01965.html
Test Drive Off-Road 2 - SLUS-00609.html
Test Drive Off-Road 3 - SLUS-00840.html
Tetris Plus - SLUS-00338.html
Tetris With Card Captor Sakura - Eternal Heart - SLPS-02886.html
Tetris x - SLPS-00321.html
Tetsudo Oh 2 - SLPS-01012.html
Tetsudo Oh '96 - Ikuze Okuban Chouja - SLPS-00164.html
TFX - Tactical Fighter Experiment - SLPS-00511.html
That's Pon! - SLPS-00051.html
That's Qt - SLPM-86340.html
The Adventure of Puppet Princess - SLPS-01734.html
The Adventures Of Lomax In Lemmingland - SCUS-94906.html
The Airs - SLPS-01916.html
The Amazing Virtual Sea Monkeys - SLUS-01475.html
The Bistro - Ryouri & Wine no Shokunin-tachi - SLPS-02294.html
The Bombing Islands - SLES-03163.html
The Bombing Islands - SLPS-00866.html
The Bombing Islands - SLUS-01292.html
The Conveni - Ano Machi o Dokusen Sey - SLPS-00782.html
The Conveni 2 - SLPS-01146.html
The Conveni Special - SLPS-01301.html
The Crow - City Of Angels - SLUS-00242.html
The Crow - City Of Angels (German) - SLES-00648.html
The Crow - City Of Angels (Uk) - SLES-00279.html
The Divide - Enemies Within - SLUS-00317.html
The Dream Circus - SLPS-01836.html
The Drug Store - SLPS-01516.html
The Dukes Of Hazzard - Racing Home - SLUS-00859.html
The Dukes Of Hazzard - SLES-02343.html
The Dukes Of Hazzard 2 - Daisy Dukes It Out - SLES-03393.html
The Dukes Of Hazzard 2 - Daisy Dukes It Out - SLUS-01243.html
The F.A. Premier League Football Manager 2000 - SLES-02254.html
The F.A. Premier League Football Manager 2001 - SLES-03061.html
The F.A. Premiere League Stars - SLES-02142.html
The Famires - Shijou Saikyou No Menu - SLPS-01763.html
The Famires - The Family Restaurant - SLPS-01736.html
The Fifth Element - SCES-01285.html
The Fifth Element - SLPS-01555.html
The Fifth Element - SLUS-00711.html
The Firemen 2 Pete & Danny - SLPS-00148.html
The Flintstones - Bedrock Bowling - SLUS-00000.html
The Game Maker - SLPS-01583.html
The Game of Life - SLUS-00769.html
The Granstream Saga - Granstream Denki - SCPS-10046.html
The Granstream Saga - SLUS-00597.html
The Granstream Saga (German) - SCES-01322.html
The Granstream Saga (Uk) - SCES-01107.html
The Great Battle VI - SLPS-00719.html
The Grinch - SLES-02974.html
The Grinch - SLUS-01197.html
The Guardian Of Darkness - SLES-01776.html
The Hive - SLUS-00120.html
The Hunter - SLES-03210.html
The Incredible Hulk - The Pantheon Saga - SLES-00109.html
The Incredible Hulk - The Pantheon Saga - SLUS-00150.html
The Italian Job - SLUS-01457.html
The Italian Job (Spanish-French-German) - SLES-03616.html
The Italian Job (Uk) - SLES-03489.html
The King Of Fighters '95 - SCES-00562.html
The King Of Fighters '95 - SCUS-94205.html
The King Of Fighters '95 - SLPS-00351.html
The King Of Fighters '96 - SLPS-00834.html
The King Of Fighters '97 - SCPS-45248 - SLPM-86084 - SLPM-86245.html
The King Of Fighters '98 - SLPM-86201.html
The King Of Fighters 99 - SLPM-86462.html
The King Of Fighters '99 - SLUS-01332.html
The King Of Fighters Kyo - SLPM-86095.html
The Land Before Time - Great Valley Racing Adventure - SLES-03448.html
The Land Before Time - Great Valley Racing Adventure - SLUS-01213.html
The Land Before Time - Return To The Great Valley - SLUS-01043.html
The Legend Of Dragoon - SCUS-94491.html
The Legend Of Dragoon - SLPS-00000.html
The Legend Of Dragoon (German) - SCES-03045.html
The Legend Of Dragoon (Spanish) - SCES-03047.html
The Legend Of Dragoon (Uk) - SCES-03043.html
The Legend Of Heroes 1 & 2 - SLPS-01323.html
The Legend of Heroes III - Shiroki Majo - Mouhitotsu no Eiyuutachi no Monogatari - SLPS-01201.html
The Legend of Heroes IV - Akai Shizuku - SLPS-01540.html
The Lost World - Jurassic Park - SLES-00903.html
The Lost World - Jurassic Park - SLUS-00515.html
The Master's Fighter - SLPS-00722.html
The Match Golf - SLPS-00178.html
The Misadventures Of Tron Bonne - SLES-02795.html
The Misadventures Of Tron Bonne - SLUS-00896.html
The Mission - SLES-03234.html
The Mummy - SLES-02973.html
The Mummy - SLUS-01187.html
The Mystic Dragon - SLPS-02103.html
The Next Tetris - SLUS-00862.html
The Note - SLES-00749.html
The Oni Taiji - Mezase! 2-daime Momotaro - SLPS-00089.html
The Operation Death Wing - SLPS-00489.html
The Powerpuff Girls - Chemical X-Traction - SLUS-01423.html
The Raiden Project - SCUS-94402.html
The Raiden Project - SLES-00051.html
The Rapid Angel - SLPS-01553.html
The Raven Project - SLES-00039.html
The Simpsons Wrestling - SLES-03401.html
The Simpsons Wrestling - SLUS-01227.html
The Smurfs - SLES-01749.html
The Smurfs - SLUS-01008.html
The Star Bowling Dx - SLPS-00000.html
The Three Stooges - SLUS-00000.html
The Tower - Bonus Edition (Limited Edition) - SLPS-00508.html
The Unholy War - SLES-01300.html
The Unholy War - SLUS-00676.html
The Vision of Escaflowne [Limited Edition] - SLPS-01014.html
The Weakest Link - SLES-03551.html
The Weakest Link - SLUS-01413.html
The Wild Thornberries - Animal Adventures - SLUS-01128.html
Theme Aquarium - SLPS-01768.html
Theme Hospital - SLES-00627.html
Theme Hospital - SLPS-01405.html
Theme Hospital - SLUS-00275.html
Theme Park - SLES-00072.html
Theme Park - SLPS-00175.html
Theme Park - SLUS-00017.html
Theme Park (Playstation the Best) - SLPS-91013.html
Theme Park World - SLES-02688.html
This is Football (Uk) - SCES-01700.html
This Is Soccer - SCES-02269.html
Thoroughbred Breeder - Sekai Seiha Hen - SLPS-01324.html
Thoroughbred Bride II Plus - SLPS-00053.html
Thousand Arms - SLPS-01780 - SLPS-01781.html
Thousand Arms - SLUS-00845.html
Thrasher - Skate And Destroy - SLUS-00935.html
Thrasher - Skate And Destroy (Australian) - SLES-02556.html
Thrasher - Skate And Destroy(M-5) - SLES-02340.html
Threads Of Fate - SLUS-01019.html
Thunder Force v - SLUS-00727.html
Thunder Force v Perfect System - SLPS-00000.html
Thunder Storm Lx-3 & Road Blaster - SLPS-00094.html
Thunder Strike 2 - SLUS-00191.html
Thunder Truck Rally - SCUS-94352.html
Thunderhawk 2 (E-F) - SLES-00145.html
Thunderhawk 2 (German) - SLES-00144.html
Tiger Woods '99 - SLES-01674.html
Tiger Woods '99 - SLUS-00785.html
Tiger Woods PGA Tour 2000 - SLES-02551.html
Tiger Woods Pga Tour 2000 - SLUS-01054.html
Tiger Woods PGA Tour Golf 2001 - SLES-03148.html
Tiger Woods PGA Tour Golf 2001 - SLUS-01273.html
Tiger Woods PGA Tour Golf 2001 (SLES-03337) - SLES-03337.html
Tigershark - SLES-00728.html
Tigershark - SLUS-00346.html
Tilk - Aoi Umi Kara Kita Shoujo - SLPS-00717.html
Tilt! - SLES-00152.html
Time Bokan Go Go Go - SLPS-03133.html
Time Bokan Series - Bokan to Ippatsu! Doronboo - SLPS-91051.html
Time Bokan Series Bokan Desuyo - SLPS-01221.html
Time Bokan Yattaman - SLES-03651.html
Time Commando - SLES-00224.html
Time Commando - SLUS-00342.html
Time Crisis - Project Titan - SCES-02776.html
Time Crisis - Project Titan - SLPS-03188.html
Time Crisis - Project Titan - SLUS-01336.html
Time Crisis - SCES-00657.html
Time Crisis - SLPS-00635 - SLPS-00666.html
Time Crisis - SLUS-00405.html
Time Criss (Playstation the Best) - SLPS-91087.html
Time Gal - SLPS-00383.html
Tintin Destination Adventure - SLES-03459.html
Tiny Bullets - SCPS-10130.html
Tiny Tank - SCUS-94427.html
Tiny Tank (German) - SCES-02073.html
Tiny Tank (Uk) - SCES-01338.html
Tiny Toon Adventures - Plucky's Big Adventure - SLES-03547.html
Tiny Toon Adventures - Plucky's Big Adventure - SLUS-01393.html
Tiny Toon Adventures - Toonenstein Geisterstunde! - SLES-02927.html
Tiny Toons - Toonenstein-Dare To Scare - SLUS-00967.html
Tiny Toons-Buster And The Beanstalk (Da,No & E) - SCES-01998.html
Tiny Toons-Buster And The Beanstalk (F,G & I) - SCES-01996.html
Tiny Toons-Buster And The Beanstalk (Po,Sp & E) - SCES-01997.html
Titan Wars - SLES-00275.html
Titan Wars (Alternate) - SLES-00275.html
TNN Motor Sports Harcore 4x4 - SLUS-00089.html
TNN Motorsports Hardcore Racing TR - SLUS-00980.html
To Heart - SLPS-01919.html
Toaplan Shooting Battle 1 - SLPS-00000.html
Tobaku Mokushiroki Kaiji - SLPS-02749.html
Tobal 2 - SLES-00000.html
Tobal 2 - SLPM-86033.html
Tobal No. 1 - SCES-00497.html
Tobal No. 1 - SCUS-94208.html
Tobal No. 1 - SLPS-00400.html
Toca - Championship Racing - SLUS-00611.html
Toca - Touring Car Championship - SLES-00376.html
Toca - Touring Car Championship - SLPS-01410.html
Toca - World Touring Cars (E-F-G) - SLES-02572.html
Toca 2 - Touring Car Challenge - SLUS-00996.html
TOCA 2 - Touring Cars (E-F-G) - SLES-01542.html
Tokimeki Memorial - Forever With You - SLPS-00064 - SLPS-00065.html
Tokimeki Memorial - Forever With You [PSone Books] - SLPM-87300.html
Tokimeki Memorial - Forever With You[ Playstation the Best] - SLPM-86053.html
Tokimeki Memorial - Private Collection - SLPM-86001.html
Tokimeki Memorial - Taisen Tokkaedama - SLPM-86036.html
Tokimeki Memorial 2 - SLPM-86355.html
Tokimeki Memorial 2 - Substories vol. 1 - Dancing Summer Vacation - SLPM-86549 - SLPM-86550.html
Tokimeki Memorial 2 - Substories vol. 2 - Leaping School Festival - SLPM-86775 - SLPM-86776.html
Tokimeki Memorial 2 - Substories vol. 3 - Memories Ringing On - SLPM-86881-2.html
Tokimeki Memorial 2 - Taisen Pazudurama - SLPM-86753.html
Tokimeki Memorial Drama Series vol.3 Tabidachi no Uta - SLPM-86224.html
Tokimeki Memorial Selection - SLPS-00000.html
Tokimeki No Houkago - Ne Quiz Siyo - SLPM-86094.html
Tokoro-san no Daifugou [Konami the Best] - SLPM-86824.html
Tokotoko Trouble - SLPS-03528.html
Tokyo Highway Battle - SLES-00413.html
Tokyo Highway Battle - SLUS-00229.html
Tokyo Majin Gakuen - Oboro Kitan - SLPS-02015.html
Tokyo Majin Gakuen Gehouchou - SLPS-03333.html
Tokyo Majin Gakuen Ken Kaze Tobari - SLPS-01432.html
Tokyo Mew Mew (Myuumint Box) - SLPM-87178.html
Tokyo Wakusei Planetokio - SLPS-02182.html
Tom & Jerry In House Trap - SLES-03181.html
Tom And Jerry House Hunt - SLUS-01191.html
Tom Clancy's Rainbow Six - Rogue Spear - SLES-02696.html
Tom Clancy's Rainbow Six - Rogue Spear - SLUS-01108.html
Tom Clancy's Rainbow Six - SLES-02372 - SLES-01136.html
Tom Clancy's Rainbow Six - SLUS-00947.html
Tomb Raider (French) - SLES-00485.html
Tomb Raider (German) - SLES-00486.html
Tomb Raider (Uk) - SLES-00024.html
Tomb Raider 2 - SLPS-00000.html
Tomb Raider 2 - SLUS-00437.html
Tomb Raider 2 (French) - SLES-00719.html
Tomb Raider 2 (German) - SLES-00720.html
Tomb Raider 2 (Italian) - SLES-00107.html
Tomb Raider 2 (Uk) - SLES-00718.html
Tomb Raider 3 - SLPM-86193.html
Tomb Raider 3 - SLUS-00691.html
Tomb Raider 3 (French) - SLES-01682.html
Tomb Raider 3 (German) - SLES-01683.html
Tomb Raider 3 (Spanish) - SLES-01685.html
Tomb Raider 3 (Uk) - SLES-01649.html
Tomb Raider Chronicles - SLPM-86779.html
Tomb Raider Chronicles - SLUS-01311.html
Tomb Raider Chronicles (French) - SLES-03333.html
Tomb Raider Chronicles (German) - SLES-03334.html
Tomb Raider Chronicles (Italian) - SLES-03335.html
Tomb Raider Chronicles (Spanish) - SLES-03336.html
Tomb Raider Chronicles (Uk) - SLES-03331.html
Tomb Raider IV - La Revelation Finale (French) - SLES-02239.html
Tomb Raider IV - The Last Revelation - SLPS-02803.html
Tomb Raider IV - The Last Revelation - SLUS-00885.html
Tomb Raider IV - The Last Revelation (German) - SLES-02240.html
Tomb Raider IV - The Last Revelation (Spanish) - SLES-02242.html
Tomb Raider IV - The Last Revelation (Uk) - SLES-02238.html
Tomb Raider V1.0 - SLUS-00152.html
Tomb Raider V1.1 - SLUS-00000.html
Tomb Raiders - SLPS-00617.html
Tomba 2 - The Evil Swine Return - SCUS-94454.html
Tomba! - SCUS-94236.html
Tomba! The Wild Adventures - SLPS-02350.html
Tombi 2 (Spanish) - SCES-02687.html
Tombi! (Sces-01330)  - SCES-01330.html
Tombi! (Sces-01331) - SCES-01331.html
Tombi! 2 (German) - SCES-02685.html
Tommi Makkinen Rally - SLES-01228.html
Tonde! Tonde! Diet - SLPS-03347.html
Tondemo  Crisis! - SLPS-02113.html
Tonka Space Station - SLUS-01007.html
Tony Hawk Pro Skater 3 (French) - SLES-03646.html
Tony Hawk Pro Skater 3 (German - SLES-03647.html
Tony Hawk's 4 - SLUS-01465.html
Tony Hawk's Pro Skater - SLES-02055.html
Tony Hawk's Pro Skater - SLUS-00860.html
Tony Hawk's Pro Skater 2 - SLUS-01066.html
Tony Hawk's Pro Skater 2 (German) - SLES-02910.html
Tony Hawk's Pro Skater 2 (Uk) - SLES-02908.html
Tony Hawk's Pro Skater 3 - SLUS-01419.html
Tonzura Kun - SLPS-00430.html
Top Gun Fire at Will - SLES-00352.html
Top Gun Fire at Will - SLUS-00000.html
Topolo - SLPS-00620.html
Torc - SLES-00000.html
Torneko - The Last Hope - SLUS-01181.html
Toshinden Card Quest - SLPS-01113.html
Toshinden Subaru - SLPS-02027.html
Total Driving - SLES-00307.html
Total Eclipse Turbo - SLES-00046.html
Total Eclipse Turbo - SLUS-00021.html
Total Nba 96 - SCES-00067.html
Total Nba 98 - SCES-01079.html
Touge Max 2 - SLPS-01574.html
Touge Max G - SLPS-02361.html
Touge Max Saisouku Driver Master - SLPS-00592.html
Touhou Chinyuuki - Hafling Hearts!! - SLPS-00557.html
Touki Denshou - Angel Eyes - SLPS-01168.html
Tour Party - Sotsugyou Ryokou ni Ikou - SLPS-01167.html
Tower Dream 2 - SLPS-01789.html
Tower Dream 2 [Superlite 1500 Series] - SLPM-86442.html
Toys Dream - SLPS-01704.html
Transport Tycoon - SLES-00262.html
Trap Gunner - SLPS-01494.html
Trap Gunner - SLUS-00679.html
Trap Runner - SLES-01628.html
Trash It - SLES-00256.html
Treasure Gear - SLPS-00819.html
Treasures Of The Deep - SLUS-00430.html
Treasures of the Deep (French) - SCES-01070.html
Treasures of the Deep (Spanish) - SCES-01073.html
Treasures of the Deep (Uk) - SCES-00850.html
Trick'n Snowboarder - SLES-02304.html
Trick'n Snowboarder - SLUS-00979.html
Tricky Sliders - SLPS-01860.html
Triple Play '97 - SLUS-00237.html
Triple Play '98 - SLUS-00465.html
Triple Play '99 - SLUS-00618.html
Triple Play 2000 - SLUS-00827.html
Triple Play 2001 - SLUS-01082.html
Triple Play Baseball - SLUS-01345.html
TRL-The Rail Loaders - SLPS-02626.html
Tron Ni Kobun - RockMan Dash Series - SLPS-00000.html
Truck Racing - SLES-03953.html
True Love Story - SLPS-00586.html
True Love Story 2 - SLPS-01743 - SLPS-01744 - SLPS-01745.html
True Pinball - SLES-00052.html
True Pinball - SLUS-00337.html
Tsumu - SLPS-01746.html
Tsumu Light - SLPS-02253.html
Tsun Tsun Kumi 3 - SLPS-01839.html
Tsuri Baka Nisshis - SLPS-00440.html
Tsuridou - Umitsuri-hen - SLPS-01139.html
Tsuwadou Keiryuu Mizuumihen - SLPS-01752.html
Tunguska - SLES-03298.html
Tunnel B1 - SLES-00322.html
Tunnel B1 - SLUS-00188.html
Turbo Prop Racing - SCUS-94229.html
Turf Wind '96 - Take Yutaka Kyousouba Ikusei Game - SLPS-00388.html
Turnabout - SLES-04005.html
Turnabout - SLUS-01499.html
TV Animation X - Unmei No Tatakai - SLPS-03459.html
Twilight Syndrome - Saikai - SLPS-02850.html
Twin Goddesses - SLPS-00018.html
Twinbee RPG - SLPM-86077.html
Twinbee Taisen Puzzle Dama - SLPS-00015.html
Twisted Metal - SCES-00061.html
Twisted Metal - SCUS-94304.html
Twisted Metal - SIPS-60007.html
Twisted Metal - World Tour - SCES-00567.html
Twisted Metal 2 - SCUS-94306.html
Twisted Metal 3 - SCUS-94249.html
Twisted Metal 4 - SCUS-94560.html
Twisted Metal Ex - SIPS-60021.html
Twisted Metal- Small Brawl - SLUS-94642.html
Two Tenkaku - SLPS-00131.html
Tyco Rcassault With A Battery - SLUS-01074.html
U.P.P. - SLPS-01480.html
Ubik - SLES-00722.html
Uchuu Kidou Vanark - SLPS-01862.html
Uefa Challenge - SLES-02807.html
Uefa Champions League 9900 - SLES-00000.html
Uefa Champions League Season 1998-1999 (German) - SLES-01745.html
Uefa Champions League Season 1998-1999 (Uk) - SLES-01622.html
Uefa Euro 2000 - SLES-02704.html
Ultima Underworld - The Stygian Abyss - SLPS-00742.html
Ultimate 8 Ball - SLUS-00864.html
Ultimate Fighting Championship - SLES-02903.html
Ultimate Fighting Championship - SLUS-01143.html
Ultraman Fighting Evolution  - SLPS-01248.html
Ultraman Tiga & Ultraman Dyna Fighting Evolution - New Generations - SLPS-01455.html
Ultraman Zearth - SLPS-00652.html
Um Jammer Lammy - SCES-01753.html
Um Jammer Lammy - SCPS-18011.html
Um Jammer Lammy - SCUS-94478.html
Umi No Nushi Tsuri - SLPS-02172.html
Umi No Oh! Yah! - SLPS-01623.html
Umihara Kawase Shun - Second Edition [Maruan Series 1] - SLPS-02549.html
Umihara Kawase Shun - SLPS-00643.html
Undou Fusoku Kaishou Punch de Diet - SLPS-03380.html
Ungra Walker - SLPM-87055.html
Uno - SLPS-01349.html
Uprising-X - SLUS-00686.html
Urawaza Mahjong - Korette Tenhoutte Yatsukai - SLPS-02807.html
Urban Chaos - SLUS-01091.html
Urban Chaos (E-I-S) - SLES-02071.html
Urban Chaos (German) - SLES-02355.html
Usa Racer - SLES-03810.html
V.I.P. - SLES-03681.html
V.I.P. - SLUS-01228.html
V2000 - SLES-00545.html
Vadims - SLPS-00352.html
Vagrant Story - SLPS-02377.html
Vagrant Story - SLUS-01040.html
Vagrant Story (German) - SLES-02756.html
Vagrant Story (Uk) - SLES-02754.html
Valkyrie Profile - SLPM-86379-80.html
Valkyrie Profile - SLUS-01156-79.html
Vampir Kyuuketsuki Densetsu - SLPS-01932.html
Vampire - The Night Warriors - SLPS-00036.html
Vampire Hunter D - SLES-02731.html
Vampire Hunter D - SLPS-02477.html
Vampire Hunter D - SLUS-01138.html
Vampire Savior EX Edition - SLPS-01500.html
Vanark - SLUS-01035.html
Vandal Hearts - SLES-00204.html
Vandal Hearts - SLUS-00447.html
Vandal Hearts - Ushinawareta Kodai Bunmei - SLPM-86007.html
Vandal Hearts II - SLUS-00940.html
Vandal Hearts II - Tenjou no Mon - SLPM-86251.html
Vandal Hearts II (E-F-G) - SLES-02469.html
Vandal Hearts II (Spanish) - SLES-02496.html
Vangale - The War of Neo Century - SLPS-00873.html
Vanguard Bandits - SLUS-01070.html
Vanishing Point - SLES-02534.html
Vanishing Point - SLUS-01109.html
Vegas Casino - SLES-02918.html
Vegas Games 2000 - SLUS-00836.html
Vehicle Cavalier - SLPS-00232.html
Velldeselba Senki Tsubasa no Kunshou - SCPS-10027.html
Vermin Kids - SLPS-00558.html
Vib-Ribbon - SCES-02873.html
Vib-Ribbon - SCPS-18012.html
Victory Boxing 2 - SLES-01393.html
Victory Boxing Challenger - SLES-02727.html
Victory Boxing Champion Edition - SLES-00180.html
Viewpoint - SLES-00123.html
Viewpoint - SLUS-00033.html
Vigilante 8  - SLPS-01703.html
Vigilante 8 - 2nd Offense - SLES-02162.html
Vigilante 8 - 2ND Offense - SLUS-00868.html
Vigilante 8 - SLUS-00510.html
Vigilante 8 (German) - SLES-01214.html
Vigilante 8 (Uk) - SLES-01212.html
Viper - SLES-01302.html
Virtual Kasparov - SLUS-00000.html
Virtual Kiryu No Ken - SLPS-00338.html
Virtual Kyotei 20 - SLPS-02748.html
Virtual Kyotei 21 - SLPS-03199.html
Virtual Pool - SLUS-00034.html
Virtual Pro Wrestling - SLPS-00449.html
Virus - The Battle Field - SLPS-02008.html
Virus Its Aware - SLES-01317.html
Viva Football - SLES-00761.html
Viva Soccer - SLUS-00657.html
VMX Racing - SLUS-00123.html
Voice Paradice Excella - SLPS-00590.html
Volfoss - SLPS-03140.html
VR Baseball '97 - SLUS-00281.html
VR Baseball '99 - SLUS-00637.html
Vr Golf '97 - SLUS-00198.html
Vr Soccer '96 - SLUS-00199.html
VR Sports Powerboat Racing - SLES-00931.html
Vr Sports Powerboat Racing - SLUS-00625.html
V-Rally 2 - Championship Edition - SLES-01907.html
V-Rally 2 - Championship Edition - SLPS-02516.html
V-Rally 2 - Need For Speed - SLUS-01003.html
V-Rally '97 - CHampionship Edition - SLES-00250.html
V-Rally Championship Edition 2 - SLPS-02516.html
Vs. - SLES-01104.html
Vs. - SLUS-00513.html
Waaneba Island - World Neverland Series - SLPS-02639.html
Wacky Races - SLES-02468.html
Wai Wai 3-nin Uchi Mahjong - SLPM-86696.html
Wai Wai Trump Taisen - SLPM-86657.html
Waku Puyo Dungeon Ketteiban - SLPS-01966.html
Waku Waku Volleyball - SLPS-01695.html
Wakusei Koukitai Little Cats  - SLPS-01374.html
Walt Disney World Quest - Magical Racing Tour - SLES-02733.html
Walt Disney World Quest - Magical Racing Tour - SLUS-01106.html
Walt Disney's Das Dschungelbuch - Groove Party (German) - SCES-03025.html
Walt Disney's The Jungle Book - Rhythm N'Groove - SLUS-01278.html
Wander Trek - SCPS-10072.html
Wangan Trial - Cinematic Racing - SLPS-01213-4.html
Wanted - SLES-04158.html
War Gods - SLES-00538.html
War Gods - SLUS-00328.html
Warcraft II - The Dark Saaga - SLPS-01098.html
Warcraft II - The Dark Saga - SLES-00878.html
Warcraft II - The Dark Saga - SLUS-00480.html
Warera Mitsubayashi Tankenkai - SLPS-02658.html
WarGames -Defcon 1 - SLES-00978.html
WarGames -Defcon 1 - SLUS-00599.html
Warhammer - Dark Omen - SLUS-00550.html
Warhammer - Shadow of the Horned Rat - SLES--00028.html
Warhammer - Shadow of the Horned Rat - SLUS--00117.html
Warhammer- Dark Omen - SLES-01159.html
Warhawk - The Red Mercury Missions - SCES-00062.html
Warhawk - The Red Mercury Missions - SCUS-94305.html
Warm Up! - SLES-03247.html
Warpath - Jurassic Park - SLES-02253.html
Warpath -Jurassic Park - SLUS-00976.html
Warriors of Might & Magic (English, Spanish & Italian) - SLES-03330.html
Warriors Of Might And Magic -  (English,French & German)SLES-03263.html
Warriors Of Might And Magic - SLUS-01204.html
Warzone 2100 - SLUS-00819.html
Warzone 2100 (E-I-S) - SLES-00937.html
Warzone 2100 (German) - SLES-01741.html
Wayne Gretzky's 3D Hockey '98 - SLES-01160.html
Wayne Gretzky's 3D Hockey '98 - SLUS-00147.html
Wcw Backstage Assault - SLUS-01274.html
WCW Mayhem - SLES-02193.html
WCW Mayhem - SLUS-00963.html
WCW Nitro - SLES-01137.html
WCW Nitro - SLUS-00397.html
Wcw Vs. The World - SLES-00763.html
Wcw Vs. The World - SLUS-00455.html
WCWNCW Thunder - SLES-01663.html
WCWNCW Thunder - SLUS-00779.html
Welcome House - SLPS-00190.html
Welcome House 2 - Keaton & His Uncle - SLPS-00633.html
Weltorv Estleia - SLPS-01887.html
Wer Wird Milliondr - 2. Edition - SLES-03591.html
Wer Wird Milliondr - Junior - SLES-03594.html
Wer Wird Milliondr - SLES-03141.html
Westlife - Fan-o-mania - SLES-03806 -.html
Wheel Of Fortune - SLUS-00683.html
Wheel Of Fortune 2nd Edition - SLUS-01174.html
Whistle - Fuki Nukeru Kaze - SPLPM-87214.html
White Diamond - SLPS-02352.html
Whizz - SLES-00141.html
Who Wants to Be a Millionaire - 2nd Edition - SCUS-94567.html
Who Wants to Be a Millionaire - 2nd Edition - SLES-03589.html
Who Wants to Be a Millionaire - 3rd Edition - SCUS-94644.html
Who Wants to Be a Millionaire - SLES-02998.html
Wild 9 - SLES-01333.html
Wild 9 - SLUS-00425.html
Wild Arms - SCPS-10028 - SCPS-91038.html
Wild Arms - SCUS-94608.html
Wild Arms (French) - SCES-01171.html
Wild Arms (German) - SLES-01172.html
Wild Arms (Spanish) - SCES-01174.html
Wild Arms (Uk) - SCES-00321.html
Wild Arms 2 - SCUS-94484 - SCUS-94498.html
Wild Arms 2 Second Ignition - SCPS-10089.html
Wild Boater - SLPS-02174.html
Wild Rapids - SLES-02631.html
Williams Arcade's Greatest Hits - SLES-00000.html
Williams Arcade's Greatest Hits - SLUS-00201.html
Wing Commander 3 - Heart Of The Tiger - SLUS-00019.html
Wing Commander 3 - Heart Of The Tiger (German) - SLES-00105.html
Wing Commander 4  - The Price Of Freedom (German) - SLES-00661.html
Wing Commander 4  - The Price Of Freedom (Uk) - SLES-00659.html
Wing Commander 4 - The Price Of Freedom - SLUS-00270.html
Wing Over - SLES-00540.html
Wing Over - SLPS-00598.html
Wing Over 2 - SLES-01375.html
Winning Post 2 - Program '96 - SLPS-00509.html
Winning Post 2 - SLPS-00293.html
Winning Post 2 Final '97 - SLPS-01020.html
Winning Post 3 - Program 98 - SLPM-86128.html
Winning Post 3 - SLPS-01263.html
Winning Post 4 - SLPM-86302.html
Winning Post EX - SLPS-00189.html
Wipeout - SCES-00010.html
Wipeout - SCUS-94301.html
Wipeout - SIPS-60003.html
Wipeout 3 - SCES-01909.html
Wipeout 3 - SCPS-10098.html
Wipeout 3 - SLUS-00865.html
Wipeout 3 - Special Edition - SCES-02845.html
Wipeout 2097 - SLES-00327.html
Wipeout Xl - SCUS-94351.html
Wipeout Xl - SIPS 60010.html
Wizardry - Dimguil - SLPS-02691.html
Wizardry - Llylgamyn Saga - SLPS-01279.html
Wizardry - New Age of Llylgamyn - SLPS-02349.html
Wizardry Empire - Princess of the Ancient - SLPM-86689.html
Wizardry Empire II - Legacy of the Princess - SLPM-87139.html
Wizardry VII - Gadeia no Houshu - SCPS-10010.html
Wizard's Harmony (Reprint) - SLPS-01877.html
Wizard's Harmony 2 - SLPS-00984.html
Wolf Fang - Kuuga 2001 - SLPS-00254.html
Wolkenkratzer - Shinpan No Tou - SLPS-00197.html
Wonder 3 - Arcade Gears - SLPS-00927.html
Wonder B-Cruise - SLPS-02322.html
Woody Woodpecker no Go! Go! Racing - SLPM-86730.html
Woody Woodpecker Racing - SLES-02972.html
Woody Woodpecker Racing - SLUS-01188.html
World Championship Snooker - SLES-02196.html
World Cup '98 - SLES-01295.html
World Cup '98 - SLUS-00644.html
World Cup Golf - Professional Edition - SLUS-00063.html
World Destruction League - Thunder Tanks - SLES-03232.html
World Destruction League - Thunder Tanks - SLUS-01175.html
World Destruction League - War Jetz - SLES-02259.html
World Destruction League - War Jetz - SLUS-01247.html
World League Soccer - Challenge Nippon! - SLPS-01389.html
World League Soccer '98 (E-G-S) - SLES-00717.html
World Neverland 2 - SLPS-01884.html
World Neverland Olerun Oukoku Monogatari - SLPS-01037.html
World Pro Tennis '98 - SLPS-01379.html
World Soccer Jikkyou Winning Eleven 3 - Final Version - SLPM-86162.html
World Soccer Jikkyou Winning Eleven 4 - SLPM-86291.html
World Stadium 3 - SLPS-01970.html
World Stadium 4 - SLPS-02660.html
World tour conductor - SLPS-02231.html
World's Scariest Police Chases - SLES-03425.html
World's Scariest Police Chases - SLUS-01165.html
Worms - SLES-00119.html
Worms - SLUS-0336.html
Worms Armageddon - SLUS-00888.html
Worms Armageddon (German) - SLES-02331.html
Worms Armageddon (Uk) - SLES-02217.html
Worms Armaggeddon (SLES-02332) - SLES-02332.html
Worms Pinball - SLES-00483.html
Worms World Party - SLES-03804.html
Worms World Party - SLUS-01448.html
WRC - FIA World Rally Championship Arcade - SCES-03907.html
Wreckin Crew - SLES-00489.html
Wreckin Crew - SLUS-00587.html
WTC World Touring Car Championship - SLPS-02852.html
Wu Tang - Taste The Pain (Uk) - SLES-02170.html
Wu Tang Clan-Shaolin Style (German) - SLES-02172.html
Wu-Tang - Shaolin Style - SLUS-00929.html
Wwf Attitude - SLES-01980.html
Wwf Attitude - SLUS-00831.html
Wwf Attitude (German) - SLES-02255.html
Wwf In Your House - SLES-00286.html
WWF In your house - SLUS-00246.html
Wwf Smackdown - SLES-02619.html
Wwf Smackdown - SLUS-00927.html
WWF Smackdown! 2 - Know Your Role - SLES-03251.html
WWF Smackdown! 2 - Know Your Role - SLUS-01234.html
Wwf Warzone - SLES-00804.html
Wwf Warzone Version 1.0 - SLUS-00495.html
Wwf Warzone Version 1.1 - SLUS-00495.html
Wwf Wrestlemania - The Arcade Game - SLES-00103.html
Wwf Wrestlemania - The Arcade Game - SLUS-00013.html
X.Racing - SLPS-01063.html
X2 - SLES-00455.html
X2 - SLPS-00766.html
X-Bladez - SLUS-01444.html
X-Com - Enemy Unknow - SLES-00054.html
X-Com - Terror from the Deep - SLES-00077.html
X-Com - Ufo Defense - SLUS-00141.html
Xena - Warrior Princess - SLUS-00000.html
Xena - Warrior Princess (German) - SLES-02267.html
Xena - Warrior Princess (Spanish) - SLES-02268.html
Xenocracy (French) - SLES-00812.html
Xenocracy (Uk) - SLES-00811.html
Xenogears - SLPS-01160.html
Xenogears - SLUS-00664 - SLUS-00669.html
Xevious 3D G+ - SLUS-00461.html
Xevious 3DG+ - SCES-00736.html
Xevious 3DG+ - SLPS-00750.html
Xi [Sai] - SCPS-10051.html
Xi [Sai] Jumbo - SCPS-10123.html
X-Men - Children Of The Atom - SLUS-00044.html
X-Men Mutant Academy - SLPM-86765.html
X-Men Mutant Academy - SLUS-00744.html
X-Men Mutant Academy (German) - SLES-02866.html
X-Men Mutant Academy (Uk) - SLES-02865.html
X-Men Mutant Academy 2 - SLES-03630.html
X-Men Mutant Academy 2 - SLUS-01382.html
X-Men Vs Street Fighter - SLES-01247.html
X-Men Vs Street Fighter - SLUS-00627.html
X-Men Vs Street Fighter Ex Edition - SLPS-01284.html
XS Airboat Racing - SLUS.01566.html
XS Junior League Dodgeball - SLUS-01560.html
XS Moto - SLES-04095.html
XS Moto - SLUS-01506.html
X'Treme Roller - SLES-03433.html
Yagami Hiroki no Game-Taste - Munasawagi no Yokan - SLPS-02064.html
Yakata Nightmare Project - SLPS-01045.html
Yakiniku Bugyou - SLPS-03209.html
Yakitori Musume - SLPS-03435.html
Yamifuku Natsu Futatabi - SLPS-01878.html
Yarudora Series Vol.3 - Sampaguita - SCPS-10067 - SCPS-10068.html
Yoshimoto Mahjong Club Deluxe [Superlite 1500 series] - SLPM-86633.html
You Don't Know Jack - SLUS-00716 - SLUS-00762.html
You Don't Know Jack (German) - SLES-03499.html
You Don't Know Jack Mock 2 - SLUS-01194.html
Youchien Gaiden Kareinaru Casino Club - Double Draw - SLPS-03098.html
Youkai Hana Asobi - SLPM-86857.html
Yoyo's Puzzle Park - SLES-01784.html
Yu-Gi-Oh! Monster Capsule Breed & Battle - SLPM-86096.html
Yu-Gi-Oh! Shin Duel Monsters - SLPM-00000.html
Yu-Gi-Oh-Forbidden Memories - SLUS-01411.html
Yu-Gi-Oh-Forbidden Memories (German) - SLES-03949.html
Yu-Gi-Oh-Forbidden Memories (Spanish) - SLES-03951.html
Yukyu Gensokyoku 3 - Perpetual Blue - SLPS-02517.html
Yukyu Gensokyoku Ensemble Vol.1 - SLPS-01742.html
Yukyu Gensokyoku Ensemble Vol.2 - SLPS-01875.html
Yukyu Gensoukyoku (Limited Edition) - SLPS-00955.html
Yukyu Gensoukyoku 2ND Album - SLPS-01258.html
Yukyu Kumikyoku - All Star Project - SLPS-02911.html
Yuugen Kaisha Chikyuu Boueitai - Guard of Earth Organization - SLPS-02024.html
Yuukyuu No Eden - The Eternal Garden - SLPS-01928.html
Yuusha-Ou Gaogaigar - Blockaded Numbers - SLPS-01980.html
Yuwaku Office Renaika - SLPS-01460.html
Zanac x Zanac - SLPS-03354.html
Zap Snowboarding Trix 98 - SLPS-00000.html
Zeiramzone - SLPS-00575.html
Zeitgeist - SLPS-00034.html
Zen Nihon GT Senahuken Max Rev - SLPS-00715-6.html
Zen-Nippon Joshi Pro Wrestling - Joou Densetsu Yume no Taikousen - SLPS-01475.html
Zen-Nippon Pro Wrestling - Ouja no Kon - SLPS-01849.html
Zera-Chan Puzzle - Pitatto Pair - SLPS-03167.html
Zero Divide - SLES-00159.html
Zero Divide - SLPS-00083.html
Zero Divide - SLUS-00183.html
Zero Divide 2 - SLPS-00891.html
Zero Divide 2 (Germany) - SCES-01288.html
Zero Divide 2 (Spanish) - SCES-01290.html
Zero Divide 2 (Uk) - SCES-01094.html
Zero Pilot - SCPS-10049.html
Zero4 Champ Doozy J - SLPS-00755.html
Zeus - Carnage Heart Second - SLPS-01666.html
Zeus 2 - Carnage Heart - SLPS-02318.html
Zig Zag Ball - SLPS-01483.html
Zill O'LL - SLPM-86311.html
Zoboomafoo Leapin' Lemurs! - SLUS-1401.html
Zoids - Battle Card Game - SLPS-03255.html
Zoids - Zenebus vs Heric - SLPS-02982.html
Zoids 2 - Helic Republic VS Guylos Empire - slps-03389.html
Zoku Gussun Oyoyo - SLPS-00488.html
Zoku Mikagura Shoujo Tanteidan - Kanketsuhen - SLPS-02266.html
Zoop (America's Largest killer of time) - SLUS-00078.html
Zutto Issho - With me Everytime - SLPS-01238.html
Zutto Issho - With me Everytime (Major Wave Series) - SLPM-86523.html
1 On 1 - SLPS-00000.html
2Xtreme - SCES-00400.html`.split('\n');

var b = [];
for (let c of a) {
  b.push(encodeURI(c));
}

fs.writeFileSync('./encoded.txt', b.join('\n'));