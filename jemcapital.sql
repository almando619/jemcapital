-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2023 at 10:19 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jemcapital`
--

-- --------------------------------------------------------

--
-- Table structure for table `real_estate`
--

CREATE TABLE `real_estate` (
  `estate_id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(100) NOT NULL,
  `category` varchar(10) NOT NULL COMMENT 'SALE, RENT',
  `status` varchar(1) NOT NULL DEFAULT 'A' COMMENT 'A,I'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `real_estate`
--

INSERT INTO `real_estate` (`estate_id`, `title`, `description`, `location`, `category`, `status`) VALUES
(12, 'House for Rent at Majengo ya Juu', 'lorem', 'Majengo ya Juu', 'SALE', 'A'),
(13, 'Office buikding for Rent at Morombo', 'lorem ipsum dolor siet aime', 'Morombo Police', 'RENT', 'A'),
(14, 'House hold for Sale ', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.', 'Olkokolai', 'SALE', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `real_estate_images`
--

CREATE TABLE `real_estate_images` (
  `image_id` int(11) NOT NULL,
  `image_path` text NOT NULL,
  `estate_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `real_estate_images`
--

INSERT INTO `real_estate_images` (`image_id`, `image_path`, `estate_id`) VALUES
(14, '/assets/images/real-estate-uploads/2023_Nov_18_20_01_37-jem', 12),
(16, '/assets/images/real-estate-uploads/2023_Nov_18_20_02_03-jem', 12),
(17, '/assets/images/real-estate-uploads/2023_Nov_18_20_02_19-jem', 12),
(18, '/assets/images/real-estate-uploads/2023_Nov_18_20_04_06-jem', 13),
(19, '/assets/images/real-estate-uploads/2023_Nov_18_20_04_13-jem', 13),
(20, '/assets/images/real-estate-uploads/2023_Nov_18_20_04_20-jem', 13),
(21, '/assets/images/real-estate-uploads/2023_Nov_18_20_06_16-jem', 14),
(22, '/assets/images/real-estate-uploads/2023_Nov_18_20_06_21-jem', 14),
(23, '/assets/images/real-estate-uploads/2023_Nov_18_20_06_29-jem', 14),
(25, '/assets/images/real-estate-uploads/2023_Nov_19_21_14_48-jem', 14);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `real_estate`
--
ALTER TABLE `real_estate`
  ADD PRIMARY KEY (`estate_id`);

--
-- Indexes for table `real_estate_images`
--
ALTER TABLE `real_estate_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `estate_id` (`estate_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `real_estate`
--
ALTER TABLE `real_estate`
  MODIFY `estate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `real_estate_images`
--
ALTER TABLE `real_estate_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `real_estate_images`
--
ALTER TABLE `real_estate_images`
  ADD CONSTRAINT `real_estate_images_ibfk_1` FOREIGN KEY (`estate_id`) REFERENCES `real_estate` (`estate_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
