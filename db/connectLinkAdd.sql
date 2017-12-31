INSERT INTO user_links (servicename, link, uid) VALUES(${provider}, ${link}, ${uid});
SELECT * FROM user_links WHERE uid = ${uid};


