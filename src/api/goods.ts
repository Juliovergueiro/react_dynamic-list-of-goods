import { Good } from '../types/Good';

// Único endpoint do servidor — carrega TODOS os goods
const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(res => {
    if (!res.ok) {
      throw new Error('Failed to load goods');
    }

    return res.json();
  });
}

// Carrega todos, ordena por nome (A→Z) e retorna os 5 primeiros
export function get5First(): Promise<Good[]> {
  return getAll().then(goods => {
    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  });
}

// Carrega todos e filtra apenas os vermelhos
export function getRedGoods(): Promise<Good[]> {
  return getAll().then(goods => {
    return goods.filter(g => g.color.toLowerCase() === 'red');
  });
}
