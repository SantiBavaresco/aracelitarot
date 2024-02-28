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
        name: "Tarot",
        type: "Virtual / Presencial",
        description:
            "El tarot es un arte predictivo que se puede mejorar con la evolución. Te proporcionará herramientas para tu crecimiento personal y para transmitirlo a los demás. Se redescubrió en el siglo XVIII y consta de 78 Arcanos (22 Mayores y 56 Menores). Se cree que Israel fue el nexo entre Egipto y Occidente; debido a eso, en los 22 Arcanos Mayores, se encuentran las 22 letras del alfabeto hebreo.",
        author: "Araceli Abella",
        authorRank: "Instructura",
        presentationVideo: "https://youtu.be/UKv0yxekXXE",
        presentationVideoId: "UKv0yxekXXE",
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
                url: "https://youtu.be/L-40CcQr4KU",
                videoId: "L-40CcQr4KU",
            },
            {
                id: "c1-t2",
                name: "Gabriela",
                testimonial:
                    "La conexión con las cartas es impresionante, se los recomiendo.",
                rank: "Est. Curso Presencial",
                url: "https://youtu.be/nkA-z2jtgII",
                videoId: "nkA-z2jtgII",
            },
            {
                id: "c1-t3",
                name: "Isabel",
                testimonial:
                    "El curso fue genial, aprendimos mucho y la pasamos de diez.",
                rank: "Est. Curso Presencial",
                url: " https://youtu.be/Hf6mGYuarpY",
                videoId: "Hf6mGYuarpY",
            },
        ],
    },

];
