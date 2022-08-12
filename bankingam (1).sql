-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2022 at 08:19 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bankingam`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `accid` int(10) NOT NULL,
  `userid` int(5) DEFAULT NULL,
  `bname` char(40) DEFAULT NULL,
  `atype` char(1) DEFAULT NULL,
  `abalance` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`accid`, `userid`, `bname`, `atype`, `abalance`) VALUES
(1123270125, 68306, 'Alandi', 'S', '12200.25'),
(1139892869, 10020, 'Pune', 'C', '122.23'),
(1148447372, 57333, 'Pune', 'S', '100.23'),
(1379009129, 10020, 'Kolhapur', 'C', '12034.76'),
(1425429801, 11444, 'Pune', 'C', '111.50'),
(1665033352, 38572, 'Pune', 'S', '103.23'),
(1869885214, 29008, 'Osmanabad', 'S', '1023.55'),
(1892237019, 10020, 'Kolhapur', 'C', '10000.12'),
(1910055991, 31831, 'Pune', 'S', '100.45'),
(1934290579, 29008, 'Pune', 'C', '120.31'),
(1942134783, 10020, 'Alandi', 'S', '1000.69');

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `BId` int(11) NOT NULL,
  `BName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EId` int(11) NOT NULL,
  `EmpName` varchar(255) DEFAULT NULL,
  `UserName` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(5) NOT NULL,
  `name` char(40) DEFAULT NULL,
  `emailid` char(100) DEFAULT NULL,
  `mobile` char(10) DEFAULT NULL,
  `smobile` char(10) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `name`, `emailid`, `mobile`, `smobile`, `dob`, `gender`) VALUES
(10020, 'AshnishaC', 'Ashnisha@am.com', '9766566929', '7888040044', '2000-03-02', 'F'),
(11444, 'vaibhavC', 'vir@amdocs.com', '9766566929', '7276336691', '2000-12-29', 'M'),
(29008, 'Virendra', 'vire@amdocs.com', '8999477844', '7888040044', '2000-08-10', 'M'),
(30244, 'VirendraK', 'vir@amdocs.com', '9552337996', '7276336691', '2022-08-04', 'M'),
(31831, 'Virenu', 'vir@amdocs.com', '9552337996', '9767028888', '2000-12-29', 'M'),
(42084, 'Kiran', 'Kiran@amdocs.com', '9552337994', '9767028889', '2000-07-04', 'M'),
(57333, 'Virendra', 'Virendra.patel@amdocs.com', '9552337996', '9767028889', '2000-12-29', 'M'),
(62738, 'Kiran', 'vir@amdocs.com', '9552337995', '7276336691', '2001-11-12', 'M'),
(68306, 'VirendraChaure', 'virendra.chaure@amdocs.com', '9552337996', '7276336691', '2001-11-13', 'M'),
(76917, 'Virendra', 'virendra@amdocs.com', '9552337995', '7276336691', '2000-03-02', 'M'),
(77380, 'Virendra', 'virendra.chaure@amdocs.com', '9552337996', '7276336691', '2000-07-04', 'M'),
(77839, 'Vaibhav', 'vaibhav.chaure@amdocs.com', '9767018888', '9767028888', '2000-08-10', 'M'),
(82301, 'Virendra', 'vir@amdocs.com', '9552337996', '9767028889', '2000-08-10', 'M'),
(85716, 'VirendraJK', 'vir@amdocs.com', '9552337996', '7276336691', '2022-08-26', 'M'),
(94200, 'Jatan', 'jatan@amdocs.com', '9552337996', '9767028889', '2001-11-12', 'M'),
(94722, 'Kishor', 'Kishor@amdocs.com', '9552337996', '7276336691', '2001-12-12', 'M');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accid`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`BId`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `BId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EId` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
