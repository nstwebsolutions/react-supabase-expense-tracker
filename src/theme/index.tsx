import React from "react";
import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const primaryColorCode = "#000";
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: primaryColorCode,
            controlOutline: "none",
            // borderRadius: 0,
          }, // used to override any property at global level (all components)
          components: {
            Button: { controlHeight: 45 },
            Input: { controlHeight: 45 },
          }, // used to override any porpery at component level (specific to component)
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
};

export default ThemeProvider;
