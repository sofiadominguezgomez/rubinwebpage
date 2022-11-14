
export const homeObjTwo = {
    id: 'inscripcion',
    lightBg: true,
    lightText: false,
    topLine: 'Inscripción',
    headline: 'Registrate para formar parte del evento',
    description: "Rellena el siguiente formulario",
    buttonLabel: "Ir al formulario",
    imgStart: false,
    img: require('../../media/team.svg').default,
    alt: "team",
    dark: true,
    primary: true,
    darkText: true,
    second: false,
    route:false
}

export const homeObjThird = {
    id: 'participantes',
    lightBg: false,
    lightText: true,
    topLine: 'Evento',
    headline: 'Participantes del evento',
    description: "",
    buttonLabel: "Descubrir participantes",
    imgStart: true,
    img: require('../../media/participants.svg').default,
    alt: "team",
    dark: true,
    primary: true,
    darkText: false,
    second: false,
    route:"/participants"
}

export const homeObjFourth = {
    id: 'programa',
    lightBg: true,
    lightText: false,
    topLine: 'Información',
    headline: 'Descubrí el programa del evento',
    description: "Como introducción en esta primera reunion anual revisaremos los avances de cada grupo de investigación dentro de las respectivas colaboraciones.",
    description2: "Cada participante dispondrá de al menos 10 minutos para contar los avances de los proyectos en los que se encuentra participando.",
    buttonLabel: "Ir al programa",
    imgStart: false,
    img: require('../../media/program.png'),
    alt: "team",
    dark: true,
    primary: true,
    darkText: true,
    second: true,
    route:"/program"
}