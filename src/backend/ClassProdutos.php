<?php
    include("ClassConexao.php");

class ClassProdutos extends ClassConexao{
    //Exibição de Produtos em um Json
    public function exibeProdutos(){
        $BFetch=$this->conectaDB()->prepare("SELECT* FROM produtos AS p INNER JOIN categoria AS c ON p.id_categoria = c.id_categoria");
        $BFetch->execute();
        
        $P = [];
        $I = 0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $P[$I] = [
                "id_produto"=>$Fetch['id_produto'],
                "id_categoria"=>$Fetch['id_categoria'],
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