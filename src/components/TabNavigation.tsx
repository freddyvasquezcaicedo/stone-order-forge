interface Tab {
  id: string;
  label: string;
  step: number;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  progress: number;
}

export default function TabNavigation({ tabs, activeTab, onTabChange, progress }: TabNavigationProps) {
  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex bg-muted rounded-lg overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 text-center py-3 px-2 text-sm font-bold cursor-pointer border-r border-border last:border-r-0 transition-colors ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted-foreground/10 text-muted-foreground hover:bg-muted-foreground/20'
            }`}
          >
            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-2 text-xs font-bold ${
              activeTab === tab.id 
                ? 'bg-white text-primary' 
                : 'bg-white text-primary'
            }`}>
              {tab.step}
            </span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="h-1 bg-muted mt-1 relative">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}