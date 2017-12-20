INSERT INTO user_data (uid, name, profilepic, position, company) VALUES (${uid},${name},${pic},${title},${company}) RETURNING *;
