export class Proyectos{
    id?: number;
    title: String;
    description: String;
    image: String;
    link:String;

    constructor(title: String, description: String, image: String, link: String){
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}