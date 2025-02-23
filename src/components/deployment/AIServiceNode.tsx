
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface AIServiceNodeProps {
  data: { 
    selected: string; 
    onChange: (value: string) => void 
  };
}

export const AIServiceNode = ({ data }: AIServiceNodeProps) => {
  return (
    <div className="p-4">
      <RadioGroup value={data.selected} onValueChange={data.onChange} className="gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="elevenlabs" id="elevenlabs" />
          <Label htmlFor="elevenlabs">ElevenLabs</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="openai" id="openai" />
          <Label htmlFor="openai">OpenAI</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AIServiceNode;
