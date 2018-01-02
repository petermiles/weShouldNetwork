DELETE from user_links where id = ${id};
SELECT * FROM user_links WHERE uid = (SELECT uid FROM user_links WHERE id= ${id});