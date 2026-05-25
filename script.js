const empresas = [

    {
        empresa: "Lizbeth Empresa HS AQP",

        sede: "La Victoria",

        contacto: "No especificado",

        telefono: "No especificado",

        distrito: "La Victoria",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://maps.app.goo.gl/taQWveo5KdYSo2Pq6"
    },

    {
        empresa: "Agencia Pepito",

        sede: "La Victoria",

        contacto: "No especificado",

        telefono: "No especificado",

        distrito: "La Victoria",

        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYEt3uxFXxq7UGOg8KC6fksZL73LgOuy5mQ&s",

        portada: "https://lh3.googleusercontent.com/p/AF1QipO-QOo13aeFmWWAa-LuLGLlTZinOjEbbJ0eErIo=s1360-w1360-h1020",

        fachada: "https://lh3.googleusercontent.com/p/AF1QipPd4Ux6KaktVvjc2GxSRSNL-HOdIsK4shN72Mbt=s1360-w1360-h1020",

        maps: "https://maps.app.goo.gl/Fh7hALE47VBjqTVs8"
    },

    {
        empresa: "ACS INDUSTRIA METAL MECANICA EIRL",

        sede: "Lurigancho",

        contacto: "No especificado",

        telefono: "No especificado",

        distrito: "Lurigancho",

        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGndTNf-ODPBKlK5hZCBprC0Drs1my_2nwg&s",

        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReILxGGoDBAyuZ9s6etAafKfWmzXdjbUtP6w&s",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://maps.app.goo.gl/DADoiBdd1vUcC3hd7"
    },

    {
        empresa: "A.Berio y CIA S.A.C",

        sede: "Lurin",

        contacto: "Jordy Poma",

        telefono: "998181169",

        distrito: "Lurin",

        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWS_iwfqqdh46DRNB0I4ivag4vOz1MRcA33A&s",

        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp81U0Xbd3uF6PiDn65vx_H4kMp_pyA3-Ng&s",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://goo.gl/maps/7Whrdn2zd8qXos3b6"
    },

    {
        empresa: "Acoinsa",

        sede: "No especificado",

        contacto: "No especificado",

        telefono: "No especificado",

        distrito: "No especificado",

        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSftQUnm8nz3uFWzne8Y6uMn2zurvF2owb8-A&s",

        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5x1Juje0TOxf8lXe_AmaX7-18tMtBz6LSkg&s",

        fachada: "https://www.google.com/maps/place/aCOINSA/@-11.9816023,-77.1254876,3a,75y,90t/data=!3m7!1e2!3m5!1sCIABIhBPkgzpap0R7XQdQKhe7bnf!2e10!3e12!7i1600!8i1200!4m11!1m2!2m1!1sacoinsa!3m7!1s0x9105cd805f94c8e9:0x737a2b04babfa9de!8m2!3d-11.9815863!4d-77.1256033!10e5!15sCgdhY29pbnNhkgELcG9zdF9vZmZpY2XgAQA!16s%2Fg%2F11rz9f28ql?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",

        maps: "https://maps.app.goo.gl/PUeWPKXrgWY4NnGq5"
    },

    {
        empresa: "Agencia Generacion 12",

        sede: "Cercado de Lima",

        contacto: "No especificado",

        telefono: "No especificado",

        distrito: "Cercado de Lima",

        logo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFFYe0xvTkZlW_Rv-QFhWs7UTFqseQyyaOFsriWU0jnmUbcexwuHBMp81i-MyTOQ5__YHU6QPa6rQnx5rr6keG_4RZ6ntryilABsoQ6WT5CkrLs88S6m0IifTfnmhG4AtBgOG7k55RN8Rqa=s1360-w1360-h1020",

        portada: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFFYe0xvTkZlW_Rv-QFhWs7UTFqseQyyaOFsriWU0jnmUbcexwuHBMp81i-MyTOQ5__YHU6QPa6rQnx5rr6keG_4RZ6ntryilABsoQ6WT5CkrLs88S6m0IifTfnmhG4AtBgOG7k55RN8Rqa=s1360-w1360-h1020",

        fachada: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEhazNfRR9cqemRPm0YLmObywZtt4Duz_vu07prwjx4Gq99qbHY3MYJOmj7bgDr97UBOXCJVYUZ0MVUw84oUSUpePBU4dlhk3SK1oMq4eN8L6tFOdqIeK62KnOnAsuI6lPFG8lH=s1360-w1360-h1020",

        maps: "https://maps.app.goo.gl/YA7gbC8ELP35WF498"
    },

    {
        empresa: "BIOCOMBUSTIBLES H2O S.A.C",

        sede: "Ventanilla",

        contacto: "Diego Leiva",

        telefono: "994004463",

        distrito: "Ventanilla",

        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTso2sngRujme1b7gN3fYbMKLlwiqXo4vU6PQ&s",

        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCMgAnnqrprM1tNr5BetWC86i7OE1kitbjA&s",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://maps.google.com/maps?q=-11.9194634%2C-77.1167104&z=17&hl=es"
    },

    {
        empresa: "Carrocerias Solis Asociados S.A.C",

        sede: "No especificado",

        contacto: "Julio Solis",

        telefono: "981494217",

        distrito: "No especificado",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: ""
    },

    {
        empresa: "Cargueros Terrestres E.I.R.L",

        sede: "Comas",

        contacto: "No especificado",

        telefono: "965765706",

        distrito: "Comas",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://maps.app.goo.gl/2ZiEbAHbpjrfZqkW8"
    },

    {
        empresa: "Casal ingenieros S.A.C",

        sede: "",

        contacto: "Casal Brandon Sosa Bellido",

        telefono: "960286099",

        distrito: "",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: ""
    },


    {
        empresa: "Corporacion Alfa Group E.I.R.L",

        sede: "Chorrillos",

        contacto: "Rober tacsa",

        telefono: "981035208",

        distrito: "Chorrillos",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://www.google.com/maps/place/12%C2%B012'12.5%22S+76%C2%B058'36.1%22W/@-12.2034722,-76.9766944,687m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-12.2034722!4d-76.9766944!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        empresa: "Schiappacasse Peru S.A.C",

        sede: "Lurín",

        contacto: "Daniel Flores",

        telefono: "908899156",

        distrito: "Lurín",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://www.google.com/maps/place/P49G%2BXPC,+Lur%C3%ADn+15823/@-12.2800282,-76.8731545,687m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105bcdfe425d393:0x8b6847da9d595393!8m2!3d-12.2800282!4d-76.8731545!16s%2Fg%2F11j4w_lk43!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        empresa: "Chacon Contratistas Generales S.A.C",

        sede: "Lurigancho",

        contacto: "Eduar Leiva",

        telefono: "966763475",

        distrito: "Lurigancho",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://www.google.com/maps/place/12%C2%B000'36.6%22S+76%C2%B056'11.4%22W/@-12.0101533,-76.9390732,805m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-12.0101533!4d-76.9364983?entry=tts&g_ep=EgoyMDI1MDczMC4wIPu8ASoASAFQAw%3D%3D&skid=d20f5c9e-e5a8-49bf-849f-f820893dd037"
    },
    {
        empresa: "DIVECENTER S.A.C.",

        sede: "La Victoria",

        contacto: "Renato Benaducci",

        telefono: "966691009",

        distrito: "La Victoria",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: ""
    },

    {
        empresa: "DIESEL AUTOPARTES DEL PERU S.R.L.",

        sede: "",

        contacto: "Diego",

        telefono: "992148166",

        distrito: "",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: ""
    },

    {
        empresa: "Fabricaciones Alcantara E.I.R.L",

        sede: "Chilca",

        contacto: "Liliana",

        telefono: "923262168",

        distrito: "Chilca",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://www.google.com/maps/place/Fabricaciones+Alc%C3%A1ntara,+Av.+la+Palmera,+Chilca+15870/data=!4m2!3m1!1s0x91059e1ba8bc9581:0x30ec1f6e13d25a79?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjE0LjAYACDXggMqbCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NDM5Myw5NDIxMzIwMCw5NDI1ODMxOUICUEU%3D&skid=e7f22fe0-2ee6-4ae1-8d98-5fd65820dc8f"
    },

    {
        empresa: "Grupo Altamira",

        sede: "Chorrillos",

        contacto: "",

        telefono: "",

        distrito: "Chorrillos",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://www.google.com/maps/place/12%C2%B012'30.9%22S+76%C2%B058'59.5%22W/@-12.2085833,-76.9831944,687m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-12.2085833!4d-76.9831944!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
    },

    {
        empresa: "ICALU S.A.C.",

        sede: "Ate",

        contacto: "Lesly Icalu",

        telefono: "952197499",

        distrito: "Ate",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: ""
    },
    {
        empresa: "INDUSTRIA CARROCERA DEL PERU SAC",

        sede: "Lurigancho",

        contacto: "Jaqueline Aquino",

        telefono: "981008532",

        distrito: "Lurigancho",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://www.google.com/maps/place/INDUSTRIA+CARROCERA+DEL+PERU+SAC/@-11.9881692,-76.9355392,687m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c57bc7a44e81:0x48385a227c97d11c!8m2!3d-11.9881692!4d-76.9355392!16s%2Fg%2F11k3_w3mp5!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
    },

    {
        empresa: "INFINITY MOTORS S.A.C.",

        sede: "Lurín",

        contacto: "Kathy Infinity Motor",

        telefono: "989459967",

        distrito: "Lurín",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://www.google.com/maps/place/ID+Lur%C3%ADn/@-12.2976489,-76.8497711,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105bd3584b0592d:0x3e5e5cbc1a8aa145!8m2!3d-12.2976489!4d-76.8497711!16s%2Fg%2F11gf1md0q7?entry=tts&g_ep=EgoyMDI1MDczMC4wIPu8ASoASAFQAw%3D%3D&skid=09734f7d-434a-44a4-906f-9858ee7d21b8"
    },

    {
        empresa: "INDUSTRIA METALICA MECANICA ALC S.A.C.",

        sede: "",

        contacto: "Luis ALC",

        telefono: "989459967",

        distrito: "",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: ""
    },

    {
        empresa: "Inversiones rej Asociados S.A.C",

        sede: "Lurigancho",

        contacto: "Inversiones rej Asociados S.A.C",

        telefono: "902121860",

        distrito: "Lurigancho",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://www.google.com/maps/place/12%C2%B000'28.6%22S+76%C2%B052'57.4%22W/@-12.0079444,-76.8826111,687m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-12.0079444!4d-76.8826111!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
    },

    {
        empresa: "Manofacturas de Acero Comercial",

        sede: "Lurín",

        contacto: "MACISA María",

        telefono: "942815426",

        distrito: "Lurín",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://maps.app.goo.gl/csCqtsjwJWUpUDCX8"
    },




    {
        empresa: "Mobil Bus",

        sede: "Cercado de Lima",

        contacto: "Christiane",

        telefono: "981855920",

        distrito: "Cercado de Lima",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: ""
    },
 {
        empresa: "Polimix Concreto peru",

        sede: "Ate",

        contacto: "Yoben Carpa",

        telefono: "908815656",

        distrito: "Ate",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://maps.app.goo.gl/6zT43LzkVd3Ec8yr6"
    },
{
        empresa: "RMB Sateci S.A.C",

        sede:"Villa el Salvador",

        contacto: "Luis Navarro",

        telefono: "946396463",

        distrito: "Villa el Salvador",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://maps.app.goo.gl/qotK8FSCNXpHfZrZA"
    },


    {
        empresa: "EXACTA OPERADOR LOGISTICO SAC ",

        sede:"Villa el Salvador",

        contacto: "Cesar",

        telefono: "959655107",

        distrito: "Villa el Salvador",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",

        maps: "https://maps.app.goo.gl/s29GLaxKT2dMbf1z8"
    },

    {
        empresa: "INDUSTRIA METALICA BULLON S.A.C.",

        sede:"Ate",

        contacto: "",

        telefono: "",

        distrito: "Ate",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",

        fachada: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=xbB4TQDy3NybfB-tWgHXvw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=350.8297&pitch=0&thumbfov=100",

        maps: "https://maps.app.goo.gl/BF1s28sWzC4kXJQBA"
    },

    {
        empresa: "TRANSPORTES ZETRAMSA S.A.C. ",

        sede:"Ate",

        contacto: "Alex",

        telefono: "942 734 020",

        distrito: "Ate",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://www.google.com/maps/place/TRANSPORTES+ZETRAMSA+S.A.C./@-12.0491905,-76.9608921,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhASZo1jlHqK7_nUKiQK78gm!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAEp3k8xAKBch0xQlwZF2z0PfSn5s-297hPLzYqoOnuTmwtx8HZbv5GrJzxyCFQPzKufQwiREdv9EWB2wbkSYk2RTxDYaxbQP5RcqpnZ0upLbWvmnlXUd0yfHEf1Mxil4CbS9Bajm9Diq17J%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x9105c688891d7057:0x94848421dd2cd87c!8m2!3d-12.0494542!4d-76.9607723!10e5!16s%2Fg%2F11cmycwtc6?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        fachada: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=xbB4TQDy3NybfB-tWgHXvw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=350.8297&pitch=0&thumbfov=100",

        maps: "https://maps.app.goo.gl/TEpKQEaraFE4iaPSA"
    },

  

    {
        empresa: "FABRICACIONES METALICAS Y SERVICIOS DIESEL S.A.C. ",

        sede:"Lurigancho",

        contacto: "Alexa Palomino",

        telefono: "989 023 647",

        distrito: "Lurigancho",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://www.google.com/maps/place/TRANSPORTES+ZETRAMSA+S.A.C./@-12.0491905,-76.9608921,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhASZo1jlHqK7_nUKiQK78gm!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAEp3k8xAKBch0xQlwZF2z0PfSn5s-297hPLzYqoOnuTmwtx8HZbv5GrJzxyCFQPzKufQwiREdv9EWB2wbkSYk2RTxDYaxbQP5RcqpnZ0upLbWvmnlXUd0yfHEf1Mxil4CbS9Bajm9Diq17J%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x9105c688891d7057:0x94848421dd2cd87c!8m2!3d-12.0494542!4d-76.9607723!10e5!16s%2Fg%2F11cmycwtc6?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        fachada: "",

        maps: "https://maps.app.goo.gl/4PmeJUhwXdES3L44A"
    },

 {
        empresa: "COMPAÑIA INDUSTRIAL DE CARROCERIAS SAC  ",

        sede:"Lurín",

        contacto: "",

        telefono: "",

        distrito: "Lurín",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://www.google.com/maps/place/TRANSPORTES+ZETRAMSA+S.A.C./@-12.0491905,-76.9608921,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhASZo1jlHqK7_nUKiQK78gm!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAEp3k8xAKBch0xQlwZF2z0PfSn5s-297hPLzYqoOnuTmwtx8HZbv5GrJzxyCFQPzKufQwiREdv9EWB2wbkSYk2RTxDYaxbQP5RcqpnZ0upLbWvmnlXUd0yfHEf1Mxil4CbS9Bajm9Diq17J%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x9105c688891d7057:0x94848421dd2cd87c!8m2!3d-12.0494542!4d-76.9607723!10e5!16s%2Fg%2F11cmycwtc6?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        fachada: "",

        maps: "https://maps.app.goo.gl/qok8NU6JByQqmnDq5"
    },
     {
        empresa: "ESTRUCTURAS METALICAS OLMEDO EIRL  ",

        sede:"Ate",

        contacto: "",

        telefono: "",

        distrito: "Ate",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://www.google.com/maps/place/TRANSPORTES+ZETRAMSA+S.A.C./@-12.0491905,-76.9608921,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhASZo1jlHqK7_nUKiQK78gm!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAEp3k8xAKBch0xQlwZF2z0PfSn5s-297hPLzYqoOnuTmwtx8HZbv5GrJzxyCFQPzKufQwiREdv9EWB2wbkSYk2RTxDYaxbQP5RcqpnZ0upLbWvmnlXUd0yfHEf1Mxil4CbS9Bajm9Diq17J%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x9105c688891d7057:0x94848421dd2cd87c!8m2!3d-12.0494542!4d-76.9607723!10e5!16s%2Fg%2F11cmycwtc6?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        fachada: "https://www.google.com/maps/place/Estructuras+Met%C3%A1licas+Olmedo+E.I.R.L/@-12.0304778,-76.941591,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICy5PjCxwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAG4CXmnbdhDfhx__BNCShS-zrlnWlm4ayZLcrq0wZ48CJxSXnUjOIz5o5zDVL9-_4zq5TUn64cTUOb1y1DhdWblHhlLx8_vphCAOgHO9WjjB3nvyP2ez9TOIljhKCEaG7xPPXzNWw%3Dw114-h86-k-no!7i4618!8i3464!4m7!3m6!1s0x9105c5fa7ff4bb57:0xceaae55c843558fa!8m2!3d-12.0303945!4d-76.9416122!10e5!16s%2Fg%2F11gxws_h8b?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        maps: "https://maps.app.goo.gl/CWDsivYjjE62AuAi8"
    },
 {
        empresa: "GRUPO MINHUA S.A.C. ",

        sede:"Ate",

        contacto: "Wilton",

        telefono: "924 692 184",

        distrito: "Ate",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://www.google.com/maps/place/TRANSPORTES+ZETRAMSA+S.A.C./@-12.0491905,-76.9608921,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhASZo1jlHqK7_nUKiQK78gm!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAEp3k8xAKBch0xQlwZF2z0PfSn5s-297hPLzYqoOnuTmwtx8HZbv5GrJzxyCFQPzKufQwiREdv9EWB2wbkSYk2RTxDYaxbQP5RcqpnZ0upLbWvmnlXUd0yfHEf1Mxil4CbS9Bajm9Diq17J%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x9105c688891d7057:0x94848421dd2cd87c!8m2!3d-12.0494542!4d-76.9607723!10e5!16s%2Fg%2F11cmycwtc6?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        fachada: "https://www.google.com/maps/place/Estructuras+Met%C3%A1licas+Olmedo+E.I.R.L/@-12.0304778,-76.941591,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICy5PjCxwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAG4CXmnbdhDfhx__BNCShS-zrlnWlm4ayZLcrq0wZ48CJxSXnUjOIz5o5zDVL9-_4zq5TUn64cTUOb1y1DhdWblHhlLx8_vphCAOgHO9WjjB3nvyP2ez9TOIljhKCEaG7xPPXzNWw%3Dw114-h86-k-no!7i4618!8i3464!4m7!3m6!1s0x9105c5fa7ff4bb57:0xceaae55c843558fa!8m2!3d-12.0303945!4d-76.9416122!10e5!16s%2Fg%2F11gxws_h8b?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        maps: ""
    },
     {
        empresa: "CARROCERIAS FERDAD E.I.R.L. ",

        sede:"Ate",

        contacto: "Freddy",

        telefono: "958 432 481",

        distrito: "Ate",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://www.google.com/maps/place/TRANSPORTES+ZETRAMSA+S.A.C./@-12.0491905,-76.9608921,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhASZo1jlHqK7_nUKiQK78gm!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAEp3k8xAKBch0xQlwZF2z0PfSn5s-297hPLzYqoOnuTmwtx8HZbv5GrJzxyCFQPzKufQwiREdv9EWB2wbkSYk2RTxDYaxbQP5RcqpnZ0upLbWvmnlXUd0yfHEf1Mxil4CbS9Bajm9Diq17J%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x9105c688891d7057:0x94848421dd2cd87c!8m2!3d-12.0494542!4d-76.9607723!10e5!16s%2Fg%2F11cmycwtc6?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        fachada: "https://www.google.com/maps/place/Estructuras+Met%C3%A1licas+Olmedo+E.I.R.L/@-12.0304778,-76.941591,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICy5PjCxwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAG4CXmnbdhDfhx__BNCShS-zrlnWlm4ayZLcrq0wZ48CJxSXnUjOIz5o5zDVL9-_4zq5TUn64cTUOb1y1DhdWblHhlLx8_vphCAOgHO9WjjB3nvyP2ez9TOIljhKCEaG7xPPXzNWw%3Dw114-h86-k-no!7i4618!8i3464!4m7!3m6!1s0x9105c5fa7ff4bb57:0xceaae55c843558fa!8m2!3d-12.0303945!4d-76.9416122!10e5!16s%2Fg%2F11gxws_h8b?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        maps: "https://maps.app.goo.gl/qphLHLr2y3p7DAXH9"
    },

     {
        empresa: "FALKOR TRANSPORTES Y DISTRIBUCION S.A.C. ",

        sede:"Ventanilla",

        contacto: "Freddy",

        telefono: "989 015 306",

        distrito: "Ventanilla",

        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        portada: "https://www.google.com/maps/place/TRANSPORTES+ZETRAMSA+S.A.C./@-12.0491905,-76.9608921,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhASZo1jlHqK7_nUKiQK78gm!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAEp3k8xAKBch0xQlwZF2z0PfSn5s-297hPLzYqoOnuTmwtx8HZbv5GrJzxyCFQPzKufQwiREdv9EWB2wbkSYk2RTxDYaxbQP5RcqpnZ0upLbWvmnlXUd0yfHEf1Mxil4CbS9Bajm9Diq17J%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x9105c688891d7057:0x94848421dd2cd87c!8m2!3d-12.0494542!4d-76.9607723!10e5!16s%2Fg%2F11cmycwtc6?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        fachada: "https://www.google.com/maps/place/Estructuras+Met%C3%A1licas+Olmedo+E.I.R.L/@-12.0304778,-76.941591,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICy5PjCxwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAG4CXmnbdhDfhx__BNCShS-zrlnWlm4ayZLcrq0wZ48CJxSXnUjOIz5o5zDVL9-_4zq5TUn64cTUOb1y1DhdWblHhlLx8_vphCAOgHO9WjjB3nvyP2ez9TOIljhKCEaG7xPPXzNWw%3Dw114-h86-k-no!7i4618!8i3464!4m7!3m6!1s0x9105c5fa7ff4bb57:0xceaae55c843558fa!8m2!3d-12.0303945!4d-76.9416122!10e5!16s%2Fg%2F11gxws_h8b?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D#",

        maps: "https://maps.app.goo.gl/B1poZL8TXDbPzUso7"
    },

];


const contenedor = document.getElementById("contenedor-empresas");
const buscador = document.getElementById("buscador");
function mostrarEmpresas(lista) {
    contenedor.innerHTML = "";
    lista.forEach(item => {
        contenedor.innerHTML += ` <div class="col-lg-4 col-md-6 mb-4">
         <div class="card card-empresa h-100"> <!-- PORTADA -->
          <img src="${item.portada}" class="portada" > <!-- LOGO -->
           <img src="${item.logo}" class="logo-empresa" > <div class="card-body">
            <!-- EMPRESA --> <h3 class="nombre-empresa"> ${item.empresa} 
            </h3> <!-- SEDE --> <div class="mb-3"> <span class="badge-sede"> 
            <i class="bi bi-buildings"></i> Sede: ${item.sede} </span> </div> 
            <!-- CONTACTO --> <div class="info"> <i class="bi bi-person-fill icono"></i> <strong>Contacto:</strong> ${item.contacto} </div> 
            <!-- TELEFONO --> <div class="info"> <i class="bi bi-telephone-fill icono"></i> <strong>Teléfono:</strong> ${item.telefono} </div> 
            <!-- DISTRITO --> <div class="info"> <i class="bi bi-geo-alt-fill icono"></i> <strong>Distrito:</strong> ${item.distrito} </div> 
            <!-- FACHADA --> <img src="${item.fachada}" class="fachada" onclick="abrirImagen('${item.fachada}')" > <!-- BOTONES --> <div class="mt-4"> <a href="https://wa.me/${item.telefono}" target="_blank" class="btn btn-whatsapp" > <i class="bi bi-whatsapp"></i> WhatsApp </a> <a href="${item.maps}" target="_blank" class="btn btn-primary btn-maps mt-2" > <i class="bi bi-geo-alt-fill"></i> Ver Ubicación </a> </div> </div> </div> </div> `;
    });
} mostrarEmpresas(empresas); /* BUSCADOR */ buscador.addEventListener("keyup", () => { const texto = buscador.value.toLowerCase(); const resultado = empresas.filter(item => item.empresa.toLowerCase().includes(texto) || item.sede.toLowerCase().includes(texto)); mostrarEmpresas(resultado); }); /* MODAL IMAGEN */ function abrirImagen(imagen) { document.getElementById("imagenModal").src = imagen; const modal = new bootstrap.Modal(document.getElementById("modalImagen")); modal.show(); }