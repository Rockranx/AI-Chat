import { useTheme } from "./ThemeContext";

export default function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <>
      {" "}
      <select
        className="p-2 rounded bg-theme-bg text-theme-primary"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes.map((t) => (
          <>
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          </>
        ))}
      </select>
      <div data-radix-popper-content-wrapper="" dir="ltr" className="">
        <div
          data-side="bottom"
          data-align="end"
          role="menu"
          aria-orientation="vertical"
          data-state="open"
          data-radix-menu-content=""
          dir="ltr"
          id="radix-«r4»"
          aria-labelledby="radix-«r3»"
          className="popper2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-48"
          tabIndex="-1"
          data-orientation="vertical"
        >
          <div
            role="menuitem"
            className="relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-3"
            tabIndex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <div className="flex gap-1">
              <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: "rgb(22, 162, 73);" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: " rgb(22, 162, 73);" }}
              ></div>
            </div>
            <span className="flex-1">Calming Green</span>
          </div>
          <div
            role="menuitem"
            className="relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-3"
            tabIndex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <div className="flex gap-1">
              <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: " rgb(13, 162, 231)" }}
              ></div>
              {/* <div
                className="w-3 h-3 rounded-full border"
                style="background-color: rgb(13, 162, 231);"
              ></div> */}
            </div>
            <span className="flex-1">Ocean Blue</span>
          </div>
          <div
            role="menuitem"
            className="relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-3"
            tabIndex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <div className="flex gap-1">
              <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: " rgb(246, 103, 60)" }}
              ></div>
              {/* <div
                className="w-3 h-3 rounded-full border"
                style="background-color: rgb(233, 32, 99);"
              ></div> */}
            </div>
            <span className="flex-1">Warm Sunset</span>
          </div>
          <div
            role="menuitem"
            className="relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-3"
            tabIndex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <div className="flex gap-1">
              <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: " rgb(54, 211, 153)" }}
              ></div>
              {/* <div
                className="w-3 h-3 rounded-full border"
                style="background-color: rgb(54, 211, 153);"
              ></div> */}
            </div>
            <span className="flex-1">Deep Forest</span>
          </div>
          <div
            role="menuitem"
            className="relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-3"
            tabIndex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <div className="flex gap-1">
              <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: "rgb(124, 59, 237)" }}
              ></div>
              {/* <div
                className="w-3 h-3 rounded-full border"
                style="background-color: rgb(124, 59, 237);"
              ></div> */}
            </div>
            <span className="flex-1">Soft Lavender</span>
            <span style={{ color: " hsl(var(--theme-primary))" }}>✓</span>
          </div>
          <div
            role="menuitem"
            className="relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-3"
            tabIndex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <div className="flex gap-1">
              <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: "rgb(101, 112, 134)" }}
              ></div>
              {/* <div
                className="w-3 h-3 rounded-full border"
                style="background-color: rgb(101, 112, 134);"
              ></div> */}
            </div>
            <span className="flex-1">Minimal Gray</span>
          </div>
        </div>
      </div>
    </>
  );
}
