const pool = require("../database/server");

const handleErrors = (res, error) => {
  console.error(error);
  res.status(500).json({ state: "error" });
};

const postController = {
  async getAll(req, res) {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM jogadores");
      res.json({ data: rows });
    } catch (error) {
      handleErrors(res, error);
    }
  },

  async getByCod(req, res) {
    try {
      const { cod } = req.params;
      const [rows, fields] = await pool.query("SELECT * FROM jogadores WHERE cod = ?", [cod]);
      res.json({ data: rows });
    } catch (error) {
      handleErrors(res, error);
    }
  },

  async create(req, res) {
    try {
      const { nome, habilidade } = req.body;
      const sql = "INSERT INTO jogadores (nome, habilidade) VALUES (?, ?)";
      const [rows, fields] = await pool.query(sql, [nome, habilidade]);
      res.json({ data: rows });
    } catch (error) {
      handleErrors(res, error);
    }
  },

  async update(req, res) {
    try {
      const { nome, habilidade } = req.body;
      const { cod } = req.params;
      const [rows, fields] = await pool.query("UPDATE jogadores SET nome = ?, habilidade = ? WHERE cod = ?" , [nome, habilidade, cod]);
      res.json({ data: rows });
    } catch (error) {
      handleErrors(res, error);
    }
  },

  async delete(req, res) {
    try {
      const { cod } = req.params;
      const [rows, fields] = await pool.query("DELETE FROM jogadores WHERE cod = ?", [cod]);
      res.json({ data: rows });
    } catch (error) {
      handleErrors(res, error);
    }
  },

  async getByNome(req, res) {
    try {
      const { nome } = req.params.nome;
      const [rows, fields] = await pool.query("SELECT * FROM jogadores WHERE nome = ?",  [nome]);
      res.json({ data: rows });
      
    } catch (error) {
      handleErrors(res, error);
    }
  },
  
};

module.exports = postController;