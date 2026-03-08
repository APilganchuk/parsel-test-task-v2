const API_URL = 'https://veryfast.io/t/front_test_api.php';

export async function fetchLicenses() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();
    return data?.result?.elements || [];
  } catch (err) {
    console.error('Error fetching licenses:', err);
  }
}
