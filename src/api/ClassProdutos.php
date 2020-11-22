<?php
    include("ClassConexao.php");


class ClassProdutos extends ClassConexao{
    //Exibição de Produtos em um Json
    public function exibeProdutos(){
        $BFetch=$this->conectaDB()->prepare("select * from produtos");
        $BFetch->execute();

        $P = [];
        $I = 0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $P[$I] = [
                "idproduto"=>$Fetch['idproduto'],
                "categoria"=>$Fetch['categoria'],
                "descricao"=>$Fetch['descricao'],
                "imagem"=>$Fetch['imagem'],
                "preco"=>$Fetch['preco'],
                "precofinal"=>$Fetch['precofinal'],
            ];
            $I++;
        }
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($P);
    }
}
$Produtos=new ClassProdutos();
$Produtos->exibeProdutos();