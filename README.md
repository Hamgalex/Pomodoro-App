# Pomodoro App

Esta aplicación es un timer pomodoro hecho en Ionic con Angular, el cual es un método de estudio para poder eficientizar nuestras tareas. El método consiste en trabajar y descansar ciertos tiempos los cuales nosotros elegiremos. Esta aplicación fue creada por:

- Leslie Elizabeth Saucedo Bahena 1930124
- Cecilia Arlet Treviño Morin 1907173
- Sergio Andrés Elizondo Rodríguez 1907852
- Héctor Alejandro Márquez González 1989936

## Como correr el programa

Para correr el programa necesitamos descargar node.js y después instalar el cliente de angular y ionic, este cliente se descarga con:
>npm install -g @angular/cli 
>npm install -g @ionic/cli

Para usar el programa con el localhost ejecutaremos el siguiente comando:
>ionic serve

Este programa usa **SQLite** por tanto no será posible usar todas sus funcionalidades corriendo mediante el localhost, para poder ocupar todas sus funcionalidades necesitaremos hacer un deploy a un dispositivo móvil o en su defecto a un simulador, para esto haremos lo siguiente dependiendo del caso:
**Android**
>ng build 
>ionic capacitor add android 
>ionic capacitor run android

**iOS**
>ng build 
>ionic capacitor add ios 
>ionic capacitor run ios

Para la aplicación en iOS se requiere una mac y tener instalado XCode.
## Dependencias

### ngx-countdown
Dependencia para hacer la cuenta regresiva (timer).
Vínculo: **[https://www.npmjs.com/package/ngx-countdown](https://www.npmjs.com/package/ngx-countdown)**
### svg-round-progressbar
Dependencia para la animación del reloj.
Vínculo: **[https://www.npmjs.com/package/angular-svg-round-progressbar](https://www.npmjs.com/package/angular-svg-round-progressbar)**
### charts.js
Dependencia que trabaja en conjunto con ng2-charts.
Vínculo: **[https://jtblin.github.io/angular-chart.js/](https://jtblin.github.io/angular-chart.js/)**
### ng2-charts
Dependencia para mostrar las gráficas, se necesita el chart.js.
Vínculo: **https://www.npmjs.com/package/ng2-charts**
### eslint-plugin-angular
Dependencia para hacer correcciones de código para hacerlo mas legible.
Vínculo: **https://www.npmjs.com/package/eslint-plugin-angular**
### SQLite
Dependencia que nos permite accesar a bases de datos en el proyecto.
Vínculo: **https://ionicframework.com/docs/native/sqlite**
### SQLite Porter
Dependencia para extraer o insertar datos a una base de datos con SQLite.
Vínculo: **https://ionicframework.com/docs/native/sqlite-porter**
## Páginas de aplicación
### Login
La primera página que nos aparece es la del login, que nos sirve para poder entrar a nuestra aplicación ingresando el correo y la contraseña y en el caso de que no tengamos se crea una nueva cuenta. Los emails y contraseñas están guardados en Google Firebase.

![enter image description here](https://lh3.googleusercontent.com/o2adEQJ-60dcrHZI235ikxjbyCZp3fauUj2oaXe6tTbzDVVI6Qv_Dd--_-jIQgMonsh77I-XOTVUPtpVfUZsvJKWwTrQlTjL_Xk40TOydFAP2o9oMll7fNpwFoVRheNQQt21FpgmciFGO8C_vLooIbPGEmoeJXKfAGTyL77rZi4V_MNjAeN03m80veg8ZTUtQhhKM2nL7Z7yX6LjOmvvmZ4eaug8fjBSW-NmiqfubhYbda4Nrwj4NThKw5A5kU5V1by_Ewlkyg68yOmGt1cTiJhitvvjesa0xnMfGHXgDZbGJawZamZPcq2AE1mFE5XXfVs4Y-bP5KaattxNAeUjuj0JS1sJ1EB3rAB_pTr8fCchgafvbtYMBFiin0cz_Rxnq-t-TjDOUjrTugr7xx3L9nbZRUGZZ_xdP0ARIX7VjkIBTyXBdSJE6kut3470qbMFxCO9HNtGH8Xt3mHKpnmHix8-F5VgZlmnF_onuasNAi9g7PZjor5KEq9AjpRxKkUKI4LNP-cV4Xn0SoJXcv2Y6HmX2PO-dM6TpILbJ1uOqrDWPKa9luYWWd0EEQkfoOKrT66O440TsrxHFqTd1giaGky2I08W3I0scy8kqq3A0R9PLAlBucpF0JIxYLEhOfYradL9mrEdXczgcHYfZkPQ5OCHwe2ffoocSihauMUD60k3cKVXn82noDatz7kNt__dTpHBErqthmX0yxj57Le5i3bM=w489-h452-no?authuser=0)

### Timer
En la página del timer podremos escoger el número de minutos para trabajar, el número de minutos para un descanso normal y uno largo, y el número de ciclos. Para empezar con el trabajo le daremos al botón "Start".

![enter image description here](https://lh3.googleusercontent.com/FDhRSpNlHHpfLrKA_LAy4mErw-EZgIiOG9ln-WfiqJ9dBXy63tXzJF2BYdGf5gO1Swd407u8K6JDoNOhEq8VZ5ahwacrxxpC6fBQo6M0EKBkzsMZo3DZ8fH9U9QK42jHSsEeP153C0_CVU66VLn0tn2cFkewqcx5waix_beB4yAwSKTzKgNU0JvSmqEa866QAMkxkKGrY4nBuorlGJhydDFhc4fmoZbqhLLCt7fbVv5kzpdisRXvhz_B83KM9OS7VE7LPTM_cJ_1LNxsuyhlpCgcjHS5qOmgTjifmCtJ7r-k4iTavnCz_BdsmS8WZbsLlrkor8orq8fARlYjwMFLjonDm35x1UCf_1cezVDe09oTpjtZ1DA43tUDmLWMllaAItMmPuCqaHopA2AyXKr-16LaKe9tBUgMnzSUCabAx9rUcwSEPn3Uo_iEjdp7foQddQiizjZcr-NbWFyfou3cNx4LOZhhDTV8ejE6bYBbRTfnoQRQYoodvAmEhKwcnwFA-HjbsKsmNeXbNPgGXd73hEX8O8H4KolNGI6AbBlRw9Wlzv3ItXkexzQxcV9aFVnXILc8t8veMPeuTEi3ejweb7rBh_-LnQZGP7e-FXa6RSVph2qX2S1FQ8-t_NwmKA4mHjbGjzXZ7BAkkZhVrig-Uh_z3frGWFOtFRan08moI2X-rGSnI8D6VdTnib9xsWAzNFogjQ94rDhDte673HoZGAH1=w487-h631-no?authuser=0)

Luego de dar click a start entraremos en la pantalla para trabajar, esta pantalla se cambiará cuando la animación llegue a cero. Al acabar de trabajar sonará un sonido para alertarnos y comenzará el tiempo de descanso. Los tiempos de descanso largos ocurren cada cuatro ciclos. 
Al terminar todos los ciclos terminará la sesión, y se agregarán los datos de la sesión en una base de datos para así ver las estadísticas en la página "Stats".

![enter image description here](https://lh3.googleusercontent.com/SShvDFZNTOBHAQGWGAcDasMr5P-tHOVxkExPs15OJdI0vpKPzL-eRUJqN1vq-L-G6X7y5H75GhpjnAQjMR8v4NMephriByGLWto8WqbXqZfP-robJtQnlXGXjVgPEjpuZmHS-NcMftK_AkloUGH_LPk1jwSAL32hd3CoK5xdV7CFT_0wdk2e6L2Ei_KgK24Uj2AjUNxK1qWQgDafYptmBOwjJag4ljM-XaXRfOsOUCTAUpoWilK2EHSaC-ShVzYnH6xfO0RPYdEBnPIDPBGTSN6AIhtzHsBy7M5-4up0FTXkjHVhsTy9XjNKw2oLqJ_8GS-7EoqpqSnuziVQBnT5LxD70gjVx2zVdn_bCVa2SlYFyjDn_RAjFTkhGSr7c-mj7WM5TrC2jpWwmSnQIlTQ5S0bOfxOK4b3FBka7z5cMt5m4slvOCFIbi7x7T9liRomymkLfs9Lp5QIjiRs6wtiXyx6IbiSC6hgjoET_ioCKoYP8M08WnIexBQ7npTywDv8bOEeD8QV0WauILNYGlhVaxCGiBIjSdU6QLVz4Hz_W5s0CcxKymOls7zBSSM8lM7feNhn_lqnH-hjdXsqd8p7JrOu5Q6aHDFPoKXI4uZhOj-hOr6OkeaFUJEXRVvmAZ_CHWmClpByYmo7kC5haOQHUBz7SouRYtU6vLaLUlj8jMF3nLaLVkv84ynDyTASoVcpHJE2rSx_iOiTyimLS6wXGP3N=w465-h855-no?authuser=0)

### Información
En esta página nos aparecerá la información de lo que es el método pomodoro, por si alguien es primerizo y quiere iniciar a estudiar con este grandioso método.

![enter image description here](https://lh3.googleusercontent.com/lJEht_XmDMgm9HZ0G21Mu53rSY6kzFZ2bdAbq4cdQM5wQwI1AT98m4MbdHaH0MkN6Zo1T0QQWxisZzV20x2Q1i2dP0eszsIanxGFJpf9rMSNNE8wXSz93nsfWOMT9bgJNdLZAM0C4UyDNOqMLiV4OuE-mnbC2N--l_zeXJG1JRKS0xmfgWgImVxQIeAbAPxzSWoTOjTIC765w6zgcRALp5MVjQobklro1_R1A_-8RG-Y-cxHABvfXDh-OYWuEp3q0E-AR8DdSyNZFkDdPy_tii7e8p8dndTAvoqmUxE03hiDSOjxvGd6YoxWl-oxLDF-cDCPA2uXH78XnoxzuhxCwoqZoSWAZKRy7srzHBpG6Mxx1PxUY1N4pEuTu96DA5NMHz0Mh5AAnQ09Ze0CCxw5kHdXZBXMuDBCZiXzP6N_Lv_T37CnREgLG5vKTf-Dy4i95UnJSDcP63nVeds1wqlodx0tpdV04grwdew7JbTTgb1JyTxkSvLZpbBN3J_A6O4YCd1vhe48sbtYzteMh3NgNHmKN1rkuqoRbni_nRc1uBJKpDyBPORQF0NVgfxrfM2uzispAEMSP1-Y3-WmaNBwEyhQKj0deFCed0dt3MtfQwknbpjhyqBRlL1NsYqPL8mZ5J9kSX0prLBu6GGxNjOGooy83ZowIKDcBuesQ1rF-1vhObq80lfhcv8lIQ0x89zyEnHoGVwLxEutbUvdh3Tc8v9z=w493-h917-no?authuser=0)

### Estadísticas 
En esta página se muestran las estadísticas de los últimos 5 sesiones pomodoro hechas. Hay tres gráficas, primero la de ciclos por sesión, luego la de minutos trabajados por ciclo y al final los minutos totales trabajados por sesión.

![enter image description here](https://lh3.googleusercontent.com/1tHyvcLXbzEjd9By-VCeUsHOvFoyflW4RUl9XkYmx2yeYdsSr37T9Bck7W8EMVv7772jsPAC7mX1fY8IS_7Lj2DNKXzrxpgTcVqv-G4LixTmErh9TdyeYDfDEBrPjFbi5jiYhoFLuzWVhZFhuhMJgux4XCxmmdbQDfrFWQDcBDHnh56Amb0-8DX87F4wJq-NfVyl5bvK2T2DSsjKUpkvXSWYb_ME81K4072VIahu49Ra3bYmdiGZdDPifTyhU8C9qKnJr0AV8LcCjrNnkPbe3R_nNRdkwLFTguR9nl_10cBIUw7J06ip7_0YNEb-CjInZrj1mGTjVm9roA0MnAYXQWq_JMK7CkawjzcYUsbMhEPvwPNkYiYZxIt7_JPawN7ZV4zyMGrSwJ4ScUbKnAkH16xdf0Dm7eB2Wv8bjWwc7BGcojiKKyrBv9LEnAnDGjQYuV8TVsSO5yDXl3eda0HZnOkRUoD0l8OWoK5raQQbV1tO5cc0ieX32v2dB-nasGRmNrX7ujyhy13JM9-T-wC28N6vWGratYgjxUYIOJ29mfe_t8SSVo6yV95_wGztt9V3jsuVYXhVVsRu573lO2l5mil6NzLOiKtqy61HCFhWxNvhTYDZQKMtt56nphO0acGb-cn2c9dKhxxIrNWhzAiRSsvduOuCnZM56ywXTpEyPL8608xWXTM0ezV_udvQSMIkLE6xfbNQqidJ8JwWV6lFBqFV=w465-h969-no?authuser=0)
