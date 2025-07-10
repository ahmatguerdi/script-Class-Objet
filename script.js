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

class Stock{
    #boutique;
    #lieu;
    liste;
    constructor(boutique, lieu) {
        this.boutique = boutique;
        this.lieu = lieu;
        this.liste = tout;
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

// Pour ajouter des produits
let monProduit = new Produit("salade", 1000);
let monProduit1 = new Produit("tomate", 500);
let monProduit3 = new Produit("banane", 500);
let tout = [monProduit, monProduit1, monProduit3];

// Pour rechercher un produit
let recherche = tout.find((element) => element = monProduit);

// Pour supprimer un produit
let suppression = tout.pop();

// Pour modifier le status d'un produit
let modification = monProduit.statu = "pas en stock";


let ajouterStock = new Stock("mom", "moderne");
console.log(ajouterStock);

