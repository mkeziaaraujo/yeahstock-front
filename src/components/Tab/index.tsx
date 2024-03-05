interface TabItemProps {
  id: string;
  title: string;
}

interface TabProps {
  tabs: TabItemProps[];
  activeId: string;
  onChange: (id: string) => void;
}

export function Tab({ activeId, tabs, onChange }: TabProps) {
  return (
    <div className="flex items-center gap-7 ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-state={activeId === tab.id ? "active" : "inactive"}
          onClick={() => onChange(tab.id)}
          className=" data-[state=active]:text-blue-dark data-[state=active]:border-b-2 data-[state=active]: border-blue-dark text-gray-primary"
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}
