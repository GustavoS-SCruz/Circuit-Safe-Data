
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema circuit_safe
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema circuit_safe
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `circuit_safe` DEFAULT CHARACTER SET utf8 ;
USE `circuit_safe` ;

-- -----------------------------------------------------
-- Table `circuit_safe`.`empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`empresa` (
  `id_empresa` INT NOT NULL AUTO_INCREMENT,
  `nome_fantasia` VARCHAR(45) NULL,
  `razao_social` VARCHAR(45) NULL,
  `cnpj` VARCHAR(45) NULL,
  PRIMARY KEY (`id_empresa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`maquina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`maquina` (
  `id_maquina` INT NOT NULL AUTO_INCREMENT,
  `numero_serial` VARCHAR(45) NULL,
  `localizacao` VARCHAR(100) NULL,
  `fk_empresa` INT NOT NULL,
  PRIMARY KEY (`id_maquina`),
  INDEX `fk_maquina_empresa1_idx` (`fk_empresa` ASC) VISIBLE,
  CONSTRAINT `fk_maquina_empresa1`
    FOREIGN KEY (`fk_empresa`)
    REFERENCES `circuit_safe`.`empresa` (`id_empresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`usuario`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `circuit_safe`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `nome_usuario` VARCHAR(45) NULL,
  `nivel` INT NULL,
  `fk_empresa` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_usuario_empresa1_idx` (`fk_empresa` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_empresa1`
    FOREIGN KEY (`fk_empresa`)
    REFERENCES `circuit_safe`.`empresa` (`id_empresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`registro_manutencao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`registro_manutencao` (
  `id_registro_manutencao` INT NOT NULL AUTO_INCREMENT,
  `fk_maquina` INT NOT NULL,
  `fk_usuario` INT NOT NULL,
  `descricao` VARCHAR(300) NULL,
  PRIMARY KEY (`id_registro_manutencao`, `fk_maquina`, `fk_usuario`),
  INDEX `fk_registro_manutencao_maquina1_idx` (`fk_maquina` ASC) VISIBLE,
  INDEX `fk_registro_manutencao_usuario1_idx` (`fk_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_registro_manutencao_maquina1`
    FOREIGN KEY (`fk_maquina`)
    REFERENCES `circuit_safe`.`maquina` (`id_maquina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_registro_manutencao_usuario1`
    FOREIGN KEY (`fk_usuario`)
    REFERENCES `circuit_safe`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`tipo` (
  `id_tipo` INT NOT NULL AUTO_INCREMENT,
  `nome_tipo` VARCHAR(45) NULL,
  PRIMARY KEY (`id_tipo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`fabricante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`fabricante` (
  `id_fabricante` INT NOT NULL AUTO_INCREMENT,
  `nome_fabricante` VARCHAR(45) NULL,
  PRIMARY KEY (`id_fabricante`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`unidade_medida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`unidade_medida` (
  `id_unidade_medida` INT NOT NULL AUTO_INCREMENT,
  `valor` VARCHAR(45) NULL,
  `tipo_capacidade` VARCHAR(45) NULL,
  PRIMARY KEY (`id_unidade_medida`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`componente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`componente` (
  `id_componente` INT NOT NULL AUTO_INCREMENT,
  `fk_tipo` INT NOT NULL,
  `capacidade` DECIMAL NULL,
  `fk_unidade_medida` INT NOT NULL,
  `fk_fabricante` INT NOT NULL,
  PRIMARY KEY (`id_componente`),
  INDEX `fk_componente_tipo1_idx` (`fk_tipo` ASC) VISIBLE,
  INDEX `fk_componente_fabricante1_idx` (`fk_fabricante` ASC) VISIBLE,
  INDEX `fk_componente_unidade_medida1_idx` (`fk_unidade_medida` ASC) VISIBLE,
  CONSTRAINT `fk_componente_tipo1`
    FOREIGN KEY (`fk_tipo`)
    REFERENCES `circuit_safe`.`tipo` (`id_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_componente_fabricante1`
    FOREIGN KEY (`fk_fabricante`)
    REFERENCES `circuit_safe`.`fabricante` (`id_fabricante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_componente_unidade_medida1`
    FOREIGN KEY (`fk_unidade_medida`)
    REFERENCES `circuit_safe`.`unidade_medida` (`id_unidade_medida`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`maquina_has_componente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`maquina_has_componente` (
  `fk_maquina` INT NOT NULL,
  `fk_componente` INT NOT NULL,
  PRIMARY KEY (`fk_maquina`, `fk_componente`),
  INDEX `fk_maquina_has_componente_componente1_idx` (`fk_componente` ASC) VISIBLE,
  INDEX `fk_maquina_has_componente_maquina1_idx` (`fk_maquina` ASC) VISIBLE,
  CONSTRAINT `fk_maquina_has_componente_maquina1`
    FOREIGN KEY (`fk_maquina`)
    REFERENCES `circuit_safe`.`maquina` (`id_maquina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_maquina_has_componente_componente1`
    FOREIGN KEY (`fk_componente`)
    REFERENCES `circuit_safe`.`componente` (`id_componente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `circuit_safe`.`registro_recurso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `circuit_safe`.`registro_recurso` (
  `id_registro` INT NOT NULL AUTO_INCREMENT,
  `fk_maquina` INT NOT NULL,
  `fk_componente` INT NOT NULL,
  `valor` DECIMAL NULL,
  `dt_hora_registro` DATETIME NULL,
  PRIMARY KEY (`id_registro`, `fk_maquina`, `fk_componente`),
  INDEX `fk_registro_maquina_has_componente1_idx` (`fk_maquina` ASC, `fk_componente` ASC) VISIBLE,
  CONSTRAINT `fk_registro_maquina_has_componente1`
    FOREIGN KEY (`fk_maquina` , `fk_componente`)
    REFERENCES `circuit_safe`.`maquina_has_componente` (`fk_maquina` , `fk_componente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
