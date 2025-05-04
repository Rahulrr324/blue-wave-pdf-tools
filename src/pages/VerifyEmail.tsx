
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Layout from '../components/Layout';

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = Array(6).fill(0).map(() => React.createRef<HTMLInputElement>());
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const email = location.state?.email;
  
  useEffect(() => {
    // Focus first input on component mount
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
    
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

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste event
      const pastedValue = value.slice(0, 6);
      const newVerificationCode = [...verificationCode];
      
      for (let i = 0; i < pastedValue.length && index + i < 6; i++) {
        if (/^[0-9]$/.test(pastedValue[i])) {
          newVerificationCode[index + i] = pastedValue[i];
        }
      }
      
      setVerificationCode(newVerificationCode);
      
      // Focus the next empty input or the last input
      for (let i = 0; i < 6; i++) {
        if (newVerificationCode[i] === '' && inputRefs[i].current) {
          inputRefs[i].current!.focus();
          break;
        } else if (i === 5) {
          inputRefs[5].current!.focus();
        }
      }
    } else if (/^[0-9]$/.test(value) || value === '') {
      // Handle single digit input
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
      
      // Automatically focus next input
      if (value && index < 5 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current!.focus();
      }
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move focus to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      if (inputRefs[index - 1].current) {
        inputRefs[index - 1].current!.focus();
      }
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join('');
    
    if (code.length !== 6 || !/^\d+$/.test(code)) {
      toast({
        title: "Invalid code format",
        description: "Please enter all 6 digits of your verification code.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check verification code
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((user: any) => 
        user.email === email && user.verificationCode === code
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
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Enter Verification Code
              </label>
              <div className="flex justify-between gap-2">
                {verificationCode.map((digit, index) => (
                  <Input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl"
                    autoComplete="one-time-code"
                  />
                ))}
              </div>
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
