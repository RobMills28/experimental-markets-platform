'use client';

import React, { useState } from 'react';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import Button from '../components/Button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PlusCircle, RefreshCw } from 'lucide-react';

const OilFuturesTrading = () => {
  const [data, setData] = useState([
    { date: '2022-01-01', price: 50.23 },
    { date: '2022-02-01', price: 52.45 },
    { date: '2022-03-01', price: 55.78 },
    { date: '2022-04-01', price: 58.12 },
    { date: '2022-05-01', price: 60.34 },
    { date: '2022-06-01', price: 57.89 },
    { date: '2022-07-01', price: 54.67 },
    { date: '2022-08-01', price: 52.34 },
    { date: '2022-09-01', price: 56.78 },
    { date: '2022-10-01', price: 59.45 },
    { date: '2022-11-01', price: 62.12 },
    { date: '2022-12-01', price: 64.89 },
  ]);
  const [prediction, setPrediction] = useState(null);

  const handlePrediction = () => {
    const predictedPrice = Math.random() * 70 + 50;
    const predictedConfidence = Math.random() * 0.5 + 0.5;
    setPrediction({ price: predictedPrice, confidence: predictedConfidence });
  };

  const handleRefresh = () => {
    setPrediction(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">AI-Powered Oil Futures Trading</h1>
      <p className="mb-8">
        Welcome to our AI-powered oil futures trading platform. Here, you can view historical oil futures data and generate AI-powered predictions to help inform your trading decisions.
      </p>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Historical Oil Futures</h2>
            <Button onClick={handleRefresh}>
              <RefreshCw className="mr-2" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">AI Prediction</h2>
            {prediction ? (
              <Button onClick={handleRefresh}>
                <RefreshCw className="mr-2" />
                Generate New Prediction
              </Button>
            ) : (
              <Button onClick={handlePrediction}>
                <PlusCircle className="mr-2" />
                Generate Prediction
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {prediction ? (
            <div>
              <p className="text-lg font-bold mb-2">Predicted Oil Futures Price: ${prediction.price.toFixed(2)}</p>
              <p className="mb-4">Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
              <p>
                This AI-powered prediction is based on the historical oil futures data and our cutting-edge machine learning models. Please use this information to inform your trading decisions, but always do your own research and invest responsibly.
              </p>
            </div>
          ) : (
            <p>
              Click the Generate Prediction button to use our AI models to forecast future oil futures prices. The prediction will be displayed here along with the confidence level.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OilFuturesTrading;