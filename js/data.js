var teams = [
    "ALBA",
    "PAKS",
    "BUDAPEST",
    "DEBRECEN",
    "KECSKE",
    "KÖRMEND",
    "FALCO",
    "NYÍREGYHÁZA",
    "KAPOSVÁR",
    "MVM",
    "SZTE",
    "SOPRON",
    "SZOLNOK",
    "ZTE"];

var jatekosok = [
    //csapat, mezszám, név, születés, idk(talán poszt), magasság, súly
    ['FALCO',1, 'HORVÁTH Ádám',2004,12,193,90],
    ['FALCO',2, 'HANSEN Dániel',2004,23,191,80],
    ['FALCO',3, 'BROWN Zachary Garrett',1995,3,198,97],
    ['FALCO',5, 'TIBY Matthew James',1992,45,203,109],
    ['FALCO',6, 'KELLER Ákos',1989,5,206,110],
    ['FALCO',7, 'POT Stefan',1994,1,195,95],
    ['FALCO',9, 'PERL Zoltán',1995,21,195,88],
    ['FALCO',11, 'COWELS III Raymond',1990,2,193,95],
    ['FALCO',15, 'TAKÁCS Zsolt',2003,4,200,94],
    ['FALCO',20, 'SÖVEGJÁRTÓ Ábel György',2002,34,201,92],
    ['FALCO',21, 'KOVÁCS Benedek Máté',2001,34,201,95],
    ['FALCO',22, 'KRIVACSEVICS Markó',1996,45,208,98],
    ['FALCO',24, 'BARAC Boris',1992,45,206,105],
    ['FALCO',25, 'VERASZTÓ Péter',2001,1,190,85],
    ['ALBA',0, 'BALSAY Ádám',2001,12,196,80],
    ['ALBA',3, 'PONGÓ Marcell',1997,12,194,90],
    ['ALBA',5, 'SZABÓ Zsolt',1986,45,204,111],
    ['ALBA',7, 'TAKÁCS Milán',2000,12,194,90],
    ['ALBA',12, 'FORD Quincy G.',1993,43,203,96],
    ['ALBA',14, 'VÉRTES Zsombor',2003,3,194,93],
    ['ALBA',15, 'KERTÉSZ Dávid',2004,23,199,85],
    ['ALBA',25, 'DE COSEY Quenton Darell',1994,23,196,95],
    ['ALBA',30, 'SOMOGYI Ádám',2000,12,195,89],
    ['ALBA',31, 'PHILMORE Isaiah',1989,45,203,109],
    ['ALBA',34, 'TAKÁCS Martin',2000,32,193,91],
    ['ALBA',42, 'GÓBI Marcell',2002,34,197,86],
    ['ALBA',96, 'OSZTOICS Milán',2004,54,206,95],
    ['ALBA',99, 'VOJVODA Dávid',1990,21,196,91],
    ['PAKS',0, 'BUCKINGHAM DeMonte Terrell',1997,23,193,98],
    ['PAKS',0, 'GÉRINGER Gergő',2005,34,194,87],
    ['PAKS',1, 'FRANK Áron',2000,12,191,84],
    ['PAKS',3, 'GULYÁS Milán',1998,23,192,85],
    ['PAKS',4, 'PAJOR Dávid',2001,2,188,80],
    ['PAKS',5, 'TAIWO Samuel',2000,5,205,92],
    ['PAKS',6, 'KOVÁCS Ákos',1988,12,186,75],
    ['PAKS',7, 'EILINGSFELD János',1991,4,200,103],
    ['PAKS',9, 'GRUBOR Milos',1991,34,201,98],
    ['PAKS',11, 'CSIZMADIA Attila',2002,45,205,96],
    ['PAKS',15, 'EDWIN Deon Javern',1992,12,191,95],
    ['PAKS',20, 'ATKINSON JR. Paul St Aubyn',1999,45,206,104],
    ['PAKS',25, 'KAROSI Gergely',1999,23,192,79],
    ['BUDAPEST',0, 'KOPÁCSI Ákos',2001,12,180,75],
    ['BUDAPEST',0, 'MAJOR Bulcsú',2005,23,194,84],
    ['BUDAPEST',0, 'REIZINGER Máté',2004,23,194,78],
    ['BUDAPEST',1, 'DR. DEMETER Attila',1997,23,198,94],
    ['BUDAPEST',3, 'TAKÁCS Dániel',1996,12,185,85],
    ['BUDAPEST',6, 'TANOH DEZ András',2002,2,189,82],
    ['BUDAPEST',7, 'SIMON Kristóf Gábor',1994,12,186,85],
    ['BUDAPEST',8, 'MIJOVIC Stefan',1995,23,193,91],
    ['BUDAPEST',9, 'HAJDU Péter Márton',2004,3,198,87],
    ['BUDAPEST',11, 'VÖLGYI Marcell Zoltán',1998,4,201,96],
    ['BUDAPEST',21, 'COHILL Eric Edward',2003,3,192,82],
    ['BUDAPEST',22, 'VÁMOS Ádám',2003,4,199,100],
    ['BUDAPEST',25, 'PERINGER Balázs',1996,5,212,116],
    ['BUDAPEST',27, 'CSOMÓS Kristóf',2002,2,192,82],
    ['BUDAPEST',44, 'TARJÁN Izsák Simon',2002,4,200,98],
    ['BUDAPEST',95, 'RÉDEI Péter',2002,2,190,81],
    ['DEBRECEN',0, 'FÁBIÁN Szabolcs',2000,5,212,103],
    ['DEBRECEN',0, 'HŐGYE Patrik',2005,2,195,90],
    ['DEBRECEN',0, 'KOVÁCS Ákos Bence',2003,4,205,101],
    ['DEBRECEN',0, 'SÁGODI Róbert',2004,1,190,83],
    ['DEBRECEN',1, 'TAYLOR JR Jimmie Lee',1995,5,210,110],
    ['DEBRECEN',5, 'GUMBS Nathanial Keenan',1996,3,195,90],
    ['DEBRECEN',6, 'POLYÁK László',1993,2,192,95],
    ['DEBRECEN',7, 'NEUWIRTH Bence',2002,2,192,90],
    ['DEBRECEN',9, 'BALÁZSI Soma Bence',2001,3,195,95],
    ['DEBRECEN',10, 'KENÉZ Csaba',2002,1,192,85],
    ['DEBRECEN',12, 'SCOTT Michaelyn Duane',1993,1,184,92],
    ['DEBRECEN',13, 'DRENOVAC Djordje',1992,3,198,100],
    ['DEBRECEN',17, 'GÁSPÁR Mátyás',2000,4,198,100],
    ['DEBRECEN',20, 'GARAMVÖLGYI Ákos Tibor',1994,4,203,105],
    ['DEBRECEN',21, 'TÓTH Ádám',1989,5,208,115],
    ['DEBRECEN',24, 'MÓCSÁN Bálint',1997,2,192,90],
    ['KECSKE',3, 'TOWNES Marques R',1995,1,193,95],
    ['KECSKE',4, 'TÓTH Balázs',2003,3,194,81],
    ['KECSKE',5, 'TAKÁCS Erik',2002,4,200,88],
    ['KECSKE',6, 'TÓTH Patrik',2004,5,201,102],
    ['KECSKE',8, 'IVKOVIC Milán',2003,2,195,88],
    ['KECSKE',9, 'TÓTH Barna',2003,1,187,82],
    ['KECSKE',11, 'KARAHODZIC Kemal',1989,5,210,120],
    ['KECSKE',13, 'KUCSERA Dániel',1999,4,199,95],
    ['KECSKE',14, 'DRAMICANIN Rastko',1986,45,208,111],
    ['KECSKE',15, 'BORISOV Milos',1985,34,200,195],
    ['KECSKE',16, 'KISS Dávid',2002,5,209,105],
    ['KECSKE',17, 'WITTMANN Krisztián',1985,1,185,83],
    ['KECSKE',18, 'BOTKA Botond',2002,12,181,72],
    ['KECSKE',19, 'VELKEY Géza',2003,2,195,73],
    ['KECSKE',21, 'FAZEKAS Máté',2000,5,205,105],
    ['KECSKE',24, 'KLOBUCAR Jaka',1987,23,198,91],
    ['KÖRMEND',0, 'GERÖLY Márton András',2004,34,198,92],
    ['KÖRMEND',1, 'CHAMBERS Siyani Tahir',1993,1,182,79],
    ['KÖRMEND',2, 'MOORE Michael Jarade',1994,4,201,94],
    ['KÖRMEND',3, 'TAKÁCS Kristóf',2002,2,195,90],
    ['KÖRMEND',6, 'CAKARUN Marjan',1990,5,203,106],
    ['KÖRMEND',7, 'DURÁZI Krisztofer',1998,45,200,96],
    ['KÖRMEND',8, 'DOKTOR Péter László',1998,1,189,81],
    ['KÖRMEND',9, 'KISS Mátyás',2001,12,193,92],
    ['KÖRMEND',10, 'HERCZEG Kristóf',2003,12,183,73],
    ['KÖRMEND',11, 'MITCHELL Wendell Charles',1997,12,187,83],
    ['KÖRMEND',14, 'PARRISH Alfred Brandon',1994,3,196,96],
    ['KÖRMEND',15, 'FERENCZ Csaba',1985,3,195,105],
    ['KÖRMEND',17, 'BALOGH Máté',2001,45,203,104],
    ['KÖRMEND',23, 'OMENAKA Godwin Ekene',2000,5,206,113],
    ['NYÍREGYHÁZA',0, 'DICKERSON Demarco Christon',1997,12,192,80],
    ['NYÍREGYHÁZA',0, 'PERRY Darius James',1999,1,185,82],
    ['NYÍREGYHÁZA',2, 'HENDERSON Harrison Blake',1997,4,210,105],
    ['NYÍREGYHÁZA',3, 'VASKÓ György',2000,12,181,80],
    ['NYÍREGYHÁZA',4, 'SZOBI Dániel',1989,3,198,85],
    ['NYÍREGYHÁZA',5, 'MOKÁNSZKI Milán',2004,3,192,86],
    ['NYÍREGYHÁZA',6, 'MOKÁNSZKI Máté',2000,45,202,103],
    ['NYÍREGYHÁZA',8, 'WILLIAMS Jordan Kevin',1995,45,203,110],
    ['NYÍREGYHÁZA',11, 'BAZSÓ Brúnó',1995,3,195,88],
    ['NYÍREGYHÁZA',12, 'KISS Benedek',2001,3,192,75],
    ['NYÍREGYHÁZA',16, 'TÓTH Gergő',2002,45,202,100],
    ['NYÍREGYHÁZA',17, 'KASS Balázs',2002,3,192,75],
    ['NYÍREGYHÁZA',20, 'FAZEKAS Csaba',1999,12,197,80],
    ['NYÍREGYHÁZA',21, 'DOLEZAJ Marek',1998,45,208,95],
    ['KAPOSVÁR',1, 'PAÁR Márk',2003,23,196,95],
    ['KAPOSVÁR',2, 'HUGHES II Michael Anthony',1998,5,205,109],
    ['KAPOSVÁR',3, 'SZŐKE Bálint',2005,3,197,84],
    ['KAPOSVÁR',4, 'PETERSEN Sebastian Aris',1995,1,188,85],
    ['KAPOSVÁR',5, 'HALMAI Dániel',2004,1,184,77],
    ['KAPOSVÁR',8, 'GABRIC Tomislav',1995,34,203,95],
    ['KAPOSVÁR',10, 'GRIFFIN Dayon Lynn',1995,23,196,86],
    ['KAPOSVÁR',11, 'HENDLEIN Roland',1986,4,205,103],
    ['KAPOSVÁR',12, 'CSORVÁSI Milán',1988,5,208,115],
    ['KAPOSVÁR',14, 'ANTALICS Dániel',2005,4,203,96],
    ['KAPOSVÁR',21, 'PUSKA Bence',2001,3,197,78],
    ['KAPOSVÁR',23, 'HAJDUK Attila Dominik',2002,4,199,95],
    ['KAPOSVÁR',31, 'KRNJAJSKI Boris',1998,12,190,85],
    ['KAPOSVÁR',69, 'BOGDÁN Benedek',1997,34,200,97],
    ['MVM',1, 'SZABADFI Márk',2004,2,190,84],
    ['MVM',3, 'WERNER Viktor',1999,5,204,100],
    ['MVM',5, 'CAREV Aleksej',2000,34,198,92],
    ['MVM',7, 'KRISTYÁK Viktor',2006,3,192,77],
    ['MVM',8, 'BARNJAK Josip',1998,3,196,95],
    ['MVM',9, 'RUJÁK András',1988,12,189,84],
    ['MVM',10, 'CALLOWAY Jacob Dalton',1996,4,203,98],
    ['MVM',11, 'VARGA Gergő Detre',2003,3,192,82],
    ['MVM',13, 'MUCZA Tamás',1999,3,191,88],
    ['MVM',17, 'ILLÉS Máté Csongor',1995,12,190,87],
    ['MVM',19, 'DOROGI Gergő',2000,45,201,100],
    ['MVM',21, 'PÁPAI Máté',1998,5,203,110],
    ['MVM',25, 'DIMITRIJEVIC Dorde',1997,12,186,84],
    ['MVM',55, 'KRESTININ Denis',1994,5,201,97],
    ['SZTE',0, 'WASHINGTON Desmond Marquis',1992,1,188,82],
    ['SZTE',1, 'ROBERSON Tyler Evan',1994,5,204,120],
    ['SZTE',2, 'PERSON JR Wesley Lavon',1995,12,191,86],
    ['SZTE',8, 'BOGNÁR Kristóf',1994,45,204,98],
    ['SZTE',9, 'STAROVLAH Milic',1998,34,200,95],
    ['SZTE',11, 'BALOGH Szilárd',2001,1,185,78],
    ['SZTE',12, 'BELLA Ádám',2002,23,189,84],
    ['SZTE',15, 'SZATMÁRI Zsombor',2000,23,194,96],
    ['SZTE',16, 'CSORNAI Csaba',2002,4,192,93],
    ['SZTE',20, 'MAYER Ákos',1998,34,202,87],
    ['SZTE',21, 'FILIPOVIC Stefan',1998,5,207,110],
    ['SZTE',22, 'KOVÁCS Ádám',1993,34,201,98],
    ['SZTE',31, 'KERPEL-FRONIUS Balázs',1992,34,195,93],
    ['SZTE',35, 'POLÁNYI Kristóf',2000,12,187,80],
    ['SOPRON',1, 'JOSEPH Yasiin Yousef',1996,1,185,82],
    ['SOPRON',2, 'CSENDES Péter',2004,12,186,75],
    ['SOPRON',3, 'SCHÖLL Richárd',2002,5,202,96],
    ['SOPRON',5, 'SHINE Tavarius Damon',1994,23,198,91],
    ['SOPRON',6, 'MOLNÁR Márton',1994,5,208,111],
    ['SOPRON',8, 'TAKÁCS Norbert',1990,3,200,98],
    ['SOPRON',10, 'SUPOLA Zoltán',1988,23,191,88],
    ['SOPRON',11, 'DURHAM Juwan Josiah Éarry',1997,5,211,104],
    ['SOPRON',15, 'SITKU Márton',2000,34,203,99],
    ['SOPRON',21, 'BARNETT Jordan Kahlil',1995,34,201,96],
    ['SOPRON',23, 'JONES Andre',1990,12,190,85],
    ['SOPRON',27, 'VALERIO BODON Vincent',2001,34,207,89],
    ['SOPRON',77, 'CSÁTALJAY Péter',2004,23,191,75],
    ['SZOLNOK',0, 'BARNES Auston Willis',1991,4,203,103],
    ['SZOLNOK',1, 'DURHAM Jabril Armin',1994,1,183,90],
    ['SZOLNOK',2, 'LUKÁCS Norbert',2001,3,204,87],
    ['SZOLNOK',3, 'PALLAI Tamás',2001,12,192,84],
    ['SZOLNOK',4, 'VINCZE Roland',2004,3,194,94],
    ['SZOLNOK',6, 'GAVIN James Michael',1991,12,188,86],
    ['SZOLNOK',7, 'RUDNER Gábor',1998,3,196,93],
    ['SZOLNOK',8, 'ABRAHAM Arabo',2003,5,207,100],
    ['SZOLNOK',9, 'TÓTH József',2005,12,190,75],
    ['SZOLNOK',10, 'RÉVÉSZ Ádám',1995,5,200,112],
    ['SZOLNOK',11, 'SUBOTIC Bojan',1990,4,204,107],
    ['SZOLNOK',12, 'CSORNAI Bence',2002,2,192,84],
    ['SZOLNOK',15, 'SEBŐK András',2003,1,185,84],
    ['SZOLNOK',21, 'PONGÓ Máté',1993,1,182,86],
    ['SZOLNOK',24, 'GILSZKI Erik',2001,3,194,78],
    ['SZOLNOK',50, 'WILLIAMSON Andre Marcell',1989,45,203,105],
    ['ZTE',0, 'TRICE DMitrik Alexander',1996,1,180,85],
    ['ZTE',3, 'OREILLY Liam Kieffer',1996,2,190,85],
    ['ZTE',5, 'SMITH Mitchell Daniel',1997,4,203,100],
    ['ZTE',7, 'RAKICEVIC Petar',1995,2,195,85],
    ['ZTE',9, 'NÉMETH Ákos',1998,2,194,85],
    ['ZTE',10, 'SIMÓ Bence',2002,2,180,85],
    ['ZTE',12, 'KELLER Iván',1995,3,197,90],
    ['ZTE',13, 'POLSTER Attila',2000,3,203,85],
    ['ZTE',15, 'MAKKOS Dávid',2004,2,190,75],
    ['ZTE',21, 'OSTOJIC Danilo',1996,5,203,100],
    ['ZTE',22, 'ZSÍROS Péter',1994,4,200,100],
    ['ZTE',27, 'SZALAY Domonkos',2005,2,190,85],
    ['ZTE',41, 'CSUTI Kornél',2004,5,203,95]
];


var timeinsec = 0;
var maxtime = 40;

function millisec(){
        var inst = setInterval(time, 1000);
}

function time(){
    if (timeinsec != maxtime){
        timeinsec++;
        console.log(timeinsec);
    }
}

var homepoints = [];
//pont hozzáadás
function homepointadd(){
    const point = document.getElementById('home-point').value;
    console.log(point);
    homepoints.push(point);
    console.log(homepoints);
}
//informacios div 
function informationon() {
    const information = document.getElementById('information').style.display = "block";
}
function informationoff() {
    const information = document.getElementById('information').style.display = "none";
}
function hometeamadd(){
    const hometeam = document.getElementById('home-team');

    //home team jatekosok boxhoz
    var e = "";   
    for (var y=0; y<jatekosok.length; y++)
    {
        if (jatekosok[y][0] == hometeam.value){
            e += "<div>" + jatekosok[y][2] + "</div>" + "<br/>";
        }
    }
    document.getElementById("homesubtitutes").innerHTML = e;
}
function awayteamadd(){
    //away team jatekosok boxhoz
    const awayteam = document.getElementById('away-team');
    var i = ""; 
    for (var y=0; y<jatekosok.length; y++)
    {
        if (jatekosok[y][0] == awayteam.value){
            i += "<div>" + jatekosok[y][2] + "</div>" + "<br/>";
        }
    }
    document.getElementById("awaysubtitutes").innerHTML = i;
}
//box feltoltesek
function add() {
    const hometeam = document.getElementById('home-team');
    const awayteam = document.getElementById('away-team');
    const boxes = document.getElementById('players-box');
    //home team feltöltés
    for (let i = 0; i < teams.length; i++) {
        hometeam.add(new Option(teams[i]));
    }
    //away team feltöltés
    for (let i = 0; i < teams.length; i++) {
        awayteam.add(new Option(teams[i]));
    }
}