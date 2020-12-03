ALTER table users auto_increment = 1;
ALTER table ranks auto_increment = 1;
ALTER table roles auto_increment = 1;
ALTER table contest_phases auto_increment = 1;
ALTER table contests auto_increment = 1;
ALTER table photos auto_increment = 1;
ALTER table messages auto_increment = 1;
ALTER table reviews auto_increment = 1;
ALTER table contest_restrictions auto_increment = 1;

-- User roles
INSERT INTO `photo_contest_db`.`roles` (`type`) VALUES ('Photo Junkie');
INSERT INTO `photo_contest_db`.`roles` (`type`) VALUES ('Organizer');

-- Ranks
INSERT INTO `photo_contest_db`.`ranks` (`type`) VALUES ('Junkie');
INSERT INTO `photo_contest_db`.`ranks` (`type`) VALUES ('Enthusiast');
INSERT INTO `photo_contest_db`.`ranks` (`type`) VALUES ('Master');
INSERT INTO `photo_contest_db`.`ranks` (`type`) VALUES ('Wise and Benevolent Photo Dictator');

-- Contest phases
INSERT INTO `photo_contest_db`.`contest_phases` (`type`) VALUES ('Phase I');
INSERT INTO `photo_contest_db`.`contest_phases` (`type`) VALUES ('Phase II');
INSERT INTO `photo_contest_db`.`contest_phases` (`type`) VALUES ('Finished');

-- Contest restrictions
INSERT INTO `photo_contest_db`.`contest_restrictions` (`type`) VALUES ('Open');
INSERT INTO `photo_contest_db`.`contest_restrictions` (`type`) VALUES ('Invitational');

-- Users
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('john_wick33', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'JohnWick@gmail.com', 'John', 'Wick', 'john.jpg', '73', (SELECT NOW()), '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('magic_johnson11', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'MagicJohnson59@gmail.com', 'Earvin', 'Johnson', 'ervin.jpg', '181', (SELECT NOW()), '3');
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
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('jocelyn_45', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'JocelynS@yahoo.com', 'Jocelyn', 'Sutherland', 'jocelyn.jpg', '145', (SELECT NOW()), '1');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('pierre_h14', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Pierre_H@yahoo.com', 'Pierre', 'Hackett', 'pierre.jpg', '1567', (SELECT NOW()), '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('haleigh_5', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Haleigh.G@yahoo.com', 'Haleigh', 'Gardner', 'haleigh.jpg', '1545', (SELECT NOW()), '3');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('tamsin_e', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Tamsin_T@yahoo.com', ' Tamsin', 'Egerton','tamsin.jpg', '156', (SELECT NOW()), '4');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('christy_r', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Christyy_R@yahoo.com', 'Christina', 'Ricci', 'christina.jpg', '140', (SELECT NOW()), '4');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('akhil_43', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'A_Newman@yahoo.com', 'Akhil', 'Newman', 'akhil.jpg', '1670', (SELECT NOW()), '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `avatarUrl`, `points`, `registerDate`, `rank_id`) 
VALUES ('igracio_s', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Ignacio_Sch@yahoo.com', 'Ignacio', 'Schmidt', 'ignacio.jpg', '1340', (SELECT NOW()), '4');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `points`, `registerDate`, `rank_id`, `role_id`) 
VALUES ('evelyn_org', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Evelyn_Smith@yahoo.com', 'Evelyn', 'Smith', '1340', (SELECT NOW()), '4', '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `points`, `registerDate`, `rank_id`, `role_id`) 
VALUES ('david_org', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'David_Gray@yahoo.com', 'David', 'Gray', '1640', (SELECT NOW()), '4', '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `points`, `registerDate`, `rank_id`, `role_id`) 
VALUES ('christian_org', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Christian_Young@yahoo.com', 'Christian', 'Young', '1240', (SELECT NOW()), '4', '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `points`, `registerDate`, `rank_id`, `role_id`) 
VALUES ('christina_org', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Christina_Becker@yahoo.com', 'Christina', 'Becker', '1140', (SELECT NOW()), '4', '2');
INSERT INTO `photo_contest_db`.`users` (`username`, `password`, `email`, `firstName`, `lastName`, `points`, `registerDate`, `rank_id`, `role_id`) 
VALUES ('tamara_org', '$2b$10$FZbFdz..0lh99jcDVY1xreabORv/rHlWykFS1nHueNRu8pPei0QgC', 'Tamara_Anderson@yahoo.com', 'Tamara', 'Anderson', '1040', (SELECT NOW()), '4', '2');
-- pass: ASDF123!

-- Contests
INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Pastel colours', 'Welcome to our Abstract Pastel Colours competition. When a fully saturated colour is diluted by white, it becomes a pastel colour. These shades are generally more delicate, so it’s better to photograph them in a softer, diffused light, to avoid making them look washed out. A carefully composed photo that uses pastel colours can have a gentle and unique quality to it. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 80 participants.',
(SELECT NOW() - INTERVAL 20 DAY), ((SELECT NOW() - INTERVAL 20 DAY) + INTERVAL 20 HOUR), '80', '1606480787442_039088705.jpeg', '1', '3', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Portraits', "Welcome to our Portraits competition. Portrait photography is all about the face. A photographer's goal is to take a carefully crafted photograph of a person's distinguishing facial features while capturing the person's attitude, identity, and personality. The photo may include a blurred background and the person's body, but those factors are not emphasized in the image. . During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 150 participants.",
(SELECT NOW() - INTERVAL 25 DAY), ((SELECT NOW() - INTERVAL 25 DAY) + INTERVAL 18 HOUR), '150', '1606480969980_656006010.jpeg', '1', '3', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Food', 'Welcome to our Food competition. How many times have you heard: "You eat with your eyes first"? Food contains all of the elements of design that can make a striking image. Color, texture, pattern, line, shape, and form are all there, yet the key ingredient is to capture the image in a way that makes the viewer want. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 100 participants.',
(SELECT NOW() - INTERVAL 4 HOUR), ((SELECT NOW() - INTERVAL 4 HOUR) + INTERVAL 23 HOUR), '100', '1606481162942_260528137.jpeg', '1', '2', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Animals', 'Welcome to our Animals competition. If you are out in the wild, photographing animals, then you are shooting wildlife photography. It involves documenting the creatures, in and out of their habitats. One of the most importain features is the backlighting. It refers to the positioning of light behind your subject, such that your subject is located between you and the source of light. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 150 participants.',
(SELECT NOW() - INTERVAL 16 DAY), ((SELECT NOW() - INTERVAL 16 DAY) + INTERVAL 21 HOUR), '150', '1606481192800_288867563.jpeg', '1', '3', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Landscapes', 'Landscape photography is the art of capturing pictures of nature and the outdoors in a way that brings your viewer into the scene. From grand landscapes to intimate details, the best photos demonstrate the photographer’s own connection to nature and capture the essence of the world around them. Photographer from all level are welcome to enter. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 120 participants.',
(SELECT NOW() - INTERVAL 4 HOUR), ((SELECT NOW() - INTERVAL 4 HOUR) + INTERVAL 15 HOUR), '120', '1606481242285_881580394.jpeg', '1', '2', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Flowers', 'Welcome to our Flowers competition. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 80 participants.',
(SELECT NOW() - INTERVAL 25 DAY), ((SELECT NOW() - INTERVAL 25 DAY) + INTERVAL 20 HOUR), '120', '1606481330244_562243874.jpeg', '1', '3', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Black & White', "Welcome to Black & White Contest. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 150 participants.",
(SELECT NOW() - INTERVAL 4 HOUR), ((SELECT NOW() - INTERVAL 4 HOUR) + INTERVAL 18 HOUR), '120', '1606481375019_443333149.jpeg', '1', '2', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Cold And Blue', 'Welcome to our Cold And Blue competition. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 150 participants.',
(SELECT NOW() + INTERVAL 28 DAY), ((SELECT NOW() + INTERVAL 28 DAY) + INTERVAL 15 HOUR), '150', '1606481727977_958824032.jpeg', '1', '1', '24');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Cars', "Welcome to our Cars competition. Taking photos of cars is many people's passion. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. This competition has a limit of 150 participants.",
(SELECT NOW() - INTERVAL 4 HOUR), ((SELECT NOW() - INTERVAL 4 HOUR) + INTERVAL 20 HOUR), '150', '1606481453671_116820854.jpeg', '1', '2', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Fashion', 'Welcome to our Fashion competition. Fashion photography is a genre of photography which is devoted to displaying clothing and other fashion items. It has developed its own aesthetic in which the clothes and fashions are enhanced by the presence of exotic locations or accessories. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 150 participants.',
(SELECT NOW() + INTERVAL 26 DAY), ((SELECT NOW() + INTERVAL 26 DAY) + INTERVAL 23 HOUR), '150', '1606481480616_278696006.jpeg', '1', '1', '22');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Sport', 'Welcome to our Sport competition. Sports photography refers to the genre of photography that covers all types of sports. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 120 participants.',
(SELECT NOW() + INTERVAL 20 DAY), ((SELECT NOW() + INTERVAL 20 DAY) + INTERVAL 15 HOUR), '120', '1606481510895_981577679.jpeg', '1', '1', '22');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Interior', 'Welcome to our Interior competition. Interior photography is the practice of taking photos of indoor spaces—from rooms to pieces of furniture. Knowing how to shoot an interior is essential for a wide number of fields, including real estate photography, architectural photography, and interior design photography. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 120 participants.',
(SELECT NOW() + INTERVAL 20 DAY), ((SELECT NOW() + INTERVAL 20 DAY) + INTERVAL 15 HOUR), '120', '1606481538487_859010055.jpeg', '1', '1', '22');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Diamonds', 'Welcome to our Diamonds competition. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 80 participants.',
(SELECT NOW() + INTERVAL 20 DAY), ((SELECT NOW() + INTERVAL 20 DAY) + INTERVAL 20 HOUR), '80', '1606481586228_721827432.jpeg', '1', '1', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Waterfalls', 'Welcome to our Waterfalls competition. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 120 participants.',
(SELECT NOW() + INTERVAL 20 DAY), ((SELECT NOW() + INTERVAL 20 DAY) + INTERVAL 20 HOUR), '120', '1606481615746_477573046.jpeg', '1', '1', '22');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Jewelries', 'Welcome to our Jewelries competition. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 150 participants.',
(SELECT NOW() + INTERVAL 28 DAY), ((SELECT NOW() + INTERVAL 28 DAY) + INTERVAL 15 HOUR), '150', '1606481652575_793290202.jpeg', '1', '1', '23');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Arhitecture',"Welcome to Arhitecture Contest. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 150 participants.",
(SELECT NOW() + INTERVAL 15 DAY), ((SELECT NOW() + INTERVAL 15 DAY) + INTERVAL 18 HOUR), '120', '1606481421949_094999210.jpeg', '1', '1', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Famous Landmarks', 'Welcome to our Famous Landmarks competition. How many times have you heard: "You eat with your eyes first"? Food contains all of the elements of design that can make a striking image. Color, texture, pattern, line, shape, and form are all there, yet the key ingredient is to capture the image in a way that makes the viewer want. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 100 participants.',
(SELECT NOW() - INTERVAL 4 HOUR), ((SELECT NOW() - INTERVAL 4 HOUR) + INTERVAL 23 HOUR), '100', '1606482957170_427778791.jpeg', '1', '2', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Wedding Details', 'Welcome to our Wedding Details competition. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 100 participants.',
(SELECT NOW() - INTERVAL 4 HOUR), ((SELECT NOW() - INTERVAL 4 HOUR) + INTERVAL 23 HOUR), '100', '1606483053752_332774290.jpeg', '1', '2', '23');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Snowboarding', 'Welcome to our Snowboarding competition. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 100 participants.',
(SELECT NOW() - INTERVAL 4 HOUR), ((SELECT NOW() - INTERVAL 4 HOUR) + INTERVAL 23 HOUR), '100', '1606483174320_692738722.jpeg', '1', '2', '22');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Sunset', 'Welcome to our Sunset competition. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 120 participants.',
(SELECT NOW() - INTERVAL 4 HOUR), ((SELECT NOW() - INTERVAL 4 HOUR) + INTERVAL 23 HOUR), '120', '1606483581218_773179798.jpeg', '1', '2', '22');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Vintage', 'Welcome to our Vintage competition. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 100 participants.',
(SELECT NOW() - INTERVAL 15 DAY), ((SELECT NOW() - INTERVAL 15 DAY) + INTERVAL 24 HOUR), '100', '1606640168390_588181385.jpeg', '1', '3', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Reflection', 'Welcome to our Reflection competition. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 120 participants.',
(SELECT NOW() - INTERVAL 17 DAY), ((SELECT NOW() - INTERVAL 17 DAY) + INTERVAL 24 HOUR), '120', '1606641195307_600378132.jpeg', '1', '3', '21');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Lighthouses', 'Welcome to our Lighthouses competition. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 100 participants.',
(SELECT NOW() - INTERVAL 15 DAY), ((SELECT NOW() - INTERVAL 15 DAY) + INTERVAL 24 HOUR), '100', '1606642965372_739595540.jpeg', '1', '3', '23');

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `category`, `firstPhaseLimit`, `secondPhaseLimit`, `spots`, `contestCover`, `restrictions_id`, `phase_id`, `organizer_id`)
VALUES
('Christmas time', 'Welcome to our Christmas time competition. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 100 participants.',
(SELECT NOW() - INTERVAL 15 DAY), ((SELECT NOW() - INTERVAL 15 DAY) + INTERVAL 24 HOUR), '100', '1606643814578_389338242.jpeg', '1', '3', '24');

-- Photos
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Surreal Urban Abstract Composition', 'Surreal pastel coloured photography featuring soft colour palettes, and strange activities in everyday situations. Inspired by creativeness, this photo symbolises a combination of art, beauty and colours.', '1605388351957_458438615.jpg', 'thumbnail-1605388351957_458438615.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Ethereal Photography Experiment', 'When photographers and creatives do things on their own time, the results are usually amazing and unforgettable. This photoshoot called “Ethereal” uses textures with pastel colors as fabric over floating beings. The goal is to respresent the objects beautifully surreal and perfectly pastel.', '1605388300201_496211660.jpg', 'thumbnail-1605388300201_496211660.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Tennis Flavoured Ice Cream', 'An interesting composition, combining pastel colours, creativeness and trends. A different approach, which doesnt always have to be seen - sometimes it has to be felt.', '1605388474045_017587312.jpg', 'thumbnail-1605388474045_017587312.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Blue Staircase', 'Anything can be build, to provoke a feeling, spreading warmth and joy. This colorful composition is not your ordinary gray wall/staircase.', '1605388500787_881754092.jpg', 'thumbnail-1605388500787_881754092.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('To Be Free', 'This photo aims to take you out of the busy life of the city, in the mountains or field...can you feel the fresh air and smell of flowers?', '1605388756836_176722665.jpg', 'thumbnail-1605388756836_176722665.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Urban World', 'An everyday urban setting with a mix of pastel colours and shadows.', '1605388803732_132115838.jpg', 'thumbnail-1605388803732_132115838.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('N I C E', 'A composition of colours, presented by everybodys favourite snack.', '1605388838220_797742017.jpg', 'thumbnail-1605388838220_797742017.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Keeper', 'I stumbled upon this view on my trip in India, the guy was happy to pose for the shot, so I decided to name it in his honour.', '1605388873716_260566083.jpg', 'thumbnail-1605388873716_260566083.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Colourful Kingdom', 'A shot I took a few blocks away from my home in the United Kingdom.', '1605388889452_402252761.jpg', 'thumbnail-1605388889452_402252761.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Other Side', 'A bit of surrealism, architecture and pastel colours are the things that inspired the idea behind this shot.', '1605388902828_285542765.jpg', 'thumbnail-1605388902828_285542765.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Blue Sky Pink City', 'Turned this ordinary shot of an urban scene to a composition of bright pastel colours.', '1605388927780_133008867.jpg', 'thumbnail-1605388927780_133008867.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Pink Apple', 'An ordinary busy seen from the Big Apple, turned into something more colourful and cheerful with the help of pastel colours.', '1605388943891_979323998.jpg', 'thumbnail-1605388943891_979323998.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '12', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Vintage Saturday', 'Composition of vintage media cassettes, combined with bright and touching colours to remind you of "those" Saturday nights.', '1605388958557_074717191.jpg', 'thumbnail-1605388958557_074717191.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '13', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('ARTchitecture', 'An amazing place, that looks like out of a fairy tale I stumbled upon, while I was backpacking Europe.', '1605389026275_797370522.jpg', 'thumbnail-1605389026275_797370522.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '14', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Watcher', 'Took this shot the last day, before coming home from my trip.', '1605389047492_065627341.jpg', 'thumbnail-1605389047492_065627341.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '15', '1');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Colourful World', 'I think it is amazing what a pinch of pastel colours and nice light can do to an, otherwise ordinary photo...what about you?', '1605389063931_517203878.jpg', 'thumbnail-1605389063931_517203878.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '16', '1');


-- Portrait photos
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Always Red', 'Met this girl in USA.', '1605444607192_596898510.jpg', 'thumbnail-1605444607192_596898510.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Sunset Smile', 'A girl portrait in the nature.', '1605445337395_505461214.jpg', 'thumbnail-1605445337395_505461214.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pink Mirror', 'I like mirror sunglases and his are very nice.', '1605445431171_493914798.jpg', 'thumbnail-1605445431171_493914798.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Hey, You!', 'Met this guy in Italy.', '1605445529460_804892572.jpg', 'thumbnail-1605445529460_804892572.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Yellow Shades', 'This is my best friend. I love yellow and all the shades of it.', '1605445653507_539674963.jpg', 'thumbnail-1605445653507_539674963.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Black And White', 'This is my gorgeous mother.', '1605445840115_958389643.jpg', 'thumbnail-1605445840115_958389643.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Curiosity', 'I like way she looks.', '1605445929450_094869041.jpg', 'thumbnail-1605445929450_094869041.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('White And Blue', 'Took this shot the last day, before coming home from my trip in Russia.', '1605446012330_918548361.jpg', 'thumbnail-1605446012330_918548361.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('These Eyes', 'Look at these eyes... speachless!.', '1605445840115_958389643.jpg', 'thumbnail-1605445840115_958389643.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Hidden Smile', 'This is my favourite model.', '1605446164700_409820102.jpg', 'thumbnail-1605446164700_409820102.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Winter Green', 'I love green eyes, look at hers!', '1605446204233_473805596.jpg', 'thumbnail-1605446204233_473805596.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Woman', 'Look at this nature beauty..', '1605446271513_795275967.jpg', 'thumbnail-1605446271513_795275967.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '12', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Christmas mood', 'This photo makes me smile.', '1605446321059_730460344.jpg', 'thumbnail-1605446321059_730460344.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '13', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Autumn mood', 'I love all these colors..', '1605446529406_636736705.jpg', 'thumbnail-1605446529406_636736705.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '14', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Natural Beauty', 'Love the brightness in this photo.', '1605446573497_260305424.jpg', 'thumbnail-1605446573497_260305424.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '15', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Autumn colors', 'Love the brightness in this photo.', '1605446682019_315981582.jpg', 'thumbnail-1605446682019_315981582.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '16', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Georgous eyes', 'These eyes.. gorgeous.', '1605446724772_017497908.jpg', 'thumbnail-1605446724772_017497908.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '17', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Natural beauty', 'Look at this Ukrainian girl..', '1605446785617_833044469.jpg', 'thumbnail-1605446785617_833044469.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '18', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Candy girl', 'Took this shot in Russia last year.', '1605446828093_301814822.jpg', 'thumbnail-1605446828093_301814822.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '19', '2');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The eyewink', 'So serious...', '1605446936986_427621873.jpg', 'thumbnail-1605446936986_427621873.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '19', '2');


-- Food photos
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Breakfast', 'Took this shot in USA last summer.', '1605451476415_943894209.jpg', 'thumbnail-1605451476415_943894209.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Fresh Vegetables', 'I love fresh natural vegies.', '1605451522479_600427238.jpg', 'thumbnail-1605451522479_600427238.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Grilled Meat', 'Took this shot at a famous German restaurant last winter..', '1605451607975_618706497.jpg', 'thumbnail-1605451607975_618706497.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Cheeseburger', 'My favourite food..', '1605451644551_472055423.jpg', 'thumbnail-1605451644551_472055423.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Fresh Citrus', 'I love fresh natural citrus.', '1605451699027_183014022.jpg', 'thumbnail-1605451699027_183014022.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pumpkin Soup', 'Took this shot at a famous French restaurant last spring. The most delicious soup I have ever tried.', '1605451729492_315068992.jpg', 'thumbnail-1605451729492_315068992.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Appetisers', 'Took this shot at a wedding party.', '1605451758725_534989278.jpg', 'thumbnail-1605451758725_534989278.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Appetisers', 'Took this shot at a wedding party.', '1605451791454_519524777.jpg', 'thumbnail-1605451791454_519524777.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pancakes', 'My favourite ones.', '1605451844480_346639321.jpg', 'thumbnail-1605451844480_346639321.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Italian Pizza', 'Took this shot in Milan last summer.', '1605451879972_842960241.jpg', 'thumbnail-1605451879972_842960241.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pancakes', 'Do you like Maple syrop?.', '1605451903861_019501628.jpg', 'thumbnail-1605451903861_019501628.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Brownie', 'My chocolate passion.', '1605451940406_606020630.jpg', 'thumbnail-1605451940406_606020630.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '12', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Red passion', 'Took this shot in Russia last week.', '1605451988776_138946242.jpg', 'thumbnail-1605451988776_138946242.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '13', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Italian Pasta', 'Took this shot in Rome in 2019.', '1605452013380_446034942.jpg', 'thumbnail-1605452013380_446034942.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '14', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Chocolate Passion', 'I love chocolate.', '1605452076436_394360193.jpg', 'thumbnail-1605452076436_394360193.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '15', '3');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Fresh Plums', 'Look at these colors..', '1605452156278_004707585.jpg', 'thumbnail-1605452156278_004707585.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '16', '3');

-- Animals
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Deer', 'Took this shot in Africa last summer.', '1605508813493_014037369.jpg', 'thumbnail-1605508813493_014037369.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Tiger', 'Took this shot in Africa in 2019.', '1605508954705_015333822.jpg', 'thumbnail-1605508954705_015333822.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Gorgeous Horse', "It is my best friend's horse.", '1605509018674_795047669.jpg', 'thumbnail-1605509018674_795047669.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Sweet Baby Cats', 'My best friend has a cat and these little ones are its babies.', '1605509170504_881851627.jpg', 'thumbnail-1605509170504_881851627.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Elephant', 'Took this shot in Africa last summer.', '1605509327233_073333454.jpg', 'thumbnail-1605509327233_073333454.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Peacock', 'Took this shot in Sofia Zoo this summer.', '1605509380636_143388086.jpg', 'thumbnail-1605509380636_143388086.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Zebras', 'Took this shot in USA last summer.', '1605509562496_151501444.jpg', 'thumbnail-1605509562496_151501444.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('My Dog', 'This is my pet. I love it', '1605509606903_935530714.jpg', 'thumbnail-1605509606903_935530714.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Husky', "This is my best friend's dog.", '1605509496354_475452552.jpg', 'thumbnail-1605509496354_475452552.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Butterflies', 'Took this shot on my way home after work.', '1605509807600_061918022.jpg', 'thumbnail-1605509807600_061918022.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Parrot', 'My gorgeous parrot.', '1605509890928_783210342.jpg', 'thumbnail-1605509890928_783210342.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Squirrel', 'Took this shot in Sofia Zoo 2 years ago.', '1605509992112_893293658.jpg', 'thumbnail-1605509992112_893293658.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '12', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('My sweet kitty', 'I am in love with its eyes.', '1605510185503_149404347.jpg', 'thumbnail-1605510185503_149404347.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '13', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Bees', 'My parents have 50 beehives and I took this picture in their place.', '1605510584779_846604972.jpg', 'thumbnail-1605510584779_846604972.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '14', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Bear', 'Took this shot in Africa last summer.', '1605510679462_318933342.jpg', 'thumbnail-1605510679462_318933342.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '15', '4');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Rabbits', "Took this shot at my uncle's farm.", '1605513950324_259169069.jpg', 'thumbnail-1605513950324_259169069.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '16', '4');

-- Landscapes
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Snow Peak', 'Taking winter photos is my passion', '1605562604131_825551367.jpg', 'thumbnail-1605562604131_825551367.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Green River', 'I am in love with all these colours', '1605562699110_161782880.jpg', 'thumbnail-1605562699110_161782880.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Rila Mountain', 'Rila Mountains is simply gorgeous!', '1605562760547_020157854.jpg', 'thumbnail-1605562760547_020157854.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Autumn View', 'Yellow is my favorite colour', '1605562959145_996615750.jpg', 'thumbnail-1605562959145_996615750.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Rila Mountain', 'The sky looks amazing..', '1605563055702_198847153.jpg', 'thumbnail-1605563055702_198847153.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Alps', 'Took this shot the last day, before coming home from my trip.', '1605563106666_149206206.jpg', 'thumbnail-1605563106666_149206206.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Golden Nature', 'Gorgeous nature. Took this shot on my way home after work.', '1605563141860_464937846.jpg', 'thumbnail-1605563141860_464937846.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Caucasus Mountains', 'The best shot I have ever taken.', '1605563183423_553319920.jpg', 'thumbnail-1605563183423_553319920.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pirin Mountain', 'One of the best places I have ever seen.', '1605563296737_782393160.jpg', 'thumbnail-1605563296737_782393160.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Golden Dobrudzha', 'Took this shot the last day, before coming home from my trip to Varna.', '1605563336849_123526140.jpg', 'thumbnail-1605563336849_123526140.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Caucasus Mountains', 'Gorgeous mountains.', '1605563385637_109215853.jpg', 'thumbnail-1605563385637_109215853.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Blue and Yellow', 'Amazing natute.', '1605563462268_529332721.jpg', 'thumbnail-1605563462268_529332721.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '12', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Spring is Coming', 'In love with this green color.', '1605563525761_788805172.jpg', 'thumbnail-1605563525761_788805172.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '13', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('New Beginning', 'Took this shot in April and it is my favorite one.', '1605563629555_249003210.jpg', 'thumbnail-1605563629555_249003210.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '14', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Purple Touch', 'Look at this beauty...incredible purple touch.', '1605563671772_756980693.jpg', 'thumbnail-1605563671772_756980693.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '15', '5');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Winter Landscape', 'Amazing nature...', '1605563740266_777096302.jpg', 'thumbnail-1605563740266_777096302.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '16', '5');


-- Flowers
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pink Carnation Flowers', 'In love with this photo.', '1605624459509_737047039.jpg', 'thumbnail-1605624459509_737047039.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Chrysanthemum', 'This is my favorite flower.', '1605624533895_577123297.jpg', 'thumbnail-1605624533895_577123297.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pink Tulip Flowers Plantation', 'Took this shot in The Netherlands', '1605624595314_962483094.jpg', 'thumbnail-1605624595314_962483094.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pink Magnolia Branch', 'In love with this photo.', '1605624802818_812724439.jpg', 'thumbnail-1605624802818_812724439.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('A Red Rose', 'In love with this photo.', '1605629812760_228727386.jpg', 'thumbnail-1605629812760_228727386.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Yellow Chinese Rose', "This is my mother's favorite color.", '1605629890805_233402349.jpg', 'thumbnail-1605629890805_233402349.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Cherry Blossom', 'I love all spring colors.', '1605630004004_916693318.jpg', 'thumbnail-1605630004004_916693318.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Chamomile', 'An amazing flower.', '1605630142867_170715162.jpg', 'thumbnail-1605630142867_170715162.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('White Calla', 'My favorite flower.', '1605630275000_340609423.jpg', 'thumbnail-1605630275000_340609423.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Lily', 'Took this shot in Italy last year.', '1605630449738_953895625.jpg', 'thumbnail-1605630449738_953895625.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Water Lily', 'Took this shot in Varna this summer.', '1605630519515_393267677.jpg', 'thumbnail-1605630519515_393267677.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '6');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Purple Tulips', 'Took this shot in The Netherlands', '1605631148870_864587810.jpg', 'thumbnail-1605631148870_864587810.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '14', '6');


-- Black and White photos
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pure Love', 'My lovely grandparents.', '1605713279531_760738472.jpg', 'thumbnail-1605713279531_760738472.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('New York', 'Took this shot last year in New York.', '1605713332312_003489156.jpg', 'thumbnail-1605713332312_003489156.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Art Building', 'Took this shot last year in Manhattan.', '1605713362198_559871055.jpg', 'thumbnail-1605713362198_559871055.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Camera', "My grandfather's first camera.", '1605716744236_881389546.jpg', 'thumbnail-1605716744236_881389546.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
("Daddy's Love", 'My best friend and his newborn baby.', '1605716786793_908865992.jpg', 'thumbnail-1605716786793_908865992.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Girl Power', 'My strong sister. I like taking photos of her.', '1605716827720_657665208.jpg', 'thumbnail-1605716827720_657665208.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('True Love', "Took this photo when my best friend's boyfriend proposed to her.", '1605716859127_445626983.jpg', 'thumbnail-1605716859127_445626983.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('To The Top', 'In love with this photo.', '1605716907125_774324923.jpg', 'thumbnail-1605716907125_774324923.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Brooklyn Bridge', 'Took this photo the last day before my coming home from USA.', '1605716974032_072757204.jpg', 'thumbnail-1605716974032_072757204.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Time Flies', 'Took this photo the last day before my coming home from Switzerland.', '1605717007359_567196051.jpg', 'thumbnail-1605717007359_567196051.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('NYC Bird Eye View', 'Took this photo from Rockefeller Center rooftop.', '1605717085295_358623731.jpg', 'thumbnail-1605717085295_358623731.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '7');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Endless', 'Took this photo the last day before my coming home from Varna.', '1605717132918_296702201.jpg', 'thumbnail-1605717132918_296702201.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '12', '7');

-- Cold and Blue 
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Winter', 'Took this shot last winter.', '1606774971089_448357216.jpeg', 'thumbnail-1606774971089_448357216.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '8');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Winter Story', 'Took this shot last winter.', '1606775008633_433727106.jpeg', 'thumbnail-1606775008633_433727106.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '8');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Ice Cold', 'Took this shot last winter.', '1606775059279_107414337.jpeg', 'thumbnail-1606775059279_107414337.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '8');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Cold Blue', 'Took this shot last winter.', '1606775084797_056710527.jpeg', 'thumbnail-1606775084797_056710527.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '8');

-- Cars
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Lamborghini', 'Took this shot in USA last summer.', '1605971924957_985714027.jpg', 'thumbnail-1605971924957_985714027.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('BMW', 'My favorite car.', '1605972366694_573872307.jpg', 'thumbnail-1605972366694_573872307.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Audi', "My best friend's new car.", '1605972403655_997854836.jpg', 'thumbnail-1605972403655_997854836.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Audi', 'My favorite car.', '1605972462057_334665980.jpg', 'thumbnail-1605972462057_334665980.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('BMW', 'Took this shot in Sofia last week.', '1605972729863_320418523.jpg', 'thumbnail-1605972729863_320418523.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Mercedes', "My sister's car", '1605972786656_141648078.jpg', 'thumbnail-1605972786656_141648078.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Ford Raptor',  'Took this shot in Nantucket last summer.', '1605972864379_968672572.jpg', 'thumbnail-1605972864379_968672572.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Honda', 'Amazing colors.', '1605972925696_934426767.jpg', 'thumbnail-1605972925696_934426767.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Ferrari', 'Just an amazing sport car.', '1605973046760_416103736.jpg', 'thumbnail-1605973046760_416103736.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Jaguar',  'Amazing car!', '1605973081490_061133216.jpg', 'thumbnail-1605973081490_061133216.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('BMW', "Took this shot last year.", '1605973125903_690657351.jpg', 'thumbnail-1605973125903_690657351.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '9');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Mercedes', 'Amazing car!', '1605973163643_021843391.jpg', 'thumbnail-1605973163643_021843391.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '12', '9');

-- Fashion 
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Yellow Passion', 'In love witk her style.', '1606774487581_277394510.jpeg', 'thumbnail-1606774487581_277394510.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '10');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Autumn Style', 'In love witk her style.', '1606774529297_824310850.jpeg', 'thumbnail-1606774529297_824310850.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '10');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Rainbow', 'In love witk her style.', '1606774562325_177705739.jpeg', 'thumbnail-1606774562325_177705739.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '10');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('P I N K', 'In love witk her style.', '1606774604295_889880521.jpeg', 'thumbnail-1606774604295_889880521.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '10');

-- Sport 
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Beach Volleyball', 'Took this shot this summer.', '1606807352861_080396105.jpeg', 'thumbnail-1606807352861_080396105.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '11');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Basketball', "Took this shot at my son's school", '1606807471141_467147202.jpeg', 'thumbnail-1606807471141_467147202.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '11');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Dad and Son', 'My best friend and his son', '1606807576990_346714954.jpeg', 'thumbnail-1606807576990_346714954.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '11');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Swimming', 'My best friend at the competition.', '1606807630374_308027795.jpeg', 'thumbnail-1606807630374_308027795.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '11');

-- Interior 
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Modern', 'Love this flat.', '1606773801757_072631252.jpeg', 'thumbnail-1606773801757_072631252.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '12');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Lovely', 'Love this flat.', '1606773991178_004400414.jpeg', 'thumbnail-1606773991178_004400414.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '12');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Blue and Yellow', 'Love this flat.', '1606774030632_773319410.jpeg', 'thumbnail-1606774030632_773319410.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '12');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Modern', 'Love this flat.', '1606774062035_294616489.jpeg', 'thumbnail-1606774062035_294616489.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '12');

-- Diamonds
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('White Diamonds', 'Sparkling beauty.', '1606775571306_444736528.jpeg', 'thumbnail-1606775571306_444736528.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '13');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pink Diamond', 'Sparkling beauty.', '1606775616881_955336634.jpeg', 'thumbnail-1606775616881_955336634.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '13');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Yellow Diamond', 'Sparkling beauty.', '1606775652808_477337500.jpeg', 'thumbnail-1606775652808_477337500.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '13');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Blue Diamond', 'Sparkling beauty.', '1606775689357_374442544.jpeg', 'thumbnail-1606775689357_374442544.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '13');

-- Waterfalls
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Smolyan Waterfalls', 'Took this shot in September.', '1606776225367_522853593.jpeg', 'thumbnail-1606776225367_522853593.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '14');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Krushuna Waterfalls', 'Took this shot last summer.', '1606776277352_062595305.jpeg', 'thumbnail-1606776277352_062595305.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '14');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Smolyan Waterfalls', 'Amazing photo, love it!', '1606776319825_183872031.jpeg', 'thumbnail-1606776319825_183872031.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '14');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Krushuna Waterfalls', 'Amazing nature.', '1606776187889_941209649.jpeg', 'thumbnail-1606776187889_941209649.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '14');

-- Jewelries
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Diamond Ring', "My best friend's diamond ring.", '1606806654351_458664511.jpeg', 'thumbnail-1606806654351_458664511.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '15');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('White and Yellow Gold', 'Two kinds of gold.', '1606806703626_560881952.jpeg', 'thumbnail-1606806703626_560881952.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '15');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Diamond Rings', "My best friend's diamond ring.Love them.", '1606806740687_775284489.jpeg', 'thumbnail-1606806740687_775284489.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '15');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Massive Gold', 'Massive gold jewelries.', '1606806772327_794410237.jpeg', 'thumbnail-1606806772327_794410237.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '15');

-- Arhitecture
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Petronas Twin Towers', 'Standing at 170 meters above ground, the Petronas Towers are twin skyscrapers in Kuala Lumpur, Malaysia', '1605810285043_072054800.jpg', 'thumbnail-1605810285043_072054800.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The White House', 'Irish architect James Hoban was the man behind the design of the White House.', '1605810814723_768000584.jpg', 'thumbnail-1605810814723_768000584.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Leading Tower Of Pisa', 'The Leaning Tower of Pisa is one of the most remarkable architectural structures in Europe.', '1605810846952_518186034.jpg', 'thumbnail-1605810846952_518186034.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
("Lloyd's building", 'This futuristic building looks like it belongs in a sci-fi movie rather than Lime Street in London.', '1605810899357_341449848.jpg', 'thumbnail-1605810899357_341449848.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Sydney Opera House', 'Sydney Opera House is widely regarded as one of the greatest architectural works of the 20th century.', '1605810951190_100939874.jpg', 'thumbnail-1605810951190_100939874.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '5', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Space Needle', 'The futuristic Space Needle in Seattle, Washington was built for the 1962 World’s fair.', '1605811001294_511872297.jpg', 'thumbnail-1605811001294_511872297.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '6', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Hagia Sophia', 'Once a church, later a mosque, and now a museum, Hagia Sophia is an architectural masterpiece.', '1605811049077_929493747.jpg', 'thumbnail-1605811049077_929493747.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '7', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Guggenheim Museum Bilbao', 'The Guggenheim Museum Bilbao is one of the most admired works of contemporary architecture.', '1605811084177_171461348.jpg', 'thumbnail-1605811084177_171461348.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '8', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Colosseum', 'This elliptical amphitheater in the center of Rome is considered as one of the greatest architectural feats achieved by the Ancient Romans.', '1605811240170_570593157.jpg', 'thumbnail-1605811240170_570593157.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '9', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Taj Mahal', 'Recognised as ‘the jewel of Muslim art in India’, the Taj Mahal was built by Mughal Emperor Shah Jahan.', '1605811353286_983487854.jpg', 'thumbnail-1605811353286_983487854.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '10', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
("St. Basil's Cathedral", 'This garish, candy colored cathedral is, in fact, Moscow’s most visited tourist attraction.', '1605811408355_010429692.jpg', 'thumbnail-1605811408355_010429692.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '11', '16');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Empire State Building', 'We couldn’t put together a list of world-famous buildings without including this grand Art Deco skyscraper. ', '1605811463026_838669045.jpg', 'thumbnail-1605811463026_838669045.jpg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '12', '16');

-- Famous Landmarks
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Eiffel Tower', 'The Eiffel Tower is one of the most visited monuments in the world.', '1606836844802_319537023.jpeg', 'thumbnail-1606836844802_319537023.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '17');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Machu Picchu', 'The ancient Incan city of Machu Picchu sits perched on a mountaintop in the Andes Mountains at 8,047 feet above sea level.', '1606836881931_783714738.jpeg', 'thumbnail-1606836881931_783714738.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '17');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Great Wall of China', 'Built more than 2,300 years ago, The Great Wall of China is the longest wall in the world, measuring 13,170 miles in length.', '1606836913290_861676694.jpeg', 'thumbnail-1606836913290_861676694.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '17');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('The Statue of Liberty', 'Took this shot last summer in USA.', '1606836956612_418888243.jpeg', 'thumbnail-1606836956612_418888243.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '17');

-- Wedding details
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Wedding details', 'Took this shot in 2016.', '1606808386524_186699655.jpeg', 'thumbnail-1606808386524_186699655.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '18');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Wedding Rings', "My sister's wedding.", '1606808434911_261853923.jpeg', 'thumbnail-1606808434911_261853923.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '18');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pink Roses', "My best friend's wedding flowers.", '1606808473220_594472585.jpeg', 'thumbnail-1606808473220_594472585.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '18');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Gorgeous Bride', 'Took this shot in 2019.', '1606808506759_000902692.jpeg', 'thumbnail-1606808506759_000902692.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '18');

-- Snowboarding
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Snowboarding in Borovets', 'Took this shot last year at my favorite place', '1606843642621_923181967.jpeg', 'thumbnail-1606843642621_923181967.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '19');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Sun touch', 'The sun light is amazing.', '1606843674975_690026862.jpeg', 'thumbnail-1606843674975_690026862.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '19');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Snowboarding in Austria', 'Took this shot in Austria.', '1606843730119_623046504.jpeg', 'thumbnail-1606843730119_623046504.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '19');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('My passion', 'Took this shot last year in Germany.', '1606843770580_870494239.jpeg', 'thumbnail-1606843770580_870494239.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '19');

-- Sunset
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Lovely Sunset', 'Took this shot in USA last summer.', '1606839338710_762747987.jpeg', 'thumbnail-1606839338710_762747987.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '20');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Sunset view', 'Took this shot 2 years ago.', '1606839366409_246455997.png', 'thumbnail-1606839366409_246455997.png', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '20');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('When the sun comes down..', 'Took this shot in Nantucket last summer.', '1606839420240_019456802.jpeg', 'thumbnail-1606839420240_019456802.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '20');


INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Lovely touch', 'Took this shot in Miami. Love it!', '1606839448643_814542045.jpeg', 'thumbnail-1606839448643_814542045.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '20');
-- Vintage
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Vintage Car', "I'm in love with this type of photography. Took this shot 2 years ago but still love it.", '1606640554049_820709399.jpeg', 'thumbnail-1606640554049_820709399.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '21');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Pink Roses', 'An old camera which I have found last year in the cabinet.', '1606841208527_226011768.jpeg', 'thumbnail-1606841208527_226011768.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '21');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Paris Vintage Style', 'Took this shot in Paris.', '1606841356924_612521252.jpeg', 'thumbnail-1606841356924_612521252.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '21');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Cameras', 'Took this shot in Rotterdam', '1606841434247_136802787.jpeg', 'thumbnail-1606841434247_136802787.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '21');

-- Reflection 
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Town', 'I am in love with the colors in this photo.', '1606641243026_473698258.jpeg', 'thumbnail-1606641243026_473698258.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '22');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Flower Paper', 'Amazing photo, love it.', '1606840054612_381763909.jpeg', 'thumbnail-1606840054612_381763909.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '22');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Buildings in the mirror', 'Took this shot in USA last summer.', '1606840084196_566488085.jpeg', 'thumbnail-1606840084196_566488085.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '22');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Magic Ball', 'Took this shot this summer at Black Sea.', '1606840112848_163214981.jpeg', 'thumbnail-1606840112848_163214981.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '22');


-- Lighthouses
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Sankaty Lighthouse', 'Took this shot in Nantucket, USA, last summer.', '1606643015386_892525775.jpeg', 'thumbnail-1606643015386_892525775.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '23');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Lighthouse at Midnight', 'Lovely view.', '1606838777909_595545679.jpeg', 'thumbnail-1606838777909_595545679.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '23');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('New Zealand Lighthouse', 'Took this shot 3 years ago.', '1606838843770_614449972.jpeg', 'thumbnail-1606838843770_614449972.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '23');

INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Brand Point Lighthouse', 'Took this shot last summer in Nantucket.', '1606838888068_582623744.jpeg', 'thumbnail-1606838888068_582623744.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '23');


-- Christmas time 
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Presents', "Took this last year. These are my children's Christmas presents", '1606644022413_003731016.jpeg', 'thumbnail-1606644022413_003731016.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '1', '24');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('White And Red', 'Took this shot in December last year.', '1606838415250_416762458.jpeg', 'thumbnail-1606838415250_416762458.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '2', '24');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Christmas Balls', 'My Christmas decoration.', '1606838452838_488658228.jpeg', 'thumbnail-1606838452838_488658228.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '3', '24');
INSERT INTO `photo_contest_db`.`photos`
(`title`, `story`, `originalSize`, `thumbnailSize`, `date`, `user_id`, `contest_id`)
VALUES
('Golden Christmas', 'In love with this colors.', '1606838483108_830171556.jpeg', 'thumbnail-1606838483108_830171556.jpeg', (SELECT DATE_FORMAT((SELECT NOW()),'%Y/%m/%d')), '4', '24');

-- Reviews
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '1');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '22', '1');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '22', '1');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'I love this photo!', '24', '1');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '25', '1');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Not bad!', '21', '2');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '22', '2');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '2');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '2');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'My favourite photo!', '25', '2');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '21', '3');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Good photo!', '22', '3');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice nice, keep up the good work!', '23', '3');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo, I want to have it!', '24', '3');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'I like it!', '25', '3');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '4');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '4');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '4');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '4');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '4');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '5');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '5');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Average!', '23', '5');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very nice photo!', '24', '5');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '5');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '6');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Average!', '22', '6');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('3', 'Doesnt really fit this category!', '23', '6');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Nice photo!', '24', '6');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '6');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('2', 'Need more light!', '21', '7');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('3', 'Needs more work!', '22', '7');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Average!', '23', '7');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Nice photo!', '24', '7');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Good job!', '25', '7');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'I want to have this photo!', '21', '8');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '22', '8');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very nice photo!', '23', '8');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'I love this photo!', '24', '8');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '25', '8');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Not bad!', '21', '9');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '22', '9');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '9');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Amazing photo!', '24', '9');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'My favourite photo!', '25', '9');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '21', '10');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Good photo!', '22', '10');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice nice, keep up the good work!', '23', '10');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo, I want to have it!', '24', '10');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'I like it!', '25', '10');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '11');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '11');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Nice photo!', '23', '11');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '11');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '11');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '12');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Above average!', '22', '12');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Average!', '23', '12');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Very nice photo!', '24', '12');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '12');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '13');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Average!', '22', '13');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('3', 'Doesnt really fit this category!', '23', '13');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '24', '13');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '13');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('2', 'Need more light!', '21', '14');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('3', 'Needs more work!', '22', '14');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Average!', '23', '14');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Nice photo!', '24', '14');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Good job!', '25', '14');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Almost perfect!', '21', '15');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Nice photo!', '22', '15');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very nice!', '23', '15');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Above average', '24', '15');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Good job!', '25', '15');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Need more colors!', '21', '16');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Nice work!', '22', '16');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Average!', '23', '16');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Nice photo!', '24', '16');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very good job!', '25', '16');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '17');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Above average!', '22', '17');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Nice photo!', '23', '17');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '24', '17');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Not bad!', '25', '17');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '18');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Above average!', '22', '18');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Nice photo!', '23', '18');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '18');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '18');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '19');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '19');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Nice photo!', '23', '19');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '19');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Not bad!', '25', '19');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '20');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '20');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Nice photo!', '23', '20');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '20');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Not bad!', '25', '20');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '21');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Above average!', '22', '21');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '21');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '21');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Not bad!', '25', '21');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '22');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '22');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '22');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '22');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '22');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '23');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '23');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Nice photo!', '23', '23');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '24');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '24');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '25');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '25');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '25');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Amazing photo!', '24', '25');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '25');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '26');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '26');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Nice photo!', '23', '26');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '26');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '26');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '27');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Above average!', '22', '27');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Nice photo!', '23', '27');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '24', '27');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '27');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '28');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Above average!', '22', '28');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Nice photo!', '23', '28');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '28');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '28');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '29');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Above average!', '22', '29');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Nice photo!', '23', '29');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '24', '29');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '29');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '30');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Above average!', '22', '30');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '30');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Amazing photo!', '24', '30');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '30');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '31');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '31');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '31');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Amazing photo!', '24', '31');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not bad!', '25', '31');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '32');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '32');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '32');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '24', '32');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '32');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Not the worst!', '21', '33');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '33');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '33');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '33');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Not bad!', '25', '33');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '34');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '34');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Nice photo!', '23', '34');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '34');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not bad!', '25', '34');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Not the worst!', '21', '35');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '35');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '35');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Amazing photo!', '24', '35');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Not bad!', '25', '35');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not the worst!', '21', '36');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '36');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Nice photo!', '23', '36');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '36');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not bad!', '25', '36');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '53');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Above average!', '22', '53');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '53');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '53');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Not bad!', '25', '53');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '54');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '54');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '54');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '54');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '54');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '55');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '55');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '55');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '55');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not bad!', '25', '55');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '56');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '56');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '56');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '56');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '56');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '57');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '57');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '57');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '57');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '57');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Not the worst!', '21', '58');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '58');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '58');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '58');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Not bad!', '25', '58');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '59');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '59');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '59');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '59');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '59');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not the worst!', '21', '60');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '60');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Nice photo!', '23', '60');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '60');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '60');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '61');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '61');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '61');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '61');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '61');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '62');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '62');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '62');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '62');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not bad!', '25', '62');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '63');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '63');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Nice photo!', '23', '63');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '63');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '63');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '64');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Above average!', '22', '64');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('1', 'Nice photo!', '23', '64');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '64');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '64');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not the worst!', '21', '65');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '65');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Nice photo!', '23', '65');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '65');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '65');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not the worst!', '21', '66');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '66');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '66');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '66');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not bad!', '25', '66');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not the worst!', '21', '67');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '67');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '67');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '67');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '67');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '68');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '68');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '68');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '68');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Not bad!', '25', '68');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '85');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '85');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '85');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '85');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Not bad!', '25', '85');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '86');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '86');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '86');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '86');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Not bad!', '25', '86');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '87');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '87');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '87');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '87');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '87');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '88');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '88');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '88');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '88');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '88');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '89');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '89');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '89');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '89');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '89');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '90');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '90');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '90');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '90');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Not bad!', '25', '90');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '91');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '91');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '91');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '91');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '91');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '92');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '92');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '92');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '92');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '92');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Not the worst!', '21', '93');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '93');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '93');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '93');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '93');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Not the worst!', '21', '94');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Above average!', '22', '94');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '94');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '94');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '94');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '95');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '95');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '95');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '95');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '95');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '96');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '96');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '96');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Amazing photo!', '24', '96');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '96');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '101');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '22', '101');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Very nice photo!', '23', '101');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'I love this photo!', '24', '101');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Amazing photo!', '25', '101');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Very nice photo!', '21', '17');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very nice photo!', '22', '17');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing!', '21', '56');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Amazing!', '22', '90');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '177');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '177');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '177');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Amazing photo!', '24', '177');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '177');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '178');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '22', '178');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Very nice photo!', '23', '178');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'I love this photo!', '24', '178');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '25', '178');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '179');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '179');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '179');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Amazing photo!', '24', '179');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '179');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '180');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '22', '180');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Very nice photo!', '23', '180');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'I love this photo!', '24', '180');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '25', '180');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '181');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '181');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Nice photo!', '23', '181');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Amazing photo!', '24', '181');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Not bad!', '25', '181');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '182');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'Amazing photo!', '22', '182');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very nice photo!', '23', '182');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'I love this photo!', '24', '182');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '25', '182');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '183');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '183');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Nice photo!', '23', '183');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '183');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Not bad!', '25', '183');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '184');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '22', '184');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Very nice photo!', '23', '184');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'I love this photo!', '24', '184');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '25', '184');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '185');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Above average!', '22', '185');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Nice photo!', '23', '185');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '185');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not bad!', '25', '185');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '186');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('3', 'Amazing photo!', '22', '186');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very nice photo!', '23', '186');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'I love this photo!', '24', '186');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '25', '186');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('3', 'Not the worst!', '21', '187');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '187');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Nice photo!', '23', '187');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '187');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('5', 'Not bad!', '25', '187');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '188');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '22', '188');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very nice photo!', '23', '188');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'I love this photo!', '24', '188');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '25', '188');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Not the worst!', '21', '189');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Above average!', '22', '189');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Nice photo!', '23', '189');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '24', '189');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Not bad!', '25', '189');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('10', 'Amazing photo!', '21', '190');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('4', 'Amazing photo!', '22', '190');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Very nice photo!', '23', '190');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'I love this photo!', '24', '190');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '25', '190');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '21', '191');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'Amazing photo!', '22', '191');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Very nice photo!', '23', '191');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('6', 'I love this photo!', '24', '191');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '25', '191');

INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '21', '192');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Amazing photo!', '22', '192');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('7', 'Very nice photo!', '23', '192');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('8', 'I love this photo!', '24', '192');
INSERT INTO `photo_contest_db`.`reviews` (`score`, `comment`, `user_id`, `photo_id`) VALUES ('9', 'Amazing photo!', '25', '192');


-- add organizers as jury to contests
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('1', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('1', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('1', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('1', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('1', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('2', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('2', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('2', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('2', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('2', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('3', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('3', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('3', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('3', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('3', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('4', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('4', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('4', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('4', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('4', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('5', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('5', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('5', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('5', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('5', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('6', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('6', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('6', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('6', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('6', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('7', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('7', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('7', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('7', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('7', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('8', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('8', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('8', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('8', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('8', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('9', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('9', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('9', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('9', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('9', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('10', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('10', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('10', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('10', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('10', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('11', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('11', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('11', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('11', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('11', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('12', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('12', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('12', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('12', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('12', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('13', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('13', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('13', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('13', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('13', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('14', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('14', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('14', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('14', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('14', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('15', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('15', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('15', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('15', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('15', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('16', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('16', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('16', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('16', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('16', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('17', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('17', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('17', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('17', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('17', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('18', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('18', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('18', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('18', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('18', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('19', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('19', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('19', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('19', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('19', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('20', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('20', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('20', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('20', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('20', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('21', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('21', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('21', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('21', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('21', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('22', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('22', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('22', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('22', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('22', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('23', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('23', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('23', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('23', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('23', '25');

INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('24', '21');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('24', '22');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('24', '23');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('24', '24');
INSERT INTO `photo_contest_db`.`contest_jury_invitations` (`contest_id`, `user_id`) VALUES ('24', '25');
