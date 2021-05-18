-- CREATE TABLE artworks (
--   id SERIAL PRIMARY KEY NOT NULL,
--   author_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   title VARCHAR(255) NOT NULL,
--   img_link VARCHAR(255) NOT NULL,
--   project_link VARCHAR(255) NOT NULL,
--   descrip VARCHAR(255) NOT NULL,
--   for_sale BOOLEAN NOT NULL,
--   price INTEGER DEFAULT NULL
-- );


INSERT INTO artworks 
(author_id, title, img_link, project_link, descrip, for_sale, price) 
VALUES
(1, 'Adams Jungle Rails Marketplace', 'https://github.com/AdamHHart/Jungle_Rails', 'https://github.com/AdamHHart/Jungle_Rails/blob/master/public/docs/admin_products.png?raw=true', 'description a', true, 1000),
(2, 'splat', 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd5798ef4-f691-4873-8d55-89c76f5feac2.png?fit=scale-down&source=next&width=700', 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd5798ef4-f691-4873-8d55-89c76f5feac2.png?fit=scale-down&source=next&width=700', 'description b', false, 1000),
(1, 'Adams_Resume', 'http://www.adamhart.ca/', 'https://c8.alamy.com/comp/AGJR8K/adam-hart-davis-freelance-photographer-writer-broadcaster-and-television-AGJR8K.jpg', 'description c', false, 0),
(2, 'Flowers', 'https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg', 'https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg', 'description flowers', false, 0),
(6, 'Photography', 'https://www.riseupsurf.com/wp-content/uploads/DSC03330.jpg', 'https://www.riseupsurf.com/wp-content/uploads/DSC03330.jpg', 'description surf', false, 0),
(1, 'Game', 'https://miro.medium.com/max/1002/1*Tlq8iZ4-jp0NB13fuNIMNg.png', 'https://miro.medium.com/max/1002/1*Tlq8iZ4-jp0NB13fuNIMNg.png', 'description game', false, 0),
-- (1, 'Woodwork', , , 'description totem', true, 1000000),
(3, 'Photography', 'https://www.riseupsurf.com/wp-content/uploads/DSC03330.jpg', 'https://www.riseupsurf.com/wp-content/uploads/DSC03330.jpg', 'description surf', false, 0),
(4, 'Game', 'https://miro.medium.com/max/1002/1*Tlq8iZ4-jp0NB13fuNIMNg.png', 'https://miro.medium.com/max/1002/1*Tlq8iZ4-jp0NB13fuNIMNg.png', 'description game', false, 0),
(9, 'Into the Rockies','https://itsbiacaixeta.files.wordpress.com/2021/04/img-20210207-wa0026.jpg' ,'https://itsbiacaixeta.wordpress.com/', 'On the road again', true, 30),
(9, 'The Rockies', 'https://itsbiacaixeta.files.wordpress.com/2021/04/img_3896.jpg?w=1500', 'https://itsbiacaixeta.wordpress.com/', 'Earth''s pimples', true, 30),
(9, 'Somewhere off highway 1', 'https://itsbiacaixeta.files.wordpress.com/2021/04/img_2077.jpg?w=1366','https://itsbiacaixeta.wordpress.com/' , 'We found a spot to rest during the storm. Woke up to the beautiful scene. Somewhere, ON.', true, 30),
(9, 'The Falls', 'https://itsbiacaixeta.files.wordpress.com/2021/04/img_2576.jpg?w=1366', 'https://itsbiacaixeta.wordpress.com/', 'Niagra Falls, without the crowds.', true, 30),
(9, 'Meet the Locals', 'https://itsbiacaixeta.files.wordpress.com/2021/04/img_4113.jpg?w=2048', 'https://itsbiacaixeta.wordpress.com/', 'Cascade Mtn, AB', true, 30),
(9, 'Vacas!', 'https://itsbiacaixeta.files.wordpress.com/2021/04/img_3561.jpg?w=2046', 'https://itsbiacaixeta.wordpress.com/', 'Somewhere in Sask', true, 30),
(9, 'Toronto Fans', 'https://itsbiacaixeta.files.wordpress.com/2021/04/img_2327.jpg?w=2048', 'https://itsbiacaixeta.wordpress.com/', 'Toronto fans still waiting for a win..', true, 30),
(9, 'Parliament', 'https://itsbiacaixeta.files.wordpress.com/2021/04/img_2776.jpg?w=2048', 'https://itsbiacaixeta.wordpress.com/', 'Ottawa was so clean, it felt like a movie set.', true, 30),
(9, 'Somewhere', 'https://itsbiacaixeta.files.wordpress.com/2021/05/20201013_165021-1.jpg?strip=info&w=2000', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'Somewhere near Parallel 49', true, 30),
(9, 'Lago Louise', 'https://itsbiacaixeta.files.wordpress.com/2021/05/20201014_081910-1.jpg?strip=info&w=1836', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'A lake called Louise', true, 30),
(9, 'Rupidoops', 'https://itsbiacaixeta.files.wordpress.com/2021/05/hsjdh-1.jpg?strip=info&w=2000', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'Rupert in Cap River', true, 30),
(9, 'Macaos', 'https://itsbiacaixeta.files.wordpress.com/2021/05/wild-1-2.jpg?strip=info&w=2000', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'Macaos in Itu', true, 30),
(9, 'Design, Build, Send!', 'https://itsbiacaixeta.files.wordpress.com/2021/05/img_0055-1.jpg?strip=info&w=2000', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'After hours of building the perfect launch trajectory.', true, 30),
(9, 'Flow', 'https://itsbiacaixeta.files.wordpress.com/2021/05/img_9111-2.jpg?strip=info&w=2000', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'A lone fisherman in North Vancouver', true, 30),
(9, 'Panorama Ridge', 'https://itsbiacaixeta.files.wordpress.com/2021/05/img_4955-2.jpg?strip=info&w=2000', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'A long way from the parking lot.', true, 30),
(9, 'Solitude', 'https://itsbiacaixeta.files.wordpress.com/2021/05/b11-2-1.jpg?strip=info&w=1066', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'Alone in English Bay', true, 30),
(9, 'Perspective', 'https://itsbiacaixeta.files.wordpress.com/2021/05/img_610300004-2.jpg?strip=info&w=1568', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'Riding balloons in Brazil', true, 30),
(9, 'Canon Beach, OR', 'https://itsbiacaixeta.files.wordpress.com/2021/05/b9-2-1.jpg?strip=info&w=2000', 'https://itsbiacaixeta.wordpress.com/more-memories/', 'Out for a rip on a misty day on the pacific.', true, 30);

-- INSERT INTO artworks 
-- (author_id, title)
-- VALUES 
-- (1, 'sample');;