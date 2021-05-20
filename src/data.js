import mathSVG from "./images/math.svg";
import physicsSVG from "./images/physics.svg";
import chemestrySVG from "./images/chemestry.svg";
import languageSVG from "./images/language.svg";
import geometrySVG from "./images/geometry.svg";

import SCSS from "./scss/variables.scss";

const areas = [
    {
        name: "Matemáticas",
        headerColor: "#76e331",
        bgColor: "rgb(210, 246, 187, 0.5)",
        subjectColor: "#91e859",
        icon: <img src={mathSVG} alt="Matemáticas" style={ {width: "32px", height: "auto"} }/>,
        link: "#",
        subjects: [
            {
                name: "Cálculo I",
                link: "https://discord.gg/NURFa6sF"
            },
            {
                name: "Cálculo II",
                link: "https://discord.gg/bdRYMCHk"
            },
            {
                name: "Cálculo III",
                link: "https://discord.gg/gAU7HHdq"
            },
            {
                name: "Ec. Diferenciales",
                link: "https://discord.gg/KvwTUATK"
            },
            {
                name: "Algebra Lineal I",
                link: "https://discord.gg/E7vWRX8x"
            },
            {
                name: "Algebra Lineal II",
                link: "https://discord.gg/zgKchd3e"
            },
        ]
    },
    {
        name: "Física",
        headerColor: "#661fc7",
        bgColor: "rgb(218, 198, 246, 0.35)",
        subjectColor: "#894bdd",
        icon: <img src={physicsSVG} alt="Física" style={ {width: "32px", height: "auto"} }/>,
        link: "#",
        subjects: [
            {
                name: "Física I",
                link: "https://discord.gg/6HaCVsXK"
            },
            {
                name: "Física II",
                link: "https://discord.gg/uR69vbfP"
            },
            {
                name: "Física III",
                link: "https://discord.gg/uxWZwcgt"
            }
        ]
    },
    {
        name: "Química",
        headerColor: "#26afdf", // blue
        bgColor: "rgb(193, 232, 245, 0.35)",
        subjectColor: "#64c6e8",
        icon: <img src={chemestrySVG} alt="Química" style={ {width: "32px", height: "auto"} }/>,
        link: "#",
        subjects: [
            {
                name: "Química I",
                link: "https://discord.gg/JhKwMWNy"
            },
            {
                name: "Química II",
                link: "https://discord.gg/btXgREDN"
            },
            {
                name: "Química III",
                link: "https://discord.gg/MKYW7qqB"
            },
            {
                name: "Química varios",
                link: "https://discord.gg/rnyWhWth"
            },
        ]
    },
    {
        name: "Idiomas",
        headerColor: "#e2226f", // pink
        bgColor: "rgb(246, 193, 214, 0.3)",
        subjectColor: "#e86499",
        icon: <img src={languageSVG} alt="Idiomas" style={ {width: "32px", height: "auto"} }/>,
        link: "#",
        subjects: [
            {
                name: "Inglés",
                link: "https://discord.gg/U8WkYdDB"
            },
            {
                name: "Frances",
                link: "https://discord.gg/QmuaDBfK"
            },
        ]
    },
    {
        name: "Descriptiva",
        headerColor: "#e97e1c", // orange
        bgColor: "rgb(245, 197, 153, 0.3)",
        subjectColor: "#e48b3a",
        icon: <img src={geometrySVG} alt="Descriptiva" style={ {width: "32px", height: "auto"} }/>,
        link: "#",
        subjects: [
            {
                name: "Geometría Descriptiva",
                link: "https://discord.gg/qJnfNMwR"
            },
        ]
    },
]

const areasSchedule = [
    {
        id: "horarioMatematicas",
        name: "Matématicas",
        color: "#76e331",
        stripes: [
            {
                time: "14:00-16:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        names: ["José Silva", "Elian"]
                    },
                    {
                        names: ["Geyson", "Elian"]
                    }
                ]
            },
            {
                time: "16:00-18:00",
                tutors: [
                    {
                        names: ["Sebastían", "Juan Pablo"],
                    },
                    {
                        names: ["José Silva", "Sebastián"],
                    },
                    {
                        names: ["Luis Carlos", "Sebastían"],
                    },
                    {
                        names: ["Dana Gómez", "Sebastián"],
                    },
                    {
                        names: ["Simón Calderón", "Luis Carlos"],
                    },
                    {
                        names: ["Diego", "Luis Carlos"],
                    },
                    {
                        names: ["Diego", "Martin N."],
                    }
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    {
                        names: ["Sebastían", "Juan Pablo"],
                    },
                    {
                        names: ["José Silva", "Sebastián"],
                    },
                    {
                        names: ["Luis Carlos", "Sebastían"],
                    },
                    {
                        names: ["Dana Gómez", "Sebastián"],
                    },
                    {
                        names: ["Simón Calderón", "Luis Carlos"],
                    },
                    {
                        names: ["Diego", "Luis Carlos"],
                    },
                    {
                        names: ["Diego", "Martin N."],
                    }
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    {
                        names: ["Sebastían", "Juan Pablo"],
                    },
                    {
                        names: ["José Silva", "Sebastián"],
                    },
                    {
                        names: ["Luis Carlos", "Sebastían"],
                    },
                    {
                        names: ["Dana Gómez", "Sebastián"],
                    },
                    {
                        names: ["Simón Calderón", "Luis Carlos"],
                    },
                    {
                        names: ["Diego", "Luis Carlos"],
                    },
                    {
                        names: ["Diego", "Martin N."],
                    }
                ]
            },
        ]
    },
    {
        id: "horarioFisica",
        name: "Física",
        color: "#661fc7",
        stripes: [
            {
                time: "14:00-16:00",
                tutors: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        names: ["Luis Gabriel"]
                    },
                    {
                        names: ["Nicolás"]
                    }
                ]
            },
            {
                time: "16:00-18:00",
                tutors: [
                    {
                        names: ["Juan Diego"],
                    },
                    {
                        names: ["Jessica"],
                    },
                    {
                        names: ["Juan Diego"],
                    },
                    {
                        names: ["Jessica"],
                    },
                    {
                        names: ["Juan Diego"],
                    },
                    {
                        names: ["Jorge Quintero"],
                    },
                    {
                        names: ["Jessica"],
                    }
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    {
                        names: ["Jorge Quintero"],
                    },
                    {
                        names: ["Jorge Quintero"],
                    },
                    {
                        names: ["Jorge Quintero"],
                    },
                    {
                        names: ["Jorge Quintero"],
                    },
                    {
                        names: ["Jessica"],
                    },
                    {
                        names: ["Nicolás"],
                    },
                    {
                        names: ["Nicolás"],
                    }
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    {
                        names: ["Luis Gabriel"],
                    },
                    {
                        names: ["Luis Gabriel"],
                    },
                    {
                        names: ["Luis Gabriel"],
                    },
                    {
                        names: ["Luis Gabriel"],
                    },
                    {
                        names: ["Nicolás"],
                    },
                    {},
                    {}
                ]
            },
        ]
    },
    {
        id: "horarioQuimica",
        name: "Química",
        color: "#26afdf",
        stripes: [
            {
                time: "16:00-18:00",
                tutors: [
                    {
                        names: ["Lesly S."],
                    },
                    {
                        names: ["Juan Suarez"],
                    },
                    {
                        names: ["Lesly S."],
                    },
                    {
                        names: ["Juan Suarez"],
                    },
                    {
                        names: ["Lesly S."],
                    },
                    {
                        names: ["Jose Serna"],
                    },
                    {
                        names: ["Jose Serna"],
                    }
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    {
                        names: ["Elda Juliana"],
                    },
                    {
                        names: ["Jose Serna"],
                    },
                    {
                        names: ["Sebastian"],
                    },
                    {
                        names: ["Sebastian"],
                    },
                    {
                        names: ["Angélica Niño"],
                    },
                    {
                        names: ["Nathalia Guerrero"],
                    },
                    {
                        names: ["Angélica Niño"],
                    }
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    {
                        names: ["Sebastian"],
                    },
                    {
                        names: ["Sebastian"],
                    },
                    {
                        names: ["Elda Juliana"],
                    },
                    {
                        names: ["Elda Juliana"],
                    },
                    {
                        names: ["Nathalia Guerrero"],
                    },
                    {},
                    {}
                ]
            },
        ]
    },
    {
        id: "horarioIdiomas",
        name: "Idiomas",
        color: "#e2226f",
        stripes: []

    },
    {
        id: "horarioDescriptiva",
        name: "Geometría Descriptiva",
        color: "#e97e1c",
        stripes: [
            {
                time: "16:00-18:00",
                tutors: [
                    {
                        names: ["Gerson Orduz"],
                    },
                    {
                        names: ["Camila Pinilla"],
                    },
                    {
                        names: ["Gerson Orduz"],
                    },
                    {
                        names: ["Gerson Orduz"],
                    },
                    {
                        names: ["Camila Pinilla"],
                    },
                    {
                        names: ["Camila Pinilla"],
                    },
                    {
                        names: ["Karen Triana"],
                    }
                ]
            },
            {
                time: "18:00-20:00",
                tutors: [
                    {
                        names: ["Victor De Moya"],
                    },
                    {
                        names: ["Sebastian Fragozo"],
                    },
                    {
                        names: ["Victor De Moya"],
                    },
                    {
                        names: ["Sebastian Fragozo"],
                    },
                    {
                        names: ["Diego Buitrago"],
                    },
                    {
                        names: ["Karen Triana"],
                    },
                    {
                        names: ["Diego Buitrago"],
                    }
                ]
            },
            {
                time: "20:00-22:00",
                tutors: [
                    {
                        names: ["Sebastian Fragozo"],
                    },
                    {
                        names: ["Victor De Moya"],
                    },
                    {
                        names: ["Karen Triana"],
                    },
                    {
                        names: ["Victor De Moya"],
                    },
                    {
                        names: ["Diego Buitrago"],
                    },
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
        answer: <p className="typo-p-answer">No, ahora el SEA cambió su método de inscripción para que sea más asequible y 
                rápido para los estudiantes, te inscribes al seguir los pasos que están nuestro <a className="typo-a" href="https://discord.gg/FbVrHS79" data-toggle="tooltip" data-placement="top" title="Ir a Discord">servidor de Discord</a>.</p>,
        id: 0
    },
    {
        question: "¿Cuáles son las franjas de atención del programa?",
        answer: <p className="typo-p-answer">
            Puedes consultar los horarios de atención <a className="typo-a" href="/horarios" data-toggle="tooltip" data-placement="top" title="Ir a horarios">
                Aqui
                </a>.
        </p>,
        id: 1
    },
    {
        question: "¿En qué fechas se programan las tutorías?",
        answer: `El programa SEA online brinda acompañamiento académico dos semanas antes de la 
                programación de los exámenes.`,
        id: 2
    }
    
]

const areasMapIndex = new Map();
areas.forEach((area, index) => areasMapIndex.set(area.name, index));

// Matematicas: color: #76e331, hover: #55b418, bg: #d2f6bb, sub: #91e859
// Fisica: color: #661fc7, hover: #4b1890, bg: #dac6f6, sub: #894bdd
// Quimica: color: #26afdf, hover: #1b8eb6, bg: #c1e8f5, sub: #64c6e8
// Idiomas: color: #e2226f, hover: #bb1b5b, bg: #f6c1d6, sub: #e86499
// Descriptiva: color: #e97e1c, hover: #c86a14, bg: #f5c599, sub: #e48b3a

export { areas as areas, areasSchedule as areasSchedule, faqs as faqs, areasMapIndex as areasMapIndex};