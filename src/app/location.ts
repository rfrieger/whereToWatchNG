export class Location {
    private location_id : number;
    private name : string
    private description: string;
    public city : string;
    private team : string;

    constructor() {
        this.location_id = null;
        this.name = "";
        this.description = "";
        this.city = "n";
        this. team = "n";
    }
}
