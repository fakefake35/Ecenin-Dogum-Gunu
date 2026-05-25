const akis = [
    {
        yazi: "Selam! Böyle bir sey beklemiyordun degil mi? Cok ugrastim :D",
        resim: "images/1.png"
    },
    {
        yazi: "Bugün cok özel bir gün o yüzden birazcik da özel bir sey yapayim dedim.",
        resim: "images/2.png"
    },
    {
        yazi: "Sen bunlari okurken muhtemelen ben yaninda tepkilerini izliyorum.",
        resim: "images/3.png"
    },
    {
        yazi: "Hey! Gelecekteki ben! Cabuk tatliskoma saril ve onu öp!",
        resim: "images/4.png"
    },
    {
        yazi: "Tamam yeter! Gelecekteki versiyonumu kiskandim ben de istiyorum.",
        resim: "images/5.png"
    },
    {
        yazi: "Ama benim Eciskom su an Berlinde. Bugün günlerden 4 Mayis. Neyse aksam gelicek o zaman sarilir öperim :D",
        resim: "images/6.png"
    },
    {
        yazi: "Ehems, cok dagittim hadi konuya geri dönelim.",
        resim: "images/7.png"
    },
    {
        yazi: "Daha önce de dedigim gibi... Bugün en özel günlerden birisi. Cünkü 20 sene önce bugün Eciskom dogduuuu!",
        resim: "images/13.png"
    },
    {
        yazi: "Benim bir tanem,",
        resim: "images/8.png"
    },
    {
        yazi: "benim askim,",
        resim: "images/9.png"
    },
    {
        yazi: "benim sevgilim,",
        resim: "images/10.png"
    },
    {
        yazi: "güzelim,",
        resim: "images/11.png"
    },
    {
        yazi: "tatlim ve",
        resim: "images/12.png"
    },
    {
        yazi: "BAL TANEM",
        resim: "images/14.png"
    },
    {
        yazi: "BIR TANEM",
        resim: "images/15.png"
    },
    {
        yazi: "BALDAN TATLIIIIIIII",
        resim: "images/16.png"
    },
    {
        yazi: "ECE TANEEEEEEEGGGGMMMMMM",
        resim: "images/17.png"
    },
    {
        yazi: "Iyi ki dogdun!",
        resim: "images/18.png"
    },
    {
        yazi: "Iyi ki varsin!",
        resim: "images/19.png"
    },
    {
        yazi: "Iyi ki tanismisiz ve iyi ki benim sevgilimsin",
        resim: "images/20.png"
    },
    {
        yazi: "Seni her seyden cok seviyorum",
        resim: "images/21.png"
    },
    {
        yazi: "Nice mutlu, bol tatlili ve bol birlikte gecirecegimiz senelere!",
        resim: "images/22.png"
    }
]

let sira = 0;
const metinKutusu = document.getElementById("main-text");
const buton = document.getElementById("next-btn");
const ayiResmi = document.getElementById("bear-img");

buton.addEventListener("click", () => {
    sira++;

    if (sira < akis.length) {
        metinKutusu.innerText = akis[sira].yazi;
        ayiResmi.src = akis[sira].resim;
        if (sira === 7) {
            buton.disabled = true;
            setTimeout(() => {
                confetti().then(() => {
                    buton.disabled = false;
                });
            }, 2000);
        }
        if (sira === akis.length - 1) {
            buton.innerText = "Devam et!";
        }
    } else {
        document.getElementById('intro-screen').style.display = 'none';
        document.getElementById('gecis-kisim').style.display = 'flex';
    }
});

const ikinciButon = document.getElementById("ikinci-btn");
const transitionText = document.getElementById("transition");

ikinciButon.addEventListener("click", () => {
    transitionText.innerText = "Evet! Hadi simdi ikinci kisimda neler var görelim!";
    ikinciButon.innerText = "EVETEVETEVET!";
    document.getElementById('gecis-kisim').style.display = 'none';
    document.getElementById('ikinci-kisim').style.display = 'flex';
});

const karAkisi = [
    {
        baslik: "1) Hinata",
        yazi1: "Sen Naruto izlemedigin icin bilmezsin ama Hinata kurgudaki en sadik ve en tatli sevgili olabilir.",
        yazi2: "Kendisi cocuklugundan beri Narutoyu sevmis ve Naruto onun hislerini bilmese ve onu anlamasa da hep onu desteklemistir. Gerektiginde hastayken ona bakmis, sinavdayken kopya vermis, herkes onu dislayip ona inanmazken ona inanip onu benimsemis ve neredeyse onu korumak icin canini bile vermistir.",
        yazi3: "Tanidik geldi degil mi? Ayni sen. Kendisi de ayni zamanda isfj. Kibarliginiz, yumusakliginiz, saf sevginiz, utangacliginiz ve korumaciliginiz tamamen ayni. Hayat hemsireleri sizi :D",
        yazi4: "Serinin sonunda büyüyüp evlendiler ve iki cocuklari oldu. Narutoyla normalde göz göze gelince bile kizaran o utangac kiz artik en büyük askiyla birlikte mutlu takiliyor.",
        resim: "images/hinata.png"
    },
    {
        baslik: "2) Mikan Tsumiki",
        yazi1: "Yine bilmedigin bir karakter ama güven bana bu karakter de ayni sen. Evet yine isfj. Kendisi yine cok utangac, masum, saf ve tatlis bir karakter.",
        yazi2: "Ayni zamanda... COK SAKAR. ACABA NEDEN BU KARAKTER SENI BANA COK HATIRLATIYOR?",
        yazi3: "Oyununda da sürekli ana karakterin üstüne düser dururdu bu. Cok sakar ama cok tatli. Ayni sen. Bir de kendisine en ufak bir ses yükseltilmesinde agliyor ve herkes bununla ugrasiyordu. Ah kiyamam ben ona.",
        yazi4: "Benim Eciskoma benziyen karakterlerimi zorbalamayin. Kendisi ayni zamanda dünyanin en iyi hemsiresi. Oldukca da güvenilir, yumusak kalpli bir dost. Sakarligi, tatliligi ve yumusakligiyla her türlü seni hatirlatan sevimli bir karakter bu.",
        resim: "images/mikan.png"
    },
    {
        baslik: "3) Yor (Briar) Forger",
        yazi1: "En azindan bu karakteri biliyorsun. YINE ISFJ. Sanirim senin mbti na gercekten hayranim. E tabi sonucta senin mbti in. Tabi mükemmel olacak.",
        yazi2: "Yor, insanlari öldüren bir suikastci olmasi disinda oldukca tatli bir karakter. Yine kibar ve utangac. Ama cok güclü. O kadar güclüki genellikle sakarligi ile gücü birlesince hep komedi ortaya cikiyor.",
        yazi3: "Mesela kocasi onunala flört ederken fazla utandigi icin ona tekmeyi koyuyor ve tekme sonucu kocasi havada taklalar atarak yere inis yapiyor. Her ne kadar güzel inis yapip bir sey olmamis gibi davransa da icinden öldügünü ve Yor'un gücünü beyninin algilayamadigini görüyoruz.",
        yazi4: "Sonrasinda tabi bayiliyor ve uyandiginda kafasi Yor'un kucaginda oluyor. Yor da bu sirada ona ninni söylüyor. Asiri tatlis. Üvey kizi anya konusunda da oldukca korumaci. Yor yine korumaciligi ve utangacligi ile seni bana hatirlatiyor.",
        resim: "images/yor.png"
    },
    {
        baslik: "4) Haru Okumura",
        yazi1: "Phantom Thievesin masum ve tatlis görünümlü sadistigi. Baska bir isfj. Sasirdik mi? Hayir.",
        yazi2: "Haru tatlilari sevmesiyle ve sadistik olmasi harici tam olarak sen. Kibarligi, tatlisligi, pembe giyinisi ve bitkileri de sevmesiyle yine ayni sen.",
        yazi3: "Ayni zamanda hamaratti da diye hatirliyorum. Yine ayni sen. Ah senin o güzel tatlilarin ve pastalarini cok özledim. NAMNAMNAMNAM",
        yazi4: "Haru hakkinda daha fazla bir sey dememe gerek yok. Yine tatlis bir insan bana seni hatirlatiyor. Ah tatlisim benim.",
        resim: "images/haru.png"
    },
    {
        baslik: "5) Kate Marsh",
        yazi1: "Kate karakterine ne kadar bayildigimi biliyorsun. Ortak yönünüz masumiyetiniz. Ikiniz de resmen AH KIYAMAM BEN SANA dedirtip duruyorsunuz.",
        yazi2: "Kate karakterini sadece bir kere travmasiz ve depresyonda degilken gördük. O da hastanedeykendi. Tatlis tatlis oturmus gülümsüyor, tatlis resimler ciziyordu.",
        yazi3: "Ayni sen tatli yaparken ben sana bakinca bana o güzel büyük tatli mi tatli gözerlinle bakip gülümserkenki halin.",
        yazi4: "Ah yerim seni bak yine tatlilik krizine girdim. Masum güzel tatlisim benim sen hep gözlerinle gül bana tamam mi?",
        resim: "images/kate.png"
    }
]
let karSira = -1;
const ucuncuButon = document.getElementById("ucuncu-btn");
const ikinciHeader = document.getElementById("ikinci");
const ikinciTxt1 = document.getElementById("ikinci-txt-1");
const ikinciTxt2 = document.getElementById("ikinci-txt-2");
const ikinciTxt3 = document.getElementById("ikinci-txt-3");
const ikinciTxt4 = document.getElementById("ikinci-txt-4");
const karResim = document.getElementById("kar-img");

ucuncuButon.addEventListener("click", () => {
    karSira++;
    ucuncuButon.innerText = "Siradaki kim?"

    if (karSira < karAkisi.length) {
        ikinciTxt1.innerText = karAkisi[karSira].yazi1;
        ikinciTxt2.innerText = karAkisi[karSira].yazi2;
        ikinciTxt3.innerText = karAkisi[karSira].yazi3;
        ikinciTxt4.innerText = karAkisi[karSira].yazi4;
        karResim.src = karAkisi[karSira].resim;
    } else if (karSira === karAkisi.length) {
        ucuncuButon.innerText = "Sirada ne var?";
    } else {
        document.getElementById('ikinci-kisim').style.display = 'none';
        document.getElementById('ucuncu-kisim').style.display = 'flex';
    }
});

const dorduncuButon = document.getElementById("dorduncu-btn");
const ucuncuHeader = document.getElementById("ucuncu");
const ucuncuTxt1 = document.getElementById("ucuncu-txt-1");
const ucuncuTxt2 = document.getElementById("ucuncu-txt-2");
const ucuncuTxt3 = document.getElementById("ucuncu-txt-3");
const ucuncuTxt4 = document.getElementById("ucuncu-txt-4");
const gecisAnilar = document.getElementById('gecis-anilar');

let ucuncuTik = 0;
dorduncuButon.addEventListener("click", () => {
    ucuncuTik++;
    if (ucuncuTik === 1) {
        ucuncuHeader.innerText = "Ece'yi özetleyen kelimeler";
        ucuncuTxt1.innerText = "Tatli";
        ucuncuTxt2.innerText = "Deger bilen";
        ucuncuTxt3.innerText = "Sevimli";
        ucuncuTxt4.innerText = "Masum";
        dorduncuButon.innerText = "Hala bitmedi mi?";
    } else {
        document.getElementById('ucuncu-kisim').style.display = 'none';
        gecisAnilar.style.display = 'flex';
        setTimeout(() => {
            gecisAnilar.style.display = 'none';
            document.getElementById('dorduncu-kisim').style.display = 'flex';
        }, 3200);
    }
});

const anilar = [
    {
        baslik: "Arcade Günü",
        yazi: "En sevdigim anilardan biri olan Arcade Günü ile baslayalim. Ah ne kadar cok eglenmistik. Öncelikle seni övmem lazim cünkü daha mükemmel bir date secemezdin. Efsanesin Eciskom. Yolculuk her ne kadar uzun sürse de gittigimiz AVM tarzi yer ve arcade salonu cok iyidi.",
        resim1: "images/arcade1.png",
        resim2: "images/arcade2.png",
        resim3: "images/arcade3.png",
        resim4: "images/arcade4.png"
    },
    {
        baslik: "Arcade Günü",
        yazi: "Oynadigimiz oyunlar ile cok eglendim. Her seyde seni yendim. ... . Mario kart harici. SUS ECE GÜLME. Cok güzel bir datedi. Tesekkür ederim askim.",
        resim1: "images/arcade5.png",
        resim2: "images/arcade6.png",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Berlin Günü",
        yazi: "Geldik en sevdigin sehire. Evet itiraf etmeliyim Berlin hakkindaki ön yargimi o gün kirdin. Berlinin uyusturucu bagimlilarindan ve bok gibi sokaklardan ibaret olmadigini gösterdin. Ilk kez gelecegimi Berlinde hayal edebildim. Pembe temali donutcu da oldukca iyidi.",
        resim1: "images/berlin1.png",
        resim2: "images/berlin2.png",
        resim3: "images/berlin3.png",
        resim4: "images/berlin4.png"
    },
    {
        baslik: "Berlin Günü",
        yazi: "Tamam iyidi az olur. COK LEZZETLIYDI. Her ne kadar cok siparis vermis olsak da kesinlikle degdi. Seker komasina girsem de yedigim seyler icin hic pisman degilim. Gezdigimiz meydanlar, mediamarkt ve saturn, sokak sanatcilari(her ne kadar ayni sarkiyi defalarca kez söyleseler de) ve televizyon kulesi cok iyidi. Bu date de senin sayende benim icin cok özel oldu. Seni cok seviyorum.",
        resim1: "images/berlin5.png",
        resim2: "",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Cigköfte Günü",
        yazi: "Bugünü pek sevmiyoruz biliyorum. Ama herkesin ayibina ragmen biz yine birbirimize destek olduk ve sikilmamizi önledik. Bol dedikodu da yaptik. Bu aniyi ekleme sebebim, sikici ve sacma günleri bile benim icin cekilebilir hale getirmen. Iyi ki varsin, sen olmasan ne yapardim bilmem.",
        resim1: "images/cigkofte.png",
        resim2: "",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Mediamarkt ve Döner Günü",
        yazi: "Bu her ne kadar bir date olmasa da yine de cok güzel bir gündü. Tamam sen biraz sikilmis olabilirsin... Baya sikilmis da olabilirsin... KARAR VERMEK COK ZORDU TAMAM MI ÖZÜR DILERIM :(. Ama itiraf et döner her seyi buna deger yapti. Bugün sabrettigin icin ve yine bana eslik ettigin icin cok tesekkür ederim.",
        resim1: "images/döber.png",
        resim2: "",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Ev Anilarimiz",
        yazi: "En sevdigim anilarimizdan yine. Sanirim iliskimizi ve hayatimin en renksiz vakitlerine nasil renk kattigini en iyi özetleyen anilar. Ders calisirken bana eslik ettin, benimle beraber oyun oynayip en cok gülme krizine girdigim zamanlari yarattin, uyurken bana gicik kaptin...",
        resim1: "images/ev1.png",
        resim2: "images/ev2.png",
        resim3: "images/ev4.png",
        resim4: "images/ev5.png"
    },
    {
        baslik: "Ev Anilarimiz",
        yazi: "internetim gittiginde benim delirmemem icin bana internet actin ve en önemlisi... beni hep mutlu ettin. Hayatimi romantize ettin. Her seyi güzellestirdin. Ve bir tik da... pembe yaptin. Kitapligimda cok fazla pembe anime kizi var... Sikayetci degilim :)",
        resim1: "images/ev7.png",
        resim2: "images/ev8.png",
        resim3: "images/ev9.png",
        resim4: ""
    },
    {
        baslik: "Karli Günler",
        yazi: "Bugünleri kardan dolayi benden cok sen sevdin. He tabi ben de cok sevdim de anladin sen demek istedigimi. Kar topu da oynadik, buz pateni de kaydik, kermese de gidip yemekler ve tatlilar yedik. Unutmayalim ki ben sana cikma teklifi de karli bir günde etmistim. Romantikti. Iyi ki de etmisim. He bi de kermes demisken...",
        resim1: "images/kar1.png",
        resim2: "images/kar2.png",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Kermes Anilarimiz",
        yazi: "Kermeste ben kardan bogulurken sen kar cok safe hissettiriyor diyip mutlu oluyordun. Yedigimiz yemekler ve tatlilar cok güzeldi. HELE O CHUROS. HALA AKLIM ONDA. COK ISTIYORUM YINE ONDAN YEMEK. Ama sen olmasaydin muhtemelen kermesi bu kadar deneyimlemek icin hic bir sebebim olmicakti. Yine senin sayende enfes yemekler ve tatlilar denedim. Kilo da aldim... Üzgünüm gecmiste kilo almamayi isteyen Ece...",
        resim1: "images/kis1.png",
        resim2: "images/kis2.png",
        resim3: "images/kis3.png",
        resim4: ""
    },
    {
        baslik: "Kütüphane Anilarimiz",
        yazi: "Vaktimizi en cok gecirdigimiz ikinci yer. Cok fazla ders calistik. Cok fazla stres olduk. Ama hep birbirimizin yanindaydik. Sen olmasan bu kadar calisip derslerimi gecebilecegimi sanmiyorum. Neyse ki ikimiz de derslerimizin cogunlugunu verdik. Darisi diger derslerin basina.",
        resim1: "images/kutup1.png",
        resim2: "images/kutup2.png",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Oyun Gecelerimiz",
        yazi: "YINE FAVORI ANILARIMDAN. AH BENI NE KADAR COK GÜLDÜRDÜN VE DELIRTTIN. Ama oyun yeteneklerin bu sirada gelisti. Cok güzel oyunlar oynadik ve hepsini bitirmeyi basardik. Takim calismamizi da gelistirdik. En mükemmel ekip tabiki de biziz. Baskalari partnerine sinir olup oyunu ilk bölümden birakirken, biz sonuna kadar gidip bitirdik. Üstelik cok da güldük :D",
        resim1: "images/oyun1.png",
        resim2: "images/oyun2.png",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Tiramisu Yaptigin Gün",
        yazi: "Bugünü es gecicegimi düsünmedin herhalde degil mi? Ilk denemendi. Ve yiyemedik. Cünkü kakao cok gelmisti ve ici de buzlanmisti. Ama olsun sen her ne kadar demotive olsan da sonra pes etmeyip yine yaptin ve mükemmel bir tiramisu yedik. Dogum günümde de yaptigini unutmayalim. Hamarat kizim benim. Tiramisularin ve pastalarin o kadar lezzetliydiki doyamadik. Ben hala istiyorum ama haberin olsun.",
        resim1: "images/tiramisu.png",
        resim2: "",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Türk Gecesi",
        yazi: "Yine sosyallesmek icin cikip sikildigimiz bir gece. Ama bol bol dans ettik. Güzel fotolar da cekindik. Yine sikilsak da birlikte sikilip birlikte eglendigimiz bir gün. ",
        resim1: "images/turk1.png",
        resim2: "images/turk2.png",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "Daha cok animiz var ama...",
        yazi: "AAA DUR BIR TANE DAHA VARDI NASIL UNUTURUM?",
        resim1: "",
        resim2: "",
        resim3: "",
        resim4: ""
    },
    {
        baslik: "HEH BULDUM",
        yazi: "MUAHAHAHAHA",
        resim1: "",
        resim2: "",
        resim3: "",
        resim4: "",
        video: "videos/kar_video.mp4"
    }
]
let anilarIndex = 0;
const buton5 = document.getElementById("besinci-btn");
const aniHeader = document.getElementById("dorduncu");
const aniResim1 = document.getElementById("dorduncu-img-1");
const aniResim2 = document.getElementById("dorduncu-img-2");
const aniResim3 = document.getElementById("dorduncu-img-3");
const aniResim4 = document.getElementById("dorduncu-img-4");
const aniVideo = document.getElementById("dorduncu-video");
const aniYazi = document.getElementById("dorduncu-txt-1");
const aniResimler = [aniResim1, aniResim2, aniResim3, aniResim4];
const sarkiKisim = document.getElementById("sarki-kisim");
const besinciKisim = document.getElementById("besinci-kisim");
const sarkilaraGecBtn = document.getElementById("sarkilara-gec-btn");
const realFirstSongBtn = document.getElementById("gercek-ilk-sarki-btn");
const firstSongLink = document.querySelector(".sarki-link[data-song='1']");

function showSongIntro() {
    document.getElementById('dorduncu-kisim').style.display = 'none';
    besinciKisim.style.display = 'flex';
}

function showSongs() {
    besinciKisim.style.display = 'none';
    sarkiKisim.style.display = 'flex';
}

sarkilaraGecBtn.addEventListener("click", showSongs);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        const active = document.activeElement;
        if (active && (active.tagName === 'BUTTON' || active.tagName === 'A') && !active.disabled) {
            active.click();
            event.preventDefault();
            return;
        }

        const visibleInteractive = Array.from(document.querySelectorAll('button:not([disabled]), a[href]')).find(el => {
            const rect = el.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0 && window.getComputedStyle(el).visibility !== 'hidden';
        });

        if (visibleInteractive) {
            visibleInteractive.click();
            event.preventDefault();
        }
    }
});

if (firstSongLink) {
    firstSongLink.addEventListener('click', () => {
        if (realFirstSongBtn) {
            realFirstSongBtn.style.display = 'inline-flex';
        }
    });
}

if (realFirstSongBtn) {
    realFirstSongBtn.addEventListener('click', () => {
        window.open('https://youtu.be/NTpbbQUBbuo', '_blank', 'noreferrer');
    });
}

// İlk anıyı yükle
function aniGoster(index) {
    const adim = anilar[index];
    aniHeader.innerText = adim.baslik;
    aniYazi.innerText = adim.yazi;

    if (adim.video) {
        aniResimler.forEach(img => img.style.display = "none");
        aniVideo.src = adim.video;
        aniVideo.style.display = "block";
        aniVideo.play();
        buton5.style.display = "none";
    } else {
        aniVideo.style.display = "none";
        aniVideo.pause && aniVideo.pause();

        aniResimler.forEach((img, i) => {
            const key = "resim" + (i + 1);
            if (adim[key]) {
                img.src = adim[key];
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }
}

// İlk anıyı göster
aniGoster(0);

function moveToSongIntro() {
    document.getElementById('dorduncu-kisim').style.display = 'none';
    besinciKisim.style.display = 'flex';
}

aniVideo.addEventListener("ended", () => {
    if (anilarIndex === anilar.length - 1) {
        moveToSongIntro();
    }
});

buton5.addEventListener("click", () => {
    anilarIndex++;
    if (anilarIndex < anilar.length) {
        aniGoster(anilarIndex);
    } else {
        moveToSongIntro();
        buton5.style.display = 'none';
    }
});

const finalKisim = document.getElementById('final-kisim');
const finalGecBtn = document.getElementById('final-gec-btn');
const sonBtn = document.getElementById('son');
const hayalKisim = document.getElementById('hayal-kisim');
const hayalBaslik = document.getElementById('hayal-baslik');
const hayalImg = document.getElementById('hayal-img');
const hayalAciklama = document.getElementById('hayal-aciklama');
const hayalNextBtn = document.getElementById('hayal-next-btn');

const hayaller = [
    {
        baslik: '6. Hayal: Beraber proje yapmak',
        img: 'images/fcoding.png',
        aciklama: 'Biliyorum bu pek hosuna gitmedi ama bence sen ve ben birlikte cok güzel seyler yaratabiliriz. Para da kazanirsak tadindan yenmez. Belki birlikte ufak oyunlar bile yapabiliriz. Birlikte ögrenir birlikte tasarlar birlikte planlar ve uygulariz. Ufak tatlis bir oyun kötü mü olur hem bence cok tatlis olur. '
    },
    {
        baslik: '5. Hayal: Daha fazla birlikte oyun oynamak',
        img: 'images/fgaming.png',
        aciklama: 'Sasirdik mi? Hayir. Beraber oynadigimiz bütün oyunlarda ben asiri eglendim. Keske daha cok olsa da daha cok oynayip bitirsek. Ben tek oynarken hic bu kadar gülme krizine girmiyorum cidden. Iyi ki varsin ya cok degerli anilar biriktiriyorum sayende.'
    },
    {
        baslik: '4. Hayal: Lunapark ve Arcade dateleri',
        img: 'images/farcade.png',
        aciklama: 'Ilk arcade dateimizinden sonra dedimki bizim kesinlikle lunaparka da gitmemiz lazim. Ne kadar degisik cilgin sey varsa hepsine binmeliyiz. Sen korkarsin muhtemelen ama olsun ben yanindayim. Hem Arcadete asiri eglendik ya en sevdigim dateimizdi cidden. Umarim daha fazla arcade buluruz da daha fazla oyun oynayip daha fazla yarisiriz. Mario kart haric... Seninle bir daha mario kart oynamayi düsünmüyorum >:('
    },
    {
        baslik: '3. Hayal: Cosplay ve Comic Con',
        img: 'images/fcosplay.png',
        aciklama: 'Umarim Berlinde bol bol comic con olur da hep farkli farkli cosplayler ile gideriz. Mesela knight ve hornet olabiliriz, joker ve kasumi... ve daha neler istiyorsan. Hem ortam da cok iyi herkes cosplayli ve bizim gibi nerdlerden olusuyor asiri safe bir ortam.'
    },
    {
        baslik: '2. Hayal: Cafe acmak',
        img: 'images/fcafe.png',
        aciklama: 'Biliyorum bu uzun bir süre pek olasi degil... hatta belki de fazla hayal... AMA ADI ÜSTÜNDE BUNLAR HAYAL. DÜSÜNSENE PERSONA 5TEKI GIBI BIR CAFEMIZ VAR. BEN KAHVE SEN TATLI YAPIYORSUN. MUHTESEM BIR HAYAT DEGIL MI? BIR DE KEDI ALIRIZ ISMINI DE MORGANA KOYARIZ. OF BEN DÜSTÜM. OKULU BIRAKIYORUM KAHVE USTASI OLUCAM BAYYYY.'
    },
    {
        baslik: '1. Hayal: Japonya tatili',
        img: 'images/fjapan.png',
        aciklama: 'Bunu tahmin ettin mi acaba? Evet sanirim 800 kere söyledigim icin aklina gelmis olabilir. Ileride para kazanmaya baslayinca kesin yapiyoruz. Bu sadece bir hayal degil, bu gelecek. Gidip sushi de yicez, sakuralari da görücez, anime ve oyun dükkanlarini da gezicez hatta personanin esinlenildigi sehirleri de görücez. Cüzdanlarimiza simdiden yazik muhtemelen ne kadar paramiz varsa hepsini figürlere, yemeklere ve tatlilara harcayacagiz... Pisman olacagimizi sanmiyorum :D'
    }
];

let hayalIndex = 0;

function hayalGoster(index) {
    const hayal = hayaller[index];
    if (!hayal) return;

    hayalBaslik.innerText = hayal.baslik;
    hayalImg.src = hayal.img;
    hayalImg.style.display = hayal.img ? 'block' : 'none';
    hayalAciklama.innerText = hayal.aciklama;
    hayalNextBtn.innerText = index < hayaller.length - 1 ? 'Sonraki hayal' : 'Hayaller bitti';
}

const kapanis = document.getElementById('kapanis');
const kapanisBtn = document.getElementById('kapanis-btn');

if (finalGecBtn) {
    finalGecBtn.addEventListener('click', () => {
        document.getElementById('sarki-kisim').style.display = 'none';
        finalKisim.style.display = 'flex';
    });
}

sonBtn.addEventListener('click', () => {
    document.getElementById('sarki-kisim').style.display = 'none';
    finalKisim.style.display = 'none';
    hayalKisim.style.display = 'flex';
    hayalIndex = 0;
    hayalGoster(hayalIndex);
});

hayalNextBtn.addEventListener('click', () => {
    hayalIndex++;
    if (hayalIndex < hayaller.length) {
        hayalGoster(hayalIndex);
    } else {
        hayalKisim.style.display = 'none';
        if (kapanis) {
            kapanis.style.display = 'flex';
        }
    }
});

if (kapanisBtn) {
    kapanisBtn.addEventListener('click', () => {
        if (typeof confetti === 'function') {
            confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        }
    });
}
