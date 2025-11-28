Testing strategy
The overall strategy was to combine end to end UI tests with a small set of API checks, focusing on the main user flows of the tmdb discover app. The aim was to validate the as per the list mentioned in the document.

Project structure (flow chart style)
project/
│── playwright.config.ts // Global config: projects for Chromium/Firefox/WebKit, baseURL, reporters
│── package.json // Scripts to run UI/API suites and generate reports
│── tsconfig.json // TypeScript compiler options for type safe tests
│── README.md // How to install, run, and interpret results
│── test-report // Generated HTML/CI reports
│── test-results // Traces, screenshots, and artifacts for failed runs
│── .gitHub/workflows/playwright.yml // CI pipeline to run tests on pushes/PRs
│
│── utils/
│ ├── loggers.ts // Centralized logging utilities for consistent diagnostics
│ ├── assertions.ts // Reusable custom assertions to keep specs readable
│ └── testData.ts // Central test data definitions (URLs, filters, sample payloads)
│
│── tests/
├── ui/ // End to end UI scenarios
│ ├── filters.spec.ts // Filter combinations (genres, year, rating)
│ ├── pagination.spec.ts // Pagination / “load more” behavior
│ ├── slug-navigation.spec.ts // Detail page navigation and slugs
│ ├── genres-year-rating.spec.ts // Advanced filtering and sorting
│ ├── negative-urls.spec.ts // Invalid/deep link URL handling (e.g., /popular)
│
└── api/ // API level checks aligned with UI flows
├── movies.spec.ts // Movie discovery/listing endpoints
├── tvshows.spec.ts // TV show discovery endpoints
└── genres.spec.ts // Genres metadata used by filters


Test cases generated
I focused on high value, user centric scenarios:
•	Landing on the home page and seeing a list of popular movies (basic smoke check of the UI and API).
•	Navigating to a movie detail page from the list and validating title, poster, rating, and overview.
•	Using pagination or “load more” (if available) to ensure additional results load correctly.
•	Verifying navigation via browser back/forward and page refresh to check URL handling and state restoration.
•	Negative path: handling of broken/incorrect URLs (for example, direct navigation to /popular or other deep URLs).
These cases were chosen because they represent the core discovery experience and are most likely to reveal functional or navigation issues.
Automation framework
The framework is built on:
•	Playwright Test as the runner (TypeScript).
•	Playwright’s built in fixtures for browser, context, and page management.
•	TypeScript for strong typing, better IntelliSense, and safer refactoring.
•	Playwright’s APIRequestContext for API tests against the TMDB endpoints used by the UI.
The structure follows a clear separation of concerns: test specs, page objects (for UI), and helper modules (for API and test data).
How to run the tests
•	Install the npx and its dependencies with a standard package manager command.
•	npm install
•	npx playwright install --with-deps
•	Configure the project using Playwright’s config file and yml for CI for browser.
•	Run all tests with a single test command 
•	npx playwright test.
•	Use Playwright’s UI/HTML report (for example, npx playwright show-report) to inspect failures and traces.
This keeps execution simple for local runs and easy to plug into CI.

Test design techniques
I used a mix of basic but effective techniques:
•	Equivalence partitioning for input dependent scenarios.
•	Boundary checks around pagination (like first page and last page.
•	Covered the test using the filters mentioned.
Coding patterns used
Playwright and typescript are used for coding for the patterns of UI and API testing.
•	Descriptive test naming:
•	Test titles express behavior (“should apply genre and year filters together”) rather than technical details.
•	Cross browser project configuration:
•	Browser engines defined as separate projects in playwright.config.ts so the same tests run on Chromium, Firefox, and WebKit.



Defects found
I see most of the automated test cases failed, and the main issue appears to be around URL handling and navigation:
•	After a page refresh or using browser back, the application URL changes to https://tmdb-discover.surge.sh/popular, which does not respond correctly and breaks the flow. This makes deep links and reload scenarios unreliable.
•	Because of this, tests that validate state after refresh or back/forward navigation fail even though the earlier steps pass, indicating a defect in routing or server configuration rather than in the test logic.
