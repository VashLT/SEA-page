import {ReactComponent as MathIcon} from "./images/math.svg";
import {ReactComponent as PhysicsIcon} from "./images/physics.svg";
import {ReactComponent as ChemestryIcon} from "./images/chemestry.svg";
import {ReactComponent as LanguageIcon} from "./images/language.svg";
import {ReactComponent as GeometryIcon} from "./images/geometry.svg";

const areas = [
    {
        name: "Matemáticas",
        headerColor: "#76e331",
        bgColor: "rgb(210, 246, 187, 0.5)",
        subjectColor: "#91e859",
        icon: <MathIcon style={{width: "32px", height: "auto"}}/>,
        link: "#",
        subjects: [
            {
                name: "Cálculo I",
                link: "https://discord.gg/xVWbmSCsXM"
            },
            {
                name: "Cálculo II",
                link: "https://discord.gg/dU73M9SJvf"
            },
            {
                name: "Cálculo III",
                link: "https://discord.gg/YQgvrr7vsH"
            },
            {
                name: "Ec. Diferenciales",
                link: "https://discord.gg/CaAatuextk"
            },
            {
                name: "Algebra Lineal I",
                link: "https://discord.gg/9XJbBAKJMm"
            },
            {
                name: "Algebra Lineal II",
                link: "https://discord.gg/MGWJsZxBVE"
            },
        ]
    },
    {
        name: "Física",
        headerColor: "#661fc7",
        bgColor: "rgb(218, 198, 246, 0.35)",
        subjectColor: "#894bdd",
        icon: <PhysicsIcon style={{width: "32px", height: "auto"}}/>,
        link: "#",
        subjects: [
            {
                name: "Física I",
                link: "https://discord.gg/ddfzTzt4Xe"
            },
            {
                name: "Física II",
                link: "https://discord.gg/S67YFZkPvh"
            },
            {
                name: "Física III",
                link: "https://discord.gg/N8VHrm9CKf"
            }
        ]
    },
    {
        name: "Química",
        headerColor: "#26afdf", // blue
        bgColor: "rgb(193, 232, 245, 0.35)",
        subjectColor: "#64c6e8",
        icon: <ChemestryIcon style={{width: "32px", height: "auto"}}/>,
        link: "#",
        subjects: [
            {
                name: "Química I",
                link: "https://discord.gg/VH6XTfsFwB"
            },
            {
                name: "Química II",
                link: "https://discord.gg/BygK8Vb3uJ"
            },
            {
                name: "Química III",
                link: "https://discord.gg/wYXffGfRKk"
            },
            {
                name: "Química varios",
                link: "https://discord.gg/BD498FvX84"
            },
        ]
    },
    {
        name: "Idiomas",
        headerColor: "#e2226f", // pink
        bgColor: "rgb(246, 193, 214, 0.3)",
        subjectColor: "#e86499",
        icon: <LanguageIcon style={{width: "32px", height: "auto"}}/>,
        link: "#",
        subjects: [
            {
                name: "Inglés",
                link: "https://discord.gg/CkY7bs2YpW"
            },
            {
                name: "Frances",
                link: "https://discord.gg/MGuKFcBhcA"
            },
        ]
    },
    {
        name: "Descriptiva",
        headerColor: "#e97e1c", // orange
        bgColor: "rgb(245, 197, 153, 0.3)",
        subjectColor: "#e48b3a",
        icon: <GeometryIcon style={{width: "32px", height: "auto"}}/>,
        link: "#",
        subjects: [
            {
                name: "Geometría Descriptiva",
                link: "https://discord.gg/snWrnP5tuS"
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

export { areas, areasSchedule, faqs, areasMapIndex};