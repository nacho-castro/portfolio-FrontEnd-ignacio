export class Educacion{
    id?: number;
    title: String;
    school: String;
    image: String;
    start: number;
    end: number;

    constructor(title: String, school: String, image: String, start: number, end:number){
        this.title = title;
        this.school = school;
        this.image = image;
        this.end = end;
        this.start = start;
    }
}