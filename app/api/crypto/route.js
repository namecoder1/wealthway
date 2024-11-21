import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol') || 'BTC';
  const convert = searchParams.get('convert') || 'USD';

  try {
    const response = await fetch(
      `${process.env.CMC_API_URL}/cryptocurrency/quotes/latest?symbol=${symbol}&convert=${convert}`,
      {
        method: 'GET',
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY || '',
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}