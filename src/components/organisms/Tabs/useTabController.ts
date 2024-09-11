import { useState } from "react";

function useTabController() {
  const [activeTab, setActiveTab] = useState<string>();

  const [tabContents, setTabContents] = useState<Record<string, React.ReactNode>>({});

  const setTab = (tabId?: string) => {
    setActiveTab(tabId);
  }

  return { activeTab, setTab };
}

export { useTabController }