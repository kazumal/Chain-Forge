// src/components/ChainTemplateSelection.js
import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

function ChainTemplateSelection() {
  const handleSelectTemplate = (template) => {
    // Chain template selection関数の実装
  };

  return (
    <div>
      <Typography variant="h4">Chain Template Selection</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">DeFi</Typography>
          <Button onClick={() => handleSelectTemplate("DeFi")}>
            Select DeFi Template
          </Button>
        </CardContent>
      </Card>
      {/* 他のチェーンテンプレートを同様に追加 */}
    </div>
  );
}

export default ChainTemplateSelection;
