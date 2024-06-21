-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2024 at 04:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bekasberkah`
--

-- --------------------------------------------------------

--
-- Table structure for table `alamat`
--

CREATE TABLE `alamat` (
  `id_user` int(11) NOT NULL,
  `id_alamat` int(11) NOT NULL,
  `nama_penerima` varchar(225) NOT NULL,
  `nomor_hp` varchar(225) NOT NULL,
  `alamat_lengkap` varchar(225) NOT NULL,
  `label_alamat` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alamat`
--

INSERT INTO `alamat` (`id_user`, `id_alamat`, `nama_penerima`, `nomor_hp`, `alamat_lengkap`, `label_alamat`) VALUES
(1, 101, 'John Doe', '081234567890', 'Jl. Merdeka No. 10, Jakarta', 'Rumah'),
(2, 102, 'Jane Smith', '081298765432', 'Jl. Kemerdekaan No. 20, Surabaya', 'Kantor');

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id` int(11) NOT NULL,
  `nama_barang` varchar(225) DEFAULT NULL,
  `kategori_barang` varchar(225) DEFAULT NULL,
  `foto_barang` varchar(225) DEFAULT NULL,
  `deskripsi_barang` varchar(225) DEFAULT NULL,
  `video_barang` varchar(225) DEFAULT NULL,
  `harga_barang` varchar(225) DEFAULT NULL,
  `berat_barang` int(11) DEFAULT NULL,
  `panjang_barang` int(11) DEFAULT NULL,
  `lebar_barang` int(11) DEFAULT NULL,
  `tinggi_barang` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id`, `nama_barang`, `kategori_barang`, `foto_barang`, `deskripsi_barang`, `video_barang`, `harga_barang`, `berat_barang`, `panjang_barang`, `lebar_barang`, `tinggi_barang`) VALUES
(1, 'Baju Rajut', 'pakaian', 'https://id.pinterest.com/pin/615585842840768873/', 'Baju rajut ukuran L', '', 'Rp. 30.000', 200, 70, 116, 50);

-- --------------------------------------------------------

--
-- Table structure for table `pesanan`
--

CREATE TABLE `pesanan` (
  `id_user` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `tanggal_pesanan` date NOT NULL,
  `status_pesanan` enum('berhasil','gagal') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pesanan`
--

INSERT INTO `pesanan` (`id_user`, `id_barang`, `id_order`, `tanggal_pesanan`, `status_pesanan`) VALUES
(1, 1, 201, '2024-06-01', 'berhasil'),
(2, 2, 202, '2024-06-02', 'gagal');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `image` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `image`) VALUES
(1, 'john_doe', 'password123', 'john@example.com', 'john_image.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(7, 'Satria', 'dhans10@gmail.com', '$2b$10$OML2zS1Wkt6fKqhMQqMmA.PVdNZeBNWOPYGZsjyYoQjdnrJnkXyUK', NULL, '2024-06-19 14:23:25', '2024-06-19 14:23:25'),
(9, 'Dhandy', 'dhan@gmail.com', '$2b$10$LqvZ3CnSuIZqbfBDoztgRO07BimYlJJn2dzFO/iOJRe88u8i0yRlG', NULL, '2024-06-19 14:32:20', '2024-06-19 14:32:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alamat`
--
ALTER TABLE `alamat`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_alamat` (`id_alamat`);

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `pesanan_ibfk_1` (`id_barang`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alamat`
--
ALTER TABLE `alamat`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pesanan`
--
ALTER TABLE `pesanan`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
