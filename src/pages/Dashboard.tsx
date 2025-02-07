
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, FileText, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          toast({
            title: "Location Error",
            description: "Unable to get your location",
            variant: "destructive",
          });
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-6 animate-in">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Attendance</h2>
            </div>
            {location && (
              <p className="text-sm text-muted-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Located at {location.lat.toFixed(2)}, {location.lng.toFixed(2)}
              </p>
            )}
            <Button variant="secondary" className="w-full">
              Check In
            </Button>
          </Card>

          <Card className="glass p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Quotations</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Generate and manage quotes
            </p>
            <Button variant="secondary" className="w-full">
              New Quote
            </Button>
          </Card>

          <Card className="glass p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <Send className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Designer Tasks</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Send projects to design team
            </p>
            <Button variant="secondary" className="w-full">
              Send Project
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
