const mongoose = require("mongoose");
const Profile = mongoose.model("glossary");


const profileRoutes = (app) => {
  app.get(`/api/profiles`, async (req, res) => {
    const profiles = await Profile.find();

    return res.status(200).send(profiles);
  });

  app.get('/api/trading-glossary', async (req, res) => {
    try {
      const tradingGlossary = await TradingGlossaryModel.find({});
      res.json(tradingGlossary);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.post(`/api/profile`, async (req, res) => {
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      error: false,
      profile,
    });
  });

  app.put(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = profileRoutes;
