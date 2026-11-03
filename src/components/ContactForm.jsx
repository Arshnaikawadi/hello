import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2, AlertCircle, Phone, MapPin, Mail, User, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = t.contact.errorRequired;
    
    // Clean phone number (strip spaces/dashes if any)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.phone = t.contact.errorPhone;
    }
    
    if (!formData.location.trim()) errs.location = t.contact.errorRequired;
    if (!formData.message.trim()) errs.message = t.contact.errorRequired;

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulated network submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 bg-slate-50/70 border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            📩 {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-medium">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-emerald-100 shadow-xl">
          
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">
                {t.contact.successTitle}
              </h3>
              <p className="text-sm text-emerald-800/90 max-w-md mx-auto leading-relaxed">
                {t.contact.successDesc}
              </p>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 max-w-sm mx-auto text-left text-xs space-y-1 text-emerald-900">
                <div><strong>Farmer:</strong> {formData.name}</div>
                <div><strong>Mobile:</strong> {formData.phone}</div>
                <div><strong>Location:</strong> {formData.location}</div>
                <div><strong>Status:</strong> Validated & Stored for Project Review</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetForm}
                  className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all hover:scale-105"
                >
                  {t.contact.submitAnotherBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Farmer Name */}
                <div>
                  <label className="block text-sm font-bold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-emerald-700" />
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-emerald-950 focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-emerald-200 focus:ring-amber-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-bold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald-700" />
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    maxLength="10"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.contact.phonePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-emerald-950 focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-emerald-200 focus:ring-amber-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-sm font-bold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-emerald-700" />
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 text-sm text-emerald-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Village / Location */}
                <div>
                  <label className="block text-sm font-bold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-700" />
                    {t.contact.locationLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder={t.contact.locationPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-emerald-950 focus:outline-none focus:ring-2 ${
                      errors.location ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-emerald-200 focus:ring-amber-500'
                    }`}
                  />
                  {errors.location && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.location}
                    </p>
                  )}
                </div>

              </div>

              {/* Question / Message */}
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-emerald-950 focus:outline-none focus:ring-2 ${
                    errors.message ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-emerald-200 focus:ring-amber-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-lg transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-70"
                >
                  <Send className="w-5 h-5 text-amber-300" />
                  <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
