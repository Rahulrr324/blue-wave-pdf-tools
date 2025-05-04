
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Layout from '../components/Layout';

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const email = location.state?.email;
  
  useEffect(() => {
    if (!email) {
      navigate('/signup');
    }
    
    let interval: number | undefined;
    if (countdown > 0) {
      interval = window.setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    
    return () => clearInterval(interval);
  }, [email, navigate, countdown]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationCode.trim()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check verification code
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((user: any) => 
        user.email === email && user.verificationCode === verificationCode
      );
      
      if (userIndex !== -1) {
        // Update user verification status
        users[userIndex].verified = true;
        localStorage.setItem('users', JSON.stringify(users));
        
        toast({
          title: "Email verified successfully",
          description: "Your account has been activated. You can now log in."
        });
        
        navigate('/login');
      } else {
        toast({
          title: "Invalid verification code",
          description: "The code you entered is incorrect. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Could not verify your email. Please try again later.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  const handleResendCode = async () => {
    setResendDisabled(true);
    setCountdown(60);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate new verification code
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((user: any) => user.email === email);
      
      if (userIndex !== -1) {
        const newCode = Math.floor(100000 + Math.random() * 900000).toString();
        users[userIndex].verificationCode = newCode;
        localStorage.setItem('users', JSON.stringify(users));
        
        // In a real app, this would send an actual email
        console.log(`Resending verification code ${newCode} to ${email}`);
        
        toast({
          title: "Verification code resent",
          description: `A new verification code (${newCode}) has been sent to your email.`
        });
      }
    } catch (error) {
      toast({
        title: "Failed to resend code",
        description: "An error occurred. Please try again later.",
        variant: "destructive"
      });
      setResendDisabled(false);
    }
  };

  return (
    <Layout>
      <div className="container max-w-md mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Verify Your Email</h1>
            <p className="text-gray-600 mt-2">
              We sent a verification code to <span className="font-medium">{email}</span>
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
                Verification Code
              </label>
              <Input
                id="code"
                type="text"
                value={verificationCode}
                onChange={e => setVerificationCode(e.target.value)}
                placeholder="Enter 6-digit code"
                className="text-center text-lg tracking-widest"
                maxLength={6}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify Email"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Didn't receive a code?</p>
            <Button
              variant="outline"
              onClick={handleResendCode}
              disabled={resendDisabled}
              type="button"
            >
              {resendDisabled 
                ? `Resend code in ${countdown}s` 
                : "Resend verification code"}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyEmail;
