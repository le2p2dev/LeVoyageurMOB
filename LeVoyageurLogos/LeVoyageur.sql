SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE SCHEMA IF NOT EXISTS `leVoyageur` DEFAULT CHARACTER SET utf8 ;
USE `leVoyageur` ;

CREATE TABLE IF NOT EXISTS `leVoyageur`.`User` (
  `idUser` INT NOT NULL,
  `userFirstName` VARCHAR(45) NOT NULL,
  `userLastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `leVoyageur`.`Description` (
  `idDescription` INT NOT NULL,
  `description` VARCHAR(300) NULL,
  PRIMARY KEY (`idDescription`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `leVoyageur`.`Trip` (
  `idTrip` INT NOT NULL,
  `tripName` VARCHAR(45) NOT NULL,
  `Description_idDescription` INT NULL,
  PRIMARY KEY (`idTrip`),
  INDEX `fk_Trip_Description1_idx` (`Description_idDescription` ASC),
  CONSTRAINT `fk_Trip_Description1`
    FOREIGN KEY (`Description_idDescription`)
    REFERENCES `leVoyageur`.`Description` (`idDescription`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `leVoyageur`.`POI` (
  `idPOI` INT NOT NULL,
  `poiName` VARCHAR(45) NOT NULL,
  `lat` DOUBLE NOT NULL,
  `long` DOUBLE NOT NULL,
  `User_idUser` INT NOT NULL,
  `Description_idDescription` INT NULL,
  PRIMARY KEY (`idPOI`),
  INDEX `fk_POI_User1_idx` (`User_idUser` ASC) ,
  INDEX `fk_POI_Description1_idx` (`Description_idDescription` ASC) ,
  CONSTRAINT `fk_POI_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `leVoyageur`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_POI_Description1`
    FOREIGN KEY (`Description_idDescription`)
    REFERENCES `leVoyageur`.`Description` (`idDescription`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `leVoyageur`.`Step` (
  `idStep` INT NOT NULL,
  `stepName` VARCHAR(45) NOT NULL,
  `Trip_idTrip` INT NOT NULL,
  `Description_idDescription` INT NULL,
  PRIMARY KEY (`idStep`),
  INDEX `fk_Step_Trip1_idx` (`Trip_idTrip` ASC) ,
  INDEX `fk_Step_Description1_idx` (`Description_idDescription` ASC) ,
  CONSTRAINT `fk_Step_Trip1`
    FOREIGN KEY (`Trip_idTrip`)
    REFERENCES `leVoyageur`.`Trip` (`idTrip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Step_Description1`
    FOREIGN KEY (`Description_idDescription`)
    REFERENCES `leVoyageur`.`Description` (`idDescription`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `leVoyageur`.`Document` (
  `idDocument` INT NOT NULL,
  `link` VARCHAR(100) NULL,
  `Description_idDescription` INT NOT NULL,
  PRIMARY KEY (`idDocument`),
  INDEX `fk_Document_Description1_idx` (`Description_idDescription` ASC) ,
  CONSTRAINT `fk_Document_Description1`
    FOREIGN KEY (`Description_idDescription`)
    REFERENCES `leVoyageur`.`Description` (`idDescription`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `leVoyageur`.`ItemTodoList` (
  `idItemTodoList` INT NOT NULL,
  `itemText` VARCHAR(100) NULL,
  `POI_idPOI` INT NULL,
  `executionDate` DATETIME NULL,
  `Trip_idTrip` INT NOT NULL,
  PRIMARY KEY (`idItemTodoList`),
  INDEX `fk_ItemTodoList_POI1_idx` (`POI_idPOI` ASC) ,
  INDEX `fk_ItemTodoList_Trip1_idx` (`Trip_idTrip` ASC) ,
  CONSTRAINT `fk_ItemTodoList_POI1`
    FOREIGN KEY (`POI_idPOI`)
    REFERENCES `leVoyageur`.`POI` (`idPOI`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ItemTodoList_Trip1`
    FOREIGN KEY (`Trip_idTrip`)
    REFERENCES `leVoyageur`.`Trip` (`idTrip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `leVoyageur`.`ItemDiary` (
  `idItemDiary` INT NOT NULL AUTO_INCREMENT,
  `itemText` VARCHAR(100) NOT NULL,
  `Trip_idTrip` INT NOT NULL,
  `createTime` TIMESTAMP NOT NULL,
  PRIMARY KEY (`idItemDiary`),
  INDEX `fk_ItemDiary_Trip1_idx` (`Trip_idTrip` ASC) ,
  CONSTRAINT `fk_ItemDiary_Trip1`
    FOREIGN KEY (`Trip_idTrip`)
    REFERENCES `leVoyageur`.`Trip` (`idTrip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `leVoyageur`.`Expense` (
  `idExpense` INT NOT NULL,
  `expenseDescription` VARCHAR(45) NULL,
  `cost` VARCHAR(45) NULL,
  `Trip_idTrip` INT NOT NULL,
  PRIMARY KEY (`idExpense`),
  INDEX `fk_Expense_Trip1_idx` (`Trip_idTrip` ASC) ,
  CONSTRAINT `fk_Expense_Trip1`
    FOREIGN KEY (`Trip_idTrip`)
    REFERENCES `leVoyageur`.`Trip` (`idTrip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `leVoyageur`.`User_has_Trip` (
  `User_idUser` INT NOT NULL,
  `Trip_idTrip` INT NOT NULL,
  PRIMARY KEY (`User_idUser`, `Trip_idTrip`),
  INDEX `fk_User_has_Trip_Trip1_idx` (`Trip_idTrip` ASC) ,
  INDEX `fk_User_has_Trip_User1_idx` (`User_idUser` ASC) ,
  CONSTRAINT `fk_User_has_Trip_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `leVoyageur`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Trip_Trip1`
    FOREIGN KEY (`Trip_idTrip`)
    REFERENCES `leVoyageur`.`Trip` (`idTrip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `leVoyageur`.`Trip_has_POI` (
  `Trip_idTrip` INT NOT NULL,
  `POI_idPOI` INT NOT NULL,
  `order` INT NULL,
  PRIMARY KEY (`Trip_idTrip`, `POI_idPOI`),
  INDEX `fk_Trip_has_POI_POI1_idx` (`POI_idPOI` ASC) ,
  INDEX `fk_Trip_has_POI_Trip1_idx` (`Trip_idTrip` ASC) ,
  UNIQUE INDEX `order_UNIQUE` (`order` ASC) ,
  CONSTRAINT `fk_Trip_has_POI_Trip1`
    FOREIGN KEY (`Trip_idTrip`)
    REFERENCES `leVoyageur`.`Trip` (`idTrip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Trip_has_POI_POI1`
    FOREIGN KEY (`POI_idPOI`)
    REFERENCES `leVoyageur`.`POI` (`idPOI`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
