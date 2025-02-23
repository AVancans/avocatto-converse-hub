
import { Badge } from "@/components/ui/badge";

type StatusType = "deploying" | "active" | "failure";

interface FleetDevice {
  id: string;
  name: string;
  agent: string;
  location: string;
  tags: string[];
  status: StatusType;
}

const getStatusColor = (status: StatusType) => {
  switch (status) {
    case "deploying":
      return "bg-orange-500";
    case "active":
      return "bg-blue-500";
    case "failure":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const sampleData: FleetDevice[] = [
  {
    id: "1",
    name: "Edge-01",
    agent: "Voice Assistant v2.1",
    location: "San Francisco, CA",
    tags: ["production", "voice"],
    status: "active",
  },
  {
    id: "2",
    name: "Edge-02",
    agent: "Voice Assistant v2.0",
    location: "New York, NY",
    tags: ["staging", "voice"],
    status: "deploying",
  },
  {
    id: "3",
    name: "Edge-03",
    agent: "Voice Assistant v2.1",
    location: "Austin, TX",
    tags: ["development"],
    status: "failure",
  },
];

const FleetManagement = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Fleet Management</h2>
      <div className="animate-float rounded-2xl border border-white/10 bg-background/40 backdrop-blur-sm transform perspective-1500 rotate-x-10">
        <div className="w-full rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Edge Device</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Agent</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Location</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tags</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((device) => (
                <tr key={device.id} className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">{device.name}</td>
                  <td className="p-4 align-middle">{device.agent}</td>
                  <td className="p-4 align-middle">{device.location}</td>
                  <td className="p-4 align-middle">
                    <div className="flex flex-wrap gap-1">
                      {device.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${getStatusColor(
                          device.status
                        )}`}
                      />
                      <span className="capitalize">{device.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FleetManagement;
