export interface Course {
    id: string;
    name: string;
    type: string;
    description: string;
    author: string;
    authorRank: string;
    presentationVideo: string;
    presentationVideoId: string;
    pdfUrl: string;
    pdfFile: string;
    pdf: string;
    testimonials: Testimonial[];
}
export interface Testimonial {
    id: string;
    name: string;
    imgUrl: string;
    testimonial: string;
    largeTestimonial: string;
    rank: string;
    url: string;
    videoId: string;
}