import { loadEnv } from './env.js'

async function main() {
  loadEnv()
  console.log('started')
}

void main()
