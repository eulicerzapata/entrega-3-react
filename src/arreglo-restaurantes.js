

const restaurantes = [

    {
        id:1,
        imagen:<img  src={require(`./imagenes/R_Pacificomar.jpg`)} />,
        nombre: "Pacifico mar",
        direccion: "Av 85 Nro. 45-85 Barranquilla",
        describcion: "Deliciosa comida de mar"
    }
    ,
    {
        id:2,
        imagen: <img  src= 'italiano_65_1.jpg' />,
        nombre: "Italiano 65",
        direccion: "Av 45 Nro. 1-85 Medellin",
        describcion: "Deliciosa comida Italiana"
    },
    {
        id:3 ,
        imagen:<img  src={require(`./imagenes/R_com_rapida_1.jpg`)} />,
        nombre: "Fritos y mas ",
        direccion: "calle 45 Medellin",
        describcion: "Comida Rapida",

    },
    {
        id: 4,
        imagen:<img  src={require(`./imagenes/R_pollo_frito_1.jpg`)} />,
        nombre: "Pollo frito",
        direccion: "Cr 32 #56 - 89 ",
        describcion: "lo mejor del pollo "
    }
];

export{
    restaurantes
}