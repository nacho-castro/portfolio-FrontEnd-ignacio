export class Perfil{
    id: number = 1;
    name: String;
    position: String;
    about: String;
    profile: String;
    ubication: String;

    constructor(id: number, name: String, position: String, about: String, profile: String, ubication: String){
        this.id = id;
        this.name = name;
        this.position = position;
        this.about = about;
        this.profile = profile;
        this.ubication = ubication;
    }
}