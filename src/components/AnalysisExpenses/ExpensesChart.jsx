import { Bar } from "react-chartjs-2";

const ExpensesChart = ({ data, total }) => {
  // Формируем данные для Chart.js
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: `Расходы: ${total.toLocaleString()} ₽`,
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderRadius: 12, // Скругление углов столбцов
        barThickness: 94, // Ширина столбцов
      },
    ],
  };

  // Настройки внешнего вида
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Скрываем легенду
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed.y;
            return value > 0 ? `${value.toLocaleString()} ₽` : "0 ₽";
          },
        },
      },
      datalabels: {
        color: "#000",
        font: {
          weight: 600,
          size: 16,
        },
        formatter: (value) => {
          return value > 0 ? `${value.toLocaleString()} ₽` : "";
        },
        anchor: "end", // Привязываем к концу столбца (верху)
        align: "top", // Выравниваем по верху
        offset: 12, // Небольшой отступ сверху
      },
    },
    scales: {
      x: {
        display: true,
        grid: { display: false }, // Убираем вертикальные линии сетки
        ticks: {
          color: "#000",
          font: { size: 14, weight: 400 },
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        display: false,
        grid: { display: false }, // Убираем горизонтальные линии сетки
        ticks: {
          display: false,
        },
        beginAtZero: true, // Ось Y начинается с 0
      },
    },
  };

  return (
    <div style={{ height: "400px", padding: "0" }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ExpensesChart;
