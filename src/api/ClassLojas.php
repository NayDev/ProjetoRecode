<?php
    include("ClassConexao.php");


class ClassLojas extends ClassConexao{
    //Exibição de Produtos em um Json
    public function exibeLojas(){
        $BFetch=$this->conectaDB()->prepare("select * from lojas");
        $BFetch->execute();

        $P = [];
        $I = 0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $L[$I] = [
                "id_loja"=>$Fetch['id_loja'],
                "cidade"=>$Fetch['cidade'],
                "endereco"=>$Fetch['endereco'],
                "numero"=>$Fetch['numero'],
                "andar"=>$Fetch['andar'],
                "bairro"=>$Fetch['bairro'],
                "telefone"=>$Fetch['telefone'],
            ];
            $I++;
        }
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($L);
    }
}
$Lojas=new ClassLojas();
$Lojas->exibeLojas();