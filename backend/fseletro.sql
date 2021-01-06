-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 04-Dez-2020 às 23:00
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nome`) VALUES
(1, 'geladeira'),
(2, 'fogao'),
(3, 'microondas'),
(4, 'lavadoraDeRoupas'),
(5, 'lavaLoucas');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `data_comentario` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `nome`, `msg`, `data_comentario`) VALUES
(1, 'Nayara Suelen Fernandes Lopes', 'Que loja linda!!!', '2020-12-04 18:31:17'),
(2, 'Guilherme', 'Quero mais produtos.', '2020-12-04 18:32:51');

-- --------------------------------------------------------

--
-- Estrutura da tabela `lojas`
--

CREATE TABLE `lojas` (
  `id_loja` int(11) NOT NULL,
  `cidade` varchar(200) NOT NULL,
  `logradoro` varchar(200) NOT NULL,
  `numero` int(11) NOT NULL,
  `andar` int(11) DEFAULT NULL,
  `bairro` varchar(100) NOT NULL,
  `telefone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `lojas`
--

INSERT INTO `lojas` (`id_loja`, `cidade`, `logradoro`, `numero`, `andar`, `bairro`, `telefone`) VALUES
(1, 'Rio de Janeiro', 'Avenida Presidente Vargas', 5000, 10, 'Centro', '(21) 3333-3333'),
(2, 'São Paulo', 'Avenida Paulista', 985, 3, 'Jardins', '(11) 4444-4444'),
(3, 'Santa Catarina', 'Rua Major Ávila', 370, 1, 'Vila Mariana', '(55) 5555-5555');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `nomecliente` varchar(100) NOT NULL,
  `logradoro` varchar(200) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `complemento` varchar(20) NOT NULL,
  `cidade` varchar(20) NOT NULL,
  `bairro` varchar(20) NOT NULL,
  `telefone` varchar(200) NOT NULL,
  `nomeproduto` varchar(255) NOT NULL,
  `valorunitario` decimal(8,2) NOT NULL,
  `quantidade` varchar(50) NOT NULL,
  `valortotal` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `nomecliente`, `logradoro`, `numero`, `complemento`, `cidade`, `bairro`, `telefone`, `nomeproduto`, `valorunitario`, `quantidade`, `valortotal`) VALUES
(1, 'Nayara', 'Rua José Bastos Nogueira', '37', 'Casa 03', 'São Paulo', 'São Carlos', '(11)98330-0855', 'Geladeira Frost Free Brastemp Branca 375 litros.', '1910.90', '1', '1910.90');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id_produto` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `precofinal` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id_produto`, `id_categoria`, `descricao`, `imagem`, `preco`, `precofinal`) VALUES
(2, 1, 'Geladeira Frost Free Brastemp Branca 375 litros.', 'Geladeira Frost Free Brastemp Branca 375 litros.jpg', '2068.60', '1910.90'),
(4, 2, 'Fogão de Piso 4 Bocas Acedimento Automático', './img/Fogão de Piso 4 Bocas Atlas Monaco com Acedimento Automático.jpeg', '609.90', '519.70'),
(5, 2, 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', './img/Fogão 4 Bocas Consul Inox com Mesa de Vidro.jpg', '1209.90', '1129.00'),
(6, 3, 'Micro-ondas Consul com Função Tira Odor', './img/Micro-ondas Consul 32 Litros Inox 220v.jpg', '580.90', '479.88'),
(7, 3, 'Microondas 25L Espelhado Philco 220v', './img/Microondas 25L Espelhado Philco 220v.jpg', '508.70', '464.53'),
(8, 3, 'Forno de Microondas Eletrolux 20L Branco', './img/Forno de Microondas Eletrolux 20L Branco.jpg', '459.90', '436.05'),
(9, 4, 'Lavadora de Roupas Brastemp 11 kg', './img/Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca.jpg', '1699.00', '1214.10'),
(10, 4, 'Lavadora de Roupas Philco Inverter 12KG', './img/Lavadora de Roupas Philco Inverter 12KG.jpg', '6389.00', '5019.00'),
(11, 5, 'Lava-Louças Electrolux Inox com 10', './img/Lava-Louças Electrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch.jpg', '3599.00', '2799.90'),
(12, 5, 'Lava Louça Compacta 8 Serviços Branca', './img/Lava Louça Compacta 8 Serviços Branca 127V Brastemp.jpg', '1970.50', '1730.61'),
(13, 1, 'Geladeira Frost Free Inverse 540 litros', './img/Geladeira Frost Free Brastemp Side Inverse 540 litros.jpg', '6389.00', '5019.00'),
(14, 1, 'Geladeira Frost Free Prata 340 litros', './img/Geladeira Frost Free Consul Prata 340 litros.jpg', '2199.90', '2069.00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Índices para tabela `lojas`
--
ALTER TABLE `lojas`
  ADD PRIMARY KEY (`id_loja`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id_produto`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `lojas`
--
ALTER TABLE `lojas`
  MODIFY `id_loja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id_produto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
