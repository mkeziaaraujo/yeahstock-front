import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
//import { SideBar } from "./components/SideBar";
import { Input } from "./components/input";
import { Button } from "./components/Button";
import { Tab } from "./components/Tab";
import { useState } from "react";
import { TabView, TypeView } from "./TabView";
import { ProductCard } from "./components/ProductCard";

const tabs = [
  { id: "1", title: "All" },
  { id: "2", title: "Active" },
  { id: "3", title: "Completed" },
];

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [view, setView] = useState<TypeView>(TypeView.COLUMN);
  return (
    <div className="pr-10">
      <header className="flex items-center justify-between mt-10">
        <div className="max-w-96 w-full ">
          <Input
            placeholder="Search for a product"
            startIcon={MagnifyingGlass}
          />
        </div>
        <div className="flex items-center gap-5">
          <Button startIcon={Plus}>Add Product</Button>
          <img
            src="https://avatars.githubusercontent.com/u/129124189?v=4"
            alt="avatar"
            className="h-14 w-14 rounded-full"
          />
        </div>
      </header>

      <main>
        <h1 className="text-white text-2xl font-semibold ">Home</h1>
      </main>

      <div className="mt-10">
        <div className="flex justify-between items-center">
          <Tab tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
          <TabView view={view} onChange={setView} />
        </div>
        <div
          className="grid data-[view=column]:grid-cols-4 gap-6 mt-10"
          data-view={view}
        >
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
          <ProductCard typeView={view} />
        </div>
      </div>
    </div>
  );
}

export default App;
