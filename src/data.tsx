import React from 'react';

import {
    MATHEMATICS_INVITE_LINKS,
    PHYSICS_INVITE_LINKS,
    CHEMESTRY_INVITE_LINKS,
    LANGUAGES_INVITE_LINKS,
    GDESCRIPTIVE_INVITE_LINKS
} from "./utils/constants";

import { ReactComponent as MathIcon } from "./images/math.svg";
import { ReactComponent as PhysicsIcon } from "./images/physics.svg";
import { ReactComponent as ChemestryIcon } from "./images/chemestry.svg";
import { ReactComponent as LanguageIcon } from "./images/language.svg";
import { ReactComponent as GeometryIcon } from "./images/geometry.svg";

const areas = [
    {
        name: "Matemáticas",
        headerColor: "#76e331",
        bgColor: "rgb(210, 246, 187, 0.5)",
        subjectColor: "#91e859",
        icon: <MathIcon style={{ width: "32px", height: "auto" }} />,
        link: "#",
        subjects: [
            {
                name: "Cálculo I",
                link: MATHEMATICS_INVITE_LINKS['calculo-i']
            },
            {
                name: "Cálculo II",
                link: MATHEMATICS_INVITE_LINKS['calculo-ii']
            },
            {
                name: "Cálculo III",
                link: MATHEMATICS_INVITE_LINKS['calculo-iii']
            },
            {
                name: "Ec. Diferenciales",
                link: MATHEMATICS_INVITE_LINKS['ecuaciones-diferenciales']
            },
            {
                name: "Algebra Lineal I",
                link: MATHEMATICS_INVITE_LINKS['algebra-lineal']
            },
            {
                name: "Algebra Lineal II",
                link: MATHEMATICS_INVITE_LINKS['algebra-lineal-ii']
            },
        ]
    },
    {
        name: "Física",
        headerColor: "#661fc7",
        bgColor: "rgb(218, 198, 246, 0.35)",
        subjectColor: "#894bdd",
        icon: <PhysicsIcon style={{ width: "32px", height: "auto" }} />,
        link: "#",
        subjects: [
            {
                name: "Física I",
                link: PHYSICS_INVITE_LINKS['fisica-i']
            },
            {
                name: "Física II",
                link: PHYSICS_INVITE_LINKS['fisica-ii']
            },
            {
                name: "Física III",
                link: PHYSICS_INVITE_LINKS['fisica-iii']
            }
        ]
    },
    {
        name: "Química",
        headerColor: "#26afdf", // blue
        bgColor: "rgb(193, 232, 245, 0.35)",
        subjectColor: "#64c6e8",
        icon: <ChemestryIcon style={{ width: "32px", height: "auto" }} />,
        link: "#",
        subjects: [
            {
                name: "Química I",
                link: CHEMESTRY_INVITE_LINKS['quimica-i']
            },
            {
                name: "Química Inorgánica",
                link: CHEMESTRY_INVITE_LINKS['quimica-inorganica']
            },
            {
                name: "Química Orgánica",
                link: CHEMESTRY_INVITE_LINKS['quimica-organica']
            },
            {
                name: "Química Varios",
                link: CHEMESTRY_INVITE_LINKS['quimica-varios']
            },
            {
                name: "Química General",
                link: CHEMESTRY_INVITE_LINKS['quimica-general']
            }
        ]
    },
    {
        name: "Idiomas",
        headerColor: "#e2226f", // pink
        bgColor: "rgb(246, 193, 214, 0.3)",
        subjectColor: "#e86499",
        icon: <LanguageIcon style={{ width: "32px", height: "auto" }} />,
        link: "#",
        subjects: [
            {
                name: "Inglés",
                link: LANGUAGES_INVITE_LINKS.ingles
            },
            {
                name: "Francés",
                link: LANGUAGES_INVITE_LINKS.frances
            },
        ]
    },
    {
        name: "Descriptiva",
        headerColor: "#e97e1c", // orange
        bgColor: "rgb(245, 197, 153, 0.3)",
        subjectColor: "#e48b3a",
        icon: <GeometryIcon style={{ width: "32px", height: "auto" }} />,
        link: "#",
        subjects: [
            {
                name: "Geometría Descriptiva",
                link: GDESCRIPTIVE_INVITE_LINKS['geometria-descriptiva']
            },
        ]
    },
]

const areasSchedule = [
    {
        id: "horarioMatematicas",
        // sheetId: "1WhCrQE8VLpc9UKh9NkdIOnRG7Umf_0pD",
        sheetId: "19SzXwXiQVGKCy0g80fFDBcDj9qteoRATehrIhlNGoq0",
        name: "Matématicas",
        color: "#76e331",
        stripes: [
            {
                time: "10:00-12:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    { names: ["Geyson"] },
                    { names: ["Geyson"] }
                ]
            },
            {
                time: "14:00-16:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    { names: ["Karime"] },
                    { names: ["Juan Pablo"] }
                ]
            },
            {
                time: "16:00-18:00",
                tutors: [
                    {
                        names: ["Dana Gómez"],
                    },
                    {
                        names: ["Carlos Q"],
                    },
                    {
                        names: ["Simón C."],
                    },
                    {
                        names: ["Juan Pablo"],
                    },
                    {
                        names: ["Juan Pablo"],
                    },
                    {
                        names: ["Carlos Q."],
                    },
                    {
                        names: ["Geyson"],
                    }
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    {
                        names: ["Geyson"],
                    },
                    {
                        names: ["Geyson"],
                    },
                    {
                        names: ["Juan Pablo"],
                    },
                    {
                        names: ["Carlos Q."],
                    },
                    {
                        names: ["Carlos Q."],
                    },
                    { names: ["Luis Carlos"] },
                    { names: ["Juan Velandia"], }
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    {
                        names: ["Juan Pablo"],
                    },
                    {
                        names: ["Luis Carlos"],
                    },
                    {
                        names: ["Carlos Q"],
                    },
                    {
                        names: ["Luis Carlos"],
                    },
                    {
                        names: ["Geyson"],
                    },
                    {},
                    {}
                ]
            },
        ]
    },
    {
        id: "horarioFisica",
        sheetId: "1gC69SQjM9WksXmBEtVFZnhu7OiCrX-rlfVlLcZbGYJo",
        name: "Física",
        color: "#661fc7",
        stripes: [
            {
                time: "10:00-12:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    { names: ["Sergio"] },
                    { names: ["Sergio"] }
                ]
            },
            {
                time: "14:00-16:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    { names: ["Angie"] },
                    { names: ["Angie"] }
                ]
            },
            {
                time: "16:00-18:00",
                tutors: [
                    { names: ["Nicolas"], },
                    { names: ["Jorge"], },
                    { names: ["Jhonata"], },
                    { names: ["Jorge"], },
                    { names: ["Sergio"], },
                    { names: ["Jorge"], },
                    { names: ["Ramón"], },
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    { names: ["Jorge"], },
                    { names: ["Ramón"], },
                    { names: ["Jhonatan"], },
                    { names: ["Jhonatan"], },
                    { names: ["Angie"], },
                    { names: ["Nicolás"], },
                    { names: ["Nicolás"], },
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    { names: ["angie"], },
                    { names: ["Nicolás"], },
                    { names: ["Ramón"], },
                    { names: ["Ramón"], },
                    { names: ["Jhonatan"], },
                    {},
                    {}
                ]
            },
        ]
    },
    {
        id: "horarioQuimica",
        sheetId: "1v-Bm2kHaMOKAycdrAVj7uHTAK0rMQqSw",
        name: "Química",
        color: "#26afdf",
        stripes: [
            {
                time: "10:00-12:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        names: ["Juliana"]
                    },
                    {
                        names: ["Nathalia G."]
                    }
                ]
            },
            {
                time: "14:00-16:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        names: ["Jorge"]
                    },
                    {
                        names: ["Juliana"]
                    }
                ]
            },
            {
                time: "16:00-18:00",
                tutors: [
                    {
                        names: ["Bryan"],
                    },
                    {
                        names: ["Jose Serna"],
                    },
                    {
                        names: ["Angelica N"],
                    },
                    {
                        names: ["Jose Serna"],
                    },
                    {
                        names: ["Bryan"],
                    },
                    {
                        names: ["Jorge"],
                    },
                    {
                        names: ["Juan David"],
                    }
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    {
                        names: ["Sebastian Mora"],
                    },
                    {
                        names: ["Sebastian Mora"],
                    },
                    {
                        names: ["Sebastian Mora"],
                    },
                    {
                        names: ["Sebastian Mora"],
                    },
                    {
                        names: ["Jose Serna"],
                    },
                    {
                        names: ["Juliana"],
                    },
                    {
                        names: ["Angélica N."],
                    }
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    {
                        names: ["Juan David"],
                    },
                    {
                        names: ["Lesly"],
                    },
                    {
                        names: ["Lesly"],
                    },
                    {
                        names: ["Juan David"],
                    },
                    {
                        names: ["Angelida N."],
                    },
                    {},
                    {}
                ]
            },
        ]
    },
    {
        id: "horarioIdiomas",
        sheetId: "1eZubHqpl4R2D0qpP_hDbLTph15KrZiv5K7IwwLbhap8",
        name: "Idiomas",
        color: "#e2226f",
        stripes: [
            {
                time: "10:00-12:00",
                tutors: [
                    { names: ["Laura"] },
                    { names: ["Camilo M."] },
                    { names: ["Camilo M."] },
                    { names: ["Camilo M."] },
                    { names: ["Carlos"] },
                    {
                        names: ["Iver Daza"]
                    },
                    {
                        names: ["Iver Daza"]
                    }
                ]
            },
            {
                time: "14:00-16:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        names: ["Juliana Pinto"]
                    },
                    {
                        names: ["Iver Daza"]
                    }
                ]
            },
            {
                time: "16:00-18:00",
                tutors: [
                    {
                        names: ["Camilo M."]
                    },
                    {
                        names: ["Camilo M."]
                    },
                    {
                        names: ["Iver Daza"]
                    },
                    {
                        names: ["Camilo M."]
                    },
                    {
                        names: ["Iver Daza"]
                    },
                    {
                        names: ["Paula Orrego"]
                    },
                    {
                        names: ["Iver Daza"]
                    }
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    {
                    },
                    {
                    },
                    {
                    },
                    {
                    },
                    {
                    },
                    {
                    },
                    {
                    }
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    {
                    },
                    {
                    },
                    {
                    },
                    {
                    },
                    {
                    },
                    {},
                    {}
                ]
            },
        ]

    },
    {
        id: "horarioDescriptiva",
        sheetId: "1WhCrQE8VLpc9UKh9NkdIOnRG7Umf_0pD",
        name: "Geometría Descriptiva",
        color: "#e97e1c",
        stripes: [
            {
                time: "10:00-12:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    { names: ["Karen Triana"] },
                    { names: ["Sebastian"] },
                ]
            },
            {
                time: "14:00-16:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    { names: ["Juan Diego"] },
                    { names: ["Juan Diego"] },
                ]
            },
            {
                time: "16:00-18:00",
                tutors: [
                    { names: ["Sebastian"], },
                    { names: ["Karen Triana"], },
                    { names: ["Diego Buitrago"], },
                    { names: ["Karen Triana"], },
                    { names: ["María Camila"], },
                    { names: ["Karen Triana"], },
                    { names: ["Diego Buitrago"], }
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    { names: ["Diego Buitrago"], },
                    { names: ["María Camila"], },
                    { names: ["María Camila"], },
                    { names: ["Karen Triana"], },
                    { names: ["Sebastian"], },
                    {},
                    {}
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    { names: ["Victor"], },
                    { names: ["Karen Triana"], },
                    { names: ["Gerson"], },
                    { names: ["Karen Triana"], },
                    { names: ["Karen Triana"], },
                    {},
                    {}
                ]
            },
        ]
    },
]

const faqs = [
    {
        question: "¿Tengo que rellenar un formulario de inscripción para acceder al programa?",
        answer: `No, ahora el SEA cambió su método de inscripción para que sea más asequible y rápido para los estudiantes, te inscribes al seguir los pasos que están nuestro (https://discord.gg/FbVrHS79)[servidor de Discord].`,
        id: 0
    },
    {
        question: "¿Cuáles son las franjas de atención del programa?",
        answer: `Puedes consultar los horarios de atención (/horarios)[Aqui].`,
        id: 1
    },
    {
        question: "¿En qué fechas se programan las tutorías?",
        answer: `El programa SEA online brinda acompañamiento académico dos semanas antes de la
                programación de los exámenes.`,
        id: 2
    },
    {
        question: "¿Cuál es el proceso a seguir para formar parte del equipo de tutores del programa?",
        answer: `Un tutor SEA es un estudiante destacado en el área en el cual brindará acompañamiento académico a través de tutorías, bajo la modalidad de auxiliatura docente, por lo que se requerirá ser estudiante de quinto nivel en adelante, promedio superior a xxx, y nota aprobatoria del área en la cual se desempeñará mayor a 4,0.`,
        id: 3
    }

]

const areasMapIndex = new Map();
areas.forEach((area, index) => areasMapIndex.set(area.name, index));

// Matematicas: color: #76e331, hover: #55b418, bg: #d2f6bb, sub: #91e859
// Fisica: color: #661fc7, hover: #4b1890, bg: #dac6f6, sub: #894bdd
// Quimica: color: #26afdf, hover: #1b8eb6, bg: #c1e8f5, sub: #64c6e8
// Idiomas: color: #e2226f, hover: #bb1b5b, bg: #f6c1d6, sub: #e86499
// Descriptiva: color: #e97e1c, hover: #c86a14, bg: #f5c599, sub: #e48b3a

export { areas, areasSchedule, faqs, areasMapIndex };