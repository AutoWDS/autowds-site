# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New batch export functionality for multiple scraping tasks
- Real-time progress display for scraping operations

### Changed
- Improved user interface with modern design elements

## [2.1.0] - 2024-12-20

### Added
- Batch export functionality, supporting one-click export of multiple scraping tasks
- Data deduplication options, automatically removing duplicate data based on specified fields
- Real-time scraping progress display, keeping users informed of collection status

### Changed
- Optimized scraping speed, improving data collection efficiency by 30%
- Improved user interface with a more modern design style

### Fixed
- Fixed inaccurate element selection issues on certain dynamic web pages
- Resolved potential memory overflow issues when exporting large datasets

## [2.0.0] - 2024-12-01

### Added
- Brand new visual rule editor with drag-and-drop operations
- AI intelligent recognition to automatically identify page structures
- Team collaboration features, supporting shared scraping rules

### Changed
- Refactored core scraping engine, significantly improving stability and performance
- Updated user interface for a more intuitive user experience

### Removed
- Removed legacy compatibility mode, focusing on modern browser support

## [1.9.5] - 2024-11-15

### Fixed
- Fixed Chrome extension compatibility issues with the latest browser version
- Resolved bugs where scheduled tasks failed to execute properly in certain situations
- Fixed Chinese character encoding issues when exporting Excel files

### Changed
- Optimized memory usage, reducing memory consumption during long-running sessions

## [1.9.0] - 2024-10-30

### Added
- New scheduled task system for automated data collection
- Support for custom export templates
- Enhanced error reporting and debugging tools

### Changed
- Improved pagination detection algorithm
- Updated extension manifest to v3 for better security

### Fixed
- Fixed issues with AJAX content detection
- Resolved cookie handling problems on certain websites

## [1.8.5] - 2024-10-15

### Fixed
- Critical security fix for data export functionality
- Fixed memory leaks in long-running scraping sessions
- Resolved compatibility issues with React-based websites

### Changed
- Enhanced performance for large dataset processing
- Improved error messages for better user guidance

## [1.8.0] - 2024-09-28

### Added
- Support for multi-tab scraping operations
- New data validation and cleaning features
- Integration with cloud storage services

### Changed
- Redesigned settings panel for better usability
- Improved element selector accuracy

### Deprecated
- Old API endpoints (will be removed in v2.0.0)

## [1.7.0] - 2024-09-10

### Added
- Initial release of the browser extension
- Basic web scraping functionality
- Support for Chrome, Firefox, and Edge browsers
- CSV and JSON export formats
- Visual element selection tool

[Unreleased]: https://github.com/octopus-crawler/octopus-crawler/compare/v2.1.0...HEAD
[2.1.0]: https://github.com/octopus-crawler/octopus-crawler/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.9.5...v2.0.0
[1.9.5]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.9.0...v1.9.5
[1.9.0]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.8.5...v1.9.0
[1.8.5]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.8.0...v1.8.5
[1.8.0]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/octopus-crawler/octopus-crawler/releases/tag/v1.7.0