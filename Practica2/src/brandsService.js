export class racket {
    constructor(racketName, racketPrice, racketImage) {
        this.racketName = racketName;
        this.racketPrice = racketPrice;
        this.racketImage = racketImage;
    }
}

let at10 = new racket("AT10 Luxury GENIUS 18K Alum 2024 by Agustín Tapia", 324.95, "https://noxsport.es/cdn/shop/products/at10-luxury-genius-18k-alum-2024-by-agustin-tapia-pat10genius18d-8436603195836-266863.jpg?v=1695157745&width=650");
let ml10 = new racket("ML10 PRO CUP Luxury 2024. La pala de Miguel Lamperti", 299.95, "https://noxsport.es/cdn/shop/products/ml10-pro-cup-luxury-2024-la-pala-de-miguel-lamperti-pml10pcoorluxd-8436603195874-426798.jpg?v=1695157934&width=650");
let xOne = new racket("X-ONE 2023", 74.95, "https://noxsport.es/cdn/shop/products/x-one-2023-pxone23-8436603192774-813469.jpg?v=1689844438&width=650");
let equation = new racket("EQUATION Advanced", 149.95, "https://noxsport.es/cdn/shop/products/equation-advanced-pequadvd-8436603195928-123851.jpg?v=1695157690&width=650");
let packat = new racket("Pack AT Genius LTD 2024 - Agustín Tapia LIMITED EDITION", 399.00, "https://noxsport.es/cdn/shop/products/pack-at-genius-ltd-2024-agustin-tapia-limited-edition-packpatltdd-8436603195805-186079.jpg?v=1699437978&width=650");
let tl10 = new racket("TL10 Future 2024. La pala de Tino Libaak", 244.95, "https://noxsport.es/cdn/shop/products/tl10-future-2024-la-pala-de-tino-libaak-209699.jpg?v=1695158836&width=650");

let noxRackets = [at10, ml10, xOne, equation, packat, tl10];
let brandRackets = [];

export function addRacket(racketName, racketPrice, racketImage) {
    let racketInstance = new racket(racketName, racketPrice, racketImage);
    brandRackets.push(racketInstance);
}


export class brand {
    constructor(brandName, brandYear, brandFounder, brandImage, brandPlayers, brandRackets) {
        this.brandName = brandName;
        this.brandYear = brandYear;
        this.brandFounder = brandFounder;
        this.brandImage = brandImage;
        this.brandPlayers = brandPlayers;
        this.brandRackets = brandRackets;
    }
}

let nox = new brand("Nox", 2009, "Jesus Ballvé", "https://www.setpointchile.cl/cdn/shop/collections/3.png?v=1675371060", " Miguel Lamperti, Agustín Tapia, Tino Libaak, Leo Augsburger", noxRackets/* [at10, ml10, xOne, equation, packat, tl10] */);
let siux = new brand("Siux", 2012, "Marcos Sánchez", "https://palasdepadel10.com/wp-content/uploads/2018/10/SIUX-palas-padel-300.jpg", "Franco Stupaczuk, Cristian Gutiérrez", []);
let bullpadel = new brand("Bullpadel", 1995, "Jorge García Caballero", "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1489071634/avatars/000/132/519/132519-original.jpg?1489071634", "Maxi Sanchez", brandRackets);
let babolat = new brand("Babolat", 1875, "Pierre Babolat", "https://www.zonadepadel.es/c/97-category_header_pic/palas-de-padel-babolat.jpg", "Juan Lebrón", brandRackets);
let adidas = new brand("Adidas", 2013, "Adi Dassler", "https://images-na.ssl-images-amazon.com/images/S/abs-image-upload-na/0/AmazonStores/A1RKKUPIHCS9HS/8f698bd583b2fa7aad66912c988d2a17.w800.h800.jpg", "Alejandro Galán", brandRackets);
let starvie = new brand("Starvie", 2002, "Jorge Gómez de la Vega y Javier de la Chica", "https://www.elcorteingles.es/centroscomerciales/uploads/brand/logo/4903/STARVIE.png", "Javi Garrido", brandRackets);
let head = new brand("Head", 1960, "Howard Head", "https://fraguru.com/mdimg/dizajneri/o.4945.jpg", "Arturo Coello", brandRackets);
let dunlop = new brand("Dunlop", 1909, "John Boyd Dunlop", "https://federacionnavarradepadel.com/wp-content/uploads/2022/08/485fc0213bd8b8df4ffe0264be4418a5.jpg", "Ramiro Moyano", brandRackets);
let royal = new brand("Royal Padel", 1991, "Francisco Mendoza", "https://blog.streetpadel.com/wp-content/uploads/logo-marca-451.jpg", "Fede Chingotto", brandRackets);


let marcas = new Map();
marcas.set("Nox", nox);
marcas.set("Siux", siux);
marcas.set("Bullpadel", bullpadel);
marcas.set("Babolat", babolat);
marcas.set("Adidas", adidas);
marcas.set("Starvie", starvie);
marcas.set("Head", head);
marcas.set("Dunlop", dunlop);
marcas.set("Royal Padel", royal);




export function getBrand(brandName) {
    let brand = marcas.get(brandName);
    return {
        brandName: brand.brandName,
        brandYear: brand.brandYear,
        brandFounder: brand.brandFounder,
        brandImage: brand.brandImage,
        brandPlayers: brand.brandPlayers,
        brandRackets: brand.brandRackets
    };
}


export function editBrand(brandName, brandYear, brandFounder, brandImage, brandPlayers) {
    marcas.get(brandName);
    marcas.brandName = brandName;
    marcas.brandYear = brandYear;
    marcas.brandFounder = brandFounder;
    marcas.brandImage = brandImage;
    marcas.brandPlayers = brandPlayers;
    return brand;
}

export function addBrand(brandName, brandYear, brandFounder, brandImage, brandPlayers) {
    let brandInstance = new brand(brandName, brandYear, brandFounder, brandImage, brandPlayers, []);
    marcas.set(brandName, brandInstance);
    console.log(marcas);
    return brandInstance;
}

export function deleteBrand(brandName) {
    marcas.delete(brandName);
    return marcas;
}


export default marcas;