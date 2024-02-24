// export interface Course {
//     id: string;
//     name: string;
//     type: string;
//     description: string;
//     author: string;
//     authorRank: string;
//     presentationVideo: string;
//     presentationVideoId: string;
//     pdfUrl: string;
//     pdfFile: string;
//     pdf: string;
//     testimonials: Testimonial[];
// }
// export interface Testimonial {
//     id: string;
//     name: string;
//     testimonial: string;
//     rank: string;
//     url: string;
//     videoId: string;
// }
import { Course } from "@/models/courses";

export const Courses : Course[] = [
    {
        id: "c1",
        name: "Tarotismo",
        type: "Virtual / Presencial",
        description:
            "Un párrafo de relleno es un fragmento de texto utilizado para ocupar espacio o proporcionar contexto sin añadir información relevante o específica al tema principal. A menudo se utiliza en borradores, maquetas o ejemplos para simular contenido real y ayudar a visualizar la apariencia final de un documento o diseño. Este tipo de texto puede ser útil durante el proceso de desarrollo, permitiendo a los creadores centrarse en la estructura y el diseño antes de incorporar el contenido final.",
        author: "Araceli Abella",
        authorRank: "Instructura",
        presentationVideo: "https://youtu.be/vRrcI2Ga7mg",
        presentationVideoId: "vRrcI2Ga7mg",
        pdfUrl: "",
        pdfFile: "",
        pdf: "",
        testimonials: [
            {
                id: `c1-t1`,
                name: "Agustina",
                testimonial:
                    "El tarot te cambia la vida y te puede cambiar la percepción de la vida.",
                rank: "Est. Curso Presencial",
                url: "https://youtu.be/OW5Lo7sVlBU",
                videoId: "OW5Lo7sVlBU",
            },
            {
                id: "c1-t2",
                name: "Gabriela",
                testimonial:
                    "La conexión con las cartas es impresionante, se los recomiendo.",
                rank: "Est. Curso Presencial",
                url: "https://youtu.be/OUJk8zL9nw8",
                videoId: "OUJk8zL9nw8",
            },
            {
                id: "c1-t3",
                name: "Isabel",
                testimonial:
                    "El curso fue genial, aprendimos mucho y la pasamos de diez.",
                rank: "Est. Curso Presencial",
                url: "https://youtu.be/b1qHD4fArpg",
                videoId: "b1qHD4fArpg",
            },
        ],
    },

];
