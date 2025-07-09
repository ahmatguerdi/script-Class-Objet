class Produit {
    nom;
    prix;
    constructor (nom, prix) {
        this.id = Math.random ()*9;
        this.nom = nom;
        this.prix = prix;
        this.statu = "en stock";
    }

    getId () {
        return this.id;
    }
    getNom () {
        return this.nom;
    }
    getPrix () {
        return this.prix;
    }
    getStatu () {
        return this.statu;
    }
}

class Stock extends Produit{
    #boutique;
    #lieu;
    liste = [];
    constructor(boutique, lieu, liste) {
        // super(id, nom, prix, statu);, id, nom, prix, statu
        super();
        this.boutique = boutique;
        this.lieu = lieu;
        this.liste.push(monProduit);
    }
    
    getBoutique () {
        return this.boutique;
    }
    getLieu () {
        return this.lieu;
    }
    getListe () {
        return this.liste;
    }
}


let monProduit = new Produit("salade", 1000);
// console.log(monProduit);

let monProduit2 = new Stock("mom", "moderne", `${monProduit}`);
console.log(monProduit2.getBoutique(), monProduit2.getLieu(), monProduit2.getListe());

// console.log(monProduit2);

