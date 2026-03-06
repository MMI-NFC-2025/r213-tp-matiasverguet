import { setFavori } from "../../backend.mjs";

export async function post({ request }) {
  try {
    const body = await request.json();
    if (!body?.id) {
      return new Response(JSON.stringify({ success: false, error: 'Missing id' }), { status: 400 });
    }

    const res = await setFavori(body);
    return new Response(JSON.stringify(res), { status: res.success ? 200 : 500 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: String(err) }), { status: 500 });
  }
}
