import { useState, useEffect } from 'react';

export function useWaitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasAlreadyJoined, setHasAlreadyJoined] = useState(false);

  useEffect(() => {
    const joined = localStorage.getItem('aventa_waitlist_joined');
    if (joined) {
      setHasAlreadyJoined(true);
    }
  }, []);

  const submitToWaitlist = async (data: {
    fullName: string;
    businessName: string;
    businessType: string;
    whatsappNumber: string;
    mainProblem: string;
    notes?: string;
  }) => {
    if (hasAlreadyJoined) {
      setError('You have already joined the waitlist.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to join waitlist');
      }

      setIsSuccess(true);
      localStorage.setItem('aventa_waitlist_joined', 'true');
      setHasAlreadyJoined(true);
    } catch (err: any) {
      console.error('Waitlist submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitToWaitlist, isSubmitting, isSuccess, error, setIsSuccess, hasAlreadyJoined };
}
