INSERT INTO user_favorites (userid, favoriteid) VALUES (${userUid}, ${profileUid});
SELECT * FROM user_favorites WHERE userid = ${userUid}