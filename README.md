# Iseseisev Too

| Roll   | Vastutus                     |
| ------ |------------------------------|
| Martin | Serveri admin, Githubi admin |
| Ken    | Development, help and support|

## Valitud serveri variant koos põhjendusega

Valituks sai serveri variandiks Nginx kuna varasemalt on kokkupuude olemas. 
Server on selfhosted.

## Serverinfo (IP, OS, veebiserver)

IP: `https://rakendus.teddzter.com`\
OS: `unraid - nginx::alpine`\
Veebiserver: `nginx`

## SSH seadistuse staatus (võtmepaar, Github Secrets)

SSH võtmete genereerimine ja seadistamine tehtud.\
Private key seadistatud Github Secrets-is. 

## Probleemid, mis tekkisid ja kuidas lahendasid

>Probleem 1:\
Nginx seadistamine. 
>>Lahendus:\
Vale port oli upsteami pandud. Pordi 443 asemel tuli panna 80.

>Probleem 2:\
Deploy action failed. Server ei lase ligi.
>>Lahendus:\
Panime selfhosted runneri käima.

>Probleem 3:\
Runner on offline.
>>Lahendus:\
Konteineri nimi `nging-php-fm` on valesti seadistatud. Peame muutma selle ümber `Static_site`.

>Probleem 4:\
Static_site annab probleemi, et git-ile ei meeldi, et teda üritatakse tõmmata serverisse.
>>Lahendus:
Seadistasime git-i. 

## Deploy testimise tulemus

`Readme update` esimene deploy failis.\
`Readme update` teine deploy õnnestus.\
`Muudatus veebilehel` kolmas deploy õnnestus.
