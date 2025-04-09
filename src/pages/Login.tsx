
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const Login = () => {
  const { toast } = useToast();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirm, setRegisterConfirm] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Attempted",
      description: "This is a demo. In a real app, you would be logged in now.",
    });
    console.log('Login with:', loginEmail, loginPassword);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerPassword !== registerConfirm) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Registration Successful",
      description: "This is a demo. In a real app, your account would be created.",
    });
    console.log('Register with:', registerName, registerEmail, registerPassword);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-gray-50">
        <div className="w-full max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
                  <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="login-email" className="block text-sm font-medium mb-1">Email</label>
                        <Input 
                          id="login-email" 
                          type="email" 
                          placeholder="name@example.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)} 
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="login-password" className="block text-sm font-medium mb-1">Password</label>
                        <Input 
                          id="login-password" 
                          type="password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember" />
                          <label htmlFor="remember" className="text-sm">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-legal-blue hover:underline">Forgot password?</a>
                      </div>
                      <Button type="submit" className="w-full bg-legal-blue">Login</Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <div className="text-sm text-gray-500">
                    Don't have an account? <a href="#" className="text-legal-blue hover:underline" onClick={() => document.querySelector('[data-value="register"]')?.click()}>Sign up</a>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Create An Account</CardTitle>
                  <CardDescription className="text-center">Sign up for Legal AI to access premium features</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="register-name" className="block text-sm font-medium mb-1">Full Name</label>
                        <Input 
                          id="register-name" 
                          placeholder="John Doe"
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="register-email" className="block text-sm font-medium mb-1">Email</label>
                        <Input 
                          id="register-email" 
                          type="email" 
                          placeholder="name@example.com"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="register-password" className="block text-sm font-medium mb-1">Password</label>
                        <Input 
                          id="register-password" 
                          type="password"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="register-confirm" className="block text-sm font-medium mb-1">Confirm Password</label>
                        <Input 
                          id="register-confirm" 
                          type="password"
                          value={registerConfirm}
                          onChange={(e) => setRegisterConfirm(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <label htmlFor="terms" className="text-sm">I agree to the <Link to="/terms" className="text-legal-blue hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-legal-blue hover:underline">Privacy Policy</Link></label>
                      </div>
                      <Button type="submit" className="w-full bg-legal-blue">Register</Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <div className="text-sm text-gray-500">
                    Already have an account? <a href="#" className="text-legal-blue hover:underline" onClick={() => document.querySelector('[data-value="login"]')?.click()}>Sign in</a>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
