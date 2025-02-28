-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: carrito
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `credencial`
--

DROP TABLE IF EXISTS `credencial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credencial` (
  `idcredencial` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) NOT NULL,
  `contraseña` int NOT NULL,
  PRIMARY KEY (`idcredencial`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credencial`
--

LOCK TABLES `credencial` WRITE;
/*!40000 ALTER TABLE `credencial` DISABLE KEYS */;
INSERT INTO `credencial` VALUES (1,'admin',12345);
/*!40000 ALTER TABLE `credencial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credenciales`
--

DROP TABLE IF EXISTS `credenciales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credenciales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credenciales`
--

LOCK TABLES `credenciales` WRITE;
/*!40000 ALTER TABLE `credenciales` DISABLE KEYS */;
INSERT INTO `credenciales` VALUES (1,'admin','12345');
/*!40000 ALTER TABLE `credenciales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `price` varchar(10) NOT NULL,
  `imagen` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=186 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (179,'Mousse Corporal Cacao y Aloe Vera','La solución perfecta para el tratamiento natural de resequedad o dermatitis.','150.000','https://eltallerorganico.com/cdn/shop/products/mousepureza200ml_530x@2x.jpg?v=1665520195'),(180,'Jabón Natural Cuerpo y Cara','Disfruta de la seguridad y suavidad en tu piel que te brinda lo natural con nuestro Jabón líquido natural cuerpo y cara piel seca o sensible que te ayudará a limpiar a profundidad la piel de tu cara y cuerpo, sin resecarla o irritarla.','55.000','https://cdn.shopify.com/s/files/1/0315/0715/3034/products/jabonpurezza200ml_530x@2x.jpg?v=1665518983'),(181,'Sérum de Cacay y Rosa Mosqueta','Nuestro Aceite de Cacay natural con Rosa mosqueta es un potente tratamiento antiedad de retinol vegetal que ayuda a reducir  las líneas de expresión, manchas y a nutrir la piel. ','89.000','https://www.purezzanatural.com/cdn/shop/products/IMG_5576.jpg?v=1680195036&width=2890'),(182,'Aceite Natural Cuerpo y Cabello','Una mezcla de los mejores aceites colombianos que ayudan devolverle luminosidad y brillo a la piel y el cabello. Nuestro aceite 100 % natural hidrata de forma duradera, mejora la elasticidad de la piel y alivia la sensación de tirantez.','55.000','https://www.purezzanatural.com/cdn/shop/products/FI7A6525.jpg?v=1680194914&width=600'),(183,'Bálsamo Labial','Una mezcla de manteca de copoazú, cacao, caléndula, aceite de coco y maracuyá que dejarán tus labios suaves y humectados. ','19.000','https://www.purezzanatural.com/cdn/shop/products/IMG_5700.jpg?v=1655501452&width=600'),(184,'Exfoliante Revitalizante Corporal','Exfoliante Natural Corporal para hidratar piel seca-normal. Contiene sales de manaure que ayudan a remover las células muertas de tu piel. Enriquecido con aceite de coco que hidrata la piel, y una mezcla de aceites esenciales de verbena y menta que te ayudarán a elevar tu energía y saldrás de la ducha renovada. ','38.000','https://www.purezzanatural.com/cdn/shop/products/IMG_5681.jpg?v=1680194954&width=600'),(185,'Exfoliante Relajante Corporal','Exfoliante Natural Corporal para hidratar piel seca-normal contiene sales del manaure que ayudan a remover células muertas de tu piel. Enriquecido con aceite de coco que hidrata la piel, y una mezcla de aceites esenciales de lavanda y naranja que te ayudarán a relajarte.','55.000','https://www.purezzanatural.com/cdn/shop/products/IMG_9193.jpg?v=1680195536&width=600');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regalos`
--

DROP TABLE IF EXISTS `regalos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regalos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `price` varchar(10) NOT NULL,
  `imagen` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regalos`
--

LOCK TABLES `regalos` WRITE;
/*!40000 ALTER TABLE `regalos` DISABLE KEYS */;
INSERT INTO `regalos` VALUES (55,'Kit Dermatitis o Resequedad','Mousse: Humecta y repara profundamente la piel. Una mezcla con las mejores mantequillas y aceites vegetales colombianos, junto con el poder del Aloe Vera que nutren y suavizan la piel. Especial para las zonas más secas del cuerpo como codos, rodillas, manos y pies.Jabón: Te ayudará a limpiar a profundidad la piel de tu cara y cuerpo, sin resecarla o irritarla.','98.000','https://www.purezzanatural.com/cdn/shop/products/Kitdermatitis500mL_tubo_opcion1.jpg?v=1664638184&width=600'),(56,'Ritual Bienestar',' Exfoliante corporal  a base de sal de Manaure, aceite de coco y aceites esenciales. Disponible en 2 aromas:-Lavanda -Verbena y Menta. Mousse de cacao humectante en tubo de aluminio de 80 mL. Vela de cera de soya en envase de concreto. Aroma: Eucalipto.','120.000','https://www.purezzanatural.com/cdn/shop/files/RITUALBIENESTAR3.jpg?v=1683579334&width=600'),(57,'Piel de seda',' Bolsa en tela - Mousse cacao y aloe vera en tubo de aluminio (80 mL) - Aceite revitalizante caléndula y manzanilla  ( 120 mL)','106.000','https://www.purezzanatural.com/cdn/shop/files/PIELDESEDA.jpg?v=1683581647&width=600'),(58,'Amor Incondicional',' Sérum Facial Cacay y Rosa mosqueta • Exfoliante corporal a base de sal de Manaure, aceite de coco, avena y aceites esenciales. Disponible en 2 aromas:-Lavanda -Verbena y Menta • Mousse de cacao humectante en tubo de aluminio de 80 mL','165.000','https://www.purezzanatural.com/cdn/shop/products/IMG_4833.jpg?v=1653436789&width=600');
/*!40000 ALTER TABLE `regalos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CedulaNumero` varchar(20) DEFAULT NULL,
  `NombreCompletoNombre` varchar(255) DEFAULT NULL,
  `NombreCompletoApellido` varchar(255) DEFAULT NULL,
  `Rol` varchar(50) DEFAULT NULL,
  `Alias` varchar(50) DEFAULT NULL,
  `Contraseña` varchar(255) DEFAULT NULL,
  `Correo` varchar(255) DEFAULT NULL,
  `NumeroCelular` varchar(10) DEFAULT NULL,
  `Direccion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'123456789','Juan','Pérez','Administrador','juanito','contraseña123','juan@example.com',NULL,NULL),(24,'12313231','cristian','serrano','Usuario','meloenyolo','123','pepe@gmail.com','3122341342','calle 9 #25');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-30 22:38:42
