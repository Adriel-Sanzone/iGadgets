
import {connection} from '../database/connection.js';

export const getStock = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};
export const getTeclados = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto WHERE tipo_producto_id = 1',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const getMouses = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto WHERE tipo_producto_id = 2',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const getAuriculares = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto WHERE tipo_producto_id = 3',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const getMonitores = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto WHERE tipo_producto_id = 4',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const getAlmacenamientos = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto WHERE tipo_producto_id = 5',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const getHardwars = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto WHERE tipo_producto_id = 6',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const getImpresoras = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto WHERE tipo_producto_id = 7',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const getSillas = async (req, res) => {
  connection.query(
    'SELECT * FROM stock_producto WHERE tipo_producto_id = 8',
    function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
      } else {
        res.json(results);
      }
    }
  );
};

export const getProducto = async (req, res) => {
  const {id} = req.query;
  connection.query(
    'SELECT * FROM stock_producto WHERE id = ?',
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

export const saveStock = async (req, res) => {
  console.log(req.body);
  const {id, nombre_producto, marca_producto, precio, stock, tipo_producto_id} = req.body;

  //AGREGAR PRODUCTO
  if (id == null || id == undefined || id == 0) {
    connection.query(
      'INSERT INTO stock_producto (nombre_producto, marca_producto, precio, stock, tipo_producto_id) VALUES (?,?,?,?,?)',
      [nombre_producto, marca_producto, precio, stock, tipo_producto_id],
      function(err, results) {
        return res.json({
          "id": results.insertId,  //devuelve el ultimo registro de la tabla (ultimo id)
          "msg": "Producto agregado correctamente",
        });
      }    
    );
  } else{     //MODIFICAR CLIENTE EXISTENTE
      connection.query(
          'UPDATE stock_producto SET nombre_producto = ?, marca_producto = ?, precio = ?, stock = ?, tipo_producto_id = ? WHERE id = ?' ,
          [nombre_producto, marca_producto, precio, stock, tipo_producto_id, id],
          function(err, results) {
              return res.json({
                  "id": id,
                  "msg": "Producto modificado correctamente",
                });
          }
      );
  }
}; 

//ELIMINAR PRODUCTO
export const deleteStock = async (req, res) => {
  const {id} = req.body;
  connection.query(
      "DELETE FROM stock_producto WHERE id = ?",
      [id],
      function(err, results){
          res.json(results);
      }
  );
};
