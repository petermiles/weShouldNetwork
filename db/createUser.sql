INSERT INTO user_data (uid, name, position, company, email) VALUES (${uid},${name},${job},${location}, ${email}) RETURNING *;
