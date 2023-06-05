
import '@/assets/css/vars.css';

console.log('plugin!');

export default defineNuxtPlugin({
  name: 'plugin',
  enforce: 'pre', // or 'post'
});
