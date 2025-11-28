project/
│── playwright.config.ts
│── package.json
│── tsconfig.json
│── README.md
│── test-results
│── .gitHub/workflows/playwright.yml
│── utils/
│     ├── loggers.ts
│     ├── assertions.ts
│     └── testData.ts
│
│── tests/
      ├── ui/
      │     ├── filters.spec.ts
      │     ├── pagination.spec.ts
      │     ├── slug-navigation.spec.ts
      │     ├── genres-year-rating.spec.ts
      │     ├── negative-urls.spec.ts
      │
      └── api/
            ├── movies.spec.ts
            ├── tvshows.spec.ts
            └── genres.spec.ts