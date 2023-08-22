import React from "react";
import {
Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const data = [
  {
    owner: "例①（駅の最寄りでの駐輪場運営）",
    group1: {
      count: 10,
      operatingRate: 80,
      usageFee: 100,
      revenue: 24000,
    },
    group2: {
      monthlyControl: 120,
      vehicleCount: 10,
      averageCollectFee: 6000,
      revenue: 60000,
    },
    monthlyRevenue: 84000,
  },
  {
    owner: "例②（自宅の空きスペースを活用した駐輪場運営）",
    group1: {
      count: 15,
      operatingRate: 90,
      usageFee: 120,
      revenue: 10000,
    },
    group2: {
      monthlyControl: 8,
      vehicleCount: 40,
      averageCollectFee: 180,
      revenue: 10000,
    },
    monthlyRevenue: 60000,
  },
];

function MFCOwnerSimulator() {
  return (
    <>
      {data.map((item, index) => (
        <Stack spacing={2} key={index} style={{ margin: "30px 0" }}>
          <Typography variant="h6">{item.owner}</Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="subtitle1" fontWeight="bold">駐輪場運営収益</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>駐車・駐輪台数</TableCell>
                  <TableCell>{item.group1.count}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>稼働率</TableCell>
                  <TableCell>{item.group1.operatingRate + "%"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>利用料単価</TableCell>
                  <TableCell>{item.group1.usageFee + "円"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>月間収益</TableCell>
                  <TableCell>{item.group1.revenue + "円"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="subtitle1" fontWeight="bold">不正駐輪取締</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>月間取締台数</TableCell>
                  <TableCell>{item.group2.monthlyControl}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>車室数</TableCell>
                  <TableCell>{item.group2.vehicleCount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>平均徴収単価</TableCell>
                  <TableCell>{item.group2.averageCollectFee + "円"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>月間収益</TableCell>
                  <TableCell>{item.group2.revenue + "円"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">月間収益合計</Typography>
                  </TableCell>
                  <TableCell>{item.monthlyRevenue + "円"}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      ))}
    </>
  );
}

export default MFCOwnerSimulator;