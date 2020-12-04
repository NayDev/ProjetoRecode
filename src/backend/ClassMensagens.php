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

    public function carregarMensagens(){
      $BFetch=$this->conectaDB()->prepare("select * from comentarios");
      //SELECT date_format(data,'%d/%m/%Y as %H:%ihs') as Data, nome, msg FROM `comentarios`
      $BFetch->execute();

      $M = [];
      $I = 0;

      while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
        if(isset($datastring['data'])){
          $datastring['data'] = date_format(date_create_from_format('d/m/Y',$datastring['data']),"Y/m/d");
      }
        $M[$I] = [
          "id_comentario"=>$Fetch['id_comentario'],
          "nome"=>$Fetch['nome'],
          "msg"=>$Fetch['msg'],
          "data"=>$Fetch['data'],
        ];
        $I++;
      }
      return $M;
    }


    //Função para Gravar a mensagem no BANCO
    public function gravarMensagem(){
      if(isset($_POST['nome']) && isset($_POST['msg'])){
        $nome = $_POST['nome'];
        $msg = $_POST['msg'];
  
        $conexao = $this->conectaDB();

        $sql = "insert  into comentarios (nome, msg) values ('$nome','$msg')";
        $conexao->query($sql);
    }

   
      $M[] = [
        "resultado"=> $this->carregarMensagens(),
        //"resultado"=>$result,
      ];
           
      header("Access-Control-Allow-Origin:*");
      header("Content-type: application/json");
      echo json_encode($M);
    }

    //Função para rota do PHP
    public function rota(){
      $metodo = $_SERVER['REQUEST_METHOD'];

      switch ($metodo) {
        case 'GET':
          $this->exibeMensagens();
            break;
        case 'POST':
          $this->gravarMensagem();
             break;
        default:
          //Complementar depois
          break;
       }
    }
}

$Mensagens=new ClassMensagens();
$Mensagens->rota();

?>
