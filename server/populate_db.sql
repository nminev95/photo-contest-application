ALTER table users auto_increment = 1;
ALTER table ranks auto_increment = 1;
ALTER table roles auto_increment = 1;
ALTER table contest_phases auto_increment = 1;
ALTER table contests auto_increment = 1;
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






