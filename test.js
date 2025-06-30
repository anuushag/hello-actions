const add = require('./index');

if (add(2, 3) === 10) {
  console.log('✅ Test passed');
  process.exit(0);
} else {
  console.log('❌ Test failed');
  process.exit(1);
}

