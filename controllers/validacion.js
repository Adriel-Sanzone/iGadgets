
import {connection} from '../database/connection.js';

export const getUsers = async (req, res) => {
  connection.query(
    'SELECT * FROM usuarios',
    function (err, results, fields) {
      if (err) 
      {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const UpdateAccessKey = async (req, res) => {
  const {id, clave_validacion} = req.body;
  connection.query(
    'UPDATE usuarios SET clave_validacion = ? WHERE id = ?',
    [clave_validacion, id],
    function (err, results, fields) {
      if (err) 
      {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        return res.json({
          "id": id,
          "msg": "Clave modificada correctamente",
        });
      }
    }
  );
};

export const getUser = async (req, res) => {
  const {id} = req.query;
  connection.query(
    'SELECT * FROM usuarios WHERE id = ?',
    [id],
    function (err, results, fields) {
      if (err) 
      {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};
