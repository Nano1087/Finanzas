const fetch = require('node-fetch');

// Tu clave de API de YNAB
const API_KEY = 'TU_API_KEY';
const BASE_URL = 'https://api.youneedabudget.com/v1';

// Función para obtener presupuestos
const getBudgets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/budgets`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data.budgets;
  } catch (error) {
    console.error('Error al obtener presupuestos:', error.message);
  }
};

// Función principal para mostrar presupuestos
const main = async () => {
  const budgets = await getBudgets();
  if (budgets) {
    console.log('Presupuestos:', budgets);
  }
};

main();
