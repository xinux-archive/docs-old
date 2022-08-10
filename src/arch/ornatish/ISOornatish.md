## Fleshkaga bios orqali kirish

Obraz yozilgan fleshkaga kompyuterning bios sitemasi orqali kirib olgandan so'ng
<span style="color: red">root</span>@archiso~ degan yozuv chiqadi. Shundan so'ng
o'rnatish jarayoni boshlanadi. Avval klaviaturaning tilini sozlab olish kerak.
Buning uchun quyidagi buyruqni yozamiz: <code>loadkeys us</code>. Ortqicha
noqulayliklarning oldini olish maqsadida <code>clear</code> buyrug'i bilan
oynadagi keraksiz yozuvlarni o'chiramiz.

## Internetga ulanish

Archisoni o'rnatishda internet talab qilingani bois wifi yoki simli internet
(Ethernet)ga ulanamiz. Buning uchun <code>ip a</code> buyrug'i bilan ip adress
haqida ma'lumot olishimiz kerak. Wifiga ulanish buyrug'i: <code>iwctl</code>
oynada <span style="color: red">root</span>@archiso~ yozuvi o'rniga [<span
style="color: green">iwctl</span>] yozuviga o'zgaradi. Endi wifini qidirib
topish uchun <span style="color: red">station list</span> buyrug'ini yozamiz va
bizda taxminan shunday ko'rinishdagi yozuv paydo bo'ladi:

                                         Devices in Station Mode

| _Name_ | _State_      | _Scanning_ |
| ------ | ------------ | ---------- |
| wlan0  | disconnected |            |

Internetga ulanmagan holdamiz. Yon-atrofdagi routerlarni ko'rish uchun quyidagi
buyruq bilan tekshiramiz: `station wlan0 get-networks` va ekranda quyidagi ustun
chiqadi:

| _Network name_  | _Security_          | _Signal_        |
| --------------- | ------------------- | --------------- |
| Misol Wifi nomi | xavfsizlik darajasi | signal darajasi |

Ulardan biriga ulanish uchun `station wlan0 'misol wifi nomi'` buyrug'ini
yozamiz va so'ralgan wifi maxfiy so'zini (parolini) teramiz. Wifiga ulangandan
so'ng [<span style="color: green">iwctl</span>] buyruq maydonidan `exit`
buyrug'i yoziladi:

<span style="color: red">root</span>@archiso~ buyruq maydoniga o'tib internet
ishlayotganini tekshiramiz. Buning uchun google.com saytiga so'rov jo'natamiz:
<code>ping -c 8.8.8.8</code>. Agar so'rovga javob qaytsa, demak, internetga
ulanganmiz.

## Hard diskni taqsimlash

Endi kompyuter hard diskining xotirasini taqsimlashimiz kerak.
<code>lsblk</code> buyrug'i orqali diskimizning tuzilishini tekshirib olamiz va
bizda quyidagicha jadval ekranda paydo bo'ladi:

<span style="color: red">root</span>@archiso~ `lsblk`

| NAME | MAJ:MIN | RM  | SIZE | RO  | TYPE | MOUNTPOINTS |
| ---- | ------- | --- | ---- | --- | ---- | ----------- |
| sda  | 7:0     | 0   | 256G | 0   | disk |             |

Diskni taqsimlash uchun `cfdisk /dev/sda` buyrug'i yoziladi va ekranda aks
etadigan bo'limlardan `gpt` bo'limini belgilaymiz. Disk ichiga kirib olgach endi
uni to'la o'chirish lozim. Buning uchun kerakli diskni tanlaymiz va pastki
bo'limdagi `delete` tugmasini bosib o'chiramiz. Shunda `Device` degan bo'limi
<span style="color:green">Free space</span> nomiga ega bo'ladi. EFI system uchun
joy ajaratishimiz kerak bo'ladi. Buning uchun pastdan `new` tugmasini bosamiz va
<span style="color:green">+512M</span> deb yozamiz va turini `type` tugmasi
orqali <span style="color:cyan">EFI System </span>ni tanlaymiz. Yana
<span style="color:green">Free space</span> nomidagi device'ni tanlab, Linux
swap uchun joy ajratamiz. Swap uchun <span style="color:green">+512M yoki
+1G</span> deb yozamiz hamda turini `type` tugmasi orqali
<span style="color:cyan">Linux swap</span> ni tanlaymiz. Ortib qolgan xotirani
yoki to'liq aktivlashtirish yoki bir qismini zaxira sifatida qoldirish mumkin.
`new` tugmasini bosib qolgan xotira uchun joy yozib `type` ni
<span style="color:cyan">Linux filesystem</span> deb belgilaymiz. Disklar
taqsimlangach formatlash kerak bo'ladi. Buning uchun `mkfs.fat -F 32 /dev/sda1`
buyrug'ini yozamiz. <span style="color:cyan">sda1</span> formatlandi. Endi
`mkswap /dev/sda2` buyrug'ini yozamiz va <span style="color:cyan">sda2</span>
swap uchun formatlanadi. `mkfs.ext4 /dev/sda3` buyrug'ini yozamiz va
<span style="color:cyan">sda3</span> root uchun formatlandi. Formatlagach
<span style="color:cyan">sda3</span> diskni <span style="color:red">mnt</span>
jildiga ulashimiz kerak. `mount /dev/sda3 /mnt` buyrug'ini yozamiz. Endi mnt
jildida `boot` va `EFI` nomli jildni yaratishimiz kerak.
`mkdir -p /mnt/boot/EFI` buyrug'ini yozamiz. Shundan so'ng
<span style="color:cyan">sda2</span>ga <span style="color:red">swap</span>ni
ulaymiz. `swapon /dev/sda2` buyrug'ini yozamiz va
<span style="color:cyan">sda1</span>ni <span style="color:red">boot</span>ga
ulaymiz. Endi `lsblk` buyrug'ini yozamiz va disklarimizni tekshirib olamiz: |
NAME | MAJ:MIN | RM | SIZE | RO | TYPE | MOUNTPOINTS |
|------|---------|----|------|----|------|---------------| | SDA | 7:0 | 0 |
256G | 0 | disk | | | SDA1 | 7:1 | 0 | 512M | 0 | part | /mnt/boot/EFI | | SDA2
| 7:2 | 0 | 1G | 0 | part | [SWAP] | | SDA3 | 7:3 | 0 | 254G | 0 | part | /mnt |

## Bazaviy fayllar o'rnatish

Endi <span style="color:red">mnt</span> jildiga archning bazaviy fayllarini
o'rnatishimiz kerak.
`pacstrap /mnt base base-devel linux linux-firmware nano openssh networkmanager netctl`
buyrug'ini yozamiz va arch linuxni bazaviy ma'lumotlari o'rnatilgandan so'ng
`genfstab -U -p /mnt >> /mnt/etc/fstab` buyrug'ini yozamiz. Bizga chroot huquqi
kerak bo'ladi va `arch-chroot /mnt` buyrug'i orqali /mnt ga chrootni ulaymiz.
Oynamizda [root@archiso/]# nomli buyruq kiritadigan placeholder chiqadi. Hostga
ulashimiz kerak. Buning uchun quyidagicha buyruq yozamiz:
`echo "arch linux uchun sistema nomi" > /etc/hostname`. Endi root uchun parol
yaratib olamiz: `passwd`. Parolni yozamiz. Bu jarayonda yozgan parolingiz
ko'rinmaydi. Endi user yaratib olamiz. `useradd -mG wheel user nomi` buyrug'ini
yozamiz va user uchun parol yaratamiz `passwd` buyrug'ini yozib parol kiritamiz.
Endi <span style="color:cyan">visudo</span> ni tahrirlashimiz kerak
`EDITOR=nano visudo` (biz <span style="color:crimson"> nano</span> editoridan
foydalanishni ma'qul ko'rdik. Xohishga ko'ra <span style="color:cyan">
vim</span> editoridan foydalanish mumkin) buyrug'ini yozamiz va
<span style="color:cyan">%wheel ALL=(ALL) ALL</span> degan komandani
kommentariyadandan chiqarib `ctrl+o` buyrug'i bilan saqlab `ctrl+x` bilan
oynadan chiqamiz.

## Grub yordamida sistemani configuratsiya qilish

Kerakli fayllarni yuklab olamiz
`pacman -S grub efibootmgr dosfstools os-prober (protsessor intel bolsa: intel-ucode agar amd bolsa amd-ucode) `yozamiz.
Grub o'rnatildi endi kernelni qaytadan kompilatsiya qilamiz
`mkinitcpio -p linux` buyrug'ini yozamiz. Operatsion sistema tilini belgilab
olishimiz kerak. `nano /etc/locale.gen` yozamiz va default holda ingliz tilini
tanlaymiz. Buning uchun <span style="color:crimson"> en_US.UTF-8 UTF-8</span>
deb nomlangan joyni komentariyadan chiqarib olamiz va saqlaymiz. `locale-gen`
buyrug'i bilan til faylini ishga tushiramiz. Bizda <span style="color:crimson">
shell</span> <span style="color:cyan"> bash</span> deb belgilangan. Uni xohlasak
<span style="color:cyan"> zsh</span> yoki <span style="color:#8A2BE2">
fish</span>ga o'zgatirishimiz mumkin. <span style="color:crimson">
Shell</span>ni o'zgartirish uchun uni oldin o'rnatish kerak.
<span style="color:#8A2BE2"> fish</span> uchun `pacman -S fish` ,
<span style="color:crimson"> zsh</span> uchun `pacman -S zsh` buyrug'ini
yozamiz. Tanlagan shell'imizni o'rnatgandan so'ng `chsh -s /usr/bin/Shellnomi`
buyrug'ini yozamiz. Shell o'zgardi. Agar `bash` ni qoldirish afzal ko'rilsa,
shell turini o'zgartirishga hojat yo'q. Shellni nomini yozib unga o'tib olamiz.
`nano /etc/locale.conf` komandasi bilan <span style="color:#8A2BE2">
locale.conf</span> faylini `nano` editori yordamida ochib operatsion tizim
tilini kiritamiz `LANGS=en_US.UTF-8` deb yozamiz, saqlab chiqib ketamiz.
Klaviatura tilini belgilashimiz kerak.
`echo "KEYMAP=en_US.UTF-8" > /etc/vconsole.conf` buyrug'ini yozish orqali amalga
oshiramiz. Soatni o'zimizning vaqt mintaqamizga qarab to'g'irlab olamiz. Buning
uchun <span style="color:cyan"> hwlock</span>dan foydalanamiz
`hwlock --systohc --utc`. Shahrimizni belgilashimiz kerak:
`ln -sf /usr/share/zoneinfo/Asia/Tashkent /etc/localtime` buyrug'ini yozib vaqt
mintaqasini sozlab oldik. Endi user'imizga kirib olishimiz kerak. Buni
`su usernomi` buyrug'i bilan amalga oshiramiz.
`grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=grub --recheck`
buyrug'ini yozib grub-install'i bajarib o'rnatilgan diskni qayta kompilatsiya
qilamiz. Grubni o'rnatdik, endi uni konfiguratsiya qilamiz.
`grub-mkconfig -o /boot/grub/grub.cfg` buyrug'ini yozib grubning konfiguratsiya
faylini generatsiya qildik.

## Neofetch

Ba'zi narsalarni ko'rish uchun bizga python va neofetch kerak bo'ladi
`pacman -S python ranger neofetch` buyrug'ini yozamiz. Endi ba'zi narsalarni
faollashtirishimiz kerak bo'ladi buning uchun
`systemctl enable sshd.service && systemctl enable NetworkManager` buyrug'ini
yozamiz. Endi `exit` buyrug'ini yozib sistema o'rnatuvchidan chiqamiz. `exit` va
biz <span style="color: red">root</span>@archiso~ atmosferasiga o'tamiz.
Disklarni qayta uzamiz. Buning uchun `umount -a` buyrug'ini yozib disklarni uzib
olamiz. So'ng `reboot` buyrug'ini yozib sistema qayta o'rnatib olamiz. Bunda
operatsion sistema qattiq diskdan qayta yuklanadi. Bu holatda kompyuter qayta
ishga tushadi ya'ni o'chib yonadi. Bu vaqtda fleshkani kompyuterdan ajratib
olamiz. Kompyuter yongandan so'ng Arch linux'ni tanlaymiz. Sizdan user nomi va
user paroli so'raladi, kiritamiz. `neofetch` buyrug'i yordamida kompyuterimizni
qanday ishlayotganini ko'rishimiz mumkin.
![shunga o'xshash belgi paydo bo'ladi](/install/Neofetch-1.png)

## Arch Linux'ga DE(Desktop Environment) ya'ni Ish stoli muhitini sozlash

Biz arch linux uchun Ish stolini tanlab olishimiz kerak Gnome yoki KDE. Buning
uchun `reflector` dan foydalanamiz. `pacman -S reflector rsync` buyrug'ini
yozamiz va bizda reflecr o'rnatiladi. Rossiya serverlari foydalanish uchun qulay
bo'lganligi sababli o'sha serverdan foydalanamiz.
`reflector -c Russia -a 12 --sort rate --save /etc/pacman.d/mirrorlist`
buyrug'ini yozamiz va mirrorlistni yasab olamiz. Endi DE'ni o'rnatamiz (| =>
yoki degani)
`sudo pacman -S {xorg yoki wayland} {sddm | gdm} {kde o'rnatmoqchi bo'lsak: kde-applications packagekit-qt5} {gnome o'rnatmoqchi bo'lsak: gnome gnome-tweaks}`
buyrug'i bilan o'rnatamiz. So'ng sistemani yoqamiz
`sudo systemctl enable {gdm | sddm}` va `reboot` beramiz.

<span style="color:cyan">Happy hacking!!!</span>
