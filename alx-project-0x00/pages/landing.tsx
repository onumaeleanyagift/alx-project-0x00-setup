import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small - sm" className="text-sm rounded-sm" />
        <Button title="Small - md" className="text-sm rounded-md" />
        <Button title="Small - lg" className="text-sm rounded-lg" />
        <Button title="Small - full" className="text-sm rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium - sm" className="text-base rounded-sm" />
        <Button title="Medium - md" className="text-base rounded-md" />
        <Button title="Medium - lg" className="text-base rounded-lg" />
        <Button title="Medium - full" className="text-base rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large - sm" className="text-lg rounded-sm" />
        <Button title="Large - md" className="text-lg rounded-md" />
        <Button title="Large - lg" className="text-lg rounded-lg" />
        <Button title="Large - full" className="text-lg rounded-full" />
      </div>
    </div>
  );
};
export default Landing;
