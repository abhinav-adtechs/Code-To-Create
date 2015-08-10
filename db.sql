-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2015 at 09:22 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hack`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(1, 'Ashwini', 'ashwini@gmail.com', 'This is my message and \r\nThis is also my message'),
(2, 'sfkasdfkjd', 'sdfjas@gsgsa.com', 'kkkfajsldkfa\r\nfaskfdlfldsj\r\nfakfj\r\ndslfkajdlfadksfja\r\nfkldsf\r\nadfjdl\r\n'),
(3, 'sfkasdfkjd', 'sdfjas@gsgsa.com', 'kkkfajsldkfa\r\nfaskfdlfldsj\r\nfakfj\r\ndslfkajdlfadksfja\r\nfkldsf\r\nadfjdl\r\n'),
(4, 'lsafsdkf', 'lk@c.com', 'l'),
(5, 'paskfslkf', 'lksdflaf@dsf.com', 'asdfadsfasf');

-- --------------------------------------------------------

--
-- Table structure for table `registrations`
--

CREATE TABLE IF NOT EXISTS `registrations` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `regno` varchar(10) NOT NULL,
  `abstract` text NOT NULL,
  `field` varchar(50) NOT NULL,
  `tech_skills` varchar(255) NOT NULL,
  `type` varchar(10) NOT NULL DEFAULT 'Internal',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `projects` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `registrations`
--

INSERT INTO `registrations` (`id`, `name`, `email`, `contact`, `regno`, `abstract`, `field`, `tech_skills`, `type`, `time`, `projects`) VALUES
(1, 'Ashwini', 'ashwini@gmail.com', '9900990099', '14BCE0529', 'This is the abstract', 'Image Processing and Data Analysis', 'Python', 'Internal', '2015-08-01 18:52:13', ''),
(2, '', '', '', '', '', '', '', 'Internal', '2015-08-01 18:56:04', ''),
(3, 'Ashish', 'ashwinipurohit@yahoo.in', '9985877878', '14BEC0813', 'This could be abstract', '', 'Java', 'Internal', '2015-08-01 18:57:22', 'None'),
(4, 'codeashwini', 'ashwinipurohit@yahoo.in', '92989249824', 'z', 'This could be abstract', 'Social Welfare', 'Java', 'Internal', '2015-08-01 18:59:10', 'None'),
(5, 'Shivam', 'geek.ashwini@gmail.com', '', '14BCE0529', 'kcusjsdfjkh', '', 'kjjdskjfh', 'Internal', '2015-08-01 19:38:43', ''),
(6, 'Ashwini', 'ashwinipurohit@yahoo.in', '', '14bce0030', 'Tsdfdslfk', 'Data Science', 'dskjfklajklj', 'Internal', '2015-08-01 19:40:44', 'dsfalfdskf'),
(7, 'mschouhan1278', 'geek.ashwini@gmail.com', '', '14bce0529', 'slfasdflj', 'Healthcare', 'kjkj', 'Internal', '2015-08-01 19:41:37', 'kljlkj'),
(8, 'mschouhan1278', 'ashwinipurohit@yahoo.in', '8098678877', '14BCE0529', 'sad', 'Education', 'sad', 'Internal', '2015-08-01 19:43:15', 'as\r\n'),
(9, 'this person', 'geek.ashwini@gmail.com', '8098678877', '14BCE0529', 'sdfaldskjf', 'Healthcare', 'kl', 'Internal', '2015-08-03 19:20:19', 'jlkjl'),
(10, 'sdfakfaskfajflk', 'kjklj@sdgskdg.com', 'kljkl', 'kjlkasjflk', '', 'Multimedia', '', 'Internal', '2015-08-03 19:32:54', ''),
(11, 'Ashwini purohit', 'geek.ashwini@gmail.com', '8098678877', '14bce0529', '', 'Healthcare', '', 'Internal', '2015-08-03 19:36:40', ''),
(12, 'asdf', 'geek.ashwini@gmail.com', '8098678877', '14bce0529', '', 'Healthcare', '', 'Internal', '2015-08-03 19:39:57', ''),
(13, 'sdlfalfkjk', 'geek.ashwini@gmail.com', '8098678877', '14bce0529', '', 'Healthcare', '', 'Internal', '2015-08-03 19:45:54', ''),
(14, 'sdlfalfkjk', 'geek.ashwini@gmail.com', '8098678877', '14bce0529', '', 'Healthcare', '', 'Internal', '2015-08-03 19:52:05', ''),
(15, 'Ashwini purohit', 'cooldude.armaan007@gmail.com', '8098678877', '14bce0529', '', 'Healthcare', '', 'Internal', '2015-08-03 19:53:23', ''),
(16, 'Ashwini purohit', 'geek.ashwini@gmail.com', '8098678877', '14bce0529', '', 'Healthcare', '', 'Internal', '2015-08-03 19:54:16', ''),
(17, 'skdsflkajflk', 'cooldude.armaan007@gmail.com', '9985877878', '11bce0223', '', 'Healthcare', '', 'Internal', '2015-08-03 19:57:21', ''),
(18, 'skdsflkajflk', 'cooldude.armaan007@gmail.com', '9985877878', '11bce0223', '', 'Healthcare', '', 'Internal', '2015-08-03 19:57:57', ''),
(19, 'klafsdjklj', 'dsfa@gskgs.com', '9999999999', '14bce0526', '', 'Data Science', '', 'Internal', '2015-08-04 10:13:21', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registrations`
--
ALTER TABLE `registrations`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `registrations`
--
ALTER TABLE `registrations`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
