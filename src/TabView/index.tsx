import { Columns, List } from "@phosphor-icons/react/dist/ssr";

export enum TypeView {
  COLUMN = "column",
  ROW = "row",
}
interface TabViewProps {
  view: TypeView;
  onChange: (view: TypeView) => void;
}
export function TabView({ view, onChange }: TabViewProps) {
  return (
    <div className="h-8 w-fit p-1 bg-[#242424] border border-black-light rounded-md flex items-center gap-2">
      <button
        data-state={view}
        className="text-gray-primary w-6 h-6 flex items-center justify-center data-[state=column]:text-white  data-[state=column]:bg-black-light data-[state=column]= p-1 data-[state=column]:rounded"
        onClick={() => onChange(TypeView.COLUMN)}
      >
        <Columns size={16} />
      </button>
      <button
        data-state={view}
        className="text-gray-primary w-6 h-6 flex items-center justify-center data-[state=row]:text-white  data-[state=row]:bg-black-light data-[state=row]= p-1 data-[state=row]:rounded"
        onClick={() => onChange(TypeView.ROW)}
      >
        <List size={16} />
      </button>
    </div>
  );
}
