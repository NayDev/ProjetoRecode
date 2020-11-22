<?php
    //Conexão com o Banco
    abstract class ClassConexao{
    protected function conectaDB(){
        try{
            $Con=new PDO("mysql:host=localhost; dbname=fseletro","root","");
            return $Con;
        }catch(PDOException $Erro){
            return $Erro->getMessage();
        }
    }
}