// On exécute le script après que la page ait été totalement chargé
$( document ).ready(function() {
// Début script

$('.tab_container').each(function() {

  // Fonction pour nettoyer le code de balises non voulue qui provoquent des sauts à la ligne
  $(this).find('.tab_menu > br').each(function() {
    $(this).remove();
  });
  $(this).find('.tab_page + br').each(function() {
    $(this).remove();
  });

  // http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
  // Pour nettoyer le code des espaces parasites
  $(this).find('.tab_menu').each(function() { 
    function specialTrim(str){
        return str.replace(/>\s+</g,'><');
    }
    // Récupérer le texte à traiter
    var raw_html = $(this).html();
    // Retirer les espaces
    raw_html = specialTrim(raw_html);
    // Retirer les caractères spéciaux
    raw_html = raw_html.replace(/&nbsp;/g, "");
    // Afficher le texte traité
    $(this).html(raw_html);
  });


  // Fonction pour, au chargement de la page,
  // cacher toutes les pages sauf la première

  $(this).find('.tab_page:not(:first)').each(function() { 
    $(this).hide();
  });

  $(this).find('.tab_menu .tab_menu_item:first').each(function() { 
    $(this).addClass("selected");
  });
});

// Fonction qui permet d'afficher la page,
// quand on clique sur un item du menu
$( ".tab_menu_item" ).on( "click", function() {
  // On retire l'effet sélectionné sur l'ancien élément
  $(this).parent().find(".tab_menu_item.selected").removeClass("selected");
  // On ajoute l'effet sélectionné sur le nouvel élément
  $(this).addClass("selected");
  // Récupérer l'index de la page à afficher
  var page_to_show = $( this ).closest( ".tab_container" ).find( ".tab_menu" ).find(".tab_menu_item").index( this );
  // Cacher la page active
  $( this ).closest( ".tab_container" ).find( ".tab_page" ).hide();
  // Faire apparaître la page à afficher
  $( this ).closest( ".tab_container" ).each(function() {
    console.log(page_to_show);
    $( this ).find( ".tab_page:eq("+page_to_show+")" ).show();
  });
});



// Fin script
});
