
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
         var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 ) {
            if ( this.status == 200){
                valeur=JSON.parse(xhttp.responseText);

            }

        }
    };
    xhttp.open("GET", "https://lugus-hiring.frb.io/product", true);
    console.log(id_prod)
    xhttp.send();
        
        
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
                document.getElementById("teste").innerHTML = "";
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

