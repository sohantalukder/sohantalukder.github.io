"use client"
import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialState: FormData = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS (should be done once when component mounts)
  React.useEffect(() => {
    // Initialize EmailJS with your public key
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset status
    setStatus('idle');
    setStatusMessage('');
    
    // Validate form
    if (!validateForm()) {
      setStatus('error');
      setStatusMessage('Please fix the errors below');
      return;
    }

    setLoading(true);
    
    try {
      // Check if environment variables are available
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Prepare email data
      const emailData = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: "Sohan Talukder", // Your name
        reply_to: formData.email.trim(),
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        emailData,
        publicKey
      );

      if (response.status === 200) {
        setFormData(initialState);
        setErrors({});
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      
      if (error instanceof Error) {
        if (error.message.includes('Invalid grant') || error.message.includes('Gmail_API')) {
          setStatusMessage('Email service temporarily unavailable. Please try contacting me directly at mdtalukder.sohan@gmail.com');
        } else if (error.message.includes('configuration')) {
          setStatusMessage('Email service is not properly configured. Please contact me directly at mdtalukder.sohan@gmail.com');
        } else {
          setStatusMessage('Failed to send message. Please try again or contact me directly at mdtalukder.sohan@gmail.com');
        }
      } else {
        setStatusMessage('An unexpected error occurred. Please try contacting me directly at mdtalukder.sohan@gmail.com');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    // Clear status when user starts editing
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  return (
    <section id="contact" className="py-12 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Let&apos;s chat and create greatness together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                I&apos;m always open to discussing new opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Address</h4>
                  <p className="text-muted-foreground text-sm">Mirpur, Dhaka</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Contact Number</h4>
                  <p className="text-muted-foreground text-sm">+8801865748726</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm">mdtalukder.sohan@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/sohantalukder" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/sohantalukder" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:mdtalukder.sohan@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium">
                Say Something
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-700 dark:text-green-300">{statusMessage}</p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700 dark:text-red-300">{statusMessage}</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <Input
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`h-9 border-0 border-b rounded-none px-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-sm ${
                        errors.name ? 'border-red-500 focus-visible:border-red-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`h-9 border-0 border-b rounded-none px-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-sm ${
                        errors.email ? 'border-red-500 focus-visible:border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`h-9 border-0 border-b rounded-none px-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-sm ${
                      errors.subject ? 'border-red-500 focus-visible:border-red-500' : ''
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Message *"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`border-0 border-b rounded-none px-2 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent resize-none text-sm ${
                      errors.message ? 'border-red-500 focus-visible:border-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-32 h-9 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm cursor-pointer"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-3 w-3 border-2 border-background border-t-transparent"></div>
                  ) : (
                    <>
                      <Send className="mr-1 h-3 w-3" />
                      Send
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}