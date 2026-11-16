# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html). Version numbers follow the "Update x.y" names used in the 2015 commits. Entries come from the git history; short hashes are in parentheses, and pull-request numbers are given where they exist.

## [2.3.0] - 2015-08-16

The final build: back ends, the schedule page and routing.

### Added

- Contact-us back end: `contact-us/index.php` stores messages in MySQL (#2, Ashwini Purohit; 044376b).
- `db.sql` schema for the `hack` database with `contact` and `registrations` tables (#3, Ashwini Purohit; 0937448, 19e7aa6).
- Completed schedule page with the full event timeline (44b5b80).

### Changed

- Landing-page nav and register links switched to folder URLs ("Proper routing done for Home page", #5, Ashwini Purohit; 22ba2dc).
- README pending list updated for 2.1.1/2.2.1 (37982d2, 4402f9e, 56170f6).

### Reverted

- Registration-page fonts and styling ("Update 2.2.3", #6, Rishi Raj; 98d87d2, d9104ce, 854d9ae) was merged in e7dcca2 and reverted in #7 (1418fc4).

## [2.2.1] - 2015-08-10

### Added

- `reg-temp/reg-temp.html` registration placeholder and `homepage/index.html` redirect (4e0e8fa).
- Sponsor logos and registration artwork in `new-assets/` (4e0e8fa).
- Image slider on the landing page (04551af).

### Changed

- Landing page renamed from `homePage.html` to `index.html`; leftover `temp.html` removed (4e0e8fa).
- Total size reduced by deleting unused images and icons (04551af).
- Sub-page heads cleaned up: ACM favicons, and the mirrored theme's leftover meta tags removed (bf0442f).
- Sponsor tiles stack on small screens; register link updated (096489d).
- README notes for Update 2.0 (9e510ba).

### Fixed

- Bug fixes from Update 2.1 (4e0e8fa).

## [2.0.0] - 2015-08-08

### Added

- Résumé and abstract upload in the early registration handler (#1, Ashwini Purohit; 16d2330).
- `homePage.html` landing page and `registration-page/hack.sql` schema (8d2a009).
- New images: `calendar.jpg`, `problems.jpg`, `sign.jpg`, `teamnew.jpg`, `teamold.jpg` (8d2a009).
- README with setup notes and pending tasks (dd65f41, ea29d13, 749fcad).

### Changed

- "Complete linking done": pages renamed to `aboutUs.html`, `contactUs.html` and `problemStatements.html`, and cross-linked (8d2a009).

## [1.2.0] - 2015-08-03

The first cut of the site.

### Added

- `.gitattributes` and `.gitignore` (0487afd).
- About-us page (9c7d8e2).
- Contact page, ACM/ACM-VIT logos and the first image set (55dd230).
- Registration link, registration-page template assets and the vertical timeline files; a template page renamed to `problem-statements/` (74c6032).

[2.3.0]: https://github.com/abhinav-adtechs/Code-To-Create/compare/v2.2.1...v2.3.0
[2.2.1]: https://github.com/abhinav-adtechs/Code-To-Create/compare/v2.0.0...v2.2.1
[2.0.0]: https://github.com/abhinav-adtechs/Code-To-Create/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/abhinav-adtechs/Code-To-Create/commits/v1.2.0
