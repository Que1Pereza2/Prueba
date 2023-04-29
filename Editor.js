function negrita(){
    window.document.execCommand( "bold",false,null);
}
function cursiva(){
    window.document.execCommand( "italic",false,null);
}
function subrayado(){
    window.document.execCommand( "underline",false,null);
}
function alini(){
    window.document.execCommand( "justifyleft",false,null);
}
function alind(){
    window.document.execCommand( "justifyright",false,null);
}
function alinc(){
    window.document.execCommand( "justifycenter",false,null);
}
function alinf(){
    window.document.execCommand( "justifyfull",false,null);
}
function lno(){
    window.document.execCommand( "insertunorderedlist",false,null);
}
function lor(){
    window.document.execCommand( "insertorderedlist",false,null);
}
function subi(){
    window.document.execCommand( "subscript",false,null);
}
function supi(){
    window.document.execCommand( "superscript",false,null);
}
function fco(){
    var color=prompt("introduce el color de la fuente");
    window.document.execCommand( "forecolor",false,color);
}
function bco(){
    var color=prompt("introduce el color del fondo");
    window.document.execCommand( "backcolor",false,color);
}
function imagen(){
    var imagen=prompt("Introduce la ruta del archivo");
    window.document.execCommand( "insertimage",false,imagen);
}
function hipervinculo(){
    var direccion=prompt("Introduce la URL:","http://");
    window.document.execCommand( "createlink",false,direccion);
}
function publicar(){
    var conte=document.getElementById("contenido").innerHTML;
    document.getElementById("mensajes").innerHTML=conte;
}