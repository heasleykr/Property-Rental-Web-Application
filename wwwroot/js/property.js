class Property{
    
    /**
     * Initialze the Property Object
     */
    constructor(title, price, imgUrl, beds, bath, area, description, parking){
        
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
        this.beds = beds;
        this.bath = bath;
        this.area = area;
        this.description = description;
        this.parking = parking;

        // Will tag each property with you as the user
        this.user = 'Katelynn';

    }
}