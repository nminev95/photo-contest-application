ALTER table users auto_increment = 1;
ALTER table ranks auto_increment = 1;
ALTER table roles auto_increment = 1;
ALTER table contest_phases auto_increment = 1;
ALTER table contests auto_increment = 1;
ALTER table contests_categories auto_increment = 1;
ALTER table photos auto_increment = 1;
ALTER table messages auto_increment = 1;
ALTER table reviews auto_increment = 1;
ALTER table contest_restrictions auto_increment = 1;

INSERT INTO `photo_contest_db`.`roles` (`type`) VALUES ('Organizer');
INSERT INTO `photo_contest_db`.`roles` (`type`) VALUES ('Photo Junkie');

INSERT INTO `photo_contest_db`.`ranks` (`type`) VALUES ('Junkie');
INSERT INTO `photo_contest_db`.`ranks` (`type`) VALUES ('Enthusiast');
INSERT INTO `photo_contest_db`.`ranks` (`type`) VALUES ('Master');
INSERT INTO `photo_contest_db`.`ranks` (`type`) VALUES ('Wise and Benevolent Photo Dictator');

INSERT INTO `photo_contest_db`.`contest_phases` (`type`) VALUES ('Phase I');
INSERT INTO `photo_contest_db`.`contest_phases` (`type`) VALUES ('Phase II');
INSERT INTO `photo_contest_db`.`contest_phases` (`type`) VALUES ('Finished');

INSERT INTO `photo_contest_db`.`contest_restrictions` (`type`) VALUES ('Open');
INSERT INTO `photo_contest_db`.`contest_restrictions` (`type`) VALUES ('Invitational');

INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Abstract');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Animals');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Black and White');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Fashion');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Food');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Landscapes');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Nature');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Portraits');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Products/Commercial');
INSERT INTO `photo_contest_db`.`contest_categories` (`type`) VALUES ('Macro');

INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('john_wick33', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'JohnWick@gmail.com', 'John', 'Wick', 'john.jpg', '73', (SELECT NOW()), '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('magic_johnson11', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'MagicJohnson59@gmail.com', 'Earvin', 'Johnson', 'earvin.jpg', '181', (SELECT NOW()), '3');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('leeroy_jenkins99', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'LeeroyJenkins@gmail.com', 'Leeroy', 'Jenkins', 'leeroy.jpg', '1033', (SELECT NOW()), '4');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('beth_harmon_96', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'BethHarmon@yahoo.com', 'Beth', 'Harmon', 'beth.jpg', '458', (SELECT NOW()), '3');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('maisie_williams98', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'MaisieWilliams@gmail.com', 'Maisie', 'Williams', 'maisie.jpg', '236', (SELECT NOW()), '3');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('johnny_cash', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'JohnnyCash@yahoo.com', 'John', 'Cash', 'johnny.jpg', '1236', (SELECT NOW()), '4');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('audreyhepburn33', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'AudreyHepburn@yahoo.com', 'Audrey', 'Hepburn', 'audrey.jpg', '344', (SELECT NOW()), '3');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('i_am_gandalf', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'GandalfTheGray@yahoo.com', 'Gandalf', 'The Gray', 'gandalf.jpg', '89', (SELECT NOW()), '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('beth_bennet56', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'ElizabethBennet@yahoo.com', 'Elizabeth', 'Bennet', 'elizabeth.jpg', '111', (SELECT NOW()), '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('atticusfinch44', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'AtticusFinch@yahoo.com', 'Atticus', 'Finch', 'atticus.jpg', '142', (SELECT NOW()), '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('charles_bingley78', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'CharlesBingley@gmail.com', 'Charles', 'Bingley', 'charles.jpg', '555', (SELECT NOW()), '3');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('jennifer_ehle91', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'JenniferEhle@yahoo.com', 'Jennifer', 'Ehle', 'jennifer.jpg', '877', (SELECT NOW()), '3');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('kit_harrington43', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'KingOfTheNorth@yahoo.com', 'John', 'Snow', 'kit.jpg', '1580', (SELECT NOW()), '4');
-- pass: ASDF123!

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `description`, `firstPhaseLimit`, `secondPhaseLimit`, `limit`, `contestCover`, `restrictions_id`, `phase_id`, `category_id`, `organizer_id`)
VALUES
('Pastel colours', 'Welcome to our Abstract Pastel Colours competition. When a fully saturated colour is diluted by white, it becomes a pastel colour. These shades are generally more delicate, so it’s better to photograph them in a softer, diffused light, to avoid making them look washed out. A carefully composed photo that uses pastel colours can have a gentle and unique quality to it. Photographer from all level are welcome to enter. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 80 participants.',
(SELECT NOW() + INTERVAL 20 DAY), (SELECT NOW() + INTERVAL 20 HOUR), '80', 'pastel-colours-cover.jpg', '1', '1', '1', '1')




