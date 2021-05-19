-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   username VARCHAR(255) NOT NULL,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   email VARCHAR(55) NOT NULL,
--   password VARCHAR(55) NOT NULL,
--   profile_pic VARCHAR(55) NOT NULL,
--   cool_fact VARCHAR(55) NOT NULL,
--   member_since DATE
-- );

-- INSERT USERS
INSERT INTO users 
(username, first_name, last_name, email, password, profile_pic, cool_fact)
VALUES
('Adamski','Adam','Hart',6042347884,'password', 'https://scontent.fyvr4-1.fna.fbcdn.net/v/t31.18172-8/901808_10203932040960588_8095558117763463006_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=LqTvOiXmUm8AX9aQ_LW&_nc_ht=scontent.fyvr4-1.fna&oh=7a5bb69adba0c87c5511a4d06e4d6988&oe=60C25F14', 'Food can be art!'),
('SeriusLL','James','B',6042555584,'password', 'https://ca.slack-edge.com/T2G8TE2E5-U01P0RMM547-daddce1971a8-512', 'Im a pirate!'),
('SunnyD','Sunny','D',6044444484,'password', 'https://ca.slack-edge.com/T2G8TE2E5-U01Q45EC85N-0d811cbe0e51-512', 'I write code'),
('JaneDoe','Jane','Doe',6049999999,'password', 'https://images.pexels.com/photos/1645823/pexels-photo-1645823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'I take pictures of nature, and I like the color green.'),
('SteveJohnson','Steve','Johnson',6049999999,'password', 'https://images.pexels.com/users/avatars/287172/steve-johnson-217.jpeg?auto=compress&fit=crop&h=256&w=256', 'Be kind and support the arts :)'),
('JennySurfs','Jen','Barrels',6049999999,'password', 'https://images.pexels.com/photos/4577736/pexels-photo-4577736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Life''s a wave. Don''t miss the ride!'),
('Bernini','Gian Lorenzo','Bernini',6049999999,'password', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gian_Lorenzo_Bernini%2C_self-portrait%2C_c1623.jpg/220px-Gian_Lorenzo_Bernini%2C_self-portrait%2C_c1623.jpg', 'But you have heard of me.'),
('TheChosenOne','Arry','Potter',6049999999,'password', 'https://images.pexels.com/photos/5682176/pexels-photo-5682176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'But you have heard of me.'),
('BiaCaixeta','Bia','Caixeta',6049999999,'password', 'https://itsbiacaixeta.files.wordpress.com/2021/05/img_1311.jpg?w=2048', 'From Itu, SP, Brazil to Vancouver, Canada. I''ll continue exploring nature until I''ve found the Sasquatch.'),
('Pacificspace','Gray','',6049999999,'password', 'https://pbs.twimg.com/profile_images/1370875222761480193/Qk1KwE5V_400x400.jpg', 'professional baja blast drinker 💦 (they/them)'),
('SamT','Sam','T',6049999999,'password', 'https://cdn.discordapp.com/attachments/816053793598341140/844351550188814366/20210221_174219.jpg', ''),
('ArtbyRobMack','Rob','Mach',6049999999,'password', 'https://cdn.discordapp.com/attachments/844327276493275166/844336664192090163/38011827_1842451815791993_7508032690914852864_n.png', 'Psychedelic Artist');
-- ('','','',6049999999,'password', '', ''),
-- ('','','',6049999999,'password', '', ''),
-- ('','','',6049999999,'password', '', ''),
-- ('')