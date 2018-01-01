INSERT INTO user_data (uid, name, profilepic, position, company) VALUES (${uid},${name},${pic},${title},${company});
INSERT INTO user_links (uid, servicename, link ) VALUES (${uid}, 'linkedin', ${url});

SELECT * FROM user_data ORDER BY id DESC limit 1;