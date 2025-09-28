import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// Função para simular atraso, útil para exibir Loader
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Retorna a lista completa de produtos
export async function getAllGoods(): Promise<Good[]> {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    await wait(500); // delay artificial para mostrar Loader

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

// Retorna os 5 primeiros produtos ordenados por nome
export async function getFirstFiveSortedByName(): Promise<Good[]> {
  try {
    const goods = await getAllGoods();

    return [...goods]
      .sort((a, b) =>
        (a.name ?? '').toString().localeCompare((b.name ?? '').toString()),
      )
      .slice(0, 5);
  } catch {
    return [];
  }
}

// Retorna apenas os produtos vermelhos
export async function getRedGoods(): Promise<Good[]> {
  try {
    const goods = await getAllGoods();

    return goods.filter(
      g => (g.color ?? '').toString().toLowerCase() === 'red',
    );
  } catch {
    return [];
  }
}
