"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

interface SponsorshipFormProps {
  tier: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function SponsorshipForm({ tier, isOpen, onClose }: SponsorshipFormProps) {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/sponsorship-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tier,
          companyName,
          contactPerson,
          contactEmail,
          contactPhone,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit inquiry');
      }

      setSuccess(true);
      // Clear form fields after success
      setCompanyName('');
      setContactPerson('');
      setContactEmail('');
      setContactPhone('');
      setMessage('');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-zinc-100 bg-zinc-50/50">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gold-dark mb-1">Sponsor Us</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900">
                  {tier} Application
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 size={40} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-2">Application Received!</h3>
                  <p className="text-zinc-500 mb-8 max-w-md">
                    Thank you for your interest in partnering with OFAAC. Our administrative team will review your inquiry and reach out within 1-2 business days.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-zinc-900 hover:bg-gold-dark text-white px-8 py-3 rounded-full font-sans font-bold uppercase tracking-widest text-xs transition-all duration-300"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="companyName" className="block text-sm font-medium text-zinc-700">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-zinc-700">
                        Contact Person <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contactEmail" className="block text-sm font-medium text-zinc-700">
                        Contact Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        required
                        placeholder="hello@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contactPhone" className="block text-sm font-medium text-zinc-700">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                      Additional Message or Inquiry Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us how you'd like to partner with us..."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all placeholder:text-zinc-400 text-zinc-900 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <div className="pt-4 border-t border-zinc-100 mt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-sm transition-all duration-300 text-zinc-900 bg-gold hover:bg-gold-dark disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-gold/20"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
