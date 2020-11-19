-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema photo_contest_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema photo_contest_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `photo_contest_db` DEFAULT CHARACTER SET latin1 ;
USE `photo_contest_db` ;

-- -----------------------------------------------------
-- Table `photo_contest_db`.`contest_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`contest_categories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`contest_phases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`contest_phases` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`contest_restrictions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`contest_restrictions` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`ranks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`ranks` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(145) NOT NULL,
  `email` VARCHAR(145) NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `info` VARCHAR(245) NULL DEFAULT NULL,
  `avatarUrl` VARCHAR(245) NULL DEFAULT NULL,
  `points` INT(11) NOT NULL DEFAULT 0,
  `registerDate` VARCHAR(45) NOT NULL,
  `rank_id` INT(11) NOT NULL DEFAULT 1,
  `role_id` INT(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `fk_users_ranks1_idx` (`rank_id` ASC) VISIBLE,
  INDEX `fk_users_roles1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_ranks1`
    FOREIGN KEY (`rank_id`)
    REFERENCES `photo_contest_db`.`ranks` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_roles1`
    FOREIGN KEY (`role_id`)
    REFERENCES `photo_contest_db`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 22
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`contests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`contests` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `firstPhaseLimit` DATETIME NOT NULL,
  `secondPhaseLimit` DATETIME NOT NULL,
  `spots` INT(11) NOT NULL,
  `contestCover` VARCHAR(245) NOT NULL,
  `category` VARCHAR(345) NOT NULL,
  `restrictions_id` INT(11) NOT NULL,
  `phase_id` INT(11) NOT NULL DEFAULT 1,
  `organizer_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_contests_contest_restrictions1_idx` (`restrictions_id` ASC) VISIBLE,
  INDEX `fk_contests_contest_phases1_idx` (`phase_id` ASC) VISIBLE,
  INDEX `fk_contests_users1_idx` (`organizer_id` ASC) VISIBLE,
  CONSTRAINT `fk_contests_contest_phases1`
    FOREIGN KEY (`phase_id`)
    REFERENCES `photo_contest_db`.`contest_phases` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contests_contest_restrictions1`
    FOREIGN KEY (`restrictions_id`)
    REFERENCES `photo_contest_db`.`contest_restrictions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contests_users1`
    FOREIGN KEY (`organizer_id`)
    REFERENCES `photo_contest_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`contest_jury_invitations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`contest_jury_invitations` (
  `contest_id` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
  INDEX `fk_users_has_contests_contests1_idx` (`contest_id` ASC) VISIBLE,
  INDEX `fk_users_has_contests_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_contests_contests1`
    FOREIGN KEY (`contest_id`)
    REFERENCES `photo_contest_db`.`contests` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_contests_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `photo_contest_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`messages` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(245) NOT NULL,
  `sendDate` DATETIME NOT NULL,
  `recepient_id` INT(11) NOT NULL,
  `sender_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_messages_users1_idx` (`recepient_id` ASC) VISIBLE,
  INDEX `fk_messages_users2_idx` (`sender_id` ASC) VISIBLE,
  CONSTRAINT `fk_messages_users1`
    FOREIGN KEY (`recepient_id`)
    REFERENCES `photo_contest_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_messages_users2`
    FOREIGN KEY (`sender_id`)
    REFERENCES `photo_contest_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`photos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`photos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `story` VARCHAR(545) NOT NULL,
  `originalSize` VARCHAR(245) NOT NULL,
  `thumbnailSize` VARCHAR(245) NOT NULL,
  `date` DATE NOT NULL,
  `user_id` INT(11) NOT NULL,
  `contest_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_photos_users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_photos_contests1_idx` (`contest_id` ASC) VISIBLE,
  CONSTRAINT `fk_photos_contests1`
    FOREIGN KEY (`contest_id`)
    REFERENCES `photo_contest_db`.`contests` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_photos_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `photo_contest_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 97
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`private_contest_invitations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`private_contest_invitations` (
  `contest_id` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
  INDEX `fk_contests_has_users1_users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_contests_has_users1_contests1_idx` (`contest_id` ASC) VISIBLE,
  CONSTRAINT `fk_contests_has_users1_contests1`
    FOREIGN KEY (`contest_id`)
    REFERENCES `photo_contest_db`.`contests` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contests_has_users1_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `photo_contest_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `photo_contest_db`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `photo_contest_db`.`reviews` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `score` INT(11) NOT NULL,
  `comment` VARCHAR(245) NOT NULL,
  `isInappropriate` TINYINT(4) NOT NULL DEFAULT 0,
  `user_id` INT(11) NOT NULL,
  `photo_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reviews_users_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_reviews_photos1_idx` (`photo_id` ASC) VISIBLE,
  CONSTRAINT `fk_reviews_photos1`
    FOREIGN KEY (`photo_id`)
    REFERENCES `photo_contest_db`.`photos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reviews_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `photo_contest_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
