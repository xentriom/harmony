import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Check if the request is authorized
  if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/ping_check?select=id&limit=1`, {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      }
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Supabase request failed' },
        { status: 500 }
      );
    };

    const data = await res.json();

    return NextResponse.json(
      { message: 'Pinged successfully', data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to ping Supabase' },
      { status: 500 }
    );
  }
}