ALTER table users auto_increment = 1;
ALTER table ranks auto_increment = 1;
ALTER table roles auto_increment = 1;
ALTER table contest_phases auto_increment = 1;
ALTER table contests auto_increment = 1;
ALTER table contest_categories auto_increment = 1;
ALTER table photos auto_increment = 1;
ALTER table messages auto_increment = 1;
ALTER table reviews auto_increment = 1;
ALTER table contest_restrictions auto_increment = 1;

INSERT INTO `photo_contest_db`.`roles` (`type`) VALUES ('Photo Junkie');
INSERT INTO `photo_contest_db`.`roles` (`type`) VALUES ('Organizer');

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
-- pass: ASDF123!

INSERT INTO `photo_contest_db`.`contests` 
(`title`, `description`, `firstPhaseLimit`, `secondPhaseLimit`, `limit`, `contestCover`, `restrictions_id`, `phase_id`, `category_id`, `organizer_id`)
VALUES
('Pastel colours', 'Welcome to our Abstract Pastel Colours competition. When a fully saturated colour is diluted by white, it becomes a pastel colour. These shades are generally more delicate, so it’s better to photograph them in a softer, diffused light, to avoid making them look washed out. A carefully composed photo that uses pastel colours can have a gentle and unique quality to it. Photographer from all level are welcome to enter. During Phase 1 of the competition all applicants must submit their artwork. During Phase 2 our judges rate all photos by their relevance, quality and story. The winners are announced in the final Phase 3. This competition has a limit of 80 participants.',
(SELECT NOW() + INTERVAL 20 DAY), (SELECT NOW() + INTERVAL 20 HOUR), '80', 'pastel-colours-cover.jpg', '1', '1', '1', '1')


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











