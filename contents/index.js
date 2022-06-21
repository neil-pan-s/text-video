export default {
  poems: () => import('./poem.json'),
  jokes: () => import('./jokes.json'),
  mottos: () => import('./motto.json'),
  lyrics: () => import('./lyric.json'),
}