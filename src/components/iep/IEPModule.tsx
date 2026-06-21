import { useState } from "react";
import { IEPDashboard } from "./IEPDashboard";
import { IEPWorkspace } from "./IEPWorkspace";

export function IEPModule({ onNavigate }: { onNavigate?: (nav: string) => void }) {
  const [view, setView] = useState<'dashboard' | 'workspace' | 'preview'>('dashboard');
  const [selectedIep, setSelectedIep] = useState<string | null>(null);

  const handleOpenIep = (id: string) => {
    setSelectedIep(id);
    setView('workspace');
  };

  const handleBackToDashboard = () => {
    setView('dashboard');
    setSelectedIep(null);
  };

  const handleCreateIep = () => {
    // Just a quick way to open the new flow
    setSelectedIep("new");
    setView('workspace');
  };

  if (view === 'dashboard') {
    return <IEPDashboard onOpen={handleOpenIep} onCreate={handleCreateIep} onNavigate={onNavigate} />;
  }

  if (view === 'workspace') {
    return <IEPWorkspace id={selectedIep} onBack={handleBackToDashboard} onNavigate={onNavigate} />;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <p>Unknown view: {view}</p>
    </div>
  );
}
