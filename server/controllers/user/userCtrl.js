const getUser = (req, res) => {
  req.app
    .get('db')
    .getUserProfileInfo({ uid: req.params.id })
    .then(result => {
      res.json(result[0]);
    });
};

const getConnectLinks = (req, res) => {
  console.log(req.params);
  req.app
    .get('db')
    .connectLinkGet({ uid: req.params.uid })
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(console.log);
};

const addConnectLink = (req, res) => {
  req.app
    .get('db')
    .connectLinkAdd(req.body)
    .then(result => res.json(result));
};

const updateConnectLink = (req, res) => {
  req.app
    .get('db')
    .connectLinkEdit({ id: req.body.id, link: req.body.link })
    .then(result => res.json(result));
};

const deleteConnectLink = (req, res) => {
  req.app
    .get('db')
    .connectLinkDelete(req.params)
    .then(result => {
      req.app
        .get('db')
        .connectLinkGet({ uid: result[0].uid })
        .then(result => res.json(result));
      // return res.json(result);
    });
};

const saveFavorite = (req, res) => {
  req.app
    .get('db')
    .favoriteSave(req.body)
    .then(result => {
      res.json(result);
    });
};

const getFavorites = (req, res) => {
  req.app
    .get('db')
    .favoriteGet({ id: req.params.userid })
    .then(result => {
      return res.json(result);
    });
};

const checkSaved = (req, res) => {
  req.app
    .get('db')
    .favoriteCheckSaved(req.body)
    .then(result => {
      result.length ? res.json(true) : res.json(false);
    });
};

module.exports = {
  getUser,
  getConnectLinks,
  addConnectLink,
  updateConnectLink,
  deleteConnectLink,
  saveFavorite,
  getFavorites,
  checkSaved,
};
