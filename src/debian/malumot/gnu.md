# 1-bob. GNU / Linux qo'llanmalari

## 1.1. Konsol asoslari

### 1.1.1. Qobiq buyrug'i

Tizimni ishga tushirgandan so'ng, agar siz X Window System- ni displey menejeri
bilan o'rnatmagan bo'lsangiz, sizga belgilarga asoslangan kirish ekrani taqdim
etiladigdm3 . Sizning xosting nomingiz deylik foo, kirish so'rovi quyidagicha
ko'rinadi.

`foo login`

Agar siz GNOME yoki KDE kabi GUI muhitini o'rnatgan bo'lsangiz , u holda
Ctrl-Alt-F1 orqali kirish so'roviga o'tishingiz va GUI muhitiga Alt-F7 orqali
qaytishingiz mumkin ( 1.1.6-bo'limga qarang , "Virtual konsollar" "Quyida
keltirilgan).

Kirish so'rovida siz foydalanuvchi nomingizni yozasiz, masalan penguin, Enter
tugmachasini bosing, keyin parolingizni kiriting va Enter tugmasini yana bir
marta bosing.

#### Eslatma

> Unix an'analariga rioya qilgan holda, Debian tizimining foydalanuvchi nomi va
> paroli kichik harflar uchun sezgir. Foydalanuvchi nomi odatda faqat kichik
> harflardan tanlanadi. Birinchi foydalanuvchi qayd yozuvi odatda o'rnatish
> paytida yaratiladi. Adduser (8) yordamida qo'shimcha foydalanuvchi hisoblari
> yaratilishi mumkin .

Tizim " /etc/motd" (Kun xabari) da saqlangan salomlashish xabaridan boshlanadi
va buyruq buyrug'ini taqdim etadi.

```Debian GNU/Linux jessie/sid foo tty1
foo login: penguin
Password:
Last login: Mon Sep 23 19:36:44 JST 2013 on tty3
Linux snoopy 3.11-1-amd64 #1 SMP Debian 3.11.6-2 (2013-11-01) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
foo:~$
```

Endi siz qobiqdasiz . Qobiq sizning buyruqlaringizni sharhlaydi.

<hr>

### 1.1.2. X ostidagi qobiq buyrug'i

Agar o'rnatilgan bo'lsa X Window System kabi displey menejeri bilan GNOME »ning
gdm3o'rnatish vaqtida tanlab" ish stoli muhiti "topshiriq, siz tizimi
boshlang'ich ustiga grafik login ekranda bilan taqdim etiladi. Imtiyozli
bo'lmagan foydalanuvchi hisobiga kirish uchun foydalanuvchi nomingiz va
parolingizni yozasiz. Foydalanuvchi nomi va parol o'rtasida harakat qilish uchun
yorliqdan foydalaning yoki sichqonchani va asosiy tugmachani bosing.

Gnome-terminal (1) , rxvt (1) yoki xterm (1)x-terminal-emulator kabi dasturni
ishga tushirish orqali X ostida qobiq buyrug'ini olishingiz mumkin . GNOME
Desktop muhiti ostida "Ilovalar" → "Aksessuarlar" → "Terminal" tugmachalarini
bosish juda yaxshi natija beradi.

Bundan tashqari, 1.1.6-bo'lim, "Virtual konsollar" bo'limini ko'rishingiz mumkin
.

Ba'zi boshqa ish stoli tizimlarida (masalan fluxbox), menyu uchun aniq
boshlanish nuqtasi bo'lmasligi mumkin. Agar shunday bo'ladigan bo'lsa, faqat ish
stoli ekrani fonini bosish uchun (o'ng) harakat qilib ko'ring va ochiladigan
menyuga umid qiling.

### 1.1.3. Ildiz hisobi

Ildiz hisobi superuser yoki imtiyozli foydalanuvchi deb ham ataladi . Ushbu
hisob qaydnomasidan quyidagi tizim ma'muriyati vazifalarini bajarishingiz
mumkin.

-   Fayl ruxsatidan qat'i nazar, tizimdagi barcha fayllarni o'qing, yozing va
    olib tashlang
-   Faylga egalik huquqini va tizimdagi har qanday fayllarning ruxsatlarini
    o'rnating
-   Tizimda imtiyozga ega bo'lmagan foydalanuvchilarning parolini o'rnating
-   Parolsiz har qanday hisob qaydnomalariga kirish
-   Ildiz hisobining bu cheksiz kuchi undan foydalanishda ehtiyotkorlik va
    mas'uliyat talab qiladi.

### 1.1.4. Ildiz qobig'i so'raladi

Ildiz parolidan foydalanib, root shell so'rovini olishning bir necha asosiy
usullari.

-   Kiriting roottezkor kirish asoslangan belgilar.
-   GNOME Desktop muhiti ostida "Ilovalar" → "Aksessuarlar" → "Ildiz terminali"
    ni bosing.
-   su -lIstalgan foydalanuvchi qobig'i so'rovidan " " yozing.
    -   Bu hozirgi foydalanuvchi muhitini saqlamaydi.
-   suIstalgan foydalanuvchi qobig'i so'rovidan " " yozing.
    -   Bu hozirgi foydalanuvchi muhitining bir qismini saqlaydi.

### 1.1.5. GUI tizimini boshqarish vositalari

Agar ish stoli menyusi tegishli imtiyoz bilan avtomatik ravishda GUI tizimini
boshqarish vositalarini ishga tushirmasa, ularni X terminal emulyatorining root
shell buyrug'idan boshlashingiz mumkin, masalan gnome-terminal (1) , rxvt (1)
yoki xterm (1) ) . 1.1.4-bo'limga qarang , "Ildiz qobig'i so'rovi" va
7.8.5-bo'lim, "X mijozlarini root sifatida ishlatish".

#### Ogohlantirish

> Gdm3 (1)root kabi displey menejerining buyrug'iga yozib, hech qachon root
> displeyi ostida X displey / sessiya menejerini ishga tushirmang .

#### Ogohlantirish

> Muhim ma'lumotlar ko'rsatilganda, hech qachon X Window ostida ishonchli GUI
> dasturini ishga tushirmang, chunki bu sizning X ekraningizni tinglashi mumkin.

### 1.1.6. Virtual konsollar

Standart Debian tizimida buyruqlar qobig'ini to'g'ridan-to'g'ri Linux xostida
ishga tushirish uchun VT100-ga o'xshash oltita o'zgaruvchan belgilar konsollari
mavjud. Agar siz GUI muhitida bo'lmasangiz, siz Left-Alt-keyva F1-
F6tugmalaridan birini bir vaqtning o'zida bosib virtual konsollar o'rtasida
almashishingiz mumkin . Har bir belgi konsoli hisobga mustaqil ravishda kirish
imkonini beradi va ko'p foydalanuvchi muhitini taklif qiladi. Ushbu ko'p
foydalanuvchilik muhiti Unixning ajoyib xususiyati va o'ziga o'ziga qaram.

Agar siz X oyna tizimida bo'lsangiz, 1 tugmachasini bosish orqali belgi
konsoliga kirish huquqiga ega bo'lasiz Ctrl-Alt-F1, ya'ni left-Ctrl-keythe
left-Alt-key, va tugmachalari F1-keybir-biriga bosiladi. Odatda virtual konsol 7
da ishlaydigan X Window tizimiga bosish orqali qaytishingiz mumkin Alt-F7.

Shu bilan bir qatorda buyruq satridan boshqa virtual konsolga, masalan, konsol 1
ga o'tishingiz mumkin.

`chvt 1`

### 1.1.7. Buyruqning buyrug'ini qanday qoldirish kerak

Qobiq faoliyatini yopish uchun buyruq satriga siz Ctrl-D, ya'ni left-Ctrl-keyva
d-keybosilganlarni yozasiz. Agar siz belgi konsolida bo'lsangiz, kirish
buyrug'iga shu bilan qaytasiz. Ushbu boshqaruv belgilari katta harf bilan
"boshqaruv D" deb nomlangan bo'lsa ham, Shift tugmachasini bosishingiz shart
emas. Qisqa qo'l ifodasi, ^Duchun ham ishlatiladi Ctrl-D. Shu bilan bir qatorda,
siz "chiqish" yozishingiz mumkin.

Agar siz x-terminal-emulyatorida bo'lsangiz (1) , x-terminal-emulatorshu bilan
oynani yopishingiz mumkin .

### 1.1.8. Tizimni qanday o'chirish kerak

Fayl ishlashi yaxshilangan ishlashi uchun xotirada ma'lumotlarni keshlashni o'z
ichiga olgan boshqa har qanday zamonaviy operatsion tizim singari , quvvatni
o'chirishdan oldin, Debian tizimi to'g'ri o'chirish protsedurasiga muhtoj. Bu
xotiradagi barcha o'zgarishlarni diskka yozishga majbur qilish orqali
fayllarning yaxlitligini saqlab qolish uchun. Agar dasturiy ta'minotni
boshqarish mavjud bo'lsa, o'chirish protsedurasi tizimning quvvatini avtomatik
ravishda o'chiradi. (Aks holda, o'chirish protsedurasidan keyin bir necha soniya
davomida quvvat tugmasini bosishingiz kerak bo'lishi mumkin.)

Siz tizimni odatdagi ko'p foydalanuvchi rejimida buyruq satridan o'chirib
qo'yishingiz mumkin.

`shutdown -h now`

Siz tizimni bitta foydalanuvchi rejimida buyruq satridan o'chirib qo'yishingiz
mumkin.

`poweroff -i -f`

Shu bilan bir qatorda, siz " " o'z ichiga olgan " " bo'lsa, o'chirish uchun
Ctrl-Alt-Delete(The left-Ctrl-key, the left-Alt-Keyva Deletetugmalari bir-biriga
bosilgan) yozishingiz mumkin. Qarang inittab (5) ma'lumot olish
uchun./etc/inittabca:12345:ctrlaltdel:/sbin/shutdown -t1 -a -h now

6.9.6-bo'limga qarang , "SSH-da masofaviy tizimni qanday o'chirish kerak" .

### 1.1.9. Aql-idrok konsolini tiklash

"`cat <some-binary-file>`" Kabi ba'zi kulgili ishlarni bajarib bo'lgandan keyin
ekran buzilib ketganda reset, buyruq satriga " " yozing. Siz yozayotganingizda
buyruq aks sadosini ko'ra olmasligingiz mumkin. Siz clearekranni tozalash uchun
" " chiqarishingiz mumkin.

### 1.1.10. Yangi boshlanuvchilar uchun qo'shimcha takliflar
