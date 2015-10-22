// Fonction pour rajouter le bouton des tab pages
$(document).ready(function() {
    $(function() {
        var content = "<div class='tab_container'>Le titre du container, facultatif
    \n<ul class='tab_menu'>
        \n<li class='tab_menu_item'>Bouton 1</li>
        \n<li class='tab_menu_item'>Bouton 2</li>
        \n<li class='tab_menu_item'>Bouton 3</li>
    \n</ul>
    \n<div class='tab_page'>
\nIci tu mets le contenu de ta page 1
    \n</div>
    \n<div class='tab_page'>
\nLe contenu de la page 2
    \n</div>
    \n<div class='tab_page'>
\nLe contenu de la page 3, etc.
    \n</div>
\n</div>";
        $('<a class="sceditor-button" unselectable="on"><div title="Tab page (plusieurs pages accessible avec un menu)" unselectable="on" style="background-image:url(http://syceya.com/pioneer/bouton_tab_page.png)">a</div></a>').insertBefore(".sceditor-button-size").click(function() {
            $("#text_editor_textarea").sceditor("instance").insertText(content, "")
        });
    });
});
