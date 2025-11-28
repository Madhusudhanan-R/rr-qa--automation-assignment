import { getApiKey } from '../../utils/testData';

const apiKey = getApiKey();

if (!apiKey || apiKey.trim() === '') {
  console.error(
    'TMDB_API_KEY is not set. Make sure you have added it as a GitHub Actions secret.'
  );
  process.exit(1); // stops workflow if API key is missing
}
