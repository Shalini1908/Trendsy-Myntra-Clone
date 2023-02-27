import React from "react";
import {Box} from "@chakra-ui/react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Graph = () => {

  const data = [
    {
      name: 'Manyawar',
      instock: 1800,
      priceRange: 2400,
      amt: 400,
    },
    {
      name: 'Jewellery',
      instock: 3000,
      priceRange: 1598,
      amt: 210,
    },
    {
      name: 'Clothing',
      instock: 2000,
      priceRange: 4000,
      amt: 290,
    },
    {
      name: 'Beauty',
      instock:2780,
      priceRange: 3908,
      amt: 700,
    },
  
    {
      name: 'Electronics',
      instock: 2390,
      priceRange: 3800,
      amt: 500,
    },
    {
      name:'Gifts',
    instock: 3490,
      priceRange: 5800,
      amt: 100,
    },
    {
      name: 'Gadgets',
      instock: 3490,
      priceRange: 5000,
      amt: 200,
    },
    {
      name: 'Footwear',
      instock: 3490,
      priceRange: 3200,
      amt: 210,
    }
  ];
  return (
    
    <Box id="boxes"  width="100%" height="100%">
        <ResponsiveContainer >
       <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="instock" stackId="a" fill="#ff3f6c" />
          <Bar dataKey="priceRange"  stackId="a" fill="#ff912e" />
        </BarChart>
        </ResponsiveContainer>
    </Box>
  );
};

export default Graph;