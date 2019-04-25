    
export class Marcador {
    public title: string = 'Sin titulo';
    public description : string = 'Sin descripción'
    public lat : number ;
    public lng : number ;

    constructor(lat : number, lng : number){
        this.lat = lat,
        this.lng = lng
    }
}