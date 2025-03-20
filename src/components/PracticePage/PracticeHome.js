import { darkTheme } from "../../utils/Themes";
import AlertsComponent from "./AlertsComponent";
import CardComponent from "./CardComponent";
import DragAndDrop from "./DragAndDrop";
import FormComponent from "./FormComponent";
import ModalComponent from "./ModalComponent";
import TabsComponent from "./TabComponent";
import ToggleComponent from "./ToggleComponent";

const PracticeHome = () => {
  return (
    <div theme={darkTheme} className="min-h-screen flex flex-col items-center justify-cente p-6">
      {/* Form Section */}
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-violet-700 text-transparent bg-clip-text shadow-xl">ADVANCED AUTOMATION PRACTICE PAGE</h1>
      <div className="flex gap-6 w-full max-w-6xl mb-6">
        <div className="flex-1 p-6  rounded-lg shadow-lg">
          <FormComponent />
        </div>
        <div className="flex-1 p-6  rounded-lg shadow-lg">
        <ToggleComponent />
        </div>
      </div>

      {/* Drag & Drop + Toggle Section */}
      <div className="flex gap-4 w-full max-w-3xl mb-6">
        <div className="flex-1 p-6 rounded-lg shadow-lg">
          <DragAndDrop />
        </div>
      </div>

      {/* Modal, Tabs, and Card Section */}
      <div className="p-6 w-full max-w-md  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <ModalComponent />
        <div className="mt-4">
          <TabsComponent />
        </div>
        <div className="mt-4">
          <CardComponent />
        </div>
        <div className="mt-4">
          <AlertsComponent />
        </div>
      </div>
    </div>
  );
};

export default PracticeHome;
