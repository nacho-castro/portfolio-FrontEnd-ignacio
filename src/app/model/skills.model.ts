export class Skills{
    id?: number;
    per: String;
    title: String;

    constructor(title: String, per: String){
        this.title = title;
        this.per = per;
    }
}