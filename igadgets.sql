-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-07-2023 a las 21:39:29
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `igadgets`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock_producto`
--

CREATE TABLE `stock_producto` (
  `id` int(11) NOT NULL,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `marca_producto` varchar(255) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `tipo_producto_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `stock_producto`
--

INSERT INTO `stock_producto` (`id`, `nombre_producto`, `marca_producto`, `precio`, `stock`, `tipo_producto_id`) VALUES
(10, 'Teclado Gamer Pro', 'Redragon', 4500.00, 23, 1),
(11, 'Teclado Inalámbrico Slim', 'Logitech', 2300.00, 8, 1),
(12, 'Teclado Mecánico RGB', 'Corsair', 5800.00, 13, 1),
(13, 'Teclado Multimedia', 'HP', 1800.00, 21, 1),
(14, 'Teclado Retroiluminado', 'Razer', 3700.00, 2, 1),
(15, 'Mouse Gamer Pro', 'SteelSeries', 3200.00, 22, 2),
(16, 'Mouse Inalámbrico Silencioso', 'Microsoft', 1500.00, 1, 2),
(17, 'Mouse Ergonómico', 'Logitech', 2100.00, 0, 2),
(18, 'Mouse Óptico Básico', 'Genius', 800.00, 3, 2),
(19, 'Mouse RGB Personalizable', 'Corsair', 2800.00, 19, 2),
(20, 'Auriculares Bluetooth Noise-Cancelling', 'Sony', 6500.00, 3, 3),
(21, 'Auriculares Inalámbricos Deportivos', 'JBL', 3000.00, 7, 3),
(22, 'Auriculares Diadema Hi-Fi', 'Audio-Technica', 4800.00, 0, 3),
(23, 'Auriculares Gamer con Micrófono', 'HyperX', 3700.00, 0, 3),
(24, 'Auriculares Plegables con Cable', 'Sennheiser', 2200.00, 10, 3),
(25, 'Monitor LED 24\" Full HD', 'Samsung', 12000.00, 4, 4),
(26, 'Monitor Curvo 27\" QHD', 'LG', 18500.00, 1, 4),
(27, 'Monitor Gaming 32\" 4K', 'ASUS', 25000.00, 2, 4),
(28, 'Monitor Ultrawide 29\" WFHD', 'AOC', 15700.00, 7, 4),
(29, 'Monitor Profesional 27\" 2K', 'BenQ', 14200.00, 2, 4),
(30, 'Pendrive USB 3.0 64GB', 'SanDisk', 1200.00, 23, 5),
(31, 'Disco Duro Externo 1TB', 'Western Digital', 4500.00, 12, 5),
(32, 'Tarjeta de Memoria microSD 128GB', 'Kingston', 1800.00, 16, 5),
(33, 'Unidad Flash USB 2.0 32GB (Pack de 3)', 'HP', 1600.00, 14, 5),
(34, 'SSD Externo USB-C 500GB', 'Crucial', 6800.00, 8, 5),
(35, 'Procesador AMD Ryzen 7 5800X', 'AMD', 111500.00, 4, 6),
(36, 'Tarjeta Gráfica NVIDIA GeForce RTX 3060', 'NVIDIA', 230000.00, 2, 6),
(37, 'Placa Base ASUS ROG Strix B550-F', 'ASUS', 45000.00, 0, 6),
(38, 'Memoria RAM Corsair Vengeance 16GB DDR4', 'Corsair', 12000.00, 4, 6),
(39, 'Disco Duro Interno Seagate Barracuda 2TB', 'Seagate', 16000.00, 2, 6),
(40, 'Impresora Multifunción Inalámbrica', 'HP', 5200.00, 0, 7),
(41, 'Impresora Láser Blanco y Negro', 'Brother', 3900.00, 1, 7),
(42, 'Impresora de Tinta a Color', 'Epson', 19000.00, 4, 7),
(43, 'Impresora Fotográfica Portátil', 'Canon', 12000.00, 8, 7),
(44, 'Impresora de Etiquetas Profesional', 'DYMO', 10000.00, 0, 7),
(45, 'Silla Ergonómica Mesh', 'Sihoo', 20000.00, 3, 8),
(46, 'Silla de Oficina Acolchada', 'La-Z-Boy', 15000.00, 0, 8),
(47, 'Silla Gamer Racing Style', 'DXRacer', 30000.00, 3, 8),
(48, 'Silla Ejecutiva de Cuero', 'HON', 25000.00, 2, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_productos`
--

CREATE TABLE `tipos_productos` (
  `id` int(11) NOT NULL,
  `tipo_producto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tipos_productos`
--

INSERT INTO `tipos_productos` (`id`, `tipo_producto`) VALUES
(1, 'teclado'),
(2, 'mouse'),
(3, 'auricular'),
(4, 'monitor'),
(5, 'almacenamiento'),
(6, 'hardware'),
(7, 'impresora'),
(8, 'silla');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(255) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `clave_validacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_usuario`, `contrasena`, `clave_validacion`) VALUES
(1, 'admin123', '12345', '6da1ffe30650c9f7d08e3d5782e1a5a9');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `stock_producto`
--
ALTER TABLE `stock_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo_producto_id` (`tipo_producto_id`);

--
-- Indices de la tabla `tipos_productos`
--
ALTER TABLE `tipos_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `stock_producto`
--
ALTER TABLE `stock_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `tipos_productos`
--
ALTER TABLE `tipos_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `stock_producto`
--
ALTER TABLE `stock_producto`
  ADD CONSTRAINT `stock_producto_ibfk_1` FOREIGN KEY (`tipo_producto_id`) REFERENCES `tipos_productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
