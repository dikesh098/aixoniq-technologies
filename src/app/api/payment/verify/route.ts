import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';
import { createServerClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { order_id, payment_id, signature } = await req.json();

    // Verify Razorpay signature
    const body = `${order_id}|${payment_id}`;
    const expectedSignature = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 });
    }

    // Update payment status in Supabase
    const supabase = createServerClient();
    await supabase
      .from('payments')
      .update({ payment_id, status: 'paid' })
      .eq('order_id', order_id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Payment verify error:', error);
    return NextResponse.json({ error: 'Payment verification failed' }, { status: 500 });
  }
}
