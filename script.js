const valeur={"product":
        {"title":"Lugshoes","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "variants":
                [{"id":39311746465836,"price":"120.00","size":"42","color":"green","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-green.png","quantity":100},
                    {"id":39311746498604,"price":"120.00","size":"42","color":"red","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-red.png","quantity":100},
                    {"id":39311746531372,"price":"120.00","size":"42","color":"blue","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-blue.png","quantity":0},
                    {"id":39311746564140,"price":"120.00","size":"42","color":"yellow","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-yellow.png","quantity":100},
                    {"id":39311746596908,"price":"120.00","size":"43","color":"green","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-green.png","quantity":100},
                    {"id":39311746629676,"price":"120.00","size":"43","color":"red","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-red.png","quantity":0},
                    {"id":39311746662444,"price":"120.00","size":"43","color":"blue","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-blue.png","quantity":100},
                    {"id":39311746695212,"price":"120.00","size":"43","color":"yellow","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-yellow.png","quantity":100},
                    {"id":39311746727980,"price":"120.00","size":"44","color":"green","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-green.png","quantity":0},
                    {"id":39311746760748,"price":"120.00","size":"44","color":"red","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-red.png","quantity":100},
                    {"id":39311746793516,"price":"120.00","size":"44","color":"blue","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-blue.png","quantity":100},
                    {"id":39311746826284,"price":"120.00","size":"44","color":"yellow","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-yellow.png","quantity":100},
                    {"id":39311746859052,"price":"130.00","size":"45","color":"green","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-green.png","quantity":100},
                    {"id":39311746891820,"price":"130.00","size":"45","color":"red","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-red.png","quantity":100},
                    {"id":39311746924588,"price":"130.00","size":"45","color":"blue","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-blue.png","quantity":100},
                    {"id":39311746957356,"price":"130.00","size":"45","color":"yellow","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-yellow.png","quantity":0},
                    {"id":39311746990124,"price":"150.00","size":"46","color":"green","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-green.png","quantity":100},
                    {"id":39311747022892,"price":"150.00","size":"46","color":"red","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-red.png","quantity":100},
                    {"id":39311747055660,"price":"150.00","size":"46","color":"blue","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-blue.png","quantity":100},
                    {"id":39311747088428,"price":"150.00","size":"46","color":"yellow","image":"https:\/\/lugus-hiring.frb.io\/storage\/shoes-yellow.png","quantity":0}]}} ;

var couleur="bleu" ;
var id_prod=0 ;

function color_bleu() {
    couleur="blue";
    get_all_element(couleur) ;
    document.getElementById("img_blue").style.display="inline" ;
    document.getElementById("img_red").style.display="none" ;
    document.getElementById("img_green").style.display="none" ;
    document.getElementById("img_yellow").style.display="none" ;
    document.getElementById("bouton_bleu_presser").style.display="inline";
    document.getElementById("bouton_bleu").style.display="none" ;
    document.getElementById("bouton_rouge").style.display="inline" ;
    document.getElementById("bouton_rouge_presser").style.display="none" ;
    document.getElementById("bouton_jaune").style.display="inline" ;
    document.getElementById("bouton_jaune_presser").style.display="none" ;
    document.getElementById("bouton_vert").style.display="inline" ;
    document.getElementById("bouton_vert_presser").style.display="none" ;
}
function color_rouge() {
    couleur="red";
    get_all_element(couleur);
    document.getElementById("img_blue").style.display="none" ;
    document.getElementById("img_red").style.display="inline" ;
    document.getElementById("img_green").style.display="none" ;
    document.getElementById("img_yellow").style.display="none" ;
    document.getElementById("bouton_bleu_presser").style.display="none";
    document.getElementById("bouton_bleu").style.display="inline" ;
    document.getElementById("bouton_rouge").style.display="none" ;
    document.getElementById("bouton_rouge_presser").style.display="inline" ;
    document.getElementById("bouton_jaune").style.display="inline" ;
    document.getElementById("bouton_jaune_presser").style.display="none" ;
    document.getElementById("bouton_vert").style.display="inline" ;
    document.getElementById("bouton_vert_presser").style.display="none" ;
}
function color_jaune() {
    couleur="yellow";
    get_all_element(couleur) ;
    document.getElementById("img_blue").style.display="none" ;
    document.getElementById("img_red").style.display="none" ;
    document.getElementById("img_green").style.display="none" ;
    document.getElementById("img_yellow").style.display="inline" ;
    document.getElementById("bouton_bleu_presser").style.display="none";
    document.getElementById("bouton_bleu").style.display="inline" ;
    document.getElementById("bouton_rouge").style.display="inline" ;
    document.getElementById("bouton_rouge_presser").style.display="none" ;
    document.getElementById("bouton_jaune").style.display="none" ;
    document.getElementById("bouton_jaune_presser").style.display="inline" ;
    document.getElementById("bouton_vert").style.display="inline" ;
    document.getElementById("bouton_vert_presser").style.display="none" ;
}
function color_vert() {
     couleur="green";
    get_all_element(couleur);
    document.getElementById("img_blue").style.display="none" ;
    document.getElementById("img_red").style.display="none" ;
    document.getElementById("img_green").style.display="inline" ;
    document.getElementById("img_yellow").style.display="none" ;
    document.getElementById("bouton_bleu_presser").style.display="none";
    document.getElementById("bouton_bleu").style.display="inline" ;
    document.getElementById("bouton_rouge").style.display="inline" ;
    document.getElementById("bouton_rouge_presser").style.display="none" ;
    document.getElementById("bouton_jaune").style.display="inline" ;
    document.getElementById("bouton_jaune_presser").style.display="none" ;
    document.getElementById("bouton_vert").style.display="none" ;
    document.getElementById("bouton_vert_presser").style.display="inline" ;

}

function get_all_element ( couleur  ) {
    // console.log(valeur.product.variants) ;

    var mes_bouton =['42' ,'43' ,'44' ,'45' ,'46']
    for (j=0 ; j<mes_bouton.length ;j++){
        document.getElementById(mes_bouton[j]).disabled=false;
        document.getElementById(mes_bouton[j]).style.borderColor="black";
    }




    for (i =0 ; i<valeur.product.variants.length ;i++){
        if (valeur.product.variants[i].color===couleur){
            if (valeur.product.variants[i].quantity===0){
                var id=valeur.product.variants[i].size ;
                document.getElementById(id).disabled=true;
                document.getElementById(id).style.borderColor="#7F7F7CFF";
            }
        }
        }
    }

function commande(taille ){
    var mes_bouton =['42' ,'43' ,'44' ,'45' ,'46']
    for (j=0 ; j<mes_bouton.length ;j++){
        document.getElementById(mes_bouton[j]).style.backgroundColor="white" ;
        document.getElementById(mes_bouton[j]).style.color="black" ;
    }
    for (k=0 ; k<valeur.product.variants.length ; k++){
        var prod=valeur.product.variants[k] ;
        if ( prod.color==couleur){
            if (prod.size==taille){
                id_prod=prod.id
                document.getElementById("price").innerHTML=prod.price+"€";
                document.getElementById("price").style.display="inline"
                console.log(prod.price);
            }
        }

    }

        document.getElementById(taille).style.backgroundColor="black" ;
        document.getElementById(taille).style.color="white" ;
    document.getElementById("teste").style.display="inline";
    document.getElementById("teste2").style.display="none";
    document.getElementById("teste").value=taille;


}




function requete(){
    var  valeur = document.getElementById("teste").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 ) {
            if ( this.status == 200){
                document.getElementById("teste").innerHTML = "Added to cart";
            }
            if (this.status==50){
                // alert("probleme")
            }

        }
    };
    xhttp.open("POST", "https://lugus-hiring.frb.io/cart/add", true);
    xhttp.send("{\"variant_id\":"+id_prod+",quantity:1}");

}

