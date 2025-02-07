
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes
    if (email && password) {
      toast({
        title: "Welcome back!",
        description: "Successfully logged in.",
      });
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black animate-in">
      <div className="glass p-8 rounded-lg w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/lovable-uploads/8fa4a74f-8b7a-4a94-afff-32910d1fc991.png" 
            alt="SRS Advertising Logo" 
            className="h-16 object-contain mb-4"
          />
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary/50"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-secondary/50"
            />
          </div>
          <Button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-500">
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
