<?php
    include("ClassConexao.php");


class ClassMensagens extends ClassConexao{
    //Exibição de Produtos em um Json
    public function exibeMensagens(){
        $BFetch=$this->conectaDB()->prepare("select * from comentarios");
        $BFetch->execute();

        $M = [];
        $I = 0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $M[$I] = [
                "id_comentario"=>$Fetch['id_comentario'],
                "nome"=>$Fetch['nome'],
                "msg"=>$Fetch['msg'],
                "data"=>$Fetch['data'],
            ];
            $I++;
        }
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($M);
    }
}
$Mensagens=new ClassMensagens();
$Mensagens->exibeMensagens();