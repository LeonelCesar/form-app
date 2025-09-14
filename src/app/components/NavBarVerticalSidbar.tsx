import React, { useState } from "react";

type Item = { id: string; label: string; href: string; icon?: React.ReactNode };

const nav: Item[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: <svg className="w-5 h-5" /*...*/ /> },
  { id: "projects", label: "Projetos", href: "/dashboard/projects", icon: <svg className="w-5 h-5" /*...*/ /> },
  { id: "finances", label: "Finanças", href: "/dashboard/finances", icon: <svg className="w-5 h-5" /*...*/ /> },
];

 function NavBarVerticalSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-white border-r transition-all h-screen ${collapsed ? "w-16" : "w-64"}`}
      aria-label="Sidebar"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 h-16">
          {!collapsed ? <span className="font-semibold">FreelaFlow</span> : <span className="sr-only">FreelaFlow</span>}
          <button
            onClick={() => setCollapsed((c) => !c)}
            aria-pressed={collapsed}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            title={collapsed ? "Expandir" : "Recolher"}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-1 space-y-1" aria-label="Main">
          {nav.map((n) => (
            <a
              key={n.id}
              href={n.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                collapsed ? "justify-center" : ""
              }`}
            >
              <span className="w-5 h-5">{n.icon ?? <DefaultIcon />}</span>
              {!collapsed && <span className="text-sm">{n.label}</span>}
            </a>
          ))}
        </nav>

        <div className="px-3 py-4 border-t">
          {!collapsed ? (
            <div className="text-sm">
              <div>Logado como</div>
              <div className="font-medium">Leonel César</div>
            </div>
          ) : (
            <button className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">⚙️</button>
          )}
        </div>
      </div>
    </aside>
  );
}

export default NavBarVerticalSidebar;

function DefaultIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="3" strokeWidth="2" />
      <path d="M19.4 15a7 7 0 0 0 0-6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
