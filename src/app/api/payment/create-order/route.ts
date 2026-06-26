import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, currency = 'INR', service, customer_name, customer_email, customer_phone } = body;

    if (!amount || !service || !customer_name || !customer_email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create Razorpay order
    const credentials = Buffer.from(
      `${process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
    ).toString('base64');

    const razorpayRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        amount: amount * 100, // paise
        currency,
        receipt: `receipt_${Date.now()}`,
        notes: { service, customer_name, customer_email },
      }),
    });

    if (!razorpayRes.ok) {
      throw new Error('Failed to create Razorpay order');
    }

    const order = await razorpayRes.json();

    // Save to Supabase
    const supabase = createServerClient();
    await supabase.from('payments').insert([{
      order_id: order.id,
      amount,
      currency,
      status: 'created',
      service,
      customer_name,
      customer_email,
      customer_phone: customer_phone || null,
    }]);

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error('Payment API error:', error);
    return NextResponse.json({ error: 'Failed to create payment order' }, { status: 500 });
  }
}
