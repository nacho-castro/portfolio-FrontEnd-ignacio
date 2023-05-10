export class Experiencia{
    id?: number;
    title: String;
    description: String;
    image: String;

    constructor(title: String, description: String, image: String){
        this.title = title;
        this.description = description;
        this.image = image;
    }
}