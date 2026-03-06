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
Nginx seadistamine. Vale port oli upsteami pandud. Pordi 443 asemel tuli panna 80.

## Deploy testimise tulemus


