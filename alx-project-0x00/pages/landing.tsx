import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small - sm" className="text-sm" styles="rounded-sm" />
        <Button title="Small - md" className="text-sm" styles="rounded-md" />
        <Button
          title="Small - full"
          className="text-sm"
          styles="rounded-full"
        />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium - sm" className="text-base" styles="rounded-sm" />
        <Button title="Medium - md" className="text-base" styles="rounded-md" />
        <Button
          title="Medium - full"
          className="text-base"
          styles="rounded-full"
        />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large - sm" className="text-lg" styles="rounded-sm" />
        <Button title="Large - md" className="text-lg" styles="rounded-md" />
        <Button
          title="Large - full"
          className="text-lg"
          styles="rounded-full"
        />
      </div>
    </div>
  );
};
export default Landing;
