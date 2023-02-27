import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import Header from '../sections/Header';
import { faker } from '@faker-js/faker';
ChartJS.register(
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Filler
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Statistika',
    },
  },
};
const fak = faker.datatype.number({ min: 400, max: 500 });
const fak2 = faker.datatype.number({ min: 100, max: 150 });
const fak3 = faker.datatype.number({ min: 200, max: 400 });
export const data = {
  labels: ['edo.ijro.uz', 'e-xat', 'e-huquqshunos'],
  datasets: [
    {
      label: 'Foydalanuvchilar soni:',
      data: [fak, fak2, fak3],
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',

        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 2,
    },
  ],
};

export default function InfoPage() {
  return (
    <>
      <Header />
      <div className="flex  text-center justify-center pt-10  px-4 sm:px-6 flex-col lg:flex-row">
        <Bar
          className="max-h-96 max-w-screen-sm"
          options={options}
          data={data}
        />
        <Doughnut className="max-h-96 max-w-screen-sm" data={data} />
      </div>
    </>
  );
}

const labels = [
  'Yan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Iyun',
  'Iyul',
  'Aug',
  'Sep',
  'Okt',
  'Noy',
  'Dek',
];

export const data2 = {
  labels,
  datasets: [
    {
      fill: false,
      label: 'ijro.gov.uz',
      data: labels.map(() =>
        faker.datatype.number({ min: 1800, max: 2500, precision: 10 })
      ),
      borderColor: 'rgb(60, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'lawyer.ijro.uz',
      data: labels.map(() =>
        faker.datatype.number({ min: 1800, max: 2000, precision: 10 })
      ),
      borderColor: 'rgba(255, 99, 132)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineStat() {
  return (
    <div className="flex  text-center justify-center pt-10  px-4 sm:px-6 flex-col lg:flex-row">
      <Line
        className="max-h-96 max-w-screen-sm"
        options={options}
        data={data2}
      />
    </div>
  );
}
